"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { QUIZ_CATEGORY_ORDER, REFLEXO_QUIZ } from "@/lib/content";

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

// Diamètre de la bulle adapté à la longueur de l'affirmation, pour garder
// une vraie forme ronde plutôt qu'une pilule étirée.
function bubbleSize(length: number) {
  if (length > 70) {
    return "h-48 w-48 text-[11px] sm:h-52 sm:w-52 sm:text-xs";
  }
  if (length > 45) {
    return "h-40 w-40 text-xs sm:h-44 sm:w-44 sm:text-sm";
  }
  if (length > 25) {
    return "h-32 w-32 text-sm sm:h-36 sm:w-36 sm:text-base";
  }
  return "h-28 w-28 text-sm sm:h-32 sm:w-32 sm:text-base";
}

function QuizBubble({
  affirmation,
  match,
  revealed,
  onToggle,
}: {
  affirmation: string;
  match: boolean;
  revealed: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={`relative flex shrink-0 items-center justify-center rounded-full border-2 p-4 text-center font-semibold leading-snug transition-all duration-300 ${bubbleSize(affirmation.length)} ${
        revealed
          ? match
            ? "border-emerald-accent/50 bg-emerald-accent/15 text-peacock-800 shadow-soft"
            : "border-ink-soft/25 bg-ink-soft/10 text-ink-soft shadow-soft"
          : "animate-bubble hover-peacock glass-bubble border-transparent text-peacock-800"
      }`}
      style={revealed ? { animation: "none" } : undefined}
    >
      {revealed && (
        <span
          className={`absolute -top-2.5 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full text-base shadow-bubble ring-2 ring-white ${
            match ? "bg-emerald-accent" : "bg-ink-soft"
          }`}
        >
          {match ? "🎉" : "❌"}
        </span>
      )}
      {affirmation}
    </button>
  );
}

export default function Quiz() {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const toggle = (index: number) =>
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  const { positives, negatives } = useMemo(() => {
    let positives = 0;
    let negatives = 0;
    revealed.forEach((i) => {
      if (REFLEXO_QUIZ[i].match) positives += 1;
      else negatives += 1;
    });
    return { positives, negatives };
  }, [revealed]);

  const percent = Math.round((positives / TOTAL_POSITIVES) * 100);

  let message: string | null = null;
  if (positives > 0) {
    if (percent < 20) {
      message = "Quelques signes vous parlent ✨ La réflexologie peut déjà vous apporter du mieux-être.";
    } else if (percent < 50) {
      message =
        "De nombreux signes vous concernent ✨ Ce serait le moment idéal pour essayer une première séance.";
    } else {
      message =
        "La réflexologie semble faite pour vous ! Vraiment, ne cherchez plus ✨";
    }
  }

  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-ink-soft">
          Cliquez sur les bulles qui vous concernent : chacune vous dit
          aussitôt si la réflexologie peut vous aider 👇
        </p>
      </div>

      {/* Résumé sticky */}
      <div className="glass-card sticky top-20 z-30 my-8 rounded-3xl p-6 text-center shadow-soft">
        {revealed.size === 0 ? (
          <p className="text-ink-soft">Aucune bulle cliquée pour l&apos;instant.</p>
        ) : (
          <>
            <p className="text-lg font-semibold text-peacock-800">
              {positives} bulle{positives > 1 ? "s" : ""} vous concernent ✨
            </p>
            {message && <p className="mt-1 text-sm text-ink-soft">{message}</p>}
            {positives > 0 && (
              <Link
                href="/reservation"
                className="mt-4 inline-flex rounded-full bg-peacock-gradient px-6 py-3 text-sm font-semibold text-white shadow-bubble transition-transform hover:scale-105"
              >
                Réserver une séance
              </Link>
            )}
            {negatives > 0 && (
              <p className="mt-3 rounded-xl bg-peacock-50 p-3 text-sm text-ink-soft">
                Certaines de vos réponses méritent qu&apos;on en discute
                ensemble : contactez-moi directement pour vérifier que la
                réflexologie est bien adaptée à votre situation.
              </p>
            )}
          </>
        )}
        {revealed.size > 0 && (
          <button
            onClick={() => setRevealed(new Set())}
            className="mt-3 block w-full text-xs font-medium text-ink-soft/70 underline-offset-2 hover:underline"
          >
            Tout réinitialiser
          </button>
        )}
      </div>

      <div className="space-y-14">
        {CATEGORIES.map((cat) => (
          <div key={cat.title}>
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="text-lg font-bold text-peacock-800 sm:text-xl">
                {cat.title}
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-7">
              {cat.items.map((item) => (
                <QuizBubble
                  key={item.index}
                  affirmation={item.affirmation}
                  match={item.match}
                  revealed={revealed.has(item.index)}
                  onToggle={() => toggle(item.index)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
