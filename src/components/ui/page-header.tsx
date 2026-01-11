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
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 pt-32">
      <Container className="text-center">
        <h1 className="text-4xl font-bold text-white md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
