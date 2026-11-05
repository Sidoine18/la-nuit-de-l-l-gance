import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/lux/primitives";
import { ProseSections } from "@/components/lux/Prose";
import { contact, site } from "@/config/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () => seo({ title: "Politique de confidentialité", description: "Comment La Nuit de l'Élégance et mcEvents utilisent les informations transmises via le site.", path: "/politique-de-confidentialite" }),
  component: () => (
    <main id="contenu">
      <PageHeader eyebrow="Informations" title="Politique de confidentialité" />
      <ProseSections sections={[
        { title: "Données collectées", body: <p>Le site ne crée pas de compte et n'effectue aucun paiement. Seules les informations que vous saisissez volontairement dans les formulaires (nom, téléphone, e-mail, message) sont collectées.</p> },
        { title: "Utilisation", body: <p>Ces informations servent uniquement à répondre à votre demande (réservation, information, partenariat). Elles ne sont ni vendues ni cédées.</p> },
        { title: "Transmission", body: <p>Les demandes de réservation sont envoyées via WhatsApp. Les formulaires de contact sont transmis par e-mail à {site.organizer} grâce au service Web3Forms.</p> },
        { title: "Vos droits", body: <p>Vous pouvez demander la consultation ou la suppression de vos informations en contactant {site.organizer} au {contact.phoneDisplay}.</p> },
      ]} />
    </main>
  ),
});
