import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageHeader } from '@/components/ui/page-header';
import { Services } from '@/components/sections/services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Brain House의 전문 서비스: MVP 개발, AX 컨설팅, ICT 전략, 기술사업화, 창업 컨설팅, AI 알고리즘 개발, 소프트웨어 개발.',
  openGraph: {
    title: 'Services | Brain House',
    description:
      'MVP 개발부터 AI 컨설팅까지, Brain House의 ICT 전문 서비스를 확인하세요.',
    url: 'https://brainhouse.kr/services',
  },
  twitter: {
    title: 'Services | Brain House',
    description:
      'MVP 개발부터 AI 컨설팅까지, Brain House의 ICT 전문 서비스를 확인하세요.',
  },
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader page="services" backgroundImage="/images/services_bg.webp" />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
