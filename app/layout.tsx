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

const SITE_URL = "https://reflexologue-annecy.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Delphine Eminet — Réflexologie à Saint-Jorioz & Annecy",
    template: "%s — Delphine Eminet, réflexologue",
  },
  description:
    "Delphine Eminet, sage-femme de formation devenue réflexologue. Réflexologie plantaire & palmaire à Saint-Jorioz et Annecy. Gestion du stress, de l'anxiété et des angoisses, de 0 à 110 ans.",
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
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Delphine Eminet — Réflexologie",
    description:
      "Réflexologie plantaire & palmaire à Saint-Jorioz et Annecy. Prendre soin, de 0 à 110 ans.",
    url: SITE_URL,
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
    "@type": "LocalBusiness",
    name: "Delphine Eminet — Réflexologue",
    description:
      "Réflexologie plantaire & palmaire à Saint-Jorioz et Annecy, pour la gestion du stress, de l'anxiété et des angoisses.",
    url: SITE_URL,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE_URL}/element/delphine.jpg`,
    areaServed: ["Saint-Jorioz", "Annecy", "Haute-Savoie"],
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
