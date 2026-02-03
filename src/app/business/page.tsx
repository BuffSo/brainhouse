import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageHeader } from '@/components/ui/page-header';
import { Business } from '@/components/sections/business';

export const metadata: Metadata = {
  title: 'Business Areas',
  description:
    'Brain House의 사업 영역: 기술(AI/SW 개발), 경영(컨설팅), 투자(스타트업), 플랫폼 서비스를 통해 디지털 혁신을 지원합니다.',
  openGraph: {
    title: 'Business Areas | Brain House',
    description:
      '기술, 경영, 투자, 플랫폼 - Brain House의 4대 핵심 사업 영역을 확인하세요.',
    url: 'https://brainhouse.co.kr/business',
  },
  twitter: {
    title: 'Business Areas | Brain House',
    description:
      '기술, 경영, 투자, 플랫폼 - Brain House의 4대 핵심 사업 영역을 확인하세요.',
  },
};

export default function BusinessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader page="business" backgroundImage="/images/business_bg.webp" />
        <Business />
      </main>
      <Footer />
    </div>
  );
}
