import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, cityBySlug } from "@/data/cities";
import { WATER_PROCESS } from "@/data/site";
import { Hero, Eyebrow, Paragraphs, Steps, ServiceCards, DocsSection, CtaSection, Breadcrumbs, CallBand } from "@/components/Blocks";
import JsonLd from "@/components/JsonLd";
import { cityServiceSchema, breadcrumbSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return CITIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = cityBySlug((await params).slug);
  if (!c) return {};
  const path = `/service-area/${c.slug}/`;
  return { title: c.title, description: c.description, alternates: { canonical: path }, openGraph: { url: path, title: c.title, description: c.description } };
}

export default async function CityPage({ params }: Props) {
  const c = cityBySlug((await params).slug);
  if (!c) notFound();
  const crumbs = [{ name: "Home", path: "/" }, { name: "Service Area", path: "/service-area/" }, { name: `${c.place}, MI`, path: `/service-area/${c.slug}/` }];

  return (
    <>
      <Breadcrumbs items={crumbs.map((x, i) => (i === crumbs.length - 1 ? { name: x.name } : x))} />
      <Hero eyebrow={`${c.place} Restoration · ${c.county} County`} h1={c.h1}>
        {c.zips.length > 0 && (
          <>
            <p className="note" style={{ marginTop: 12 }}>Serving {c.place} ZIP {c.zips.length > 1 ? "codes" : "code"}:</p>
            <ul className="zip-row">{c.zips.map((z) => <li key={z}>{z}</li>)}</ul>
          </>
        )}
      </Hero>

      <section className="section">
        <div className="container cols">
          <div className="prose">
            <h2>{c.h2.local}</h2>
            <Paragraphs items={c.body?.local} />
          </div>
          <div>
            <h3>{c.place} properties we work on</h3>
            <ul className="local-facts">{c.local.map((f) => <li key={f}>{f}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Eyebrow>How We Work</Eyebrow>
          <h2>{c.h2.process}</h2>
          <Steps steps={WATER_PROCESS} />
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>{c.h2.risk}</h2>
          <Paragraphs items={c.body?.risk} />
        </div>
      </section>

      <CallBand />
      <DocsSection heading={c.h2.docs} paragraphs={c.body?.docs} />

      <section className="section">
        <div className="container">
          <Eyebrow>Our Services</Eyebrow>
          <h2>{c.h2.services}</h2>
          <ServiceCards />
        </div>
      </section>

      <CtaSection heading={c.h2.cta} />
      <JsonLd data={[cityServiceSchema(c), breadcrumbSchema(crumbs)]} />
    </>
  );
}
