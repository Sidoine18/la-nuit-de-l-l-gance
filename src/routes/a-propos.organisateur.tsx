import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Reveal, luxButton } from "@/components/lux/primitives";
import { about } from "@/content/home";
import { contact } from "@/config/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/a-propos/organisateur")({
  head: () => seo({ title: "L'organisateur : mcEvents", description: "mcEvents, l'agence événementielle béninoise qui conçoit et organise La Nuit de l'Élégance depuis sa première édition.", path: "/a-propos/organisateur" }),
  component: () => (
    <main id="contenu">
      <PageHeader eyebrow="L'organisateur" title={<span className="italic text-gold">mcEvents</span>} intro="Agence événementielle" />
      <section className="container-lux max-w-3xl py-20">
        <Reveal className="space-y-5 text-muted-foreground md:text-lg">{about.organizerText.map((p) => <p key={p}>{p}</p>)}</Reveal>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href={`tel:${contact.phoneLink}`} className={luxButton({ variant: "gold" })}>{contact.phoneDisplay}</a>
          <Link to="/contact" className={luxButton({ variant: "outline" })}>Nous écrire</Link>
        </div>
      </section>
    </main>
  ),
});
