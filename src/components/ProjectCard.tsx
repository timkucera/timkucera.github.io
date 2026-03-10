import { ProjectEntry, LayoutConfig } from "@/lib/types";

interface ProjectCardProps {
  project: ProjectEntry;
  layout: LayoutConfig;
}

export function ProjectCard({ project, layout }: ProjectCardProps) {
  const linkProps = layout.openLinksInNewTab
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <article
      className={`group h-full rounded-lg border p-5 transition-colors duration-150 ${
        project.featured
          ? "border-neutral-300 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-800/30"
          : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
      }`}
    >
      <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1.5">
        {project.title}
      </h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
        {project.summary}
      </p>

      {layout.showTags && project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {project.links.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="font-mono text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-150 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
              {...linkProps}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
