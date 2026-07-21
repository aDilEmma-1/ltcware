import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { DemoShell } from "@/components/demo/DemoShell";

export const metadata: Metadata = {
  title: "Partner Console Demo",
  description:
    "A simulated LTCware Partner Console — walk through an illustrative recovery event with clearly-labeled prototype data.",
};

export default function DemoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-brand-700 to-brand text-white">
        <div className="bg-dotgrid absolute inset-0 opacity-20" />
        <div className="container-lg relative py-12 md:py-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-2">
            Interactive prototype
          </span>
          <h1 className="h-display mt-3 text-3xl md:text-4xl">
            Partner Console
          </h1>
          <p className="mt-3 max-w-2xl text-white/80">
            Explore how a partner tracks integration, runs a recovery
            simulation, and reviews pilot performance. Every value shown is
            illustrative — this demonstration performs no real cryptographic
            operation.
          </p>
        </div>
      </section>

      <Section bg="mist">
        <DemoShell />
      </Section>
    </>
  );
}
