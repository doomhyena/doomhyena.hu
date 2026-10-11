import { useState } from "react";
import type { NavItem } from "../../types/portfolio";
import { Container } from "./Container";

interface NavbarProps {
  items: NavItem[];
  brandText: string;
  primaryNavAriaLabel: string;
  openMenuAriaLabel: string;
  closeMenuAriaLabel: string;
}

export function Navbar({
  items,
  brandText,
  primaryNavAriaLabel,
  openMenuAriaLabel,
  closeMenuAriaLabel,
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[var(--base)]">
      <Container>
        <nav aria-label={primaryNavAriaLabel} className="flex items-center justify-between py-4">
          <a
            href="#hero"
            className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-white"
          >
            {brandText}
          </a>

          {/* Desktop nav */}
          <div className="hidden flex-wrap items-center gap-2 lg:flex">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full border border-white/10 bg-[var(--surface0)] px-4 py-2 text-sm text-[var(--subtext)] transition-colors hover:border-[var(--accent)] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Hamburger button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? closeMenuAriaLabel : openMenuAriaLabel}
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-xl border border-white/10 bg-[var(--surface0)] lg:hidden"
          >
            <span
              className={`h-[2px] w-5 rounded-full bg-white transition-all duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`h-[2px] w-5 rounded-full bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-[2px] w-5 rounded-full bg-white transition-all duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="flex flex-col gap-1 pb-4 lg:hidden">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="rounded-lg border border-white/10 bg-[var(--surface0)] px-4 py-3 text-sm text-[var(--subtext)] transition-colors hover:border-[var(--accent)] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
