import Link from "next/link";
export default function NotFound() {
  return <div className="px-5 py-32 text-center"><h1 className="font-serif text-5xl">Page introuvable</h1><Link href="/" className="mt-6 inline-block text-gold underline">Retour à l&apos;accueil</Link></div>;
}
