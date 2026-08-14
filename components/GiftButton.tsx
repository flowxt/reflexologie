import Link from "next/link";

export default function GiftButton() {
  return (
    <Link
      href="/reservation#carte-cadeau"
      aria-label="Offrir un bon cadeau"
      title="Offrir un bon cadeau"
      className="bg-peacock-gradient fixed bottom-24 right-5 z-60 flex h-14 w-14 items-center justify-center rounded-full text-2xl shadow-bubble transition-transform hover:scale-110"
    >
      <span aria-hidden>🎁</span>
    </Link>
  );
}
