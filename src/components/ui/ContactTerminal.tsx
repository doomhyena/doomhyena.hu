import { ArrowUpRight, GitBranch, Link, Mail, MessageCircle } from "lucide-react";
import { TerminalWindow } from "./TerminalWindow";

const iconMap = {
  github: GitBranch,
  discord: MessageCircle,
  email: Mail,
  link: Link,
};

interface ContactTerminalProps {
  entries: Array<{
    label: string;
    value: string;
    href: string;
    icon: string;
  }>;
  openLabel: string;
  terminalTitle: string;
  terminalCommand: string;
}

export function ContactTerminal({
  entries,
  openLabel,
  terminalTitle,
  terminalCommand,
}: ContactTerminalProps) {
  return (
    <TerminalWindow title={terminalTitle}>
      <div className="text-sm leading-7 sm:text-base">
        <div className="text-[var(--accent)]">{terminalCommand}</div>
        <div className="mt-6 space-y-5">
          {entries.map((entry) => {
            const Icon = iconMap[entry.icon as keyof typeof iconMap] ?? Link;

            return (
              <div
                key={entry.label}
                className="rounded-xl border border-white/10 bg-[var(--surface1)] p-4"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-[var(--subtext)]">{entry.label}:</div>
                    <a
                      href={entry.href}
                      target={entry.href.startsWith("http") ? "_blank" : undefined}
                      rel={entry.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-1 inline-flex items-center gap-2 text-white transition-colors hover:text-[var(--accent)]"
                    >
                      {entry.value}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                  <a
                    href={entry.href}
                    target={entry.href.startsWith("http") ? "_blank" : undefined}
                    rel={entry.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[var(--base)] px-4 py-2 text-sm font-medium text-[var(--accent)] transition-colors hover:border-[var(--accent)]"
                  >
                    <Icon className="h-4 w-4" />
                    {openLabel}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </TerminalWindow>
  );
}
