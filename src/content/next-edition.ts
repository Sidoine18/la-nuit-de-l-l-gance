/**
 * ============================================================
 *  PROCHAINE ÉDITION — informations détaillées
 * ============================================================
 *  Tant qu'une information n'est pas officielle, laissez null ou [].
 *  Le site affichera « À venir ».
 *  Le compte à rebours n'apparaît QUE si dateISO est rempli
 *  ET confirmed vaut true.
 */

export const nextEditionDetails = {
  confirmed: false,
  /** Date lisible, ex : "Samedi 3 janvier 2027" */
  date: null as string | null,
  /** Date et heure au format AAAA-MM-JJTHH:MM (ex : "2027-01-03T19:00") */
  dateISO: null as string | null,
  venue: null as string | null,
  city: null as string | null,
  theme: null as string | null,
  presentation: [
    "Après cinq éditions, La Nuit de l'Élégance revient pour un nouveau chapitre. mcEvents prépare une 6ème édition placée sous le signe du prestige.",
  ],
  /** Programme : { heure: "19h00", titre: "Accueil des invités" } */
  program: [] as { time: string; title: string; description?: string }[],
  /** Invités confirmés uniquement. */
  guests: [] as { name: string; role?: string }[],
  /** Informations pratiques (tenue, accès, parking…). */
  practical: [] as { label: string; value: string }[],
};
