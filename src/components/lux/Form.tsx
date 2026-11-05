import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { isWeb3FormsConfigured, submitWeb3Forms } from "@/lib/web3forms";
import { contact } from "@/config/site";
import { luxButton } from "./primitives";

export const fieldClass = "w-full min-h-12 border border-border bg-card/60 px-4 py-3 text-sm text-ivory placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none";

export function Field({ label, name, type = "text", required, textarea, placeholder, children }: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean; placeholder?: string; children?: ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow mb-2 block text-[0.6rem]">{label}{required && " *"}</span>
      {children ?? (textarea
        ? <textarea name={name} required={required} placeholder={placeholder} rows={5} className={fieldClass} />
        : <input name={name} type={type} required={required} placeholder={placeholder} className={fieldClass} />)}
    </label>
  );
}

/** Formulaire envoyé via Web3Forms. Les champs sont lus depuis le formulaire. */
export function Web3Form({ subject, children, submitLabel = "Envoyer" }: { subject: string; children: ReactNode; submitLabel?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);
  const configured = isWeb3FormsConfigured();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return;
    const fields: Record<string, string> = {};
    data.forEach((v, k) => { if (k !== "botcheck") fields[k] = String(v); });
    setState("sending");
    setError(null);
    const r = await submitWeb3Forms(subject, fields);
    if (r.ok) { setState("done"); form.reset(); } else { setState("idle"); setError(r.error); }
  }

  if (state === "done") {
    return (
      <div className="border border-gold/40 p-10 text-center">
        <CheckCircle2 className="mx-auto text-gold" size={40} />
        <p className="mt-4 font-display text-3xl text-ivory">Message bien reçu</p>
        <p className="mt-2 text-sm text-muted-foreground">L'équipe de mcEvents vous répondra dans les meilleurs délais.</p>
      </div>
    );
  }
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {!configured && (
        <p className="border border-dashed border-gold/40 p-4 text-sm text-muted-foreground">
          Formulaire en cours de configuration. En attendant, contactez-nous au <a className="text-gold" href={`tel:${contact.phoneLink}`}>{contact.phoneDisplay}</a>.
        </p>
      )}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      {children}
      {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
      <button type="submit" disabled={state === "sending" || !configured} className={luxButton({ variant: "gold" })}>
        {state === "sending" ? "Envoi…" : submitLabel}
      </button>
    </form>
  );
}
