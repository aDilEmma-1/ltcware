import Link from "next/link";
import { site } from "@/content/site";

/**
 * Original LTCware wordmark. A rounded gradient tile holding a shield + keyhole
 * glyph (recovery + security), next to the LTCware name. No third-party assets.
 */
export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const textColor = variant === "light" ? "text-white" : "text-navy";
  const subColor = variant === "light" ? "text-white/60" : "text-ink/50";
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${site.brand} home`}
    >
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden>
        <defs>
          <linearGradient id="ltcMark" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0" stopColor="#20A6E8" />
            <stop offset="1" stopColor="#0787D1" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="11" fill="url(#ltcMark)" />
        <path
          d="M20 8.5l8.5 3.2v6.1c0 5.4-3.6 9.9-8.5 11.7-4.9-1.8-8.5-6.3-8.5-11.7v-6.1L20 8.5z"
          fill="white"
          fillOpacity="0.16"
          stroke="white"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="18.5" r="2.6" fill="white" />
        <rect x="18.9" y="20.4" width="2.2" height="5" rx="1.1" fill="white" />
      </svg>
      <span className="leading-none">
        <span className={`block text-lg font-bold tracking-tight ${textColor}`}>
          {site.brand}
        </span>
        <span
          className={`block text-[10px] font-semibold uppercase tracking-[0.18em] ${subColor}`}
        >
          Security Hub
        </span>
      </span>
    </Link>
  );
}
