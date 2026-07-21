import Link from "next/link";
import { Share2, MessageCircle, Rss, AtSign, Globe } from "lucide-react";
import { Logo } from "@/components/Logo";
import { footerColumns } from "@/content/navigation";
import { site } from "@/content/site";

const social = [
  { icon: Globe, label: "Website" },
  { icon: AtSign, label: "Social" },
  { icon: MessageCircle, label: "Community" },
  { icon: Share2, label: "Share" },
  { icon: Rss, label: "RSS" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="container-lg py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          {/* Brand column */}
          <div className="max-w-xs">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {site.brand} packages patented wallet-recovery architecture into an
              integration-ready security layer for wallets, fintechs, and
              exchanges.
            </p>
            <div className="mt-5 flex gap-2">
              {social.map((s) => (
                <span
                  key={s.label}
                  aria-label={s.label}
                  title={`${s.label} (illustrative)`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80"
                >
                  <s.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                </span>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/60 transition-colors hover:text-brand-2"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl leading-relaxed">
              Independent {site.brand} concept prototype. Not affiliated with or
              endorsed by Nextcloud. Some products, metrics, case studies, and
              workflows shown are illustrative.
            </p>
            <p className="shrink-0">
              © {site.brand} — concept prototype. {site.location}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
