import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Increase the timeout for Vercel
export const config = {
  maxDuration: 60, // Extend to 60 seconds
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message, to } = body;

    console.log('Starting email sending process...');
    console.log('Using SMTP settings:', {
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: process.env.SMTP_PORT || '587',
      user: process.env.SMTP_USER || 'hi@emoviral.com',
      // Don't log the password
    });
    
    // Try port 587 (TLS) which is more commonly allowed in serverless environments
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // false for 587, true for 465
      auth: {
        user: process.env.SMTP_USER || 'hi@emoviral.com',
        pass: process.env.SMTP_PASSWORD || '',
      },
      tls: {
        rejectUnauthorized: false,
        ciphers: 'SSLv3', // Try older ciphers that might be better supported
      },
      debug: true,
    });
    
    console.log('Transporter created, verifying connection...');
    
    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      
      // Create a new transporter with port 465 if 587 fails
      console.log('Trying fallback SMTP settings with port 465...');
      
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.hostinger.com',
        port: 465,
        secure: true, // true for 465
        auth: {
          user: process.env.SMTP_USER || 'hi@emoviral.com',
          pass: process.env.SMTP_PASSWORD || '',
        },
        tls: {
          rejectUnauthorized: false,
        },
        debug: true,
      });
      
      try {
        await transporter.verify();
        console.log('Fallback SMTP connection verified successfully');
      } catch (fallbackError) {
        console.error('Fallback SMTP verification also failed:', fallbackError);
        throw new Error('Could not establish SMTP connection with either port 587 or 465');
      }
    }
    
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
    
    console.log('Preparing to send main email...');
    
    // Send email to your address (hi@emoviral.com)
    try {
      const mainEmailResult = await transporter.sendMail({
        from: `"Website Kontaktformular" <${process.env.SMTP_USER || 'hi@emoviral.com'}>`,
        to: to || 'hi@emoviral.com',
        subject: `Neue Anfrage: ${service} - von ${name}`,
        text: emailContent,
        replyTo: email
      });
      
      console.log('Main email sent successfully:', mainEmailResult.messageId);
      
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
      
      console.log('Preparing to send confirmation email...');
      
      try {
        const confirmEmailResult = await transporter.sendMail({
          from: `"EmoViral" <${process.env.SMTP_USER || 'hi@emoviral.com'}>`,
          to: email,
          subject: 'Bestätigung: Ihre Anfrage wurde erhalten',
          text: confirmationEmail
        });
        
        console.log('Confirmation email sent successfully:', confirmEmailResult.messageId);
      } catch (confirmError) {
        console.error('Error sending confirmation email:', confirmError);
        console.warn('Main email was sent, but confirmation failed');
        // Don't throw here to allow partial success
      }
      
      return NextResponse.json({ success: true });
    } catch (mainEmailError) {
      console.error('Error sending main email:', mainEmailError);
      throw new Error(`Failed to send main email: ${mainEmailError instanceof Error ? mainEmailError.message : 'Unknown error'}`);
    }
    
  } catch (error) {
    // TypeScript-compliant error handling
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Contact form error:', errorMessage);
    
    return NextResponse.json(
      { error: 'Failed to send email', details: errorMessage },
      { status: 500 }
    );
  }
}