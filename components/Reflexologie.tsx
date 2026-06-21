"use client";

import { useState } from "react";
import {
  BIENFAITS,
  CADRE,
  NEURO_REFLEXO,
  REFLEXO_BUT,
  REFLEXO_CONTRE_INDICATIONS,
  REFLEXO_FONCTIONNEMENT,
  REFLEXO_INTRO,
  REFLEXO_QUIZ,
  SYSTEMES,
} from "@/lib/content";

function Item({
  title,
  children,
  open = false,
}: {
  title: string;
  children: React.ReactNode;
  open?: boolean;
}) {
  return (
    <details
      open={open}
      className="glass-card group rounded-2xl px-6 py-1 shadow-soft"
    >
      <summary className="flex items-center justify-between gap-4 py-4 text-left text-lg font-semibold text-peacock-800">
        {title}
        <span className="acc-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-peacock-gradient text-lg text-white transition-transform duration-300">
          +
        </span>
      </summary>
      <div className="space-y-3 pb-5 text-ink-soft">{children}</div>
    </details>
  );
}

function QuizItem({
  affirmation,
  match,
}: {
  affirmation: string;
  match: boolean;
}) {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => setClicked(true)}
      className={`group flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
        clicked
          ? match
            ? "border-emerald-accent/40 bg-emerald-accent/10 text-peacock-800"
            : "border-red-200 bg-red-50 text-red-700"
          : "border-peacock-100 bg-white/70 text-ink hover:border-peacock-300 hover:bg-peacock-50"
      }`}
    >
      <span className="text-xl leading-none">
        {clicked ? (match ? "🎉" : "☹️") : "○"}
      </span>
      <span className="flex-1">{affirmation}</span>
      {clicked && (
        <span className="shrink-0 text-xs font-semibold">
          {match ? "La réflexologie peut vous aider !" : "Pas d'inquiétude 😊"}
        </span>
      )}
    </button>
  );
}

export default function Reflexologie() {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <section
      id="reflexologie"
      className="mx-auto max-w-3xl scroll-mt-24 px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-peacock-500">
          Comprendre
        </p>
        <h2 className="heading-script mt-3 text-4xl text-peacock-gradient sm:text-5xl">
          Qu&apos;est-ce que la réflexologie ?
        </h2>
        <p className="mt-4 text-ink-soft">{REFLEXO_INTRO}</p>
        <p className="mt-3 text-sm text-ink-soft/70">
          Déroulez ce qui vous intéresse 👇
        </p>
      </div>

      <div className="mt-10 space-y-4">
        {/* 1 */}
        <Item title="Comment ça fonctionne ?" open>
          {REFLEXO_FONCTIONNEMENT.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Item>

        {/* 2 */}
        <Item title="Quels sont les différents systèmes de l'organisme ?">
          <div className="flex flex-wrap gap-2">
            {SYSTEMES.map((s) => (
              <span
                key={s}
                className="rounded-full bg-peacock-50 px-3 py-1.5 text-sm font-medium text-peacock-700"
              >
                {s}
              </span>
            ))}
          </div>
        </Item>

        {/* 3 */}
        <Item title="Le but ?">
          <p className="font-semibold text-peacock-700">{REFLEXO_BUT}</p>
        </Item>

        {/* 4 */}
        <Item title="Les bienfaits">
          <ul className="space-y-2">
            {BIENFAITS.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 text-emerald-accent">✦</span>
                {b}
              </li>
            ))}
          </ul>
          <p className="rounded-xl bg-peacock-50 p-3 text-sm">
            C&apos;est la <strong>fréquence</strong> et la{" "}
            <strong>régularité</strong> des séances qui renforcent durablement
            les effets positifs.
          </p>
        </Item>

        {/* 5 */}
        <Item title="Les contre-indications">
          {REFLEXO_CONTRE_INDICATIONS.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Item>

        {/* 6 */}
        <Item title="La neuro-réflexologie ®">
          {NEURO_REFLEXO.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Item>

        {/* 7 */}
        <Item title="Le cadre légal — ce que la réflexologie est… et n'est pas">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-peacock-700">
                Le réflexologue
              </h4>
              <ul className="mt-2 space-y-1.5 text-sm">
                {CADRE.fait.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-emerald-accent">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-ink-soft">
                En revanche, il ne…
              </h4>
              <ul className="mt-2 space-y-1.5 text-sm">
                {CADRE.faitPas.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-ink-soft/50">•</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Item>

        {/* 8 — Quiz */}
        <div className="glass-card rounded-2xl px-6 py-1 shadow-soft">
          <button
            onClick={() => setQuizOpen((v) => !v)}
            className="flex w-full items-center justify-between gap-4 py-4 text-left text-lg font-semibold text-peacock-800"
          >
            La réflexologie me correspond-elle ?
            <span
              className={`acc-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-peacock-gradient text-lg text-white transition-transform duration-300 ${quizOpen ? "rotate-45" : ""}`}
            >
              +
            </span>
          </button>

          {quizOpen && (
            <div className="pb-6">
              <p className="mb-4 text-sm text-ink-soft">
                Cliquez sur les affirmations qui vous concernent pour savoir si
                la réflexologie pourrait vous aider ✨
              </p>
              <div className="space-y-2">
                {REFLEXO_QUIZ.map((q, i) => (
                  <QuizItem key={i} affirmation={q.affirmation} match={q.match} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
