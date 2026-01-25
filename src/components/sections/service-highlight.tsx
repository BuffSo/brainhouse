'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/ui/icons';
import { buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { useLanguage } from '@/contexts/language-context';

const techDomainIcons = [
  { id: 'ax', icon: Icons.Brain, label: 'AX' },
  { id: 'o2o', icon: Icons.Store, label: 'O2O' },
  { id: 'wellnesstech', icon: Icons.Heart, label: 'Wellness' },
  { id: 'fintech', icon: Icons.Wallet, label: 'FinTech' },
  { id: 'edutech', icon: Icons.GraduationCap, label: 'EduTech' },
];

export function ServiceHighlight() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {t.serviceHighlight?.title || '핵심 서비스'}
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl sm:mt-12">
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-lg sm:p-8">
            {/* Badge */}
            <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 sm:text-sm">
              <Icons.Rocket className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              {t.serviceHighlight?.badge || 'New Service'}
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
              {t.serviceDetails?.['mvp-development']?.title || '사업 아이템 기획 및 MVP 개발'}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              {t.serviceHighlight?.description ||
                'Tech Domain별 사업 아이템을 기획하고 MVP를 개발하여 시장 검증까지 지원합니다. 28년의 ICT 현장 경험을 바탕으로 실현 가능한 비즈니스 모델을 설계합니다.'}
            </p>

            {/* Tech Domain Icons */}
            <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
              {techDomainIcons.map((domain) => {
                const IconComponent = domain.icon;
                return (
                  <div
                    key={domain.id}
                    className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-blue-100 hover:text-blue-700 sm:px-4 sm:py-2 sm:text-sm"
                  >
                    <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span>{domain.label}</span>
                  </div>
                );
              })}
              <span className="text-xs text-slate-400 sm:text-sm">+9 more</span>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/services/mvp-development"
                className={cn(
                  buttonVariants({ size: 'default' }),
                  'w-full sm:w-auto'
                )}
              >
                {t.serviceHighlight?.viewMore || '자세히 보기'}
                <Icons.ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Decorative gradient */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 opacity-50 blur-3xl transition-all group-hover:opacity-70" />
          </div>
        </div>
      </Container>
    </section>
  );
}
