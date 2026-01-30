'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/ui/icons';
import { buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { useLanguage } from '@/contexts/language-context';

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-16 sm:py-20">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_40%,rgba(59,130,246,0.4),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(99,102,241,0.3),transparent)]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10" />

      {/* Decorative Gradient Orbs */}
      <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-25 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-gradient-to-tl from-indigo-500 to-purple-500 opacity-20 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-3xl" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            {t.ctaSection?.title || '프로젝트를 시작할 준비가 되셨나요?'}
          </h2>
          <p className="mt-4 text-base text-blue-100 sm:text-lg">
            {t.ctaSection?.description ||
              '전문 컨설턴트가 비즈니스 성장을 함께 합니다'}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'w-full !bg-white !text-blue-600 hover:!bg-blue-50 sm:w-auto'
              )}
            >
              {t.ctaSection?.button || '문의하기'}
              <Icons.ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
