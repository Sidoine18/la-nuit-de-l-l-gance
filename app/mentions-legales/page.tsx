import type { Metadata } from "next";
import Section from "@/components/Section";
export const metadata: Metadata = { title: "Mentions légales", description: "Mentions légales du site La Nuit de l'Élégance.", robots: { index: true } };
export default function Page() {
  return (<Section title="Mentions légales" intro="Document à compléter par l'organisation avant la mise en ligne définitive."><p>Éditeur : [À COMPLÉTER : identité juridique]. Adresse : [À COMPLÉTER]. Immatriculation : [À COMPLÉTER]. Hébergeur : [À COMPLÉTER]. Conception : KONFORTECH BÉNIN.</p></Section>);
}
