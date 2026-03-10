import { RoleEntry, LayoutConfig } from "@/lib/types";

interface CurrentWorkListProps {
  roles: RoleEntry[];
  layout: LayoutConfig;
}

export function CurrentWorkList({ roles, layout }: CurrentWorkListProps) {
  if (roles.length === 0) return null;

  const linkProps = layout.openLinksInNewTab
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <ul className="space-y-5">
      {roles.map((role) => (
        <li key={`${role.title}-${role.organization}`} className="space-y-1">
          <div>
            <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {role.title}
            </span>
            <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
              {" · "}
            </span>
            {role.url ? (
              <a
                href={role.url}
                className="font-mono text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-150 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
                {...linkProps}
              >
                {role.organization}
              </a>
            ) : (
              <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                {role.organization}
              </span>
            )}
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {role.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
