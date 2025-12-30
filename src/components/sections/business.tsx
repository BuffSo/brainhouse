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
    <section id="business" className="py-24 sm:py-32">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.business.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t.business.description}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4 lg:gap-8">
          {t.business.services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold leading-7 text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-slate-600">
                  {service.description}
                </p>
                {service.details && (
                  <ul className="mt-6 space-y-2 border-t border-slate-100 pt-6">
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
