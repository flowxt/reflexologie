"use client";

import { useState } from "react";
import Link from "next/link";
import Modal from "./Modal";
import { PUBLICS } from "@/lib/content";

// Décalages verticaux pour un rendu « éparpillé ».
const OFFSETS = [
  "sm:-translate-y-3",
  "sm:translate-y-4",
  "sm:-translate-y-5",
  "sm:translate-y-2",
  "sm:translate-y-5",
  "sm:-translate-y-2",
  "sm:translate-y-3",
  "sm:-translate-y-4",
];

export default function Publics() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = PUBLICS.find((p) => p.id === activeId) ?? null;

  return (
    <section
      id="publics"
      className="relative mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-peacock-500">
          Pour qui
        </p>
        <h2 className="heading-script mt-3 text-4xl text-peacock-gradient sm:text-5xl">
          Des accompagnements sur-mesure
        </h2>
        <p className="mt-4 text-ink-soft">
          Cliquez sur une bulle pour en savoir plus.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {PUBLICS.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setActiveId(p.id)}
            className={`animate-bubble hover-peacock glass-card rounded-full px-5 py-3 text-sm font-semibold text-peacock-700 shadow-bubble sm:text-base ${OFFSETS[i % OFFSETS.length]}`}
            style={{ animationDelay: `${(i % 5) * 0.45}s` }}
          >
            {p.label}
          </button>
        ))}
      </div>

      <Modal
        open={!!active}
        onClose={() => setActiveId(null)}
        eyebrow="Pour qui"
        title={active?.title ?? ""}
        footer={
          <Link
            href="/reservation"
            onClick={() => setActiveId(null)}
            className="inline-flex rounded-full bg-peacock-gradient px-6 py-3 text-sm font-semibold text-white shadow-bubble transition-transform hover:scale-105"
          >
            Réserver pour cet accompagnement
          </Link>
        }
      >
        {active?.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Modal>
    </section>
  );
}
