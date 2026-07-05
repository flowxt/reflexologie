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

// Diamètre de la bulle adapté à la longueur du libellé, pour garder
// une vraie forme ronde plutôt qu'une pilule/tag.
function bubbleSize(label: string) {
  if (label.length > 20) {
    return "h-32 w-32 text-[11px] sm:h-36 sm:w-36 sm:text-xs";
  }
  if (label.length > 11) {
    return "h-28 w-28 text-xs sm:h-32 sm:w-32 sm:text-sm";
  }
  return "h-24 w-24 text-sm sm:h-28 sm:w-28 sm:text-base";
}

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

      <div className="mt-12 flex flex-wrap items-center justify-center gap-5 sm:gap-6">
        {PUBLICS.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setActiveId(p.id)}
            className={`animate-bubble glass-bubble hover-peacock flex shrink-0 items-center justify-center rounded-full p-3 text-center font-semibold leading-tight text-peacock-800 ${bubbleSize(p.label)} ${OFFSETS[i % OFFSETS.length]}`}
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
