'use client';

import { Icons } from '@/components/ui/icons';

interface Phase {
  phase: number;
  title: string;
  activities: string[];
  deliverables: string[];
}

interface ConsultingFrameworkProps {
  phases: Phase[];
}

export function ConsultingFramework({ phases }: ConsultingFrameworkProps) {
  const phaseIcons = [Icons.Search, Icons.Settings, Icons.Repeat];

  return (
    <div className="relative">
      {/* Desktop: Horizontal Layout */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-3 gap-6">
          {phases.map((phase, index) => {
            const IconComponent = phaseIcons[index] || Icons.Target;

            return (
              <div key={phase.phase} className="relative">
                {/* Arrow between phases */}
                {index < phases.length - 1 && (
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <Icons.ArrowRight className="h-6 w-6 text-blue-400" />
                  </div>
                )}

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm h-full flex flex-col">
                  {/* Phase Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        Phase {phase.phase}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">
                        {phase.title}
                      </h3>
                    </div>
                  </div>

                  {/* Activities */}
                  <div className="mb-4 flex-1">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Activities
                    </h4>
                    <ul className="space-y-1.5">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-600">
                          <Icons.Check className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Deliverables
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                        >
                          <Icons.FileText className="mr-1.5 h-3 w-3" />
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile/Tablet: Vertical Layout */}
      <div className="lg:hidden space-y-4">
        {phases.map((phase, index) => {
          const IconComponent = phaseIcons[index] || Icons.Target;

          return (
            <div key={phase.phase} className="relative">
              {/* Connector */}
              {index < phases.length - 1 && (
                <div className="absolute left-6 top-full h-4 w-0.5 bg-blue-200" />
              )}

              <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
                {/* Phase Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      Phase {phase.phase}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      {phase.title}
                    </h3>
                  </div>
                </div>

                <div className="ml-13 grid sm:grid-cols-2 gap-4">
                  {/* Activities */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Activities
                    </h4>
                    <ul className="space-y-1">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-600">
                          <Icons.Check className="mr-1.5 mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-blue-500" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Deliverables
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {phase.deliverables.map((deliverable, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
