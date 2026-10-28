import type { Metadata } from "next";
import Link from "next/link";
import { COMMERCIAL_CLIENTS } from "@/data/site";
import { Hero, Eyebrow, ServiceCards, CtaSection, Breadcrumbs } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Commercial Restoration in Metro Detroit",
  description:
    "Commercial restoration in Metro Detroit: water damage, mold, fire, and rebuild for property managers, landlords, and businesses. Call (313) 771-3673.",
  alternates: { canonical: "/commercial/" },
};

// Section headings match the live page. TODO: body copy from the WordPress export.
const CAPABILITIES = [
  "Multi-Stakeholder Communication",
  "Commercial Documentation",
  "Minimizing Downtime",
  "Multi-Unit Experience",
  "Rebuild Coordination",
  "Insurance Documentation",
];

export default function Commercial() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Commercial" }]} />
      <Hero eyebrow="Commercial Restoration" h1="Commercial Restoration in Metro Detroit"
        lede="Water damage, mold, and fire incidents in commercial and multi-unit properties carry compounding risks — tenant displacement, business interruption, and regulatory concerns. We work with a practical, documentation-first approach." />
      <section className="section">
        <div className="container cols">
          <div className="prose">
            <Eyebrow>Commercial Services</Eyebrow>
            <h2>Restoration for Commercial Properties &amp; Property Managers</h2>
            <p>Commercial restoration requires a different approach than residential. Multiple stakeholders, active tenants, ongoing operations, and commercial insurance policies all add layers that a standard residential mitigation crew isn’t equipped to manage. We communicate directly with property managers, building owners, and adjusters — keeping everyone aligned on scope, timeline, and documentation from first response through project close.</p>
          </div>
          <div>
            <h3>We Work With:</h3>
            <ul className="tick-list">{COMMERCIAL_CLIENTS.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        </div>
        <div className="container">
          <div className="cards">{CAPABILITIES.map((c) => <div key={c} className="card"><h3>{c}</h3></div>)}</div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container prose">
          <Eyebrow>Commercial Mitigation Plan</Eyebrow>
          <h2>Set Up Your Property Before a Loss Happens</h2>
          <p>A pre-loss agreement puts your property profile, contacts and response expectations on file before anything goes wrong, so the first call is a dispatch, not an introduction.</p>
          <Link href="/commercial-mitigation-plan/" className="btn btn-ghost">Set Up a Commercial Mitigation Plan</Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Commercial Restoration Services</h2>
          <ServiceCards />
        </div>
      </section>
      <CtaSection heading="Need Commercial Property Restoration in Metro Detroit?" />
    </>
  );
}
