import { useLanguage } from "../../context/LanguageContext";
import { Section } from "../layout/Section";
import { ContactTerminal } from "../ui/ContactTerminal";

export function ContactSection() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <Section id="contact" eyebrow={c.eyebrow} title={<>{c.heading}</>}>
      <ContactTerminal
        entries={c.entries}
        openLabel={c.open}
        terminalTitle={c.terminalTitle}
        terminalCommand={c.terminalCommand}
      />
    </Section>
  );
}
