import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { editions, fmtDate } from "@/data/editions";
export const dynamicParams = false;
export function generateStaticParams() { return editions.map(e => ({ slug: e.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const e = editions.find(x => x.slug === params.slug);
  return e ? { title: `Édition ${e.n}`, description: `Édition ${e.n} de La Nuit de l'Élégance, gala de prestige au Bénin.` } : {};
}
export default function Page({ params }: { params: { slug: string } }) {
  const e = editions.find(x => x.slug === params.slug);
  if (!e) notFound();
  const todo = <span className="text-ivory/50">À compléter</span>;
  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-5 py-12 md:grid-cols-2">
      <Image src={e.poster} alt={`Affiche officielle de l'édition ${e.n}`} width={715} height={880} className="w-full rounded-lg" priority />
      <div>
        <h1 className="font-serif text-5xl">Édition {e.n}</h1>
        <dl className="mt-8 space-y-4">
          <div><dt className="text-xs uppercase tracking-widest text-gold">Année</dt><dd>{e.year ?? todo}</dd></div>
          <div><dt className="text-xs uppercase tracking-widest text-gold">Date</dt><dd>{e.date ? fmtDate(e.date) : todo}</dd></div>
          <div><dt className="text-xs uppercase tracking-widest text-gold">Lieu</dt><dd>{e.place ?? todo}</dd></div>
          <div><dt className="text-xs uppercase tracking-widest text-gold">Thème</dt><dd>{e.theme ?? todo}</dd></div>
        </dl>
        {e.note && <p className="mt-6 text-ivory/80">{e.note}</p>}
        <Link href="/editions" className="mt-10 inline-block text-gold underline underline-offset-4">← Toutes les éditions</Link>
      </div>
    </div>
  );
}
