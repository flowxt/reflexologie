"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CABINETS, SITE } from "@/lib/content";
import ReserveButton from "./ReserveButton";

export default function Reservation() {
  // Le calendrier s'affiche directement : chaque clic supplémentaire fait
  // perdre des réservations. On garde un état pour pouvoir le masquer si besoin.
  const [show] = useState(true);

  useEffect(() => {
    if (!show) return;
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#0f7d86" },
          dark: { "cal-brand": "#18c39a" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [show]);

  return (
    <section
      id="reservation"
      className="relative scroll-mt-24 bg-linear-to-b from-white to-peacock-50 px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-peacock-500">
            Réserver
          </p>
          <h2 className="mt-3 heading-script text-4xl text-peacock-gradient sm:text-5xl">
            Prenons rendez-vous
          </h2>
          <p className="mt-4 text-ink-soft">
            Choisissez votre créneau en ligne, simplement et à toute heure.
          </p>
        </div>

        {/* Cabinets — grille 3 colonnes sur grand écran */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CABINETS.map((c) => {
            const content = (
              <>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-peacock-gradient text-xl text-white">
                  📍
                </span>
                <div>
                  <h3 className="text-lg font-bold text-peacock-800">
                    {c.ville}
                  </h3>
                  <p className="text-sm text-ink-soft">{c.detail}</p>
                  <p className="mt-1 text-sm font-medium text-emerald-accent">
                    {c.horaires}
                  </p>
                  {c.contactRequired && (
                    <p className="mt-2 text-sm font-semibold text-peacock-700">
                      Écrivez-moi via le formulaire de contact →
                    </p>
                  )}
                </div>
              </>
            );

            return c.contactRequired ? (
              <Link
                key={c.ville}
                href="/contact"
                className="glass-card flex items-start gap-4 rounded-3xl p-6 shadow-soft transition-transform hover:scale-[1.02]"
              >
                {content}
              </Link>
            ) : (
              <div
                key={c.ville}
                className="glass-card flex items-start gap-4 rounded-3xl p-6 shadow-soft"
              >
                {content}
              </div>
            );
          })}
        </div>

        {/* Carte cadeau */}
        <div className="mt-6 flex flex-col items-center gap-4 rounded-3xl border border-amber-200 bg-linear-to-br from-amber-50 via-white to-peacock-50 p-6 text-center shadow-soft sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="text-lg font-bold text-peacock-800">
              🎁 Une carte cadeau ?
            </h3>
            <p className="mt-1 text-sm text-ink-soft">
              Offrez une séance à un proche, ou réservez la vôtre si vous en
              avez déjà reçu une.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300 bg-white px-5 py-2.5 text-sm font-semibold text-amber-700 shadow-bubble transition-transform hover:scale-105"
            >
              <span aria-hidden>🎁</span>
              Réserver un bon cadeau
            </Link>
            <ReserveButton
              label="Réserver une séance suite à bon cadeau"
              calLink={SITE.calLinkPlantaireUnite}
            />
          </div>
        </div>

        {/* Annulation en rouge, bien visible */}
        <p className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-3 text-center text-sm font-semibold text-red-600">
          🚨 Toute annulation doit être signalée au moins 48h à l&apos;avance ;
          passé ce délai, la séance reste due.
        </p>

        {/* Comment ça se passe — 3 étapes pour lever les freins */}
        <ol className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            {
              n: "1",
              t: "Je choisis mon créneau",
              d: "Directement dans le calendrier ci-dessous, à toute heure.",
            },
            {
              n: "2",
              t: "Delphine me contacte",
              d: "Un échange avant la séance pour préparer ensemble votre accompagnement.",
            },
            {
              n: "3",
              t: "Je profite de ma séance",
              d: "1h30 pour la première : écoute, pratique manuelle et massage bien-être.",
            },
          ].map((s) => (
            <li
              key={s.n}
              className="glass-card flex items-start gap-3 rounded-2xl p-5 shadow-soft"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-peacock-gradient text-sm font-bold text-white">
                {s.n}
              </span>
              <div>
                <p className="font-semibold text-peacock-800">{s.t}</p>
                <p className="mt-1 text-sm text-ink-soft">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Embed cal.com — affiché directement */}
        <div
          id="calendrier"
          className="mt-8 scroll-mt-24 overflow-hidden rounded-3xl bg-white p-2 shadow-soft"
        >
          <div className="bg-peacock-gradient flex flex-col items-center gap-1 rounded-2xl px-6 py-5 text-center text-white">
            <h3 className="heading-script text-3xl text-shimmer">
              Mes disponibilités
            </h3>
            <p className="text-sm text-peacock-50/90">
              1ʳᵉ séance « Faisons connaissance » — 1h30 — 75 €. Choisissez
              votre créneau, la confirmation est immédiate.
            </p>
          </div>
          {show && (
            <div className="mt-2 h-[640px] w-full overflow-auto rounded-2xl">
              <Cal
                calLink={SITE.calLinkPlantaireDecouverte}
                calOrigin={SITE.calOrigin}
                style={{ width: "100%", height: "100%" }}
                config={{ layout: "month_view" }}
              />
            </div>
          )}
        </div>

        <p className="mt-6 text-center text-sm text-ink-soft">
          Une question avant de réserver ?{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="font-semibold text-peacock-600 underline-offset-2 hover:underline"
          >
            Écrivez-moi
          </a>
          .
        </p>
      </div>
    </section>
  );
}
