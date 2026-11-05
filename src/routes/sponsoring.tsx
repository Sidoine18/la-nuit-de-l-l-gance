import { createFileRoute, Link } from "@tanstack/react-router";
import { Crown, Megaphone, Sparkles, Users } from "lucide-react";
import { PageHeader, Reveal, SectionHeading, luxButton } from "@/components/lux/primitives";
import { seo } from "@/lib/seo";

const benefits = [
  { icon: Crown, title: "Image de prestige", text: "Associez votre marque à une soirée dédiée à l'élégance, au raffinement et à l'excellence." },
  { icon: Users, title: "Un public choisi", text: "Rencontrez des personnalités, des décideurs et des invités attentifs à la qualité." },
  { icon: Megaphone, title: "Visibilité", text: "Présence sur les supports de communication de l'événement, selon la formule retenue." },
  { icon: Sparkles, title: "Expérience sur mesure", text: "Une formule construite avec mcEvents selon vos objectifs." },
];

export const Route = createFileRoute("/sponsoring")({
  head: () => seo({ title: "Sponsoring", description: "Devenez sponsor de La Nuit de l'Élégance : visibilité, image de prestige et formule sur mesure avec mcEvents.", path: "/sponsoring" }),
  component: () => (
    <main id="contenu">
      <PageHeader eyebrow="Sponsoring" title={<>Une scène pour <span className="italic text-gold">votre marque</span></>} intro="La 6ème édition de La Nuit de l'Élégance ouvre ses portes aux marques qui partagent ses valeurs." />
      <section className="container-lux py-20">
        <SectionHeading eyebrow="Pourquoi nous rejoindre" title="Les atouts du sponsoring" />
        <div className="mt-12 grid gap-px bg-border sm:grid-cols-2">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08} className="bg-background p-8">
              <b.icon className="text-gold" />
              <h3 className="mt-5 text-2xl text-ivory">{b.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{b.text}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">Les formules et conditions détaillées sont communiquées sur demande par l'équipe de mcEvents.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/devenir-partenaire" className={luxButton({ variant: "gold" })}>Demander le dossier</Link>
          <Link to="/partenaires" className={luxButton({ variant: "outline" })}>Nos partenaires</Link>
        </div>
      </section>
    </main>
  ),
});
