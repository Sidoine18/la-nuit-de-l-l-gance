import { createFileRoute } from "@tanstack/react-router";
import { Facebook, MessageCircle, Phone } from "lucide-react";
import { PageHeader } from "@/components/lux/primitives";
import { Field, Web3Form } from "@/components/lux/Form";
import { contact, social } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo({ title: "Contact", description: "Contactez mcEvents, organisateur de La Nuit de l'Élégance : téléphone, WhatsApp, Facebook et formulaire.", path: "/contact" }),
  component: () => (
    <main id="contenu">
      <PageHeader eyebrow="Contact" title={<>Parlons de <span className="italic text-gold">votre soirée</span></>} intro="Une question, une demande particulière ? L'équipe de mcEvents vous répond." />
      <section className="container-lux grid gap-14 py-20 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          <a href={`tel:${contact.phoneLink}`} className="flex items-center gap-4 border border-border p-6 hover:border-gold"><Phone className="text-gold" /><span><span className="eyebrow block text-[0.6rem]">Téléphone</span><span className="text-ivory">{contact.phoneDisplay}</span></span></a>
          <a href={buildWhatsAppUrl("Bonjour mcEvents,")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border border-border p-6 hover:border-gold"><MessageCircle className="text-gold" /><span><span className="eyebrow block text-[0.6rem]">WhatsApp</span><span className="text-ivory">Écrire un message</span></span></a>
          {social.facebook && <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border border-border p-6 hover:border-gold"><Facebook className="text-gold" /><span><span className="eyebrow block text-[0.6rem]">Facebook</span><span className="text-ivory">Page officielle</span></span></a>}
        </div>
        <Web3Form subject="Nouveau message — Contact">
          <div className="grid gap-5 sm:grid-cols-2"><Field label="Nom" name="nom" required /><Field label="E-mail" name="email" type="email" required /></div>
          <Field label="Téléphone" name="telephone" type="tel" />
          <Field label="Message" name="message" textarea required />
        </Web3Form>
      </section>
    </main>
  ),
});
