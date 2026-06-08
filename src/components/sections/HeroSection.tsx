import { ArrowDown } from "lucide-react";

import { heroData } from "../../data/portfolio";
import { Container } from "../layout/Container";
import { SocialButton } from "../ui/SocialButton";
import { TerminalWindow } from "../ui/TerminalWindow";
import { TypingText } from "../ui/TypingText";

export function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-24 py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <TerminalWindow title="~/README.md">
            <div className="space-y-6 text-sm leading-7 sm:text-base">
              <div>
                <div className="text-[var(--accent)]">$ whoami</div>
                <div className="mt-3 pl-4">
                  <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    {heroData.name}
                  </h1>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--subtext)] sm:text-lg">
                    {heroData.title}
                  </p>
                </div>
              </div>

              <div>
                <div className="text-[var(--accent)]">$ status</div>
                <div className="mt-3 min-h-8 pl-4 text-white">
                  <TypingText
                    phrases={heroData.statusLines}
                    className="text-base sm:text-lg"
                  />
                </div>
              </div>

              <div>
                <div className="text-[var(--accent)]">$ focus</div>
                <div className="mt-4 flex flex-wrap gap-2 pl-4">
                  {heroData.terminalFacts.map((fact) => (
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
              About
            </span>
            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              Software Developer
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--subtext)]">
              I build web and desktop applications. I also work with Linux,
              system administration, and networking.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-[var(--text)] sm:text-base">
              <li className="rounded-xl border border-white/10 bg-[var(--surface1)] px-4 py-3">
                Development: web and desktop projects
              </li>
              <li className="rounded-xl border border-white/10 bg-[var(--surface1)] px-4 py-3">
                Systems: Linux and administration work
              </li>
              <li className="rounded-xl border border-white/10 bg-[var(--surface1)] px-4 py-3">
                Goal: To study, like a good priest, until death
              </li>
            </ul>

            <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {heroData.socialLinks.map((link) => (
                <SocialButton key={link.label} link={link} />
              ))}
            </div>

            <a
              href="#about"
              className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--subtext)] transition-colors hover:text-white"
            >
              Read more
              <ArrowDown className="h-4 w-4 text-[var(--accent)]" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
