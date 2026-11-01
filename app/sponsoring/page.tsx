import type { Metadata } from "next";
import Section from "@/components/Section";
import Web3Form from "@/components/Web3Form";
export const metadata: Metadata = { title: "Sponsoring", description: "Soutenez La Nuit de l'Élégance en devenant sponsor." };
export default function Page() {
  return (<Section title="Sponsoring" intro="Soutenez La Nuit de l'Élégance en devenant sponsor.">
    <Web3Form subject="Sponsoring - La Nuit de l'Élégance" fields={[{ name: "nom", label: "Nom / organisation", required: true }, { name: "email", label: "Adresse e-mail", type: "email", required: true }, { name: "telephone", label: "Téléphone", type: "tel" }, { name: "message", label: "Votre message", type: "textarea", required: true }]} />
  </Section>);
}
