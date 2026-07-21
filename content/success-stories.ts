/**
 * LTCware success stories (case-study library).
 *
 * IMPORTANT: LTCware has no completed public customer engagements. Every entry
 * here is explicitly conceptual and carries the disclaimer below. Do not present
 * any of this as a real, completed deployment.
 */

export const CONCEPT_DISCLAIMER =
  "This example does not represent a completed LTCware customer engagement.";

export type PartnerType =
  | "Wallet Providers"
  | "Fintechs"
  | "Exchanges"
  | "Institutional";

export type PilotStage =
  | "Sandbox Evaluation"
  | "Controlled Pilot"
  | "Production Deployment";

export type Metric = { label: string; value: string; note: string };
export type TimelineStep = { phase: string; label: string; detail: string };

export type SuccessStory = {
  slug: string;
  title: string;
  /** e.g. "Illustrative Pilot", "Future Opportunity". */
  status: string;
  partnerType: PartnerType;
  stage: PilotStage;
  summary: string;
  featured?: boolean;
  accent: "brand" | "teal" | "navy";
  challenge: string;
  whyLtcware: string[];
  pilotScope: string[];
  timeline: TimelineStep[];
  metrics: Metric[];
  findings: string[];
  outcomes: string[];
  nextSteps: string[];
};

export const partnerTypes: PartnerType[] = [
  "Wallet Providers",
  "Fintechs",
  "Exchanges",
  "Institutional",
];

export const pilotStages: PilotStage[] = [
  "Sandbox Evaluation",
  "Controlled Pilot",
  "Production Deployment",
];

export const successStories: SuccessStory[] = [
  {
    slug: "self-custody-wallet-recovery-pilot",
    title: "Self-Custody Wallet Recovery Pilot",
    status: "Illustrative Pilot",
    partnerType: "Wallet Providers",
    stage: "Controlled Pilot",
    accent: "brand",
    featured: true,
    summary:
      "A wallet provider tests LTCware's Recovery SDK within a limited sandbox environment.",
    challenge:
      "A self-custody wallet team wants to reduce the number of users permanently locked out after losing a seed phrase — without changing the wallet's familiar interface or taking custody of user funds.",
    whyLtcware: [
      "Seedless recovery removes the single most common cause of permanent loss.",
      "A multi-share model spreads trust so no single party can unilaterally recover an account.",
      "The Recovery SDK integrates behind the existing interface, so the user experience stays intact.",
    ],
    pilotScope: [
      "One wallet build, one platform, and an internal test cohort.",
      "Recovery limited to a sandbox environment with simulated key shares.",
      "Clearly-scoped success criteria agreed before the pilot begins.",
    ],
    timeline: [
      { phase: "Week 1–2", label: "Sandbox setup", detail: "Provision keys, configure share policy, connect the SDK." },
      { phase: "Week 3–4", label: "Integration", detail: "Wire recovery flows behind the existing wallet UI." },
      { phase: "Week 5–6", label: "Simulation", detail: "Run recovery scenarios, including forced-failure cases." },
      { phase: "Week 7–8", label: "Review", detail: "Measure results and document findings for a case study." },
    ],
    metrics: [
      { label: "Recovery simulations", value: "240", note: "Illustrative sandbox runs" },
      { label: "Successful recoveries", value: "97%", note: "Illustrative, simulated" },
      { label: "Median recovery time", value: "38s", note: "Illustrative, simulated" },
      { label: "Interface changes", value: "0", note: "Recovery added behind existing UI" },
    ],
    findings: [
      "The multi-share flow can be added without altering the wallet's primary interface.",
      "Forced-failure simulations behaved predictably and surfaced clear policy states.",
      "Documentation and sandbox tooling shortened the integration learning curve.",
    ],
    outcomes: [
      "A repeatable integration pattern the team could extend to production later.",
      "A shared vocabulary for recovery policy, thresholds, and authorization.",
      "Evidence suitable for an internal go / no-go decision.",
    ],
    nextSteps: [
      "Scope a limited production trial with a small opt-in user group.",
      "Begin the independent security-validation roadmap.",
    ],
  },
  {
    slug: "crypto-native-fintech-integration",
    title: "Crypto-Native Fintech Integration",
    status: "Illustrative Use Case",
    partnerType: "Fintechs",
    stage: "Controlled Pilot",
    accent: "teal",
    featured: true,
    summary:
      "A fintech platform evaluates how LTCware's recovery layer could operate behind its existing customer interface.",
    challenge:
      "A crypto-native fintech offers an embedded wallet inside its app. Support costs for account-recovery tickets are rising, and the team wants a resilient recovery path that doesn't expose seed phrases to end users.",
    whyLtcware: [
      "Recovery runs as a layer behind the fintech's existing customer interface.",
      "Distributed key shares reduce reliance on any single internal system.",
      "Cross-chain compatibility fits a product that supports multiple assets.",
    ],
    pilotScope: [
      "Evaluation limited to the embedded-wallet product line.",
      "Recovery policy modeled on the fintech's existing risk framework.",
      "Sandbox integration with simulated shares and no production funds.",
    ],
    timeline: [
      { phase: "Phase 1", label: "Discovery", detail: "Map current recovery flows and support pain points." },
      { phase: "Phase 2", label: "Design", detail: "Model share policy against existing risk controls." },
      { phase: "Phase 3", label: "Sandbox", detail: "Integrate the SDK and run recovery simulations." },
      { phase: "Phase 4", label: "Readout", detail: "Compare projected support load and recovery outcomes." },
    ],
    metrics: [
      { label: "Projected ticket reduction", value: "~40%", note: "Illustrative model" },
      { label: "Recovery simulations", value: "180", note: "Illustrative sandbox runs" },
      { label: "Assets supported", value: "6", note: "Illustrative cross-chain scope" },
      { label: "Customer UI changes", value: "Minimal", note: "Recovery runs behind the app" },
    ],
    findings: [
      "The recovery layer maps cleanly onto an existing risk and policy framework.",
      "A behind-the-scenes model keeps the customer experience unchanged.",
      "Projected support savings justify a deeper controlled pilot.",
    ],
    outcomes: [
      "A documented integration design tailored to an embedded wallet.",
      "A projected support-cost model for internal stakeholders.",
      "Alignment on the scope of a follow-on controlled pilot.",
    ],
    nextSteps: [
      "Define a controlled pilot with a bounded user segment.",
      "Align recovery policy with compliance stakeholders.",
    ],
  },
  {
    slug: "exchange-security-evaluation",
    title: "Exchange Security Evaluation",
    status: "Future Opportunity",
    partnerType: "Exchanges",
    stage: "Sandbox Evaluation",
    accent: "navy",
    featured: true,
    summary:
      "An exchange reviews the architecture, integration boundaries, and validation requirements for a possible pilot.",
    challenge:
      "An exchange is exploring resilient recovery for the wallet environments it supports, but needs to understand the architecture, trust boundaries, and independent-validation requirements before committing to any pilot.",
    whyLtcware: [
      "A clearly-documented multi-share architecture with defined trust boundaries.",
      "A published independent-validation roadmap the security team can assess.",
      "Integration boundaries that fit an exchange's existing controls.",
    ],
    pilotScope: [
      "Architecture and threat-model review — no integration yet.",
      "Assessment of validation requirements and audit expectations.",
      "A shared decision framework for a possible future pilot.",
    ],
    timeline: [
      { phase: "Step 1", label: "Architecture review", detail: "Walk through the recovery model and trust boundaries." },
      { phase: "Step 2", label: "Requirements", detail: "Document validation and audit expectations." },
      { phase: "Step 3", label: "Decision", detail: "Agree on criteria for a future controlled pilot." },
    ],
    metrics: [
      { label: "Architecture review", value: "Complete", note: "Illustrative scope" },
      { label: "Validation stages mapped", value: "7", note: "Planned roadmap" },
      { label: "Integration effort", value: "TBD", note: "Subject to validation" },
      { label: "Engagement status", value: "Exploratory", note: "Future opportunity" },
    ],
    findings: [
      "The architecture can be evaluated independently of any integration work.",
      "Validation requirements are explicit and can be planned against.",
      "A future pilot would need clearly-scoped, measurable success criteria.",
    ],
    outcomes: [
      "A shared understanding of the recovery architecture and its boundaries.",
      "A documented list of validation prerequisites.",
      "A go / no-go framework for a future controlled pilot.",
    ],
    nextSteps: [
      "Complete independent security validation.",
      "Revisit a sandbox evaluation once validation milestones are met.",
    ],
  },
  {
    slug: "institutional-custody-readiness-review",
    title: "Institutional Custody Readiness Review",
    status: "Future Opportunity",
    partnerType: "Institutional",
    stage: "Sandbox Evaluation",
    accent: "brand",
    summary:
      "An institution reviews how a distributed recovery model could fit future custody requirements after independent validation.",
    challenge:
      "An institution is mapping the requirements a distributed recovery model would need to meet before it could be considered for regulated custody workflows.",
    whyLtcware: [
      "A distributed model reduces single points of failure by design.",
      "A documented validation roadmap supports institutional due diligence.",
      "Clear separation between the wallet product and the recovery layer.",
    ],
    pilotScope: [
      "Requirements-gathering only — no integration or funds.",
      "Mapping of controls to institutional expectations.",
      "Identification of validation prerequisites.",
    ],
    timeline: [
      { phase: "Step 1", label: "Requirements", detail: "Capture institutional control expectations." },
      { phase: "Step 2", label: "Gap review", detail: "Map the recovery model against those expectations." },
      { phase: "Step 3", label: "Roadmap", detail: "Sequence validation prerequisites." },
    ],
    metrics: [
      { label: "Controls mapped", value: "Draft", note: "Illustrative scope" },
      { label: "Validation prerequisites", value: "Identified", note: "Planned" },
      { label: "Integration", value: "Not started", note: "Subject to validation" },
      { label: "Status", value: "Exploratory", note: "Future opportunity" },
    ],
    findings: [
      "Institutional adoption depends on completed independent validation.",
      "A distributed model aligns with reducing single points of failure.",
      "Clear documentation supports early due-diligence conversations.",
    ],
    outcomes: [
      "A draft mapping of the recovery model to institutional controls.",
      "A prioritized list of validation prerequisites.",
    ],
    nextSteps: [
      "Complete the independent-validation roadmap.",
      "Reassess readiness once cryptographic assessment is done.",
    ],
  },
  {
    slug: "wallet-provider-production-readiness",
    title: "Wallet Provider Production Readiness",
    status: "Illustrative Concept",
    partnerType: "Wallet Providers",
    stage: "Production Deployment",
    accent: "teal",
    summary:
      "A concept walkthrough of what a production rollout could look like after a successful controlled pilot and validation.",
    challenge:
      "After a successful controlled pilot, a wallet provider wants to understand what a phased production rollout of resilient recovery could look like — sequencing, monitoring, and safeguards.",
    whyLtcware: [
      "A phased rollout limits blast radius and preserves user trust.",
      "Ongoing monitoring is part of the proposed validation roadmap.",
      "Recovery remains behind the existing interface at every stage.",
    ],
    pilotScope: [
      "Concept walkthrough only — contingent on prior validation and pilot success.",
      "Phased rollout plan with opt-in cohorts.",
      "Monitoring and rollback safeguards.",
    ],
    timeline: [
      { phase: "Stage 1", label: "Opt-in cohort", detail: "Enable recovery for a small opt-in group." },
      { phase: "Stage 2", label: "Expand", detail: "Grow the cohort against monitored thresholds." },
      { phase: "Stage 3", label: "General availability", detail: "Roll out with ongoing monitoring." },
    ],
    metrics: [
      { label: "Rollout stages", value: "3", note: "Illustrative plan" },
      { label: "Monitoring", value: "Continuous", note: "Proposed" },
      { label: "Rollback safeguards", value: "Built-in", note: "Illustrative" },
      { label: "Prerequisite", value: "Validation", note: "Subject to validation" },
    ],
    findings: [
      "A phased approach keeps risk contained during rollout.",
      "Monitoring must be in place before broad availability.",
      "Production readiness depends on completed validation and a successful pilot.",
    ],
    outcomes: [
      "A concept rollout plan for stakeholder discussion.",
      "A checklist of prerequisites before production.",
    ],
    nextSteps: [
      "Complete validation and a controlled pilot first.",
      "Finalize monitoring and rollback tooling.",
    ],
  },
];

export const featuredStories = successStories.filter((s) => s.featured);

export function getStory(slug: string): SuccessStory | undefined {
  return successStories.find((s) => s.slug === slug);
}
