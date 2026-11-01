// ============ INFORMATIONS GÉNÉRALES (fichier à modifier en premier) ============
export const site = {
  name: "La Nuit de l'Élégance",
  organizer: "mcEvents",
  url: "https://nuitdelelegance.example", // À COMPLÉTER : votre nom de domaine réel (avec https://)
  // WhatsApp : format international, sans espaces ni "+". À CONFIRMER avec mcEvents.
  whatsapp: "2290196124196",
  phoneDisplay: "+229 01 96 12 41 96",
  email: "", // À COMPLÉTER (laisser vide = non affiché)
  address: "", // À COMPLÉTER (laisser vide = non affiché)
  // Clé gratuite sur https://web3forms.com (voir GUIDE_CONFIGURATION.md)
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",
  nav: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/a-propos" },
    { label: "Prochaine édition", href: "/prochaine-edition" },
    { label: "Éditions", href: "/editions" },
    { label: "Galerie", href: "/galerie" },
    { label: "Partenaires", href: "/partenaires" },
    { label: "Réservation", href: "/reservation" },
    { label: "Contact", href: "/contact" },
  ],
};
