import type { Metadata } from "next";
import Section from "@/components/Section";
export const metadata: Metadata = { title: "Politique de confidentialité", description: "Politique de confidentialité du site La Nuit de l'Élégance.", robots: { index: true } };
export default function Page() {
  return (<Section title="Politique de confidentialité" intro="Document à compléter par l'organisation avant la mise en ligne définitive."><p>Les formulaires de contact transmettent vos informations par e-mail via le service Web3Forms. Les demandes de réservation sont envoyées par WhatsApp. Le site ne crée aucun compte et n&apos;utilise aucune base de données. Responsable du traitement : [À COMPLÉTER]. Contact : [À COMPLÉTER].</p></Section>);
}
