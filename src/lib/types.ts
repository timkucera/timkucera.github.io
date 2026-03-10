export interface SocialLink {
  label: string;
  url: string;
  icon?: string;
  ariaLabel?: string;
}

export interface RoleEntry {
  title: string;
  organization: string;
  description: string;
  url?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectEntry {
  title: string;
  summary: string;
  tags?: string[];
  links: ProjectLink[];
  featured?: boolean;
}

export interface ResearchEntry {
  title: string;
  context: string;
  description?: string;
  url?: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  location?: string;
  profileImage: string;
  profileImageAlt: string;
  email: string;
}

export interface ContactInfo {
  heading: string;
  description: string;
  email: string;
  links: SocialLink[];
}

export interface ThemeConfig {
  defaultMode: "light" | "dark" | "system";
  accentColor?: string;
  maxWidth: string;
  heroAlignment: "center" | "left";
}

export interface LayoutConfig {
  showTags: boolean;
  openLinksInNewTab: boolean;
  sections: {
    currentWork: boolean;
    projects: boolean;
    research: boolean;
    contact: boolean;
    writing?: boolean;
    press?: boolean;
    notes?: boolean;
    cv?: boolean;
  };
}

export interface OptionalSection {
  enabled: boolean;
  title: string;
  items?: { label: string; url?: string; description?: string }[];
  cvUrl?: string;
}

export interface SiteConfig {
  personal: PersonalInfo;
  socialLinks: SocialLink[];
  currentWork: RoleEntry[];
  projects: ProjectEntry[];
  research: {
    items: ResearchEntry[];
    scholarUrl?: string;
  };
  contact: ContactInfo;
  theme: ThemeConfig;
  layout: LayoutConfig;
  seo: {
    title: string;
    description: string;
    ogImage?: string;
    url?: string;
  };
  optional?: {
    writing?: OptionalSection;
    press?: OptionalSection;
    notes?: OptionalSection;
    cv?: OptionalSection;
  };
}
