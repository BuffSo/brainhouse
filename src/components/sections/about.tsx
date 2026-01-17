'use client';

import { Container } from '@/components/ui/container';
import { Icons } from '@/components/ui/icons';
import { useLanguage } from '@/contexts/language-context';

export function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            {t.about.description}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-shadow hover:shadow-md sm:p-8">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 sm:h-12 sm:w-12">
              <Icons.TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 text-center">
              {t.about.vision.title}
            </h3>
            <p className="mt-2 text-center text-sm font-medium text-slate-900">
              {t.about.vision.desc}
            </p>
            {t.about.vision.details && (
              <ul className="mt-4 space-y-2 text-left">
                {t.about.vision.details.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start text-sm text-slate-500"
                  >
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-shadow hover:shadow-md sm:p-8">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 sm:h-12 sm:w-12">
              <Icons.Layers className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 text-center">
              {t.about.expertise.title}
            </h3>
            <p className="mt-2 text-center text-sm font-medium text-slate-900">
              {t.about.expertise.desc}
            </p>
            {t.about.expertise.details && (
              <ul className="mt-4 space-y-2 text-left">
                {t.about.expertise.details.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start text-sm text-slate-500"
                  >
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-shadow hover:shadow-md sm:p-8">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 sm:h-12 sm:w-12">
              <Icons.Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 text-center">
              {t.about.clients.title}
            </h3>
            <p className="mt-2 text-center text-sm text-slate-500">
              {t.about.clients.desc}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {t.about.clients.list?.map((client) => (
                <span
                  key={client}
                  className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
