import type { Metadata } from "next";
import Link from "next/link";
import { Hero, ServiceCards, CtaSection, Eyebrow, Breadcrumbs } from "@/components/Blocks";
import { COUNTY_ORDER, citiesByCounty } from "@/data/cities";

export const metadata: Metadata = {
  title: "All Restoration Services | Metro Detroit",
  description:
    "Water damage, mold remediation, fire cleanup, sewage, pipe burst, and full property reconstruction: one contractor, start to finish. Call (313) 771-3673.",
  alternates: { canonical: "/services/" },
};

const EXPECT = [
  { t: "Fast Response", b: "You speak directly with someone who can confirm availability for your address and get the process started." },
  { t: "Accurate Assessment", b: "Moisture meters and thermal imaging map the full extent of damage, including what you can't see." },
  { t: "Full Documentation", b: "Photos, moisture logs, material inventories and written scope, organized for your adjuster." },
  { t: "Rebuild Coordination", b: "When mitigation is done, we coordinate the repairs that return the property to pre-loss condition." },
];

export default function ServicesHub() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services" }]} />
      <Hero eyebrow="Our Services" h1="Restoration Services in Metro Detroit"
        lede="Water, mold, fire, smoke and odor remediation with complete rebuild capability, all under one roof." />
      <section className="section">
        <div className="container">
          <h2>Explore Our Services</h2>
          <ServiceCards />
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <Eyebrow>How It Works</Eyebrow>
          <h2>What to Expect When You Call</h2>
          <div className="cards">
            {EXPECT.map((e) => <div key={e.t} className="card"><h3>{e.t}</h3><p>{e.b}</p></div>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Metro Detroit Service Area</h2>
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
      <CtaSection heading="Not Sure Which Service You Need?" text="Call and describe what you're seeing. We'll tell you what it likely needs and confirm availability for your property." />
    </>
  );
}
