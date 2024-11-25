import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'
import db from "@/lib/db";
import { RowDataPacket } from 'mysql2';

interface Users extends RowDataPacket {
    uid: number;
    uemail: string;
    upassword: string;
    ucreatedAt: Date
}

export async function POST(request: Request) {
    const { email, password, confirmPassword } = await request.json();

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    if (!email || !password || !confirmPassword) {
        return NextResponse.json(
            { message: "All fields are required" },
            { status: 400 }
        )
    }

    if (!validateEmail(email)) {
        return NextResponse.json(
            { message: "Invalid email format" },
            { status: 400 }
        )
    }

    if (password.length < 6) {
        return NextResponse.json(
            { message: "password must be at least 6 character long" },
            { status: 400 }
        )
    }

    if (password !== confirmPassword) {
        return NextResponse.json(
            { message: "password do not match" },
            { status: 400 }
        )
    }

    try {
        const checkUserQuery = `
            SELECT * FROM Users WHERE uemail = ?
        `;
        const [rows] = await db.query<Users[]>(checkUserQuery, [email]);

        if (Array.isArray(rows) && rows.length > 0) {
            return NextResponse.json(
                { message: "User already exists, Please sign-in" },
                { status: 409 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const query = `
            INSERT INTO Users (uemail, upassword) 
            VALUES (?, ?)
        `;
        await db.query(query, [email, hashedPassword]);

        return NextResponse.json(
            { message: "User created successfully" },
            { status: 201 });
    } catch (error: any) {
        console.error("Database error:", error);

        return NextResponse.json(
            { message: "Error creating user" },
            { status: 500 }
        );
    }
}