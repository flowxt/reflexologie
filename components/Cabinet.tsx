import Image from "next/image";
import { CABINET } from "@/lib/content";

export default function Cabinet() {
  const [featured, ...rest] = CABINET.photos;

  return (
    <section
      id="cabinet"
      className="bg-gradient-to-b from-white to-peacock-50 px-5 py-20 sm:py-28"
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
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-white/85 px-4 py-1.5 text-sm font-semibold text-peacock-800 backdrop-blur">
              {featured.caption}
            </span>
          </div>

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
                <div
                  key={photo.src}
                  className="relative aspect-square overflow-hidden rounded-2xl shadow-soft"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="200px"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
