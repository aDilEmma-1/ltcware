import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { announcement } from "@/content/site";

/** Thin promo strip above the header (scrolls away; header stays sticky). */
export function AnnouncementBar() {
  return (
    <div className="bg-navy text-white">
      <div className="container-lg flex items-center justify-center gap-x-3 gap-y-1 py-2 text-center text-xs sm:text-sm flex-wrap">
        <span className="inline-flex items-center rounded-full bg-teal/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-teal">
          {announcement.badge}
        </span>
        <span className="text-white/85">{announcement.text}</span>
        <Link
          href={announcement.href}
          className="inline-flex items-center gap-1 font-semibold text-brand-2 hover:text-white"
        >
          {announcement.linkLabel}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
