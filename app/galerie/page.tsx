import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Gallery from "@/components/Gallery";
import { gallery } from "@/data/gallery";
export const metadata: Metadata = { title: "Galerie", description: "Affiches, photos et vidéos des éditions de La Nuit de l'Élégance." };
export default function Page() {
  return (<div><Section title="Galerie" intro="Affiches, photos et vidéos des éditions."><p><Link className="text-gold underline" href="/galerie/photos">Photos</Link> · <Link className="text-gold underline" href="/galerie/videos">Vidéos</Link></p></Section><div className="mx-auto max-w-6xl px-5"><Gallery items={gallery} /></div></div>);
}
