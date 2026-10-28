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
      <Hero eyebrow={s.eyebrow} h1={s.h1} lede={s.lede} />

      <section className="section">
        <div className="container cols">
          <div className="prose">
            <h2>{s.h2Intro}</h2>
            <Paragraphs items={s.intro} />
          </div>
          <div>
            <h3>{s.listHeading}:</h3>
            <ul className="tick-list one-col">{s.list.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Eyebrow>How It Works</Eyebrow>
          <h2>{s.processHeading ?? "Our Process"}</h2>
          <p className="prose">{s.processIntro}</p>
          <Steps steps={s.steps} />
        </div>
      </section>

      <section className="section">
        <div className="container cols">
          <div className="prose">
            <Eyebrow>{s.eyebrowUrgency ?? "Why Speed Matters"}</Eyebrow>
            <h2>{s.h2Urgency}</h2>
            <Paragraphs items={s.urgency} />
          </div>
          <ul className="local-facts">{s.urgencyList.map((i) => <li key={i}>{i}</li>)}</ul>
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

      <CtaSection heading={s.h2Cta} text={s.ctaText} />
      <JsonLd data={[serviceSchema(s), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: s.name, path: `/services/${s.slug}/` }])]} />
    </>
  );
}
