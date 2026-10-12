export type Lang = 'en' | 'hu';

const scholaDescEn = `
  <p>I completed the <strong>Software Developer and Tester</strong> program. The training covered the full development lifecycle, from planning and implementation to testing, with team-based workflows and practical use of tools such as <code class="rounded bg-[var(--surface0)] px-1.5">GitHub</code>.</p>

  <p>Key competencies I gained:</p>
  <ul class="list-disc ml-6 space-y-1">
    <li><code class="rounded bg-[var(--surface0)] px-1.5">SQL</code>-based database design and management, including <code class="rounded bg-[var(--surface0)] px-1.5">MySQL</code>.</li>
    <li>Responsive web development with <code class="rounded bg-[var(--surface0)] px-1.5">HTML5</code>, <code class="rounded bg-[var(--surface0)] px-1.5">CSS3</code>, <code class="rounded bg-[var(--surface0)] px-1.5">Bootstrap 5</code>, <code class="rounded bg-[var(--surface0)] px-1.5">JavaScript</code>, plus backend work in <code class="rounded bg-[var(--surface0)] px-1.5">ASP.net</code> and <code class="rounded bg-[var(--surface0)] px-1.5">PHP</code>.</li>
    <li>Desktop application development in <code class="rounded bg-[var(--surface0)] px-1.5">C#</code>, <code class="rounded bg-[var(--surface0)] px-1.5">Java</code>, and <code class="rounded bg-[var(--surface0)] px-1.5">Python</code>.</li>
    <li>Networking fundamentals, software testing practice, and core IT concepts.</li>
    <li>Software licensing basics (<code class="rounded bg-[var(--surface0)] px-1.5">GPL</code>, <code class="rounded bg-[var(--surface0)] px-1.5">LGPL</code>, <code class="rounded bg-[var(--surface0)] px-1.5">AGPL</code>) and technical English.</li>
  </ul>
`;

const scholaDescHu = `
  <p>Elvégeztem a <strong>Szoftverfejlesztő és Tesztelő</strong> képzést. A tananyag a teljes fejlesztési folyamatot lefedte a tervezéstől és megvalósítástól a tesztelésig, csapatmunkára és gyakorlati eszközhasználatra építve, például <code class="rounded bg-[var(--surface0)] px-1.5">GitHub</code> környezetben.</p>

  <p>A képzés során megszerzett főbb kompetenciáim:</p>
  <ul class="list-disc ml-6 space-y-1">
    <li><code class="rounded bg-[var(--surface0)] px-1.5">SQL</code> alapú adatbázistervezés és -kezelés, többek között <code class="rounded bg-[var(--surface0)] px-1.5">MySQL</code> használatával.</li>
    <li>Reszponzív webfejlesztés <code class="rounded bg-[var(--surface0)] px-1.5">HTML5</code>, <code class="rounded bg-[var(--surface0)] px-1.5">CSS3</code>, <code class="rounded bg-[var(--surface0)] px-1.5">Bootstrap 5</code>, <code class="rounded bg-[var(--surface0)] px-1.5">JavaScript</code> technológiákkal, valamint backend munka <code class="rounded bg-[var(--surface0)] px-1.5">ASP.net</code> és <code class="rounded bg-[var(--surface0)] px-1.5">PHP</code> nyelveken.</li>
    <li>Asztali alkalmazásfejlesztés <code class="rounded bg-[var(--surface0)] px-1.5">C#</code>, <code class="rounded bg-[var(--surface0)] px-1.5">Java</code> és <code class="rounded bg-[var(--surface0)] px-1.5">Python</code> használatával.</li>
    <li>Hálózati alapismeretek, szoftvertesztelési gyakorlat és alapvető informatikai tudás.</li>
    <li>Szoftverlicencelési alapismeretek (<code class="rounded bg-[var(--surface0)] px-1.5">GPL</code>, <code class="rounded bg-[var(--surface0)] px-1.5">LGPL</code>, <code class="rounded bg-[var(--surface0)] px-1.5">AGPL</code>) és technikai angol.</li>
  </ul>
`;

export const translations = {
  en: {
    navbar: {
      brandText: 'doomhyena.hu',
      primaryNavAriaLabel: 'Primary navigation',
      openMenuAriaLabel: 'Open menu',
      closeMenuAriaLabel: 'Close menu',
    },
    nav: [
      { id: 'hero', label: 'Home' },
      { id: 'projects', label: 'Projects' },
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'technologies', label: 'Technologies' },
      { id: 'networking', label: 'Systems' },
      { id: 'goals', label: 'Goals' },
      { id: 'contact', label: 'Contact' },
    ],
    hero: {
      name: 'doomhyena',
      title: 'Software Developer • System Administrator • Computer Engineering Student',
      statusLines: [
        'I build maintainable web and desktop applications.',
        'I work with Linux systems and networking foundations.',
        'I focus on practical, user-facing software projects.',
      ],
      terminalFacts: ['React + TypeScript', 'Java and Go projects', 'Linux and networking'],
      terminalTitle: '~/README.md',
      commands: {
        whoami: '$ whoami',
        status: '$ status',
        focus: '$ focus',
      },
      badge: 'About',
      heading: 'Software Developer',
      description:
        'I build web and desktop applications, with hands-on work in Linux systems and networking. You can view projects, source code, and contact options below.',
      listItems: [
        'Main stack: TypeScript, React, C#, ASP.net',
        'Focus areas: product development, system-level thinking, and reliability',
        'Open for junior software development opportunities',
      ],
      readMore: 'Read more',
      intro:
        "I'm Anastasia. I completed the Software Developer and Tester program, and now I study Computer Engineering. I enjoy building practical products, exploring new technologies, and improving projects from architecture to user experience.",
      locationLabel: 'Location',
      locationValue: 'Budapest, Pest County, Hungary',
      ageLabel: 'Age',
      availableLabel: 'Available',
      availableValue: 'open to work',
      languagesLabel: 'Languages',
      languagesValue: 'Hungarian (native) · English (B2) · German (A2)',
      socialLinks: [
        { label: 'GitHub', href: 'https://github.com/doomhyena', icon: 'github' },
        { label: 'Discord', href: 'https://discord.com/users/864583234158460938', icon: 'discord' },
        { label: 'Yoursitee', href: 'https://yoursit.ee/doomhyena', icon: 'link' },
        { label: 'Email', href: 'mailto:contact@doomhyena.hu', icon: 'email' },
      ],
    },
    about: {
      eyebrow: 'About Me',
      heading: 'About Me',
      description: 'Professional background, studies, and current technical focus.',
      terminalTitle: '~/about/README.md',
      introParagraphs: [
        'I am a Hungarian software developer and tester with a strong interest in software engineering, Linux systems, and networking.',
        'I like building practical tools, improving existing projects, and learning continuously through real product work.',
        'My portfolio includes student-focused software, public tooling, and standalone desktop applications.',
      ],
      backgroundHeading: '## Education & Background',
      locationParagraph: 'I currently live in Budapest, Hungary.',
      focusHeading: '## Focus Areas',
      focusAreas: [
        'Software Development',
        'System Administration',
        'Networking Infrastructure',
        'IT Education',
      ],
      education: [
        {
          name: 'Software Developer and Tester',
          href: '#',
          date: '2024.09.01. – 2026.05.29.',
          description: scholaDescEn,
        },
        {
          name: 'IT Systems and Application Operations Technician',
          href: '#',
          date: 'since 2025.11.14.',
          description: 'Currently in progress.',
        },
        {
          name: 'Computer Engineering',
          href: '#',
          date: 'since 2026.09.01.',
          description: 'Currently in progress.',
        },
      ],
    },
    experience: {
      eyebrow: 'Experience',
      heading: 'Work Experience',
      items: [
        {
          company: 'MÁV-START Zrt.',
          href: 'https://www.mav-start.hu/',
          role: 'On-board passenger information and bicycle assistance assistant',
          period: 'since 2026.07.23.',
          description:
            'I currently work at MÁV-START Zrt. in a student work arrangement, supporting passenger information and assisting with bicycle-related services on board trains.',
        },
      ],
    },
    technologies: {
      eyebrow: 'Technologies',
      heading: 'Technologies',
      categoryLabel: 'Category',
      description: 'Tools and technologies I actively use in development and operations work.',
      groups: [
        { title: 'Languages', items: ['Java', 'C#', 'Go', 'TypeScript', 'JavaScript', 'Python', 'PHP'] },
        { title: 'Frontend', items: ['React', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Vite'] },
        { title: 'Backend & APIs', items: ['PHP', 'Laravel', 'REST API development', 'GraphQL integration'] },
        { title: 'Data & Storage', items: ['MySQL', 'MariaDB', 'JSON-based local storage'] },
        {
          title: 'Systems & Networking',
          items: ['Linux', 'Windows Server', 'Active Directory', 'Virtualization', 'VLAN', 'DHCP', 'DNS'],
        },
        { title: 'Tooling', items: ['Git', 'GitHub'] },
      ],
    },
    projects: {
      eyebrow: 'Projects',
      heading: 'Projects',
      description: 'Selected work with concrete implementation details and technology choices.',
      projectLabel: 'Project',
      highlights: 'Highlights',
      stack: 'Stack',
      details: 'Details',
      items: [
        {
          title: 'Jegyzettár',
          href: 'https://github.com/doomhyena/jegyzetar.eu-src',
          description:
            'Student-focused note-sharing platform where I worked on the frontend and key user-facing workflows.',
          responsibilities: [
            'Built and refined frontend screens and layout components',
            'Implemented profile editing and account-related interface flows',
            'Added localization support and client-side validation improvements',
          ],
          technologies: ['PHP', 'MySQL', 'JavaScript', 'React (planned)', 'GitHub'],
          stats: [
            { label: 'Type', value: 'Student website' },
            { label: 'Role', value: 'Frontend' },
            { label: 'Focus', value: 'Sharing notes' },
          ],
        },
        {
          title: 'AutoOrganizer',
          href: 'https://github.com/doomhyena/AutoOrganizer',
          description:
            'I built a JavaFX desktop app for sorting files, renaming them, making backups, and finding duplicates.',
          responsibilities: [
            'Implemented automatic file sorting by type',
            'Built batch renaming with configurable naming rules',
            'Implemented duplicate detection with SHA-256 hashing',
          ],
          technologies: ['Java', 'JavaFX', 'Gson', 'ControlsFX', 'Ikonli', 'BootstrapFX'],
          stats: [
            { label: 'Type', value: 'Desktop app' },
            { label: 'Focus', value: 'File management' },
            { label: 'Platform', value: 'Java 17+' },
          ],
        },
        {
          title: 'MÁVTracker',
          href: 'https://github.com/doomhyena/MAVTracker',
          description:
            'I built a web app that shows MÁV train locations, delay, speed, and schedule data on a map.',
          responsibilities: [
            'Displayed live train data on an interactive Leaflet map',
            'Integrated and processed GraphQL API responses',
            'Built delay, speed, stop, and timetable data views',
          ],
          technologies: ['PHP', 'JavaScript', 'MySQL', 'Leaflet.js', 'GraphQL API', 'CSS'],
          stats: [
            { label: 'Type', value: 'Web app' },
            { label: 'Data', value: 'Train data' },
            { label: 'Focus', value: 'Map view' },
          ],
        },
        {
          title: 'SimpleWeather',
          href: 'https://github.com/doomhyena/simpleweather',
          description:
            'I built a weather app with React that lets users search for a city and save recent searches.',
          responsibilities: [
            'Implemented city search with live lookup results',
            'Stored recent searches in localStorage',
            'Built responsive UI with dynamic weather-based styling',
          ],
          technologies: ['React', 'JavaScript', 'CSS', 'OpenWeatherMap API', 'localStorage'],
          stats: [
            { label: 'Type', value: 'Frontend app' },
            { label: 'Focus', value: 'Weather search' },
            { label: 'State', value: 'Learning project' },
          ],
        },
        {
          title: 'meseijaszok',
          href: 'https://github.com/doomhyena/meseijaszok',
          description:
            'I built an information website as a portfolio project presenting a sports group with a clear layout and responsive pages.',
          responsibilities: [
            'Designed and built the core page layout and content structure',
            'Implemented multi-page navigation for static hosting',
            'Deployed and maintained the site on GitHub Pages',
          ],
          technologies: ['React', 'TypeScript', 'Vite', 'CSS', 'GitHub Pages'],
          stats: [
            { label: 'Type', value: 'Website' },
            { label: 'Focus', value: 'Layout and content' },
            { label: 'Deploy', value: 'Static hosting' },
          ],
        },
        {
          title: 'RangerBot',
          href: 'https://rangerbot.hu/',
          description:
            'We work on a public Discord bot that we rewrote from C# to Python.',
          responsibilities: [
            'Maintained and expanded a public Discord bot codebase as a team',
            'Rewrote and restructured the project architecture together',
            'Migrated the implementation from C# to Python as a team',
          ],
          technologies: ['Python', 'Discord API', 'C# (legacy)'],
          stats: [
            { label: 'Type', value: 'Discord bot' },
            { label: 'Focus', value: 'Rewrite' },
            { label: 'Context', value: 'Public use' },
          ],
        },
        {
          title: 'JHKBot',
          href: 'https://github.com/doomhyena/JHKBot',
          description:
            'The official Discord bot of Óbuda University\'s Game Development Student Circle, developed and maintained by me.',
          responsibilities: [
            'Developed and maintained the student circle\'s official Discord bot',
            'Written in Python',
            'Improved the project structure and maintainability',
          ],
          technologies: ['Python', 'Discord API'],
          stats: [
            { label: 'Type', value: 'Discord bot' },
            { label: 'Role', value: 'Developer & Maintainer' },
            { label: 'Focus', value: 'Migration & Development' },
          ],
        },
        {
          title: 'Toll',
          href: 'https://github.com/doomhyena/toll',
          description:
            'I built Toll, an unofficial desktop e-Kréta companion for high school students, using Wails v2 with a React/TypeScript frontend and Go backend.',
          responsibilities: [
            'Implemented e-Kréta login with institution search and token-based session handling',
            'Built multi-account profile support and local account switching',
            'Developed timetable, grade, and homework views with filtering features',
          ],
          technologies: ['Wails v2', 'Go', 'React', 'TypeScript', 'Vite', 'e-Kréta MOBILE API'],
          stats: [
            { label: 'Type', value: 'Desktop app' },
            { label: 'Focus', value: 'e-Kréta companion' },
            { label: 'Platform', value: 'Windows, macOS, Linux' },
          ],
        },
      ],
    },
    networking: {
      eyebrow: 'Networking & System Administration',
      heading: 'Networking & System Administration',
      sectionDescription: 'Operational competencies that support development and day-to-day system work.',
      description:
        'I work with network setup, Linux and Windows administration, and technical troubleshooting.',
      skills: [
        { title: 'IPv4 Design', shortLabel: 'IPv4' },
        { title: 'VLAN Configuration', shortLabel: 'VLAN' },
        { title: 'Routing & Switching', shortLabel: 'Routing' },
        { title: 'DHCP Services', shortLabel: 'DHCP' },
        { title: 'DNS Services', shortLabel: 'DNS' },
        { title: 'Linux Server Administration', shortLabel: 'Linux' },
        { title: 'Windows Administration', shortLabel: 'Windows' },
        { title: 'Network Troubleshooting', shortLabel: 'Support' },
      ],
    },
    goals: {
      eyebrow: 'Career Goals',
      heading: 'Career Goals',
      description: 'Professional direction for the next stages of my software and systems career.',
      items: [
        {
          phase: '01',
          title: 'Junior Software Developer',
          description: 'I want to start my career by building useful software and improving my coding skills.',
        },
        {
          phase: '02',
          title: 'Junior System Administrator',
          description: 'I want to build stronger skills in Linux, Windows, networks, and daily system work.',
        },
        {
          phase: '03',
          title: 'Full Stack Developer',
          description: 'I want to work confidently across frontend, backend, databases, and deployment.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      heading: 'Contact',
      open: 'Open',
      terminalTitle: '~/contact --show',
      terminalCommand: '$ contact --show',
      entries: [
        { label: 'Email', value: 'contact@doomhyena.hu', href: 'mailto:contact@doomhyena.hu', icon: 'email' },
        { label: 'GitHub', value: 'github.com/doomhyena', href: 'https://github.com/doomhyena', icon: 'github' },
        { label: 'Discord', value: 'doomhyena', href: 'https://discord.com/users/864583234158460938', icon: 'discord' },
      ],
    },
    footer: {
      brand: 'doomhyena',
      langToggleLabel: 'Magyar',
      themeToLightAriaLabel: 'Switch to light mode',
      themeToDarkAriaLabel: 'Switch to dark mode',
    },
  },

  hu: {
    navbar: {
      brandText: 'doomhyena.hu',
      logoAlt: 'doomhyena logó',
      primaryNavAriaLabel: 'Elsődleges navigáció',
      openMenuAriaLabel: 'Menü megnyitása',
      closeMenuAriaLabel: 'Menü bezárása',
    },
    nav: [
      { id: 'hero', label: 'Kezdőlap' },
      { id: 'projects', label: 'Projektek' },
      { id: 'about', label: 'Rólam' },
      { id: 'experience', label: 'Munkatapasztalat' },
      { id: 'technologies', label: 'Technológiák' },
      { id: 'networking', label: 'Rendszerek' },
      { id: 'goals', label: 'Célok' },
      { id: 'contact', label: 'Kapcsolat' },
    ],
    hero: {
      name: 'doomhyena',
      title: 'Szoftverfejlesztő • Rendszergazda • Mérnökinformatikus hallgató',
      statusLines: [
        'Karbantartható webes és asztali alkalmazásokat fejlesztek.',
        'Linux rendszerekkel és hálózati alapokkal is aktívan foglalkozom.',
        'A gyakorlati, felhasználóközpontú projektekre koncentrálok.',
      ],
      terminalFacts: ['React + TypeScript', 'Java és Go projektek', 'Linux és hálózatok'],
      terminalTitle: '~/README.md',
      commands: {
        whoami: '$ whoami',
        status: '$ status',
        focus: '$ focus',
      },
      badge: 'Rólam',
      heading: 'Szoftverfejlesztői portfólió',
      description:
        'Webes és asztali alkalmazásokat készítek, emellett Linux rendszerekkel és hálózati megoldásokkal is dolgozom. Lentebb elérhetők a projektjeim, forráskódjaim és kapcsolatfelvételi pontjaim.',
      listItems: [
        'Fő stack: Java, TypeScript, React, PHP, Go',
        'Fókusz: termékfejlesztés, rendszer-szemlélet, megbízhatóság',
        'Nyitott vagyok junior szoftverfejlesztői lehetőségekre',
      ],
      readMore: 'Tovább olvasom',
      intro:
        'Anasztázia vagyok. Elvégeztem a Szoftverfejlesztő és Tesztelő képzést, jelenleg mérnökinformatikát tanulok. Szeretek gyakorlati problémákra használható szoftvereket építeni, új technológiákat tanulni, és a projekteket architektúrától felhasználói élményig fejleszteni.',
      locationLabel: 'Hely',
      locationValue: 'Budapest, Magyarország',
      ageLabel: 'Kor',
      availableLabel: 'Elérhetőség',
      availableValue: 'Munkára nyitott',
      languagesLabel: 'Nyelvek',
      languagesValue: 'Magyar (anyanyelv) · Angol (B2) · Német (A2)',
      socialLinks: [
        { label: 'GitHub', href: 'https://github.com/doomhyena', icon: 'github' },
        { label: 'Discord', href: 'https://discord.com/users/864583234158460938', icon: 'discord' },
        { label: 'Yoursitee', href: 'https://yoursit.ee/doomhyena', icon: 'link' },
        { label: 'Email', href: 'mailto:contact@doomhyena.hu', icon: 'email' },
      ],
    },
    about: {
      eyebrow: 'Rólam',
      heading: 'Rólam',
      description: 'Szakmai háttér, tanulmányok és aktuális technológiai fókusz.',
      terminalTitle: '~/about/README.md',
      introParagraphs: [
        'Magyar szoftverfejlesztő és tesztelő vagyok, akit különösen a szoftverfejlesztés, a Linux rendszerek és a hálózatok érdekelnek.',
        'Szívesen készítek gyakorlati eszközöket, fejlesztek meglévő projekteket, és valós termékmunka közben tanulok folyamatosan.',
        'A portfóliómban diákokat támogató szoftverek, nyilvános eszközök és önálló asztali alkalmazások is szerepelnek.',
      ],
      backgroundHeading: '## Tanulmányok & Háttér',
      locationParagraph: 'Jelenleg Budapesten élek, Magyarországon.',
      focusHeading: '## Fókuszterületek',
      focusAreas: [
        'Szoftverfejlesztés',
        'Rendszerüzemeltetés',
        'Hálózati infrastruktúra',
        'Informatika oktatás',
      ],
      education: [
        {
          name: 'Szoftverfejlesztő és Tesztelő',
          href: '#',
          date: '2024.09.01. – 2026.05.29.',
          description: scholaDescHu,
        },
        {
          name: 'Informatikai rendszer- és alkalmazás-üzemeltető technikus',
          href: '#',
          date: '2025.11.14. óta',
          description: 'Jelenleg folyamatban.',
        },
        {
          name: 'Mérnökinformatikus',
          href: '#',
          date: '2026.09.01. óta',
          description: 'Jelenleg folyamatban.',
        },
      ],
    },
    experience: {
      eyebrow: 'Munkatapasztalat',
      heading: 'Munkatapasztalat',
      items: [
        {
          company: 'MÁV-START Zrt.',
          href: 'https://www.mav-start.hu/',
          role: 'Fedélzeti utastájékoztatás- és kerékpár-segítő',
          period: '2026.07.23. óta',
          description:
            'Jelenleg a MÁV-START Zrt.-nél dolgozom diákmunka keretein belül, ahol a fedélzeti utastájékoztatás és a kerékpárhoz kapcsolódó segítségnyújtás feladatait látom el.',
        },
      ],
    },
    technologies: {
      eyebrow: 'Technológiák',
      heading: 'Technológiák',
      categoryLabel: 'Kategória',
      description: 'Fejlesztésben és üzemeltetésben aktívan használt eszközeim és technológiáim.',
      groups: [
        { title: 'Programnyelvek', items: ['Java', 'C#', 'Go', 'TypeScript', 'JavaScript', 'Python', 'PHP'] },
        { title: 'Frontend', items: ['React', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Vite'] },
        { title: 'Backend és API-k', items: ['PHP', 'Laravel', 'REST API fejlesztés', 'GraphQL integráció'] },
        { title: 'Adatkezelés', items: ['MySQL', 'MariaDB', 'JSON-alapú helyi tárolás'] },
        {
          title: 'Rendszerek és hálózatok',
          items: ['Linux', 'Windows Server', 'Active Directory', 'Virtualizáció', 'VLAN', 'DHCP', 'DNS'],
        },
        { title: 'Eszközök', items: ['Git', 'GitHub'] },
      ],
    },
    projects: {
      eyebrow: 'Projektek',
      heading: 'Projektek',
      description: 'Válogatott munkák konkrét megvalósítási részletekkel és technológiai döntésekkel.',
      projectLabel: 'Projekt',
      highlights: 'Kiemelések',
      stack: 'Stack',
      details: 'Részletek',
      items: [
        {
          title: 'Jegyzettár',
          href: 'https://github.com/doomhyena/jegyzetar.eu-src',
          description:
            'Diákoknak szóló jegyzetmegosztó platform, ahol főként a frontend és a felhasználói folyamatok fejlesztésén dolgoztam.',
          responsibilities: [
            'Frontend nézeteket és elrendezési elemeket fejlesztettem',
            'Profilszerkesztési és fiókhoz kapcsolódó felhasználói folyamatokat építettem',
            'Nyelvi támogatást és kliensoldali validációs fejlesztéseket adtam hozzá',
          ],
          technologies: ['PHP', 'MySQL', 'JavaScript', 'React (tervezett)', 'GitHub'],
          stats: [
            { label: 'Típus', value: 'Diák weboldal' },
            { label: 'Szerepkör', value: 'Frontend' },
            { label: 'Fókusz', value: 'Jegyzetek megosztása' },
          ],
        },
        {
          title: 'AutoOrganizer',
          href: 'https://github.com/doomhyena/AutoOrganizer',
          description:
            'Megépítettem egy JavaFX asztali alkalmazást fájlok rendezéséhez, átnevezéséhez, biztonsági mentéséhez és duplikátumok kereséséhez.',
          responsibilities: [
            'Automatikus fájlrendezést fejlesztettem fájltípus alapján',
            'Köteges átnevezést implementáltam konfigurálható szabályokkal',
            'SHA-256 alapú duplikátumkeresést építettem',
          ],
          technologies: ['Java', 'JavaFX', 'Gson', 'ControlsFX', 'Ikonli', 'BootstrapFX'],
          stats: [
            { label: 'Típus', value: 'Asztali alkalmazás' },
            { label: 'Fókusz', value: 'Fájlkezelés' },
            { label: 'Platform', value: 'Java 17+' },
          ],
        },
        {
          title: 'MÁVTracker',
          href: 'https://github.com/doomhyena/MAVTracker',
          description:
            'Megépítettem egy webalkalmazást, amely MÁV vonatok helyzetét, késését, sebességét és menetrendjét jeleníti meg térképen.',
          responsibilities: [
            'Valós idejű vonatadatokat jelenítettem meg interaktív Leaflet térképen',
            'GraphQL API válaszok lekérését és feldolgozását fejlesztettem',
            'Késés-, sebesség-, megálló- és menetrendnézeteket készítettem',
          ],
          technologies: ['PHP', 'JavaScript', 'MySQL', 'Leaflet.js', 'GraphQL API', 'CSS'],
          stats: [
            { label: 'Típus', value: 'Webalkalmazás' },
            { label: 'Adatok', value: 'Vonatadatok' },
            { label: 'Fókusz', value: 'Térképnézet' },
          ],
        },
        {
          title: 'SimpleWeather',
          href: 'https://github.com/doomhyena/simpleweather',
          description:
            'Megépítettem egy React időjárás-alkalmazást, amellyel városokra lehet keresni és menteni a legutóbbi kereséseket.',
          responsibilities: [
            'Városnév alapú keresést készítettem élő találatokkal',
            'Legutóbbi kereséseket localStorage-ban tároltam',
            'Reszponzív UI-t építettem dinamikus időjárás-alapú stílusokkal',
          ],
          technologies: ['React', 'JavaScript', 'CSS', 'OpenWeatherMap API', 'localStorage'],
          stats: [
            { label: 'Típus', value: 'Frontend alkalmazás' },
            { label: 'Fókusz', value: 'Időjáráskeresés' },
            { label: 'Állapot', value: 'Tanulóprojekt' },
          ],
        },
        {
          title: 'meseijaszok',
          href: 'https://github.com/doomhyena/meseijaszok',
          description:
            'Megépítettem egy portfólió projektként készült információs weboldalt, amely egy sportcsoportot mutat be letisztult elrendezéssel és reszponzív oldalakkal.',
          responsibilities: [
            'Megterveztem és megépítettem az oldal fő elrendezését és tartalmi szerkezetét',
            'Többoldalas navigációt készítettem statikus hosztoláshoz',
            'GitHub Pages környezetben telepítettem és karbantartottam az oldalt',
          ],
          technologies: ['React', 'TypeScript', 'Vite', 'CSS', 'GitHub Pages'],
          stats: [
            { label: 'Típus', value: 'Weboldal' },
            { label: 'Fókusz', value: 'Elrendezés és tartalom' },
            { label: 'Deploy', value: 'Statikus hosting' },
          ],
        },
        {
          title: 'RangerBot',
          href: 'https://rangerbot.hu/',
          description:
            'Nyilvános Discord boton dolgozunk, amelyet C#-ból Pythonra írtunk át.',
          responsibilities: [
            'Nyilvános Discord botot fejlesztünk és karbantartunk',
            'A teljes kódbázist átírtuk és újrastrukturáltuk',
            'A projektet C#-ról Pythonra migráltuk',
          ],
          technologies: ['Python', 'Discord API', 'C# (legacy)'],
          stats: [
            { label: 'Típus', value: 'Discord bot' },
            { label: 'Fókusz', value: 'Átírás' },
            { label: 'Kontextus', value: 'Nyilvános használat' },
          ],
        },
        {
          title: 'JHKBot',
          href: 'https://github.com/doomhyena/JHKBot',
          description:
            'Az Óbudai Egyetem Játékfejlesztő Hallgatói Körének hivatalos Discord botja, amelyet én fejlesztek és tartok karban.',
          responsibilities: [
            'Fejlesztem és karbantartom a hallgatói kör hivatalos Discord botját',
            'Pythonban íródott',
            'A projekt struktúráját és karbantarthatóságát fejlesztettem',
          ],
          technologies: ['Python', 'Discord API'],
          stats: [
            { label: 'Típus', value: 'Discord bot' },
            { label: 'Szerepkör', value: 'Fejlesztő & Karbantartó' },
            { label: 'Fókusz', value: 'Migráció & Fejlesztés' },
          ],
        },
        {
          title: 'Toll',
          href: 'https://github.com/doomhyena/toll',
          description:
            'Megépítettem a Tollt, egy nem hivatalos asztali e-Kréta kiegészítőt középiskolásoknak, Wails v2-vel, React/TypeScript frontenddel és Go backenddel.',
          responsibilities: [
            'Kréta bejelentkezést fejlesztettem intézménykeresővel és tokenes munkamenet-kezeléssel',
            'Többfiókos profilkezelést készítettem helyi profilváltással',
            'Órarend-, jegy- és házifeladat-nézeteket fejlesztettem szűrési lehetőségekkel',
          ],
          technologies: ['Wails v2', 'Go', 'React', 'TypeScript', 'Vite', 'e-Kréta MOBILE API'],
          stats: [
            { label: 'Típus', value: 'Asztali alkalmazás' },
            { label: 'Fókusz', value: 'e-Kréta kiegészítő' },
            { label: 'Platform', value: 'Windows, macOS, Linux' },
          ],
        },
      ],
    },
    networking: {
      eyebrow: 'Hálózatok & Rendszerüzemeltetés',
      heading: 'Hálózatok & Rendszerüzemeltetés',
      sectionDescription: 'Fejlesztői munkát támogató üzemeltetési és hálózati kompetenciák.',
      description:
        'Hálózati beállításokkal, Linux és Windows adminisztrációval, valamint technikai hibaelhárítással foglalkozom.',
      skills: [
        { title: 'IPv4 tervezés', shortLabel: 'IPv4' },
        { title: 'VLAN konfiguráció', shortLabel: 'VLAN' },
        { title: 'Útválasztás & Kapcsolás', shortLabel: 'Routing' },
        { title: 'DHCP szolgáltatások', shortLabel: 'DHCP' },
        { title: 'DNS szolgáltatások', shortLabel: 'DNS' },
        { title: 'Linux szerver adminisztráció', shortLabel: 'Linux' },
        { title: 'Windows adminisztráció', shortLabel: 'Windows' },
        { title: 'Hálózati hibaelhárítás', shortLabel: 'Support' },
      ],
    },
    goals: {
      eyebrow: 'Karrier célok',
      heading: 'Karrier célok',
      description: 'Szakmai irány a következő évek szoftver- és rendszerszintű feladataihoz.',
      items: [
        {
          phase: '01',
          title: 'Junior Szoftverfejlesztő',
          description:
            'Karrieremet hasznos szoftver fejlesztésével szeretném kezdeni, miközben folyamatosan fejlesztem a programozási készségeimet.',
        },
        {
          phase: '02',
          title: 'Junior Rendszergazda',
          description:
            'Erősebb készségeket szeretnék kiépíteni Linux, Windows, hálózatok és napi rendszermunka terén.',
        },
        {
          phase: '03',
          title: 'Full Stack Fejlesztő',
          description:
            'Magabiztosan szeretnék dolgozni frontenddel, backenddel, adatbázisokkal és telepítéssel.',
        },
      ],
    },
    contact: {
      eyebrow: 'Kapcsolat',
      heading: 'Kapcsolat',
      open: 'Megnyitás',
      terminalTitle: '~/contact --show',
      terminalCommand: '$ contact --show',
      entries: [
        { label: 'Email', value: 'contact@doomhyena.hu', href: 'mailto:contact@doomhyena.hu', icon: 'email' },
        { label: 'GitHub', value: 'github.com/doomhyena', href: 'https://github.com/doomhyena', icon: 'github' },
        { label: 'Discord', value: 'doomhyena', href: 'https://discord.com/users/864583234158460938', icon: 'discord' },
      ],
    },
    footer: {
      brand: 'doomhyena',
      langToggleLabel: 'English',
      themeToLightAriaLabel: 'Váltás világos módra',
      themeToDarkAriaLabel: 'Váltás sötét módra',
    },
  },
};

export type Translations = typeof translations.en;
