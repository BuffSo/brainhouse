import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ServiceDetail } from '@/components/sections/service-detail';
import { notFound } from 'next/navigation';

const validSlugs = ['mvp-development', 'ax-consulting'];

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
    'mvp-development': '사업 아이템 기획 및 MVP 개발 - Brain House',
    'ax-consulting': 'AX 컨설팅 - Brain House',
  };

  const descriptions: Record<string, string> = {
    'mvp-development': 'Tech Domain별 사업 아이템 기획 및 MVP 개발 서비스',
    'ax-consulting': 'AI Transformation 컨설팅 서비스',
  };

  return {
    title: titles[resolvedParams.slug] || 'Services - Brain House',
    description:
      descriptions[resolvedParams.slug] ||
      'Brain House ICT Professional Services',
  };
}

export default async function ServiceDetailPage({
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
        <ServiceDetail
          slug={resolvedParams.slug}
          backgroundImage="/images/services_bg.png"
        />
      </main>
      <Footer />
    </div>
  );
}
