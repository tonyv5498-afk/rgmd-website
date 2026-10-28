import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/site";
import { COUNTY_ORDER, citiesByCounty } from "@/data/cities";
import { Hero, CtaSection, Breadcrumbs } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Metro Detroit Restoration Service Area",
  description:
    "Serving Wayne, Oakland, Macomb, Livingston, and Washtenaw Counties. Check coverage for your ZIP and get connected. Call (313) 771-3673.",
  alternates: { canonical: "/service-area/" },
};

export default function ServiceArea() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Service Area" }]} />
      <Hero eyebrow="Where We Work" h1="Metro Detroit Service Area"
        lede="We serve select Metro Detroit communities across Wayne, Oakland, Macomb, Livingston, and Washtenaw Counties. Service availability may vary by ZIP code, project type, and scheduling. Contact us with your property address to confirm." />
      <section className="section">
        <div className="container">
          <h2>Communities We Serve by County</h2>
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
      <section className="section section-alt">
        <div className="container">
          <h2>Excluded ZIP Codes</h2>
          <p className="excluded"><strong>Service Availability Note:</strong> {SITE.name} serves select communities. Service availability may vary by ZIP code, project type, and current scheduling. We cannot guarantee coverage for all locations. Please contact us with your property address to confirm availability before scheduling. Excluded ZIP codes include the following:</p>
          <ul className="zip-row">{SITE.excludedZips.map((z) => <li key={z}>{z}</li>)}</ul>
        </div>
      </section>
      <CtaSection heading="Need Restoration Help in Metro Detroit?" />
    </>
  );
}
