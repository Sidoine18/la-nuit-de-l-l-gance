import { cva, type VariantProps } from "class-variance-authority";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const luxButton = cva(
  "group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden px-7 text-[0.72rem] font-semibold uppercase tracking-[0.25em] transition-all duration-500 ease-[var(--ease-lux)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        gold: "bg-gold-gradient text-primary-foreground hover:glow-gold hover:-translate-y-0.5",
        outline: "border border-gold/50 text-ivory hover:border-gold hover:bg-gold/10",
        ghost: "text-gold hover:text-ivory px-0 min-h-0",
        velvet: "bg-velvet text-ivory hover:brightness-110",
      },
    },
    defaultVariants: { variant: "gold" },
  },
);
export type LuxButtonVariant = VariantProps<typeof luxButton>["variant"];

export function Reveal({ children, className, delay = 0, y = 28 }: { children: ReactNode; className?: string; delay?: number; y?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, intro, align = "left", as = "h2" }: { eyebrow?: string; title: ReactNode; intro?: ReactNode; align?: "left" | "center"; as?: "h1" | "h2" }) {
  const H = as;
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <H className="text-4xl leading-[1.05] text-ivory sm:text-5xl md:text-6xl">{title}</H>
      {intro && <div className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</div>}
    </Reveal>
  );
}

export function PageHeader({ eyebrow, title, intro, children }: { eyebrow: string; title: ReactNode; intro?: ReactNode; children?: ReactNode }) {
  return (
    <header className="grain relative overflow-hidden border-b border-border pb-16 pt-36 md:pb-24 md:pt-44">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
      <div className="container-lux relative">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} intro={intro} />
        {children}
      </div>
    </header>
  );
}

/** Encadré élégant pour une information non encore disponible. */
export function Pending({ label = "Bientôt disponible", children }: { label?: string; children?: ReactNode }) {
  return (
    <div className="border border-dashed border-gold/30 px-6 py-8 text-center">
      <p className="font-numeral text-xs uppercase tracking-[0.35em] text-gold">{label}</p>
      {children && <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">{children}</p>}
    </div>
  );
}

export function Ornament({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("flex items-center gap-4", className)}>
      <span className="hairline flex-1" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <span className="hairline flex-1" />
    </div>
  );
}
