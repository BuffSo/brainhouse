'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Icons } from '@/components/ui/icons';
import { useLanguage } from '@/contexts/language-context';

export function Portfolio() {
  const { t } = useLanguage();

  const overview = t.portfolioOverview;
  const menuItems = t.portfolioMenu?.items;
  const categories = t.portfolio?.categories;

  if (!overview || !menuItems || !categories) return null;

  return (
    <>
      {/* Portfolio Categories Section */}
      <section id="portfolio" className="bg-slate-50 py-12 sm:py-16 md:py-24 lg:py-32">
        <Container>
          <div className="mb-8 text-center sm:mb-12 md:mb-16">
            <h2 className="text-xs font-semibold leading-6 text-blue-600 sm:text-sm sm:leading-7 md:text-base">
              {overview.subtitle}
            </h2>
            <p className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl lg:text-4xl">
              {overview.title}
            </p>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600 sm:mt-3 sm:text-base md:mt-4 md:text-lg">
              {overview.description}
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8">
            {menuItems.map((item) => {
              const categoryOverview =
                overview.categories?.[item.slug as keyof typeof overview.categories];
              const categoryData = categories.find((c) => c.id === item.slug);
              const iconName = categoryOverview?.icon || 'Briefcase';
              const IconComponent =
                Icons[iconName as keyof typeof Icons] || Icons.Briefcase;

              return (
                <Link
                  key={item.slug}
                  href={`/portfolio/${item.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-blue-300 hover:shadow-lg sm:p-6 md:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white sm:h-14 sm:w-14 md:h-16 md:w-16">
                      <IconComponent
                        className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex items-center gap-1 sm:gap-1.5 rounded-full bg-blue-50 px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm font-semibold text-blue-600">
                      <span>{categoryOverview?.projectCount || '0'}</span>
                      <span className="text-[10px] sm:text-xs font-normal text-blue-500">
                        projects
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-900 sm:mt-5 sm:text-xl md:mt-6 md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 flex-1 text-xs text-slate-600 sm:mt-3 sm:text-sm md:text-base">
                    {categoryOverview?.shortDescription ||
                      categoryData?.description ||
                      ''}
                  </p>

                  <div className="mt-4 flex items-center text-xs font-medium text-blue-600 transition-colors group-hover:text-blue-700 sm:mt-5 sm:text-sm md:mt-6">
                    {overview.viewDetails}
                    <Icons.ArrowRight className="ml-1 h-3.5 w-3.5 sm:ml-1.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      {overview.stats && (
        <section className="bg-white py-10 sm:py-12 md:py-16">
          <Container>
            <div className="text-center">
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg md:text-xl">
                {overview.stats.title}
              </h3>
              <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-4 md:mt-8 md:gap-8">
                {overview.stats.items.map(
                  (stat: { value: string; label: string }, index: number) => (
                    <div key={index} className="text-center">
                      <p className="text-xl font-bold text-blue-600 sm:text-2xl md:text-3xl lg:text-4xl">
                        {stat.value}
                      </p>
                      <p className="mt-0.5 text-[10px] text-slate-500 sm:mt-1 sm:text-xs md:mt-2 md:text-sm">
                        {stat.label}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
