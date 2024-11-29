import db from "@/lib/db"; 
import { NextResponse } from "next/server";
import { RowDataPacket } from "mysql2";

interface Topic extends RowDataPacket {
    id: number;
    topic_name: string;
    total_qn: number;
    last_update_date: Date;
}

export async function GET() {
    try {
        // Query to fetch all topics
        const [topics] = await db.query<Topic[]>("SELECT * FROM topics");

        return NextResponse.json(topics);
    } catch (error) {
        console.error("Error fetching topics:", error);
        return NextResponse.json({ error: "Failed to fetch topics" }, { status: 500 });
    }
}