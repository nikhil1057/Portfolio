import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionShell from "@/components/SectionShell";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <SectionShell id="about" title="About" />
      <SectionShell id="experience" title="Experience" />
      <SectionShell id="projects" title="Projects" />
      <SectionShell id="mnemo" title="Mnemo" />
      <SectionShell id="contact" title="Contact" />
    </main>
  );
}
