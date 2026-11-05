import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Pending } from "@/components/lux/primitives";
import { YouTubeEmbed } from "@/components/lux/Media";
import { mediaItems } from "@/content/gallery";
import { social } from "@/config/site";
import { seo } from "@/lib/seo";

const videos = mediaItems.filter((m) => m.kind === "video" && m.youtubeId);

export const Route = createFileRoute("/galerie/videos")({
  head: () => seo({ title: "Vidéos", description: "Vidéos des éditions de La Nuit de l'Élégance : défilés, cérémonies et moments forts.", path: "/galerie/videos" }),
  component: () => (
    <main id="contenu">
      <PageHeader eyebrow="Galerie" title={<>Les <span className="italic text-gold">vidéos</span></>} intro="Revivez les moments forts de La Nuit de l'Élégance." />
      <section className="container-lux py-20">
        {videos.length ? (
          <div className="grid gap-8 md:grid-cols-2">
            {videos.map((v) => (
              <div key={v.id}>
                <YouTubeEmbed id={v.youtubeId!} title={v.alt} />
                <p className="mt-3 text-sm text-ivory">{v.alt} <span className="text-muted-foreground">— Édition {v.edition}</span></p>
              </div>
            ))}
          </div>
        ) : (
          <Pending>
            Les vidéos seront publiées prochainement.{social.facebook && <> En attendant, suivez-nous sur <a className="text-gold" href={social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>.</>}
          </Pending>
        )}
      </section>
    </main>
  ),
});
