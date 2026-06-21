import { HeroSection } from "./_components/hero-section";
import { ProjectsSection } from "./_components/projects-section";
import { ExperienceSection } from "./_components/experience-section";
import { AboutSection } from "./_components/about-section";
import { ContactSection } from "./_components/contact-section";
import { DotIndicator } from "./_components/dot-indicator";
import { Footer } from "./_components/footer";
import { profile } from "@/lib/data/profile";
import { projects } from "@/lib/data/projects";
import { experiences } from "@/lib/data/experience";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <DotIndicator sections={sections} />
      <main>
        <HeroSection
          name={profile.name}
          title={profile.title}
          tagline={profile.tagline}
          ctaText="Get in Touch"
          ctaHref="#contact"
        />
        <ProjectsSection projects={projects} />
        <ExperienceSection experiences={experiences} />
        <AboutSection
          bio={profile.bio}
          skills={profile.skills}
          imagePlaceholder={profile.imagePlaceholder}
        />
        <ContactSection />
      </main>
      <Footer
        copyright={profile.copyright}
        socialLinks={profile.socialLinks}
      />
    </>
  );
}
