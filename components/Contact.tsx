"use client";

import { useState } from "react";
import { CABINETS, SITE } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      nom: String(data.get("nom") ?? ""),
      email: String(data.get("email") ?? ""),
      telephone: String(data.get("telephone") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "L'envoi a échoué.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue, merci de réessayer.",
      );
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Coordonnées + cabinets */}
        <div>
          <h2 className="heading-script text-4xl text-peacock-gradient">
            Me contacter
          </h2>
          <p className="mt-4 text-ink-soft">
            Une question avant de réserver, une demande particulière ou un devis
            personnalisé ? Écrivez-moi, je vous réponds avec plaisir.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${SITE.email}`}
              className="glass-card flex items-center gap-4 rounded-2xl p-4 shadow-soft transition-transform hover:scale-[1.02]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-peacock-gradient text-white">
                ✉️
              </span>
              <span>
                <span className="block text-sm text-ink-soft/70">E-mail</span>
                <span className="font-semibold text-peacock-800">
                  {SITE.email}
                </span>
              </span>
            </a>
            {SITE.phone && (
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="glass-card flex items-center gap-4 rounded-2xl p-4 shadow-soft transition-transform hover:scale-[1.02]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-peacock-gradient text-white">
                  📞
                </span>
                <span>
                  <span className="block text-sm text-ink-soft/70">
                    Téléphone
                  </span>
                  <span className="font-semibold text-peacock-800">
                    {SITE.phone}
                  </span>
                </span>
              </a>
            )}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {CABINETS.map((c) => (
              <div
                key={c.ville}
                className="rounded-2xl border border-emerald-accent/30 bg-peacock-50/50 p-5"
              >
                <p className="flex items-center gap-2 font-bold text-peacock-800">
                  <span aria-hidden="true">📍</span>
                  {c.ville}
                </p>
                <p className="mt-1 text-sm text-ink-soft">{c.detail}</p>
                <p className="mt-1 text-sm font-medium text-emerald-accent">
                  {c.horaires}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Formulaire */}
        <div className="glass-card rounded-3xl p-7 shadow-soft sm:p-9">
          <h3 className="text-xl font-bold text-peacock-800">
            Envoyez-moi un message
          </h3>
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div>
              <label
                htmlFor="nom"
                className="mb-1 block text-sm font-medium text-ink-soft"
              >
                Votre nom
              </label>
              <input
                id="nom"
                name="nom"
                type="text"
                required
                className="w-full rounded-xl border border-peacock-100 bg-white/80 px-4 py-3 text-ink outline-none transition-colors focus:border-peacock-400"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-ink-soft"
              >
                Votre e-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-peacock-100 bg-white/80 px-4 py-3 text-ink outline-none transition-colors focus:border-peacock-400"
              />
            </div>
            <div>
              <label
                htmlFor="telephone"
                className="mb-1 block text-sm font-medium text-ink-soft"
              >
                Votre téléphone{" "}
                <span className="font-normal text-ink-soft/60">
                  (optionnel)
                </span>
              </label>
              <input
                id="telephone"
                name="telephone"
                type="tel"
                autoComplete="tel"
                className="w-full rounded-xl border border-peacock-100 bg-white/80 px-4 py-3 text-ink outline-none transition-colors focus:border-peacock-400"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-ink-soft"
              >
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none rounded-xl border border-peacock-100 bg-white/80 px-4 py-3 text-ink outline-none transition-colors focus:border-peacock-400"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-peacock-gradient px-6 py-3.5 font-semibold text-white shadow-bubble transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
            >
              {status === "sending" ? "Envoi en cours…" : "Envoyer"}
            </button>
            {status === "sent" && (
              <p className="text-center text-sm text-emerald-accent">
                Votre message a bien été envoyé. Merci, je vous réponds au
                plus vite !
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-red-600">
                {errorMessage ||
                  "Une erreur est survenue, merci de réessayer."}{" "}
                Vous pouvez aussi m&apos;écrire directement à{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-semibold underline-offset-2 hover:underline"
                >
                  {SITE.email}
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
