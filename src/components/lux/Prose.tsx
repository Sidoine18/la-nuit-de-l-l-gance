import type { ReactNode } from "react";

/** Sections de texte légal / informatif. */
export function ProseSections({ sections }: { sections: { title: string; body: ReactNode }[] }) {
  return (
    <section className="container-lux max-w-3xl space-y-12 py-20">
      {sections.map((s, i) => (
        <div key={s.title}>
          <p className="font-numeral text-xs tracking-[0.35em] text-gold">{String(i + 1).padStart(2, "0")}</p>
          <h2 className="mt-2 text-3xl text-ivory">{s.title}</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">{s.body}</div>
        </div>
      ))}
    </section>
  );
}
