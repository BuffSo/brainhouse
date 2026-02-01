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
  const { t, language } = useLanguage();
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
            {Array.isArray(serviceDetails.description) ? (
              <div className="space-y-4">
                {serviceDetails.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl">
                {serviceDetails.description}
              </p>
            )}
          </div>
        </Container>
      </section>

      {/* Service Types Section - Software Development Only */}
      {'serviceTypes' in serviceDetails && serviceDetails.serviceTypes && (
        <section className="bg-slate-50 py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mb-6 sm:mb-8 text-center">
              <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                <Icons.Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  Service Types
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                {serviceDetails.serviceTypes.sectionTitle}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {serviceDetails.serviceTypes.types.map(
                (
                  type: {
                    title: string;
                    icon: string;
                    target: string;
                    description: string;
                    features: string[];
                  },
                  index: number
                ) => {
                  const IconComponent =
                    Icons[type.icon as keyof typeof Icons] || Icons.Code;
                  return (
                    <div
                      key={index}
                      className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="mb-1 text-lg font-semibold text-slate-900">
                        {type.title}
                      </h3>
                      <p className="mb-3 text-xs text-blue-600 font-medium">
                        {type.target}
                      </p>
                      <p className="mb-4 text-sm text-slate-600">
                        {type.description}
                      </p>
                      <ul className="space-y-2">
                        {type.features.map((feature: string, fIndex: number) => (
                          <li
                            key={fIndex}
                            className="flex items-start gap-2 text-sm text-slate-600"
                          >
                            <Icons.Check className="h-4 w-4 flex-shrink-0 text-green-500 mt-0.5" />
                            {feature}
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

      {/* Tech Stack Section - Software Development Only */}
      {'techStack' in serviceDetails && serviceDetails.techStack && (
        <section className="py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mb-6 sm:mb-8 text-center">
              <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                <Icons.Code className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  Tech Stack
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                {serviceDetails.techStack.sectionTitle}
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {serviceDetails.techStack.categories.map(
                (
                  category: {
                    name: string;
                    icon: string;
                    items: string[];
                  },
                  index: number
                ) => {
                  const IconComponent =
                    Icons[category.icon as keyof typeof Icons] || Icons.Code;
                  return (
                    <div
                      key={index}
                      className="rounded-xl bg-gradient-to-br from-slate-900 to-blue-900 p-5 text-white"
                    >
                      <div className="mb-3 flex items-center gap-2">
                        <IconComponent className="h-5 w-5 text-blue-300" />
                        <h3 className="font-semibold">{category.name}</h3>
                      </div>
                      <ul className="space-y-1.5">
                        {category.items.map((item: string, iIndex: number) => (
                          <li
                            key={iIndex}
                            className="text-sm text-blue-100"
                          >
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

      {/* Development Process Section - Software Development Only */}
      {'developmentProcess' in serviceDetails &&
        serviceDetails.developmentProcess && (
          <section className="bg-slate-50 py-8 sm:py-12 md:py-16">
            <Container>
              <div className="mx-auto max-w-5xl">
                <div className="mb-6 sm:mb-8 text-center">
                  <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                    <Icons.Settings className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                      Process
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                    {serviceDetails.developmentProcess.sectionTitle}
                  </h2>
                </div>
                <div className="space-y-4">
                  {serviceDetails.developmentProcess.steps.map(
                    (
                      step: {
                        step: number;
                        title: string;
                        duration: string;
                        icon: string;
                        description: string;
                        deliverables: string[];
                      },
                      index: number
                    ) => {
                      const IconComponent =
                        Icons[step.icon as keyof typeof Icons] || Icons.Target;
                      return (
                        <div
                          key={index}
                          className="flex gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
                        >
                          <div className="flex flex-col items-center">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                              {step.step}
                            </div>
                            {index <
                              serviceDetails.developmentProcess.steps.length - 1 && (
                              <div className="mt-2 h-full w-0.5 bg-blue-200" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <IconComponent className="h-5 w-5 text-blue-600" />
                              <h3 className="font-semibold text-slate-900">
                                {step.title}
                              </h3>
                              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                                {step.duration}
                              </span>
                            </div>
                            <p className="mb-3 text-sm text-slate-600">
                              {step.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {step.deliverables.map(
                                (deliverable: string, dIndex: number) => (
                                  <span
                                    key={dIndex}
                                    className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
                                  >
                                    <Icons.CheckCircle className="h-3 w-3 text-green-500" />
                                    {deliverable}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </Container>
          </section>
        )}

      {/* Why Brain House Section - Software Development Only */}
      {'whyBrainHouse' in serviceDetails && serviceDetails.whyBrainHouse && (
        <section className="py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 sm:mb-8 text-center">
                <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                  <Icons.Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    Why Us
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                  {serviceDetails.whyBrainHouse.sectionTitle}
                </h2>
              </div>
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                {serviceDetails.whyBrainHouse.points.map(
                  (
                    point: {
                      title: string;
                      icon: string;
                      description: string;
                    },
                    index: number
                  ) => {
                    const IconComponent =
                      Icons[point.icon as keyof typeof Icons] || Icons.Star;
                    return (
                      <div
                        key={index}
                        className="flex gap-4 rounded-xl bg-gradient-to-br from-blue-50 to-white p-5 shadow-sm ring-1 ring-blue-100"
                      >
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold text-slate-900">
                            {point.title}
                          </h3>
                          <p className="text-sm text-slate-600">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* AI Models Section - AI Algorithm Development Only */}
      {'aiModels' in serviceDetails && serviceDetails.aiModels && (
        <section className="bg-slate-50 py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="mb-6 sm:mb-8 text-center">
                <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                  <Icons.Brain className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    AI Models
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                  {serviceDetails.aiModels.sectionTitle}
                </h2>
                <p className="mx-auto mt-2 sm:mt-3 max-w-3xl text-sm sm:text-base text-slate-600">
                  {serviceDetails.aiModels.intro}
                </p>
              </div>

              {/* Machine Learning Section */}
              <div className="mb-6 sm:mb-8 rounded-xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="mb-2 text-base sm:text-lg font-bold text-slate-900">
                  {serviceDetails.aiModels.machineLearning.title}
                </h3>
                <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-slate-600">
                  {serviceDetails.aiModels.machineLearning.description}
                </p>
                <div className="space-y-4 sm:space-y-6">
                  {serviceDetails.aiModels.machineLearning.categories.map(
                    (
                      category: {
                        title: string;
                        description: string;
                        algorithms?: Array<{
                          name: string;
                          description: string;
                          examples: string;
                        }>;
                        examples?: string;
                      },
                      catIndex: number
                    ) => {
                      const isSubCategory = category.title.startsWith('○');
                      return (
                        <div
                          key={catIndex}
                          className={`rounded-lg bg-slate-50 p-3 sm:p-4 ${isSubCategory ? 'ml-3 sm:ml-4 border-l-2 border-blue-200' : ''}`}
                        >
                          <h4 className={`mb-1.5 sm:mb-2 font-semibold text-slate-900 ${isSubCategory ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'}`}>
                            {category.title}
                          </h4>
                        <p className="mb-2 sm:mb-3 text-xs sm:text-sm text-slate-600">
                          {category.description}
                        </p>
                        {category.examples && (
                          <p className="text-[10px] sm:text-xs text-blue-600 font-medium">
                            예시: {category.examples}
                          </p>
                        )}
                        {category.algorithms && category.algorithms.length > 0 && (
                          <div className="mt-2 sm:mt-3 space-y-2 sm:space-y-3">
                            {category.algorithms.map((algo, algoIndex) => (
                              <div
                                key={algoIndex}
                                className="rounded-lg bg-white p-2.5 sm:p-3 ring-1 ring-slate-200"
                              >
                                <h5 className="font-medium text-slate-900 text-xs sm:text-sm">
                                  {algo.name}
                                </h5>
                                <p className="mt-1 text-[10px] sm:text-xs text-slate-600">
                                  {algo.description}
                                </p>
                                {algo.examples && (
                                  <p className="mt-1 text-[10px] sm:text-xs text-blue-600">
                                    예시: {algo.examples}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Deep Learning Section */}
              <div className="mb-6 sm:mb-8 rounded-xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="mb-2 text-base sm:text-lg font-bold text-slate-900">
                  {serviceDetails.aiModels.deepLearning.title}
                </h3>
                <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-slate-600">
                  {serviceDetails.aiModels.deepLearning.description}
                </p>
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                  {serviceDetails.aiModels.deepLearning.models.map(
                    (
                      model: {
                        name: string;
                        description: string;
                        examples: string;
                      },
                      modelIndex: number
                    ) => (
                      <div
                        key={modelIndex}
                        className="rounded-lg bg-gradient-to-br from-blue-50 to-white p-3 sm:p-4 ring-1 ring-blue-100"
                      >
                        <h4 className="font-semibold text-slate-900 text-xs sm:text-sm">
                          {model.name}
                        </h4>
                        <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-slate-600">
                          {model.description}
                        </p>
                        <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-blue-600">
                          활용: {model.examples}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Comparison Table */}
              <div className="rounded-xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-bold text-slate-900">
                  {serviceDetails.aiModels.comparison.title}
                </h3>
                <div className="-mx-4 sm:mx-0 overflow-x-auto">
                  <table className="w-full min-w-[400px] border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50">
                        <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-slate-900">
                          구분
                        </th>
                        <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-slate-900">
                          머신러닝
                        </th>
                        <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-slate-900">
                          딥러닝
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {serviceDetails.aiModels.comparison.items.map(
                        (
                          item: { aspect: string; ml: string; dl: string },
                          itemIndex: number
                        ) => (
                          <tr
                            key={itemIndex}
                            className="border-b border-slate-100"
                          >
                            <td className="px-3 sm:px-4 py-2 sm:py-3 font-medium text-slate-900">
                              {item.aspect}
                            </td>
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-slate-600">
                              {item.ml}
                            </td>
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-slate-600">
                              {item.dl}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Algorithm Guide - Same level as Comparison */}
              {'algorithmGuide' in serviceDetails &&
                serviceDetails.algorithmGuide && (
                  <div className="mt-6 sm:mt-8 rounded-xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-slate-200">
                    <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-bold text-slate-900">
                      {serviceDetails.algorithmGuide.sectionTitle}
                    </h3>
                    <div className="-mx-4 sm:mx-0 overflow-x-auto">
                      <table className="w-full min-w-[320px] border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="border-b border-slate-200 bg-blue-50">
                            <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-slate-900">
                              목적
                            </th>
                            <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-slate-900">
                              추천 알고리즘
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {serviceDetails.algorithmGuide.items.map(
                            (
                              item: { purpose: string; algorithms: string },
                              itemIndex: number
                            ) => (
                              <tr
                                key={itemIndex}
                                className="border-b border-slate-100 transition-colors hover:bg-slate-50"
                              >
                                <td className="px-3 sm:px-4 py-2 sm:py-3 font-medium text-slate-900">
                                  {item.purpose}
                                </td>
                                <td className="px-3 sm:px-4 py-2 sm:py-3 text-blue-600 font-medium">
                                  {item.algorithms}
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
            </div>
          </Container>
        </section>
      )}

      {/* Industry Cases Section - AI Algorithm Development Only */}
      {'industryCases' in serviceDetails && serviceDetails.industryCases && (
        <section className="bg-slate-50 py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="mb-6 sm:mb-8 text-center">
                <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                  <Icons.Building className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    Industry Cases
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                  {serviceDetails.industryCases.sectionTitle}
                </h2>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {serviceDetails.industryCases.cases.map(
                  (
                    caseItem: {
                      title: string;
                      description: string;
                      icon: string;
                      examples?: Array<{ name: string; detail: string }>;
                      applications?: string;
                      networkingTable?: Array<{
                        category: string;
                        content: string;
                        mlTech: string;
                      }>;
                    },
                    caseIndex: number
                  ) => {
                    const IconComponent =
                      Icons[caseItem.icon as keyof typeof Icons] || Icons.Layers;
                    return (
                      <div
                        key={caseIndex}
                        className="rounded-xl bg-white p-4 sm:p-5 shadow-sm ring-1 ring-slate-200"
                      >
                        <div className="mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3">
                          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-blue-100">
                            <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                          </div>
                          <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                            {caseItem.title}
                          </h3>
                        </div>
                        <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-slate-600">
                          {caseItem.description}
                        </p>
                        {caseItem.applications && (
                          <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs text-blue-600 font-medium">
                            적용 분야: {caseItem.applications}
                          </p>
                        )}
                        {caseItem.examples && caseItem.examples.length > 0 && (
                          <div className="grid gap-2 sm:gap-3 sm:grid-cols-2">
                            {caseItem.examples.map((example, exIndex) => (
                              <div
                                key={exIndex}
                                className="rounded-lg bg-slate-50 p-2.5 sm:p-3"
                              >
                                <h4 className="font-medium text-slate-900 text-xs sm:text-sm">
                                  {example.name}
                                </h4>
                                <p className="mt-1 text-[10px] sm:text-xs text-slate-600">
                                  {example.detail}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                        {caseItem.networkingTable &&
                          caseItem.networkingTable.length > 0 && (
                            <div className="mt-3 sm:mt-4 -mx-4 sm:mx-0 overflow-x-auto">
                              <table className="w-full min-w-[480px] border-collapse text-[10px] sm:text-xs">
                                <thead>
                                  <tr className="border-b border-slate-200 bg-slate-50">
                                    <th className="px-2 sm:px-3 py-1.5 sm:py-2 text-left font-semibold text-slate-900">
                                      분류
                                    </th>
                                    <th className="px-2 sm:px-3 py-1.5 sm:py-2 text-left font-semibold text-slate-900">
                                      내용
                                    </th>
                                    <th className="px-2 sm:px-3 py-1.5 sm:py-2 text-left font-semibold text-slate-900">
                                      ML 기술
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {caseItem.networkingTable.map(
                                    (row, rowIndex) => (
                                      <tr
                                        key={rowIndex}
                                        className="border-b border-slate-100"
                                      >
                                        <td className="px-2 sm:px-3 py-1.5 sm:py-2 font-medium text-slate-900">
                                          {row.category}
                                        </td>
                                        <td className="px-2 sm:px-3 py-1.5 sm:py-2 text-slate-600">
                                          {row.content}
                                        </td>
                                        <td className="px-2 sm:px-3 py-1.5 sm:py-2 text-blue-600">
                                          {row.mlTech}
                                        </td>
                                      </tr>
                                    )
                                  )}
                                </tbody>
                              </table>
                            </div>
                          )}
                      </div>
                    );
                  }
                )}
              </div>

              {/* Summary Table */}
              {serviceDetails.industryCases.summary && (
                <div className="mt-6 sm:mt-8 rounded-xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-slate-200">
                  <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-bold text-slate-900">
                    {serviceDetails.industryCases.summary.title}
                  </h3>
                  <div className="-mx-4 sm:mx-0 overflow-x-auto">
                    <table className="w-full min-w-[400px] border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-slate-200 bg-blue-50">
                          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-slate-900">
                            분야
                          </th>
                          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-slate-900">
                            알고리즘
                          </th>
                          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-slate-900">
                            사례
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {serviceDetails.industryCases.summary.items.map(
                          (
                            item: {
                              field: string;
                              algorithm: string;
                              example: string;
                            },
                            itemIndex: number
                          ) => (
                            <tr
                              key={itemIndex}
                              className="border-b border-slate-100"
                            >
                              <td className="px-3 sm:px-4 py-2 sm:py-3 font-medium text-slate-900">
                                {item.field}
                              </td>
                              <td className="px-3 sm:px-4 py-2 sm:py-3 text-blue-600">
                                {item.algorithm}
                              </td>
                              <td className="px-3 sm:px-4 py-2 sm:py-3 text-slate-600">
                                {item.example}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* Recent Cases Section - AI Algorithm Development Only */}
      {'recentCases' in serviceDetails && serviceDetails.recentCases && (
        <section className="py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="mb-6 sm:mb-8 text-center">
                <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                  <Icons.Zap className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    Recent Cases
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                  {serviceDetails.recentCases.sectionTitle}
                </h2>
                <p className="mx-auto mt-2 sm:mt-3 max-w-3xl text-xs sm:text-sm md:text-base text-slate-600">
                  {serviceDetails.recentCases.intro}
                </p>
              </div>

              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {serviceDetails.recentCases.models.map(
                  (
                    model: {
                      name: string;
                      subtitle: string;
                      features: string;
                      core: string;
                    },
                    modelIndex: number
                  ) => (
                    <div
                      key={modelIndex}
                      className="rounded-xl bg-gradient-to-br from-slate-900 to-blue-900 p-4 sm:p-5 text-white"
                    >
                      <h3 className="font-semibold text-white text-xs sm:text-sm">
                        {model.name}
                      </h3>
                      <p className="mt-1 text-[10px] sm:text-xs text-blue-300 font-medium">
                        {model.subtitle}
                      </p>
                      <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-blue-100">
                        {model.features}
                      </p>
                      <div className="mt-2 sm:mt-3 rounded-lg bg-white/10 p-2.5 sm:p-3">
                        <p className="text-[10px] sm:text-xs text-blue-100">
                          {model.core}
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

      {/* References & Fields Section - Education/Training */}
      {'references' in serviceDetails && serviceDetails.references && (
        <section className="bg-white py-6 sm:py-10 md:py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                {/* References */}
                <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 border border-blue-100">
                  <div className="mb-2 sm:mb-3 flex items-center gap-2 text-blue-700">
                    <Icons.Building className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <h3 className="font-bold text-base sm:text-lg">
                      {language === 'ko' ? '레퍼런스' : language === 'en' ? 'References' : 'リファレンス'}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {serviceDetails.references}
                  </p>
                </div>

                {/* Fields */}
                {'fields' in serviceDetails && serviceDetails.fields && serviceDetails.fields.length > 0 && (
                  <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 border border-purple-100">
                    <div className="mb-2 sm:mb-3 flex items-center gap-2 text-purple-700">
                      <Icons.Layers className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <h3 className="font-bold text-base sm:text-lg">
                        {language === 'ko' ? '분야' : language === 'en' ? 'Fields' : '分野'}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {serviceDetails.fields.map((field: string, idx: number) => (
                        <span
                          key={idx}
                          className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium text-purple-800"
                        >
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
                {/* Mobile: Card Layout */}
                <div className="space-y-3 sm:hidden">
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
                      <div
                        key={index}
                        className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200"
                      >
                        <h4 className="mb-2 font-semibold text-slate-900">
                          {industry.name}
                        </h4>
                        <div className="space-y-1.5 text-xs">
                          <p>
                            <span className="text-slate-500">핵심 가치:</span>{' '}
                            <span className="text-slate-700">{industry.coreValue}</span>
                          </p>
                          <p>
                            <span className="text-slate-500">주요 기술:</span>{' '}
                            <span className="text-slate-700">{industry.keyTech}</span>
                          </p>
                          <p>
                            <span className="text-slate-500">최우선 과제:</span>{' '}
                            <span className="text-blue-600 font-medium">{industry.priority}</span>
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
                {/* Desktop: Table Layout */}
                <div className="hidden sm:block overflow-x-auto">
                  <table className="w-full border-collapse">
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

      {/* Consulting Process Section - Tech Commercialization Only */}
      {'consultingProcess' in serviceDetails &&
        serviceDetails.consultingProcess && (
          <section className="bg-slate-50 py-8 sm:py-12 md:py-16">
            <Container>
              <div className="mx-auto max-w-4xl">
                <div className="mb-6 sm:mb-8 text-center">
                  <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                    <Icons.Settings className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                      Process
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                    {serviceDetails.consultingProcess.sectionTitle}
                  </h2>
                  <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
                    {serviceDetails.consultingProcess.description}
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {serviceDetails.consultingProcess.steps.map(
                    (
                      step: { title: string; icon: string; description: string },
                      index: number
                    ) => {
                      const IconComponent =
                        Icons[step.icon as keyof typeof Icons] || Icons.Target;
                      return (
                        <div
                          key={index}
                          className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md"
                        >
                          <div className="mb-3 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                              <IconComponent className="h-5 w-5 text-blue-600" />
                            </div>
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                              {index + 1}
                            </span>
                          </div>
                          <h3 className="mb-2 font-semibold text-slate-900">
                            {step.title}
                          </h3>
                          <p className="text-sm text-slate-600">
                            {step.description}
                          </p>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </Container>
          </section>
        )}

      {/* Expected Benefits Section - Tech Commercialization Only */}
      {'expectedBenefits' in serviceDetails &&
        serviceDetails.expectedBenefits && (
          <section className="py-8 sm:py-12 md:py-16">
            <Container>
              <div className="mx-auto max-w-4xl">
                <div className="mb-6 sm:mb-8 text-center">
                  <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                    <Icons.Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                      Benefits
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                    {serviceDetails.expectedBenefits.sectionTitle}
                  </h2>
                </div>
                <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
                  {serviceDetails.expectedBenefits.benefits.map(
                    (
                      benefit: {
                        title: string;
                        icon: string;
                        description: string;
                      },
                      index: number
                    ) => {
                      const IconComponent =
                        Icons[benefit.icon as keyof typeof Icons] ||
                        Icons.CheckCircle;
                      return (
                        <div
                          key={index}
                          className="rounded-xl bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm ring-1 ring-blue-100"
                        >
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="mb-2 text-lg font-semibold text-slate-900">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-slate-600">
                            {benefit.description}
                          </p>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </Container>
          </section>
        )}

      {/* ICT Synergy Section - Tech Commercialization Only */}
      {'ictSynergy' in serviceDetails && serviceDetails.ictSynergy && (
        <section className="bg-slate-50 py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="mb-6 sm:mb-8 text-center">
                <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                  <Icons.Network className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    Synergy
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                  {serviceDetails.ictSynergy.sectionTitle}
                </h2>
                <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
                  {serviceDetails.ictSynergy.description}
                </p>
                <p className="mt-3 sm:mt-4 text-sm sm:text-lg font-semibold text-blue-600 italic">
                  {serviceDetails.ictSynergy.quote}
                </p>
              </div>

              {/* Comparison Table */}
              <div className="mb-6 sm:mb-8 grid gap-3 sm:gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-slate-200">
                  <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-slate-900">
                    {serviceDetails.ictSynergy.comparison.techComm.title}
                  </h3>
                  <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                    <div>
                      <span className="font-medium text-slate-700">
                        핵심 목표:{' '}
                      </span>
                      <span className="text-slate-600">
                        {serviceDetails.ictSynergy.comparison.techComm.goal}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-slate-700">
                        주요 활동:{' '}
                      </span>
                      <span className="text-slate-600">
                        {
                          serviceDetails.ictSynergy.comparison.techComm
                            .activities
                        }
                      </span>
                    </div>
                    <div className="rounded-lg bg-blue-50 p-2.5 sm:p-3">
                      <span className="font-medium text-blue-700 text-xs sm:text-sm">
                        {serviceDetails.ictSynergy.comparison.techComm.role}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-slate-200">
                  <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-slate-900">
                    {serviceDetails.ictSynergy.comparison.ictStrategy.title}
                  </h3>
                  <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                    <div>
                      <span className="font-medium text-slate-700">
                        핵심 목표:{' '}
                      </span>
                      <span className="text-slate-600">
                        {serviceDetails.ictSynergy.comparison.ictStrategy.goal}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-slate-700">
                        주요 활동:{' '}
                      </span>
                      <span className="text-slate-600">
                        {
                          serviceDetails.ictSynergy.comparison.ictStrategy
                            .activities
                        }
                      </span>
                    </div>
                    <div className="rounded-lg bg-green-50 p-2.5 sm:p-3">
                      <span className="font-medium text-green-700 text-xs sm:text-sm">
                        {serviceDetails.ictSynergy.comparison.ictStrategy.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Points */}
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
                {serviceDetails.ictSynergy.keyPoints.map(
                  (
                    point: { title: string; description: string },
                    index: number
                  ) => (
                    <div
                      key={index}
                      className="rounded-lg bg-white p-3 sm:p-4 shadow-sm ring-1 ring-slate-200"
                    >
                      <h4 className="mb-1.5 sm:mb-2 font-semibold text-slate-900 text-sm sm:text-base">
                        {point.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600">
                        {point.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* DX Synergy Section - Tech Commercialization Only */}
      {'dxSynergy' in serviceDetails && serviceDetails.dxSynergy && (
        <section className="py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 sm:mb-8 text-center">
                <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                  <Icons.Zap className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    DX Synergy
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                  {serviceDetails.dxSynergy.sectionTitle}
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {serviceDetails.dxSynergy.effects.map(
                  (
                    effect: { title: string; description: string },
                    index: number
                  ) => (
                    <div
                      key={index}
                      className="rounded-xl bg-gradient-to-br from-slate-900 to-blue-900 p-6 text-white"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                        <span className="text-lg font-bold">{index + 1}</span>
                      </div>
                      <h3 className="mb-2 text-lg font-semibold">
                        {effect.title}
                      </h3>
                      <p className="text-sm text-blue-100">
                        {effect.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Mentoring Modules Section - Startup Investment Only */}
      {'mentoringModules' in serviceDetails &&
        serviceDetails.mentoringModules && (
          <section className="bg-slate-50 py-8 sm:py-12 md:py-16">
            <Container>
              <div className="mx-auto max-w-5xl">
                <div className="mb-6 sm:mb-8 text-center">
                  <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                    <Icons.GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                      Mentoring Modules
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                    {serviceDetails.mentoringModules.sectionTitle}
                  </h2>
                </div>
                <div className="grid gap-3 sm:gap-4 md:gap-6 md:grid-cols-2">
                  {serviceDetails.mentoringModules.modules.map(
                    (
                      module: {
                        title: string;
                        description: string;
                        icon: string;
                        items: string[];
                      },
                      index: number
                    ) => {
                      const IconComponent =
                        Icons[module.icon as keyof typeof Icons] ||
                        Icons.Lightbulb;
                      return (
                        <div
                          key={index}
                          className="rounded-xl bg-white p-4 sm:p-5 md:p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md"
                        >
                          <div className="mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-blue-100">
                              <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                            </div>
                            <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-blue-600 text-[10px] sm:text-xs font-bold text-white">
                              {index + 1}
                            </div>
                          </div>
                          <h3 className="mb-1.5 sm:mb-2 text-base sm:text-lg font-semibold text-slate-900">
                            {module.title}
                          </h3>
                          <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-slate-600">
                            {module.description}
                          </p>
                          <ul className="space-y-1.5 sm:space-y-2">
                            {module.items.map(
                              (item: string, itemIndex: number) => (
                                <li
                                  key={itemIndex}
                                  className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-600"
                                >
                                  <span className="mt-1 sm:mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                                  {item}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </Container>
          </section>
        )}

      {/* BM Consulting Section - Startup Investment Only */}
      {'bmConsulting' in serviceDetails && serviceDetails.bmConsulting && (
        <section className="py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 sm:mb-8 text-center">
                <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                  <Icons.FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    Business Model
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                  {serviceDetails.bmConsulting.sectionTitle}
                </h2>
                <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
                  {serviceDetails.bmConsulting.description}
                </p>
              </div>
              <div className="space-y-4">
                {serviceDetails.bmConsulting.steps.map(
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

      {/* BM Advanced Section - Startup Investment Only */}
      {'bmAdvanced' in serviceDetails && serviceDetails.bmAdvanced && (
        <section className="bg-slate-50 py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 sm:mb-8 text-center">
                <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                  <Icons.TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    BM Enhancement
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                  {serviceDetails.bmAdvanced.sectionTitle}
                </h2>
                <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
                  {serviceDetails.bmAdvanced.description}
                </p>
              </div>
              <div className="grid gap-3 sm:gap-4 md:gap-6 md:grid-cols-3">
                {serviceDetails.bmAdvanced.strategies.map(
                  (
                    strategy: {
                      title: string;
                      description: string;
                      icon: string;
                    },
                    index: number
                  ) => {
                    const IconComponent =
                      Icons[strategy.icon as keyof typeof Icons] || Icons.Target;
                    return (
                      <div
                        key={index}
                        className="rounded-xl bg-white p-4 sm:p-5 shadow-sm ring-1 ring-slate-200"
                      >
                        <div className="mb-2 sm:mb-3 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-blue-100">
                          <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                        </div>
                        <h3 className="mb-1.5 sm:mb-2 font-semibold text-slate-900 text-sm sm:text-base">
                          {strategy.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600">
                          {strategy.description}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
              {/* Checklist */}
              <div className="mt-6 sm:mt-8 rounded-xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="mb-3 sm:mb-4 font-semibold text-slate-900 text-sm sm:text-base">
                  {serviceDetails.bmAdvanced.checklist.title}
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {serviceDetails.bmAdvanced.checklist.items.map(
                    (item: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-slate-600"
                      >
                        <Icons.CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-green-500" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* AI BMC Section - Startup Investment Only */}
      {'aiBMC' in serviceDetails && serviceDetails.aiBMC && (
        <section className="py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 sm:mb-8 text-center">
                <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                  <Icons.Brain className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    AI-BMC
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                  {serviceDetails.aiBMC.sectionTitle}
                </h2>
                <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
                  {serviceDetails.aiBMC.description}
                </p>
                <p className="mt-4 text-lg font-semibold text-blue-600 italic">
                  &ldquo;{serviceDetails.aiBMC.quote}&rdquo;
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {serviceDetails.aiBMC.components.map(
                  (
                    component: { category: string; items: string[] },
                    index: number
                  ) => (
                    <div
                      key={index}
                      className="rounded-xl bg-gradient-to-br from-blue-50 to-white p-5 shadow-sm ring-1 ring-blue-100"
                    >
                      <h3 className="mb-3 font-semibold text-slate-900">
                        {component.category}
                      </h3>
                      <ul className="space-y-2">
                        {component.items.map(
                          (item: string, itemIndex: number) => (
                            <li
                              key={itemIndex}
                              className="flex items-center gap-2 text-sm text-slate-600"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                              {item}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* IR Strategy Section - Startup Investment Only */}
      {'irStrategy' in serviceDetails && serviceDetails.irStrategy && (
        <section className="bg-slate-50 py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="mb-6 sm:mb-8 text-center">
                <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                  <Icons.Presentation className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    IR Strategy
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                  {serviceDetails.irStrategy.sectionTitle}
                </h2>
                <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
                  {serviceDetails.irStrategy.description}
                </p>
              </div>

              {/* Key Elements */}
              <div className="mb-6 sm:mb-8 grid gap-3 sm:gap-4 sm:grid-cols-2">
                {serviceDetails.irStrategy.elements.map(
                  (
                    element: {
                      title: string;
                      description: string;
                      icon: string;
                    },
                    index: number
                  ) => {
                    const IconComponent =
                      Icons[element.icon as keyof typeof Icons] ||
                      Icons.FileText;
                    return (
                      <div
                        key={index}
                        className="flex gap-3 sm:gap-4 rounded-xl bg-white p-4 sm:p-5 shadow-sm ring-1 ring-slate-200"
                      >
                        <div className="flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                          <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                            {element.title}
                          </h3>
                          <p className="mt-1 text-xs sm:text-sm text-slate-600">
                            {element.description}
                          </p>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>

              {/* Process */}
              <div className="rounded-xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="mb-3 sm:mb-4 text-center font-semibold text-slate-900 text-sm sm:text-base">
                  IR 전략 수립 프로세스 3단계
                </h3>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
                  {serviceDetails.irStrategy.process.map(
                    (
                      step: { step: number; title: string; description: string },
                      index: number
                    ) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="flex flex-col items-center text-center">
                          <div className="mb-2 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-blue-600 text-xs sm:text-sm font-bold text-white">
                            {step.step}
                          </div>
                          <h4 className="font-medium text-slate-900 text-xs sm:text-sm">
                            {step.title}
                          </h4>
                          <p className="mt-1 max-w-[180px] sm:max-w-[200px] text-[10px] sm:text-xs text-slate-500">
                            {step.description}
                          </p>
                        </div>
                        {index <
                          serviceDetails.irStrategy.process.length - 1 && (
                          <Icons.ArrowRight className="hidden h-5 w-5 text-slate-300 sm:block" />
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Investor Network Section - Startup Investment Only */}
      {'investorNetwork' in serviceDetails &&
        serviceDetails.investorNetwork && (
          <section className="py-8 sm:py-12 md:py-16">
            <Container>
              <div className="mx-auto max-w-5xl">
                <div className="mb-6 sm:mb-8 text-center">
                  <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                    <Icons.Network className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                      Investor Network
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                    {serviceDetails.investorNetwork.sectionTitle}
                  </h2>
                  <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
                    {serviceDetails.investorNetwork.description}
                  </p>
                </div>

                {/* Investor Types */}
                <div className="mb-6 sm:mb-8 grid gap-3 sm:gap-4 md:grid-cols-3">
                  {serviceDetails.investorNetwork.investors.map(
                    (
                      investor: {
                        type: string;
                        stage: string;
                        description: string;
                      },
                      index: number
                    ) => (
                      <div
                        key={index}
                        className="rounded-xl bg-gradient-to-br from-slate-900 to-blue-900 p-4 sm:p-6 text-white"
                      >
                        <h3 className="mb-2 text-base sm:text-lg font-semibold">
                          {investor.type}
                        </h3>
                        <span className="inline-block rounded-full bg-white/20 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs">
                          {investor.stage}
                        </span>
                        <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-blue-100">
                          {investor.description}
                        </p>
                      </div>
                    )
                  )}
                </div>

                {/* Strategies */}
                <div className="rounded-xl bg-slate-50 p-4 sm:p-6">
                  <h3 className="mb-3 sm:mb-4 font-semibold text-slate-900 text-sm sm:text-base">
                    네트워크 연계 전략
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {serviceDetails.investorNetwork.strategies.map(
                      (strategy: string, index: number) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-slate-600"
                        >
                          <Icons.CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-blue-500" />
                          {strategy}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </Container>
          </section>
        )}

      {/* Exit Strategy Section - Startup Investment Only */}
      {'exitStrategy' in serviceDetails && serviceDetails.exitStrategy && (
        <section className="bg-slate-50 py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="mb-6 sm:mb-8 text-center">
                <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                  <Icons.Flag className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    Exit Strategy
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                  {serviceDetails.exitStrategy.sectionTitle}
                </h2>
                <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
                  {serviceDetails.exitStrategy.description}
                </p>
              </div>

              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                {/* IPO */}
                <div className="rounded-xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-slate-200">
                  <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-slate-900">
                    {serviceDetails.exitStrategy.ipo.title}
                  </h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {serviceDetails.exitStrategy.ipo.items.map(
                      (
                        item: { title: string; description: string },
                        index: number
                      ) => (
                        <li key={index}>
                          <h4 className="font-medium text-slate-900 text-sm sm:text-base">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-xs sm:text-sm text-slate-600">
                            {item.description}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* M&A */}
                <div className="rounded-xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-slate-200">
                  <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-slate-900">
                    {serviceDetails.exitStrategy.mna.title}
                  </h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {serviceDetails.exitStrategy.mna.items.map(
                      (
                        item: { title: string; description: string },
                        index: number
                      ) => (
                        <li key={index}>
                          <h4 className="font-medium text-slate-900 text-sm sm:text-base">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-xs sm:text-sm text-slate-600">
                            {item.description}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Education Programs Section - Education Training Only */}
      {'programs' in serviceDetails && serviceDetails.programs && (
        <section className="bg-slate-50 py-8 sm:py-12 md:py-16">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="mb-6 sm:mb-8 text-center">
                <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 text-blue-600">
                  <Icons.GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    Programs
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                  {serviceDetails.programs.sectionTitle}
                </h2>
              </div>
              <div className="space-y-6">
                {serviceDetails.programs.items.map(
                  (
                    program: {
                      title: string;
                      icon: string;
                      description: string;
                      objective?: string;
                      modules?: Array<{ name: string; content: string }>;
                      topics?: string[];
                      sessions?: Array<{
                        title: string;
                        keyConcept?: string;
                        topics: string[];
                      }>;
                      tip?: string;
                      lectureTheme?: string;
                      agenda?: Array<{
                        title: string;
                        content?: string;
                        items?: string[];
                        description?: string;
                        useCases?: Array<{ field: string; useCase: string; effect: string }>;
                      }>;
                      differentiation?: string;
                      customNote?: string;
                      assessmentIntro?: string;
                      assessmentAreas?: Array<{
                        title: string;
                        areaDescription?: string;
                        items: string[];
                      }>;
                      maturityLevelsIntro?: string;
                      maturityLevels?: Array<{
                        level: string;
                        description: string;
                      }>;
                    },
                    index: number
                  ) => {
                    const IconComponent =
                      Icons[program.icon as keyof typeof Icons] ||
                      Icons.BookOpen;
                    return (
                      <div
                        key={index}
                        className="rounded-xl bg-white p-5 sm:p-6 shadow-sm ring-1 ring-slate-200"
                      >
                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                            {program.title}
                          </h3>
                        </div>
                        <p className="mb-4 text-sm text-slate-600 sm:text-base">
                          {program.description}
                        </p>

                        {/* Objective */}
                        {program.objective && (
                          <div className="mb-4 rounded-lg bg-blue-50 p-3 sm:p-4 border-l-4 border-blue-500">
                            <p className="text-xs sm:text-sm text-slate-700">
                              <span className="font-semibold text-blue-700">교육 목표: </span>
                              {program.objective}
                            </p>
                          </div>
                        )}

                        {/* Modules */}
                        {program.modules && (
                          <div className="mb-4">
                            <h4 className="mb-2 sm:mb-3 font-medium text-slate-900 text-sm sm:text-base">
                              교육 모듈
                            </h4>
                            <div className="grid gap-2 sm:gap-3 sm:grid-cols-3">
                              {program.modules.map((module, mIndex) => (
                                <div
                                  key={mIndex}
                                  className="rounded-lg bg-blue-50 p-2.5 sm:p-3"
                                >
                                  <h5 className="mb-1 font-medium text-blue-700 text-xs sm:text-sm">
                                    {module.name}
                                  </h5>
                                  <p className="text-[10px] sm:text-xs text-slate-600">
                                    {module.content}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Topics */}
                        {program.topics && (
                          <div className="mb-4">
                            <h4 className="mb-2 sm:mb-3 font-medium text-slate-900 text-sm sm:text-base">
                              교육 내용
                            </h4>
                            <div className="grid gap-1.5 sm:gap-2 sm:grid-cols-2">
                              {program.topics.map((topic, tIndex) => (
                                <div
                                  key={tIndex}
                                  className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-600"
                                >
                                  <Icons.Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 text-green-500 mt-0.5" />
                                  {topic}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Sessions */}
                        {program.sessions && (
                          <div className="mb-4">
                            <h4 className="mb-2 sm:mb-3 font-medium text-slate-900 text-sm sm:text-base">
                              회차별 커리큘럼
                            </h4>
                            <div className="space-y-2 sm:space-y-3">
                              {program.sessions.map((session, sIndex) => (
                                <div
                                  key={sIndex}
                                  className="rounded-lg bg-slate-50 p-3 sm:p-4"
                                >
                                  <h5 className="mb-1 font-medium text-slate-900 text-xs sm:text-sm leading-snug">
                                    {session.title}
                                  </h5>
                                  {session.keyConcept && (
                                    <p className="mb-2 text-[10px] sm:text-xs font-medium text-blue-600">
                                      핵심 개념: {session.keyConcept}
                                    </p>
                                  )}
                                  <ul className="space-y-1">
                                    {session.topics.map((topic, topicIndex) => (
                                      <li
                                        key={topicIndex}
                                        className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-slate-600"
                                      >
                                        <span className="mt-1 sm:mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-blue-400" />
                                        {topic}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Tip */}
                        {program.tip && (
                          <div className="mb-4 rounded-lg bg-amber-50 p-3 sm:p-4 border-l-4 border-amber-400">
                            <div className="flex items-start gap-2">
                              <Icons.Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-amber-500 mt-0.5" />
                              <p className="text-xs sm:text-sm text-slate-700">
                                {program.tip}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Lecture Theme */}
                        {program.lectureTheme && (
                          <div className="mb-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 p-3 sm:p-4 text-white">
                            <p className="text-xs sm:text-sm font-medium">
                              <span className="opacity-80">특강 주제: </span>
                              &quot;{program.lectureTheme}&quot;
                            </p>
                          </div>
                        )}

                        {/* Agenda */}
                        {program.agenda && (
                          <div className="mb-4">
                            <h4 className="mb-2 sm:mb-3 font-medium text-slate-900 text-sm sm:text-base">
                              강의 구성
                            </h4>
                            <div className="space-y-2">
                              {program.agenda.map((item, aIndex) => (
                                <div
                                  key={aIndex}
                                  className="rounded-lg bg-slate-50 p-2.5 sm:p-3"
                                >
                                  <h5 className="mb-1 font-medium text-slate-900 text-xs sm:text-sm leading-snug">
                                    {item.title}
                                  </h5>
                                  {item.description && (
                                    <p className="text-[10px] sm:text-xs text-slate-500 mb-1.5 sm:mb-2">
                                      {item.description}
                                    </p>
                                  )}
                                  {item.content && (
                                    <p className="text-[10px] sm:text-xs text-slate-600">
                                      {item.content}
                                    </p>
                                  )}
                                  {item.items && (
                                    <ul className="mt-1.5 sm:mt-2 space-y-1">
                                      {item.items.map((subItem, subIndex) => (
                                        <li
                                          key={subIndex}
                                          className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-slate-600"
                                        >
                                          <span className="mt-1 sm:mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-blue-400" />
                                          {subItem}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                  {item.useCases && (
                                    <div className="mt-2">
                                      {/* Mobile: Card Layout */}
                                      <div className="space-y-2 sm:hidden">
                                        {item.useCases.map((uc, ucIndex) => (
                                          <div key={ucIndex} className="rounded-lg bg-white p-3 border border-slate-200">
                                            <div className="mb-1.5 font-medium text-slate-900 text-xs">
                                              {uc.field}
                                            </div>
                                            <div className="space-y-1 text-xs">
                                              <p className="text-slate-600">
                                                <span className="text-slate-500">활용:</span> {uc.useCase}
                                              </p>
                                              <p className="text-blue-600">
                                                <span className="text-slate-500">효과:</span> {uc.effect}
                                              </p>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                      {/* Desktop: Table Layout */}
                                      <div className="hidden sm:block overflow-x-auto">
                                        <table className="w-full border-collapse text-xs">
                                          <thead>
                                            <tr className="border-b border-slate-200 bg-white">
                                              <th className="px-2 py-1.5 text-left font-semibold text-slate-700">분야</th>
                                              <th className="px-2 py-1.5 text-left font-semibold text-slate-700">주요 활용 사례</th>
                                              <th className="px-2 py-1.5 text-left font-semibold text-slate-700">기대 효과</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {item.useCases.map((uc, ucIndex) => (
                                              <tr key={ucIndex} className="border-b border-slate-100">
                                                <td className="px-2 py-1.5 font-medium text-slate-800">{uc.field}</td>
                                                <td className="px-2 py-1.5 text-slate-600">{uc.useCase}</td>
                                                <td className="px-2 py-1.5 text-slate-600">{uc.effect}</td>
                                              </tr>
                                            ))}
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Differentiation */}
                        {program.differentiation && (
                          <div className="mb-4 rounded-lg bg-purple-50 p-3 sm:p-4 border-l-4 border-purple-400">
                            <div className="flex items-start gap-2">
                              <Icons.Sparkles className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-purple-500 mt-0.5" />
                              <p className="text-xs sm:text-sm text-slate-700">
                                {program.differentiation}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Custom Note */}
                        {program.customNote && (
                          <div className="mb-4 rounded-lg bg-slate-100 p-3 sm:p-4">
                            <p className="text-xs sm:text-sm text-slate-600 italic">
                              {program.customNote}
                            </p>
                          </div>
                        )}

                        {/* Assessment Areas */}
                        {program.assessmentAreas && (
                          <div className="mb-4">
                            <h4 className="mb-2 font-medium text-slate-900 text-sm sm:text-base">
                              주요 진단 영역
                            </h4>
                            {program.assessmentIntro && (
                              <p className="mb-2 sm:mb-3 text-xs sm:text-sm text-slate-600">
                                {program.assessmentIntro}
                              </p>
                            )}
                            <div className="space-y-2 sm:space-y-3">
                              {program.assessmentAreas.map((area, areaIndex) => (
                                <div
                                  key={areaIndex}
                                  className="rounded-lg bg-slate-50 p-3 sm:p-4"
                                >
                                  <h5 className="mb-1 font-medium text-slate-900 text-xs sm:text-sm">
                                    {area.title}
                                  </h5>
                                  {area.areaDescription && (
                                    <p className="mb-1.5 sm:mb-2 text-[10px] sm:text-xs text-slate-500 italic">
                                      {area.areaDescription}
                                    </p>
                                  )}
                                  <ul className="space-y-1">
                                    {area.items.map((item, itemIndex) => (
                                      <li
                                        key={itemIndex}
                                        className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-slate-600"
                                      >
                                        <span className="mt-1 sm:mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-blue-400" />
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Maturity Levels */}
                        {program.maturityLevels && (
                          <div>
                            {program.maturityLevelsIntro ? (
                              <div className="mb-2 sm:mb-3">
                                <h4 className="font-medium text-slate-900 text-xs sm:text-sm">
                                  {program.maturityLevelsIntro.split(' - ')[0]}
                                </h4>
                                {program.maturityLevelsIntro.includes(' - ') && (
                                  <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-slate-600">
                                    {program.maturityLevelsIntro.split(' - ')[1]}
                                  </p>
                                )}
                              </div>
                            ) : (
                              <h4 className="mb-2 sm:mb-3 font-medium text-slate-900 text-sm sm:text-base">
                                AI 혁신 수준 4단계
                              </h4>
                            )}
                            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
                              {program.maturityLevels.map((level, lIndex) => (
                                <div
                                  key={lIndex}
                                  className="rounded-lg bg-gradient-to-br from-blue-50 to-white p-2.5 sm:p-3 ring-1 ring-blue-100"
                                >
                                  <h5 className="mb-1 font-medium text-slate-900 text-[10px] sm:text-xs leading-tight">
                                    {level.level}
                                  </h5>
                                  <p className="text-[10px] sm:text-xs text-slate-600 leading-tight">
                                    {level.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }
                )}
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
