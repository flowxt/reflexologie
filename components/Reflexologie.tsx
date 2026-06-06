import {
  BIENFAITS,
  CADRE,
  REFLEXO_INTRO,
  SYSTEMES,
} from "@/lib/content";

export default function Reflexologie() {
  return (
    <section
      id="reflexologie"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-peacock-500">
          Comprendre
        </p>
        <h2 className="mt-3 heading-script text-4xl text-peacock-gradient sm:text-5xl">
          Qu&apos;est-ce que la réflexologie ?
        </h2>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {REFLEXO_INTRO.map((p, i) => (
          <div
            key={i}
            className="glass-card rounded-3xl p-7 text-ink-soft shadow-soft"
          >
            <span className="heading-script text-3xl text-emerald-accent">
              {i + 1}
            </span>
            <p className="mt-2 leading-relaxed">{p}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Bienfaits */}
        <div className="bg-peacock-gradient relative overflow-hidden rounded-3xl p-8 text-white shadow-soft">
          <h3 className="heading-script text-3xl text-shimmer">Les bienfaits</h3>
          <ul className="mt-5 space-y-3">
            {BIENFAITS.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs">
                  ✦
                </span>
                <span className="text-peacock-50/95">{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-2xl bg-white/10 p-4 text-sm text-peacock-50/90">
            C&apos;est la <strong>fréquence</strong> et la{" "}
            <strong>régularité</strong> des séances qui renforcent durablement
            les effets positifs.
          </p>
        </div>

        {/* Systèmes + cadre */}
        <div className="flex flex-col gap-6">
          <div className="glass-card rounded-3xl p-7 shadow-soft">
            <h3 className="text-lg font-bold text-peacock-800">
              J&apos;agis sur tous les systèmes du corps
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {SYSTEMES.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-peacock-50 px-3 py-1.5 text-sm font-medium text-peacock-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-emerald-accent/30 bg-peacock-50/60 p-5">
              <h4 className="text-sm font-bold uppercase tracking-wide text-peacock-700">
                Le réflexologue
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                {CADRE.fait.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-emerald-accent">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-white/60 p-5">
              <h4 className="text-sm font-bold uppercase tracking-wide text-ink-soft">
                En revanche, il ne…
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                {CADRE.faitPas.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-ink-soft/50">•</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
