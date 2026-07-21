import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";

/** Flexible display card for listing pages (not individually navigable). */
export function ListingCard({
  icon,
  eyebrow,
  badge,
  badgeTone = "brand",
  title,
  description,
  meta,
}: {
  icon?: string;
  eyebrow?: string;
  badge?: string;
  badgeTone?: "brand" | "teal" | "amber" | "navy" | "neutral";
  title: string;
  description: string;
  meta?: string[];
}) {
  return (
    <article className="card-surface flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        {icon ? (
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand ring-1 ring-brand/10">
            <Icon name={icon} className="h-5.5 w-5.5" />
          </span>
        ) : (
          eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              {eyebrow}
            </span>
          )
        )}
        {badge && <Badge tone={badgeTone}>{badge}</Badge>}
      </div>
      <h3 className="mt-4 text-lg font-bold leading-snug text-navy">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
        {description}
      </p>
      {meta && meta.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-navy/8 pt-3 text-xs text-ink/50">
          {meta.map((m, i) => (
            <span key={m} className="flex items-center gap-2">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-ink/30" />}
              {m}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
