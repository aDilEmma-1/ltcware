import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { type NavMenu, type NavLink } from "@/content/navigation";

function MenuRow({
  link,
  onSelect,
  featured = false,
}: {
  link: NavLink;
  onSelect?: () => void;
  featured?: boolean;
}) {
  return (
    <Link
      href={link.href}
      onClick={onSelect}
      className={`group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-brand-50 ${
        featured ? "bg-brand-50/60 ring-1 ring-brand/15" : ""
      }`}
    >
      {link.icon && (
        <span
          className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
            featured ? "bg-brand text-white" : "bg-white text-brand ring-1 ring-brand/15"
          }`}
        >
          <Icon name={link.icon} className="h-5 w-5" />
        </span>
      )}
      <span className="min-w-0">
        <span className="flex items-center gap-1.5 text-sm font-semibold text-navy">
          {link.label}
          {featured && (
            <span className="rounded bg-teal/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-teal">
              Featured
            </span>
          )}
        </span>
        {link.description && (
          <span className="mt-0.5 block text-xs leading-snug text-ink/60">
            {link.description}
          </span>
        )}
      </span>
    </Link>
  );
}

export function DesktopMegaMenu({
  menu,
  onSelect,
}: {
  menu: NavMenu;
  onSelect?: () => void;
}) {
  /* Wide single-panel Resources treatment. */
  if (menu.variant === "resources") {
    const links = menu.columns?.[0].links ?? [];
    return (
      <div className="w-[min(52rem,90vw)] p-5">
        <div className="mb-2 flex items-center justify-between px-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink/40">
            Resources
          </span>
          <Link
            href={menu.href}
            onClick={onSelect}
            className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:text-brand-700"
          >
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid gap-1 md:grid-cols-2">
          {links.map((l) => (
            <MenuRow
              key={l.href + l.label}
              link={l}
              onSelect={onSelect}
              featured={l.label === "Success Stories"}
            />
          ))}
        </div>
      </div>
    );
  }

  /* Default two-part panel: feature card + link columns. */
  return (
    <div className="grid w-[min(48rem,90vw)] gap-4 p-5 lg:grid-cols-[1fr_1.5fr]">
      {menu.feature && (
        <Link
          href={menu.feature.href}
          onClick={onSelect}
          className="group flex flex-col justify-between rounded-2xl bg-gradient-to-br from-navy to-brand-700 p-6 text-white"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-2">
              {menu.feature.eyebrow}
            </span>
            <h3 className="mt-2 text-xl font-bold leading-tight">
              {menu.feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              {menu.feature.description}
            </p>
          </div>
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
            {menu.feature.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      )}
      <div className="grid gap-1 sm:grid-cols-2">
        {menu.columns?.map((col, i) => (
          <div key={i}>
            {col.links.map((l) => (
              <MenuRow key={l.href + l.label} link={l} onSelect={onSelect} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
