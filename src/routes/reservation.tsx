import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { PageHeader, luxButton } from "@/components/lux/primitives";
import { Field, fieldClass } from "@/components/lux/Form";
import { tickets, RESERVATION_DISCLAIMER } from "@/content/tickets";
import { buildReservationMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/reservation")({
  validateSearch: (s: Record<string, unknown>): { ticket?: string } => (typeof s["ticket"] === "string" ? { ticket: s["ticket"] } : {}),
  head: () => seo({ title: "Réservation", description: "Faites votre demande de réservation pour la 6ème édition de La Nuit de l'Élégance, transmise directement à mcEvents par WhatsApp.", path: "/reservation" }),
  component: Reservation,
});

function Reservation() {
  const { ticket } = Route.useSearch();
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const fullName = String(f.get("fullName") ?? "");
    const phone = String(f.get("phone") ?? "");
    const quantity = Number(f.get("quantity") ?? 1);
    if (fullName.trim().length < 2 || phone.replace(/\D/g, "").length < 8 || !(quantity >= 1)) {
      setError("Merci d'indiquer votre nom, un numéro de téléphone valide et une quantité.");
      return;
    }
    setError(null);
    const t = tickets.find((x) => x.id === f.get("ticket"));
    const msg = buildReservationMessage({ fullName, phone, quantity, ticket: t?.name ?? "Non précisé", notes: String(f.get("notes") ?? ""), edition: "6ème édition" });
    window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <main id="contenu">
      <PageHeader eyebrow="6ème édition" title={<>Réserver <span className="italic text-gold">ma place</span></>} intro="Remplissez le formulaire : votre demande s'ouvre dans WhatsApp, prête à être envoyée à mcEvents." />
      <section className="container-lux grid gap-14 py-20 lg:grid-cols-[1.4fr_1fr]">
        <form onSubmit={onSubmit} className="space-y-5" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nom et prénom" name="fullName" required />
            <Field label="Téléphone" name="phone" type="tel" required placeholder="+229 …" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Catégorie" name="ticket">
              <select name="ticket" defaultValue={ticket ?? tickets[0]?.id} className={fieldClass}>
                {tickets.map((t) => <option key={t.id} value={t.id}>{t.name}{t.price ? ` — ${t.price}` : ""}</option>)}
              </select>
            </Field>
            <Field label="Quantité" name="quantity"><input name="quantity" type="number" min={1} max={50} defaultValue={1} className={fieldClass} /></Field>
          </div>
          <Field label="Informations complémentaires" name="notes" textarea />
          {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
          <button type="submit" className={luxButton({ variant: "gold" })}><MessageCircle size={16} /> Envoyer via WhatsApp</button>
        </form>
        <aside className="h-fit border border-gold/30 p-8">
          <p className="eyebrow mb-4">Important</p>
          <p className="text-sm leading-relaxed text-muted-foreground">{RESERVATION_DISCLAIMER}</p>
          <p className="mt-4 text-sm text-muted-foreground">Aucun paiement n'est effectué sur ce site.</p>
          <Link to="/conditions-de-reservation" className={luxButton({ variant: "ghost" }) + " mt-6"}>Conditions de réservation</Link>
        </aside>
      </section>
    </main>
  );
}
