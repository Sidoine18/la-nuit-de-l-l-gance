import type { Metadata } from "next";
import Section from "@/components/Section";
import Web3Form from "@/components/Web3Form";
export const metadata: Metadata = { title: "Demande d'information", description: "Posez-nous vos questions sur La Nuit de l'Élégance." };
export default function Page() {
  return (<Section title="Demande d'information" intro="Posez-nous vos questions sur La Nuit de l'Élégance.">
    <Web3Form subject="Demande d'information - La Nuit de l'Élégance" fields={[{ name: "nom", label: "Nom / organisation", required: true }, { name: "email", label: "Adresse e-mail", type: "email", required: true }, { name: "telephone", label: "Téléphone", type: "tel" }, { name: "message", label: "Votre message", type: "textarea", required: true }]} />
  </Section>);
}
