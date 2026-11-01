// Médias de la galerie. Ajoutez vos photos dans public/editions/edition-0X/photos/ puis une ligne ici.
export type Media = { id: string; type: "affiche" | "photo" | "video"; edition: number; src?: string; alt: string; embed?: string };
const aff = (n: number): Media => ({ id: `affiche-${n}`, type: "affiche", edition: n, src: `/editions/edition-0${n}/affiche.jpg`, alt: `Affiche de l'édition ${n}` });
export const gallery: Media[] = [aff(1), aff(2), aff(3), aff(4), aff(5), aff(6)];
// Exemple photo : { id: "e5-01", type: "photo", edition: 5, src: "/editions/edition-05/photos/01.jpg", alt: "Description" }
// Exemple vidéo : { id: "e5-v1", type: "video", edition: 5, embed: "https://www.youtube-nocookie.com/embed/IDENTIFIANT", alt: "Récap édition 5" }
