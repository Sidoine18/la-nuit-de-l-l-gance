import type { Metadata } from "next";
import Section from "@/components/Section";
import ReservationForm from "@/components/ReservationForm";
export const metadata: Metadata = { title: "Réservation", description: "Faites votre demande de réservation pour La Nuit de l'Élégance via WhatsApp." };
export default function Page() { return <Section title="Réservation" intro="Remplissez le formulaire : un message WhatsApp prérempli s'ouvrira vers l'équipe de mcEvents. Aucun paiement en ligne."><ReservationForm /></Section>; }
