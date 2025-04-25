import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message, to } = body;

    // Simple, reliable configuration for Hostinger
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || 'hi@emoviral.com',
        pass: process.env.SMTP_PASSWORD || '',
      },
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
      from: `"Website Kontaktformular" <hi@emoviral.com>`,
      to: to || 'hi@emoviral.com',
      subject: `Neue Anfrage: ${service} - von ${name}`,
      text: emailContent,
      replyTo: email
    });
    
    // Return success immediately without waiting for confirmation email
    // This speeds up the response time significantly
    
    // Send confirmation email in the background
    transporter.sendMail({
      from: `"EmoViral" <hi@emoviral.com>`,
      to: email,
      subject: 'Bestätigung: Ihre Anfrage wurde erhalten',
      text: `
      Sehr geehrte(r) ${name},
      
      vielen Dank für Ihre Kontaktaufnahme. Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.
      
      Hier ist eine Kopie Ihrer Anfrage:
      ------------------------
      Dienstleistung: ${service}
      
      Ihre Nachricht:
      ${message}
      ------------------------
      
      Mit freundlichen Grüßen
      Ihr EmoViral Team
      `
    }).catch(error => {
      console.error('Error sending confirmation email:', error);
      // Ignore error for confirmation email - main email was already sent
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}