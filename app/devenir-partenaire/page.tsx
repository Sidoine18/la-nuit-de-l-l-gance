import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
export const metadata: Metadata = { title: "Devenir partenaire", description: "Collaborez avec La Nuit de l'Élégance : partenariat ou sponsoring." };
export default function Page() {
  return (<Section title="Devenir partenaire" intro="Les modalités de collaboration sont définies avec l'organisation. Choisissez la demande qui vous correspond.">
    <p><Link className="text-gold underline" href="/partenariat">Faire une demande de partenariat</Link></p>
    <p><Link className="text-gold underline" href="/sponsoring">Faire une demande de sponsoring</Link></p>
  </Section>);
}
