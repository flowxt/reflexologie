"use client";

import Link from "next/link";
import { useState } from "react";
import { PUBLICS } from "@/lib/content";

export default function Publics() {
  const [active, setActive] = useState(PUBLICS[0].id);
  const activeItem = PUBLICS.find((p) => p.id === active)!;

  return (
    <section
      id="publics"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-peacock-500">
          Pour qui
        </p>
        <h2 className="mt-3 heading-script text-4xl text-peacock-gradient sm:text-5xl">
          Des accompagnements sur-mesure
        </h2>
        <p className="mt-4 text-ink-soft">
          De la grossesse aux aînés, en passant par les tout-petits et les
          publics neuro-atypiques. Choisissez une bulle.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {PUBLICS.map((p) => {
          const isActive = p.id === active;
          return (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`rounded-full px-5 py-3 text-sm font-semibold shadow-bubble transition-all duration-300 ${
                isActive
                  ? "bg-peacock-gradient scale-105 text-white"
                  : "glass-card text-peacock-700 hover:scale-105 hover:text-peacock-900"
              }`}
              aria-pressed={isActive}
            >
              {p.label}
            </button>
          );
        })}
      </div>

      <div className="glass-card mx-auto mt-10 max-w-3xl rounded-3xl p-8 shadow-soft sm:p-10">
        <h3 className="heading-script text-3xl text-emerald-accent">
          {activeItem.title}
        </h3>
        <div className="mt-4 space-y-3 text-lg leading-relaxed text-ink-soft">
          {activeItem.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <Link
          href="/reservation"
          className="mt-6 inline-flex rounded-full bg-peacock-gradient px-6 py-3 text-sm font-semibold text-white shadow-bubble transition-transform hover:scale-105"
        >
          Réserver pour cet accompagnement
        </Link>
      </div>
    </section>
  );
}
