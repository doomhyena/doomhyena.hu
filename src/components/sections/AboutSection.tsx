import { CheckCircle2 } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import { Section } from "../layout/Section";
import { TerminalWindow } from "../ui/TerminalWindow";

export function AboutSection() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <Section id="about" eyebrow={a.eyebrow} title={<>{a.heading}</>} description={a.description}>
      <TerminalWindow title={a.terminalTitle}>
        <div className="space-y-6">
          <div>
            <p className="font-mono text-lg text-[var(--mauve)]"># {a.heading}</p>
            <div className="mt-5 space-y-4 text-base leading-8 text-[var(--text)]">
              {a.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-[var(--surface1)] p-5">
            <p className="text-sm text-[var(--accent)]">{a.backgroundHeading}</p>
            <div className="mt-4 space-y-4 text-base leading-8 text-[var(--text)]">
              <p>{a.locationParagraph}</p>
              <div className="space-y-4">
                {a.education.map((edu) => (
                  <div key={edu.name}>
                    <p>
                      {edu.href.startsWith("http") ? (
                        <a
                          href={edu.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--accent)] underline underline-offset-4"
                        >
                          {edu.name}
                        </a>
                      ) : (
                        <span className="text-[var(--accent)]">{edu.name}</span>
                      )}
                      {" "}
                      — <span dangerouslySetInnerHTML={{ __html: edu.date }} />
                    </p>
                    <div
                      className="mt-2 text-[var(--text)]"
                      dangerouslySetInnerHTML={{ __html: edu.description }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-[var(--surface1)] p-5">
            <p className="text-sm text-[var(--accent)]">{a.focusHeading}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {a.focusAreas.map((area) => (
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
