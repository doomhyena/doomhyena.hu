import type { PropsWithChildren } from "react";
import { Monitor, TerminalSquare } from "lucide-react";

interface TerminalWindowProps extends PropsWithChildren {
  title?: string;
  className?: string;
}

export function TerminalWindow({
  title = "~/portfolio",
  className = "",
  children,
}: TerminalWindowProps) {
  return (
    <div className={`terminal-shell ${className}`}>
      <div className="terminal-header">
        <span className="h-3 w-3 rounded-full bg-[var(--accent)]" />
        <span className="h-3 w-3 rounded-full bg-[var(--accent)]" />
        <span className="h-3 w-3 rounded-full bg-[var(--accent)]" />
        <div className="ml-3 flex items-center gap-2 text-xs text-[var(--subtext)]">
          <Monitor className="h-4 w-4" />
          <span>{title}</span>
        </div>
        <TerminalSquare className="ml-auto h-4 w-4 text-[var(--accent)]" />
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}
