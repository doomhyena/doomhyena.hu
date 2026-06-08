import { contactEntries } from "../../data/portfolio";
import { Section } from "../layout/Section";
import { ContactTerminal } from "../ui/ContactTerminal";

export function ContactSection() {
  return (
    <Section id="contact" eyebrow="Contact" title={<>Contact</>}>
      <ContactTerminal entries={contactEntries} />
    </Section>
  );
}
