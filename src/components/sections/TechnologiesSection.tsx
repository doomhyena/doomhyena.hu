import { useLanguage } from "../../context/LanguageContext";
import { Section } from "../layout/Section";
import { TechnologyCard } from "../ui/TechnologyCard";

export function TechnologiesSection() {
  const { t } = useLanguage();
  const tech = t.technologies;

  return (
    <Section id="technologies" eyebrow={tech.eyebrow} title={<>{tech.heading}</>} description={tech.description}>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {tech.groups.map((group) => (
          <TechnologyCard
            key={group.title}
            group={group}
            categoryLabel={tech.categoryLabel}
          />
        ))}
      </div>
    </Section>
  );
}
