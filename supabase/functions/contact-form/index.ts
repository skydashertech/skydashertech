const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, company, service, message, timestamp } = await req.json()

    // Validate required fields
    if (!name || !email || !phone || !company || !service || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Prepare email content
    const emailContent = `
New Contact Form Submission from SkyDasher Tech Website

Contact Details:
================
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Service Interested: ${service}

Message:
========
${message}

Submitted at: ${new Date(timestamp).toLocaleString()}
    `

    // Send email using Resend API (you'll need to set up RESEND_API_KEY in environment variables)
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY') || 're_demo_key'}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: ['skydashertech@gmail.com'],
        subject: `New Lead: ${name} from ${company} - ${service}`,
        text: emailContent,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #FF3C1A, #212720); padding: 20px; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; text-align: center;">New Lead from SkyDasher Tech</h1>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
              <h2 style="color: #FF3C1A; margin-top: 0; border-bottom: 2px solid #FF3C1A; padding-bottom: 10px;">
                Contact Information
              </h2>
              
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr style="background-color: white;">
                  <td style="padding: 12px; font-weight: bold; color: #495057; border: 1px solid #dee2e6;">Name:</td>
                  <td style="padding: 12px; color: #212529; border: 1px solid #dee2e6;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; font-weight: bold; color: #495057; border: 1px solid #dee2e6;">Email:</td>
                  <td style="padding: 12px; color: #212529; border: 1px solid #dee2e6;">
                    <a href="mailto:${email}" style="color: #FF3C1A; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr style="background-color: white;">
                  <td style="padding: 12px; font-weight: bold; color: #495057; border: 1px solid #dee2e6;">Phone:</td>
                  <td style="padding: 12px; color: #212529; border: 1px solid #dee2e6;">
                    <a href="tel:${phone}" style="color: #FF3C1A; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; font-weight: bold; color: #495057; border: 1px solid #dee2e6;">Company:</td>
                  <td style="padding: 12px; color: #212529; border: 1px solid #dee2e6;">${company}</td>
                </tr>
                <tr style="background-color: white;">
                  <td style="padding: 12px; font-weight: bold; color: #495057; border: 1px solid #dee2e6;">Service:</td>
                  <td style="padding: 12px; color: #212529; border: 1px solid #dee2e6;">
                    <span style="background-color: #FF3C1A; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                      ${service}
                    </span>
                  </td>
                </tr>
              </table>
              
              <h3 style="color: #FF3C1A; margin-bottom: 15px;">Project Details:</h3>
              <div style="background-color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #FF3C1A;">
                <p style="color: #212529; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
              
              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #FF3C1A;">
                <p style="color: #6c757d; font-size: 14px; margin: 0;">
                  📅 Submitted on ${new Date(timestamp).toLocaleString()}
                </p>
                <div style="margin-top: 15px;">
                  <a href="mailto:${email}" style="background-color: #FF3C1A; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">Reply via Email</a>
                  <a href="tel:${phone}" style="background-color: #212720; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Call Now</a>
                </div>
              </div>
            </div>
          </div>
        `,
      }),
    })

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text()
      console.error('Email service error:', errorData)
      throw new Error('Failed to send email')
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Lead sent successfully to skydashertech@gmail.com' 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send lead. Please try again or contact skydashertech@gmail.com directly.' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})