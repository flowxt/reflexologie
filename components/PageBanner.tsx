import Sparkles from "./Sparkles";

type PageBannerProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function PageBanner({
  eyebrow,
  title,
  subtitle,
}: PageBannerProps) {
  return (
    <section className="bg-peacock-gradient relative overflow-hidden px-5 py-16 text-center text-white sm:py-20">
      <Sparkles />
      <div className="pointer-events-none absolute -right-16 -top-10 h-72 w-72 rounded-full bg-peacock-300/30 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-2xl">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-peacock-100">
            {eyebrow}
          </p>
        )}
        <h1 className="heading-script mt-3 text-5xl text-shimmer sm:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-peacock-50/90">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
