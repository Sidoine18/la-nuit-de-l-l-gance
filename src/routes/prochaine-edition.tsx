import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHeader, Pending, Reveal, SectionHeading, luxButton } from "@/components/lux/primitives";
import { nextEdition } from "@/content/editions";
import { nextEditionDetails as d } from "@/content/next-edition";
import { reservationConditions, tickets } from "@/content/tickets";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/prochaine-edition")({
  head: () => seo({ title: "6ème édition — Le Prestige revient", description: "La Nuit de l'Élégance revient pour une 6ème édition. Date, lieu, programme, tickets et réservation.", path: "/prochaine-edition", image: nextEdition?.posters[0]?.src }),
  component: NextEdition,
});

function Countdown({ iso }: { iso: string }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => { setNow(Date.now()); const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  if (now === null) return null;
  const diff = Math.max(0, new Date(iso).getTime() - now);
  const parts = [["Jours", Math.floor(diff / 864e5)], ["Heures", Math.floor(diff / 36e5) % 24], ["Minutes", Math.floor(diff / 6e4) % 60], ["Secondes", Math.floor(diff / 1e3) % 60]] as const;
  return (
    <div className="mt-10 grid max-w-xl grid-cols-4 gap-px border border-gold/30 bg-gold/30">
      {parts.map(([l, v]) => <div key={l} className="bg-background p-4 text-center"><p className="font-numeral text-3xl text-gold md:text-4xl">{String(v).padStart(2, "0")}</p><p className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">{l}</p></div>)}
    </div>
  );
}

function NextEdition() {
  const poster = nextEdition?.posters[0];
  return (
    <main id="contenu">
      <PageHeader eyebrow="6ème édition" title={<>Le Prestige <span className="italic text-gold">revient…</span></>} intro={d.presentation.join(" ")}>
        {d.confirmed && d.dateISO && <Countdown iso={d.dateISO} />}
      </PageHeader>
      <section className="container-lux grid gap-14 py-20 lg:grid-cols-2">
        {poster && <Reveal><img src={poster.src} alt={poster.alt} className="w-full border border-gold/30" /></Reveal>}
        <div>
          <dl className="grid grid-cols-2 gap-6">
            {[["Date", d.date], ["Lieu", d.venue], ["Ville", d.city], ["Thème", d.theme]].map(([k, v]) => <div key={k}><dt className="eyebrow text-[0.6rem]">{k}</dt><dd className="mt-1 font-display text-2xl text-ivory">{v ?? "À venir"}</dd></div>)}
          </dl>
          <div className="mt-12"><p className="eyebrow mb-4">Programme</p>
            {d.program.length ? <ul className="space-y-3">{d.program.map((p) => <li key={p.time + p.title} className="flex gap-4"><span className="font-numeral text-gold">{p.time}</span><span className="text-ivory">{p.title}</span></li>)}</ul> : <Pending>Le programme sera dévoilé prochainement.</Pending>}
          </div>
          {d.guests.length > 0 && <div className="mt-10"><p className="eyebrow mb-4">Invités</p><ul>{d.guests.map((g) => <li key={g.name} className="text-ivory">{g.name}</li>)}</ul></div>}
          {d.practical.length > 0 && <dl className="mt-10 space-y-2">{d.practical.map((p) => <div key={p.label}><dt className="eyebrow text-[0.6rem]">{p.label}</dt><dd className="text-ivory">{p.value}</dd></div>)}</dl>}
        </div>
      </section>
      <section className="border-t border-border bg-ink py-20">
        <div className="container-lux">
          <SectionHeading eyebrow="Billetterie" title="Tickets" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {tickets.map((t) => (
              <div key={t.id} className="border border-border bg-background p-8">
                <h3 className="text-3xl text-ivory">{t.name}</h3>
                <p className="mt-3 font-numeral text-xl text-gold">{t.price ?? "Tarif à venir"}</p>
                {t.description && <p className="mt-3 text-sm text-muted-foreground">{t.description}</p>}
                {t.perks.length > 0 && <ul className="mt-4 space-y-1 text-sm text-muted-foreground">{t.perks.map((p) => <li key={p}>— {p}</li>)}</ul>}
                <Link to="/reservation" search={{ ticket: t.id }} className={luxButton({ variant: "outline" }) + " mt-8 w-full"}>Réserver</Link>
              </div>
            ))}
          </div>
          <ul className="mt-10 space-y-1 text-xs text-muted-foreground">{reservationConditions.map((c) => <li key={c}>· {c}</li>)}</ul>
        </div>
      </section>
    </main>
  );
}
