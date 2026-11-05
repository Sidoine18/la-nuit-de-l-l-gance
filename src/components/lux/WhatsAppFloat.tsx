import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const url = buildWhatsAppUrl("Bonjour mcEvents, je souhaite des informations sur La Nuit de l'Élégance.");
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label="Écrire sur WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-gold-gradient text-primary-foreground shadow-lg transition-transform hover:-translate-y-1">
      <MessageCircle size={24} />
    </a>
  );
}
