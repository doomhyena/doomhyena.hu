import { CheckCircle2 } from "lucide-react";

import {
  aboutBackgroundParagraphs,
  aboutIntroParagraphs,
  education,
} from "../../data/portfolio";
import { Section } from "../layout/Section";
import { TerminalWindow } from "../ui/TerminalWindow";

const focusAreas = [
  "Software Development",
  "System Administration",
  "Networking Infrastructure",
  "IT Education",
];

export function AboutSection() {
  return (
    <Section id="about" eyebrow="About Me" title={<>About Me</>}>
      <TerminalWindow title="~/about/README.md">
        <div className="space-y-6">
          <div>
            <p className="font-mono text-lg text-[var(--mauve)]"># About Me</p>
            <div className="mt-5 space-y-4 text-base leading-8 text-[var(--text)]">
              {aboutIntroParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-[var(--surface1)] p-5">
            <p className="text-sm text-[var(--accent)]">
              ## Education & Background
            </p>
            <div className="mt-4 space-y-4 text-base leading-8 text-[var(--text)]">
              <p>{aboutBackgroundParagraphs[0]}</p>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.name}>
                    <p>
                      <a
                        href={edu.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[var(--accent)] underline underline-offset-4"
                      >
                        {edu.name}
                      </a>
                      {' '}
                      — <span dangerouslySetInnerHTML={{ __html: edu.date }} />
                    </p>
                    <div className="mt-2 text-[var(--text)]" dangerouslySetInnerHTML={{ __html: edu.description }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-[var(--surface1)] p-5">
            <p className="text-sm text-[var(--accent)]">## Focus Areas</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-[var(--base)] px-4 py-3"
                >
                  <CheckCircle2 className="h-4 w-4 text-[var(--accent)]" />
                  <span className="text-sm text-white">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </TerminalWindow>
    </Section>
  );
}
