import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ServiceDetail } from '@/components/sections/service-detail';
import { notFound } from 'next/navigation';

const validSlugs = [
  'mvp-development',
  'ax-consulting',
  'ict-strategy',
  'tech-commercialization',
  'startup-investment',
  'education-training',
  'ai-algorithm-development',
  'software-development',
];

const serviceData: Record<string, { title: string; description: string }> = {
  'mvp-development': {
    title: '사업 아이템 기획 및 MVP 개발',
    description:
      'Tech Domain별 사업 아이템 기획 및 MVP 개발 서비스. 아이디어를 빠르게 검증하고 시장에 출시하세요.',
  },
  'ax-consulting': {
    title: 'AX 컨설팅',
    description:
      'AI Transformation 컨설팅 서비스. 기업의 AI 도입 전략 수립부터 실행까지 지원합니다.',
  },
  'ict-strategy': {
    title: 'ICT 전략·정책 컨설팅',
    description:
      '정부 R&D 기획부터 ICT 정책연구까지, 미래 경쟁력 확보를 위한 전략 수립 서비스.',
  },
  'tech-commercialization': {
    title: '기술사업화 컨설팅',
    description:
      '기술을 시장으로 끌어내어 경제적 가치를 창출하는 전문 컨설팅 서비스.',
  },
  'startup-investment': {
    title: '창업·투자 컨설팅',
    description:
      '예비창업자부터 스케일업 중견기업까지 성장 단계별 맞춤형 멘토링·컨설팅과 투자 유치 지원.',
  },
  'education-training': {
    title: '교육 및 특강',
    description:
      '벤처 비즈니스 교육·워크샵 및 ICT 트렌드 특강 서비스. 실무 중심의 역량 강화 프로그램.',
  },
  'ai-algorithm-development': {
    title: '맞춤형 AI 알고리즘 개발',
    description:
      '자연어 처리, 컴퓨터 비전, 오디오 처리 등 고난도 AI 프로젝트 맞춤형 개발 서비스.',
  },
  'software-development': {
    title: '소프트웨어 개발',
    description:
      'Node.js, Next.js, AWS 기반 MVP 개발 및 기업 웹서비스 개발. 확장 가능한 소프트웨어 솔루션.',
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
  const data = serviceData[resolvedParams.slug];

  if (!data) {
    return {
      title: 'Services',
      description: 'Brain House ICT Professional Services',
    };
  }

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: `${data.title} | Brain House`,
      description: data.description,
      url: `https://brainhouse.kr/services/${resolvedParams.slug}`,
    },
    twitter: {
      title: `${data.title} | Brain House`,
      description: data.description,
    },
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
          backgroundImage="/images/services_bg.webp"
        />
      </main>
      <Footer />
    </div>
  );
}
