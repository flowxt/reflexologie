import Link from "next/link";
import Image from "next/image";
import { CABINETS, SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-peacock-950 text-peacock-100">
      <div className="relative mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/photo/Logo-sansfond.png"
              alt="Réflexologie — Delphine Eminet"
              width={2440}
              height={1069}
              className="h-16 w-auto filter-[brightness(0)_invert(1)]"
            />
            <p className="mt-4 max-w-xs text-sm text-peacock-200">
              {SITE.baseline}
            </p>

            <div className="mt-5 space-y-1 text-sm">
              <a
                href={`mailto:${SITE.email}`}
                className="block text-peacock-200 hover:text-white"
              >
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="block text-peacock-200 hover:text-white"
              >
                {SITE.phone}
              </a>
            </div>

            <div className="mt-5 flex gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="heading-script text-2xl text-white">Les cabinets</h3>
            <ul className="mt-4 space-y-4 text-sm">
              {CABINETS.map((c) => (
                <li key={c.ville}>
                  {c.contactRequired ? (
                    <Link href="/contact" className="group block">
                      <p className="font-semibold text-white group-hover:underline">
                        {c.ville}
                      </p>
                      <p className="text-peacock-200">{c.detail}</p>
                      <p className="text-peacock-300">{c.horaires}</p>
                    </Link>
                  ) : (
                    <>
                      <p className="font-semibold text-white">{c.ville}</p>
                      <p className="text-peacock-200">{c.detail}</p>
                      <p className="text-peacock-300">{c.horaires}</p>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="heading-script text-2xl text-white">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-peacock-200 hover:text-white">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/#reflexologie"
                  className="text-peacock-200 hover:text-white"
                >
                  La réflexologie
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="text-peacock-200 hover:text-white"
                >
                  Le quiz
                </Link>
              </li>
              <li>
                <Link
                  href="/reservation"
                  className="text-peacock-200 hover:text-white"
                >
                  Tarifs & Réservation
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-peacock-200 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Link
              href="/reservation"
              className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-peacock-800 transition-transform hover:scale-105"
            >
              Réserver une séance
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-peacock-300">
          © {new Date().getFullYear()} {SITE.name} — {SITE.role}. Tous droits
          réservés. · La réflexologie ne se substitue pas à un suivi médical.
        </div>
      </div>
    </footer>
  );
}
