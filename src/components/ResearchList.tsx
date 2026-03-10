import { ResearchEntry, LayoutConfig } from "@/lib/types";

interface ResearchListProps {
  items: ResearchEntry[];
  scholarUrl?: string;
  layout: LayoutConfig;
}

export function ResearchList({ items, scholarUrl, layout }: ResearchListProps) {
  if (items.length === 0) return null;

  const linkProps = layout.openLinksInNewTab
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <div className="space-y-5">
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.title} className="space-y-0.5">
            <div className="flex flex-wrap items-baseline gap-x-2">
              {item.url ? (
                <a
                  href={item.url}
                  className="text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
                  {...linkProps}
                >
                  {item.title}
                </a>
              ) : (
                <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  {item.title}
                </span>
              )}
            </div>
            <p className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
              {item.context}
            </p>
            {item.description && (
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            )}
          </li>
        ))}
      </ul>

      {scholarUrl && (
        <a
          href={scholarUrl}
          className="inline-block font-mono text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-150 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
          {...linkProps}
        >
          View all publications →
        </a>
      )}
    </div>
  );
}
