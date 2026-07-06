"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const SECTION_LINKS = [
  { href: "/#parcours", label: "Qui suis-je" },
  { href: "/#magie", label: "Un brin de magie" },
  { href: "/#reflexologie", label: "Comprendre" },
  { href: "/#specialite", label: "Ma spécialité" },
  { href: "/#publics", label: "Pour qui" },
  { href: "/#cabinet", label: "Les cabinets" },
  { href: "/#avis", label: "Témoignages" },
];

const LINKS = [
  { href: "/reservation", label: "Tarifs & Réservation" },
  { href: "/quiz", label: "Le quiz" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 shadow-soft backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" aria-label="Accueil — Réflexologie Delphine Eminet">
          <Image
            src="/photo/Logo-sansfond.png"
            alt="Réflexologie — Delphine Eminet"
            width={2440}
            height={1069}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <Link
            href="/"
            className="text-sm font-medium text-ink-soft transition-colors hover:text-peacock-600"
          >
            Accueil
          </Link>

          <div className="group relative">
            <button
              className="flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-peacock-600"
              aria-haspopup="true"
            >
              Découvrir
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform duration-200 group-hover:rotate-180"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="glass-card grid w-56 gap-1 rounded-2xl bg-white/95 p-2 shadow-soft">
                {SECTION_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-xl px-4 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-peacock-50 hover:text-peacock-700"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-peacock-600"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/reservation"
            className="rounded-full bg-peacock-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-bubble transition-transform hover:scale-105"
          >
            Réserver
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-peacock-700 lg:hidden"
          aria-label="Menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="mx-4 mb-3 flex flex-col gap-1 rounded-2xl bg-white/95 p-4 shadow-soft backdrop-blur lg:hidden">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-3 text-sm font-medium text-ink-soft hover:bg-peacock-50"
          >
            Accueil
          </Link>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-ink-soft hover:bg-peacock-50"
            aria-expanded={menuOpen}
          >
            Découvrir
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              className={`transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`}
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {menuOpen && (
            <div className="ml-3 flex flex-col gap-1 border-l border-peacock-100 pl-3">
              {SECTION_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => {
                    setOpen(false);
                    setMenuOpen(false);
                  }}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-ink-soft hover:bg-peacock-50"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          )}

          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-ink-soft hover:bg-peacock-50"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/reservation"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-xl bg-peacock-gradient px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Réserver une séance
          </Link>
        </div>
      )}
    </header>
  );
}
