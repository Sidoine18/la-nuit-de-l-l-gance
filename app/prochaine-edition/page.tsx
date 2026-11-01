import Image from "next/image";
import type { Metadata } from "next";
import { nextEdition, fmtDate } from "@/data/editions";
export const metadata: Metadata = { title: "Prochaine édition", description: "6e édition de La Nuit de l'Élégance : date à venir." };
export default function Page() {
  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-5 py-12 md:grid-cols-2">
      <Image src={nextEdition.poster} alt="Affiche de la 6e édition" width={715} height={880} className="w-full rounded-lg" priority />
      <div>
        <h1 className="font-serif text-5xl">6<sup>e</sup> édition</h1>
        <p className="mt-4 font-serif text-3xl text-gold">{fmtDate(nextEdition.date)}</p>
        <p className="mt-6 text-ivory/80">Le Prestige revient… Lieu, programme et tickets seront annoncés officiellement par mcEvents.</p>
      </div>
    </div>
  );
}
