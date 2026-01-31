'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Icons } from '@/components/ui/icons';
import { useLanguage } from '@/contexts/language-context';
import { StrategyFlow } from './strategy-flow';
import { TechDomainGrid } from './tech-domain-grid';
import { PhysicalAISection } from './physical-ai-section';
import { AXDefinitionSection } from './ax-definition-section';
import { CorePillarsGrid } from './core-pillars-grid';
import { EvolutionStages } from './evolution-stages';
import { ConsultingFramework } from './consulting-framework';
import { BusinessModelsGrid } from './business-models-grid';

interface ServiceDetailProps {
  slug: string;
  backgroundImage?: string;
}

export function ServiceDetail({ slug, backgroundImage }: ServiceDetailProps) {
  const { t } = useLanguage();
  const serviceDetails =
    t.serviceDetails?.[slug as keyof typeof t.serviceDetails];
  const ui = t.serviceDetailUI;

  if (!serviceDetails) {
    return (
      <section className="py-16 sm:py-24">
        <Container>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900">{ui.notFound}</h1>
            <Link
              href="/services"
              className="mt-4 text-blue-600 hover:underline"
            >
              {ui.viewAllServices}
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  const isComingSoon =
    'comingSoon' in serviceDetails && serviceDetails.comingSoon;

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 py-16 pt-24 sm:px-6 sm:py-20 sm:pt-32 min-h-[260px] flex flex-col justify-center">
        {backgroundImage ? (
          <>
            <Image
              src={backgroundImage}
              alt="Background"
              fill
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-900/90" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-20" />
        )}
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center px-2 sm:px-4">
            <h1 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl break-keep">
              {serviceDetails.title}
            </h1>
            <p className="mt-3 text-sm text-blue-100 sm:mt-4 sm:text-base md:text-lg lg:text-xl break-keep">
              {serviceDetails.subtitle.includes(' 및 ') ? (
                <>
                  {serviceDetails.subtitle.split(' 및 ')[0]} 및
                  <br className="sm:hidden" />
                  <span className="sm:inline"> </span>
                  {serviceDetails.subtitle.split(' 및 ').slice(1).join(' 및 ')}
                </>
              ) : (
                serviceDetails.subtitle
              )}
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
              <p className="text-sm sm:text-base font-medium text-center">
                {ui.comingSoonMessage}
              </p>
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

      {/* Physical AI Section - AX Consulting Only */}
      {'physicalAI' in serviceDetails && serviceDetails.physicalAI && (
        <section className="bg-slate-50 py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mb-6 sm:mb-8 text-center">
              <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                <Icons.Bot className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  Physical AI
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                {serviceDetails.physicalAI.sectionTitle}
              </h2>
            </div>
            <PhysicalAISection
              sectionTitle={serviceDetails.physicalAI.sectionTitle}
              description={serviceDetails.physicalAI.description}
              types={serviceDetails.physicalAI.types}
              coreTech={serviceDetails.physicalAI.coreTech}
              expertise={serviceDetails.physicalAI.expertise}
            />
          </Container>
        </section>
      )}

      {/* AX Definition Section - AX Consulting Only */}
      {'axDefinition' in serviceDetails && serviceDetails.axDefinition && (
        <section className="py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mb-6 sm:mb-8 text-center">
              <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                <Icons.Brain className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  AI Transformation
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                {serviceDetails.axDefinition.sectionTitle}
              </h2>
            </div>
            <AXDefinitionSection
              description={serviceDetails.axDefinition.description}
              keyPoint={serviceDetails.axDefinition.keyPoint}
              comparison={serviceDetails.axDefinition.comparison}
            />
          </Container>
        </section>
      )}

      {/* Core Pillars Section - AX Consulting Only */}
      {'corePillars' in serviceDetails && serviceDetails.corePillars && (
        <section className="bg-slate-50 py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mb-6 sm:mb-8 text-center">
              <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                <Icons.Layers className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  Core Pillars
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                {serviceDetails.corePillars.sectionTitle}
              </h2>
            </div>
            <CorePillarsGrid pillars={serviceDetails.corePillars.items} />
          </Container>
        </section>
      )}

      {/* Evolution Stages Section - AX Consulting Only */}
      {'evolutionStages' in serviceDetails &&
        serviceDetails.evolutionStages && (
          <section className="py-8 sm:py-12 md:py-16">
            <Container>
              <div className="mx-auto max-w-4xl">
                <div className="mb-6 sm:mb-8 text-center">
                  <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                    <Icons.TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                      Evolution
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                    {serviceDetails.evolutionStages.sectionTitle}
                  </h2>
                  <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
                    {serviceDetails.evolutionStages.description}
                  </p>
                </div>
                <EvolutionStages
                  stages={serviceDetails.evolutionStages.stages}
                />
              </div>
            </Container>
          </section>
        )}

      {/* Consulting Framework Section - AX Consulting Only */}
      {'consultingFramework' in serviceDetails &&
        serviceDetails.consultingFramework && (
          <section className="bg-slate-50 py-8 sm:py-12 md:py-16">
            <Container>
              <div className="mb-6 sm:mb-8 text-center">
                <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                  <Icons.Target className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    Framework
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                  {serviceDetails.consultingFramework.sectionTitle}
                </h2>
                <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
                  {serviceDetails.consultingFramework.description}
                </p>
              </div>
              <ConsultingFramework
                phases={serviceDetails.consultingFramework.phases}
              />
            </Container>
          </section>
        )}

      {/* Business Models Section - AX Consulting Only */}
      {'businessModels' in serviceDetails && serviceDetails.businessModels && (
        <section className="py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mb-6 sm:mb-8 text-center">
              <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                <Icons.Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  Business Models
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                {serviceDetails.businessModels.sectionTitle}
              </h2>
              <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
                {serviceDetails.businessModels.description}
              </p>
            </div>
            <BusinessModelsGrid models={serviceDetails.businessModels.models} />
          </Container>
        </section>
      )}

      {/* Target Customers Section - MVP Development Only */}
      {'targetCustomers' in serviceDetails &&
        serviceDetails.targetCustomers && (
          <section className="bg-slate-50 py-8 sm:py-12 md:py-16">
            <Container>
              <div className="mx-auto max-w-4xl">
                <div className="mb-6 sm:mb-8 text-center">
                  <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                    <Icons.Users className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                      {ui.targetCustomersLabel}
                    </span>
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
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    {ui.processLabel}
                  </span>
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
      {'techDomains' in serviceDetails &&
        serviceDetails.techDomains &&
        serviceDetails.techDomains.length > 0 && (
          <section className="bg-slate-50 py-8 sm:py-12 md:py-16">
            <Container>
              <div className="mb-6 sm:mb-8 md:mb-10 text-center">
                <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                  <Icons.Layers className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    {ui.techDomainsLabel}
                  </span>
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

      {/* Objectives Section - ICT Strategy Only */}
      {'objectives' in serviceDetails && serviceDetails.objectives && (
        <section className="bg-slate-50 py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 sm:mb-8 text-center">
                <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                  <Icons.Target className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    Objectives
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                  {serviceDetails.objectives.sectionTitle}
                </h2>
              </div>
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                {serviceDetails.objectives.items.map(
                  (item: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200"
                    >
                      <Icons.CheckCircle className="h-5 w-5 flex-shrink-0 text-blue-600" />
                      <span className="text-sm sm:text-base text-slate-700">
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Consulting Areas Section - ICT Strategy Only */}
      {'consultingAreas' in serviceDetails &&
        serviceDetails.consultingAreas && (
          <section className="py-8 sm:py-12 md:py-16">
            <Container>
              <div className="mb-6 sm:mb-8 text-center">
                <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                  <Icons.Layers className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    Consulting Areas
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                  {serviceDetails.consultingAreas.sectionTitle}
                </h2>
              </div>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                {serviceDetails.consultingAreas.areas.map(
                  (
                    area: {
                      title: string;
                      icon: string;
                      items: string[];
                    },
                    index: number
                  ) => {
                    const IconComponent =
                      Icons[area.icon as keyof typeof Icons] || Icons.Layers;
                    return (
                      <div
                        key={index}
                        className="rounded-xl bg-white p-5 sm:p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md"
                      >
                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                            <IconComponent className="h-5 w-5 text-blue-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-slate-900">
                            {area.title}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {area.items.map((item: string, itemIndex: number) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-2 text-sm text-slate-600"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                )}
              </div>
            </Container>
          </section>
        )}

      {/* Outputs Section - ICT Strategy Only */}
      {'outputs' in serviceDetails && serviceDetails.outputs && (
        <section className="bg-slate-50 py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 sm:mb-8 text-center">
                <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                  <Icons.FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    Deliverables
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                  {serviceDetails.outputs.sectionTitle}
                </h2>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {serviceDetails.outputs.items.map(
                  (item: string, index: number) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200"
                    >
                      <Icons.CheckCircle className="h-4 w-4 text-green-500" />
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* New Business Framework Section - ICT Strategy Only */}
      {'newBusinessFramework' in serviceDetails &&
        serviceDetails.newBusinessFramework && (
          <section className="py-8 sm:py-12 md:py-16">
            <Container>
              <div className="mx-auto max-w-4xl">
                <div className="mb-6 sm:mb-8 text-center">
                  <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                    <Icons.Rocket className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                      Framework
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                    {serviceDetails.newBusinessFramework.sectionTitle}
                  </h2>
                  <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
                    {serviceDetails.newBusinessFramework.description}
                  </p>
                </div>
                <div className="space-y-4">
                  {serviceDetails.newBusinessFramework.steps.map(
                    (
                      step: { step: number; title: string; description: string },
                      index: number
                    ) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 rounded-lg bg-white p-4 sm:p-5 shadow-sm ring-1 ring-slate-200"
                      >
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900">
                            {step.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-600">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </Container>
          </section>
        )}

      {/* Trends Section - ICT Strategy Only */}
      {'trends' in serviceDetails && serviceDetails.trends && (
        <section className="bg-slate-50 py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 sm:mb-8 text-center">
                <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                  <Icons.TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    Trends
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                  {serviceDetails.trends.sectionTitle}
                </h2>
              </div>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {serviceDetails.trends.items.map(
                  (item: string, index: number) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-blue-200"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Industry Comparison Section - ICT Strategy Only */}
      {'industryComparison' in serviceDetails &&
        serviceDetails.industryComparison && (
          <section className="py-8 sm:py-12 md:py-16">
            <Container>
              <div className="mx-auto max-w-5xl">
                <div className="mb-6 sm:mb-8 text-center">
                  <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                    <Icons.BarChart className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                      Industry Analysis
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                    {serviceDetails.industryComparison.sectionTitle}
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px] border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50">
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">
                          산업
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">
                          핵심 가치
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">
                          주요 기술
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">
                          최우선 과제
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {serviceDetails.industryComparison.industries.map(
                        (
                          industry: {
                            name: string;
                            coreValue: string;
                            keyTech: string;
                            priority: string;
                          },
                          index: number
                        ) => (
                          <tr
                            key={index}
                            className="border-b border-slate-100 transition-colors hover:bg-slate-50"
                          >
                            <td className="px-4 py-3 text-sm font-medium text-slate-900">
                              {industry.name}
                            </td>
                            <td className="px-4 py-3 text-sm text-slate-600">
                              {industry.coreValue}
                            </td>
                            <td className="px-4 py-3 text-sm text-slate-600">
                              {industry.keyTech}
                            </td>
                            <td className="px-4 py-3 text-sm text-slate-600">
                              {industry.priority}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
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
