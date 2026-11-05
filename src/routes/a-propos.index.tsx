import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Reveal, SectionHeading, luxButton } from "@/components/lux/primitives";
import { about } from "@/content/home";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/a-propos/")({
  head: () => seo({ title: "À propos", description: "Histoire, concept, vision et valeurs de La Nuit de l'Élégance, gala de prestige né en 2020 à Dassa au Bénin.", path: "/a-propos" }),
  component: () => (
    <main id="contenu">
      <PageHeader eyebrow="À propos" title={<>Une histoire <span className="italic text-gold">d'élégance</span></>} intro={about.concept} />
      <section className="container-lux grid gap-12 py-20 lg:grid-cols-2">
        <SectionHeading eyebrow="Notre histoire" title="Depuis 2020" />
        <Reveal className="space-y-5 text-muted-foreground md:text-lg">{about.history.map((p) => <p key={p}>{p}</p>)}</Reveal>
      </section>
      <section className="border-y border-border bg-ink py-20">
        <div className="container-lux grid gap-12 lg:grid-cols-2">
          <div><p className="eyebrow mb-4">Vision</p><p className="font-display text-3xl leading-snug text-ivory md:text-4xl">{about.vision}</p></div>
          <div><p className="eyebrow mb-4">Objectifs</p><ul className="space-y-4">{about.objectives.map((o, i) => <li key={o} className="flex gap-4 text-muted-foreground"><span className="font-numeral text-gold">{String(i + 1).padStart(2, "0")}</span>{o}</li>)}</ul></div>
        </div>
      </section>
      <section className="container-lux py-20">
        <SectionHeading eyebrow="Valeurs" title="Ce qui nous guide" />
        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {about.values.map((v) => <div key={v.title} className="bg-background p-8"><h3 className="text-3xl text-ivory">{v.title}</h3><p className="mt-3 text-sm text-muted-foreground">{v.text}</p></div>)}
        </div>
        <Link to="/a-propos/organisateur" className={luxButton({ variant: "outline" }) + " mt-12"}>Découvrir l'organisateur</Link>
      </section>
    </main>
  ),
});
