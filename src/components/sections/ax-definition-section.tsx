'use client';

import { Icons } from '@/components/ui/icons';

interface Comparison {
  dx: {
    title: string;
    items: string[];
  };
  ax: {
    title: string;
    items: string[];
  };
}

interface AXDefinitionSectionProps {
  description: string;
  keyPoint: string;
  comparison: Comparison;
}

export function AXDefinitionSection({
  description,
  keyPoint,
  comparison,
}: AXDefinitionSectionProps) {
  return (
    <div className="space-y-8">
      {/* Description */}
      <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
        {description}
      </p>

      {/* Key Point */}
      <div className="rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-4 sm:p-5 flex items-start gap-3 max-w-4xl mx-auto">
        <Icons.Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm sm:text-base font-medium text-blue-800 leading-relaxed">
          {keyPoint}
        </p>
      </div>

      {/* DX vs AX Comparison */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {/* DX Column */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600">
              <Icons.Monitor className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              {comparison.dx.title}
            </h3>
          </div>
          <ul className="space-y-2.5">
            {comparison.dx.items.map((item, index) => (
              <li key={index} className="flex items-start text-sm text-slate-600">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* AX Column */}
        <div className="rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5 sm:p-6 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
            Next Level
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
              <Icons.Brain className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-blue-900">
              {comparison.ax.title}
            </h3>
          </div>
          <ul className="space-y-2.5">
            {comparison.ax.items.map((item, index) => (
              <li key={index} className="flex items-start text-sm text-blue-800">
                <Icons.Check className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
