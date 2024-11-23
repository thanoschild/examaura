import { NextResponse } from 'next/server';
import db from "@/lib/db";

export async function GET() {
  try {
    const [users] = await db.query('SELECT * FROM Users');
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
} 