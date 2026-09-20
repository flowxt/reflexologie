import Link from "next/link";
import { SITE } from "@/lib/content";

/**
 * Bande d'appel à l'action en fin de page d'accueil : la visite se termine
 * sur une invitation claire à réserver, avec le prix et la marche à suivre.
 */
export default function CtaBand() {
  return (
    <section className="bg-linear-to-b from-white to-peacock-50 px-5 py-16 sm:py-20">
      <div className="glass-card mx-auto max-w-4xl rounded-3xl p-8 text-center shadow-soft sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-peacock-500">
          Et si on commençait ?
        </p>
        <h2 className="heading-script mt-3 text-4xl text-peacock-gradient sm:text-5xl">
          Offrez-vous une vraie pause
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
          Votre première séance « Faisons connaissance » dure{" "}
          <strong className="font-semibold text-peacock-700">1h30</strong> et
          coûte{" "}
          <strong className="font-semibold text-peacock-700">75 €</strong>.
          Vous réservez en ligne, Delphine vous contacte avant la séance, et
          vous repartez apaisé(e).
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/reservation"
            className="rounded-full bg-peacock-gradient px-8 py-3.5 text-base font-semibold text-white shadow-bubble transition-transform hover:scale-105"
          >
            Réserver ma 1ʳᵉ séance
          </Link>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-peacock-300 bg-white/70 px-8 py-3.5 text-base font-semibold text-peacock-700 transition-colors hover:bg-peacock-50"
          >
            Poser une question sur WhatsApp
          </a>
        </div>

        <p className="mt-5 text-sm text-ink-soft/80">
          Annecy le mardi · Saint-Jorioz du lundi au dimanche · À domicile sur
          demande
        </p>
      </div>
    </section>
  );
}
