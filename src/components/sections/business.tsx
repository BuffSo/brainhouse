'use client';

import { Container } from '@/components/ui/container';
import { Icons } from '@/components/ui/icons';
import { useLanguage } from '@/contexts/language-context';

const serviceIcons = [
  Icons.Monitor,
  Icons.Briefcase,
  Icons.TrendingUp,
  Icons.Layers,
];

export function Business() {
  const { t } = useLanguage();
  return (
    <section id="business" className="py-16 sm:py-24 lg:py-32">
      <Container>
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {t.business.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:mt-4 sm:text-lg">
            {t.business.description}
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:max-w-none lg:grid-cols-4 lg:gap-8">
          {t.business.services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-lg sm:p-6 lg:p-8"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 sm:mb-6 sm:h-10 sm:w-10">
                  <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold leading-6 text-slate-900 sm:text-lg sm:leading-7">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {service.description}
                </p>
                {service.details && (
                  <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 sm:mt-6 sm:pt-6">
                    {service.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-slate-500"
                      >
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
