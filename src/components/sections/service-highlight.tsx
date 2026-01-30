'use client';

import Link from 'next/link';
import { Icons } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { useLanguage } from '@/contexts/language-context';

const techDomainIcons = [
  { id: 'ax', icon: Icons.Brain, label: 'AX' },
  { id: 'o2o', icon: Icons.Store, label: 'O2O' },
  { id: 'wellnesstech', icon: Icons.Heart, label: 'Wellness' },
  { id: 'fintech', icon: Icons.Wallet, label: 'FinTech' },
  { id: 'edutech', icon: Icons.GraduationCap, label: 'EduTech' },
];

const axPillarKeys = [
  { id: 'efficiency', icon: Icons.Zap },
  { id: 'cx', icon: Icons.Users },
  { id: 'revenue', icon: Icons.TrendingUp },
] as const;

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

        <div className="mx-auto mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2 lg:max-w-5xl">
          {/* AX Consulting Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-lg sm:p-8">
            {/* Icon */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Icons.Brain className="h-6 w-6" />
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
              {t.serviceDetails?.['ax-consulting']?.title || 'AX 컨설팅'}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base line-clamp-3">
              {t.serviceDetails?.['ax-consulting']?.subtitle || 'AI Transformation 전략 수립부터 실행까지'}
            </p>

            {/* AX Pillar Icons */}
            <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
              {axPillarKeys.map((pillar) => {
                const IconComponent = pillar.icon;
                const label = t.serviceHighlight?.axPillars?.[pillar.id as keyof typeof t.serviceHighlight.axPillars] || pillar.id;
                return (
                  <div
                    key={pillar.id}
                    className="flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-700 sm:px-4 sm:py-2 sm:text-sm"
                  >
                    <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span>{label}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Button asChild className="w-full sm:w-auto">
                <Link href="/services/ax-consulting">
                  {t.serviceHighlight?.viewMore || '자세히 보기'}
                  <Icons.ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Decorative gradient */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 opacity-50 blur-3xl transition-all group-hover:opacity-70" />
          </div>

          {/* MVP Development Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-lg sm:p-8">
            {/* Icon */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white">
              <Icons.Rocket className="h-6 w-6" />
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
              {t.serviceDetails?.['mvp-development']?.title || '사업 아이템 기획 및 MVP 개발'}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base line-clamp-3">
              {t.serviceDetails?.['mvp-development']?.subtitle || 'Tech Domain별 아이템 기획부터 시장 검증까지'}
            </p>

            {/* Tech Domain Icons */}
            <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
              {techDomainIcons.map((domain) => {
                const IconComponent = domain.icon;
                return (
                  <div
                    key={domain.id}
                    className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-emerald-100 hover:text-emerald-700 sm:px-4 sm:py-2 sm:text-sm"
                  >
                    <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span>{domain.label}</span>
                  </div>
                );
              })}
              <span className="text-xs text-slate-400 sm:text-sm">+9</span>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href="/services/mvp-development">
                  {t.serviceHighlight?.viewMore || '자세히 보기'}
                  <Icons.ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Decorative gradient */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-100 to-cyan-100 opacity-50 blur-3xl transition-all group-hover:opacity-70" />
          </div>
        </div>
      </Container>
    </section>
  );
}
