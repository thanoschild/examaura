import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

interface EmailPayload {
    to: string;
    subject: string;
    html: string
}

export async function sendEmail({to, subject, html} : EmailPayload) {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            html
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email send: ", info.messageId);
        return {sucess: true, messageId: info.messageId}
    } catch(error) {
        console.error("Error sending email: ", error);
        throw new Error('Failed to send email');
    }
}

export function createPasswordResetEmailHtml(resetUrl: string) {
    return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Password Reset Request</h2>
            <p>You requested to reset your password. Click the button below to reset it:</p>
            <div style="text-align: center; margin: 30px 0;">
                <a href="${resetUrl}" 
                   style="background-color: #007bff; 
                          color: white; 
                          padding: 12px 24px; 
                          text-decoration: none; 
                          border-radius: 4px;
                          display: inline-block;">
                    Reset Password
                </a>
            </div>
            <p>If you didn't request this, you can safely ignore this email.</p>
            <p>This link will expire in 1 hour.</p>
            <hr style="border: 1px solid #eee; margin: 20px 0;">
            <p style="color: #666; font-size: 12px;">
                If the button doesn't work, copy and paste this link into your browser:
                <br>
                ${resetUrl}
            </p>
        </div>
    `;
}