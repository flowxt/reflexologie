import type { Metadata } from "next";
import { Quicksand, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE } from "@/lib/content";

const quicksand = Quicksand({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Réflexologue à Annecy & Saint-Jorioz — Delphine Eminet | Réservation en ligne",
    template: "%s — Delphine Eminet, réflexologue à Annecy",
  },
  description:
    "Réflexologie plantaire & palmaire à Annecy et Saint-Jorioz par Delphine Eminet, sage-femme de formation. Stress, sommeil, anxiété, douleurs : 1ʳᵉ séance 1h30 à 75 €. Avis Google 5★. Réservez votre créneau en ligne.",
  keywords: [
    "réflexologie",
    "réflexologue",
    "Saint-Jorioz",
    "Annecy",
    "stress",
    "anxiété",
    "grossesse",
    "endométriose",
    "Delphine Eminet",
    "haute-savoie",
  ],
  authors: [{ name: "Delphine Eminet" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Réflexologue à Annecy & Saint-Jorioz — Delphine Eminet",
    description:
      "Stress, sommeil, anxiété, douleurs : réflexologie plantaire & palmaire par une sage-femme de formation. 1ʳᵉ séance 1h30 à 75 €. Réservation en ligne.",
    url: SITE.url,
    siteName: "Delphine Eminet — Réflexologue",
    type: "website",
    locale: "fr_FR",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
    name: "Delphine Eminet — Réflexologue",
    description:
      "Réflexologie plantaire & palmaire à Annecy et Saint-Jorioz, pour la gestion du stress, de l'anxiété, du sommeil et des douleurs.",
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/photo/delphine-new.jpeg`,
    priceRange: "25 € - 75 €",
    areaServed: ["Annecy", "Saint-Jorioz", "Haute-Savoie"],
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Annecy",
        addressRegion: "Haute-Savoie",
        addressCountry: "FR",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Saint-Jorioz",
        addressRegion: "Haute-Savoie",
        addressCountry: "FR",
      },
    ],
    potentialAction: {
      "@type": "ReserveAction",
      target: `${SITE.url}/reservation`,
      name: "Réserver une séance de réflexologie",
    },
    sameAs: [SITE.instagram, SITE.facebook],
  };

  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${quicksand.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-shell text-ink font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
