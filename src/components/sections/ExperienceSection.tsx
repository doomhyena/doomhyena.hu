import { useLanguage } from "../../context/LanguageContext";
import { Section } from "../layout/Section";

export function ExperienceSection() {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <Section id="experience" eyebrow={e.eyebrow} title={<>{e.heading}</>}>
      <div className="space-y-6">
        {e.items.map((item) => (
          <article key={item.company} className="rounded-2xl border border-white/10 bg-[var(--surface1)] p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold text-[var(--accent)] underline underline-offset-4"
                >
                  {item.company}
                </a>
                <h3 className="mt-2 text-xl font-medium text-white">{item.role}</h3>
              </div>
              <span className="text-sm text-[var(--subtext)]">{item.period}</span>
            </div>

            <p className="mt-4 text-base leading-7 text-[var(--subtext)]">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
