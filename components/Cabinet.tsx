"use client";

import Image from "next/image";
import { useState } from "react";
import { CABINET } from "@/lib/content";

export default function Cabinet() {
  const [featured, ...rest] = CABINET.photos;
  const [showMore, setShowMore] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null,
  );

  return (
    <section
      id="cabinet"
      className="bg-linear-to-b from-white to-peacock-50 px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-peacock-500">
            Le cabinet
          </p>
          <h2 className="heading-script mt-3 text-4xl text-peacock-gradient sm:text-5xl">
            Un lieu où l&apos;on se sent bien
          </h2>
          <p className="mt-4 text-ink-soft">{CABINET.intro}</p>
        </div>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
          {/* Photo principale */}
          <button
            onClick={() => setLightbox({ src: featured.src, alt: featured.alt })}
            className="group relative aspect-4/5 overflow-hidden rounded-3xl shadow-soft"
          >
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-white/85 px-4 py-1.5 text-sm font-semibold text-peacock-800 backdrop-blur">
              {featured.caption}
            </span>
          </button>

          {/* Texte + atouts + petites photos */}
          <div>
            <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
              {CABINET.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {CABINET.atouts.map((a) => (
                <li
                  key={a}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-peacock-700 shadow-soft"
                >
                  {a}
                </li>
              ))}
            </ul>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {rest.map((photo) => (
                <button
                  key={photo.src}
                  onClick={() => setLightbox({ src: photo.src, alt: photo.alt })}
                  className="relative aspect-square overflow-hidden rounded-2xl shadow-soft"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="200px"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Galerie supplémentaire */}
        {showMore && (
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {CABINET.morePhotos.map((photo) => (
              <button
                key={photo.src}
                onClick={() => setLightbox({ src: photo.src, alt: photo.alt })}
                className="group relative aspect-4/3 overflow-hidden rounded-2xl shadow-soft"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute bottom-2 left-2 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-peacock-800 backdrop-blur">
                  {photo.caption}
                </span>
              </button>
            ))}
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowMore((v) => !v)}
            className="rounded-full bg-peacock-gradient px-7 py-3 text-sm font-semibold text-white shadow-bubble transition-transform hover:scale-105"
          >
            {showMore ? "Masquer les photos" : "Voir plus de photos"}
          </button>
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
