import { ContactInfo, SocialLink, PersonalInfo, LayoutConfig } from "@/lib/types";
import { SocialLinks } from "./SocialLinks";

interface ContactBlockProps {
  contact: ContactInfo;
  socialLinks: SocialLink[];
  personal: PersonalInfo;
  layout: LayoutConfig;
}

export function ContactBlock({ contact, socialLinks, personal, layout }: ContactBlockProps) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg">
        {contact.description}
      </p>
      <SocialLinks
        links={socialLinks.filter((l) => l.label.toLowerCase() === "linkedin")}
        openInNewTab={layout.openLinksInNewTab}
        email={personal.email}
      />
    </div>
  );
}
