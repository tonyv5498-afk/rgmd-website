import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CITIES, cityBySlug } from "@/data/cities";
import { cityCopy } from "@/lib/cityCopy";
import { Hero, Eyebrow, Paragraphs, Steps, DocsSection, CtaSection, Breadcrumbs, CallBand } from "@/components/Blocks";
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
  const copy = cityCopy(c.slug, c.place);
  if (!copy) notFound();
  const crumbs = [{ name: "Home", path: "/" }, { name: "Service Area", path: "/service-area/" }, { name: `${c.place}, MI`, path: `/service-area/${c.slug}/` }];

  return (
    <>
      <Breadcrumbs items={crumbs.map((x, i) => (i === crumbs.length - 1 ? { name: x.name } : x))} />
      <Hero eyebrow={copy.eyebrow} h1={c.h1} lede={copy.lede}>
        {c.zips.length > 0 && (
          <>
            <p className="note" style={{ marginTop: 12 }}>Serving select {c.place} ZIP {c.zips.length > 1 ? "codes" : "code"}:</p>
            <ul className="zip-row">{c.zips.map((z) => <li key={z}>{z}</li>)}</ul>
          </>
        )}
      </Hero>

      <section className="section">
        <div className="container cols">
          <div className="prose">
            <Eyebrow>{c.place} Restoration</Eyebrow>
            <h2>{c.h2.local}</h2>
            <Paragraphs items={copy.local} />
          </div>
          <div>
            <h3>{copy.driversHeading}</h3>
            <ul className="local-facts">{copy.drivers.map((d) => <li key={d}>{d}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Eyebrow>How We Work</Eyebrow>
          <h2>{c.h2.process}</h2>
          <p className="prose">{copy.processIntro}</p>
          <Steps steps={copy.steps} />
        </div>
      </section>

      <section className="section">
        <div className="container cols">
          <div className="prose">
            <Eyebrow>{copy.riskEyebrow}</Eyebrow>
            <h2>{c.h2.risk}</h2>
            <Paragraphs items={copy.risk} />
          </div>
          <ul className="local-facts">{copy.riskList.map((d) => <li key={d}>{d}</li>)}</ul>
        </div>
      </section>

      <CallBand />
      <DocsSection eyebrow={copy.docsEyebrow} heading={c.h2.docs} paragraphs={copy.docs} />

      <section className="section">
        <div className="container">
          <Eyebrow>Our Services</Eyebrow>
          <h2>{c.h2.services}</h2>
          <div className="cards">
            {copy.cards.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}/`} className="card">
                <h3>{s.name}</h3>
                <p>{s.body}</p>
                <span className="card-link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading={c.h2.cta} text={copy.cta} />
      <JsonLd data={[cityServiceSchema(c), breadcrumbSchema(crumbs)]} />
    </>
  );
}
