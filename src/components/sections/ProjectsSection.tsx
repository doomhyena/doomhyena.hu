import { useLanguage } from "../../context/LanguageContext";
import { Section } from "../layout/Section";
import { ProjectCard } from "../ui/ProjectCard";

export function ProjectsSection() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <Section id="projects" eyebrow={p.eyebrow} title={<>{p.heading}</>} description={p.description}>
      <div className="grid gap-6 xl:grid-cols-2">
        {p.items.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            labels={{
              projectLabel: p.projectLabel,
              highlights: p.highlights,
              stack: p.stack,
              details: p.details,
            }}
          />
        ))}
      </div>
    </Section>
  );
}
