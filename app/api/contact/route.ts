import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message, to } = body;

    // Initialize Resend with your API key
    // You'll need to sign up at resend.com and get an API key
    const resend = new Resend(process.env.RESEND_API_KEY);
    
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
    const { data, error } = await resend.emails.send({
      from: 'Website Kontaktformular <kontakt@emoviral.com>', // You'll need to verify this domain in Resend
      to: to || 'hi@emoviral.com',
      subject: `Neue Anfrage: ${service} - von ${name}`,
      text: emailContent,
      replyTo: email // Fixed: changed 'reply_to' to 'replyTo'
    });
    
    if (error) {
      console.error('Error sending main email:', error);
      throw new Error(`Failed to send email: ${error.message}`);
    }
    
    console.log('Email sent successfully:', data);
    
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
    
    // No need to wait for confirmation email
    resend.emails.send({
      from: 'EmoViral <kontakt@emoviral.com>', // You'll need to verify this domain in Resend
      to: email,
      subject: 'Bestätigung: Ihre Anfrage wurde erhalten',
      text: confirmationEmail,
      replyTo: 'hi@emoviral.com' // Fixed: changed 'reply_to' to 'replyTo'
    }).catch(confirmError => {
      console.error('Error sending confirmation email:', confirmError);
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    
    return NextResponse.json(
      { error: 'Failed to send email', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}