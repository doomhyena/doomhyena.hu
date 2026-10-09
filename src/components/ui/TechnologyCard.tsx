import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Database,
  MonitorSmartphone,
  Network,
  Server,
  Wrench,
} from "lucide-react";

import type { TechnologyGroup } from "../../types/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Programming: Code2,
  Languages: Code2,
  "Programnyelvek": Code2,
  Frontend: MonitorSmartphone,
  Backend: Server,
  "Backend & APIs": Server,
  "Backend és API-k": Server,
  Databases: Database,
  "Data & Storage": Database,
  Adatkezelés: Database,
  "System Administration": Network,
  "Systems & Networking": Network,
  "Rendszerek és hálózatok": Network,
  "DevOps & Tools": Wrench,
  Tooling: Wrench,
  Eszközök: Wrench,
  Programozás: Code2,
  Adatbázisok: Database,
  Rendszeradminisztráció: Network,
};

interface TechnologyCardProps {
  group: TechnologyGroup;
  categoryLabel: string;
}

export function TechnologyCard({ group, categoryLabel }: TechnologyCardProps) {
  const Icon = iconMap[group.title] ?? Code2;

  return (
    <article className="panel h-full p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-sm uppercase tracking-[0.24em] text-[var(--subtext)]">
            {categoryLabel}
          </span>
          <h3 className="mt-2 text-xl font-semibold text-white">
            {group.title}
          </h3>
        </div>
        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[var(--surface1)] text-[var(--accent)]">
          <Icon className="h-5 w-5" />
        </span>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="inline-flex rounded-full border border-white/10 bg-[var(--surface1)] px-3 py-1.5 text-sm text-[var(--text)]"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
