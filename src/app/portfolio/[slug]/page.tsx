import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PortfolioDetail } from '@/components/sections/portfolio-detail';
import { notFound } from 'next/navigation';

const validSlugs = ['ict-strategy', 'bm-software'];

export function generateStaticParams() {
  return validSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const titles: Record<string, string> = {
    'ict-strategy': 'ICT 전략·정책 컨설팅 포트폴리오 - Brain House',
    'bm-software': 'BM 기획 & SW 개발 포트폴리오 - Brain House',
  };

  const descriptions: Record<string, string> = {
    'ict-strategy':
      '정부 R&D 기획, 기술사업화 전략, ICT 정책연구 분야 프로젝트 실적',
    'bm-software':
      '플랫폼 서비스 기획, BM 수립, MVP 개발 프로젝트 실적',
  };

  return {
    title: titles[resolvedParams.slug] || 'Portfolio - Brain House',
    description:
      descriptions[resolvedParams.slug] || 'Brain House Portfolio',
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;

  if (!validSlugs.includes(resolvedParams.slug)) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PortfolioDetail
          slug={resolvedParams.slug}
          backgroundImage="/images/portfolio_bg.webp"
        />
      </main>
      <Footer />
    </div>
  );
}
