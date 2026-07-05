"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { REFLEXO_QUIZ } from "@/lib/content";

function QuizItem({
  affirmation,
  match,
  clicked,
  onToggle,
}: {
  affirmation: string;
  match: boolean;
  clicked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={`group flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
        clicked
          ? match
            ? "border-emerald-accent/40 bg-emerald-accent/10 text-peacock-800"
            : "border-red-200 bg-red-50 text-red-700"
          : "border-peacock-100 bg-white/70 text-ink hover:border-peacock-300 hover:bg-peacock-50"
      }`}
    >
      <span className="text-xl leading-none">
        {clicked ? (match ? "🎉" : "❌") : "○"}
      </span>
      <span className="flex-1">{affirmation}</span>
    </button>
  );
}

export default function Quiz() {
  const [clicked, setClicked] = useState<Record<number, boolean>>({});

  const toggle = (i: number) =>
    setClicked((c) => ({ ...c, [i]: !c[i] }));

  const { positives, answered } = useMemo(() => {
    let positives = 0;
    let answered = 0;
    REFLEXO_QUIZ.forEach((q, i) => {
      if (clicked[i]) {
        answered += 1;
        if (q.match) positives += 1;
      }
    });
    return { positives, answered };
  }, [clicked]);

  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      {/* Résumé sticky */}
      <div className="glass-card sticky top-20 z-30 mb-8 rounded-3xl p-6 text-center shadow-soft">
        {answered === 0 ? (
          <p className="text-ink-soft">
            Cliquez sur les affirmations qui vous concernent 👇
          </p>
        ) : positives === 0 ? (
          <p className="text-ink-soft">
            Aucune affirmation « réflexologie » ne vous concerne pour
            l&apos;instant.
          </p>
        ) : (
          <>
            <p className="text-lg font-semibold text-peacock-800">
              {positives} affirmation{positives > 1 ? "s" : ""} vous
              concernent ✨
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              La réflexologie pourrait vraiment vous aider.
            </p>
            <Link
              href="/reservation"
              className="mt-4 inline-flex rounded-full bg-peacock-gradient px-6 py-3 text-sm font-semibold text-white shadow-bubble transition-transform hover:scale-105"
            >
              Réserver une séance
            </Link>
          </>
        )}
        {answered > 0 && (
          <button
            onClick={() => setClicked({})}
            className="mt-3 block w-full text-xs font-medium text-ink-soft/70 underline-offset-2 hover:underline"
          >
            Recommencer le quiz
          </button>
        )}
      </div>

      <div className="space-y-2">
        {REFLEXO_QUIZ.map((q, i) => (
          <QuizItem
            key={i}
            affirmation={q.affirmation}
            match={q.match}
            clicked={!!clicked[i]}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>
    </section>
  );
}
