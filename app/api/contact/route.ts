import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message, to } = body;
    
    // Create a transporter using Hostinger SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER || 'hi@emoviral.com',
        pass: process.env.SMTP_PASSWORD
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
    
    // Create promise for the first email
    const adminEmailPromise = transporter.sendMail({
      from: `"Website Kontaktformular" <${process.env.SMTP_USER || 'hi@emoviral.com'}>`,
      to: to || 'hi@emoviral.com',
      subject: `Neue Anfrage: ${service} - von ${name}`,
      text: emailContent,
      replyTo: email
    });
    
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
    
    // Create promise for the second email
    const customerEmailPromise = transporter.sendMail({
      from: `"EmoViral" <${process.env.SMTP_USER || 'hi@emoviral.com'}>`,
      to: email,
      subject: 'Bestätigung: Ihre Anfrage wurde erhalten',
      text: confirmationEmail
    });
    
    // Wait for both emails to be sent
    await Promise.all([adminEmailPromise, customerEmailPromise]);
    
    // Return success response with proper headers
    return new NextResponse(
      JSON.stringify({ success: true, message: 'Emails sent successfully' }), 
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
    
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Return error response with proper headers
    return new NextResponse(
      JSON.stringify({ success: false, message: 'Failed to send email' }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}