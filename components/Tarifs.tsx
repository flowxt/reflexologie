"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, TARIFS, type TarifLigne } from "@/lib/content";
import ReserveButton from "./ReserveButton";

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
  const calLinkDecouverte =
    tab === "plantaire"
      ? SITE.calLinkPlantaireDecouverte
      : SITE.calLinkPalmaireDecouverte;
  const calLinkUnite =
    tab === "plantaire" ? SITE.calLinkPlantaireUnite : SITE.calLinkPalmaireUnite;
  const calLinkUniteOption =
    tab === "plantaire"
      ? SITE.calLinkPlantaireUniteOption
      : SITE.calLinkPalmaireUniteOption;

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
          <div className="mt-4 flex items-center justify-center gap-3 rounded-2xl bg-white/15 px-5 py-4 backdrop-blur">
            <span className="text-3xl font-bold">{current.premiere.duree}</span>
            <span className="text-2xl text-peacock-100">—</span>
            <span className="text-4xl font-bold text-shimmer">
              {current.premiere.prix}
            </span>
          </div>
          <ul className="mt-5 space-y-2 text-peacock-50/95">
            {current.premiere.detail.map((d, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 text-shimmer">✦</span>
                {d}
              </li>
            ))}
          </ul>
          <ReserveButton
            label="Réserver cette séance"
            variant="light"
            calLink={calLinkDecouverte}
            className="mt-6 w-full"
          />
        </div>

        {/* séances à l'unité */}
        <div className="glass-card flex flex-col rounded-3xl p-8 shadow-soft">
          <h3 className="text-xl font-bold text-peacock-800">
            Séances à l&apos;unité
          </h3>
          <div className="mt-3">
            {current.suivantes.map((l, i) => (
              <LigneRow key={i} l={l} />
            ))}
          </div>
          <div className="mt-auto flex flex-wrap justify-center gap-3 pt-6">
            <ReserveButton label="Réserver la séance" calLink={calLinkUnite} />
            <ReserveButton
              label="Réserver la séance + l'option"
              calLink={calLinkUniteOption}
            />
          </div>
        </div>

        {/* abonnements */}
        <div className="glass-card rounded-3xl p-8 shadow-soft lg:col-span-2">
          <h3 className="text-xl font-bold text-peacock-800">
            🔵 Abonnements
          </h3>
          <p className="mt-1 text-sm text-ink-soft/80">
            Les abonnements concernent les séances de suivi : la toute première
            séance « Faisons connaissance » se réserve à part, à l&apos;unité.
            Le règlement s&apos;effectue en une fois au démarrage, ou en
            plusieurs fois si besoin — n&apos;hésitez pas à m&apos;en parler.
          </p>
          <div className="mt-4 grid gap-x-10 sm:grid-cols-2">
            {current.abonnements.map((l, i) => (
              <LigneRow key={i} l={l} />
            ))}
          </div>
        </div>

        {/* carte cadeau */}
        <div className="relative overflow-hidden rounded-3xl border border-amber-200 bg-linear-to-br from-amber-50 via-white to-peacock-50 p-8 shadow-soft lg:col-span-2">
          <h3 className="text-xl font-bold text-peacock-800">
            🎁 Carte cadeau
          </h3>
          <p className="mt-2 text-sm text-ink-soft/90">
            Offrez un vrai moment de bien-être à un proche. Le bon cadeau est
            valable sur une séance à l&apos;unité, au cabinet ou à
            domicile. Vous en avez déjà reçu un ? Réservez votre séance
            directement, en précisant votre bon lors de la prise de
            rendez-vous.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300 bg-white px-6 py-3 text-sm font-semibold text-amber-700 shadow-bubble transition-transform hover:scale-105"
            >
              <span aria-hidden>🎁</span>
              Réserver un bon cadeau
            </Link>
            <ReserveButton
              label="Réserver une séance suite à bon cadeau"
              calLink={calLinkUnite}
            />
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
          <div className="mt-6 flex justify-center">
            <ReserveButton label="Réserver ce suivi" calLink={calLinkUnite} />
          </div>
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
