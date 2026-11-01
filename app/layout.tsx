import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { site } from "@/data/site";

const serif = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["400", "700"], 
  variable: "--f-serif" 
});
const sans = Inter({ subsets: ["latin"], variable: "--f-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: { canonical: "./" },
  title: { default: "La Nuit de l'Élégance Bénin | Gala de prestige par mcEvents", template: "%s | La Nuit de l'Élégance" },
  description: "Site officiel de La Nuit de l'Élégance, gala de prestige organisé par mcEvents au Bénin : éditions, archives et prochaine édition.",
  openGraph: { title: "La Nuit de l'Élégance", description: "Gala de prestige au Bénin, par mcEvents.", locale: "fr_FR", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <header className="fixed inset-x-0 top-0 z-50 bg-ink/70 backdrop-blur">
          <nav aria-label="Navigation principale" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-3">
            <Link href="/" className="font-serif text-lg text-gold">La Nuit de l&apos;Élégance</Link>
            <ul className="flex gap-5 text-sm">
              {site.nav.map(l => <li key={l.href}><Link className="inline-block py-2 hover:text-gold" href={l.href}>{l.label}</Link></li>)}
            </ul>
          </nav>
        </header>
        <main className="pt-14">{children}</main>
        <footer className="mt-24 border-t border-gold/20 px-5 py-10 text-center text-sm text-ivory/70">
          <p>© {new Date().getFullYear()} La Nuit de l&apos;Élégance · Organisé par {site.organizer}</p>
          <p className="mt-3 flex flex-wrap justify-center gap-x-4 text-xs"><Link href="/mentions-legales">Mentions légales</Link><Link href="/politique-de-confidentialite">Confidentialité</Link><Link href="/conditions-de-reservation">Conditions de réservation</Link></p>
          <p className="mt-2 text-xs">
            <a href="https://konfortechbenin.online" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Site conçu par KONFORTECH BÉNIN</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
