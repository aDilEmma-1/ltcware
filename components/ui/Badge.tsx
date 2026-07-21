import { type ReactNode } from "react";

type Tone = "brand" | "teal" | "amber" | "navy" | "neutral";

const TONES: Record<Tone, string> = {
  brand: "bg-brand-50 text-brand-700 ring-brand/20",
  teal: "bg-teal/10 text-teal ring-teal/25",
  amber: "bg-amber-50 text-amber-700 ring-amber-500/20",
  navy: "bg-navy/5 text-navy ring-navy/15",
  neutral: "bg-black/[0.04] text-ink/70 ring-black/10",
};

/** Maps illustrative status wording to a sensible tone. */
export function statusTone(status: string): Tone {
  const s = status.toLowerCase();
  if (s.includes("pilot")) return "brand";
  if (s.includes("use case")) return "teal";
  if (s.includes("future")) return "amber";
  return "navy";
}

export function Badge({
  children,
  tone = "brand",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${TONES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

/** Small persistent "this is a prototype" note. */
export function DisclaimerNote({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-lg border border-dashed border-navy/20 bg-mist px-3 py-1.5 text-xs text-ink/60 ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-teal" />
      {children}
    </p>
  );
}
