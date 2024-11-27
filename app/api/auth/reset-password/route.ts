import db from "@/lib/db";
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { RowDataPacket } from 'mysql2';


interface User extends RowDataPacket {
    uid: number;
    uemail: string;
    upassword: string | null;
    resetToken: string | null;
    resetTokenExpiry: Date | null;
}

export async function POST(req: Request) {
    try {
        const {token, newPassword} = await req.json();
        console.log("token: ", token);
        console.log("date: ", new Date());

        // Find user with valid token that hasn't expired
        const [users] = await db.query<User[]>(
            "SELECT * FROM Users WHERE resetToken = ? AND resetTokenExpiry > ?",
            [token, new Date()]
        );

        if(users.length === 0 || users.length > 1) {
            return NextResponse.json(
                {error: "Invalid or expired reset token"},
                {status: 400}
            );
        }

        // hashed the newPassword and update the db with hashed password make resetToken and resetTokenExpiry col null
        const user = users[0];
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await db.query(
            `UPDATE Users 
               SET upassword = ?,
                   resetToken = NULL,
                   resetTokenExpiry = NULL
            WHERE uid = ?
            `,
            [hashedPassword, user.uid]
        );

        return NextResponse.json(
            {message: "Password reset successful"},
            {status: 201}
        );
    } catch(error) {
        console.error("Reset password error:", error);
        return NextResponse.json(
            { error: "Failed to reset password" },
            { status: 500 }
        );
    }
}