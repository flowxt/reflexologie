"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CABINETS, SITE } from "@/lib/content";

export default function Reservation() {
  const [show, setShow] = useState(false);

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
          {CABINETS.map((c) => (
            <div
              key={c.ville}
              className="glass-card flex items-start gap-4 rounded-3xl p-6 shadow-soft"
            >
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
              </div>
            </div>
          ))}
        </div>

        {/* Annulation en rouge, bien visible */}
        <p className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-3 text-center text-sm font-semibold text-red-600">
          🚨 Toute annulation doit être signalée au moins 48h à l&apos;avance ;
          passé ce délai, la séance reste due.
        </p>

        {/* Embed cal.com */}
        <div className="mt-8 overflow-hidden rounded-3xl bg-white p-2 shadow-soft">
          {show ? (
            <div className="h-[640px] w-full overflow-auto rounded-2xl">
              <Cal
                calLink={SITE.calLinkPlantaireDecouverte}
                calOrigin={SITE.calOrigin}
                style={{ width: "100%", height: "100%" }}
                config={{ layout: "month_view" }}
              />
            </div>
          ) : (
            <div className="bg-peacock-gradient relative flex flex-col items-center overflow-hidden rounded-2xl px-6 py-16 text-center text-white">
              <h3 className="heading-script text-3xl text-shimmer">
                Voir mes disponibilités
              </h3>
              <p className="mt-3 max-w-md text-peacock-50/90">
                Le calendrier de réservation en ligne s&apos;affiche en un clic.
                Réservez votre séance de réflexologie au cabinet de votre choix.
              </p>
              <button
                onClick={() => setShow(true)}
                className="mt-6 rounded-full bg-white px-8 py-3.5 font-semibold text-peacock-800 shadow-bubble transition-transform hover:scale-105"
              >
                Ouvrir le calendrier
              </button>
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
