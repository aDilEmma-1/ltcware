import type { Metadata } from "next";
import { Mail, Phone, MapPin, Rocket, ShieldCheck, LineChart } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact & Pilot Interest",
  description:
    "Tell LTCware about your wallet environment and recovery challenge. Prototype form — no data is transmitted.",
};

const expect = [
  { icon: Rocket, title: "Scoped pilot", body: "We define one clear use case with measurable success criteria." },
  { icon: ShieldCheck, title: "Sandbox first", body: "Evaluation runs in a sandbox with simulated shares — no production funds." },
  { icon: LineChart, title: "Measured results", body: "You get integration effort, recovery outcomes, and time-to-deploy." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Explore a recovery integration"
        subtitle="Share your wallet environment and recovery challenge. We'll follow up about a sandbox evaluation or a controlled pilot."
        bg="gradient"
      />

      <Section bg="mist">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />

          <aside className="space-y-6">
            <div className="card-surface p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/50">
                Reach us
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-3 text-navy">
                  <Mail className="h-5 w-5 text-brand" />
                  {site.contactEmail}
                </li>
                <li className="flex items-center gap-3 text-navy">
                  <Phone className="h-5 w-5 text-brand" />
                  {site.contactPhone}
                </li>
                <li className="flex items-center gap-3 text-navy">
                  <MapPin className="h-5 w-5 text-brand" />
                  {site.location}
                </li>
              </ul>
              <p className="mt-4 border-t border-navy/8 pt-3 text-xs text-ink/45">
                Contact details are illustrative for this concept prototype.
              </p>
            </div>

            <div className="card-surface p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/50">
                What to expect
              </h3>
              <ul className="mt-4 space-y-4">
                {expect.map((e) => (
                  <li key={e.title} className="flex gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand">
                      <e.icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-navy">{e.title}</p>
                      <p className="text-sm text-ink/60">{e.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
