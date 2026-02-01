'use client';

import { Icons } from '@/components/ui/icons';

interface PillarItem {
  title: string;
  icon: string;
  description: string;
  outcomes: string[];
}

interface CorePillarsGridProps {
  pillars: PillarItem[];
}

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  Zap: Icons.Zap,
  Smile: Icons.Smile,
  DollarSign: Icons.DollarSign,
};

export function CorePillarsGrid({ pillars }: CorePillarsGridProps) {
  return (
    <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {pillars.map((pillar, index) => {
        const IconComponent = iconMap[pillar.icon] || Icons.Lightbulb;

        // Different accent colors for each pillar
        const colors = [
          { bg: 'bg-amber-100', text: 'text-amber-600', hover: 'group-hover:bg-amber-600' },
          { bg: 'bg-rose-100', text: 'text-rose-600', hover: 'group-hover:bg-rose-600' },
          { bg: 'bg-emerald-100', text: 'text-emerald-600', hover: 'group-hover:bg-emerald-600' },
        ];
        const color = colors[index % colors.length];

        return (
          <div
            key={index}
            className="group rounded-xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6 shadow-sm transition-all hover:shadow-lg hover:border-slate-300"
          >
            {/* Icon + Title */}
            <div className="mb-3 sm:mb-4 flex items-center gap-3">
              <div className={`flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-lg ${color.bg} ${color.text} transition-colors ${color.hover} group-hover:text-white`}>
                <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {pillar.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 sm:mb-4">
              {pillar.description}
            </p>

            {/* Outcomes */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {pillar.outcomes.map((outcome, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center rounded-full bg-slate-100 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-slate-700"
                >
                  {outcome}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
