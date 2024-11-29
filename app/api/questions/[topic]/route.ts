import db from "@/lib/db";
import { NextResponse } from "next/server";
import { RowDataPacket } from "mysql2";

interface Question extends RowDataPacket {
    id: number;
    topic: string;
    question_no: string;
    question_image: string;
    question_text: string;
    correct_answer: string;
    reason: string;
}

interface QuestionOption extends RowDataPacket {
    id: number;
    question_id: number;
    option_key: string; // A, B, C, D
    option_text: string;
    option_image: string; 
}

type TransformedQuestion = {
    id: number;
    topic: string;
    question_no: string;
    question_image: string;
    question_text: string;
    correct_answer: string;
    reason: string;
    options: {
        option_key: string;
        option_text: string;
        option_image: string;
    }[];
}

export async function GET(req: Request, { params }: { params: { topic: string } }) {
    const topic = params.topic.replaceAll('-', ' ');
    console.log("topic: ", topic);

    try {
        // Query to fetch questions along with their options for the specified topic
        const [rawQuestions] = await db.query<Question[]>(
            `SELECT q.*, o.option_key, o.option_text, o.option_image
             FROM questions q
             LEFT JOIN question_options o ON q.id = o.question_id
             WHERE LOWER(q.topic) = ?`,
            [topic]
        );

        if (rawQuestions.length === 0) {
            return NextResponse.json({ error: 'No questions found' }, { status: 404 });
        }
        console.log("data: ", [rawQuestions])

        const groupedQuestions = rawQuestions.reduce((acc, curr) => {
            // Find existing question or create new
            let question = acc.find(q => q.id === curr.id);
            
            if (!question) {
                question = {
                    id: curr.id,
                    topic: curr.topic,
                    question_no: curr.question_no,
                    question_image: curr.question_image || '',
                    question_text: curr.question_text,
                    correct_answer: curr.correct_answer,
                    reason: curr.reason || '',
                    options: []
                };
                acc.push(question);
            }

            // Add option if not already exists
            const optionExists = question.options.some(opt => opt.option_key === curr.option_key);
            if (!optionExists) {
                question.options.push({
                    option_key: curr.option_key,
                    option_text: curr.option_text,
                    option_image: curr.option_image || ''
                });
            }

            return acc;
        }, [] as TransformedQuestion[]);
    
        return NextResponse.json(groupedQuestions);
    } catch (error) {
        console.error('Error fetching questions:', error);
        return NextResponse.json({ error: 'Failed to fetch questions' }, { status: 500 });
    }
}