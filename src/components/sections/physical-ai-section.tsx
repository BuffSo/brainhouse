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

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Physical AI Types */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Icons.Bot className="h-5 w-5 text-blue-600" />
            Physical AI Types
          </h3>
          <div className="space-y-4">
            {types.map((type, index) => {
              const IconComponent = typeIcons[index] || Icons.Bot;
              return (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <IconComponent className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{type.name}</h4>
                    <p className="text-sm text-slate-600">{type.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Technologies */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Icons.Settings className="h-5 w-5 text-emerald-600" />
            Core Technologies
          </h3>
          <div className="space-y-4">
            {coreTech.map((tech, index) => {
              const IconComponent = techIcons[index] || Icons.Cpu;
              return (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    <IconComponent className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{tech.name}</h4>
                    <p className="text-sm text-slate-600">{tech.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Expertise Note */}
      <div className="rounded-lg bg-blue-50 border border-blue-100 p-4 flex items-start gap-3">
        <Icons.Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm font-medium text-blue-800">
          {expertise}
        </p>
      </div>
    </div>
  );
}
