import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PortfolioDetail } from '@/components/sections/portfolio-detail';
import { notFound } from 'next/navigation';

const validSlugs = ['ict-strategy', 'bm-software'];

const portfolioData: Record<string, { title: string; description: string }> = {
  'ict-strategy': {
    title: 'ICT 전략·정책 컨설팅 포트폴리오',
    description:
      '정부 R&D 기획, 기술사업화 전략, ICT 정책연구 분야 프로젝트 실적. Brain House의 전략 컨설팅 역량을 확인하세요.',
  },
  'bm-software': {
    title: 'BM 기획 & SW 개발 포트폴리오',
    description:
      '플랫폼 서비스 기획, BM 수립, MVP 개발 프로젝트 실적. Brain House의 소프트웨어 개발 역량을 확인하세요.',
  },
};

export function generateStaticParams() {
  return validSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const data = portfolioData[resolvedParams.slug];

  if (!data) {
    return {
      title: 'Portfolio',
      description: 'Brain House Portfolio',
    };
  }

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: `${data.title} | Brain House`,
      description: data.description,
      url: `https://brainhouse.co.kr/portfolio/${resolvedParams.slug}`,
    },
    twitter: {
      title: `${data.title} | Brain House`,
      description: data.description,
    },
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
