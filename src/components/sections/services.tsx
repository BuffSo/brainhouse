'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Icons } from '@/components/ui/icons';
import { useLanguage } from '@/contexts/language-context';

export function Services() {
  const { t } = useLanguage();

  const overview = t.servicesOverview;
  const menuItems = t.servicesMenu?.items;

  if (!overview || !menuItems) return null;

  return (
    <>
      {/* Services Grid Section */}
      <section id="services" className="bg-slate-50 py-16 sm:py-24 lg:py-32">
        <Container>
          <div className="mb-10 text-center sm:mb-16">
            <h2 className="text-sm font-semibold leading-6 text-blue-600 sm:text-base sm:leading-7">
              {overview.subtitle}
            </h2>
            <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              {overview.title}
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:mt-4 sm:text-lg">
              {overview.description}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item) => {
              const serviceOverview =
                overview.services?.[item.slug as keyof typeof overview.services];
              const serviceDetails =
                t.serviceDetails?.[item.slug as keyof typeof t.serviceDetails];
              const iconName = serviceOverview?.icon || 'Code';
              const IconComponent =
                Icons[iconName as keyof typeof Icons] || Icons.Code;

              return (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-lg sm:p-8"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white sm:mb-6 sm:h-14 sm:w-14">
                    <IconComponent
                      className="h-6 w-6 sm:h-7 sm:w-7"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                    {serviceDetails?.title || item.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm text-slate-600 sm:mt-3 sm:text-base">
                    {serviceOverview?.shortDescription ||
                      serviceDetails?.subtitle ||
                      ''}
                  </p>

                  <div className="mt-4 flex items-center text-sm font-medium text-blue-600 transition-colors group-hover:text-blue-700 sm:mt-6">
                    {overview.viewDetails}
                    <Icons.ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Brain House Section */}
      {overview.whyBrainHouse && (
        <section className="bg-white py-16 sm:py-24">
          <Container>
            <div className="mb-10 text-center sm:mb-14">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                {overview.whyBrainHouse.title}
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
              {overview.whyBrainHouse.points.map(
                (
                  point: { icon: string; title: string; description: string },
                  index: number
                ) => {
                  const IconComponent =
                    Icons[point.icon as keyof typeof Icons] || Icons.Check;
                  return (
                    <div
                      key={index}
                      className="flex gap-4 rounded-xl bg-slate-50 p-6 sm:gap-5 sm:p-8"
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 sm:h-14 sm:w-14">
                        <IconComponent
                          className="h-6 w-6 text-white sm:h-7 sm:w-7"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                          {point.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-600 sm:text-base">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
