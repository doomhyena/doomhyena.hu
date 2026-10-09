import { Moon, Sun } from "lucide-react";

import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { Navbar } from "./components/layout/Navbar";
import { Container } from "./components/layout/Container";
import { AboutSection } from "./components/sections/AboutSection";
import { CareerGoalsSection } from "./components/sections/CareerGoalsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { HeroSection } from "./components/sections/HeroSection";
import { NetworkingSection } from "./components/sections/NetworkingSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { TechnologiesSection } from "./components/sections/TechnologiesSection";

function AppInner() {
  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[var(--base)] text-[var(--text)]">
      <Navbar
        items={t.nav}
        brandText={t.navbar.brandText}
        logoAlt={t.navbar.logoAlt}
        primaryNavAriaLabel={t.navbar.primaryNavAriaLabel}
        openMenuAriaLabel={t.navbar.openMenuAriaLabel}
        closeMenuAriaLabel={t.navbar.closeMenuAriaLabel}
      />

      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <TechnologiesSection />
        <NetworkingSection />
        <CareerGoalsSection />
        <ContactSection />
      </main>

      <footer className="border-t border-white/10 py-8">
        <Container>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm text-[var(--subtext)]">
              2024 - {new Date().getFullYear()} • {t.footer.brand}
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? t.footer.themeToLightAriaLabel : t.footer.themeToDarkAriaLabel}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[var(--surface0)] text-[var(--subtext)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <button
                type="button"
                onClick={() => setLang(lang === 'en' ? 'hu' : 'en')}
                className="rounded-full border border-white/10 bg-[var(--surface0)] px-4 py-2 text-sm text-[var(--subtext)] transition-colors hover:border-[var(--accent)] hover:text-white"
              >
                {t.footer.langToggleLabel}
              </button>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppInner />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
