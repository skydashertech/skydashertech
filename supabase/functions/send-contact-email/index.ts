import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://www.skydashertech.com',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const RECIPIENT_EMAIL = 'skydashertech@gmail.com';
const FROM_EMAIL = 'noreply@skydashertech.com';
const FROM_NAME = 'SkyDasher Tech Website';

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { name, email, phone, countryCode, service, message, recaptchaToken } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (recaptchaToken) {
      const recaptchaSecret = Deno.env.get('RECAPTCHA_SECRET_KEY');
      if (recaptchaSecret) {
        const recaptchaResponse = await fetch(
          `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`,
          { method: 'POST' }
        );
        const recaptchaData = await recaptchaResponse.json();
        if (!recaptchaData.success || recaptchaData.score < 0.3) {
          return new Response(
            JSON.stringify({ error: 'reCAPTCHA verification failed. Please try again.' }),
            { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
      }
    }

    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      throw new Error('Email service not configured.');
    }

    const fullPhone = phone ? `${countryCode || '+91'}${phone}` : 'Not provided';
    const serviceRequested = service || 'Not specified';
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const notificationResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `${FROM_NAME} <${FROM_EMAIL}>`,
        to: [RECIPIENT_EMAIL],
        reply_to: email,
        subject: `New Contact Form Submission from ${name} — ${serviceRequested}`,
        html: `<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial; background: #f5f5f5; margin: 0; padding: 20px;"><div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"><div style="background: #E83E0C; padding: 24px; text-align: center;"><h1 style="color: #fff; margin: 0;">New Lead from Website</h1><p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0;">SkyDasher Tech Contact Form</p></div><div style="padding: 32px;"><table style="width: 100%;"><tr><td style="padding: 12px; background: #f9f9f9; font-weight: bold;">Name</td><td style="padding: 12px;">${name}</td></tr><tr><td style="padding: 12px; font-weight: bold;">Email</td><td style="padding: 12px;"><a href="mailto:${email}" style="color: #E83E0C;">${email}</a></td></tr><tr><td style="padding: 12px; background: #f9f9f9; font-weight: bold;">Phone</td><td style="padding: 12px; background: #f9f9f9;">${fullPhone}</td></tr><tr><td style="padding: 12px; font-weight: bold;">Service</td><td style="padding: 12px;">${serviceRequested}</td></tr><tr><td style="padding: 12px; background: #f9f9f9; font-weight: bold; vertical-align: top;">Message</td><td style="padding: 12px; background: #f9f9f9;">${message.replace(/\n/g, '<br>')}</td></tr><tr><td style="padding: 12px; font-weight: bold;">Received</td><td style="padding: 12px;">${timestamp} IST</td></tr></table></div><div style="background: #1a1a2e; padding: 16px; text-align: center;"><p style="color: #888; margin: 0; font-size: 12px;">SkyDasher Tech · Coimbatore, India · skydashertech@gmail.com</p></div></div></body></html>`,
        text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${fullPhone}\nService: ${serviceRequested}\nMessage: ${message}\nReceived: ${timestamp} IST`,
      }),
    });

    if (!notificationResponse.ok) {
      const errorData = await notificationResponse.json();
      throw new Error(`Failed to send notification email: ${JSON.stringify(errorData)}`);
    }

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `${FROM_NAME} <${FROM_EMAIL}>`,
        to: [email],
        subject: `Thank you for contacting SkyDasher Tech, ${name}!`,
        html: `<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial; background: #f5f5f5; margin: 0; padding: 20px;"><div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"><div style="background: #E83E0C; padding: 24px; text-align: center;"><h1 style="color: #fff; margin: 0;">Thank You, ${name}!</h1><p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0;">We've received your message.</p></div><div style="padding: 32px;"><p style="color: #333; line-height: 1.7;">Thank you for reaching out to SkyDasher Tech! We've received your inquiry and our team will get back to you within 24 hours.</p><div style="background: #f9f9f9; border-left: 4px solid #E83E0C; padding: 16px; margin: 24px 0;"><p style="margin: 0; color: #666;"><strong>Your message:</strong></p><p style="margin: 8px 0 0 0; color: #555; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p></div><p style="color: #333;">In the meantime, feel free to:</p><ul style="color: #555; line-height: 2;"><li>Explore our <a href="https://www.skydashertech.com" style="color: #E83E0C;">services and portfolio</a></li><li>Connect with us on <a href="https://www.linkedin.com/company/skydashertech" style="color: #E83E0C;">LinkedIn</a></li><li>WhatsApp us for urgent queries</li></ul><div style="text-align: center; margin-top: 24px;"><a href="https://www.skydashertech.com" style="background: #E83E0C; color: #fff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block;">Visit Our Website</a></div></div><div style="background: #1a1a2e; padding: 20px; text-align: center;"><p style="color: #ccc; margin: 0 0 8px 0;"><strong style="color: #E83E0C;">SkyDasher Tech</strong></p><p style="color: #888; margin: 0; font-size: 12px;">Coimbatore, India | skydashertech@gmail.com | +91 913 56 76 155</p></div></div></body></html>`,
        text: `Thank you for contacting SkyDasher Tech!\n\nHi ${name},\n\nWe've received your message and will get back to you within 24 hours.\n\nYour message:\n${message}\n\nBest regards,\nSkyDasher Tech Team\nskydashertech@gmail.com\n+91 913 56 76 155`,
      }),
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Your message has been sent successfully! We will get back to you within 24 hours.' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send message. Please try again or contact us directly at skydashertech@gmail.com' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
