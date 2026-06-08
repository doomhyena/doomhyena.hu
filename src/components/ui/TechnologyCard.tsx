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
  Frontend: MonitorSmartphone,
  Backend: Server,
  Databases: Database,
  "System Administration": Network,
  "DevOps & Tools": Wrench,
};

interface TechnologyCardProps {
  group: TechnologyGroup;
}

export function TechnologyCard({ group }: TechnologyCardProps) {
  const Icon = iconMap[group.title] ?? Code2;

  return (
    <article className="panel h-full p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-sm uppercase tracking-[0.24em] text-[var(--subtext)]">
            Category
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
