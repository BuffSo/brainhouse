import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/contexts/language-context';

export const metadata: Metadata = {
  title: 'Brain House',
  description: 'Brain House Company Introduction',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
