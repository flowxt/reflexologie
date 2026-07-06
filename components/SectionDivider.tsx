// Trait dégradé bleu-vert utilisé pour marquer la transition entre deux
// sections à fond clair (ex. « Pour qui » → « Les cabinets »).
export default function SectionDivider() {
  return (
    <div
      className="relative mx-auto flex max-w-3xl items-center justify-center px-6"
      aria-hidden="true"
    >
      <span className="bg-linear-to-r h-[3px] w-full rounded-full from-transparent via-peacock-400 to-transparent shadow-[0_0_14px_rgba(20,183,176,0.45)]" />
      <span className="bg-peacock-gradient absolute flex h-9 w-9 items-center justify-center rounded-full text-sm text-white shadow-bubble ring-4 ring-shell">
        ✦
      </span>
    </div>
  );
}
