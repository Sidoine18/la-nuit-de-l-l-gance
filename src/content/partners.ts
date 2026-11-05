/**
 * ============================================================
 *  PARTENAIRES ET SPONSORS
 * ============================================================
 *  Ajoutez UNIQUEMENT des partenaires réels et confirmés.
 *  Logo : déposez le fichier dans public/images/partenaires/
 *
 *  Exemple :
 *  {
 *    id: "nom-partenaire",
 *    name: "Nom du partenaire",
 *    category: "sponsor-officiel",
 *    logo: "/images/partenaires/nom-partenaire.png",
 *    url: "https://site-du-partenaire.com",
 *    editions: [5, 6],
 *  },
 */

export const partnerCategories = {
  "sponsor-officiel": "Sponsor officiel",
  partenaire: "Partenaire",
  "partenaire-numerique": "Partenaire numérique",
  "partenaire-media": "Partenaire média",
  prestataire: "Prestataire",
} as const;

export type Partner = {
  id: string;
  name: string;
  category: keyof typeof partnerCategories;
  logo: string | null;
  url: string | null;
  editions: number[];
};

export const partners: Partner[] = [
  {
    id: "konfortech-benin",
    name: "Konfortech Bénin",
    category: "partenaire-numerique",
    logo: "/images/konfortech.jpg",
    url: "https://konfortechbenin.online",
    editions: [6],
  },
];
