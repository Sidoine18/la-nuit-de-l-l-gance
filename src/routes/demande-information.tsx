import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/lux/primitives";
import { Field, Web3Form, fieldClass } from "@/components/lux/Form";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/demande-information")({
  head: () => seo({ title: "Demande d'information", description: "Une question sur La Nuit de l'Élégance ? Envoyez votre demande d'information à mcEvents.", path: "/demande-information" }),
  component: () => (
    <main id="contenu">
      <PageHeader eyebrow="Information" title={<>Une <span className="italic text-gold">question</span> ?</>} intro="Tickets, tenue, programme, presse : écrivez-nous." />
      <section className="container-lux max-w-3xl py-20">
        <Web3Form subject="Nouvelle demande d'information">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nom" name="nom" required />
            <Field label="E-mail" name="email" type="email" required />
            <Field label="Téléphone" name="telephone" type="tel" />
            <Field label="Sujet" name="sujet">
              <select name="sujet" className={fieldClass} defaultValue="Réservation">
                <option>Réservation</option><option>Programme</option><option>Presse / médias</option><option>Autre</option>
              </select>
            </Field>
          </div>
          <Field label="Votre message" name="message" textarea required />
        </Web3Form>
      </section>
    </main>
  ),
});
