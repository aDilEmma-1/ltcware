import { Download } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { ValidationPathway } from "@/components/sections/ValidationPathway";
import { ArchitectureLayers } from "@/components/diagrams/ArchitectureLayers";
import { auditProviders, ctas } from "@/content/site";

export const metadata = {
  title: "Security & Validation",
  description:
    "LTCware's security philosophy, independent-validation roadmap, and honest audit status — no completed audits are claimed.",
};

const principles = [
  {
    icon: "split",
    title: "Distribute trust",
    body: "A multi-share model spreads recovery authority across independent parties, so no single actor can move funds alone.",
  },
  {
    icon: "shield-alert",
    title: "Reduce single points of failure",
    body: "Seedless recovery removes the single secret that, once lost or stolen, compromises everything downstream.",
  },
  {
    icon: "shield-check",
    title: "Earn trust through validation",
    body: "Security claims should be independently checkable. LTCware publishes a roadmap you can hold it to — not marketing assurances.",
  },
];

const auditSummary = [
  { label: "Audit status", value: "Planned" },
  { label: "Cryptographic assessment", value: "Planned" },
  { label: "Penetration testing", value: "Planned" },
];

const faqs = [
  {
    q: "Do you hold customer funds?",
    a: "No. LTCware is recovery infrastructure, not a custodian. The architecture coordinates key shares and authorization — it does not take possession of a partner's or an end user's assets.",
  },
  {
    q: "Is recovery seedless?",
    a: "Yes. Recovery is designed around distributed multi-share key material rather than a single seed phrase, so there is no one secret to lose, phish, or steal.",
  },
  {
    q: "Have you completed a security audit?",
    a: "No. LTCware makes no claim of a completed audit. Independent validation is planned and proposed across a staged roadmap — every stage on this page is labeled accordingly.",
  },
  {
    q: "Does the demo perform real cryptographic operations?",
    a: "No. The Partner Console and recovery simulation use clearly-labeled illustrative data and perform no real cryptographic operation.",
  },
];

const mockDocs = [
  {
    title: "Architecture overview",
    body: "How the security layer, key shares, and recovery authorization fit together.",
  },
  {
    title: "Threat model",
    body: "Assets, adversaries, and the failure modes the multi-share design is meant to reduce.",
  },
  {
    title: "Validation roadmap",
    body: "The staged, independent-validation plan — from internal review to a controlled pilot.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security & Compliance"
        title="Security you can hold us to"
        subtitle="LTCware claims no completed audits. Instead, here is the architecture and the honest, staged roadmap security teams can measure it against."
        primary={{ label: "Talk to security", href: "/contact" }}
        secondary={{ label: "Launch Demo", href: "/demo" }}
        bg="navy"
        visual={<ArchitectureLayers />}
      />

      {/* Security philosophy */}
      <Section bg="white">
        <SectionHeading eyebrow="Philosophy" title="Security philosophy" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title} className="card-surface p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand">
                <Icon name={p.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Independent-validation roadmap */}
      <Section bg="mist">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Roadmap"
              title="Independent-validation roadmap"
              subtitle="An honest, staged path — every stage is planned or proposed, not complete."
            />
          </div>
          <ValidationPathway />
        </div>
      </Section>

      {/* Audit status */}
      <Section bg="white">
        <SectionHeading eyebrow="Audit status" title="Potential validation partners" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {auditProviders.map((provider) => (
            <div
              key={provider}
              className="card-surface flex items-center justify-between gap-3 p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                  <Icon name="shield-check" className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-navy">{provider}</span>
              </div>
              <Badge tone="neutral">Not engaged</Badge>
            </div>
          ))}
        </div>
        <p className="mt-5 rounded-lg border border-dashed border-navy/20 bg-mist px-4 py-3 text-sm text-ink/70">
          Potential providers for evaluation — no engagement implied.
        </p>
        <div className="mt-6 grid gap-4 rounded-2xl border border-navy/10 bg-mist p-6 sm:grid-cols-3">
          {auditSummary.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink/55">
                {s.label}
              </p>
              <p className="mt-1 text-lg font-bold text-navy">{s.value}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Security FAQ */}
      <Section bg="mist">
        <SectionHeading eyebrow="FAQ" title="Security questions, answered plainly" />
        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="card-surface group p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-navy">
                {item.q}
                <Icon
                  name="chevron-right"
                  className="h-5 w-5 shrink-0 text-brand transition-transform group-open:rotate-90"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Mock document cards */}
      <Section bg="white">
        <SectionHeading
          eyebrow="Documentation"
          title="Security documentation"
          subtitle="Illustrative documents that would accompany a real evaluation. These are concept placeholders — not downloadable files."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {mockDocs.map((doc) => (
            <div key={doc.title} className="card-surface flex flex-col p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                <Icon name="file-text" className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-base font-bold text-navy">{doc.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{doc.body}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink/45">
                <Download className="h-4 w-4" />
                Download (illustrative)
              </span>
            </div>
          ))}
        </div>
      </Section>

      <CTASection {...ctas.contact} variant="gradient" />
    </>
  );
}
