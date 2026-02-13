import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageHeader } from '@/components/ui/page-header';
import { Contact } from '@/components/sections/contact';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Brain House에 프로젝트 문의하기. AI 컨설팅, MVP 개발, ICT 전략 등 디지털 혁신 파트너와 함께하세요.',
  openGraph: {
    title: 'Contact | Brain House',
    description:
      '프로젝트 문의 및 상담. Brain House와 함께 디지털 혁신을 시작하세요.',
    url: 'https://brainhouse.kr/contact',
  },
  twitter: {
    title: 'Contact | Brain House',
    description:
      '프로젝트 문의 및 상담. Brain House와 함께 디지털 혁신을 시작하세요.',
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader page="contact" backgroundImage="/images/contact_bg.webp" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
