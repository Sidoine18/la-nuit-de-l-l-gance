"use client";
import { useState } from "react";
import Image from "next/image";
import type { Media } from "@/data/gallery";
export default function Gallery({ items, filterType = true }: { items: Media[]; filterType?: boolean }) {
  const [ed, setEd] = useState(0);
  const [type, setType] = useState("");
  const [open, setOpen] = useState<number | null>(null);
  const list = items.filter(m => (!ed || m.edition === ed) && (!type || m.type === type));
  const eds = Array.from(new Set(items.map(m => m.edition))).sort();
  const sel = "rounded border border-gold/40 bg-black px-3 py-2 text-sm";
  const cur = open !== null ? list[open] : null;
  const step = (d: number) => setOpen(o => (o === null ? null : (o + d + list.length) % list.length));
  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <select aria-label="Filtrer par édition" className={sel} value={ed} onChange={e => setEd(+e.target.value)}><option value={0}>Toutes les éditions</option>{eds.map(n => <option key={n} value={n}>Édition {n}</option>)}</select>
        {filterType && <select aria-label="Filtrer par type" className={sel} value={type} onChange={e => setType(e.target.value)}><option value="">Tous les médias</option><option value="affiche">Affiches</option><option value="photo">Photos</option><option value="video">Vidéos</option></select>}
      </div>
      {!list.length && <p className="mt-8 text-ivory/70">Aucun média disponible pour le moment.</p>}
      <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
        {list.map((m, i) => (
          <li key={m.id}><button onClick={() => setOpen(i)} className="block w-full text-left" aria-label={`Ouvrir : ${m.alt}`}>
            {m.src ? <Image src={m.src} alt={m.alt} width={400} height={480} loading="lazy" className="aspect-[5/6] w-full rounded object-cover" /> : <span className="flex aspect-[5/6] items-center justify-center rounded border border-gold/30 text-gold">▶ Vidéo</span>}
            <span className="mt-1 block text-xs text-ivory/70">Édition {m.edition}</span></button></li>
        ))}
      </ul>
      {cur && (
        <div role="dialog" aria-modal="true" aria-label={cur.alt} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4" onKeyDown={e => { if (e.key === "Escape") setOpen(null); if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); }}>
          <button autoFocus onClick={() => setOpen(null)} className="absolute right-4 top-4 px-3 py-2 text-2xl text-gold" aria-label="Fermer">✕</button>
          <button onClick={() => step(-1)} className="absolute left-2 px-3 py-6 text-3xl text-gold" aria-label="Précédent">‹</button>
          {cur.src ? <Image src={cur.src} alt={cur.alt} width={900} height={1100} className="max-h-[85vh] w-auto object-contain" /> : <iframe src={cur.embed} title={cur.alt} className="aspect-video w-full max-w-3xl" allowFullScreen />}
          <button onClick={() => step(1)} className="absolute right-2 px-3 py-6 text-3xl text-gold" aria-label="Suivant">›</button>
        </div>
      )}
    </div>
  );
}
