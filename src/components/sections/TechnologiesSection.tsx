import { technologyGroups } from "../../data/portfolio";
import { Section } from "../layout/Section";
import { TechnologyCard } from "../ui/TechnologyCard";

export function TechnologiesSection() {
  return (
    <Section id="technologies" eyebrow="Technologies" title={<>Technologies</>}>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {technologyGroups.map((group) => (
          <TechnologyCard key={group.title} group={group} />
        ))}
      </div>
    </Section>
  );
}
