import { site } from "@/data/site";
import { editions } from "@/data/editions";
export default function sitemap() {
  const pages = ["", "/a-propos", "/a-propos/organisateur", "/prochaine-edition", "/editions", "/galerie", "/galerie/photos", "/galerie/videos", "/partenaires", "/devenir-partenaire", "/reservation", "/contact", "/partenariat", "/sponsoring", "/demande-information", "/politique-de-confidentialite", "/mentions-legales", "/conditions-de-reservation", ...editions.map(e => `/editions/${e.slug}`)];
  return pages.map(p => ({ url: `${site.url}${p}`, lastModified: new Date() }));
}
