import { OptionalSection as OptionalSectionType, LayoutConfig } from "@/lib/types";
import { Section } from "./Section";

interface OptionalSectionProps {
  id: string;
  section: OptionalSectionType;
  layout: LayoutConfig;
}

export function OptionalSectionBlock({ id, section, layout }: OptionalSectionProps) {
  if (!section.enabled) return null;

  const linkProps = layout.openLinksInNewTab
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  if (section.cvUrl) {
    return (
      <Section id={id} title={section.title}>
        <a
          href={section.cvUrl}
          className="font-mono text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-150 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
          {...linkProps}
        >
          Download CV ↗
        </a>
      </Section>
    );
  }

  if (!section.items || section.items.length === 0) return null;

  return (
    <Section id={id} title={section.title}>
      <ul className="space-y-3">
        {section.items.map((item) => (
          <li key={item.label} className="space-y-0.5">
            {item.url ? (
              <a
                href={item.url}
                className="text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
                {...linkProps}
              >
                {item.label}
              </a>
            ) : (
              <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                {item.label}
              </span>
            )}
            {item.description && (
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {item.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
