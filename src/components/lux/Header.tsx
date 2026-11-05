import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { mainNav, site } from "@/config/site";
import { cn } from "@/lib/utils";
import { luxButton } from "./primitives";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:text-primary-foreground">
        Aller au contenu
      </a>
      <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled || open ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent")}>
        <div className="container-lux flex h-20 items-center justify-between gap-6">
          <Link to="/" className="flex min-w-0 shrink-0 flex-col leading-none" aria-label={`${site.name} — accueil`}>
            <span className="font-display text-xl italic text-ivory md:text-2xl">La Nuit</span>
            <span className="font-numeral text-[0.6rem] tracking-[0.4em] text-gold">DE L'ÉLÉGANCE</span>
          </Link>
          <nav aria-label="Navigation principale" className="hidden items-center gap-7 lg:flex">
            {mainNav.map((l) => (
              <Link key={l.to} to={l.to} activeOptions={{ exact: l.to === "/" }} className="relative text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-ivory data-[status=active]:text-gold">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/reservation" className={cn(luxButton({ variant: "gold" }), "hidden min-h-10 px-5 sm:inline-flex")}>
              Réserver
            </Link>
            <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} className="grid h-11 w-11 place-items-center border border-gold/40 text-gold lg:hidden">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div id="menu-mobile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} className="grain fixed inset-0 z-40 overflow-y-auto bg-background pt-24 lg:hidden">
            <nav aria-label="Navigation mobile" className="container-lux flex flex-col">
              {[...mainNav, { label: "Réserver", to: "/reservation" as const }].map((l, i) => (
                <motion.div key={l.to} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i + 0.1, duration: 0.5 }}>
                  <Link to={l.to} activeOptions={{ exact: l.to === "/" }} className="flex items-baseline gap-4 border-b border-border py-4 font-display text-3xl text-ivory data-[status=active]:text-gold">
                    <span className="font-numeral text-xs text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
