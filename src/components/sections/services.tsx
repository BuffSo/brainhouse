'use client';

import { Container } from '@/components/ui/container';
import { Icons } from '@/components/ui/icons';
import { useLanguage } from '@/contexts/language-context';
import { StrategyFlow } from './strategy-flow';

const serviceIcons = [
  Icons.TrendingUp, // ICT Strategy
  Icons.Lightbulb, // Technology Commercialization
  Icons.Briefcase, // Startup & Investment
  Icons.Code, // Software Development
];

export function Services() {
  const { t } = useLanguage();

  if (!t.ourServices) return null;

  return (
    <section id="services" className="bg-slate-50 py-16 sm:py-24 lg:py-32">
      <Container>
        <div className="mb-10 text-center sm:mb-16">
          <h2 className="text-sm font-semibold leading-6 text-blue-600 sm:text-base sm:leading-7">
            {t.ourServices.subtitle}
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {t.ourServices.title}
          </p>
          <p className="mt-3 text-base text-slate-600 sm:mt-4 sm:text-lg">
            {t.ourServices.description}
          </p>
        </div>

        <div className="space-y-10 sm:space-y-16">
          {/* Service 1: ICT Strategy (Featured with Diagram) */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="order-2 lg:order-1">
              <StrategyFlow steps={t.ourServices.items[0].steps || []} />
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 sm:mb-6 sm:h-12 sm:w-12">
                <Icons.TrendingUp
                  className="h-5 w-5 text-white sm:h-7 sm:w-7"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                {t.ourServices.items[0].title}
              </h3>
              <p className="mt-3 text-base text-slate-600 sm:mt-4 sm:text-lg">
                {t.ourServices.items[0].description}
              </p>
            </div>
          </div>

          {/* Services 2, 3, 4: Cards Grid */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {t.ourServices.items.slice(1).map((service, index) => {
              const Icon = serviceIcons[index + 1];
              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-blue-200 hover:shadow-lg sm:p-6 lg:p-8"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white sm:mb-6 sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 sm:mt-3 sm:text-base">
                    {service.description}
                  </p>
                  {service.details && (
                    <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 sm:mt-6 sm:space-y-2.5 sm:pt-6">
                      {service.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-slate-500"
                        >
                          <Icons.Check className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
