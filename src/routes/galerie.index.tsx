import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, luxButton } from "@/components/lux/primitives";
import { FilterableGallery } from "@/components/lux/Media";
import { mediaItems } from "@/content/gallery";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/galerie/")({
  head: () => seo({ title: "Galerie", description: "Affiches, photos et vidéos de toutes les éditions de La Nuit de l'Élégance, organisée par mcEvents au Bénin.", path: "/galerie" }),
  component: () => (
    <main id="contenu">
      <PageHeader eyebrow="Galerie" title={<>La mémoire <span className="italic text-gold">en images</span></>} intro="Affiches officielles, photos et vidéos des éditions de La Nuit de l'Élégance.">
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/galerie/photos" className={luxButton({ variant: "outline" })}>Photos</Link>
          <Link to="/galerie/videos" className={luxButton({ variant: "outline" })}>Vidéos</Link>
        </div>
      </PageHeader>
      <section className="container-lux py-20"><FilterableGallery items={mediaItems} /></section>
    </main>
  ),
});
