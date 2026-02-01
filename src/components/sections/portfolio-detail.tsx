'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Icons } from '@/components/ui/icons';
import { useLanguage } from '@/contexts/language-context';

interface PortfolioDetailProps {
  slug: string;
  backgroundImage?: string;
}

export function PortfolioDetail({ slug, backgroundImage }: PortfolioDetailProps) {
  const { t, language } = useLanguage();

  const categories = t.portfolio?.categories;
  const category = categories?.find((c) => c.id === slug);
  const menuItem = t.portfolioMenu?.items?.find((item) => item.slug === slug);
  const overview = t.portfolioOverview;

  if (!category || !menuItem) {
    return (
      <section className="py-16 sm:py-24">
        <Container>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900">
              {language === 'ko'
                ? '포트폴리오를 찾을 수 없습니다.'
                : language === 'ja'
                  ? 'ポートフォリオが見つかりません。'
                  : 'Portfolio not found.'}
            </h1>
            <Link
              href="/portfolio"
              className="mt-4 inline-block text-blue-600 hover:underline"
            >
              {overview?.viewDetails || 'View all portfolio'}
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 py-16 pt-24 sm:px-6 sm:py-20 sm:pt-32 min-h-[260px] flex flex-col justify-center">
        {backgroundImage ? (
          <>
            <Image
              src={backgroundImage}
              alt="Background"
              fill
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-900/90" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-20" />
        )}
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center px-2 sm:px-4">
            <p className="text-sm font-semibold text-blue-300 sm:text-base mb-2">
              Portfolio
            </p>
            <h1 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl break-keep">
              {menuItem.title}
            </h1>
            <p className="mt-3 text-sm text-blue-100 sm:mt-4 sm:text-base md:text-lg break-keep">
              {category.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Project Count Badge */}
      <section className="bg-white py-4 sm:py-6 md:py-8 border-b border-slate-100">
        <Container>
          <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Icons.Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              <span className="font-medium">
                {category.items.length}{' '}
                {language === 'ko'
                  ? '개 프로젝트'
                  : language === 'ja'
                    ? '件のプロジェクト'
                    : 'Projects'}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="bg-slate-50 py-8 sm:py-12 md:py-16 lg:py-20">
        <Container>
          <div className="grid gap-3 sm:gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.items.map((item, index) => (
              <div
                key={index}
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-blue-200 hover:shadow-lg sm:p-5 md:p-6"
              >
                <div className="flex items-start justify-between gap-2 sm:gap-3">
                  <h3 className="text-xs font-semibold text-slate-900 group-hover:text-blue-600 transition-colors sm:text-sm md:text-base leading-relaxed">
                    {item.title}
                  </h3>
                  <span className="shrink-0 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] sm:px-2.5 sm:text-xs font-semibold text-blue-600 ring-1 ring-blue-100">
                    {item.year}
                  </span>
                </div>
                <div className="mt-2 sm:mt-3 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm text-slate-500">
                  <Icons.Building className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span>{item.client}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Other Category CTA */}
      <section className="bg-white py-8 sm:py-10 md:py-12">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold text-slate-900 sm:text-lg md:text-xl">
              {language === 'ko'
                ? '다른 분야 프로젝트도 확인해보세요'
                : language === 'ja'
                  ? '他の分野のプロジェクトもご覧ください'
                  : 'Explore other project categories'}
            </h2>
            <div className="mt-4 sm:mt-5 md:mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
              {t.portfolioMenu?.items
                ?.filter((item) => item.slug !== slug)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/portfolio/${item.slug}`}
                    className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-slate-100 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item.shortTitle}
                    <Icons.ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Link>
                ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-8 sm:py-10 md:py-12">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
              {language === 'ko'
                ? '프로젝트 문의하기'
                : language === 'ja'
                  ? 'プロジェクトのお問い合わせ'
                  : 'Inquire about a project'}
            </h2>
            <p className="mt-2 text-xs text-blue-100 sm:text-sm md:text-base">
              {language === 'ko'
                ? '비슷한 프로젝트가 필요하신가요? 브레인하우스가 도와드리겠습니다.'
                : language === 'ja'
                  ? '同様のプロジェクトが必要ですか？ブレインハウスがお手伝いします。'
                  : 'Need a similar project? Brain House is here to help.'}
            </p>
            <div className="mt-5 sm:mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex h-10 sm:h-11 w-full items-center justify-center rounded-md bg-white px-6 sm:px-8 text-xs sm:text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50 sm:w-auto"
              >
                {t.contact?.form?.submit ||
                  (language === 'ko'
                    ? '문의하기'
                    : language === 'ja'
                      ? 'お問い合わせ'
                      : 'Contact Us')}
              </Link>
              <Link
                href="/portfolio"
                className="text-xs sm:text-sm font-medium text-white hover:text-blue-100"
              >
                {overview?.viewDetails || 'View all portfolio'} →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
