"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";
import { PARCOURS } from "@/lib/content";

export default function Presentation() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = PARCOURS.find((b) => b.id === activeId) ?? null;
  const n = PARCOURS.length;

  const positions = PARCOURS.map((_, i) => {
    const angle = (-90 + (360 / n) * i) * (Math.PI / 180);
    return {
      x: 50 + 48 * Math.cos(angle),
      y: 50 + 46 * Math.sin(angle),
    };
  });

  return (
    <section
      id="parcours"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-peacock-500">
          Qui suis-je
        </p>
        <h2 className="heading-script mt-3 text-4xl text-peacock-gradient sm:text-5xl">
          Un parcours, plusieurs vies
        </h2>
        <p className="mt-4 text-ink-soft">
          Cliquez sur les bulles autour de ma photo pour découvrir les étapes
          qui m&apos;ont menée à la réflexologie.
        </p>
      </div>

      <div className="relative mx-auto mt-14 aspect-square w-full max-w-md sm:max-w-lg">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {positions.map((p, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={p.x}
              y2={p.y}
              stroke="rgba(20,154,160,0.35)"
              strokeWidth="0.5"
              strokeDasharray="1.6 1.6"
            />
          ))}
        </svg>

        <div className="absolute left-1/2 top-1/2 h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2">
          <div className="bg-peacock-gradient relative h-full w-full rounded-full p-[3px] shadow-bubble">
            <Image
              src="/element/delphine.jpg"
              alt="Delphine Eminet, réflexologue"
              fill
              sizes="240px"
              className="rounded-full object-cover p-[3px]"
              style={{ objectPosition: "center top" }}
            />
          </div>
        </div>

        {PARCOURS.map((b, i) => (
          <div
            key={b.id}
            className="absolute aspect-square w-[27%] -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${positions[i].x}%`, top: `${positions[i].y}%` }}
          >
            <button
              onClick={() => setActiveId(b.id)}
              className="animate-bubble hover-peacock glass-card flex h-full w-full items-center justify-center rounded-full p-2 text-center text-xs font-semibold leading-tight text-peacock-700 shadow-bubble sm:text-sm"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {b.label}
            </button>
          </div>
        ))}
      </div>

      <Modal
        open={!!active}
        onClose={() => setActiveId(null)}
        eyebrow={active?.label}
        title={active?.title ?? ""}
      >
        {active?.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Modal>
    </section>
  );
}
