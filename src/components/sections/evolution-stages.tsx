'use client';

import { Icons } from '@/components/ui/icons';

interface Stage {
  step: number;
  title: string;
  subtitle: string;
  description: string;
}

interface EvolutionStagesProps {
  stages: Stage[];
}

export function EvolutionStages({ stages }: EvolutionStagesProps) {
  return (
    <div className="relative">
      {/* Desktop: Horizontal Timeline */}
      <div className="hidden md:block">
        <div className="relative flex justify-between items-start">
          {/* Connection Line */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-slate-300 via-blue-400 to-blue-600" />

          {stages.map((stage, index) => (
            <div key={stage.step} className="relative flex flex-col items-center w-1/3 px-4">
              {/* Step Circle */}
              <div
                className={`
                  relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4
                  ${index === stages.length - 1
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200'
                    : 'bg-white border-slate-300 text-slate-600'
                  }
                `}
              >
                <span className="text-xl font-bold">{stage.step}</span>
              </div>

              {/* Arrow */}
              {index < stages.length - 1 && (
                <Icons.ArrowRight className="absolute top-6 -right-2 h-6 w-6 text-blue-400 hidden lg:block" />
              )}

              {/* Content */}
              <div className="mt-6 text-center">
                <h3 className={`text-lg font-bold ${index === stages.length - 1 ? 'text-blue-600' : 'text-slate-900'}`}>
                  {stage.title}
                </h3>
                <p className={`text-sm font-medium ${index === stages.length - 1 ? 'text-blue-500' : 'text-slate-500'}`}>
                  {stage.subtitle}
                </p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: Vertical Timeline */}
      <div className="md:hidden">
        <div className="relative space-y-6">
          {stages.map((stage, index) => (
            <div key={stage.step} className="relative flex gap-4">
              {/* Vertical Line */}
              {index < stages.length - 1 && (
                <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-slate-300 to-blue-400" />
              )}

              {/* Step Circle */}
              <div
                className={`
                  relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-3
                  ${index === stages.length - 1
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200'
                    : 'bg-white border-slate-300 text-slate-600'
                  }
                `}
              >
                <span className="text-lg font-bold">{stage.step}</span>
              </div>

              {/* Content */}
              <div className="flex-1 pb-6">
                <h3 className={`text-base font-bold ${index === stages.length - 1 ? 'text-blue-600' : 'text-slate-900'}`}>
                  {stage.title}
                </h3>
                <p className={`text-sm font-medium ${index === stages.length - 1 ? 'text-blue-500' : 'text-slate-500'}`}>
                  {stage.subtitle}
                </p>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
