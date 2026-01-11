'use client';

import { Container } from '@/components/ui/container';
import { Icons } from '@/components/ui/icons';
import { useLanguage } from '@/contexts/language-context';
import { StrategyFlow } from './strategy-flow';

const serviceIcons = [
  Icons.TrendingUp, // ICT Strategy
  Icons.Layers, // ICT Convergence
  Icons.Briefcase, // Startup Support
];

export function Services() {
  const { t } = useLanguage();

  // Guard clause if translations aren't updated yet or type definition is missing
  if (!t.ourServices) return null;

  return (
    <section id="services" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            {t.ourServices.subtitle}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.ourServices.title}
          </p>
          <p className="mt-4 text-lg text-slate-600">
            {t.ourServices.description}
          </p>
        </div>

        <div className="space-y-24">
          {/* Service 1: ICT Strategy (Featured with Diagram) */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <StrategyFlow steps={t.ourServices.items[0].steps || []} />
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                <Icons.TrendingUp
                  className="h-7 w-7 text-white"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                {t.ourServices.items[0].title}
              </h3>
              <p className="mt-4 text-lg text-slate-600">
                {t.ourServices.items[0].description}
              </p>
            </div>
          </div>

          {/* Services 2 & 3: Standard Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {t.ourServices.items.slice(1).map((service, index) => {
              const Icon = serviceIcons[index + 1];
              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base text-slate-600">
                    {service.description}
                  </p>
                  {service.details && (
                    <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                      {service.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-slate-500"
                        >
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
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
