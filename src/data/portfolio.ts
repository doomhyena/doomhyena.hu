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
    { label: "Yoursite", href: "https://yoursit.ee/doomhyena", icon: "link" },
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
  "In the future, I plan to continue my studies at Óbudai University in the Computer Engineering program.",
  "I also studied at Schola Europa Academy, where I learned Software Development and Testing.",
];

export const education = [
  {
    name: "Schola Europa Akadémia Technikum, Gimnázium és Alapfokú Művészeti Iskola",
    href: "https://scholaeu.hu/",
    date: "2024.09.01. – 2026.05.29.",
    description: `
      <p>I completed the <strong>Software Developer and Tester</strong> program at Schola Europa. There I learned to design, implement and test both web and desktop applications, and I gained hands-on experience in database design and management.</p>

      <p>We approached software development as a full product lifecycle: working in teams, following development workflows, and using industry tools like <code class="rounded bg-[var(--surface0)] px-1.5">GitHub</code>. Instead of fearing AI, we learned to use it as a practical tool to improve our productivity.</p>

      <p>Technically, I worked with and learned:</p>
      <ul class="list-disc ml-6 space-y-1">
        <li><code class="rounded bg-[var(--surface0)] px-1.5">SQL</code> database design and management (including <code class="rounded bg-[var(--surface0)] px-1.5">MySQL</code>).</li>
        <li>Building responsive, dynamic websites using <code class="rounded bg-[var(--surface0)] px-1.5">HTML5</code>, <code class="rounded bg-[var(--surface0)] px-1.5">CSS3</code> and <code class="rounded bg-[var(--surface0)] px-1.5">Bootstrap 5</code>; programming with <code class="rounded bg-[var(--surface0)] px-1.5">JavaScript</code> and <code class="rounded bg-[var(--surface0)] px-1.5">PHP</code>.</li>
        <li>Developing desktop applications in <code class="rounded bg-[var(--surface0)] px-1.5">C#</code>, <code class="rounded bg-[var(--surface0)] px-1.5">Java</code> and <code class="rounded bg-[var(--surface0)] px-1.5">Python</code>.</li>
        <li>Practical networking fundamentals and basic network setup.</li>
        <li>Theory and hands-on practice of software testing.</li>
        <li>Core IT concepts and an introduction to software licensing (<code class="rounded bg-[var(--surface0)] px-1.5">GPL</code>, <code class="rounded bg-[var(--surface0)] px-1.5">LGPL</code>, <code class="rounded bg-[var(--surface0)] px-1.5">AGPL</code>).</li>
        <li>Technical English for software development and interviewing.</li>
      </ul>

      <p>Beyond technical skills, the program helped me develop better teamwork, communication, and project workflows — all essential when working in real development teams or launching projects independently.</p>

      <h4 class="mt-4">Key modules</h4>
      <ul class="list-disc ml-6 space-y-1">
        <li>Programming theory</li>
        <li>Desktop applications: <code class="rounded bg-[var(--surface0)] px-1.5">Java</code>, <code class="rounded bg-[var(--surface0)] px-1.5">C#</code>, <code class="rounded bg-[var(--surface0)] px-1.5">Godot</code></li>
        <li>Web development (frontend & backend)</li>
        <li>Frontend: <code class="rounded bg-[var(--surface0)] px-1.5">HTML5</code>, <code class="rounded bg-[var(--surface0)] px-1.5">CSS3</code>, <code class="rounded bg-[var(--surface0)] px-1.5">Bootstrap 5</code></li>
        <li>Backend: <code class="rounded bg-[var(--surface0)] px-1.5">JavaScript</code>, <code class="rounded bg-[var(--surface0)] px-1.5">PHP</code></li>
        <li>CMS systems: <code class="rounded bg-[var(--surface0)] px-1.5">WordPress</code></li>
        <li>Database management</li>
        <li>IT fundamentals</li>
      </ul>
    `,
  },
  {
    name: "Budapesti Műszaki SZC Bláthy Ottó Titusz Informatikai Technikum",
    href: "https://blathy.info/",
    date: "since 2025.11.14.",
    description:
      "I am currently studying IT Systems and Application Operations Technician here.",
  },
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
];

export const projects: Project[] = [
  {
    title: "Jegyzetár",
    href: "https://github.com/NoteForge-Development/jegyzetar.eu",
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
    href: "https://github.com/doomhyena/AutoOrganizer",
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
    href: "https://github.com/doomhyena/MAVTracker",
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
    href: "https://github.com/doomhyena/simpleweather",
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
    href: "https://github.com/doomhyena/meseijaszok",
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
    href: "https://rangerbot.hu/",
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
  {
    title: "Toll",
    href: "https://github.com/doomhyena/toll",
    description:
      "Toll is an unofficial desktop e-Kréta companion for high school students, built with Wails v2 using a React/TypeScript frontend and Go backend.",
    responsibilities: [
      "Kréta login with institution search and token-based session management",
      "Multiple account handling with saved e-Kréta profiles",
      "Weekly timetable view with lesson detail modal",
      "Subject-based grade overview, weighted averages, and term highlights",
      "Homework filtering by deadline, status, and subject",
      "Offline notes, task notebook, and local profile settings",
    ],
    technologies: ["Wails v2", "Go", "React", "TypeScript", "Vite", "e-Kréta MOBILE API"],
    stats: [
      { label: "Type", value: "Desktop app" },
      { label: "Focus", value: "e-Kréta companion" },
      { label: "Platform", value: "Windows, macOS, Linux" },
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
