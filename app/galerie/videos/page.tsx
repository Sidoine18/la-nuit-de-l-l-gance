import type { Metadata } from "next";
import Section from "@/components/Section";
import Gallery from "@/components/Gallery";
import { gallery } from "@/data/gallery";
export const metadata: Metadata = { title: "Galerie : Vidéos", description: "Vidéos des éditions de La Nuit de l'Élégance." };
export default function Page() {
  return (<div><Section title="Galerie : Vidéos" /><div className="mx-auto max-w-6xl px-5"><Gallery items={gallery.filter(m => m.type === "video")} filterType={false} /></div></div>);
}
