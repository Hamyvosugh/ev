import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message, to } = body;

    // بررسی وجود متغیرهای محیطی
    if (!process.env.ZOHO_APP_PASSWORD) {
      console.error('ZOHO_APP_PASSWORD environment variable is missing');
      return new NextResponse(
        JSON.stringify({ success: false, message: 'Server configuration error' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create transporter with better error handling
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 587,
      secure: false,
      auth: {
        user: "hi@emoviral.com",
        pass: process.env.ZOHO_APP_PASSWORD,
      },
      // کاهش timeout برای production
      connectionTimeout: 5000,
      greetingTimeout: 5000,
      socketTimeout: 5000,
      // اضافه کردن تنظیمات اضافی برای Vercel
      pool: true,
      maxConnections: 1,
      rateDelta: 20000,
      rateLimit: 5,
    });

    // تست اتصال قبل از ارسال
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return new NextResponse(
        JSON.stringify({ success: false, message: 'Email service unavailable' }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailContent = `
    Neue Kontaktanfrage von ${name}
    
    ============================
    KONTAKTDATEN
    ============================
    Name: ${name}
    E-Mail: ${email}
    Autohaus/Firma: ${company || "Nicht angegeben"}
    Telefon: ${phone || "Nicht angegeben"}
    
    ============================
    ANFRAGE DETAILS
    ============================
    Gewünschte Dienstleistung: ${service}
    
    Nachricht:
    ${message}
    
    ============================
    
    Diese Nachricht wurde automatisch über das Kontaktformular Ihrer Website generiert.
    `;

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

    // ارسال ایمیل‌ها با Promise.all برای سرعت بیشتر
    const emailPromises = [
      // ارسال به ادمین
      transporter.sendMail({
        from: `"Website Kontaktformular" <hi@emoviral.com>`,
        to: to || "hi@emoviral.com",
        subject: `Neue Anfrage: ${service} - von ${name}`,
        text: emailContent,
        replyTo: email,
      }),
      // ارسال تایید به کاربر
      transporter.sendMail({
        from: `"EmoViral" <hi@emoviral.com>`,
        to: email,
        subject: "Bestätigung: Ihre Anfrage wurde erhalten",
        text: confirmationEmail,
      })
    ];

    // منتظر هر دو ایمیل بمانید (با timeout)
    const emailResults = await Promise.allSettled(emailPromises);
    
    // چک کردن نتایج
    const adminEmailResult = emailResults[0];
    const confirmationEmailResult = emailResults[1];

    console.log('Admin email result:', adminEmailResult.status);
    console.log('Confirmation email result:', confirmationEmailResult.status);

    // اگر هر دو fail شدند، خطا برگردانید
    if (adminEmailResult.status === 'rejected' && confirmationEmailResult.status === 'rejected') {
      console.error('Both emails failed:');
      console.error('Admin email error:', adminEmailResult.reason);
      console.error('Confirmation email error:', confirmationEmailResult.reason);
      
      return new NextResponse(
        JSON.stringify({ success: false, message: 'Failed to send emails' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // اگر حداقل یکی موفق بود
    let successMessage = 'Emails processed successfully';
    if (adminEmailResult.status === 'rejected') {
      console.error('Admin email failed:', adminEmailResult.reason);
      successMessage = 'Confirmation email sent, admin notification pending';
    }
    if (confirmationEmailResult.status === 'rejected') {
      console.error('Confirmation email failed:', confirmationEmailResult.reason);
      successMessage = 'Admin notified, confirmation email pending';
    }

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: successMessage,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );

  } catch (error: any) {
    console.error('Error in contact API:', error);
    
    // لاگ دقیق‌تر از خطا
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return new NextResponse(
      JSON.stringify({ 
        success: false, 
        message: 'Failed to process request',
        error: process.env.NODE_ENV === 'development' ? error?.message : undefined
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}