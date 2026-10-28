import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Eyebrow, ServiceCards, CtaSection, FaqList, Breadcrumbs } from "@/components/Blocks";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Commercial Restoration in Metro Detroit",
  description:
    "Commercial restoration in Metro Detroit: water damage, mold, fire, and rebuild for property managers, landlords, and businesses. Call (313) 771-3673.",
  alternates: { canonical: "/commercial/" },
};

const CLIENTS = [
  "Property managers & landlords", "Small businesses & offices", "Multi-family & apartment units", "Churches & nonprofits",
  "Retail & commercial spaces", "Light industrial properties", "HOA common areas and amenity spaces", "Mixed-use and multi-tenant buildings",
];

const CAPABILITIES = [
  { t: "Multi-Stakeholder Communication", b: "We communicate with property managers, building owners, tenants, and adjusters — keeping all parties informed throughout the project." },
  { t: "Commercial Documentation", b: "Full documentation package for commercial claims — scope, logs, photos, and materials inventory organized for commercial carriers." },
  { t: "Minimizing Downtime", b: "We coordinate scheduling to minimize disruption to tenants and business operations during mitigation and repairs." },
  { t: "Multi-Unit Experience", b: "We handle multi-family, multi-floor, and large-footprint commercial jobs with the same documentation discipline as residential." },
  { t: "Rebuild Coordination", b: "Post-mitigation reconstruction coordinated for commercial properties — managing contractors, scope, and timeline." },
  { t: "Insurance Documentation", b: "Commercial carriers require detailed documentation. We provide complete, organized packages for commercial adjusters." },
];

const FAQ = [
  { q: "Do you handle multi-unit properties with active tenants?", a: "Yes. We coordinate with property managers to minimize disruption to tenants during mitigation. Affected units are addressed directly while unaffected areas remain undisturbed. We communicate with your tenant hierarchy as directed by property management." },
  { q: "Can you work with our commercial insurance carrier?", a: "Yes. We provide complete documentation — scope, photos, moisture logs, and material inventory — organized for commercial adjuster review. We do not act as a public adjuster or make coverage decisions. Documentation is provided to support your carrier’s review process." },
  { q: "How do you handle after-hours commercial emergencies?", a: "Call (313) 771-3673 directly. We respond to commercial emergency calls the same way we respond to residential — promptly, with confirmation of availability and dispatch." },
  { q: "Do you work with property management companies on retainer or pre-loss agreements?", a: "Yes — this is what our Commercial Mitigation Plan is designed for. Property managers and landlords can establish a pre-loss agreement so response is immediate when an event occurs, without the scramble of finding a contractor during a crisis." },
  { q: "What size commercial jobs do you handle?", a: "We handle commercial jobs ranging from single-unit office water damage to multi-floor, multi-unit mitigation projects. Contact us with your property details and we’ll confirm whether the scope is within our service capacity." },
];

export default function Commercial() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Commercial" }]} />
      <Hero eyebrow="Commercial Restoration" h1="Commercial Restoration in Metro Detroit"
        lede="Water damage, mold remediation, fire and smoke cleanup, and reconstruction coordination for commercial properties, property managers, and landlords across select Metro Detroit communities." />
      <section className="section">
        <div className="container cols">
          <div className="prose">
            <Eyebrow>Commercial Services</Eyebrow>
            <h2>Restoration for Commercial Properties &amp; Property Managers</h2>
            <p>Water damage, mold, and fire incidents in commercial and multi-unit properties carry compounding risks that residential jobs don’t — tenant displacement, business interruption, regulatory compliance concerns, and commercial insurance policies that require a different level of documentation and coordination. A restoration company that handles residential jobs well isn’t automatically equipped to handle commercial ones.</p>
            <p>Commercial restoration requires a different approach than residential. Multiple stakeholders, active tenants, ongoing operations, and commercial insurance policies all add layers that a standard residential mitigation crew isn’t equipped to manage. We communicate directly with property managers, building owners, and adjusters — keeping everyone aligned on scope, timeline, and documentation from first response through project close. Whether it’s a single-unit office or a multi-family building, we treat commercial jobs with the coordination and documentation discipline the complexity demands.</p>
          </div>
          <div>
            <h3>We Work With:</h3>
            <ul className="tick-list one-col">{CLIENTS.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        </div>
        <div className="container">
          <div className="cards">{CAPABILITIES.map((c) => <div key={c.t} className="card"><h3>{c.t}</h3><p>{c.b}</p></div>)}</div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container prose">
          <Eyebrow>Commercial Mitigation Plan</Eyebrow>
          <h2>Set Up Your Property Before a Loss Happens</h2>
          <p>Property managers and landlords who establish a relationship with a restoration contractor before a loss event have a significant advantage when damage occurs. No scrambling for a contractor at 2 AM. No waiting on hold with a franchise dispatch center. Direct contact with the team that will actually show up.</p>
          <p>We offer commercial property managers and landlords the option to set up a documented property profile and rapid-response agreement before a loss occurs. This means your property is in our system, we know your contact hierarchy, and response is immediate when you call.</p>
          <Link href="/commercial-mitigation-plan/" className="btn btn-ghost">Set Up a Commercial Mitigation Plan</Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Commercial Restoration Services</h2>
          <ServiceCards />
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <Eyebrow>Common Questions</Eyebrow>
          <h2>Commercial Restoration FAQ</h2>
          <FaqList items={FAQ} />
        </div>
      </section>
      <CtaSection heading="Need Commercial Property Restoration in Metro Detroit?" text="Call now or submit a service request and we’ll confirm availability for your property today." />
      <JsonLd data={faqSchema(FAQ)} />
    </>
  );
}
