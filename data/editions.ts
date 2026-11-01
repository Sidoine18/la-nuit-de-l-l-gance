// Une entrée par édition. null = information non confirmée (affichée "À compléter").
export type Edition = { n: number; slug: string; year: number | null; date: string | null; place: string | null; theme: string | null; poster: string; note: string };
export const editions: Edition[] = [
  { n: 1, slug: "edition-01", year: 2020, date: null, place: "Dassa", theme: null, poster: "/editions/edition-01/affiche.jpg", note: "Gala du Nouvel An, 1re édition (affiche : Dassa 2020)." },
  { n: 2, slug: "edition-02", year: null, date: null, place: null, theme: null, poster: "/editions/edition-02/affiche.jpg", note: "" },
  { n: 3, slug: "edition-03", year: null, date: null, place: null, theme: null, poster: "/editions/edition-03/affiche.jpg", note: "" },
  { n: 4, slug: "edition-04", year: 2024, date: "2024-01-06", place: null, theme: null, poster: "/editions/edition-04/affiche.jpg", note: "" },
  { n: 5, slug: "edition-05", year: 2026, date: "2026-01-03", place: null, theme: null, poster: "/editions/edition-05/affiche.jpg", note: "" },
  { n: 6, slug: "edition-06", year: null, date: null, place: null, theme: null, poster: "/editions/edition-06/affiche.jpg", note: "Le Prestige revient…" },
];
export const nextEdition = editions[5]; // À changer quand une 7e édition sera annoncée
export const fmtDate = (d: string | null) => d ? new Date(d + "T12:00:00").toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }) : "DATE À VENIR";
