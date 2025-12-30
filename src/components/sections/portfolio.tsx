'use client';

import { Container } from '@/components/ui/container';
import { useLanguage } from '@/contexts/language-context';

export function Portfolio() {
  const { t } = useLanguage();
  return (
    <section id="portfolio" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.portfolio.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t.portfolio.description}
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {t.portfolio.projects.map((yearGroup) => (
            <div
              key={yearGroup.year}
              className="relative border-l border-slate-200 pl-8 ml-4"
            >
              <span className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white ring-4 ring-white">
                {yearGroup.year}
              </span>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {yearGroup.items.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
