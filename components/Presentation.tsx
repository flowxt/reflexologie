"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
import { PARCOURS } from "@/lib/content";

export default function Presentation() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const active = PARCOURS.find((b) => b.id === activeId) ?? null;
  const n = PARCOURS.length;

  // Rayons réduits (et asymétriques) pour que les bulles, demi-largeur
  // comprise, restent toujours dans le cadre — y compris en mobile.
  const positions = PARCOURS.map((_, i) => {
    const angle = (-90 + (360 / n) * i) * (Math.PI / 180);
    return {
      x: 50 + 42 * Math.cos(angle),
      y: 50 + 36 * Math.sin(angle),
    };
  });

  // Position de repos de la fée (coin haut-droit) et position lorsqu'elle
  // s'approche, en douceur, de la bulle survolée.
  const fairyRest = { x: 80, y: 12 };
  const fairyTarget =
    hovered !== null
      ? { x: positions[hovered].x, y: Math.max(8, positions[hovered].y - 13) }
      : fairyRest;

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

        {/* petite fée qui s'approche en douceur de la bulle survolée */}
        <div
          className="pointer-events-none absolute z-20 w-[15%] min-w-[48px] -translate-x-1/2 -translate-y-1/2 transition-all duration-1400 ease-out"
          style={{ left: `${fairyTarget.x}%`, top: `${fairyTarget.y}%` }}
        >
          <span className="animate-float-slow block drop-shadow-[0_6px_14px_rgba(12,100,112,0.3)]">
            <Image
              src="/element/fee2-clean.png"
              alt=""
              width={90}
              height={78}
              aria-hidden="true"
              className="h-auto w-full"
            />
          </span>
        </div>

        {PARCOURS.map((b, i) => (
          <div
            key={b.id}
            className="absolute aspect-square w-[27%] -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${positions[i].x}%`, top: `${positions[i].y}%` }}
          >
            <button
              onClick={() => setActiveId(b.id)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
              className="animate-bubble hover-peacock glass-bubble relative flex h-full w-full items-center justify-center rounded-full p-2 text-center text-xs font-semibold leading-tight text-peacock-800 sm:text-sm"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <span className="absolute -top-2 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-peacock-gradient text-xs font-bold text-white shadow-bubble ring-2 ring-white sm:h-7 sm:w-7">
                {i + 1}
              </span>
              {b.label}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center gap-4">
        <Link
          href="/reservation"
          className="rounded-full bg-peacock-gradient px-8 py-3.5 text-base font-semibold text-white shadow-bubble transition-transform hover:scale-105"
        >
          Réserver une séance
        </Link>
        <p className="max-w-xl text-center text-ink-soft">
          Spécialisée en{" "}
          <strong className="font-semibold text-peacock-700">
            neuro-réflexologie ®
          </strong>
          , en{" "}
          <strong className="font-semibold text-peacock-700">
            néo-réflexologie
          </strong>{" "}
          et en suivi d&apos;
          <strong className="font-semibold text-peacock-700">
            endométriose
          </strong>
          .
        </p>
      </div>

      <Modal
        open={!!active}
        onClose={() => setActiveId(null)}
        eyebrow={active?.label}
        title={active?.title ?? ""}
      >
        {active?.body.map((p, i) => {
          const tight = /^[•✅]/.test(p);
          return (
            <p key={i} className={tight ? "mt-1.5!" : undefined}>
              {p}
            </p>
          );
        })}
      </Modal>
    </section>
  );
}
