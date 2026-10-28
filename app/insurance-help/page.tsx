import type { Metadata } from "next";
import { DOC_DELIVERABLES } from "@/data/site";
import { Hero, Eyebrow, CtaSection, FaqList, Breadcrumbs } from "@/components/Blocks";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Insurance Documentation Support | Metro Detroit",
  description:
    "Photos, moisture logs, material inventory, and written scope for water, mold, and fire claims in Metro Detroit. Call (313) 771-3673.",
  alternates: { canonical: "/insurance-help/" },
};

const DOCUMENTED = [
  "Site conditions at arrival — before any work begins",
  "Moisture readings at every affected surface — documented by location and date",
  "Every material removed — type, quantity, and location",
  "Equipment placed — make, model, CFM, and placement location",
  "Daily drying logs — readings, conditions, and equipment adjustments",
  "Final scope of work — everything performed from extraction through clearance",
];

const FAQ = [
  { q: "Do you work directly with my insurance company?", a: "We communicate with adjusters and provide them with our documentation, scope, and photos. We do not negotiate claims, file claims on your behalf, or act as a public adjuster. Our role is to perform the mitigation correctly and document it thoroughly. Coverage decisions are made by your insurance carrier." },
  { q: "What if my adjuster disputes the scope?", a: "We provide accurate documentation of actual conditions. If there is a dispute about scope, we can walk the adjuster through our documentation and explain our process. We do not inflate scope or advocate beyond what the documentation supports." },
  { q: "Do I need to call my insurance company before calling you?", a: "You can call us first. We’ll assess the situation and begin mitigation. You should contact your insurance carrier promptly to report the claim — but waiting to call a restoration company while you sort out the insurance side often increases damage and total claim cost." },
  { q: "Do you guarantee what my insurance will cover?", a: "No. Coverage is determined solely by your insurance carrier based on your policy terms. We cannot predict, guarantee, or influence coverage outcomes. We can tell you what we documented and what work was performed." },
  { q: "What documentation will I receive?", a: "You’ll receive a complete package including site photos, moisture reading logs, affected material inventory, equipment logs, and a written scope of the mitigation work performed. This package is designed to support your adjuster’s review." },
];

const DELIVERABLE_TEXT: Record<string, string> = {
  "Photo Documentation": "Systematic photography of affected areas, materials, and damage extent at every stage — extraction, demo, drying, and clearance.",
  "Moisture Readings & Logs": "Daily moisture measurements with dates, locations, and readings logged and compiled for the adjuster and property owner.",
  "Affected Material Inventory": "Itemized documentation of all materials removed — quantities, locations, material types, and conditions at time of removal.",
  "Scope & Drying Reports": "Written scope of mitigation work performed — equipment used, placement, drying timelines, and final moisture clearance documentation.",
  "Adjuster Coordination": "We're available to walk adjusters through the scope, answer questions about the mitigation process, and clarify documentation.",
};

export default function InsuranceHelp() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Insurance Help" }]} />
      <Hero eyebrow="Insurance Documentation" h1="Insurance Documentation Support in Metro Detroit"
        lede="We compile the photos, moisture logs, material inventories, and written scope your insurance carrier needs to process your water, mold, or fire damage claim accurately." />
      <section className="section">
        <div className="container">
          <div className="prose">
            <h2>How We Support Your Insurance Claim</h2>
            <p>When you file a water, fire, or mold damage claim, your insurance carrier relies on documentation to evaluate scope, validate losses, and determine coverage. The quality of that documentation — how complete it is, how organized it is, and how accurately it reflects actual conditions — directly affects how your claim is processed.</p>
            <p>We photograph every affected area at each stage of the process, log daily moisture readings with dates and locations, inventory all materials removed, and produce a written scope that follows the job from extraction through dry-out. Everything we compile is organized and ready to hand off to your adjuster — so your claim has the documentation it needs to move forward accurately and efficiently.</p>
            <p className="disclaimer"><strong>Important:</strong> We do not make coverage decisions or act as a public adjuster. Coverage is determined solely by the insurance carrier based on the policy terms. Our role is to provide accurate documentation of conditions and scope — not to advocate for a specific claim outcome.</p>
          </div>
          <div className="cards">
            {DOC_DELIVERABLES.map((d) => <div key={d.title} className="card"><h3>{d.title}</h3><p>{DELIVERABLE_TEXT[d.title] ?? d.body}</p></div>)}
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container cols">
          <div className="prose">
            <Eyebrow>What We Document</Eyebrow>
            <h2>Documentation From Day One Through Final Clearance</h2>
            <p>This documentation package is compiled and organized throughout the job — not assembled at the end from memory. Every entry is timestamped, photographed, and ready for adjuster review.</p>
          </div>
          <ul className="local-facts">{DOCUMENTED.map((d) => <li key={d}>{d}</li>)}</ul>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Eyebrow>Frequently Asked Questions</Eyebrow>
          <h2>Insurance Documentation — Common Questions</h2>
          <FaqList items={FAQ} />
        </div>
      </section>
      <CtaSection heading="Need Restoration Help in Metro Detroit?" />
      <JsonLd data={faqSchema(FAQ)} />
    </>
  );
}
