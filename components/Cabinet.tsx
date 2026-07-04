"use client";

import Image from "next/image";
import { useState } from "react";
import { CABINET, type CabinetLieu, type CabinetPhoto } from "@/lib/content";

function Lieu({
  lieu,
  reverse,
  onZoom,
}: {
  lieu: CabinetLieu;
  reverse: boolean;
  onZoom: (photo: CabinetPhoto) => void;
}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div id={lieu.id} className="scroll-mt-28">
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-peacock-gradient text-xl text-white">
          📍
        </span>
        <div>
          <h3 className="text-2xl font-bold text-peacock-800">{lieu.ville}</h3>
          <p className="text-sm text-ink-soft">{lieu.sousTitre}</p>
        </div>
      </div>

      <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
        {/* Photo principale */}
        <button
          onClick={() => onZoom(lieu.featured)}
          className={`group relative aspect-4/5 overflow-hidden rounded-3xl shadow-soft ${
            reverse ? "lg:order-2" : ""
          }`}
        >
          <Image
            src={lieu.featured.src}
            alt={lieu.featured.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-white/85 px-4 py-1.5 text-sm font-semibold text-peacock-800 backdrop-blur">
            {lieu.featured.caption}
          </span>
        </button>

        {/* Texte + atouts + vignettes */}
        <div className={reverse ? "lg:order-1" : ""}>
          <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
            {lieu.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {lieu.atouts.map((a) => (
              <li
                key={a}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-peacock-700 shadow-soft"
              >
                {a}
              </li>
            ))}
          </ul>

          <div
            className={`mt-6 grid gap-3 ${
              lieu.vignettes.length > 3 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-3"
            }`}
          >
            {lieu.vignettes.map((photo) => (
              <button
                key={photo.src}
                onClick={() => onZoom(photo)}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-soft"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="200px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Galerie supplémentaire */}
      {showMore && (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {lieu.morePhotos.map((photo) => (
            <button
              key={photo.src}
              onClick={() => onZoom(photo)}
              className="group relative aspect-4/3 overflow-hidden rounded-2xl shadow-soft"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 20vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute bottom-2 left-2 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-peacock-800 backdrop-blur">
                {photo.caption}
              </span>
            </button>
          ))}
        </div>
      )}

      {lieu.morePhotos.length > 0 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowMore((v) => !v)}
            className="rounded-full bg-peacock-gradient px-7 py-3 text-sm font-semibold text-white shadow-bubble transition-transform hover:scale-105"
          >
            {showMore
              ? "Masquer les photos"
              : `Voir plus de photos — ${lieu.ville}`}
          </button>
        </div>
      )}
    </div>
  );
}

export default function Cabinet() {
  const [lightbox, setLightbox] = useState<CabinetPhoto | null>(null);

  return (
    <section
      id="cabinet"
      className="bg-linear-to-b from-white to-peacock-50 px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-peacock-500">
            Les cabinets
          </p>
          <h2 className="heading-script mt-3 text-4xl text-peacock-gradient sm:text-5xl">
            Des lieux où l&apos;on se sent bien
          </h2>
          <p className="mt-4 text-ink-soft">{CABINET.intro}</p>
        </div>

        <div className="mt-14 space-y-20">
          {CABINET.lieux.map((lieu, i) => (
            <Lieu
              key={lieu.id}
              lieu={lieu}
              reverse={i % 2 === 1}
              onZoom={setLightbox}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
        >
          <button
            className="absolute inset-0 cursor-default bg-peacock-950/70 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
          />
          <div className="relative z-10 max-h-[88vh] w-full max-w-3xl">
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1024}
              height={768}
              className="h-auto max-h-[88vh] w-full rounded-2xl object-contain shadow-soft"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-peacock-700 shadow-bubble transition-colors hover:bg-peacock-50"
              aria-label="Fermer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
