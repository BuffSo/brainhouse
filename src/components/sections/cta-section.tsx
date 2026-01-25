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
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 py-16 sm:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10" />

      {/* Decorative Elements */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500 opacity-20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-400 opacity-20 blur-3xl" />

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
