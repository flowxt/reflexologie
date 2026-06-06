import Link from "next/link";
import Logo from "./Logo";
import Sparkles from "./Sparkles";
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
        <div className="animate-float-slow text-[60px] drop-shadow-[0_8px_30px_rgba(0,0,0,0.25)] sm:text-[92px] md:text-[112px]">
          <Logo light />
        </div>

        <p className="heading-script mt-8 max-w-xl text-3xl text-shimmer sm:text-4xl">
          {SITE.baseline}
        </p>

        <p className="mt-5 max-w-lg text-base leading-relaxed text-peacock-50/90 sm:text-lg">
          Sage-femme de formation devenue réflexologue, j&apos;accompagne le
          stress, l&apos;anxiété et les angoisses — de 0 à 110 ans — à
          Saint-Jorioz &amp; Annecy.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
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
