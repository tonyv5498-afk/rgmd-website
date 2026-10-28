import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES, serviceBySlug } from "@/data/services";
import { Hero, Eyebrow, Paragraphs, Steps, ServiceCards, DocsSection, CtaSection, Breadcrumbs, CallBand } from "@/components/Blocks";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = serviceBySlug((await params).slug);
  if (!s) return {};
  const path = `/services/${s.slug}/`;
  return { title: s.title, description: s.description, alternates: { canonical: path }, openGraph: { url: path, title: s.title, description: s.description } };
}

export default async function ServicePage({ params }: Props) {
  const s = serviceBySlug((await params).slug);
  if (!s) notFound();

  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: s.name }]} />
      <Hero eyebrow={s.name} h1={s.h1} />

      <section className="section">
        <div className="container cols">
          <div className="prose">
            <h2>{s.h2Intro}</h2>
            {s.intro?.length ? <Paragraphs items={s.intro} /> : <p>{s.summary}</p>}
          </div>
          {s.list?.length ? (
            <div>
              <h3>{s.listHeading}:</h3>
              <ul className="tick-list">{s.list.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Eyebrow>How It Works</Eyebrow>
          <h2>{s.slug === "water-damage-restoration" ? "Our Water Damage Restoration Process" : "Our Process"}</h2>
          <Steps steps={s.steps} />
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <Eyebrow>Why Speed Matters</Eyebrow>
          <h2>{s.h2Urgency}</h2>
          <Paragraphs items={s.urgency} />
        </div>
      </section>

      <CallBand />
      <DocsSection heading={s.h2Docs} paragraphs={s.docs} />

      <section className="section">
        <div className="container">
          <Eyebrow>Related Services</Eyebrow>
          <h2>Other Services You May Need</h2>
          <ServiceCards slugs={s.related} />
        </div>
      </section>

      <CtaSection heading={s.h2Cta} />
      <JsonLd data={[serviceSchema(s), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: s.name, path: `/services/${s.slug}/` }])]} />
    </>
  );
}
