"use client";

import { useState } from "react";
import { TARIFS, type TarifLigne } from "@/lib/content";

function LigneRow({ l }: { l: TarifLigne }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-peacock-100 py-3 last:border-0">
      <div>
        <p className="font-medium text-ink">{l.label}</p>
        {l.note && <p className="text-sm text-ink-soft/80">{l.note}</p>}
      </div>
      <p className="shrink-0 font-bold text-peacock-600">{l.prix}</p>
    </div>
  );
}

const TABS = [
  { id: "plantaire", ...TARIFS.plantaire },
  { id: "palmaire", ...TARIFS.palmaire },
] as const;

export default function Tarifs() {
  const [tab, setTab] = useState<"plantaire" | "palmaire">("plantaire");
  const current = TABS.find((t) => t.id === tab)!;
  const casList =
    tab === "plantaire"
      ? TARIFS.casParticuliers.plantaire
      : TARIFS.casParticuliers.palmaire;

  return (
    <section
      id="tarifs"
      className="mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-peacock-500">
          Tarifs
        </p>
        <h2 className="mt-3 heading-script text-4xl text-peacock-gradient sm:text-5xl">
          Des séances pour tous
        </h2>
        <p className="mt-4 text-ink-soft">{TARIFS.intro}</p>
      </div>

      {/* onglets */}
      <div className="mx-auto mt-10 flex w-fit gap-1 rounded-full bg-peacock-50 p-1.5">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
              tab === t.id
                ? "bg-peacock-gradient text-white shadow-bubble"
                : "text-peacock-700 hover:text-peacock-900"
            }`}
          >
            <span className="mr-1.5">{t.icone}</span>
            {t.titre}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* première séance — mise en avant */}
        <div className="bg-peacock-gradient relative overflow-hidden rounded-3xl p-8 text-white shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-wide text-peacock-100">
            Pour commencer
          </p>
          <h3 className="mt-2 heading-script text-3xl text-shimmer">
            {current.premiere.titre}
          </h3>
          <p className="mt-3 text-4xl font-bold">{current.premiere.prix}</p>
          <ul className="mt-5 space-y-2 text-peacock-50/95">
            {current.premiere.detail.map((d, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 text-shimmer">✦</span>
                {d}
              </li>
            ))}
          </ul>
        </div>

        {/* séances suivantes */}
        <div className="glass-card rounded-3xl p-8 shadow-soft">
          <h3 className="text-xl font-bold text-peacock-800">
            Séances suivantes
          </h3>
          <div className="mt-3">
            {current.suivantes.map((l, i) => (
              <LigneRow key={i} l={l} />
            ))}
          </div>
        </div>

        {/* abonnements */}
        <div className="glass-card rounded-3xl p-8 shadow-soft lg:col-span-2">
          <h3 className="text-xl font-bold text-peacock-800">
            🔵 Abonnements
          </h3>
          <p className="mt-1 text-sm text-ink-soft/80">
            La 1ʳᵉ séance « Faisons connaissance » n&apos;est pas intégrable aux
            abonnements. Réglables avant le démarrage des séances.
          </p>
          <div className="mt-4 grid gap-x-10 sm:grid-cols-2">
            {current.abonnements.map((l, i) => (
              <LigneRow key={i} l={l} />
            ))}
          </div>
        </div>

        {/* cas particuliers */}
        <div className="rounded-3xl border border-emerald-accent/30 bg-peacock-50/50 p-8 lg:col-span-2">
          <h3 className="text-xl font-bold text-peacock-800">
            {TARIFS.casParticuliers.icone} {TARIFS.casParticuliers.titre}
          </h3>
          <div className="mt-4 grid gap-x-10 sm:grid-cols-2">
            {casList.map((l, i) => (
              <LigneRow key={i} l={l} />
            ))}
          </div>
          <p className="mt-4 text-sm text-ink-soft">
            {TARIFS.casParticuliers.note}
          </p>
        </div>
      </div>

      {/* infos pratiques */}
      <ul className="mx-auto mt-10 grid max-w-3xl gap-3 text-sm text-ink-soft sm:grid-cols-2">
        {TARIFS.infos.map((info, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-emerald-accent">•</span>
            {info}
          </li>
        ))}
      </ul>
    </section>
  );
}
