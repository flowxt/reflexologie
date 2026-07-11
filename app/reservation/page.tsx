import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Tarifs from "@/components/Tarifs";
import Reservation from "@/components/Reservation";

export const metadata: Metadata = {
  title: "Tarifs & Réservation",
  description:
    "Tarifs, formules et abonnements de réflexologie plantaire et palmaire. Réservez votre séance en ligne à Saint-Jorioz ou Annecy.",
  alternates: {
    canonical: "/reservation",
  },
  openGraph: {
    title: "Tarifs & Réservation — Delphine Eminet, réflexologue",
    description:
      "Tarifs, formules et abonnements de réflexologie plantaire et palmaire. Réservez en ligne.",
    url: "/reservation",
    siteName: "Delphine Eminet — Réflexologue",
    type: "website",
    locale: "fr_FR",
  },
};

export default function ReservationPage() {
  return (
    <>
      <PageBanner
        eyebrow="Tarifs & Formules"
        title="Tarifs & Réservation"
        subtitle="Des séances et des formules pour tous. Réservez en ligne en quelques clics."
      />
      <Tarifs />
      <Reservation />
    </>
  );
}
