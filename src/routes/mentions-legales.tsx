import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/lux/primitives";
import { ProseSections } from "@/components/lux/Prose";
import { contact, credit, site } from "@/config/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/mentions-legales")({
  head: () => seo({ title: "Mentions légales", description: "Mentions légales du site officiel de La Nuit de l'Élégance, organisée par mcEvents.", path: "/mentions-legales" }),
  component: () => (
    <main id="contenu">
      <PageHeader eyebrow="Informations" title="Mentions légales" />
      <ProseSections sections={[
        { title: "Éditeur du site", body: <p>{site.name} — événement organisé par {site.organizer}, {site.organizerDescription.toLowerCase()}, {contact.city}. Téléphone : {contact.phoneDisplay}.{contact.email && <> E-mail : {contact.email}.</>}{contact.address && <> Adresse : {contact.address}.</>}</p> },
        { title: "Conception et réalisation", body: <p>Site conçu et réalisé par <a className="text-gold" href={credit.url} target="_blank" rel="noopener noreferrer">{credit.label}</a>.</p> },
        { title: "Propriété intellectuelle", body: <p>Les textes, affiches, photos, vidéos et logos présentés sur ce site sont la propriété de {site.organizer} ou de leurs auteurs. Toute reproduction sans autorisation est interdite.</p> },
        { title: "Responsabilité", body: <p>Les informations publiées sont fournies à titre indicatif et peuvent évoluer. Seules les communications officielles de l'organisation font foi.</p> },
      ]} />
    </main>
  ),
});
