import { type ReactNode } from "react";
import { Container } from "./Container";

type Bg = "white" | "mist" | "brand" | "navy" | "gradient";
type Spacing = "sm" | "default" | "lg";

const BG: Record<Bg, string> = {
  white: "bg-white text-ink",
  mist: "bg-mist text-ink",
  brand: "bg-brand text-white",
  navy: "bg-navy text-white",
  gradient: "bg-gradient-to-b from-brand-50 to-white text-ink",
};

const PAD: Record<Spacing, string> = {
  sm: "py-12 md:py-16",
  default: "py-16 md:py-24",
  lg: "py-20 md:py-32",
};

export function Section({
  children,
  bg = "white",
  spacing = "default",
  container = true,
  id,
  className = "",
}: {
  children: ReactNode;
  bg?: Bg;
  spacing?: Spacing;
  container?: boolean;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`${BG[bg]} ${PAD[spacing]} ${className}`}>
      {container ? <Container>{children}</Container> : children}
    </section>
  );
}
