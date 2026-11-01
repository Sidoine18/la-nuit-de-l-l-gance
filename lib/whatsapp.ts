import { site } from "@/data/site";
export function whatsappUrl(lines: string[]) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}
