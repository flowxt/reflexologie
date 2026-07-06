"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";
import Sparkles from "./Sparkles";
import { KEYWORDS } from "@/lib/content";

export default function Keywords() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = KEYWORDS.find((k) => k.id === activeId) ?? null;

  return (
    <section
      id="specialite"
      className="bg-peacock-gradient relative scroll-mt-24 overflow-hidden px-5 py-20 text-white sm:py-28"
    >
      <Sparkles />

      {/* Séparateur lumineux à la jonction avec « Comprendre » */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center px-6 pt-8 sm:pt-10">
        <div className="relative flex w-full max-w-3xl items-center justify-center">
          <span className="absolute inset-x-0 h-[3px] rounded-full bg-linear-to-r from-transparent via-white/80 to-transparent shadow-[0_0_18px_rgba(255,255,255,0.55)]" />
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-peacock-600 shadow-[0_0_22px_rgba(255,255,255,0.75)]">
            ✦
          </span>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-peacock-100">
            Ma spécialité
          </p>
          <h2 className="heading-script mt-3 text-4xl text-shimmer sm:text-5xl">
            Stress, anxiété &amp; angoisses
          </h2>
          <p className="mt-4 text-peacock-50/90">
            J&apos;accompagne les conséquences physiques et émotionnelles du
            stress, de l&apos;anxiété et de l&apos;angoisse.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {KEYWORDS.map((k) => (
            <button
              key={k.id}
              onClick={() => setActiveId(k.id)}
              className="group flex h-44 flex-col items-center justify-center gap-4 rounded-3xl bg-white/10 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              <span className="heading-script text-3xl text-shimmer">
                {k.title}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white transition-colors group-hover:bg-white/25">
                En savoir plus
                <span aria-hidden="true">→</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <Modal
        open={!!active}
        onClose={() => setActiveId(null)}
        eyebrow="Ma spécialité"
        title={active?.title ?? ""}
      >
        {active?.body.map((block, i) => {
          if (typeof block !== "string") {
            return (
              <Image
                key={i}
                src={block.img}
                alt={block.alt}
                width={block.width}
                height={block.height}
                className="mt-3 h-auto w-full rounded-2xl border border-peacock-100 bg-white"
              />
            );
          }
          const tight = /^[-•✅]/.test(block);
          return (
            <p key={i} className={tight ? "mt-1.5!" : undefined}>
              {block}
            </p>
          );
        })}
      </Modal>
    </section>
  );
}
