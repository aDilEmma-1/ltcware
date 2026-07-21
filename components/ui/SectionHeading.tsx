import { type ReactNode } from "react";

export function Eyebrow({
  children,
  tone = "brand",
}: {
  children: ReactNode;
  tone?: "brand" | "light";
}) {
  return (
    <span
      className={`text-sm font-semibold uppercase tracking-wider ${
        tone === "light" ? "text-brand-2" : "text-brand"
      }`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${alignCls} ${className}`}>
      {eyebrow && <Eyebrow tone={tone === "light" ? "light" : "brand"}>{eyebrow}</Eyebrow>}
      <h2
        className={`h-display mt-3 text-3xl md:text-4xl lg:text-[2.75rem] ${
          tone === "light" ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            tone === "light" ? "text-white/80" : "text-ink/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
