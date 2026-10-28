import Link from "next/link";
import { SITE, AVAILABILITY_NOTE, COVERAGE_DISCLAIMER, DOC_DELIVERABLES } from "@/data/site";
import { SERVICES, serviceBySlug } from "@/data/services";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  // Styled text, not a heading tag, so the H1 → H2 → H3 outline stays clean.
  return <p className="eyebrow">{children}</p>;
}

export function CallBand({ text = "Need Emergency Services?" }: { text?: string }) {
  return (
    <div className="call-band">
      <div className="container call-band-inner">
        <span>{text}</span>
        <a href={SITE.phoneHref} className="btn btn-call">{SITE.phone}</a>
      </div>
    </div>
  );
}

export function Hero({ eyebrow, h1, lede, children }: { eyebrow?: string; h1: string; lede?: string; children?: React.ReactNode }) {
  return (
    <section className="hero">
      <div className="container hero-inner">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1>{h1}</h1>
        {lede && <p className="lede">{lede}</p>}
        <div className="hero-actions">
          <a href={SITE.phoneHref} className="btn btn-call">Call {SITE.phone}</a>
          <Link href="/contact/" className="btn btn-ghost">Request Service Online</Link>
        </div>
        <p className="note">{AVAILABILITY_NOTE}</p>
        {children}
      </div>
    </section>
  );
}

export function Paragraphs({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return <>{items.map((p, i) => <p key={i}>{p}</p>)}</>;
}

export function Steps({ steps }: { steps: { title: string; body?: string }[] }) {
  return (
    <ol className="steps">
      {steps.map((s, i) => (
        <li key={s.title}>
          <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3>Step {i + 1} — {s.title}</h3>
            {s.body && <p>{s.body}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ServiceCards({ slugs, headingLevel = "h3" }: { slugs?: string[]; headingLevel?: "h2" | "h3" }) {
  const list = slugs ? slugs.map((s) => serviceBySlug(s)!).filter(Boolean) : SERVICES;
  const H = headingLevel;
  return (
    <div className="cards">
      {list.map((s) => (
        <Link key={s.slug} href={`/services/${s.slug}/`} className="card">
          <H>{s.name}</H>
          <p>{s.summary}</p>
          <span className="card-link">Learn more →</span>
        </Link>
      ))}
    </div>
  );
}

export function DocsSection({ heading, paragraphs, eyebrow = "Insurance Help" }: { heading: string; paragraphs?: string[]; eyebrow?: string }) {
  return (
    <section className="section section-alt">
      <div className="container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{heading}</h2>
        <div className="prose">
          {paragraphs?.length ? <Paragraphs items={paragraphs} /> : (
            <p>We photograph every affected area at each stage, log daily moisture readings with dates and locations, inventory all materials removed, and produce a written scope that follows the job from extraction through dry-out. Everything is organized and ready to hand off to your adjuster.</p>
          )}
        </div>
        <ul className="doc-list">
          {DOC_DELIVERABLES.map((d) => <li key={d.title}><strong>{d.title}</strong> {d.body}</li>)}
        </ul>
        <p className="disclaimer"><strong>Important:</strong> {COVERAGE_DISCLAIMER}</p>
        <Link href="/insurance-help/" className="text-link">Learn about our documentation process →</Link>
      </div>
    </section>
  );
}

export function CtaSection({ heading, text }: { heading: string; text?: string }) {
  return (
    <section className="section cta">
      <div className="container cta-inner">
        <h2>{heading}</h2>
        <p>{text ?? "Call now or submit a service request and we’ll confirm availability for your property."}</p>
        <div className="hero-actions">
          <a href={SITE.phoneHref} className="btn btn-call">Call {SITE.phone}</a>
          <Link href="/contact/" className="btn btn-ghost-light">Request Service Online</Link>
        </div>
        <p className="note">Service availability subject to location and scheduling. Contact us to confirm coverage for your property address.</p>
      </div>
    </section>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path?: string }[] }) {
  return (
    <nav className="crumbs container" aria-label="Breadcrumb">
      {items.map((it, i) => (
        <span key={it.name}>
          {it.path ? <Link href={it.path}>{it.name}</Link> : <span aria-current="page">{it.name}</span>}
          {i < items.length - 1 && <span className="crumb-sep" aria-hidden="true">/</span>}
        </span>
      ))}
    </nav>
  );
}
