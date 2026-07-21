import { type ReactNode } from "react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { DisclaimerNote } from "@/components/ui/Badge";

/** Shared scaffold for the content-listing pages (blog, events, etc.). */
export function ListingLayout({
  eyebrow,
  title,
  subtitle,
  note,
  children,
  footer,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  note?: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} bg="gradient" />
      <Section bg="mist">
        {note && (
          <div className="mb-8">
            <DisclaimerNote>{note}</DisclaimerNote>
          </div>
        )}
        {children}
      </Section>
      {footer}
    </>
  );
}
