import { site } from "@/config/site";

/** Construit les balises SEO d'une page. image = chemin dans /public, ex "/images/og/partage.jpg". */
export function seo(opts: { title: string; description: string; path: string; image?: string | undefined; type?: string | undefined }) {
  const fullTitle = opts.path === "/" ? opts.title : `${opts.title} — ${site.name}`;
  const url = site.url ? `${site.url}${opts.path}` : opts.path;
  const img = opts.image ?? "/images/og/partage.jpg";
  const meta: Array<Record<string, string>> = [
    { title: fullTitle },
    { name: "description", content: opts.description },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: opts.description },
    { property: "og:type", content: opts.type ?? "website" },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: opts.description },
  ];
  // Les images de partage exigent une adresse absolue : ajoutées dès que site.url est renseigné.
  if (site.url) {
    meta.push({ property: "og:image", content: `${site.url}${img}` }, { name: "twitter:image", content: `${site.url}${img}` });
  }
  return { meta, links: [{ rel: "canonical", href: url }] };
}

export function youtubeId(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  return m?.[1] ?? null;
}
