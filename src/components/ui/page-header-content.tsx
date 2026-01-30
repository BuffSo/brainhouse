'use client';

import { useLanguage } from '@/contexts/language-context';

type PageKey = 'about' | 'business' | 'services' | 'portfolio' | 'contact';

interface PageHeaderContentProps {
  page: PageKey;
}

export function PageHeaderContent({ page }: PageHeaderContentProps) {
  const { t } = useLanguage();
  const { title, subtitle } = t.pageHeader[page];

  return (
    <>
      <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-base text-slate-300 sm:mt-4 sm:text-lg break-keep">
          {subtitle}
        </p>
      )}
    </>
  );
}
