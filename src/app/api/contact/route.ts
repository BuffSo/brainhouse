import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';

type Language = 'ko' | 'en' | 'ja';

const errorMessages: Record<Language, Record<string, string>> = {
  ko: {
    missingFields: '필수 항목을 모두 입력해주세요.',
    invalidEmail: '올바른 이메일 주소를 입력해주세요.',
    messageTooShort: '메시지는 최소 10자 이상 입력해주세요.',
    sendFailed: '메시지 전송에 실패했습니다. 잠시 후 다시 시도해주세요.',
  },
  en: {
    missingFields: 'Please fill in all required fields.',
    invalidEmail: 'Please enter a valid email address.',
    messageTooShort: 'Message must be at least 10 characters.',
    sendFailed: 'Failed to send message. Please try again later.',
  },
  ja: {
    missingFields: '必須項目をすべて入力してください。',
    invalidEmail: '有効なメールアドレスを入力してください。',
    messageTooShort: 'メッセージは10文字以上入力してください。',
    sendFailed: 'メッセージの送信に失敗しました。後でもう一度お試しください。',
  },
};

const successMessages: Record<Language, string> = {
  ko: '문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다.',
  en: 'Your message has been sent successfully. We will get back to you soon.',
  ja: 'お問い合わせが正常に送信されました。近日中にご連絡いたします。',
};

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message, language = 'ko' } = body;

    const lang = (['ko', 'en', 'ja'].includes(language) ? language : 'ko') as Language;
    const errors = errorMessages[lang];

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: errors.missingFields },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: errors.invalidEmail },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: errors.messageTooShort },
        { status: 400 }
      );
    }

    // Send email
    const result = await sendContactEmail({
      name,
      email,
      company: company || '',
      message,
      language: lang,
    });

    if (result.error) {
      console.error('Email send error:', result.error);
      return NextResponse.json(
        { error: errors.sendFailed },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: successMessages[lang],
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
