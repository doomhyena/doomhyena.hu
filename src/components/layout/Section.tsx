import type { PropsWithChildren, ReactNode } from "react";

import { Container } from "./Container";

interface SectionProps extends PropsWithChildren {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className="scroll-mt-28 py-16 sm:py-20">
      <Container>
        <div className="mb-10 max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-[var(--surface0)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-[var(--subtext)] sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
