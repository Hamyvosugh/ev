import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message, to } = body;
    
    // Create a transporter using Hostinger SMTP settings with enhanced options
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // true for 465
      auth: {
        user: process.env.SMTP_USER || 'hi@emoviral.com',
        pass: process.env.SMTP_PASSWORD || 'your-hostinger-password'
      },
      tls: {
        // This helps with certificate validation issues
        rejectUnauthorized: false
      },
      debug: true // Enable debug output
    });
    
    // Simple verification of connection
    await transporter.verify().catch((err: Error) => {
      console.error('Transporter verification failed:', err);
      throw new Error(`SMTP Connection Error: ${err.message}`);
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
    const mainEmailResult = await transporter.sendMail({
      from: `"Website Kontaktformular" <${process.env.SMTP_USER || 'hi@emoviral.com'}>`,
      to: to || 'hi@emoviral.com',
      subject: `Neue Anfrage: ${service} - von ${name}`,
      text: emailContent,
      replyTo: email
    }).catch((err: Error) => {
      console.error('Error sending main email:', err);
      throw new Error(`Failed to send main email: ${err.message}`);
    });
    
    console.log('Main email sent:', mainEmailResult);
    
    // Send confirmation email to the customer
    const confirmationEmail = `
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
    `;
    
    const confirmEmailResult = await transporter.sendMail({
      from: `"EmoViral" <${process.env.SMTP_USER || 'hi@emoviral.com'}>`,
      to: email,
      subject: 'Bestätigung: Ihre Anfrage wurde erhalten',
      text: confirmationEmail
    }).catch((err: Error) => {
      console.error('Error sending confirmation email:', err);
      console.warn('Main email was sent, but confirmation failed');
      // Don't throw here to allow partial success
    });
    
    if (confirmEmailResult) {
      console.log('Confirmation email sent:', confirmEmailResult);
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    // Simplified error handling that's TypeScript-compliant
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { error: 'Failed to send email', details: errorMessage },
      { status: 500 }
    );
  }
}