import { Navbar } from "./components/layout/Navbar";
import { AboutSection } from "./components/sections/AboutSection";
import { CareerGoalsSection } from "./components/sections/CareerGoalsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { NetworkingSection } from "./components/sections/NetworkingSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { TechnologiesSection } from "./components/sections/TechnologiesSection";
import { navItems } from "./data/portfolio";

function App() {
  return (
    <div className="min-h-screen bg-[var(--base)] text-[var(--text)]">
      <Navbar items={navItems} />

      <main>
        <HeroSection />
        <AboutSection />
        <TechnologiesSection />
        <ProjectsSection />
        <NetworkingSection />
        <CareerGoalsSection />
        <ContactSection />
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-[var(--subtext)]">
        2024 - {new Date().getFullYear()} • Anastasia
      </footer>
    </div>
  );
}

export default App;
