import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
export const metadata: Metadata = { title: "À propos", description: "Découvrez La Nuit de l'Élégance, gala de prestige organisé par mcEvents au Bénin." };
export default function Page() {
  return (<Section title="À propos" intro="La Nuit de l'Élégance est un gala célébrant l'élégance, le raffinement, la culture et le prestige, organisé au Bénin.">
    <h2 className="font-serif text-2xl text-gold">Histoire</h2>
    <p>La première édition, un gala du Nouvel An, a été annoncée à Dassa en 2020. Six éditions ont été annoncées depuis. [À COMPLÉTER : récit détaillé fourni par mcEvents]</p>
    <h2 className="font-serif text-2xl text-gold">Vision et valeurs</h2>
    <p>[À COMPLÉTER : vision, valeurs et objectifs officiels]</p>
    <p><Link className="text-gold underline" href="/a-propos/organisateur">Découvrir l&apos;organisateur</Link></p>
  </Section>);
}
