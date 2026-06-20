export type SocialIcon = "github" | "discord" | "email" | "link";

export interface NavItem {
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface HeroData {
  name: string;
  title: string;
  statusLines: string[];
  socialLinks: SocialLink[];
  terminalFacts: string[];
}

export interface TechnologyGroup {
  title: string;
  items: string[];
}

export interface ProjectStat {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  description: string;
  href?: string;
  responsibilities: string[];
  technologies: string[];
  stats: ProjectStat[];
}

export interface NetworkSkill {
  title: string;
  shortLabel: string;
}

export interface CareerGoal {
  phase: string;
  title: string;
  description: string;
}

export interface ContactEntry {
  label: string;
  value: string;
  href: string;
  icon: SocialIcon;
}
