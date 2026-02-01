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
      <section id="portfolio" className="bg-slate-50 py-16 sm:py-24 lg:py-32">
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

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
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
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-lg sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white sm:h-16 sm:w-16">
                      <IconComponent
                        className="h-7 w-7 sm:h-8 sm:w-8"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
                      <span>{categoryOverview?.projectCount || '0'}</span>
                      <span className="text-xs font-normal text-blue-500">
                        projects
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900 sm:mt-6 sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm text-slate-600 sm:mt-3 sm:text-base">
                    {categoryOverview?.shortDescription ||
                      categoryData?.description ||
                      ''}
                  </p>

                  <div className="mt-5 flex items-center text-sm font-medium text-blue-600 transition-colors group-hover:text-blue-700 sm:mt-6">
                    {overview.viewDetails}
                    <Icons.ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      {overview.stats && (
        <section className="bg-white py-12 sm:py-16">
          <Container>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                {overview.stats.title}
              </h3>
              <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8 sm:gap-8">
                {overview.stats.items.map(
                  (stat: { value: string; label: string }, index: number) => (
                    <div key={index} className="text-center">
                      <p className="text-2xl font-bold text-blue-600 sm:text-3xl md:text-4xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs text-slate-500 sm:mt-2 sm:text-sm">
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
