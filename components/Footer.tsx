import Link from "next/link";
import Logo from "./Logo";
import { CABINETS, SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-peacock-950 text-peacock-100">
      <div className="relative mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-[34px]">
              <Logo light />
            </div>
            <p className="mt-4 max-w-xs text-sm text-peacock-200">
              {SITE.baseline}
            </p>
          </div>

          <div>
            <h3 className="heading-script text-2xl text-white">Les cabinets</h3>
            <ul className="mt-4 space-y-4 text-sm">
              {CABINETS.map((c) => (
                <li key={c.ville}>
                  <p className="font-semibold text-white">{c.ville}</p>
                  <p className="text-peacock-200">{c.detail}</p>
                  <p className="text-peacock-300">{c.horaires}</p>
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
