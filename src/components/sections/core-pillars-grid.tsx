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
    <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
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
            className="group rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all hover:shadow-lg hover:border-slate-300"
          >
            {/* Icon */}
            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${color.bg} ${color.text} transition-colors ${color.hover} group-hover:text-white`}>
              <IconComponent className="h-6 w-6" aria-hidden="true" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {pillar.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {pillar.description}
            </p>

            {/* Outcomes */}
            <div className="flex flex-wrap gap-2">
              {pillar.outcomes.map((outcome, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
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
