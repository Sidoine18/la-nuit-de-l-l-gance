import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/lux/primitives";
import { Field, Web3Form, fieldClass } from "@/components/lux/Form";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/devenir-partenaire")({
  head: () => seo({ title: "Devenir partenaire", description: "Proposez un partenariat ou un sponsoring pour La Nuit de l'Élégance : l'équipe de mcEvents vous recontacte.", path: "/devenir-partenaire" }),
  component: () => (
    <main id="contenu">
      <PageHeader eyebrow="Partenariat" title={<>Devenir <span className="italic text-gold">partenaire</span></>} intro="Présentez votre structure et votre projet : l'équipe de mcEvents vous recontacte." />
      <section className="container-lux max-w-3xl py-20">
        <Web3Form subject="Nouvelle demande de partenariat" submitLabel="Envoyer ma demande">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Structure / entreprise" name="structure" required />
            <Field label="Nom du contact" name="nom" required />
            <Field label="E-mail" name="email" type="email" required />
            <Field label="Téléphone" name="telephone" type="tel" required />
          </div>
          <Field label="Type de partenariat" name="type">
            <select name="type" className={fieldClass} defaultValue="Sponsoring">
              <option>Sponsoring</option><option>Partenariat média</option><option>Prestataire</option><option>Autre</option>
            </select>
          </Field>
          <Field label="Votre projet" name="message" textarea required />
        </Web3Form>
      </section>
    </main>
  ),
});
