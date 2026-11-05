import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHeader, Pending, Reveal, luxButton } from "@/components/lux/primitives";
import { MediaGrid } from "@/components/lux/Media";
import { getEdition, NEXT_EDITION_NUMBER, ordinal, pad, sortedEditions } from "@/content/editions";
import { mediaItems } from "@/content/gallery";
import { partners } from "@/content/partners";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/editions/$slug")({
  loader: ({ params }) => {
    const edition = getEdition(params.slug);
    if (!edition) throw notFound();
    return { slug: edition.slug };
  },
  head: ({ params }) => {
    const e = getEdition(params.slug);
    if (!e) return { meta: [{ title: "Édition introuvable" }, { name: "robots", content: "noindex" }] };
    return seo({ title: `${ordinal(e.number)} édition`, description: `${ordinal(e.number)} édition de La Nuit de l'Élégance${e.year ? ` (${e.year})` : ""} : ${e.tagline ?? e.summary[0]}`, path: `/editions/${e.slug}`, image: e.posters[0]?.src });
  },
  component: EditionPage,
  notFoundComponent: () => (
    <main id="contenu"><PageHeader eyebrow="Archives" title="Édition introuvable"><Link to="/editions" className={luxButton({ variant: "outline" }) + " mt-8"}>Voir toutes les éditions</Link></PageHeader></main>
  ),
  errorComponent: () => <main className="container-lux py-40 text-center text-ivory">Impossible d'afficher cette édition.</main>,
});

function Info({ k, v }: { k: string; v: string | number | null }) {
  return <div><dt className="eyebrow text-[0.6rem]">{k}</dt><dd className="mt-1 font-display text-xl text-ivory">{v ?? "À confirmer"}</dd></div>;
}

function EditionPage() {
  const { slug } = Route.useLoaderData();
  const e = getEdition(slug)!;
  const idx = sortedEditions.findIndex((x) => x.slug === slug);
  const prev = sortedEditions[idx - 1];
  const next = sortedEditions[idx + 1];
  const media = mediaItems.filter((m) => m.edition === e.number);
  const eps = partners.filter((p) => e.partnerIds.includes(p.id));
  return (
    <main id="contenu">
      <PageHeader eyebrow={`${ordinal(e.number)} édition${e.number === NEXT_EDITION_NUMBER ? " · À venir" : ""}`} title={e.theme ?? e.tagline ?? `Édition ${pad(e.number)}`} intro={e.theme ? e.tagline : undefined} />
      <section className="container-lux grid gap-14 py-20 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>{e.posters[0] && <img src={e.posters[0].src} alt={e.posters[0].alt} className="w-full border border-gold/30" />}</Reveal>
        <div>
          <dl className="grid grid-cols-2 gap-6 border-b border-border pb-8">
            <Info k="Année" v={e.year} /><Info k="Date" v={e.date} /><Info k="Lieu" v={e.venue} /><Info k="Ville" v={e.city} />
          </dl>
          <div className="mt-8 space-y-4 text-muted-foreground md:text-lg">{e.summary.map((p) => <p key={p}>{p}</p>)}</div>
          {e.note && <p className="mt-6 border-l-2 border-velvet bg-velvet/10 p-4 text-sm text-ivory/80">{e.note}</p>}
          {e.highlights.length > 0 && <ul className="mt-8 list-disc space-y-2 pl-5 text-muted-foreground">{e.highlights.map((h) => <li key={h}>{h}</li>)}</ul>}
          {e.honorees.length > 0 && (
            <div className="mt-10"><p className="eyebrow mb-4">Personnalités distinguées</p>
              <ul className="space-y-2">{e.honorees.map((h) => <li key={h.name} className="text-ivory">{h.name}{h.distinction && <span className="text-muted-foreground"> — {h.distinction}</span>}</li>)}</ul></div>
          )}
          {eps.length > 0 && <div className="mt-10"><p className="eyebrow mb-4">Partenaires</p><p className="text-ivory">{eps.map((p) => p.name).join(" · ")}</p></div>}
          {e.recap && <p className="mt-8 text-muted-foreground">{e.recap}</p>}
          {e.number === NEXT_EDITION_NUMBER && <Link to="/reservation" className={luxButton({ variant: "gold" }) + " mt-10"}>Réserver</Link>}
        </div>
      </section>
      <section className="container-lux pb-20">
        <p className="eyebrow mb-8">Galerie de l'édition</p>
        {media.length ? <MediaGrid items={media} /> : <Pending>Les photos et vidéos de cette édition seront publiées prochainement.</Pending>}
      </section>
      <nav aria-label="Autres éditions" className="container-lux flex justify-between gap-4 border-t border-border py-10">
        {prev ? <Link to="/editions/$slug" params={{ slug: prev.slug }} className={luxButton({ variant: "ghost" })}><ArrowLeft size={14} /> Édition {pad(prev.number)}</Link> : <span />}
        {next && <Link to="/editions/$slug" params={{ slug: next.slug }} className={luxButton({ variant: "ghost" })}>Édition {pad(next.number)} <ArrowRight size={14} /></Link>}
      </nav>
    </main>
  );
}
