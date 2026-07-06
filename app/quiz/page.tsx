import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Quiz from "@/components/Quiz";

export const metadata: Metadata = {
  title: "Le quiz — La réflexologie est-elle faite pour moi ?",
  description:
    "Répondez à ce quiz en cliquant sur les affirmations qui vous concernent pour savoir si la réflexologie pourrait soulager vos symptômes.",
};

export default function QuizPage() {
  return (
    <>
      <PageBanner
        eyebrow="Comprendre"
        title="Est-ce fait pour moi ?"
        subtitle="Cliquez sur les bulles qui vous concernent pour savoir aussitôt si la réflexologie peut vous aider."
      />
      <Quiz />
    </>
  );
}
