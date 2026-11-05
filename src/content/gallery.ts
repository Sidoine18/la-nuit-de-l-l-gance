/**
 * La galerie est construite AUTOMATIQUEMENT à partir des éditions
 * (src/content/editions.ts) : affiches, photos et vidéos.
 * Vous n'avez donc rien à modifier ici pour ajouter des photos :
 * ajoutez-les dans l'édition concernée. Voir GUIDE_GESTION_GALERIE.md.
 */
import { sortedEditions, type Photo } from "./editions";
import { youtubeId } from "@/lib/seo";

export type MediaItem = {
  id: string;
  kind: "photo" | "affiche" | "video";
  src: string; // image (ou miniature YouTube)
  alt: string;
  edition: number;
  category?: Photo["category"];
  youtubeId?: string;
};

export const categoryLabels: Record<NonNullable<Photo["category"]>, string> = {
  defile: "Défilés",
  ceremonie: "Cérémonies",
  invites: "Invités & personnalités",
  coulisses: "Coulisses",
  scene: "Passages sur scène",
  ambiance: "Moments forts",
};

export const mediaItems: MediaItem[] = sortedEditions.flatMap((e) => [
  ...e.posters.map((p, i) => ({ id: `${e.slug}-affiche-${i}`, kind: "affiche" as const, src: p.src, alt: p.alt, edition: e.number })),
  ...e.photos.map((p, i) => ({ id: `${e.slug}-photo-${i}`, kind: "photo" as const, src: p.src, alt: p.alt, edition: e.number, category: p.category })),
  ...e.videos.flatMap((v, i) => {
    const id = youtubeId(v.youtubeUrl);
    return id
      ? [{ id: `${e.slug}-video-${i}`, kind: "video" as const, src: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`, alt: v.title, edition: e.number, youtubeId: id }]
      : [];
  }),
]);
