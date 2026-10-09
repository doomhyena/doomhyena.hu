import type { LucideIcon } from "lucide-react";
import { FolderGit2, Layers3, Shield, Star, Wrench } from "lucide-react";

const statIcons: Record<string, LucideIcon> = {
  Type: Layers3,
  Role: Wrench,
  Focus: Shield,
  Platform: Star,
  Data: Star,
  State: Star,
  Deploy: Star,
  Context: Star,
  Típus: Layers3,
  Szerepkör: Wrench,
  Fókusz: Shield,
  Adatok: Star,
  Állapot: Star,
  Kontextus: Star,
};

interface ProjectStat {
  label: string;
  value: string;
}

interface ProjectItem {
  title: string;
  href?: string;
  description: string;
  responsibilities: readonly string[];
  technologies: readonly string[];
  stats: readonly ProjectStat[];
}

interface ProjectCardLabels {
  projectLabel: string;
  highlights: string;
  stack: string;
  details: string;
}

interface ProjectCardProps {
  project: ProjectItem;
  labels: ProjectCardLabels;
}

export function ProjectCard({ project, labels }: ProjectCardProps) {
  return (
    <article className="panel p-6 sm:p-7">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[var(--surface1)] text-[var(--accent)]">
          <FolderGit2 className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <span className="text-xs uppercase tracking-[0.24em] text-[var(--subtext)]">
            {labels.projectLabel}
          </span>
          <h3 className="mt-1 break-words text-2xl font-semibold text-white">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] underline decoration-[var(--accent)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--accent)]"
              >
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>
          <p className="mt-4 text-base leading-7 text-[var(--subtext)]">{project.description}</p>
        </div>
      </div>

      <div className="mt-6 space-y-5">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
            {labels.highlights}
          </h4>
          <ul className="mt-4 grid gap-3">
            {project.responsibilities.slice(0, 3).map((responsibility) => (
              <li
                key={responsibility}
                className="rounded-xl border border-white/10 bg-[var(--surface1)] px-4 py-3 text-sm leading-6 text-[var(--text)]"
              >
                {responsibility}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
            {labels.stack}
          </h4>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 6).map((technology) => (
              <span
                key={technology}
                className="inline-flex rounded-full border border-white/10 bg-[var(--surface1)] px-3 py-1.5 text-sm text-white"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
            {labels.details}
          </h4>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.stats.map((stat) => {
              const Icon = statIcons[stat.label] ?? Star;

              return (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-[var(--surface1)] px-4 py-4"
                >
                  <div className="flex items-center gap-2 text-[var(--subtext)]">
                    <Icon className="h-4 w-4 text-[var(--accent)]" />
                    <span className="text-xs uppercase tracking-[0.2em]">{stat.label}</span>
                  </div>
                  <p className="mt-2 break-words text-lg font-semibold text-white">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}
