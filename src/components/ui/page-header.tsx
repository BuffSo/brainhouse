'use client';

import { Container } from '@/components/ui/container';
import { useLanguage } from '@/contexts/language-context';

type PageKey = 'about' | 'business' | 'services' | 'portfolio' | 'contact';

interface PageHeaderProps {
  page: PageKey;
}

export function PageHeader({ page }: PageHeaderProps) {
  const { t } = useLanguage();
  const { title, subtitle } = t.pageHeader[page];

  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 py-16 pt-24 sm:px-6 sm:py-20 sm:pt-32">
      <Container className="text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-300 sm:mt-4 sm:text-lg">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
