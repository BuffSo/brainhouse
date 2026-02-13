import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageHeader } from '@/components/ui/page-header';
import { About } from '@/components/sections/about';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Brain House는 AI와 ICT 기술로 기업의 디지털 전환을 이끄는 전문 파트너입니다. 회사 소개, 비전, 핵심 역량을 확인하세요.',
  openGraph: {
    title: 'About | Brain House',
    description:
      'AI와 ICT 기술로 기업의 디지털 전환을 이끄는 전문 파트너, Brain House를 소개합니다.',
    url: 'https://brainhouse.kr/about',
  },
  twitter: {
    title: 'About | Brain House',
    description:
      'AI와 ICT 기술로 기업의 디지털 전환을 이끄는 전문 파트너, Brain House를 소개합니다.',
  },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader page="about" backgroundImage="/images/about_bg.webp" />
        <About />
      </main>
      <Footer />
    </div>
  );
}
