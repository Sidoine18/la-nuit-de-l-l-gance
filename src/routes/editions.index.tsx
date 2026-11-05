import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Reveal } from "@/components/lux/primitives";
import { EditionCard } from "@/components/lux/EditionCard";
import { sortedEditions } from "@/content/editions";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/editions/")({
  head: () => seo({ title: "Toutes les éditions", description: "Archives de La Nuit de l'Élégance : affiches, thèmes et souvenirs de chaque édition depuis 2020.", path: "/editions" }),
  component: () => (
    <main id="contenu">
      <PageHeader eyebrow="Archives" title={<>Les <span className="italic text-gold">éditions</span></>} intro="Depuis 2020, chaque édition écrit un nouveau chapitre de la mémoire de l'événement." />
      <section className="container-lux grid gap-5 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {sortedEditions.map((e, i) => <Reveal key={e.slug} delay={i * 0.05}><EditionCard edition={e} /></Reveal>)}
      </section>
    </main>
  ),
});
