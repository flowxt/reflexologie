import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Tarifs from "@/components/Tarifs";
import Reservation from "@/components/Reservation";

export const metadata: Metadata = {
  title: "Tarifs & Réservation — Delphine Eminet, réflexologue",
  description:
    "Tarifs, formules et abonnements de réflexologie plantaire et palmaire. Réservez votre séance en ligne à Saint-Jorioz ou Annecy.",
};

export default function ReservationPage() {
  return (
    <>
      <PageBanner
        eyebrow="Tarifs & Formules"
        title="Tarifs & Réservation"
        subtitle="Des séances et des formules pour tous, de 0 à 110 ans. Réservez en ligne en quelques clics."
      />
      <Tarifs />
      <Reservation />
    </>
  );
}
