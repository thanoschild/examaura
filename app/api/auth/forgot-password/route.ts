import db from "@/lib/db";
import { NextResponse } from "next/server";
import crypto from 'crypto';
import { sendEmail, createPasswordResetEmailHtml } from "@/lib/email";
import { RowDataPacket } from "mysql2";

interface User extends RowDataPacket {
    uid: number;
    uemail: string;
    upassword: string | null;
    provider: string;
}

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        // check if user exists
        const [existingUser] = await db.query<User[]>(
            "SELECT * FROM Users WHERE uemail = ?",
            [email]
        );

        // if no user exisit ask for sign up
        if (existingUser.length === 0) {
            return NextResponse.json(
                { error: "No user found. Please sign up" },
                { status: 404 }
            );
        }

        // Generate reset token
        const resetToken = crypto.randomBytes(32).toString('hex');
        const tokenExpiry = new Date(Date.now() + 3600000); // 1 hour from now

        // Save token in database
        await db.query(`
            UPDATE Users 
            SET resetToken = ?,
                resetTokenExpiry = ?
            WHERE uemail = ?
            `,
            [resetToken, tokenExpiry, email]
        );
 
        // create reset url
        const resetUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password/${resetToken}`;

        // Send email using template
        await sendEmail({
            to: email,
            subject: 'Password Reset Request',
            html: createPasswordResetEmailHtml(resetUrl)
        });

        return NextResponse.json({ 
            message: "Password reset link sent to email" 
        });

    } catch(error) {
        console.error('Password reset error: ', error);
        return NextResponse.json(
            {error: "Failed to send reset email"},
            {status: 500}
        );
    }
}