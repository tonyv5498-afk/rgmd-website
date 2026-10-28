import type { Metadata } from "next";
import Link from "next/link";
import { Hero, CtaSection, Eyebrow, Breadcrumbs } from "@/components/Blocks";
import { SERVICES } from "@/data/services";
import { COUNTY_ORDER, citiesByCounty } from "@/data/cities";

export const metadata: Metadata = {
  title: "All Restoration Services | Metro Detroit",
  description:
    "Water damage, mold remediation, fire cleanup, sewage, pipe burst, and full property reconstruction: one contractor, start to finish. Call (313) 771-3673.",
  alternates: { canonical: "/services/" },
};

const BLURBS: Record<string, string> = {
  "water-damage-restoration": "Professional extraction, moisture mapping, and structural drying for all types of water intrusion — pipes, appliances, roof leaks, and more.",
  "emergency-water-removal": "When water is actively entering your property, every hour matters. Commercial-grade extraction and rapid moisture assessment to stop damage fast.",
  "basement-flood-cleanup": "Systematic extraction, material removal, drying equipment, and dehumidification for basement flooding from any source.",
  "sump-pump-failure": "Fast response to sump pump failures during heavy rain events. Extraction, drying plan, and documentation before secondary damage compounds the loss.",
  "sewage-cleanup": "Contaminated black water requires immediate, professional handling. Containment, material removal, antimicrobial treatment, and full insurance documentation.",
  "pipe-burst-cleanup": "Frozen or failed pipes can release hundreds of gallons before the source is found. We locate, extract, remove, and dry — fast.",
  "mold-remediation": "Containment, removal of affected materials, antimicrobial treatment, and clearance documentation following industry-standard remediation protocols.",
  "fire-smoke-damage": "Debris removal, smoke odor mitigation, soot cleaning, and content evaluation — with full coordination for insurance and reconstruction.",
  "reconstruction-repairs": "After mitigation is complete, we coordinate the full rebuild — drywall, flooring, paint, and structural repairs to return your property to pre-loss condition.",
};

const EXPECT = [
  { t: "Fast Response", b: "We respond to initial inquiries quickly and confirm availability for your location and project type before dispatch." },
  { t: "Accurate Assessment", b: "Moisture meters and thermal imaging identify the full extent of damage — including hidden wet zones not visible to the eye." },
  { t: "Full Documentation", b: "Every job is photographed and logged from first contact through final dry-out. Your adjuster gets everything they need." },
  { t: "Rebuild Coordination", b: "We don't disappear after mitigation. We coordinate the repair and reconstruction phase to get your property back to normal." },
];

export default function ServicesHub() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services" }]} />
      <Hero eyebrow="Our Services" h1="Restoration Services in Metro Detroit"
        lede="Full-service water damage, mold remediation, fire and smoke cleanup, odor removal, and complete rebuild — all under one roof. Serving select Metro Detroit communities." />
      <section className="section">
        <div className="container">
          <Eyebrow>What We Do</Eyebrow>
          <h2>Explore Our Services</h2>
          <p className="prose">Every service we offer — from emergency water extraction to full property reconstruction. Select any service to learn more.</p>
          <div className="cards">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}/`} className="card">
                <h3>{s.name}</h3>
                <p>{BLURBS[s.slug]}</p>
                <span className="card-link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <Eyebrow>How We Work</Eyebrow>
          <h2>What to Expect When You Call</h2>
          <p className="prose">Every job follows the same disciplined approach — fast response, accurate assessment, clear communication, and documentation from start to finish.</p>
          <div className="cards">
            {EXPECT.map((e) => <div key={e.t} className="card"><h3>{e.t}</h3><p>{e.b}</p></div>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Eyebrow>Where We Work</Eyebrow>
          <h2>Metro Detroit Service Area</h2>
          <p className="prose">We serve homeowners, landlords, property managers, and businesses across Wayne, Oakland, Macomb, Livingston, and Washtenaw Counties. Service availability varies by ZIP code and project type.</p>
          <div className="county-grid">
            {COUNTY_ORDER.map((county) => (
              <div key={county}>
                <h3>{county} County</h3>
                <ul>{citiesByCounty(county).map((c) => <li key={c.slug}><Link href={`/service-area/${c.slug}/`}>{c.place}, MI</Link></li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaSection heading="Not Sure Which Service You Need?" text="Call us and describe your project. We’ll help you understand what type of response is needed, confirm availability, and get the process started." />
    </>
  );
}
