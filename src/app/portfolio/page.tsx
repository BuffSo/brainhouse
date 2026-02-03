import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageHeader } from '@/components/ui/page-header';
import { Portfolio } from '@/components/sections/portfolio';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Brain House의 프로젝트 실적: ICT 전략·정책 컨설팅, BM 기획 및 소프트웨어 개발 포트폴리오를 확인하세요.',
  openGraph: {
    title: 'Portfolio | Brain House',
    description:
      '정부 R&D, ICT 정책연구, MVP 개발 등 Brain House의 프로젝트 실적을 확인하세요.',
    url: 'https://brainhouse.co.kr/portfolio',
  },
  twitter: {
    title: 'Portfolio | Brain House',
    description:
      '정부 R&D, ICT 정책연구, MVP 개발 등 Brain House의 프로젝트 실적을 확인하세요.',
  },
};

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader
          page="portfolio"
          backgroundImage="/images/portfolio_bg.webp"
        />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
