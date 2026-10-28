import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { Hero, Eyebrow, CtaSection, Breadcrumbs } from "@/components/Blocks";
import RequestForm from "@/components/RequestForm";

export const metadata: Metadata = {
  title: "Commercial Mitigation Plan | Metro Detroit",
  description:
    "Set up a pre-loss restoration agreement before damage happens. Priority dispatch, property profile on file, direct contractor access. Call (313) 771-3673.",
  alternates: { canonical: "/commercial-mitigation-plan/" },
};

const BENEFITS = [
  "Direct line to the team that will actually show up — not a dispatch center",
  "Property profile on file — we know your building before we arrive",
  "Contact hierarchy documented — we know who to call and in what order",
  "Pre-established scope parameters for common emergency types",
  "Faster documentation turnaround for commercial insurance claims",
  "Priority scheduling during high-demand periods like major storm events",
];

const PLAN = [
  { t: "Property Profile Documentation", b: "We document your property type, square footage, known vulnerabilities, access information, and contact hierarchy before a loss occurs." },
  { t: "Rapid Response Priority", b: "Commercial Mitigation Plan clients receive priority dispatch during high-demand periods — storms, freeze events, and major rain events." },
  { t: "Contact Hierarchy Setup", b: "We document who to call, in what order, and under what circumstances — so the right person is always notified immediately." },
  { t: "Documented Response Parameters", b: "Common emergency types and standard response procedures documented in advance — no ambiguity when something happens." },
  { t: "Insurance Documentation Ready", b: "Your property details and our documentation protocols are aligned before a loss — faster, more complete claims packages." },
  { t: "Direct Relationship", b: "You work with us directly — not through a franchise system, not through a national account program. Local team, direct communication." },
];

export default function MitigationPlan() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Commercial", path: "/commercial/" }, { name: "Commercial Mitigation Plan" }]} />
      <Hero eyebrow="Commercial Property Managers & Landlords" h1="Set Up a Commercial Mitigation Plan"
        lede="Establish a pre-loss relationship with our team before damage occurs — so when a pipe bursts at 2 AM or a basement floods during a storm, you’re not scrambling for a contractor. You’re calling a team that already knows your property.">
        <p className="note">For property managers, landlords, and commercial building owners in select Metro Detroit communities.</p>
      </Hero>
      <section className="section">
        <div className="container cols">
          <div className="prose">
            <Eyebrow>Why Pre-Loss Planning Matters</Eyebrow>
            <h2>The Problem With Calling a Contractor During a Crisis</h2>
            <p>When water damage, a sewage backup, or a fire hits a property you manage, the last thing you need is to spend time searching for an available restoration contractor while damage is spreading. Franchise companies route your call through national dispatch. Local companies may be at capacity. Every minute you spend finding help is a minute the damage is getting worse.</p>
            <p>A Commercial Mitigation Plan with Restoration Group of Metro Detroit means your property is already in our system before anything happens. We have your contact hierarchy, your property details, and a documented rapid-response agreement. When you call, we confirm and dispatch — no intake, no searching, no delay.</p>
          </div>
          <ul className="local-facts">{BENEFITS.map((b) => <li key={b}>{b}</li>)}</ul>
        </div>
        <div className="container">
          <div className="cards">{PLAN.map((p) => <div key={p.t} className="card"><h3>{p.t}</h3><p>{p.b}</p></div>)}</div>
        </div>
      </section>
      <section className="section section-alt" id="plan-form">
        <div className="container cols">
          <div className="prose">
            <Eyebrow>Request a Commercial Mitigation Plan</Eyebrow>
            <h2>Tell Us About Your Property</h2>
            <p>Complete the form or call us directly to discuss setting up a Commercial Mitigation Plan for your property or portfolio.</p>
            <h3>Prefer to Talk First?</h3>
            <p>Call us directly to discuss your property and what a mitigation plan would look like for your portfolio.</p>
            <p><a href={SITE.phoneHref}><strong>{SITE.phone}</strong></a><br />{SITE.email}</p>
            <p className="note"><strong>Service Area:</strong> Commercial Mitigation Plans are available for properties in select Metro Detroit communities. We will confirm service availability for your specific locations during our initial conversation.</p>
          </div>
          <div className="form-card"><RequestForm source="commercial-mitigation-plan" /></div>
        </div>
      </section>
      <CtaSection heading="Ready to Set Up Your Commercial Mitigation Plan?" />
    </>
  );
}
