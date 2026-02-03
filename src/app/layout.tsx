import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/contexts/language-context';

const BASE_URL = 'https://brainhouse.co.kr';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Brain House | AI·ICT 전문 컨설팅',
    template: '%s | Brain House',
  },
  description:
    'Brain House는 AI Transformation, ICT 전략 컨설팅, MVP 개발, 기술사업화를 전문으로 하는 디지털 혁신 파트너입니다.',
  keywords: [
    'AI 컨설팅',
    'ICT 전략',
    'MVP 개발',
    '기술사업화',
    '디지털 전환',
    'AX 컨설팅',
    '창업 컨설팅',
    '소프트웨어 개발',
    'Brain House',
    '브레인하우스',
  ],
  authors: [{ name: 'Brain House' }],
  creator: 'Brain House',
  publisher: 'Brain House',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: BASE_URL,
    siteName: 'Brain House',
    title: 'Brain House | AI·ICT 전문 컨설팅',
    description:
      'AI Transformation, ICT 전략 컨설팅, MVP 개발, 기술사업화를 전문으로 하는 디지털 혁신 파트너',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Brain House - AI·ICT 전문 컨설팅',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brain House | AI·ICT 전문 컨설팅',
    description:
      'AI Transformation, ICT 전략 컨설팅, MVP 개발, 기술사업화를 전문으로 하는 디지털 혁신 파트너',
    images: ['/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '', // Google Search Console 인증 코드
    // naver: '', // 네이버 서치어드바이저 인증 코드
  },
};

// Organization JSON-LD 구조화 데이터
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Brain House',
  alternateName: '브레인하우스',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  description:
    'AI Transformation, ICT 전략 컨설팅, MVP 개발, 기술사업화를 전문으로 하는 디지털 혁신 파트너',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KR',
  },
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['Korean', 'English'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="pt-16">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
