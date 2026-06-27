import Sparkles from "./Sparkles";
import { AVIS, SITE } from "@/lib/content";

function Stars({ note }: { note: number }) {
  return (
    <span className="text-base text-amber-400" aria-label={`${note} sur 5`}>
      {"★".repeat(note)}
      <span className="text-amber-400/30">{"★".repeat(5 - note)}</span>
    </span>
  );
}

export default function Testimonials() {
  return (
    <section
      id="avis"
      className="bg-peacock-gradient relative overflow-hidden px-5 py-20 text-white sm:py-28"
    >
      <Sparkles />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-peacock-100">
            Témoignages
          </p>
          <h2 className="heading-script mt-3 text-4xl text-shimmer sm:text-5xl">
            Ce qu&apos;ils en disent
          </h2>
          <p className="mt-4 flex items-center justify-center gap-2 text-peacock-50/90">
            <span className="text-xl text-amber-400">★★★★★</span>
            <span>Avis vérifiés sur Google</span>
          </p>
        </div>

        <div className="mt-12 columns-1 gap-5 *:mb-5 sm:columns-2 lg:columns-3">
          {AVIS.map((a, i) => (
            <figure
              key={i}
              className="glass-card break-inside-avoid rounded-3xl bg-white/95 p-6 text-ink shadow-soft"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-peacock-gradient text-sm font-bold text-white">
                    {a.nom
                      .split(" ")
                      .map((m) => m[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </span>
                  <div>
                    <figcaption className="font-semibold text-peacock-800">
                      {a.nom}
                    </figcaption>
                    <p className="text-xs text-ink-soft/70">{a.date}</p>
                  </div>
                </div>
                <Stars note={a.note} />
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-ink-soft">
                {a.texte}
              </blockquote>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={SITE.googleStJorioz}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-peacock-800 shadow-bubble transition-transform hover:scale-105"
          >
            ⭐ Avis Google — Saint-Jorioz
          </a>
          <a
            href={SITE.googleAnnecy}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            ⭐ Avis Google — Annecy
          </a>
        </div>
      </div>
    </section>
  );
}
