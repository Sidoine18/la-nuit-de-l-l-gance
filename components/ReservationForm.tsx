"use client";
import { useState, FormEvent } from "react";
import { tickets } from "@/data/tickets";
import { whatsappUrl } from "@/lib/whatsapp";
const input = "mt-1 w-full rounded border border-gold/30 bg-black/40 px-3 py-3 text-ivory";
export default function ReservationForm() {
  const [err, setErr] = useState("");
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const g = (k: string) => String(d.get(k) || "").trim();
    if (!g("nom") || !g("tel") || !g("qte") || !g("categorie")) { setErr("Merci de remplir tous les champs obligatoires."); return; }
    if (!/^\+?[\d\s().-]{8,}$/.test(g("tel"))) { setErr("Numéro de téléphone invalide."); return; }
    if (!(parseInt(g("qte")) >= 1)) { setErr("La quantité doit être d'au moins 1."); return; }
    setErr("");
    const url = whatsappUrl(["Bonjour, je souhaite faire une demande de réservation pour La Nuit de l'Élégance.", `Nom et prénom : ${g("nom")}`, `Téléphone : ${g("tel")}`, `Catégorie de ticket : ${g("categorie")}`, `Quantité : ${g("qte")}`, `Informations complémentaires : ${g("infos") || "Aucune"}`]);
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div><label htmlFor="nom" className="text-sm text-gold">Nom et prénom *</label><input id="nom" name="nom" className={input} /></div>
      <div><label htmlFor="tel" className="text-sm text-gold">Téléphone *</label><input id="tel" name="tel" type="tel" className={input} /></div>
      <div><label htmlFor="categorie" className="text-sm text-gold">Catégorie de ticket *</label>
        {tickets.length ? <select id="categorie" name="categorie" className={input}>{tickets.map(t => <option key={t.id} value={t.label}>{t.label} ({t.price})</option>)}</select> : <input id="categorie" name="categorie" className={input} placeholder="Catégories bientôt annoncées : précisez votre souhait" />}</div>
      <div><label htmlFor="qte" className="text-sm text-gold">Quantité *</label><input id="qte" name="qte" type="number" min={1} defaultValue={1} className={input} /></div>
      <div><label htmlFor="infos" className="text-sm text-gold">Informations complémentaires</label><textarea id="infos" name="infos" rows={4} className={input} /></div>
      {err && <p role="alert" className="text-red-400">{err}</p>}
      <button className="rounded-full bg-gold px-8 py-3 font-semibold text-ink">Envoyer via WhatsApp</button>
      <p className="text-sm text-ivory/70">Votre demande de réservation sera transmise à l&apos;équipe de mcEvents. Elle ne constitue pas une confirmation définitive. La réservation sera confirmée après validation par l&apos;organisation.</p>
    </form>
  );
}
