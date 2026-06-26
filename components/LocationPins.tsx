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
          href="/#cabinet"
          className="rounded-full px-1 transition-colors hover:text-white hover:underline underline-offset-4"
        >
          📍 Annecy
        </Link>
        <Link
          href="/#cabinet"
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
      >
        <p>
          Je me déplace à votre domicile dans un périmètre de 10 km autour
          d&apos;Annecy, avec tout mon matériel professionnel pour vous offrir
          une véritable séance, confortablement installé(e) chez vous.
        </p>
        <p>
          Sur rendez-vous, je peux me déplacer tous les jours de la semaine.
        </p>
      </Modal>
    </>
  );
}
