'use client';

import { Icons } from '@/components/ui/icons';

interface TechDomain {
  id: string;
  name: string;
  icon: string;
  examples: string[];
}

interface TechDomainGridProps {
  domains: TechDomain[];
}

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  Brain: Icons.Brain,
  Store: Icons.Store,
  Heart: Icons.Heart,
  Plane: Icons.Plane,
  Trophy: Icons.Trophy,
  Utensils: Icons.Utensils,
  Building: Icons.Building,
  Wallet: Icons.Wallet,
  Shield: Icons.Shield,
  Umbrella: Icons.Umbrella,
  GraduationCap: Icons.GraduationCap,
  Scale: Icons.Scale,
  PawPrint: Icons.PawPrint,
  Leaf: Icons.Leaf,
  Shirt: Icons.Shirt,
};

export function TechDomainGrid({ domains }: TechDomainGridProps) {
  return (
    <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {domains.map((domain) => {
        const IconComponent = iconMap[domain.icon] || Icons.Layers;

        return (
          <div
            key={domain.id}
            className="group rounded-lg sm:rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm transition-all hover:border-blue-200 hover:shadow-lg"
          >
            <div className="mb-3 sm:mb-4 flex items-center gap-2.5 sm:gap-3">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">{domain.name}</h3>
            </div>
            <ul className="space-y-1.5 sm:space-y-2">
              {domain.examples.map((example, index) => (
                <li
                  key={index}
                  className="flex items-start text-xs sm:text-sm text-slate-600"
                >
                  <Icons.Check className="mr-1.5 sm:mr-2 mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 text-blue-500" />
                  <span className="leading-relaxed">{example}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
