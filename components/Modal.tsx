"use client";

import { useEffect } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export default function Modal({
  open,
  onClose,
  eyebrow,
  title,
  children,
  footer,
}: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        className="absolute inset-0 cursor-default bg-peacock-950/50 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Fermer"
      />
      <div className="glass-card relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white/95 p-8 shadow-soft sm:p-10">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-peacock-50 text-peacock-700 transition-colors hover:bg-peacock-100"
          aria-label="Fermer"
        >
          ✕
        </button>
        {eyebrow && (
          <span className="heading-script text-2xl text-emerald-accent">
            {eyebrow}
          </span>
        )}
        <h3 className="mt-1 text-2xl font-bold text-peacock-800">{title}</h3>
        <div className="mt-4 space-y-3 text-ink-soft">{children}</div>
        {footer && <div className="mt-6">{footer}</div>}
      </div>
    </div>
  );
}
