import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Quiz from "@/components/Quiz";

export const metadata: Metadata = {
  title: "Le quiz — La réflexologie est-elle faite pour moi ? — Delphine Eminet",
  description:
    "Répondez à ce quiz en cliquant sur les affirmations qui vous concernent pour savoir si la réflexologie pourrait soulager vos symptômes.",
};

export default function QuizPage() {
  return (
    <>
      <PageBanner
        eyebrow="Comprendre"
        title="Est-ce fait pour moi ?"
        subtitle="Une question à la fois : répondez en toute spontanéité pour savoir si la réflexologie pourrait vous aider."
      />
      <Quiz />
    </>
  );
}
