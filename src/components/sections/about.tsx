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

        {/* CEO 인사말 섹션 */}
        {t.about.ceo && (
          <div className="mx-auto mt-12 max-w-4xl sm:mt-16">
            <div className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-8 lg:p-10">
              {/* 장식용 따옴표 */}
              <div className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-md sm:-top-5 sm:left-8 sm:h-12 sm:w-12">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              {/* CEO 인사말 내용 */}
              <div className="pt-4 sm:pt-6">
                <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  {t.about.ceo.title}
                </h3>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-7">
                  <p className="font-medium text-slate-700">
                    {t.about.ceo.greeting}
                  </p>
                  <p>{t.about.ceo.message}</p>
                  <p>{t.about.ceo.message2}</p>
                  <p className="font-medium text-slate-700">
                    {t.about.ceo.closing}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-shadow hover:shadow-md sm:p-8">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 sm:h-12 sm:w-12">
                <Icons.TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {t.about.vision.title}
              </h3>
            </div>
            <p className="mt-3 whitespace-pre-line text-sm font-medium text-slate-900">
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
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 sm:h-12 sm:w-12">
                <Icons.Layers className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {t.about.expertise.title}
              </h3>
            </div>
            <p className="mt-3 text-sm font-medium text-slate-900">
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
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 sm:h-12 sm:w-12">
                <Icons.Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {t.about.clients.title}
              </h3>
            </div>
            <p className="mt-3 text-sm text-slate-500">
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
