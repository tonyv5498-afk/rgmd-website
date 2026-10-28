import type { Metadata } from "next";
import { Hero, Eyebrow, CtaSection, Breadcrumbs } from "@/components/Blocks";
import RequestForm from "@/components/RequestForm";

export const metadata: Metadata = {
  title: "Commercial Mitigation Plan | Metro Detroit",
  description:
    "Set up a pre-loss restoration agreement before damage happens. Priority dispatch, property profile on file, direct contractor access. Call (313) 771-3673.",
  alternates: { canonical: "/commercial-mitigation-plan/" },
};

// Headings match the live page. TODO: body copy from the WordPress export.
const PLAN = [
  "Property Profile Documentation",
  "Rapid Response Priority",
  "Contact Hierarchy Setup",
  "Documented Response Parameters",
  "Insurance Documentation Ready",
  "Direct Relationship",
];

export default function MitigationPlan() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Commercial", path: "/commercial/" }, { name: "Commercial Mitigation Plan" }]} />
      <Hero eyebrow="Why Pre-Loss Planning Matters" h1="Set Up a Commercial Mitigation Plan" />
      <section className="section">
        <div className="container prose">
          <h2>The Problem With Calling a Contractor During a Crisis</h2>
        </div>
        <div className="container">
          <div className="cards">{PLAN.map((p) => <div key={p} className="card"><h3>{p}</h3></div>)}</div>
        </div>
      </section>
      <section className="section section-alt" id="plan-form">
        <div className="container cols">
          <div className="prose">
            <Eyebrow>Request a Commercial Mitigation Plan</Eyebrow>
            <h2>Tell Us About Your Property</h2>
            <p>Share the property address and a short description: building type, number of units, and the best contact. We’ll follow up to set up your plan.</p>
          </div>
          <div className="form-card"><RequestForm source="commercial-mitigation-plan" /></div>
        </div>
      </section>
      <CtaSection heading="Ready to Set Up Your Commercial Mitigation Plan?" />
    </>
  );
}
