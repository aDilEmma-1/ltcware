import { type ReactNode } from "react";
import { Button } from "@/components/ui/Button";

type Cta = { label: string; href: string };
type Bg = "gradient" | "navy" | "white" | "mist";

const BG: Record<Bg, string> = {
  gradient: "bg-gradient-to-b from-brand-50 to-white",
  navy: "bg-gradient-to-br from-navy via-brand-700 to-brand text-white",
  white: "bg-white",
  mist: "bg-mist",
};

/** Reusable inner-page hero. Pass `visual` for a two-column layout. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  primary,
  secondary,
  bg = "gradient",
  visual,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  primary?: Cta;
  secondary?: Cta;
  bg?: Bg;
  visual?: ReactNode;
  children?: ReactNode;
}) {
  const dark = bg === "navy";
  return (
    <section className={BG[bg]}>
      <div className="container-lg py-16 md:py-24">
        <div
          className={
            visual
              ? "grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              : "max-w-3xl"
          }
        >
          <div>
            {eyebrow && (
              <span
                className={`text-sm font-semibold uppercase tracking-wider ${
                  dark ? "text-brand-2" : "text-brand"
                }`}
              >
                {eyebrow}
              </span>
            )}
            <h1
              className={`h-display mt-3 text-4xl md:text-5xl lg:text-[3.25rem] ${
                dark ? "text-white" : "text-navy"
              }`}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={`mt-5 max-w-2xl text-lg leading-relaxed md:text-xl ${
                  dark ? "text-white/80" : "text-ink/70"
                }`}
              >
                {subtitle}
              </p>
            )}
            {(primary || secondary) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {primary && (
                  <Button
                    href={primary.href}
                    size="lg"
                    variant={dark ? "white" : "primary"}
                    withArrow
                  >
                    {primary.label}
                  </Button>
                )}
                {secondary && (
                  <Button
                    href={secondary.href}
                    size="lg"
                    variant={dark ? "outlineWhite" : "secondary"}
                  >
                    {secondary.label}
                  </Button>
                )}
              </div>
            )}
            {children}
          </div>
          {visual && <div className="lg:pl-4">{visual}</div>}
        </div>
      </div>
    </section>
  );
}
