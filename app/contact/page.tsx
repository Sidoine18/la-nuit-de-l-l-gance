import type { Metadata } from "next";
import Section from "@/components/Section";
import Web3Form from "@/components/Web3Form";
import { site } from "@/data/site";
export const metadata: Metadata = { title: "Contact", description: "Contactez l'équipe de La Nuit de l'Élégance." };
export default function Page() {
  return (<Section title="Contact" intro={`Téléphone / WhatsApp : ${site.phoneDisplay}${site.email ? " · " + site.email : ""}`}>
    <Web3Form subject="Contact - La Nuit de l'Élégance" fields={[{ name: "nom", label: "Nom", required: true }, { name: "email", label: "Adresse e-mail", type: "email", required: true }, { name: "telephone", label: "Téléphone (facultatif)", type: "tel" }, { name: "objet", label: "Objet", required: true }, { name: "message", label: "Message", type: "textarea", required: true }]} />
  </Section>);
}
