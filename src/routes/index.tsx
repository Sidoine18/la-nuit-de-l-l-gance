import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-gala.jpg";
import { home, about } from "@/content/home";
import { nextEdition, pastEditions, sortedEditions } from "@/content/editions";
import { nextEditionDetails } from "@/content/next-edition";
import { EditionCard } from "@/components/lux/EditionCard";
import { Ornament, Reveal, SectionHeading, luxButton } from "@/components/lux/primitives";
import { YouTubeEmbed } from "@/components/lux/Media";
import { seo, youtubeId } from "@/lib/seo";
import { site } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => seo({ title: `${site.name} — Gala de prestige au Bénin`, description: site.description, path: "/" }),
  component: Home,
});

function Home() {
  const reduce = useReducedMotion();
  const vid = home.recapVideo ? youtubeId(home.recapVideo) : null;
  const poster6 = nextEdition?.posters[0];
  return (
    <main id="contenu">
      <section className="grain relative flex min-h-[100svh] items-end overflow-hidden pb-20 pt-32 md:items-center">
        <motion.img
          src={hero}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          initial={reduce ? false : { scale: 1.15, opacity: 0 }}
          animate={reduce ? { opacity: 0.6 } : { scale: [1.15, 1.05, 1.12], x: ["0%", "-2%", "1%"], opacity: 0.6 }}
          transition={{ scale: { duration: 24, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }, x: { duration: 24, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }, opacity: { duration: 2 } }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/70" />
        <div className="container-lux relative">
          <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="eyebrow">{home.heroEyebrow}</motion.p>
          <h1 className="mt-6 text-6xl leading-[0.9] text-ivory sm:text-8xl lg:text-[9rem]">
            <motion.span initial={reduce ? false : { opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="block">{home.heroTitleLine1}</motion.span>
            <motion.span initial={reduce ? false : { opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="block italic text-gold">{home.heroTitleLine2}</motion.span>
          </h1>
          <motion.p initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="mt-8 max-w-xl text-lg text-muted-foreground">{home.heroSubtitle}</motion.p>
          <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="mt-10 flex flex-wrap gap-4">
            <Link to="/reservation" className={luxButton({ variant: "gold" })}>Réserver ma place</Link>
            <Link to="/editions" className={luxButton({ variant: "outline" })}>Découvrir les éditions</Link>
          </motion.div>
        </div>
      </section>

      <section className="container-lux py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading eyebrow="L'événement" title={home.introTitle} />
          <Reveal className="space-y-5 text-muted-foreground md:text-lg">
            {home.introText.map((p) => <p key={p}>{p}</p>)}
            <Link to="/a-propos" className={luxButton({ variant: "ghost" })}>Notre histoire <ArrowRight size={14} /></Link>
          </Reveal>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
          {[[String(pastEditions.length), "Éditions réalisées"], ["2020", "Première édition"], ["06", "Édition à venir"], ["mcEvents", "Organisateur"]].map(([n, l]) => (
            <div key={l} className="bg-background p-8 text-center">
              <p className="font-numeral text-3xl text-gold md:text-4xl">{n}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {nextEdition && (
        <section className="relative overflow-hidden border-y border-border bg-ink py-24 md:py-32">
          <div className="container-lux grid gap-12 lg:grid-cols-2 lg:items-center">
            {poster6 && <Reveal><img src={poster6.src} alt={poster6.alt} loading="lazy" className="mx-auto max-h-[38rem] border border-gold/30 object-contain" /></Reveal>}
            <div>
              <SectionHeading eyebrow="6ème édition" title={<>Le Prestige <span className="italic text-gold">revient…</span></>} intro={nextEditionDetails.presentation[0]} />
              <dl className="mt-10 grid grid-cols-2 gap-6 text-sm">
                {[["Date", nextEditionDetails.date], ["Lieu", nextEditionDetails.venue]].map(([k, v]) => (
                  <div key={k}><dt className="eyebrow text-[0.6rem]">{k}</dt><dd className="mt-1 font-display text-2xl text-ivory">{v ?? "À venir"}</dd></div>
                ))}
              </dl>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/prochaine-edition" className={luxButton({ variant: "gold" })}>En savoir plus</Link>
                <Link to="/reservation" className={luxButton({ variant: "outline" })}>Réserver</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="container-lux py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Archives" title="Les éditions" intro="Chaque édition raconte un chapitre de l'histoire de La Nuit de l'Élégance." />
          <Link to="/editions" className={luxButton({ variant: "outline" })}>Toutes les éditions</Link>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sortedEditions.map((e, i) => <Reveal key={e.slug} delay={i * 0.05}><EditionCard edition={e} /></Reveal>)}
        </div>
      </section>

      <section className="container-lux pb-24">
        <Ornament className="mb-20" />
        <SectionHeading align="center" eyebrow="Nos valeurs" title="L'esprit de la soirée" />
        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {about.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08} className="bg-background p-8">
              <p className="font-numeral text-xs text-gold">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-3xl text-ivory">{v.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {vid && (
        <section className="container-lux pb-24"><SectionHeading eyebrow="En images" title="Revivez la soirée" /><div className="mt-10"><YouTubeEmbed id={vid} title="Vidéo récapitulative" /></div></section>
      )}

      <section className="grain relative overflow-hidden border-t border-border bg-velvet/20 py-24 text-center md:py-32">
        <div className="container-lux">
          <SectionHeading align="center" eyebrow="Partenariat" title="Associez votre marque au prestige" intro="Devenez partenaire ou sponsor de la prochaine édition et rayonnez auprès d'un public exigeant." />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/devenir-partenaire" className={luxButton({ variant: "gold" })}>Devenir partenaire</Link>
            <Link to="/sponsoring" className={luxButton({ variant: "outline" })}>Offres de sponsoring</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
