"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "/#parcours", label: "Qui suis-je" },
  { href: "/#reflexologie", label: "La réflexologie" },
  { href: "/#publics", label: "Pour qui" },
  { href: "/reservation", label: "Tarifs & Réservation" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 shadow-soft backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="text-[26px] sm:text-[30px]">
          <Logo withSubtitle={false} />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
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
