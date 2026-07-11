import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Delphine Eminet, réflexologue à Saint-Jorioz et Annecy. Questions, demandes particulières et devis personnalisés.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — Delphine Eminet, réflexologue",
    description:
      "Contactez Delphine Eminet, réflexologue à Saint-Jorioz et Annecy.",
    url: "/contact",
    siteName: "Delphine Eminet — Réflexologue",
    type: "website",
    locale: "fr_FR",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Restons en lien"
        subtitle="Une question, une demande particulière ou un devis ? Je vous réponds avec plaisir."
      />
      <Contact />
    </>
  );
}
