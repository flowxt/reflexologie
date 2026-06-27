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
        <div className="animate-float-slow w-[280px] drop-shadow-[0_8px_30px_rgba(0,0,0,0.25)] sm:w-[420px] md:w-[500px]">
          <Image
            src="/photo/Logo-sansfond.png"
            alt="Réflexologie — Delphine Eminet"
            width={2440}
            height={1069}
            priority
            className="h-auto w-full filter-[brightness(0)_invert(1)]"
          />
        </div>

        <p className="heading-script mt-8 max-w-2xl text-3xl text-shimmer sm:text-4xl">
          {SITE.baseline}
        </p>

        <div className="mt-5 max-w-xl space-y-2 text-base leading-relaxed text-peacock-50/90 sm:text-lg">
          <p>
            Sage-femme de formation initiale, maintenant réflexologue… mais pas
            que ✨
          </p>
          <p className="font-semibold text-white">
            Du <span className="text-shimmer">SOIN</span> au{" "}
            <span className="text-shimmer">PRENDRE SOIN</span> ✨
          </p>
          <p>
            J&apos;accompagne le{" "}
            <strong className="font-semibold text-white">stress</strong>,
            l&apos;<strong className="font-semibold text-white">anxiété</strong>{" "}
            et les{" "}
            <strong className="font-semibold text-white">angoisses</strong> :
            leurs conséquences physiques et émotionnelles.
          </p>
          <p>
            Spécialisée en{" "}
            <strong className="font-semibold text-white">
              neuro-réflexologie
            </strong>
            ,{" "}
            <strong className="font-semibold text-white">
              néo-réflexologie
            </strong>{" "}
            et suivi d&apos;
            <strong className="font-semibold text-white">endométriose</strong>.
          </p>
        </div>

        <div className="mt-5 flex flex-col items-center gap-1">
          <p className="text-lg font-semibold text-white">De 0 à 110 ans.</p>
          <LocationPins />
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/reservation"
            className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-peacock-800 shadow-bubble transition-transform hover:scale-105"
          >
            Réserver une séance
          </Link>
          <Link
            href="/#parcours"
            className="rounded-full border border-white/60 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Découvrir mon univers
          </Link>
        </div>
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
