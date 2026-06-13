"use client";

import { useState } from "react";
import Modal from "./Modal";
import Sparkles from "./Sparkles";
import { KEYWORDS } from "@/lib/content";

export default function Keywords() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = KEYWORDS.find((k) => k.id === activeId) ?? null;

  return (
    <section className="bg-peacock-gradient relative overflow-hidden px-5 py-20 text-white sm:py-28">
      <Sparkles />
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-peacock-100">
            Ma spécialité
          </p>
          <h2 className="heading-script mt-3 text-4xl text-shimmer sm:text-5xl">
            Stress, anxiété &amp; angoisses
          </h2>
          <p className="mt-4 text-peacock-50/90">
            Trois mots au cœur de mon accompagnement. Cliquez pour comprendre
            comment la réflexologie peut vous aider.
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
        {active?.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Modal>
    </section>
  );
}
