'use client';

import { Icons } from '@/components/ui/icons';

interface Example {
  name: string;
  desc: string;
}

interface BusinessModel {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  pricing: string;
  examples: Example[];
}

interface BusinessModelsGridProps {
  models: BusinessModel[];
}

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  Cloud: Icons.Cloud,
  Sparkles: Icons.Sparkles,
  Bot: Icons.Bot,
  Stethoscope: Icons.Stethoscope,
  Cpu: Icons.Cpu,
  Server: Icons.Server,
  Network: Icons.Network,
};

export function BusinessModelsGrid({ models }: BusinessModelsGridProps) {
  // Color schemes for different models
  const colorSchemes = [
    { bg: 'bg-blue-100', text: 'text-blue-600', hover: 'group-hover:bg-blue-600', ring: 'ring-blue-200' },
    { bg: 'bg-purple-100', text: 'text-purple-600', hover: 'group-hover:bg-purple-600', ring: 'ring-purple-200' },
    { bg: 'bg-amber-100', text: 'text-amber-600', hover: 'group-hover:bg-amber-600', ring: 'ring-amber-200' },
    { bg: 'bg-rose-100', text: 'text-rose-600', hover: 'group-hover:bg-rose-600', ring: 'ring-rose-200' },
    { bg: 'bg-emerald-100', text: 'text-emerald-600', hover: 'group-hover:bg-emerald-600', ring: 'ring-emerald-200' },
  ];

  return (
    <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {models.map((model, index) => {
        const IconComponent = iconMap[model.icon] || Icons.Brain;
        const color = colorSchemes[index % colorSchemes.length];

        return (
          <div
            key={model.id}
            className="group rounded-xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6 shadow-sm transition-all hover:shadow-lg hover:border-slate-300"
          >
            {/* Header */}
            <div className="flex items-start gap-3 mb-3 sm:mb-4">
              <div className={`flex h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center rounded-lg ${color.bg} ${color.text} transition-colors ${color.hover} group-hover:text-white`}>
                <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                  {model.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  {model.subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 sm:mb-4">
              {model.description}
            </p>

            {/* Method */}
            <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 rounded-lg bg-slate-50">
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-slate-500 tracking-wider mb-1">
                방식
              </div>
              <p className="text-xs sm:text-sm text-slate-700">
                {model.pricing}
              </p>
            </div>

            {/* Examples */}
            <div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-500 tracking-wider mb-1.5 sm:mb-2">
                대표 사례
              </div>
              <ul className="space-y-1 sm:space-y-1.5">
                {model.examples.map((example, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-600">
                    <span className="font-medium text-slate-800">{example.name}</span>
                    <span className="text-slate-500">: {example.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
