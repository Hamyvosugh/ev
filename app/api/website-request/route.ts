import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      company,
      basicInfo,
      targetAudience,
      contentStructure,
      designBranding,
      technicalFeatures,
      seoMarketing,
      databaseInfo,
      hostingDomain,
      timeline,
      additionalServices,
      submissionDate,
      language 
    } = body;

    // Check environment variables
    if (!process.env.ZOHO_APP_PASSWORD) {
      console.error('ZOHO_APP_PASSWORD environment variable is missing');
      return new NextResponse(
        JSON.stringify({ success: false, message: 'Server configuration error' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 587,
      secure: false,
      auth: {
        user: "hi@emoviral.com",
        pass: process.env.ZOHO_APP_PASSWORD,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return new NextResponse(
        JSON.stringify({ success: false, message: 'Email service unavailable' }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create detailed email content
    const emailContent = `
NEW WEBSITE REQUEST
===================

CONTACT INFORMATION:
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Company: ${company}
Form Language: ${language}
Submission Date: ${new Date(submissionDate).toLocaleString('en-US')}

BASIC PROJECT INFORMATION:
Business Name: ${basicInfo.businessName}
Current Website: ${basicInfo.currentWebsite || "None"}
Main Goal: ${basicInfo.mainGoal}
Project Importance: ${basicInfo.projectImportance}

TARGET AUDIENCE:
Ideal Customer: ${targetAudience.idealCustomer}
Expected Action: ${targetAudience.expectedAction}
Main Problem: ${targetAudience.mainProblem}

CONTENT STRUCTURE:
Required Pages: ${contentStructure.requiredPages.join(', ')}
Website Language: ${contentStructure.language}
User Registration: ${contentStructure.userRegistration ? 'Yes' : 'No'}

DESIGN & BRANDING:
Has Visual Identity: ${designBranding.hasVisualIdentity ? 'Yes' : 'No'}
Design Style: ${designBranding.designStyle}
Inspiration Website: ${designBranding.inspirationWebsite || "None"}
Brand Colors: ${designBranding.brandColors || "Not specified"}
Colors to Avoid: ${designBranding.avoidColors || "None"}
Desired Feeling: ${designBranding.desiredFeeling}

TECHNICAL FEATURES:
Needs CMS: ${technicalFeatures.needsCMS ? 'Yes' : 'No'}
CMS Type: ${technicalFeatures.cmsType || "Not specified"}
Custom Forms: ${technicalFeatures.customForms.join(', ') || "None"}
Payment Gateway: ${technicalFeatures.paymentGateway ? 'Yes' : 'No'}
Payment Country: ${technicalFeatures.paymentCountry || "Not specified"}
Multi-language: ${technicalFeatures.multiLanguage ? 'Yes' : 'No'}
Additional Languages: ${technicalFeatures.additionalLanguages.join(', ') || "None"}
User Content: ${technicalFeatures.userContent ? 'Yes' : 'No'}
User Content Types: ${technicalFeatures.userContentTypes.join(', ') || "None"}
Integrations: ${technicalFeatures.integrations.join(', ') || "None"}

SEO & MARKETING:
Knows Keywords: ${seoMarketing.knowsKeywords ? 'Yes' : 'No'}
Keywords: ${seoMarketing.keywords || "Not specified"}
Has SEO Strategy: ${seoMarketing.hasSEOStrategy ? 'Yes' : 'No'}
Needs Blog: ${seoMarketing.needsBlog ? 'Yes' : 'No'}
Social Media Links: ${seoMarketing.socialMediaLinks || "None"}

DATABASE INFORMATION:
Data to Store: ${databaseInfo.dataToStore.join(', ') || "None"}
Management System: ${databaseInfo.managementSystem}
Has Initial Data: ${databaseInfo.hasInitialData ? 'Yes' : 'No'}
Initial Data Description: ${databaseInfo.initialDataDescription || "Not specified"}

HOSTING & DOMAIN:
Has Domain: ${hostingDomain.hasDomain ? 'Yes' : 'No'}
Domain Provider: ${hostingDomain.domainProvider || "Not specified"}
Has Hosting: ${hostingDomain.hasHosting ? 'Yes' : 'No'}
Audience Region: ${hostingDomain.audienceRegion}

TIMELINE & BUDGET:
Desired Completion Date: ${timeline.desiredCompletionDate}
Budget: ${timeline.budget}
Main Priority: ${timeline.mainPriority}

ADDITIONAL SERVICES:
Needs Support: ${additionalServices.needsSupport ? 'Yes' : 'No'}
Needs Content Management: ${additionalServices.needsContentManagement ? 'Yes' : 'No'}
Interested in Long-term Partnership: ${additionalServices.interestedInLongTerm ? 'Yes' : 'No'}

===================
This message was automatically generated through the website request form.
    `;

    // Confirmation email for client
    const confirmationEmail = `
Dear ${name},

Thank you for your detailed website request! We have received all your information and will review it carefully.

YOUR REQUEST OVERVIEW:
- Company: ${company}
- Project: ${basicInfo.businessName}
- Desired Completion Date: ${timeline.desiredCompletionDate}
- Budget: ${timeline.budget}

NEXT STEPS:
1. We will review your request within 24 hours
2. You will receive a custom proposal from us
3. We will schedule a consultation meeting with you

CONTACT:
If you have any questions, you can reach us at:
Email: hi@emoviral.com
Phone: +49 6181 4347066

Best regards,
Your EmoViral Team

---
This email was automatically generated. Please do not reply directly to this email.
For inquiries, please use our contact information above.
    `;

    // Send emails
    const emailPromises = [
      // Email to admin
      transporter.sendMail({
        from: `"Website Anfrageformular" <hi@emoviral.com>`,
        to: "hi@emoviral.com",
        subject: `🌟 New Website Request from ${name} (${company})`,
        text: emailContent,
        replyTo: email,
      }),
      // Confirmation email to client
      transporter.sendMail({
        from: `"EmoViral Team" <hi@emoviral.com>`,
        to: email,
        subject: "✅ Confirmation: Your Website Request Has Been Received",
        text: confirmationEmail,
      })
    ];

    const emailResults = await Promise.allSettled(emailPromises);
    
    const adminEmailResult = emailResults[0];
    const confirmationEmailResult = emailResults[1];

    console.log('Admin email result:', adminEmailResult.status);
    console.log('Confirmation email result:', confirmationEmailResult.status);

    // Check if at least one email was successful
    if (adminEmailResult.status === 'rejected' && confirmationEmailResult.status === 'rejected') {
      console.error('Both emails failed:');
      console.error('Admin email error:', adminEmailResult.reason);
      console.error('Confirmation email error:', confirmationEmailResult.reason);
      
      return new NextResponse(
        JSON.stringify({ success: false, message: 'Failed to send emails' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Success response
    let successMessage = 'Website request submitted successfully';
    if (adminEmailResult.status === 'rejected') {
      console.error('Admin email failed:', adminEmailResult.reason);
      successMessage = 'Request received, admin notification pending';
    }
    if (confirmationEmailResult.status === 'rejected') {
      console.error('Confirmation email failed:', confirmationEmailResult.reason);
      successMessage = 'Request received, confirmation email pending';
    }

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: successMessage,
        data: {
          submissionId: `WR-${Date.now()}`,
          submissionDate: submissionDate,
        }
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );

  } catch (error: any) {
    console.error('Error in website request API:', error);
    
    if (error instanceof Error) {
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
    }
    
    return new NextResponse(
      JSON.stringify({ 
        success: false, 
        message: 'Failed to process website request',
        error: process.env.NODE_ENV === 'development' ? error?.message : 'Internal server error'
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}