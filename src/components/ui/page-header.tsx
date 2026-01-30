'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { useLanguage } from '@/contexts/language-context';

type PageKey = 'about' | 'business' | 'services' | 'portfolio' | 'contact';

interface PageHeaderProps {
  page: PageKey;
  backgroundImage?: string;
}

export function PageHeader({ page, backgroundImage }: PageHeaderProps) {
  const { t } = useLanguage();
  const { title, subtitle } = t.pageHeader[page];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 py-16 pt-24 sm:px-6 sm:py-20 sm:pt-32 min-h-[260px] flex flex-col justify-center">
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-900/90" />
        </>
      )}
      <Container className="relative z-10 text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-300 sm:mt-4 sm:text-lg break-keep">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
