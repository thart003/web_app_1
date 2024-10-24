import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailgun';
import { getWelcomeEmailContent } from '@/lib/email-templates';
import { db } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword: password, // Remember to hash the password in production!
      },
    });

    // Send welcome email
    const welcomeEmail = getWelcomeEmailContent({ email, name });
    await sendEmail({
      to: email,
      ...welcomeEmail,
    });

    return NextResponse.json({ 
      message: 'User registered successfully' 
    });

  } catch (error) {
    console.error('Registration failed:', error);
    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    );
  }
}