import Link from "next/link";
import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "white" | "outlineWhite";
type Size = "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-700 shadow-sm",
  secondary:
    "bg-white text-navy border border-navy/15 hover:border-brand hover:text-brand",
  ghost: "bg-transparent text-brand hover:bg-brand-50",
  white: "bg-white text-brand hover:bg-brand-50 shadow-sm",
  outlineWhite: "bg-transparent text-white border border-white/40 hover:bg-white/10",
};

const SIZES: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      {children}
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          strokeWidth={2}
        />
      )}
    </Link>
  );
}
