import { SocialLink } from "@/lib/types";
import { EmailLink } from "./EmailLink";
import React from "react";

interface SocialLinksProps {
  links: SocialLink[];
  openInNewTab: boolean;
  email?: string;
}

const linkClass =
  "font-mono text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-150 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500";

const separatorClass = "font-mono text-xs text-neutral-300 dark:text-neutral-600 select-none";

export function SocialLinks({ links, openInNewTab, email }: SocialLinksProps) {
  if (links.length === 0 && !email) return null;

  const linkProps = openInNewTab
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  const [emailUser, emailDomain] = email?.split("@") ?? [];

  const items: React.ReactNode[] = links.map((link) => (
    <a
      key={link.label}
      href={link.url}
      aria-label={link.ariaLabel || link.label}
      className={linkClass}
      {...linkProps}
    >
      {link.label}
    </a>
  ));

  if (emailUser && emailDomain) {
    items.push(
      <EmailLink
        key="email"
        user={emailUser}
        domain={emailDomain}
        label="Email"
        ariaLabel="Send email"
        className={linkClass}
      />
    );
  }

  return (
    <nav aria-label="Social links" className="flex flex-wrap items-center gap-y-1.5 gap-x-1">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span aria-hidden="true" className={separatorClass}>·</span>}
          {item}
        </React.Fragment>
      ))}
    </nav>
  );
}
