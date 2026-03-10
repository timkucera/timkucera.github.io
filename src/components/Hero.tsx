import Image from "next/image";
import { PersonalInfo, SocialLink, ThemeConfig, LayoutConfig } from "@/lib/types";
import { SocialLinks } from "./SocialLinks";

interface HeroProps {
  personal: PersonalInfo;
  socialLinks: SocialLink[];
  theme: ThemeConfig;
  layout: LayoutConfig;
}

export function Hero({ personal, socialLinks, theme, layout }: HeroProps) {
  const alignment = theme.heroAlignment === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <header className={`flex flex-col ${alignment} pt-16 pb-10 md:pt-24 md:pb-14`}>
      <Image
        src={personal.profileImage}
        alt={personal.profileImageAlt}
        width={88}
        height={88}
        className="rounded-full grayscale-[20%] border-3 border-neutral-700 dark:border-neutral-700"
        priority
      />
      <div className="mt-5 space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          {personal.name}
        </h1>
        <p className="font-mono text-sm text-neutral-500 dark:text-neutral-400">
          {personal.role}
        </p>
      </div>
      <p className="mt-3 text-base text-neutral-700 dark:text-neutral-300 max-w-lg">
        {personal.tagline}
      </p>
      {personal.location && (
        <p className="mt-1 font-mono text-xs text-neutral-400 dark:text-neutral-500">
          {personal.location}
        </p>
      )}
      <div className="mt-5">
        <SocialLinks links={socialLinks} openInNewTab={layout.openLinksInNewTab} email={personal.email} />
      </div>
    </header>
  );
}
