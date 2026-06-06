"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { SITE } from "@/lib/content";

type Props = {
  label?: string;
  calLink?: string;
  variant?: "solid" | "light" | "outline";
  className?: string;
};

export default function ReserveButton({
  label = "Réserver",
  calLink = SITE.calLink,
  variant = "solid",
  className = "",
}: Props) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#0f7d86" },
          dark: { "cal-brand": "#18c39a" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  const variants: Record<NonNullable<Props["variant"]>, string> = {
    solid: "bg-peacock-gradient text-white",
    light: "bg-white text-peacock-800",
    outline: "border border-peacock-300 bg-white/70 text-peacock-700",
  };

  return (
    <button
      type="button"
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-bubble transition-transform hover:scale-105 ${variants[variant]} ${className}`}
    >
      <span aria-hidden>📅</span>
      {label}
    </button>
  );
}
