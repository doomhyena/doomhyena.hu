import { projects } from "../../data/portfolio";
import { Section } from "../layout/Section";
import { ProjectCard } from "../ui/ProjectCard";

export function ProjectsSection() {
  return (
    <Section id="projects" eyebrow="Projects" title={<>Projects</>}>
      <div className="mb-6 flex flex-wrap gap-2">
        {projects.map((project) => (
          <span
            key={project.title}
            className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-[var(--subtext)]"
          >
            {project.title}
          </span>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
