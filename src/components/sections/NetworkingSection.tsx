import { Server } from "lucide-react";

import { networkSkills } from "../../data/portfolio";
import { Section } from "../layout/Section";

export function NetworkingSection() {
  return (
    <Section
      id="networking"
      eyebrow="Networking & System Administration"
      title={<>Networking & System Administration</>}
    >
      <div className="panel p-6 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[var(--surface1)] text-[var(--accent)]">
            <Server className="h-5 w-5" />
          </span>
          <p className="text-base leading-7 text-[var(--subtext)]">
            I work with network planning, services, Linux systems, Windows
            systems, and troubleshooting.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {networkSkills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-xl border border-white/10 bg-[var(--surface1)] px-4 py-4"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                {skill.shortLabel}
              </div>
              <div className="mt-2 text-sm font-medium leading-6 text-white">
                {skill.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
