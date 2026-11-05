import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { MediaItem } from "@/content/gallery";
import { cn } from "@/lib/utils";
import { Pending } from "./primitives";

export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden border border-border bg-ink">
      <iframe className="absolute inset-0 h-full w-full" src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`} title={title} loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen />
    </div>
  );
}

export function Lightbox({ items, index, onClose, onIndex }: { items: MediaItem[]; index: number | null; onClose: () => void; onIndex: (i: number) => void }) {
  const go = useCallback((d: number) => index !== null && onIndex((index + d + items.length) % items.length), [index, items.length, onIndex]);
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, go, onClose]);
  const item = index !== null ? items[index] : null;
  return (
    <AnimatePresence>
      {item && (
        <motion.div role="dialog" aria-modal="true" aria-label={item.alt} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] flex flex-col bg-ink/95 backdrop-blur-md" onClick={onClose}>
          <div className="flex items-center justify-between p-4 text-xs text-muted-foreground" onClick={(e) => e.stopPropagation()}>
            <span className="font-numeral tracking-[0.3em] text-gold">{(index ?? 0) + 1} / {items.length}</span>
            <button autoFocus onClick={onClose} aria-label="Fermer" className="grid h-11 w-11 place-items-center border border-gold/40 text-gold"><X size={20} /></button>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4 md:px-20" onClick={(e) => e.stopPropagation()}>
            <motion.div key={item.id} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="flex h-full w-full items-center justify-center">
              {item.kind === "video" && item.youtubeId ? (
                <div className="w-full max-w-5xl"><YouTubeEmbed id={item.youtubeId} title={item.alt} /></div>
              ) : (
                <img src={item.src} alt={item.alt} className="max-h-full max-w-full object-contain" />
              )}
            </motion.div>
            {items.length > 1 && (
              <>
                <button onClick={() => go(-1)} aria-label="Média précédent" className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center bg-background/70 text-gold md:left-6"><ChevronLeft /></button>
                <button onClick={() => go(1)} aria-label="Média suivant" className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center bg-background/70 text-gold md:right-6"><ChevronRight /></button>
              </>
            )}
          </div>
          <p className="px-4 pb-6 text-center text-sm text-muted-foreground" onClick={(e) => e.stopPropagation()}>{item.alt}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function MediaGrid({ items }: { items: MediaItem[] }) {
  const [index, setIndex] = useState<number | null>(null);
  if (items.length === 0) return <Pending>Les médias de cette sélection seront publiés prochainement.</Pending>;
  return (
    <>
      <ul className="columns-2 gap-3 md:columns-3 md:gap-5 xl:columns-4">
        {items.map((m, i) => (
          <li key={m.id} className="mb-3 break-inside-avoid md:mb-5">
            <button onClick={() => setIndex(i)} className="group relative block w-full overflow-hidden border border-border bg-card text-left" aria-label={`Agrandir : ${m.alt}`}>
              <img src={m.src} alt={m.alt} loading="lazy" decoding="async" className="w-full transition-transform duration-[1.2s] ease-[var(--ease-lux)] group-hover:scale-105" />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              {m.kind === "video" && <span className="absolute inset-0 grid place-items-center"><span className="grid h-14 w-14 place-items-center rounded-full bg-gold text-primary-foreground"><Play size={20} /></span></span>}
              <span className="absolute bottom-3 left-3 font-numeral text-[0.6rem] uppercase tracking-[0.3em] text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Édition {String(m.edition).padStart(2, "0")} · {m.kind === "affiche" ? "Affiche" : m.kind === "video" ? "Vidéo" : "Photo"}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <Lightbox items={items} index={index} onClose={() => setIndex(null)} onIndex={setIndex} />
    </>
  );
}

export function FilterableGallery({ items, kinds = ["affiche", "photo", "video"] }: { items: MediaItem[]; kinds?: MediaItem["kind"][] }) {
  const [edition, setEdition] = useState<number | "all">("all");
  const [kind, setKind] = useState<MediaItem["kind"] | "all">("all");
  const editionsAvail = useMemo(() => [...new Set(items.map((i) => i.edition))].sort((a, b) => a - b), [items]);
  const filtered = items.filter((i) => (edition === "all" || i.edition === edition) && (kind === "all" || i.kind === kind));
  const kindLabels = { affiche: "Affiches", photo: "Photos", video: "Vidéos" } as const;
  return (
    <div>
      <div className="mb-10 flex flex-col gap-4">
        <FilterRow label="Édition">
          <Chip active={edition === "all"} onClick={() => setEdition("all")}>Toutes</Chip>
          {editionsAvail.map((n) => <Chip key={n} active={edition === n} onClick={() => setEdition(n)}>{String(n).padStart(2, "0")}</Chip>)}
        </FilterRow>
        {kinds.length > 1 && (
          <FilterRow label="Type">
            <Chip active={kind === "all"} onClick={() => setKind("all")}>Tous</Chip>
            {kinds.map((k) => <Chip key={k} active={kind === k} onClick={() => setKind(k)}>{kindLabels[k]}</Chip>)}
          </FilterRow>
        )}
      </div>
      <MediaGrid key={`${edition}-${kind}`} items={filtered} />
    </div>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div role="group" aria-label={`Filtrer par ${label.toLowerCase()}`} className="flex flex-wrap items-center gap-2">
      <span className="eyebrow mr-2 w-16 text-[0.6rem]">{label}</span>
      {children}
    </div>
  );
}
function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} aria-pressed={active} className={cn("min-h-10 border px-4 font-numeral text-[0.65rem] uppercase tracking-[0.25em] transition-colors", active ? "border-gold bg-gold text-primary-foreground" : "border-border text-muted-foreground hover:border-gold/60 hover:text-ivory")}>
      {children}
    </button>
  );
}
