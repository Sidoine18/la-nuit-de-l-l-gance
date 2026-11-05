/**
 * ============================================================
 *  ARCHIVES — TOUTES LES ÉDITIONS
 * ============================================================
 *  Une édition = un bloc { ... } dans la liste ci-dessous.
 *  Pour ajouter une édition : copiez le dernier bloc, collez-le à la fin,
 *  puis modifiez les valeurs. Voir GUIDE_AJOUT_EDITION.md.
 *
 *  RÈGLE : n'écrivez que des informations confirmées.
 *  Une valeur inconnue = null (ou liste vide []). Le site affichera
 *  alors automatiquement « À confirmer » / « Bientôt disponible ».
 *
 *  Images : rangez-les dans  public/images/editions/edition-XX/
 *  et indiquez le chemin qui commence par  /images/...
 */

export type Photo = {
  src: string; // ex : "/images/editions/edition-05/photos/defile-01.jpg"
  alt: string; // description courte de la photo (accessibilité + SEO)
  category?: "defile" | "ceremonie" | "invites" | "coulisses" | "scene" | "ambiance";
};

export type Video = {
  title: string;
  /** Lien YouTube (https://www.youtube.com/watch?v=XXXX ou https://youtu.be/XXXX) */
  youtubeUrl: string;
};

export type Edition = {
  /** Identifiant utilisé dans l'adresse : /editions/edition-01 */
  slug: string;
  number: number;
  /** Année, si connue. */
  year: number | null;
  /** Date au format lisible, uniquement si officiellement confirmée. */
  date: string | null;
  /** Date au format AAAA-MM-JJ (pour Google), uniquement si confirmée. */
  dateISO: string | null;
  venue: string | null;
  city: string | null;
  theme: string | null;
  /** Accroche courte (affichée sur les cartes). */
  tagline: string | null;
  /** Présentation (un paragraphe par élément de la liste). */
  summary: string[];
  /** Remarque sur une information incertaine, affichée en encadré. */
  note?: string | null;
  /** Affiches officielles (la première est l'affiche principale). */
  posters: { src: string; alt: string }[];
  highlights: string[];
  photos: Photo[];
  videos: Video[];
  /** Personnalités distinguées : uniquement des noms confirmés. */
  honorees: { name: string; distinction?: string }[];
  /** Identifiants des partenaires (voir src/content/partners.ts). */
  partnerIds: string[];
  /** Texte récapitulatif publié après l'événement. */
  recap: string | null;
};

export const editions: Edition[] = [
  {
    slug: "edition-01",
    number: 1,
    year: 2020,
    date: null,
    dateISO: null,
    venue: null,
    city: "Dassa",
    theme: "Le Gala du Nouvel An",
    tagline: "La première soirée, sous le signe du Nouvel An.",
    summary: [
      "La toute première édition de La Nuit de l'Élégance a été présentée par MC Events comme « Le Gala du Nouvel An », à Dassa, en 2020, selon l'affiche officielle.",
    ],
    posters: [
      {
        src: "/images/editions/edition-01/affiche.jpg",
        alt: "Affiche officielle de la 1ère édition de La Nuit de l'Élégance, Le Gala du Nouvel An, Dassa 2020",
      },
    ],
    highlights: [],
    photos: [],
    videos: [],
    honorees: [],
    partnerIds: [],
    recap: null,
  },
  {
    slug: "edition-02",
    number: 2,
    year: null,
    date: null,
    dateISO: null,
    venue: null,
    city: null,
    theme: null,
    tagline: "L'identité au nœud papillon doré.",
    summary: [
      "La 2ème édition a été annoncée avec une identité visuelle inspirée du smoking et du nœud papillon, symbole de l'élégance de la soirée.",
    ],
    posters: [
      {
        src: "/images/editions/edition-02/affiche.jpg",
        alt: "Visuel officiel de la 2ème édition de La Nuit de l'Élégance, logo doré au nœud papillon",
      },
    ],
    highlights: [],
    photos: [],
    videos: [],
    honorees: [],
    partnerIds: [],
    recap: null,
  },
  {
    slug: "edition-03",
    number: 3,
    year: null,
    date: null,
    dateISO: null,
    venue: null,
    city: null,
    theme: null,
    tagline: "Lumières d'or et nuit profonde.",
    summary: ["La 3ème édition a été annoncée par MC Event sous le signe des lumières dorées."],
    posters: [
      {
        src: "/images/editions/edition-03/affiche.jpg",
        alt: "Visuel officiel de l'édition 3 de La Nuit de l'Élégance, lettres dorées sur fond noir",
      },
    ],
    highlights: [],
    photos: [],
    videos: [],
    honorees: [],
    partnerIds: [],
    recap: null,
  },
  {
    slug: "edition-04",
    number: 4,
    year: null,
    date: null,
    dateISO: null,
    venue: null,
    city: null,
    theme: null,
    tagline: "L'élégance en lettres manuscrites.",
    summary: ["La 4ème édition a été annoncée avec une calligraphie raffinée sur fond de lumières ambrées."],
    posters: [
      {
        src: "/images/editions/edition-04/affiche.jpg",
        alt: "Visuel officiel de la 4ème édition de La Nuit de l'Élégance, calligraphie blanche sur fond ambré",
      },
    ],
    highlights: [],
    photos: [],
    videos: [],
    honorees: [],
    partnerIds: [],
    recap: null,
  },
  {
    slug: "edition-05",
    number: 5,
    year: 2025,
    date: "04 janvier 2025",
    dateISO: "2025-01-04",
    venue: null,
    city: null,
    theme: null,
    tagline: "Save the date : le rideau rouge se lève.",
    summary: ["La 5ème édition a été annoncée par mcEvents à travers deux visuels « Save the date »."],
    note: null,
    posters: [
      {
        src: "/images/editions/edition-05/affiche.jpg",
        alt: "Visuel Save the date de l'édition 5 de La Nuit de l'Élégance mentionnant le 04 janvier 2025",
      },
      {
        src: "/images/editions/edition-05/affiche-02.jpg",
        alt: "Visuel Save the date de l'édition 05 de La Nuit de l'Élégance mentionnant le 03 janvier 2026, rideau rouge",
      },
    ],
    highlights: [],
    photos: [],
    videos: [],
    honorees: [],
    partnerIds: [],
    recap: null,
  },
  {
    slug: "edition-06",
    number: 6,
    year: null,
    date: null,
    dateISO: null,
    venue: null,
    city: null,
    theme: null,
    tagline: "Le Prestige revient…",
    summary: [
      "mcEvents annonce le retour de La Nuit de l'Élégance pour une 6ème édition. Le Prestige revient.",
      "La date, le lieu et le programme seront communiqués officiellement par l'organisation.",
    ],
    posters: [
      {
        src: "/images/editions/edition-06/affiche.jpg",
        alt: "Visuel officiel de la 6ème édition de La Nuit de l'Élégance, Le Prestige revient, rideau rouge",
      },
    ],
    highlights: [],
    photos: [],
    videos: [],
    honorees: [],
    partnerIds: [],
    recap: null,
  },
];

/** Numéro de l'édition à venir (affichée sur /prochaine-edition). */
export const NEXT_EDITION_NUMBER = 6;

export const sortedEditions = [...editions].sort((a, b) => a.number - b.number);
export const getEdition = (slug: string) => editions.find((e) => e.slug === slug);
export const nextEdition = editions.find((e) => e.number === NEXT_EDITION_NUMBER);
export const pastEditions = sortedEditions.filter((e) => e.number < NEXT_EDITION_NUMBER);

/** "1ère", "2ème"… */
export const ordinal = (n: number) => (n === 1 ? "1ère" : `${n}ème`);
export const pad = (n: number) => String(n).padStart(2, "0");
