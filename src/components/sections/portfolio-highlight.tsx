'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { useLanguage } from '@/contexts/language-context';

export function PortfolioHighlight() {
  const { t } = useLanguage();

  // Get featured projects (2 from each category)
  const getFeaturedProjects = () => {
    const categories = t.portfolio?.categories;
    if (!categories) return [];

    const featured: Array<{
      title: string;
      client: string;
      year: string;
      category: string;
    }> = [];

    categories.forEach((category) => {
      const items = category.items.slice(0, 2);
      items.forEach((item) => {
        featured.push({
          ...item,
          category: category.title,
        });
      });
    });

    return featured.slice(0, 4); // Max 4 projects
  };

  const featuredProjects = getFeaturedProjects();

  if (featuredProjects.length === 0) return null;

  return (
    <section className="bg-slate-50 py-12 sm:py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl lg:text-4xl">
            {t.portfolioHighlight?.title || '주요 프로젝트'}
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:mt-3 sm:text-base md:mt-4 md:text-lg">
            {t.portfolioHighlight?.description ||
              '다양한 산업 분야에서 성공적으로 수행한 프로젝트'}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 md:mt-12 md:gap-6">
          {featuredProjects.map((project, index) => (
            <Link
              key={index}
              href="/portfolio"
              className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-blue-200 hover:shadow-lg sm:p-5 md:p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="inline-block rounded-full bg-blue-100 px-2 py-0.5 text-[10px] sm:px-2.5 sm:text-xs font-medium text-blue-700">
                    {project.year}
                  </span>
                  <h3 className="mt-1.5 text-xs font-semibold text-slate-900 transition-colors group-hover:text-blue-600 sm:mt-2 sm:text-sm md:text-base">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-[10px] text-slate-500 sm:mt-1.5 sm:text-xs md:text-sm">
                    {project.client}
                  </p>
                </div>
                <Icons.ArrowRight className="ml-2 h-3.5 w-3.5 flex-shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-blue-500 sm:ml-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-8 text-center sm:mt-10 md:mt-12">
          <Button asChild variant="outline" size="lg" className="border-slate-300 hover:border-blue-300 hover:bg-blue-50 text-xs sm:text-sm">
            <Link href="/portfolio">
              {t.portfolioHighlight?.viewAll || '전체 프로젝트 보기'}
              <Icons.ArrowRight className="ml-1.5 h-3.5 w-3.5 sm:ml-2 sm:h-4 sm:w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
