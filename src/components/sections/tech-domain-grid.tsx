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
  GraduationCap: Icons.GraduationCap,
  Scale: Icons.Scale,
  PawPrint: Icons.PawPrint,
  Leaf: Icons.Leaf,
  Shirt: Icons.Shirt,
};

export function TechDomainGrid({ domains }: TechDomainGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {domains.map((domain) => {
        const IconComponent = iconMap[domain.icon] || Icons.Layers;

        return (
          <div
            key={domain.id}
            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-blue-200 hover:shadow-lg"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <IconComponent className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-slate-900">{domain.name}</h3>
            </div>
            <ul className="space-y-2">
              {domain.examples.map((example, index) => (
                <li
                  key={index}
                  className="flex items-start text-sm text-slate-600"
                >
                  <Icons.Check className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
