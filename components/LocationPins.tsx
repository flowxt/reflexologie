"use client";

import { useState } from "react";
import Link from "next/link";
import Modal from "./Modal";

export default function LocationPins() {
  const [showHome, setShowHome] = useState(false);

  return (
    <>
      <p className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-peacock-50">
        <Link
          href="/#cabinet-annecy"
          className="rounded-full px-1 transition-colors hover:text-white hover:underline underline-offset-4"
        >
          📍 Annecy
        </Link>
        <Link
          href="/#cabinet-saint-jorioz"
          className="rounded-full px-1 transition-colors hover:text-white hover:underline underline-offset-4"
        >
          📍 Saint-Jorioz
        </Link>
        <button
          onClick={() => setShowHome(true)}
          className="rounded-full px-1 transition-colors hover:text-white hover:underline underline-offset-4"
        >
          📍 Chez vous
        </button>
      </p>

      <Modal
        open={showHome}
        onClose={() => setShowHome(false)}
        eyebrow="À domicile"
        title="Je me déplace chez vous"
        footer={
          <Link
            href="/contact"
            onClick={() => setShowHome(false)}
            className="inline-flex rounded-full bg-peacock-gradient px-6 py-3 text-sm font-semibold text-white shadow-bubble transition-transform hover:scale-105"
          >
            Me contacter pour convenir d&apos;un rendez-vous
          </Link>
        }
      >
        <p>
          Je me déplace à votre domicile dans un périmètre de 10 km autour
          d&apos;Annecy, avec tout mon matériel professionnel pour vous offrir
          une véritable séance, confortablement installé(e) chez vous.
        </p>
        <p>
          Sur rendez-vous, je peux me déplacer tous les jours de la semaine et
          le week-end.
        </p>
        <p className="text-sm font-semibold text-peacock-700">
          * Forfait déplacement aller-retour : tarif unique de 5 €.
        </p>
        <p className="rounded-xl bg-peacock-50 p-3 text-sm text-ink-soft">
          Ces séances ne se réservent pas directement en ligne : contactez-moi
          via la fiche contact pour que l&apos;on convienne ensemble d&apos;un
          créneau.
        </p>
      </Modal>
    </>
  );
}
