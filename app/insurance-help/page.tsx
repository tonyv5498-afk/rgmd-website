import type { Metadata } from "next";
import { COVERAGE_DISCLAIMER, DOC_DELIVERABLES } from "@/data/site";
import { Hero, Eyebrow, CtaSection, FaqList, Breadcrumbs } from "@/components/Blocks";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Insurance Documentation Support | Metro Detroit",
  description:
    "Photos, moisture logs, material inventory, and written scope for water, mold, and fire claims in Metro Detroit. Call (313) 771-3673.",
  alternates: { canonical: "/insurance-help/" },
};

// Questions match the live page. TODO(Tony): compare answers against the WordPress export.
const FAQ = [
  { q: "Do you work directly with my insurance company?", a: "We work alongside your claim by providing documentation to you and your adjuster and walking the adjuster through the scope when asked. We don't negotiate your claim or act as a public adjuster." },
  { q: "What if my adjuster disputes the scope?", a: "The photos, daily moisture logs and material inventory are there to show what was found and why each step was taken. We can review that documentation with your adjuster. Coverage decisions remain with your carrier." },
  { q: "Do I need to call my insurance company before calling you?", a: "No. Stopping the damage comes first, so call us and report the loss to your carrier as soon as you can. Photograph everything before anything is moved or removed." },
  { q: "Do you guarantee what my insurance will cover?", a: "No. Coverage is determined solely by your insurance carrier based on your policy terms. Our role is accurate documentation of conditions and scope." },
  { q: "What documentation will I receive?", a: "Stage-by-stage photos, daily moisture readings with dates and locations, an itemized inventory of materials removed, and a written scope and drying report through final clearance." },
];

export default function InsuranceHelp() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Insurance Help" }]} />
      <Hero eyebrow="Insurance Documentation" h1="Insurance Documentation Support in Metro Detroit"
        lede="Filing a water, fire, or mold damage claim involves more than just calling your insurer. The quality of your documentation — photos, moisture readings, material inventories, and scope notes — can directly affect how your claim is handled." />
      <section className="section">
        <div className="container">
          <h2>How We Support Your Insurance Claim</h2>
          <p className="prose">When you file a water, fire, or mold damage claim, your insurance carrier relies on documentation to evaluate scope, validate losses, and determine coverage. We photograph every affected area at each stage of the process, log daily moisture readings with dates and locations, inventory all materials removed, and produce a written scope that follows the job from extraction through dry-out.</p>
          <div className="cards">
            {DOC_DELIVERABLES.map((d) => <div key={d.title} className="card"><h3>{d.title}</h3><p>{d.body}</p></div>)}
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container prose">
          <h2>Documentation From Day One Through Final Clearance</h2>
          <p>Everything we compile is organized and ready to hand off to your adjuster. We then produce a reciprocal rebuild report, either as an estimate for our services or for your use post-loss, helping you get your property back to its original state.</p>
          <p className="disclaimer"><strong>Important:</strong> {COVERAGE_DISCLAIMER}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Eyebrow>Common Questions</Eyebrow>
          <h2>Insurance Documentation — Common Questions</h2>
          <FaqList items={FAQ} />
        </div>
      </section>
      <CtaSection heading="Need Restoration Help in Metro Detroit?" />
      <JsonLd data={faqSchema(FAQ)} />
    </>
  );
}
