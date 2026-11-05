/**
 * ============================================================
 *  CATÉGORIES DE TICKETS ET TARIFS
 * ============================================================
 *  price : laissez null tant que le tarif n'est pas officiel
 *          (le site affiche « Tarif à venir »).
 *  Exemple de prix : "25 000 FCFA"
 *  Les catégories ci-dessous sont des intitulés génériques À CONFIRMER :
 *  renommez-les, supprimez-les ou ajoutez-en selon l'offre officielle.
 */

export type Ticket = {
  id: string;
  name: string;
  price: string | null;
  description: string | null;
  perks: string[];
};

export const tickets: Ticket[] = [
  { id: "standard", name: "Standard", price: null, description: null, perks: [] },
  { id: "vip", name: "VIP", price: null, description: null, perks: [] },
  { id: "table", name: "Table", price: null, description: null, perks: [] },
];

/** Conditions de réservation affichées sur /prochaine-edition et /reservation. */
export const reservationConditions = [
  "La demande de réservation est transmise par WhatsApp à l'équipe de mcEvents.",
  "Elle ne constitue pas une confirmation définitive.",
  "La réservation est confirmée après validation par l'organisation.",
  "Aucun paiement n'est effectué sur ce site.",
];

export const RESERVATION_DISCLAIMER =
  "Votre demande de réservation sera transmise à l'équipe de mcEvents. Elle ne constitue pas une confirmation définitive. La réservation sera confirmée après validation par l'organisation.";
