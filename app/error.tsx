"use client";
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return <div className="px-5 py-32 text-center"><h1 className="font-serif text-4xl">Une erreur est survenue</h1><button onClick={reset} className="mt-6 rounded-full bg-gold px-6 py-3 text-ink">Réessayer</button></div>;
}
