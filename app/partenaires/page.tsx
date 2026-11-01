import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import { partners } from "@/data/partners";
export const metadata: Metadata = { title: "Partenaires et sponsors", description: "Les partenaires et sponsors de La Nuit de l'Élégance." };
export default function Page() {
  return (<Section title="Partenaires et sponsors">
    {!partners.length && <p>La liste des partenaires sera annoncée prochainement.</p>}
    <ul className="grid grid-cols-2 gap-6 md:grid-cols-3">{partners.map(p => (
      <li key={p.name} className="text-center">
        {p.logo && <Image src={p.logo} alt={`Logo ${p.name}`} width={200} height={120} className="mx-auto h-24 w-auto object-contain" />}
        <p className="mt-2 text-ivory">{p.url ? <a href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a> : p.name}</p>
        <p className="text-xs text-gold">{p.category}</p>
      </li>))}</ul>
    <p><Link className="text-gold underline" href="/devenir-partenaire">Devenir partenaire</Link></p>
  </Section>);
}
