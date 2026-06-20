import { ArrowUpRight, GitBranch, Link, Mail, MessageCircle } from "lucide-react";

import type { SocialLink } from "../../types/portfolio";

const iconMap = {
  github: GitBranch,
  discord: MessageCircle,
  email: Mail,
  link: Link,
};

interface SocialButtonProps {
  link: SocialLink;
}

export function SocialButton({ link }: SocialButtonProps) {
  const Icon = iconMap[link.icon];

  return (
    <a
      href={link.href}
      target={link.href.startsWith("http") ? "_blank" : undefined}
      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
      className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-[var(--surface0)] px-4 py-3 text-sm font-medium text-[var(--subtext)] transition-colors hover:border-[var(--accent)] hover:text-white"
    >
      <Icon className="h-4 w-4 text-[var(--accent)]" />
      {link.label}
      <ArrowUpRight className="h-4 w-4 opacity-60" />
    </a>
  );
}
