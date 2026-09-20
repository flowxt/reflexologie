import Link from "next/link";
import Image from "next/image";
import Sparkles from "./Sparkles";
import LocationPins from "./LocationPins";
import { SITE } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-peacock-gradient relative flex min-h-[86svh] items-center justify-center overflow-hidden px-5 py-20 text-white"
    >
      <Sparkles />

      {/* halos lumineux façon reflets sur l'eau */}
      <div className="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-emerald-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-96 w-96 rounded-full bg-peacock-300/30 blur-3xl" />

      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        <div className="animate-float-slow w-[230px] drop-shadow-[0_8px_30px_rgba(0,0,0,0.25)] sm:w-[420px] md:w-[500px]">
          <Image
            src="/photo/Logo-sansfond.png"
            alt="Réflexologie — Delphine Eminet"
            width={2440}
            height={1069}
            priority
            className="h-auto w-full filter-[brightness(0)_invert(1)]"
          />
        </div>

        {/* Promesse claire dès l'arrivée : pour qui, ce que ça change, où */}
        <h1 className="mt-6 max-w-2xl text-2xl font-bold leading-snug text-white sm:mt-8 sm:text-3xl md:text-[2.1rem]">
          Réflexologue à Annecy &amp; Saint-Jorioz&nbsp;: retrouvez{" "}
          <span className="text-shimmer">calme</span>,{" "}
          <span className="text-shimmer">sommeil</span> et{" "}
          <span className="text-shimmer">énergie</span>
        </h1>

        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-peacock-50/95 sm:mt-4 sm:text-lg">
          Stress, anxiété, fatigue, douleurs, troubles du sommeil… Une approche
          douce et précise, par une{" "}
          <span className="font-semibold text-white">
            sage-femme de formation
          </span>{" "}
          devenue réflexologue&nbsp;: du soin au prendre soin ✨
        </p>

        <p className="mt-3 max-w-2xl text-lg font-semibold text-shimmer sm:text-2xl">
          {SITE.baseline}
        </p>

        <div className="mt-5 sm:mt-6">
          <LocationPins />
        </div>

        {/* Repères de confiance : ce que je reçois, combien, comment */}
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-white sm:mt-6 sm:text-sm">
          <li>
            <Link
              href="/#avis"
              className="block rounded-full bg-white/15 px-3.5 py-1.5 backdrop-blur transition-colors hover:bg-white/25"
            >
              <span className="text-amber-300">★★★★★</span> Avis Google
            </Link>
          </li>
          <li className="rounded-full bg-white/15 px-3.5 py-1.5 backdrop-blur">
            1ʳᵉ séance 1h30 — 75 €
          </li>
          <li className="rounded-full bg-white/15 px-3.5 py-1.5 backdrop-blur">
            Réservation en ligne 24h/24
          </li>
          <li className="rounded-full bg-white/15 px-3.5 py-1.5 backdrop-blur">
            De 0 à 110 ans
          </li>
        </ul>

        <div className="mt-6 flex flex-col items-center gap-3 sm:mt-7 sm:flex-row">
          <Link
            href="/reservation"
            className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-peacock-800 shadow-bubble transition-transform hover:scale-105"
          >
            Réserver ma 1ʳᵉ séance
          </Link>
          <Link
            href="/#parcours"
            className="rounded-full border border-white/60 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Découvrir mon univers
          </Link>
        </div>
        <p className="mt-3 text-sm text-peacock-50/85">
          Une question avant de réserver&nbsp;?{" "}
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white underline-offset-4 hover:underline"
          >
            Écrivez-moi sur WhatsApp
          </a>
          .
        </p>
      </div>

      <Link
        href="/#parcours"
        aria-label="Défiler"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70"
      >
        <svg className="h-7 w-7 animate-bounce" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </section>
  );
}
