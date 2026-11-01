import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { editions, fmtDate } from "@/data/editions";
export const metadata: Metadata = { title: "Éditions et archives", description: "Toutes les éditions de La Nuit de l'Élégance : affiches, dates et souvenirs." };
export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="font-serif text-4xl">Éditions et archives</h1>
      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {editions.map(e => (
          <li key={e.slug}><Link href={`/editions/${e.slug}`}>
            <Image src={e.poster} alt={`Affiche de l'édition ${e.n}`} width={600} height={720} className="w-full rounded-lg" />
            <h2 className="mt-3 font-serif text-2xl">Édition {e.n}</h2>
            <p className="text-sm text-ivory/70">{e.date ? fmtDate(e.date) : e.year ?? "Informations à compléter"}</p>
          </Link></li>
        ))}
      </ul>
    </div>
  );
}
