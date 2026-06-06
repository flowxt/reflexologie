// Quelques étoiles scintillantes (utilisé uniquement sur le Hero).
const STARS = [
  { top: "16%", left: "12%", size: 16, delay: "0s" },
  { top: "26%", left: "84%", size: 12, delay: "0.8s" },
  { top: "62%", left: "8%", size: 14, delay: "1.6s" },
  { top: "72%", left: "78%", size: 11, delay: "0.5s" },
  { top: "44%", left: "92%", size: 10, delay: "2.1s" },
  { top: "82%", left: "30%", size: 13, delay: "1.1s" },
  { top: "12%", left: "60%", size: 10, delay: "1.8s" },
];

function Star({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ filter: "drop-shadow(0 0 4px rgba(255,247,214,0.9))" }}
    >
      <path
        d="M12 0c.7 5.6 5.7 10.6 12 11.3C17.7 12 12.7 17 12 24c-.7-7-5.7-12-12-12.7C6.3 10.6 11.3 5.6 12 0Z"
        fill="#fff7d6"
      />
    </svg>
  );
}

export default function Sparkles({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {STARS.map((s, i) => (
        <span
          key={i}
          className="animate-twinkle absolute block"
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        >
          <Star size={s.size} />
        </span>
      ))}
    </div>
  );
}
