import { Button } from "@/components/ui/Button";

type Cta = { label: string; href: string };

/**
 * Reusable call-to-action band. Defaults to the navy → brand gradient used
 * throughout the site, matched to the Nextcloud "get in touch" placement.
 */
export function CTASection({
  eyebrow,
  heading,
  body,
  primary,
  secondary,
  variant = "gradient",
}: {
  eyebrow?: string;
  heading: string;
  body?: string;
  primary: Cta;
  secondary?: Cta;
  variant?: "gradient" | "brand" | "mist";
}) {
  const isLight = variant === "mist";
  const bg =
    variant === "mist"
      ? "bg-mist"
      : variant === "brand"
        ? "bg-brand"
        : "bg-gradient-to-br from-navy via-brand-700 to-brand";

  return (
    <section className={bg}>
      <div className="container-lg py-16 md:py-24">
        <div
          className={`mx-auto max-w-3xl text-center ${
            isLight ? "text-ink" : "text-white"
          }`}
        >
          {eyebrow && (
            <span
              className={`text-sm font-semibold uppercase tracking-wider ${
                isLight ? "text-brand" : "text-brand-2"
              }`}
            >
              {eyebrow}
            </span>
          )}
          <h2
            className={`h-display mt-3 text-3xl md:text-4xl lg:text-[2.75rem] ${
              isLight ? "text-navy" : "text-white"
            }`}
          >
            {heading}
          </h2>
          {body && (
            <p
              className={`mx-auto mt-4 max-w-2xl text-lg leading-relaxed ${
                isLight ? "text-ink/70" : "text-white/80"
              }`}
            >
              {body}
            </p>
          )}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              href={primary.href}
              size="lg"
              variant={isLight ? "primary" : "white"}
              withArrow
            >
              {primary.label}
            </Button>
            {secondary && (
              <Button
                href={secondary.href}
                size="lg"
                variant={isLight ? "secondary" : "outlineWhite"}
              >
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
