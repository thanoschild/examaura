import { sendEmail, createContactFormEmailHtml } from '@/lib/email';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // Input validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        console.log("email: ", email);
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please provide a valid email address' },
                { status: 400 }
            );
        }

        // Create HTML content using the new function
        const htmlContent = createContactFormEmailHtml({
            name,
            email,
            message
        });

        // Send email
        await sendEmail({
            to: process.env.CONTACT_EMAIL!, // Add this to your .env file
            subject: `Contact Form: Message from ${name}`,
            html: htmlContent
        });

        // Send auto-reply to user
        await sendEmail({
            to: email,
            subject: 'Thank you for contacting ExamAura',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h2 style="color: #333;">Thank You for Reaching Out!</h2>
                    <p>Dear ${name},</p>
                    <p>We've received your message and will get back to you as soon as possible.</p>
                    <p>Best regards,<br>The ExamAura Team</p>
                </div>
            `
        });

        return NextResponse.json({
            success: true,
            message: 'Message sent successfully'
        });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again later.' },
            { status: 500 }
        );
    }
} 