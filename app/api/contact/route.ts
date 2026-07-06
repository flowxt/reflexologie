import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/content";

// Tant que le domaine reflexologue-annecy.com n'est pas vérifié dans Resend,
// l'adresse d'expédition par défaut de Resend (onboarding@resend.dev) est
// utilisée. Une fois le domaine vérifié, définir RESEND_FROM_EMAIL dans
// l'environnement pour envoyer depuis une adresse @reflexologue-annecy.com.
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY manquante dans les variables d'environnement.");
    return NextResponse.json(
      { error: "Le service d'envoi n'est pas configuré." },
      { status: 500 },
    );
  }

  try {
    const { nom, email, telephone, message } = await request.json();

    if (
      typeof nom !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !nom.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "Merci de remplir tous les champs obligatoires." },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `Site reflexologue-annecy.com <${FROM_EMAIL}>`,
      to: SITE.email,
      replyTo: email,
      subject: `Nouveau message de ${nom} — site reflexologue-annecy.com`,
      text: [
        `Nom : ${nom}`,
        `E-mail : ${email}`,
        telephone && typeof telephone === "string" && telephone.trim()
          ? `Téléphone : ${telephone}`
          : null,
        "",
        message,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    });

    if (error) {
      console.error("Erreur Resend :", error);
      return NextResponse.json(
        { error: "L'envoi du message a échoué. Merci de réessayer." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erreur lors de l'envoi du message de contact :", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi." },
      { status: 500 },
    );
  }
}
