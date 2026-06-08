import type {
  CareerGoal,
  ContactEntry,
  HeroData,
  NavItem,
  NetworkSkill,
  Project,
  TechnologyGroup,
} from "../types/portfolio";

export const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "technologies", label: "Tech" },
  { id: "projects", label: "Projects" },
  { id: "networking", label: "Systems" },
  { id: "goals", label: "Goals" },
  { id: "contact", label: "Contact" },
];

export const heroData: HeroData = {
  name: "Anastasia",
  title: "Software Developer • System Administrator • Student",
  statusLines: ["I build software.", "I manage systems.", "I keep learning."],
  terminalFacts: ["Web development", "Linux systems", "Networking"],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/doomhyena", icon: "github" },
    {
      label: "Discord",
      href: "https://discord.com/users/864583234158460938",
      icon: "discord",
    },
    { label: "Email", href: "mailto:contact@doomhyena.hu", icon: "email" },
  ],
};

export const aboutIntroParagraphs = [
  "I am a software developer and tester. I am most interested in software development, system administration, and networking.",
  "I like building web applications, desktop applications, and small tools that solve real problems.",
];

export const aboutBackgroundParagraphs = [
  "I currently live in Budapest, Hungary.",
  "Right now I am a student at Bláthy Ottó Titusz Information Technology Technical School, where I study IT Systems and Applications Operations.",
  "I also studied at Schola Europa Academy, where I learned Software Development and Testing.",
  "In the future, I plan to continue my studies at Óbudai University in the Computer Engineering program.",
];

export const technologyGroups: TechnologyGroup[] = [
  {
    title: "Programming",
    items: ["Java", "C#", "Go", "JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "React", "Bootstrap"],
  },
  {
    title: "Backend",
    items: ["PHP", "Laravel", "REST API Development"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MariaDB"],
  },
  {
    title: "System Administration",
    items: [
      "Linux",
      "Windows Server",
      "Active Directory",
      "Virtualization",
      "Networking",
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Packet Tracer",
      "VS Code",
      "IntelliJ IDEA",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Jegyzetár",
    description:
      "A note-sharing website for students. It helps students upload, organize, find, and discuss study notes in one place.",
    responsibilities: [
      "Frontend development and UI work",
      "Profile editing and profile features",
      "Language support and layout updates",
      "Client-side validation and security-related frontend work",
      "Statistics and small interface fixes",
      "Team work on a student project",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "React (planned)", "GitHub"],
    stats: [
      { label: "Type", value: "Student website" },
      { label: "Role", value: "Frontend" },
      { label: "Focus", value: "Sharing notes" },
    ],
  },
  {
    title: "AutoOrganizer",
    description:
      "A JavaFX desktop app for sorting files, renaming them, making backups, and finding duplicates.",
    responsibilities: [
      "Automatic file sorting by file type",
      "Batch renaming with different naming rules",
      "Duplicate search with SHA-256 hashes",
      "Manual and scheduled backups",
      "JSON-based settings",
      "Background tasks with status updates",
    ],
    technologies: [
      "Java",
      "JavaFX",
      "Gson",
      "ControlsFX",
      "Ikonli",
      "BootstrapFX",
    ],
    stats: [
      { label: "Type", value: "Desktop app" },
      { label: "Focus", value: "File management" },
      { label: "Platform", value: "Java 17+" },
    ],
  },
  {
    title: "MÁVTracker",
    description:
      "A web app that shows MÁV train locations, delay, speed, and schedule data on a map.",
    responsibilities: [
      "Train data shown on a map",
      "GraphQL API requests and data handling",
      "Delay, speed, stop, and timetable display",
      "Leaflet map and popup logic",
      "Saving train data into MySQL",
      "PHP backend and proxy logic",
    ],
    technologies: [
      "PHP",
      "JavaScript",
      "MySQL",
      "Leaflet.js",
      "GraphQL API",
      "CSS",
    ],
    stats: [
      { label: "Type", value: "Web app" },
      { label: "Data", value: "Train data" },
      { label: "Focus", value: "Map view" },
    ],
  },
  {
    title: "SimpleWeather",
    description:
      "A weather app built with React. It lets users search for a city and save recent searches.",
    responsibilities: [
      "Search by city name",
      "Search history stored in localStorage",
      "Manual dark mode",
      "Day and night background changes",
      "Temperature-based styling",
      "Responsive layout",
    ],
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "OpenWeatherMap API",
      "localStorage",
    ],
    stats: [
      { label: "Type", value: "Frontend app" },
      { label: "Focus", value: "Weather search" },
      { label: "State", value: "Learning project" },
    ],
  },
  {
    title: "meseijaszok",
    description:
      "An information website made as a portfolio project. It presents a sports group with a clear layout and responsive pages.",
    responsibilities: [
      "Single-page home layout",
      "Extra content pages",
      "Hash-based navigation for static hosting",
      "Responsive design",
      "Footer and contact layout",
      "Deployment for GitHub Pages",
    ],
    technologies: ["React", "TypeScript", "Vite", "CSS", "GitHub Pages"],
    stats: [
      { label: "Type", value: "Website" },
      { label: "Focus", value: "Layout and content" },
      { label: "Deploy", value: "Static hosting" },
    ],
  },
  {
    title: "RangerBot",
    description:
      "A Discord bot project that was later rewritten from C# to Python.",
    responsibilities: [
      "Public Discord bot development",
      "Rebuilding the bot after earlier problems",
      "Moving from C# to Python",
      "Keeping the bot working and growing",
      "Working on a bot used by public servers",
      "Continuing an older project with newer code",
    ],
    technologies: ["Python", "Discord API", "C# (legacy)"],
    stats: [
      { label: "Type", value: "Discord bot" },
      { label: "Focus", value: "Rewrite" },
      { label: "Context", value: "Public use" },
    ],
  },
];

export const networkSkills: NetworkSkill[] = [
  { title: "IPv4 Design", shortLabel: "IPv4" },
  { title: "VLAN Configuration", shortLabel: "VLAN" },
  { title: "Routing & Switching", shortLabel: "Routing" },
  { title: "DHCP Services", shortLabel: "DHCP" },
  { title: "DNS Services", shortLabel: "DNS" },
  { title: "Linux Server Administration", shortLabel: "Linux" },
  { title: "Windows Administration", shortLabel: "Windows" },
  { title: "Network Troubleshooting", shortLabel: "Support" },
];

export const careerGoals: CareerGoal[] = [
  {
    phase: "01",
    title: "Junior Software Developer",
    description:
      "Start my career by building useful software and improving my coding skills.",
  },
  {
    phase: "02",
    title: "Junior System Administrator",
    description:
      "Build stronger skills in Linux, Windows, networks, and daily system work.",
  },
  {
    phase: "03",
    title: "Full Stack Developer",
    description:
      "Work across frontend, backend, databases, and deployment with confidence.",
  },
];

export const contactEntries: ContactEntry[] = [
  {
    label: "Email",
    value: "contact@doomhyena.hu",
    href: "mailto:contact@doomhyena.hu",
    icon: "email",
  },
  {
    label: "GitHub",
    value: "github.com/doomhyena",
    href: "https://github.com/doomhyena",
    icon: "github",
  },
  {
    label: "Discord",
    value: "doomhyena",
    href: "https://discord.com/users/864583234158460938",
    icon: "discord",
  },
];
