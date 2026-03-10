"use client";

import { useEffect, useState } from "react";

interface EmailLinkProps {
  user: string;
  domain: string;
  label: string;
  ariaLabel?: string;
  className?: string;
}

export function EmailLink({ user, domain, label, ariaLabel, className }: EmailLinkProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span className={className} aria-hidden="true">
        {label}
      </span>
    );
  }

  const addr = `${user}@${domain}`;

  return (
    <a
      href={`mailto:${addr}`}
      aria-label={ariaLabel || `Email ${addr}`}
      className={className}
    >
      {label}
    </a>
  );
}
