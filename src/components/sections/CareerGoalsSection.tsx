import { careerGoals } from "../../data/portfolio";
import { Section } from "../layout/Section";

export function CareerGoalsSection() {
  return (
    <Section id="goals" eyebrow="Career Goals" title={<>Career Goals</>}>
      <div className="grid gap-6 lg:grid-cols-3">
        {careerGoals.map((goal) => (
          <article key={goal.title} className="panel p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-[var(--surface1)] text-lg font-semibold text-[var(--accent)]">
                {goal.phase}
              </div>
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-white">
              {goal.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[var(--subtext)]">
              {goal.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
