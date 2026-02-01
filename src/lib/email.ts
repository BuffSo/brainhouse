import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactEmailData {
  name: string;
  email: string;
  company: string;
  message: string;
  language: 'ko' | 'en' | 'ja';
}

const subjects = {
  ko: '[브레인하우스] 새로운 문의가 접수되었습니다',
  en: '[Brain House] New Contact Inquiry Received',
  ja: '[ブレインハウス] 新しいお問い合わせが届きました',
};

export async function sendContactEmail(data: ContactEmailData) {
  const { name, email, company, message, language } = data;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Pretendard', -apple-system, sans-serif; line-height: 1.6; color: #1e293b; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #064E9B 0%, #0ea5e9 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: 600; color: #64748b; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
        .value { color: #1e293b; font-size: 16px; }
        .message-box { background: white; padding: 20px; border-radius: 6px; border: 1px solid #e2e8f0; margin-top: 10px; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; font-size: 24px;">Brain House</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">New Contact Inquiry</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name</div>
            <div class="value">${name}</div>
          </div>
          <div class="field">
            <div class="label">Email</div>
            <div class="value"><a href="mailto:${email}" style="color: #064E9B;">${email}</a></div>
          </div>
          <div class="field">
            <div class="label">Company / Organization</div>
            <div class="value">${company || '-'}</div>
          </div>
          <div class="field">
            <div class="label">Message</div>
            <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
          </div>
          <div class="footer">
            <p>This inquiry was submitted via the Brain House website contact form.</p>
            <p>Language: ${language.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  const result = await resend.emails.send({
    from: 'Brain House <onboarding@resend.dev>',
    to: process.env.ADMIN_EMAIL || 'brainhouse26@gmail.com',
    replyTo: email,
    subject: subjects[language],
    html: htmlContent,
  });

  return result;
}
