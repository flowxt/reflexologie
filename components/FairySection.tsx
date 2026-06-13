"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import Sparkles from "./Sparkles";
import { FAIRY } from "@/lib/content";

// Couleurs claires et lumineuses, bien visibles sur le fond bleu canard.
const DUST_COLORS = ["#ffffff", "#fff7d6", "#eafff9", "#c4f1ea", "#ffe9a8"];

/** Fée qui flotte et bat des ailes (animation CSS). */
function WingedFairy({ size = 180 }: { size?: number }) {
  return (
    <span
      className="animate-float-slow block"
      style={{ width: size, height: size }}
    >
      <span
        className="animate-wing relative block h-full w-full"
        style={{ transformOrigin: "50% 65%" }}
      >
        <Image
          src="/element/fee2-clean.png"
          alt="Une fée"
          fill
          sizes={`${size}px`}
          className="object-contain drop-shadow-[0_10px_25px_rgba(12,100,112,0.25)]"
        />
      </span>
    </span>
  );
}

export default function FairySection() {
  const [inside, setInside] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [open, setOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const dustLayer = useRef<HTMLDivElement>(null);
  const lastDust = useRef(0);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setEnabled(!coarse && !reduce);
  }, []);

  const spawnDust = useCallback((x: number, y: number) => {
    const layer = dustLayer.current;
    if (!layer) return;
    const count = 2;
    for (let k = 0; k < count; k++) {
      const s = document.createElement("span");
      const size = 4 + Math.random() * 7;
      const color = DUST_COLORS[(Math.random() * DUST_COLORS.length) | 0];
      const dx = (Math.random() - 0.5) * 30;
      const dy = 10 + Math.random() * 26;
      s.style.cssText = `
        position:fixed;left:${x + (Math.random() - 0.5) * 24}px;top:${y + (Math.random() - 0.5) * 16}px;
        width:${size}px;height:${size}px;border-radius:9999px;
        background:radial-gradient(circle, #ffffff 0%, ${color} 45%, rgba(255,255,255,0) 72%);
        box-shadow:0 0 10px ${color}, 0 0 4px #ffffff;
        pointer-events:none;transform:translate(-50%,-50%);
        animation:fairy-dust 900ms ease-out forwards;
        --dx:${dx}px;--dy:${dy}px;`;
      layer.appendChild(s);
      window.setTimeout(() => s.remove(), 1000);
    }
  }, []);

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const now = performance.now();
      if (now - lastDust.current > 28) {
        lastDust.current = now;
        spawnDust(e.clientX, e.clientY);
      }
    },
    [spawnDust],
  );

  return (
    <section
      onMouseEnter={() => enabled && setInside(true)}
      onMouseLeave={() => setInside(false)}
      onMouseMove={enabled ? onMove : undefined}
      className={`bg-peacock-gradient relative overflow-hidden px-5 py-24 text-white ${
        inside ? "cursor-none" : ""
      }`}
    >
      <Sparkles />

      {/* couche de poussière de fée */}
      <div
        ref={dustLayer}
        className="pointer-events-none fixed inset-0 z-[70]"
        aria-hidden="true"
      />

      {/* fée-curseur */}
      {inside && (
        <Image
          src="/element/fee2-clean.png"
          alt=""
          width={72}
          height={62}
          aria-hidden="true"
          className="pointer-events-none fixed z-[71] -translate-x-1/2 -translate-y-1/2"
          style={{
            left: pos.x,
            top: pos.y,
            height: "auto",
            filter: "drop-shadow(0 0 8px rgba(70,212,196,0.7))",
          }}
          priority
        />
      )}

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-peacock-100">
          Un brin de magie
        </p>
        <h2 className="heading-script mt-3 text-4xl text-shimmer sm:text-5xl">
          {FAIRY.title}
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="group relative mt-8 flex flex-col items-center transition-transform hover:scale-105"
          aria-label="Découvrir le concept"
        >
          <span className="absolute -inset-6 -z-10 rounded-full bg-shimmer/40 blur-2xl" />
          <WingedFairy />
          <span className="mt-3 block rounded-full bg-white px-5 py-2 text-sm font-semibold text-peacock-800 shadow-bubble">
            Cliquez sur la fée
          </span>
        </button>

        <p className="heading-script mt-8 max-w-xl text-2xl text-peacock-50">
          {FAIRY.signature}
        </p>
        {enabled && (
          <p className="mt-3 text-sm text-peacock-50/70">
            Promenez votre souris ici : la fée vous suit et sème sa poussière
            d&apos;étoiles.
          </p>
        )}
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        eyebrow={FAIRY.title}
        title={FAIRY.intro}
      >
        {FAIRY.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Modal>
    </section>
  );
}
