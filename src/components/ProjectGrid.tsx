import { ProjectEntry, LayoutConfig } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: ProjectEntry[];
  layout: LayoutConfig;
}

export function ProjectGrid({ projects, layout }: ProjectGridProps) {
  if (projects.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, i) => (
        <div key={project.title} className={i === 0 ? "md:col-span-2" : ""}>
          <ProjectCard project={project} layout={layout} />
        </div>
      ))}
    </div>
  );
}
