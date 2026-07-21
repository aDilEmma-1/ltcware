import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";

export function ProductCard({
  name,
  tagline,
  icon,
  href,
  cta = "Learn more",
}: {
  name: string;
  tagline: string;
  icon: string;
  href: string;
  cta?: string;
}) {
  return (
    <Link
      href={href}
      className="card-surface group flex flex-col p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand ring-1 ring-brand/10">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-lg font-bold text-navy">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{tagline}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        {cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
