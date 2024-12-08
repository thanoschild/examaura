import React from "react";
import Header from "@/app/components/header/header";
import QuestionList from "./QuestionList";

type QuestionOption = {
  option_key: string; // A, B, C, D
  option_text: string;
  image_url?: string; 
};

type Question = {
  id: number;
  topic: string;
  question_no: string;
  image_url: string;
  question_text: string;
  correct_answer: string;
  reason: string;
  options: QuestionOption[];
  question_image: string;
};

const TopicId = async ({ params }: { params: Promise<{ tid: string }> }) => {
  const { tid } = (await params);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/questions/${tid}`,{
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Fetch Error:", {
      status: res.status,
      statusText: res.statusText,
      errorDetails: errorText,
    });
    throw new Error(`Failed to fetch questions: ${res.status}`);
  }

  const questions: Question[] = await res.json();

  return (
    <>
      <Header />
      <QuestionList questions={questions} />
    </>
  );
};

export default TopicId;
