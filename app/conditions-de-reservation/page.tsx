import type { Metadata } from "next";
import Section from "@/components/Section";
export const metadata: Metadata = { title: "Conditions de réservation", description: "Conditions de réservation du site La Nuit de l'Élégance.", robots: { index: true } };
export default function Page() {
  return (<Section title="Conditions de réservation" intro="Document à compléter par l'organisation avant la mise en ligne définitive."><p>Votre demande de réservation sera transmise à l&apos;équipe de mcEvents. Elle ne constitue pas une confirmation définitive. La réservation sera confirmée après validation par l&apos;organisation. Aucun paiement n&apos;est effectué sur ce site. Modalités de paiement et d&apos;annulation : [À COMPLÉTER].</p></Section>);
}
