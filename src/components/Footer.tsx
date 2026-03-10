import { PersonalInfo } from "@/lib/types";

interface FooterProps {
  personal: PersonalInfo;
}

export function Footer({ personal }: FooterProps) {
  return (
    <footer className="py-10 md:py-14 border-t border-neutral-200 dark:border-neutral-800">
      <p className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
        © {new Date().getFullYear()} {personal.name}
      </p>
    </footer>
  );
}
