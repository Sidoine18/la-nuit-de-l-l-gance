"use client";
import { useState, FormEvent } from "react";
import { site } from "@/data/site";
export type Field = { name: string; label: string; type?: "text" | "email" | "tel" | "textarea"; required?: boolean };
const input = "mt-1 w-full rounded border border-gold/30 bg-black/40 px-3 py-3 text-ivory";
export default function Web3Form({ fields, subject, submitLabel = "Envoyer" }: { fields: Field[]; subject: string; submitLabel?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");
  const [errs, setErrs] = useState<Record<string, string>>({});
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return; // piège anti-spam (honeypot)
    const found: Record<string, string> = {};
    fields.forEach(f => {
      const v = String(data.get(f.name) || "").trim();
      if (f.required && !v) found[f.name] = "Ce champ est obligatoire.";
      else if (f.type === "email" && v && !/^\S+@\S+\.\S+$/.test(v)) found[f.name] = "Adresse e-mail invalide.";
    });
    setErrs(found);
    if (Object.keys(found).length) return;
    if (!site.web3formsKey) { setStatus("error"); setMsg("Ce formulaire n'est pas encore configuré. Merci de nous contacter par WhatsApp."); return; }
    setStatus("sending");
    try {
      const body: Record<string, string> = { access_key: site.web3formsKey, subject };
      fields.forEach(f => (body[f.name] = String(data.get(f.name) || "")));
      const r = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(body) });
      const j = await r.json();
      if (r.ok && j.success) { setStatus("ok"); setMsg("Merci, votre message a bien été envoyé."); form.reset(); }
      else { setStatus("error"); setMsg(j.message || "L'envoi a échoué. Veuillez réessayer."); }
    } catch { setStatus("error"); setMsg("Problème de connexion. Vérifiez votre réseau et réessayez."); }
  }
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {fields.map(f => (
        <div key={f.name}>
          <label htmlFor={f.name} className="text-sm text-gold">{f.label}{f.required && " *"}</label>
          {f.type === "textarea" ? <textarea id={f.name} name={f.name} rows={5} className={input} aria-invalid={!!errs[f.name]} /> : <input id={f.name} name={f.name} type={f.type || "text"} className={input} aria-invalid={!!errs[f.name]} />}
          {errs[f.name] && <p role="alert" className="mt-1 text-sm text-red-400">{errs[f.name]}</p>}
        </div>
      ))}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
      <button disabled={status === "sending"} className="rounded-full bg-gold px-8 py-3 font-semibold text-ink disabled:opacity-60">{status === "sending" ? "Envoi…" : submitLabel}</button>
      <p role="status" aria-live="polite" className={status === "ok" ? "text-green-400" : "text-red-400"}>{msg}</p>
    </form>
  );
}
