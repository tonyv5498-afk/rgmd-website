import Link from "next/link";
import { SITE, AVAILABILITY_NOTE, COVERAGE_DISCLAIMER, DOC_DELIVERABLES, GUARANTEES, PREFERRED_CARRIERS } from "@/data/site";
import { SERVICES, serviceBySlug } from "@/data/services";
import { IconArrow, IconCheck, IconPhone } from "@/components/Icons";

// Section labels above headings were retired in the redesign (owner approved);
// headings carry their own weight. Kept as a no-op so page files stay unchanged.
export function Eyebrow(_props: { children?: React.ReactNode }) {
  return null;
}

export function CallButton({ label, className = "" }: { label?: string; className?: string }) {
  return (
    <a href={SITE.phoneHref} className={`btn btn-call ${className}`}>
      <IconPhone size={20} />
      <span>{label ?? "Call"} <span className="phone">{SITE.phone}</span></span>
    </a>
  );
}

export function CallBand({ text = "Need Emergency Services?" }: { text?: string }) {
  return (
    <div className="call-band">
      <div className="container call-band-inner">
        <span className="call-band-text">{text}</span>
        <span className="call-band-hours">Open 24 hours, 7 days a week</span>
        <a href={SITE.phoneHref} className="call-band-phone phone"><IconPhone size={26} />{SITE.phone}</a>
      </div>
    </div>
  );
}

export function Hero({ eyebrow, h1, lede, children }: { eyebrow?: string; h1: string; lede?: string; children?: React.ReactNode }) {
  return (
    <section className="hero grid-paper">
      <div className="container hero-split">
        <div className="hero-main">
          <h1>{h1}</h1>
          {lede && <p className="lede">{lede}</p>}
          <div className="hero-actions">
            <CallButton />
            <Link href="/contact/" className="btn btn-ghost">Request Service Online</Link>
          </div>
          <p className="note">{AVAILABILITY_NOTE}</p>
          {children}
        </div>
        <aside className="hero-ticket" aria-label="Emergency contact">
          <div className="ticket-head"><span className="ticket-title">Emergency line</span><span className="ticket-tag">24/7</span></div>
          <dl className="ticket-fields">
            <div><dt>Phone</dt><dd><a href={SITE.phoneHref} className="phone ticket-phone">{SITE.phone}</a></dd></div>
            <div><dt>Hours</dt><dd>{SITE.hours}</dd></div>
            <div><dt>Credentials</dt><dd>Licensed &amp; insured</dd></div>
            {eyebrow?.includes("County") ? (
              <div><dt>Service area</dt><dd>{eyebrow}</dd></div>
            ) : (
              <div><dt>Coverage</dt><dd>Select communities in {SITE.counties.join(", ")} Counties</dd></div>
            )}
          </dl>
        </aside>
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
          <span className="card-link">Learn more <IconArrow size={16} /></span>
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
        <div className="docs-grid">
          <div className="prose">
            <h2>{heading}</h2>
            {paragraphs?.length ? <Paragraphs items={paragraphs} /> : (
              <p>We photograph every affected area at each stage, log daily moisture readings with dates and locations, inventory all materials removed, and produce a written scope that follows the job from extraction through dry-out. Everything is organized and ready to hand off to your adjuster.</p>
            )}
          </div>
          <div className="doc-sheet">
            <div className="ticket-head"><span className="ticket-title">Claim file contents</span></div>
            <ul className="doc-list">
              {DOC_DELIVERABLES.map((d) => (
                <li key={d.title}>
                  <span className="doc-box" aria-hidden="true"><IconCheck size={16} /></span>
                  <div><strong>{d.title}</strong> {d.body}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <PreferredVendor />
        <p className="disclaimer"><strong>Important:</strong> {COVERAGE_DISCLAIMER}</p>
        <Link href="/insurance-help/" className="text-link">Learn about our documentation process <IconArrow size={16} /></Link>
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
          <CallButton />
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
    <nav className="crumbs" aria-label="Breadcrumb">
      <div className="container">
        {items.map((it, i) => (
          <span key={it.name}>
            {it.path ? <Link href={it.path}>{it.name}</Link> : <span aria-current="page">{it.name}</span>}
            {i < items.length - 1 && <span className="crumb-sep" aria-hidden="true">/</span>}
          </span>
        ))}
      </div>
    </nav>
  );
}

export function Guarantees({ className = "" }: { className?: string }) {
  return (
    <dl className={`guarantees ${className}`}>
      {GUARANTEES.map((g) => (
        <div key={g.title} className="guarantee">
          <dt><span className="doc-box" aria-hidden="true"><IconCheck size={16} /></span>{g.title}</dt>
          <dd>{g.body}</dd>
        </div>
      ))}
    </dl>
  );
}

export function PreferredVendor() {
  return (
    <div className="carriers">
      <p className="carriers-head">Preferred vendor for several insurance carriers, including:</p>
      <ul className="carrier-list">
        {PREFERRED_CARRIERS.map((c) => <li key={c}>{c}</li>)}
        <li className="carrier-more">and more</li>
      </ul>
      <p className="note">You always have the right to choose your own contractor, whichever carrier you have.</p>
    </div>
  );
}
