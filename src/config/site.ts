/**
 * ============================================================
 *  CONFIGURATION GÉNÉRALE DU SITE — La Nuit de l'Élégance
 * ============================================================
 *  Ce fichier regroupe toutes les informations "globales" :
 *  nom, coordonnées, WhatsApp, réseaux sociaux, Web3Forms, menus.
 *  Modifiez uniquement le texte entre guillemets "...".
 *  Voir GUIDE_CONFIGURATION.md pour les explications détaillées.
 */

export const site = {
  name: "La Nuit de l'Élégance",
  shortName: "Nuit de l'Élégance",
  tagline: "Le gala du prestige et du raffinement au Bénin",
  description:
    "La Nuit de l'Élégance, le gala de prestige organisé par mcEvents au Bénin : une soirée dédiée à l'élégance, au raffinement, à la culture et aux personnalités qui font rayonner leur environnement.",
  organizer: "mcEvents",
  organizerDescription: "Agence événementielle",
  country: "Bénin",

  /**
   * Adresse publique du site, SANS barre "/" finale.
   * À compléter après la mise en ligne (ex : "https://www.lanuitdelelegance.com").
   * Laissez "" tant que le nom de domaine n'est pas connu.
   */
  url: "https://lanuitdelelegance.com",
};

/** Coordonnées officielles affichées sur le site. */
export const contact = {
  /** Numéro affiché (format lisible). */
  phoneDisplay: "+229 01 96 12 41 96",
  /** Numéro pour les liens d'appel (format international, sans espaces). */
  phoneLink: "+2290196124196",
  /** Adresse e-mail officielle — À COMPLÉTER. Laissez "" si inconnue. */
  email: "mcevents902@gmail.com",
  /** Ville / adresse — À COMPLÉTER. Laissez "" si inconnue. */
  address: "",
  city: "Bénin",
};

/**
 * Numéro WhatsApp de réservation.
 * Format international, chiffres uniquement, SANS "+", SANS espaces.
 * Exemple : "22996124196"
 */
export const whatsapp = {
  number: "2290196124196",
};

/** Réseaux sociaux. Laissez "" pour masquer un réseau. */
export const social = {
  facebook: "https://www.facebook.com/profile.php?id=100064104337807",
  instagram: "",
  tiktok: "",
  youtube: "",
};

/**
 * Web3Forms — clé d'accès ("Access Key").
 * Obtenez-la gratuitement sur https://web3forms.com avec l'adresse e-mail
 * qui doit recevoir les messages, puis collez-la ci-dessous.
 * Tant qu'elle est vide, les formulaires affichent un message
 * "formulaire en cours de configuration" et n'envoient rien.
 */
export const web3forms = {
  accessKey: "bf026e1c-1c66-4cef-851d-cc914fe1500f",
  endpoint: "https://api.web3forms.com/submit",
};

/** Menu principal (en-tête). */
export const mainNav = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/a-propos" },
  { label: "Prochaine édition", to: "/prochaine-edition" },
  { label: "Éditions", to: "/editions" },
  { label: "Galerie", to: "/galerie" },
  { label: "Partenaires", to: "/partenaires" },
  { label: "Contact", to: "/contact" },
] as const;

/** Colonnes de liens du pied de page. */
export const footerNav = [
  {
    title: "L'événement",
    links: [
      { label: "À propos", to: "/a-propos" },
      { label: "L'organisateur", to: "/a-propos/organisateur" },
      { label: "Prochaine édition", to: "/prochaine-edition" },
      { label: "Toutes les éditions", to: "/editions" },
    ],
  },
  {
    title: "Médias",
    links: [
      { label: "Galerie", to: "/galerie" },
      { label: "Photos", to: "/galerie/photos" },
      { label: "Vidéos", to: "/galerie/videos" },
    ],
  },
  {
    title: "Participer",
    links: [
      { label: "Réserver", to: "/reservation" },
      { label: "Devenir partenaire", to: "/devenir-partenaire" },
      { label: "Sponsoring", to: "/sponsoring" },
      { label: "Demande d'information", to: "/demande-information" },
    ],
  },
  {
    title: "Informations",
    links: [
      { label: "Contact", to: "/contact" },
      { label: "Conditions de réservation", to: "/conditions-de-reservation" },
      { label: "Mentions légales", to: "/mentions-legales" },
      { label: "Confidentialité", to: "/politique-de-confidentialite" },
    ],
  },
] as const;

/** Signature de conception (ne pas supprimer). */
export const credit = {
  label: "KONFORTECH BÉNIN",
  url: "https://konfortechbenin.online",
};
