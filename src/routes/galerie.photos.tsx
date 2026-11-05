import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Pending } from "@/components/lux/primitives";
import { FilterableGallery } from "@/components/lux/Media";
import { mediaItems } from "@/content/gallery";
import { seo } from "@/lib/seo";

const items = mediaItems.filter((m) => m.kind !== "video");

export const Route = createFileRoute("/galerie/photos")({
  head: () => seo({ title: "Photos", description: "Photos et affiches officielles des éditions de La Nuit de l'Élégance, gala de prestige au Bénin.", path: "/galerie/photos" }),
  component: () => (
    <main id="contenu">
      <PageHeader eyebrow="Galerie" title={<>Les <span className="italic text-gold">photos</span></>} intro="Affiches officielles et images des soirées." />
      <section className="container-lux py-20">
        {items.length ? <FilterableGallery items={items} kinds={["affiche", "photo"]} /> : <Pending>Les photos seront publiées prochainement.</Pending>}
      </section>
    </main>
  ),
});
