import type { NavItem } from "../../types/portfolio";
import { Container } from "./Container";

interface NavbarProps {
  items: NavItem[];
}

export function Navbar({ items }: NavbarProps) {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[var(--base)]">
      <Container>
        <nav className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <a
            href="#hero"
            className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[var(--surface0)]">
              <img
                src="/logo.png"
                alt="doomhyena logo"
                className="h-full w-full object-cover"
              />
            </span>
            doomhyena.hu
          </a>

          <div className="flex flex-wrap items-center gap-2">
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
        </nav>
      </Container>
    </div>
  );
}
