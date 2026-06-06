type LogoProps = {
  className?: string;
  /** Affiche le sous-titre DELPHINE EMINET / RÉFLEXOLOGUE */
  withSubtitle?: boolean;
  /** Force une couleur claire (sur fond foncé) */
  light?: boolean;
};

/**
 * Logo recréé : petit personnage bras ouverts sur une colline ondulée,
 * mot « Réflexologie » en écriture cursive, aux couleurs paon.
 */
export default function Logo({
  className = "",
  withSubtitle = true,
  light = false,
}: LogoProps) {
  const main = light ? "#ffffff" : "#0c6470";
  const accent = light ? "#c4f1ea" : "#18c39a";
  const sub = light ? "rgba(255,255,255,0.85)" : "#2f5f64";

  return (
    <span
      className={`inline-flex flex-col items-center leading-none select-none ${className}`}
      aria-label="Réflexologie — Delphine Eminet, réflexologue"
      role="img"
    >
      {/* Personnage + colline */}
      <svg
        viewBox="0 0 120 78"
        className="h-[0.85em] w-auto"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logoStroke" x1="0" y1="0" x2="120" y2="0">
            <stop offset="0" stopColor={main} />
            <stop offset="1" stopColor={accent} />
          </linearGradient>
        </defs>
        {/* tête */}
        <circle
          cx="60"
          cy="16"
          r="9"
          stroke="url(#logoStroke)"
          strokeWidth="2.4"
        />
        {/* corps */}
        <path
          d="M60 25 L60 52"
          stroke="url(#logoStroke)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        {/* bras ouverts */}
        <path
          d="M60 33 C44 30 36 33 30 38 M60 33 C76 30 84 33 90 38"
          stroke="url(#logoStroke)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        {/* jambes */}
        <path
          d="M60 52 L52 60 M60 52 L68 60"
          stroke="url(#logoStroke)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        {/* colline ondulée */}
        <path
          d="M6 64 C34 56 50 70 60 64 C72 57 92 70 114 60"
          stroke="url(#logoStroke)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>

      {/* Mot principal en cursive */}
      <span
        className="font-script -mt-[0.12em] pb-[0.06em] text-[1.15em] leading-[1.15] tracking-tight"
        style={{ color: main }}
      >
        Réflexologie
      </span>

      {withSubtitle && (
        <span
          className="mt-[0.15em] flex flex-col items-center text-center"
          style={{ color: sub }}
        >
          <span className="text-[0.26em] font-semibold uppercase tracking-[0.45em]">
            Delphine&nbsp;Eminet
          </span>
          <span className="text-[0.2em] font-medium uppercase tracking-[0.55em] opacity-80">
            Réflexologue
          </span>
        </span>
      )}
    </span>
  );
}
