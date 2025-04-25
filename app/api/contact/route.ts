import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message, to } = body;

    // Use a direct configuration without any environment variables
    // to eliminate any potential issues with environment variable loading
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: 'hi@emoviral.com',
        pass: 'your-actual-password-here' // Replace with your actual password for testing
      }
    });
    
    // Email template with professional German formatting
    const emailContent = `
    Neue Kontaktanfrage von ${name}
    
    ============================
    KONTAKTDATEN
    ============================
    Name: ${name}
    E-Mail: ${email}
    Autohaus/Firma: ${company || 'Nicht angegeben'}
    Telefon: ${phone || 'Nicht angegeben'}
    
    ============================
    ANFRAGE DETAILS
    ============================
    Gewünschte Dienstleistung: ${service}
    
    Nachricht:
    ${message}
    
    ============================
    
    Diese Nachricht wurde automatisch über das Kontaktformular Ihrer Website generiert.
    `;
    
    // Send email to your address (hi@emoviral.com)
    await transporter.sendMail({
      from: '"Website Kontaktformular" <hi@emoviral.com>',
      to: to || 'hi@emoviral.com',
      subject: `Neue Anfrage: ${service} - von ${name}`,
      text: emailContent,
      replyTo: email
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}