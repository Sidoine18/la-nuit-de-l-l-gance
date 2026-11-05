import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/lux/primitives";
import { ProseSections } from "@/components/lux/Prose";
import { reservationConditions } from "@/content/tickets";
import { contact } from "@/config/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/conditions-de-reservation")({
  head: () => seo({ title: "Conditions de réservation", description: "Conditions de réservation pour La Nuit de l'Élégance : demande par WhatsApp, validation par mcEvents.", path: "/conditions-de-reservation" }),
  component: () => (
    <main id="contenu">
      <PageHeader eyebrow="Réservation" title="Conditions de réservation" />
      <ProseSections sections={[
        { title: "Principe", body: <ul className="list-disc space-y-2 pl-5">{reservationConditions.map((c) => <li key={c}>{c}</li>)}</ul> },
        { title: "Confirmation", body: <p>Après réception de votre demande, l'équipe de mcEvents vous recontacte pour confirmer la disponibilité et les modalités. Seule cette confirmation vaut réservation.</p> },
        { title: "Tarifs", body: <p>Les tarifs officiels sont communiqués par l'organisation. Tant qu'ils ne sont pas publiés, le site affiche « Tarif à venir ».</p> },
        { title: "Contact", body: <p>Pour toute question : <a className="text-gold" href={`tel:${contact.phoneLink}`}>{contact.phoneDisplay}</a>.</p> },
      ]} />
    </main>
  ),
});
