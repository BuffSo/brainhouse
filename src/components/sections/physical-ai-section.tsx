'use client';

import { Icons } from '@/components/ui/icons';

interface PhysicalAIType {
  name: string;
  description: string;
}

interface CoreTech {
  name: string;
  description: string;
}

interface PhysicalAISectionProps {
  sectionTitle: string;
  description: string;
  types: PhysicalAIType[];
  coreTech: CoreTech[];
  expertise: string;
}

export function PhysicalAISection({
  sectionTitle,
  description,
  types,
  coreTech,
  expertise,
}: PhysicalAISectionProps) {
  const typeIcons = [Icons.Users, Icons.Factory, Icons.Truck];
  const techIcons = [Icons.Cpu, Icons.Network, Icons.Server];

  return (
    <div className="space-y-8">
      {/* Description */}
      <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
        {description}
      </p>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {/* Physical AI Types */}
        <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6 shadow-sm">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3 sm:mb-4 flex items-center gap-2">
            <Icons.Bot className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
            Physical AI Types
          </h3>
          <div className="space-y-3 sm:space-y-4">
            {types.map((type, index) => {
              const IconComponent = typeIcons[index] || Icons.Bot;
              return (
                <div key={index} className="flex items-start gap-2.5 sm:gap-3">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900">{type.name}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{type.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Technologies */}
        <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6 shadow-sm">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3 sm:mb-4 flex items-center gap-2">
            <Icons.Settings className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
            Core Technologies
          </h3>
          <div className="space-y-3 sm:space-y-4">
            {coreTech.map((tech, index) => {
              const IconComponent = techIcons[index] || Icons.Cpu;
              return (
                <div key={index} className="flex items-start gap-2.5 sm:gap-3">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900">{tech.name}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{tech.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Expertise Note */}
      <div className="rounded-lg bg-blue-50 border border-blue-100 p-3 sm:p-4 flex items-start gap-2.5 sm:gap-3">
        <Icons.Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <p className="text-xs sm:text-sm font-medium text-blue-800 leading-relaxed">
          {expertise}
        </p>
      </div>
    </div>
  );
}
