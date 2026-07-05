"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { QUIZ_CATEGORY_ORDER, REFLEXO_QUIZ } from "@/lib/content";

type Phase = "intro" | "quiz" | "result";

const CATEGORY_ICONS: Record<(typeof QUIZ_CATEGORY_ORDER)[number], string> = {
  "Stress, sommeil & émotions": "🌙",
  "Corps & santé physique": "🌿",
  "Grossesse, naissance & post-partum": "🤰",
  "Enfants & bébés": "👶",
  "Intimité & fertilité": "💞",
  "Votre rapport aux soins": "🧭",
};

const TOTAL_POSITIVES = REFLEXO_QUIZ.filter((q) => q.match).length;

// Regroupe les affirmations par thème, en conservant leur index d'origine
// (nécessaire pour calculer le score match/pas-match).
const CATEGORIES = QUIZ_CATEGORY_ORDER.map((title) => ({
  title,
  icon: CATEGORY_ICONS[title],
  items: REFLEXO_QUIZ.map((q, index) => ({ ...q, index })).filter(
    (q) => q.category === title,
  ),
}));

export default function Quiz() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [catStep, setCatStep] = useState(0);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [entering, setEntering] = useState(true);

  useEffect(() => {
    setEntering(true);
    const id = requestAnimationFrame(() => setEntering(false));
    return () => cancelAnimationFrame(id);
  }, [catStep, phase]);

  const category = CATEGORIES[catStep];
  const isLastCategory = catStep === CATEGORIES.length - 1;

  const { positives, negativesSelected } = useMemo(() => {
    let positives = 0;
    let negativesSelected = 0;
    selected.forEach((i) => {
      if (REFLEXO_QUIZ[i].match) positives += 1;
      else negativesSelected += 1;
    });
    return { positives, negativesSelected };
  }, [selected]);

  const percent = Math.round((positives / TOTAL_POSITIVES) * 100);
  const progress = Math.round((catStep / CATEGORIES.length) * 100);

  function toggle(index: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  function goNext() {
    if (isLastCategory) {
      setPhase("result");
    } else {
      setCatStep((s) => s + 1);
    }
  }

  function goBack() {
    if (catStep === 0) return;
    setCatStep((s) => s - 1);
  }

  function restart() {
    setSelected(new Set());
    setCatStep(0);
    setPhase("intro");
  }

  let resultTitle: string;
  let resultText: string;
  if (positives === 0) {
    resultTitle = "Difficile à dire avec si peu d'indices…";
    resultText =
      "Aucune de ces affirmations ne vous concerne vraiment aujourd'hui. N'hésitez pas à me contacter pour en discuter directement.";
  } else if (percent < 20) {
    resultTitle = "Quelques signes vous parlent ✨";
    resultText =
      "La réflexologie pourrait déjà vous apporter du mieux-être sur ces points-là.";
  } else if (percent < 50) {
    resultTitle = "De nombreux signes vous concernent ✨";
    resultText =
      "La réflexologie a beaucoup à vous offrir : ce serait le moment idéal pour essayer une première séance.";
  } else {
    resultTitle = "La réflexologie semble faite pour vous ! ✨";
    resultText =
      "Vraiment, ne cherchez plus : c'est le moment de vous offrir une séance de réflexologie.";
  }

  return (
    <section className="relative mx-auto max-w-2xl px-5 py-16 sm:py-20">
      {/* ───────── Intro ───────── */}
      {phase === "intro" && (
        <div
          className={`glass-card mx-auto max-w-xl rounded-3xl p-8 text-center shadow-soft transition-all duration-500 ease-out sm:p-12 ${
            entering ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <Image
            src="/element/fee2-clean.png"
            alt=""
            width={90}
            height={78}
            aria-hidden="true"
            className="animate-float-slow mx-auto h-auto w-20"
          />
          <h2 className="heading-script mt-4 text-3xl text-peacock-gradient sm:text-4xl">
            On teste ensemble ?
          </h2>
          <p className="mt-4 text-ink-soft">
            {CATEGORIES.length} thèmes, quelques affirmations à cocher à
            chaque fois — celles qui vous parlent. Deux minutes chrono ⏱️
          </p>
          <p className="mt-2 text-sm text-ink-soft/70">
            À la fin, découvrez si la réflexologie pourrait vraiment vous
            aider.
          </p>
          <button
            onClick={() => setPhase("quiz")}
            className="mt-7 inline-flex rounded-full bg-peacock-gradient px-8 py-3.5 text-base font-semibold text-white shadow-bubble transition-transform hover:scale-105"
          >
            Commencer le quiz
          </button>
        </div>
      )}

      {/* ───────── Thème (sélection multiple) ───────── */}
      {phase === "quiz" && (
        <div>
          <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-peacock-500">
            <span>
              Thème {catStep + 1} / {CATEGORIES.length}
            </span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-peacock-100">
            <div
              className="bg-peacock-gradient h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div
            key={catStep}
            className={`glass-card mt-8 rounded-3xl p-6 shadow-soft transition-all duration-500 ease-out sm:p-9 ${
              entering ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <span className="text-3xl">{category.icon}</span>
            <h2 className="heading-script mt-2 text-2xl text-peacock-gradient sm:text-3xl">
              {category.title}
            </h2>
            <p className="mt-2 text-sm text-ink-soft">
              Cochez ce qui vous concerne — ou passez si rien ne résonne 👇
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {category.items.map((item) => {
                const isSelected = selected.has(item.index);
                return (
                  <button
                    key={item.index}
                    onClick={() => toggle(item.index)}
                    className={`rounded-full border-2 px-4 py-2.5 text-left text-sm font-medium transition-all duration-200 ${
                      isSelected
                        ? "scale-[1.02] border-transparent bg-peacock-gradient text-white shadow-bubble"
                        : "border-peacock-100 bg-white/70 text-ink-soft hover:border-peacock-300 hover:bg-peacock-50"
                    }`}
                  >
                    {isSelected ? "✓ " : ""}
                    {item.affirmation}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              onClick={goBack}
              disabled={catStep === 0}
              className="text-sm font-medium text-ink-soft/70 transition-colors hover:text-peacock-700 disabled:opacity-0"
            >
              ← Thème précédent
            </button>
            <button
              onClick={goNext}
              className="inline-flex rounded-full bg-peacock-gradient px-7 py-3 text-sm font-semibold text-white shadow-bubble transition-transform hover:scale-105"
            >
              {isLastCategory ? "Voir mon résultat" : "Thème suivant →"}
            </button>
          </div>
        </div>
      )}

      {/* ───────── Résultat ───────── */}
      {phase === "result" && (
        <div
          className={`glass-card mx-auto max-w-xl rounded-3xl p-8 text-center shadow-soft transition-all duration-500 ease-out sm:p-12 ${
            entering ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <div
            className="relative mx-auto h-36 w-36"
            style={{
              background: `conic-gradient(var(--color-emerald-accent) ${
                percent * 3.6
              }deg, rgba(20,154,160,0.12) 0deg)`,
              borderRadius: "9999px",
            }}
          >
            <div className="absolute inset-[6px] flex flex-col items-center justify-center rounded-full bg-white shadow-inner">
              <span className="text-3xl font-bold text-peacock-800">
                {positives}
              </span>
              <span className="text-xs font-medium text-ink-soft/70">
                sur {TOTAL_POSITIVES}
              </span>
            </div>
          </div>

          <h2 className="heading-script mt-6 text-3xl text-peacock-gradient sm:text-4xl">
            {resultTitle}
          </h2>
          <p className="mt-4 text-ink-soft">{resultText}</p>

          {negativesSelected > 0 && (
            <p className="mt-3 rounded-xl bg-peacock-50 p-3 text-sm text-ink-soft">
              Certaines de vos réponses méritent qu&apos;on en discute
              ensemble : contactez-moi directement pour vérifier que la
              réflexologie est bien adaptée à votre situation.
            </p>
          )}

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/reservation"
              className="inline-flex rounded-full bg-peacock-gradient px-8 py-3.5 text-base font-semibold text-white shadow-bubble transition-transform hover:scale-105"
            >
              Réserver une séance
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-peacock-200 px-8 py-3.5 text-base font-semibold text-peacock-700 transition-colors hover:bg-peacock-50"
            >
              Me contacter
            </Link>
          </div>
          <button
            onClick={restart}
            className="mt-5 text-sm font-medium text-ink-soft/70 underline-offset-2 hover:underline"
          >
            Recommencer le quiz
          </button>
        </div>
      )}
    </section>
  );
}
