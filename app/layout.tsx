import type { Metadata } from "next";
import { Quicksand, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: "Delphine Eminet — Réflexologie à Saint-Jorioz & Annecy",
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
  ],
  openGraph: {
    title: "Delphine Eminet — Réflexologie",
    description:
      "Réflexologie plantaire & palmaire à Saint-Jorioz et Annecy. Prendre soin, de 0 à 110 ans.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${quicksand.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-shell text-ink font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
