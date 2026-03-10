interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="py-8 md:py-10">
      <h2
        id={`${id}-heading`}
        className="font-mono text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
