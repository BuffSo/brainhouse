'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Icons } from '@/components/ui/icons';
import { useLanguage } from '@/contexts/language-context';
import { StrategyFlow } from './strategy-flow';
import { TechDomainGrid } from './tech-domain-grid';

interface ServiceDetailProps {
  slug: string;
}

export function ServiceDetail({ slug }: ServiceDetailProps) {
  const { t } = useLanguage();
  const serviceDetails = t.serviceDetails?.[slug as keyof typeof t.serviceDetails];
  const ui = t.serviceDetailUI;

  if (!serviceDetails) {
    return (
      <section className="py-16 sm:py-24">
        <Container>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900">{ui.notFound}</h1>
            <Link href="/services" className="mt-4 text-blue-600 hover:underline">
              {ui.viewAllServices}
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  const isComingSoon = 'comingSoon' in serviceDetails && serviceDetails.comingSoon;

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-12 sm:py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-20" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center px-1">
            <div className="mb-3 sm:mb-4 inline-flex items-center rounded-full bg-blue-500/20 px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm font-medium text-blue-300">
              <Icons.Rocket className="mr-1.5 h-3.5 w-3.5 sm:mr-2 sm:h-4 sm:w-4" />
              New Service
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {serviceDetails.title}
            </h1>
            <p className="mt-3 text-base text-blue-100 sm:mt-4 sm:text-lg md:text-xl">
              {serviceDetails.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Coming Soon Notice */}
      {isComingSoon && (
        <section className="bg-amber-50 py-4 sm:py-6 md:py-8">
          <Container>
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-amber-800">
              <Icons.Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <p className="text-sm sm:text-base font-medium text-center">{ui.comingSoonMessage}</p>
            </div>
          </Container>
        </section>
      )}

      {/* Description Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl">
              {serviceDetails.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Target Customers Section - MVP Development Only */}
      {'targetCustomers' in serviceDetails && serviceDetails.targetCustomers && (
        <section className="bg-slate-50 py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 sm:mb-8 text-center">
                <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                  <Icons.Users className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">{ui.targetCustomersLabel}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                  {ui.targetCustomersTitle}
                </h2>
              </div>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {serviceDetails.targetCustomers.map((customer, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-white px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 transition-all hover:ring-blue-200 hover:shadow-md"
                  >
                    {customer}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Process Steps Section */}
      {'processSteps' in serviceDetails && serviceDetails.processSteps && (
        <section className="py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 sm:mb-8 text-center">
                <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                  <Icons.Target className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">{ui.processLabel}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                  {ui.processTitle}
                </h2>
              </div>
              <StrategyFlow steps={serviceDetails.processSteps} />
            </div>
          </Container>
        </section>
      )}

      {/* Tech Domains Section - MVP Development Only */}
      {'techDomains' in serviceDetails && serviceDetails.techDomains && serviceDetails.techDomains.length > 0 && (
        <section className="bg-slate-50 py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mb-6 sm:mb-8 md:mb-10 text-center">
              <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                <Icons.Layers className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">{ui.techDomainsLabel}</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                {ui.techDomainsTitle}
              </h2>
              <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
                {ui.techDomainsDescription}
              </p>
            </div>
            <TechDomainGrid domains={serviceDetails.techDomains} />
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-10 sm:py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              {ui.ctaTitle}
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-blue-100">
              {ui.ctaDescription}
            </p>
            <div className="mt-5 sm:mt-6 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex h-10 sm:h-11 items-center justify-center rounded-md bg-white px-6 sm:px-8 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {ui.ctaButton}
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-white hover:text-blue-100"
              >
                {ui.ctaViewAll}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
