import { siteConfig } from "@/lib/config";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { CurrentWorkList } from "@/components/CurrentWorkList";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ResearchList } from "@/components/ResearchList";
import { ContactBlock } from "@/components/ContactBlock";
import { OptionalSectionBlock } from "@/components/OptionalSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const { personal, socialLinks, currentWork, projects, research, contact, theme, layout, optional } = siteConfig;

  return (
    <div className={`${theme.maxWidth} mx-auto px-5 sm:px-6 md:px-8 overflow-x-hidden`}>
      <Hero personal={personal} socialLinks={socialLinks} theme={theme} layout={layout} />

      <main>
        {layout.sections.currentWork && currentWork.length > 0 && (
          <Section id="work" title="Current Work">
            <CurrentWorkList roles={currentWork} layout={layout} />
          </Section>
        )}

        {layout.sections.projects && projects.length > 0 && (
          <Section id="projects" title="Projects">
            <ProjectGrid projects={projects} layout={layout} />
          </Section>
        )}

        {layout.sections.research && research.items.length > 0 && (
          <Section id="research" title="Selected Research">
            <ResearchList items={research.items} scholarUrl={research.scholarUrl} layout={layout} />
          </Section>
        )}

        {optional?.writing && (
          <OptionalSectionBlock id="writing" section={optional.writing} layout={layout} />
        )}
        {optional?.press && (
          <OptionalSectionBlock id="press" section={optional.press} layout={layout} />
        )}
        {optional?.notes && (
          <OptionalSectionBlock id="notes" section={optional.notes} layout={layout} />
        )}
        {optional?.cv && (
          <OptionalSectionBlock id="cv" section={optional.cv} layout={layout} />
        )}

        {layout.sections.contact && (
          <Section id="contact" title={contact.heading}>
            <ContactBlock contact={contact} socialLinks={socialLinks} personal={personal} layout={layout} />
          </Section>
        )}
      </main>

      <Footer personal={personal} />
    </div>
  );
}
