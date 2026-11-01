import Link from "next/link";
import Image from "next/image";
import { editions, nextEdition, fmtDate } from "@/data/editions";
export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-5 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(201,162,75,.18),transparent_60%)]" aria-hidden />
        <div className="relative max-w-3xl">
          <p className="rise text-xs uppercase tracking-[.4em] text-gold">mcEvents présente</p>
          <h1 className="rise mt-6 font-serif text-5xl leading-tight sm:text-7xl" style={{ animationDelay: ".2s" }}>La Nuit de l&apos;Élégance</h1>
          <p className="rise mt-6 text-ivory/80" style={{ animationDelay: ".5s" }}>Un gala de prestige au Bénin, dédié à l&apos;élégance, au raffinement et au rayonnement.</p>
          <div className="rise mt-10 flex flex-wrap justify-center gap-4" style={{ animationDelay: ".8s" }}>
            <Link href="/prochaine-edition" className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-ink">Prochaine édition</Link>
            <Link href="/editions" className="rounded-full border border-gold px-7 py-3 text-sm text-gold">Les éditions</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-20 grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
        <Image src={nextEdition.poster} alt="Affiche de la 6e édition de La Nuit de l'Élégance" width={715} height={880} className="mx-auto w-full max-w-sm rounded-lg" priority />
        <div>
          <p className="text-xs uppercase tracking-[.3em] text-gold">Édition à venir</p>
          <h2 className="mt-3 font-serif text-4xl">6<sup>e</sup> édition</h2>
          <p className="mt-2 font-serif text-2xl text-gold">{fmtDate(nextEdition.date)}</p>
          <p className="mt-4 text-ivory/80">Le Prestige revient…</p>
          <Link href="/prochaine-edition" className="mt-6 inline-block text-gold underline underline-offset-4">Découvrir</Link>
        </div>
      </section>
      <section className="mx-auto mt-24 max-w-6xl px-5">
        <h2 className="font-serif text-3xl">Les éditions</h2>
        <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {editions.map(e => (
            <li key={e.slug}><Link href={`/editions/${e.slug}`} className="block">
              <Image src={e.poster} alt={`Affiche de l'édition ${e.n}`} width={300} height={360} className="aspect-[5/6] w-full rounded object-cover" />
              <span className="mt-2 block text-sm text-gold">Édition {e.n}</span>
            </Link></li>
          ))}
        </ul>
      </section>
    </>
  );
}
