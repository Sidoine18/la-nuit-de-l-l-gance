import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { type Edition, NEXT_EDITION_NUMBER, ordinal, pad } from "@/content/editions";

export function EditionCard({ edition }: { edition: Edition }) {
  const poster = edition.posters[0];
  const upcoming = edition.number === NEXT_EDITION_NUMBER;
  return (
    <Link to="/editions/$slug" params={{ slug: edition.slug }} className="group relative block overflow-hidden border border-border bg-card">
      <div className="relative aspect-[4/5] overflow-hidden">
        {poster && <img src={poster.src} alt={poster.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-lux)] group-hover:scale-105" />}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <span className="absolute right-4 top-4 font-numeral text-6xl leading-none text-ivory/15 md:text-7xl">{pad(edition.number)}</span>
        {upcoming && <span className="absolute left-4 top-4 bg-velvet px-3 py-1 font-numeral text-[0.6rem] uppercase tracking-[0.3em] text-ivory">À venir</span>}
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <p className="eyebrow text-[0.6rem]">{ordinal(edition.number)} édition{edition.year ? ` · ${edition.year}` : ""}</p>
        <p className="mt-2 font-display text-2xl leading-tight text-ivory">{edition.theme ?? edition.tagline ?? `Édition ${pad(edition.number)}`}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-gold">
          Découvrir <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
