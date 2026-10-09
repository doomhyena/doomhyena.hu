import { ArrowDown } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import { Container } from "../layout/Container";
import { SocialButton } from "../ui/SocialButton";
import { TerminalWindow } from "../ui/TerminalWindow";
import { TypingText } from "../ui/TypingText";

const BIRTH = new Date("2005-04-04");

function getAge(): number {
  const today = new Date();
  let age = today.getFullYear() - BIRTH.getFullYear();
  const m = today.getMonth() - BIRTH.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < BIRTH.getDate())) age--;
  return age;
}

export function HeroSection() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section id="hero" className="scroll-mt-24 py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <TerminalWindow title={h.terminalTitle}>
            <div className="space-y-6 text-sm leading-7 sm:text-base">
              <div>
                <div className="text-[var(--accent)]">{h.commands.whoami}</div>
                <div className="mt-3 pl-4">
                  <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    {h.name}
                  </h1>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--subtext)] sm:text-lg">
                    {h.title}
                  </p>
                  <div className="mt-4 space-y-1 font-mono text-sm">
                    <div className="flex gap-3">
                      <span className="w-24 shrink-0 text-[var(--subtext)]">{h.locationLabel}</span>
                      <span className="text-white">{h.locationValue}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="w-24 shrink-0 text-[var(--subtext)]">{h.ageLabel}</span>
                      <span className="text-white">{getAge()}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="w-24 shrink-0 text-[var(--subtext)]">{h.availableLabel}</span>
                      <span className="text-[var(--accent)]">{h.availableValue}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="w-24 shrink-0 text-[var(--subtext)]">{h.languagesLabel}</span>
                      <span className="text-white">{h.languagesValue}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--text)]">
                    {h.intro}
                  </p>
                </div>
              </div>

              <div>
                <div className="text-[var(--accent)]">{h.commands.status}</div>
                <div className="mt-3 min-h-8 pl-4 text-white">
                  <TypingText
                    phrases={h.statusLines as string[]}
                    className="text-base sm:text-lg"
                  />
                </div>
              </div>

              <div>
                <div className="text-[var(--accent)]">{h.commands.focus}</div>
                <div className="mt-4 flex flex-wrap gap-2 pl-4">
                  {h.terminalFacts.map((fact) => (
                    <span key={fact} className="chip">
                      {fact}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TerminalWindow>

          <div className="panel p-6 sm:p-8">
            <span className="inline-flex rounded-full border border-white/10 bg-[var(--surface1)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
              {h.badge}
            </span>
            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              {h.heading}
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--subtext)]">
              {h.description}
            </p>

            <ul className="mt-6 space-y-3 text-sm text-[var(--text)] sm:text-base">
              {h.listItems.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/10 bg-[var(--surface1)] px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {h.socialLinks.map((link) => (
                <SocialButton key={link.label} link={link} />
              ))}
            </div>

            <a
              href="#about"
              className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--subtext)] transition-colors hover:text-white"
            >
              {h.readMore}
              <ArrowDown className="h-4 w-4 text-[var(--accent)]" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
