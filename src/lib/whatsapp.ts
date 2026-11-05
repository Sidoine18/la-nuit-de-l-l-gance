import { whatsapp } from "@/config/site";

export type ReservationInput = {
  fullName: string;
  phone: string;
  ticket: string;
  quantity: number;
  notes?: string;
  edition?: string;
};

export function buildReservationMessage(r: ReservationInput): string {
  const lines = [
    "Bonjour mcEvents,",
    `Je souhaite faire une demande de réservation pour La Nuit de l'Élégance${r.edition ? ` (${r.edition})` : ""}.`,
    "",
    `• Nom et prénom : ${r.fullName.trim()}`,
    `• Téléphone : ${r.phone.trim()}`,
    `• Catégorie de ticket : ${r.ticket}`,
    `• Quantité : ${r.quantity}`,
  ];
  if (r.notes && r.notes.trim()) lines.push(`• Informations complémentaires : ${r.notes.trim()}`);
  lines.push("", "Merci de me confirmer la disponibilité.");
  return lines.join("\n");
}

export function buildWhatsAppUrl(message: string, number: string = whatsapp.number): string {
  const digits = number.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
