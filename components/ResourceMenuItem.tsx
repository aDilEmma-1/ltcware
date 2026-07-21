import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";

/**
 * Full-width, entirely-clickable resource row: blue line icon, name, one-line
 * description, generous spacing, clear hover state. Success Stories can be made
 * visually prominent via the `featured` flag.
 */
export function ResourceMenuItem({
  name,
  description,
  icon,
  href,
  featured = false,
}: {
  name: string;
  description: string;
  icon: string;
  href: string;
  featured?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group flex items-center gap-5 rounded-2xl border p-5 transition-all hover:-translate-y-0.5 md:p-6 ${
        featured
          ? "border-brand/25 bg-brand-50/60 hover:border-brand hover:bg-brand-50"
          : "border-navy/10 bg-white hover:border-brand/40 hover:bg-brand-50/30"
      }`}
    >
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
          featured ? "bg-brand text-white" : "bg-brand-50 text-brand ring-1 ring-brand/10"
        }`}
      >
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2 text-base font-bold text-navy">
          {name}
          {featured && (
            <span className="rounded bg-teal/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-teal">
              Featured
            </span>
          )}
        </span>
        <span className="mt-0.5 block text-sm leading-snug text-ink/60">
          {description}
        </span>
      </span>
      <ArrowRight className="h-5 w-5 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
