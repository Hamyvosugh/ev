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
      },
      // Add connection timeout options
      connectionTimeout: 5000, // 5 seconds
      greetingTimeout: 5000,   // 5 seconds
      socketTimeout: 5000      // 5 seconds
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
    
    // IMPORTANT: Send emails in the background without waiting for them to complete
    // This ensures the API responds quickly to the client
    const sendEmailsInBackground = async () => {
      try {
        // Send email to admin
        await transporter.sendMail({
          from: `"Website Kontaktformular" <${process.env.SMTP_USER || 'hi@emoviral.com'}>`,
          to: to || 'hi@emoviral.com',
          subject: `Neue Anfrage: ${service} - von ${name}`,
          text: emailContent,
          replyTo: email
        });
        
        // Send confirmation email to customer
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
        
        await transporter.sendMail({
          from: `"EmoViral" <${process.env.SMTP_USER || 'hi@emoviral.com'}>`,
          to: email,
          subject: 'Bestätigung: Ihre Anfrage wurde erhalten',
          text: confirmationEmail
        });
        
        console.log('Both emails sent successfully in background');
      } catch (err) {
        console.error('Background email sending error:', err);
      }
    };
    
    // Start the email sending process in the background
    // Don't await this - let it run after we've responded to the client
    sendEmailsInBackground();
    
    // Immediately return a success response
    return new NextResponse(
      JSON.stringify({ success: true, message: 'Your submission is being processed' }), 
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
    
  } catch (error) {
    console.error('Error in contact API:', error);
    
    return new NextResponse(
      JSON.stringify({ success: false, message: 'Failed to process request' }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}