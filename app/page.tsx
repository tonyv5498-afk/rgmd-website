import type { Metadata } from "next";
import Link from "next/link";
import { SITE, REVIEWS, HOME_FAQ, WHY_US, WATER_PROCESS, WATER_SITUATIONS, COMMERCIAL_CLIENTS, AVAILABILITY_NOTE } from "@/data/site";
import { COUNTY_ORDER, citiesByCounty } from "@/data/cities";
import { Eyebrow, Steps, ServiceCards, DocsSection, CtaSection, FaqList, CallBand, CallButton, Guarantees } from "@/components/Blocks";
import MoistureMap from "@/components/MoistureMap";
import ReviewCarousel from "@/components/ReviewCarousel";
import { PhotoSlot, BeforeAfter } from "@/components/PhotoSlot";
import { PHOTOS, PROJECTS } from "@/data/photos";
import JobPhoto from "@/components/JobPhoto";
import { IconArrow, IconCheck, Stars, IconStar } from "@/components/Icons";
import RequestForm from "@/components/RequestForm";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Water Damage, Mold, Fire & Odor Restoration - Metro Detroit",
  description:
    "Water damage, mold remediation, fire & smoke cleanup, odor removal and reconstruction contractor. Serving Metro Detroit communities Call Now - (313) 771-3673.",
  alternates: { canonical: "/" },
  openGraph: { url: "/", title: "Water Damage, Mold, Fire & Odor Restoration - Metro Detroit" },
};

export default function Home() {
  const { yearsExperience, projectsCompleted, googleRating } = SITE.stats;
  const featured = [...REVIEWS].sort((x, y) => y.quote.length - x.quote.length)[0];
  // Mix sources in the carousel: spread each source's reviews evenly across the whole run,
  // so Google, BBB, Facebook and direct reviews alternate instead of clumping.
  const bySource = new Map<string, typeof REVIEWS>();
  for (const r of REVIEWS) if (r !== featured) bySource.set(r.source || "Direct", [...(bySource.get(r.source || "Direct") ?? []), r]);
  const order = ["Google", "BBB", "Facebook", "Direct", "Yelp"];
  const others = [...bySource.entries()]
    .flatMap(([src, list]) => list.map((r, i) => ({ r, k: (i + 0.5) / list.length, o: order.indexOf(src) })))
    .sort((a, b) => a.k - b.k || a.o - b.o)
    .map((x) => x.r);
  const stats = [
    yearsExperience != null && { n: `${yearsExperience}+`, l: "Years of Experience" },
    projectsCompleted != null && { n: `${projectsCompleted.toLocaleString("en-US")}+`, l: "Projects Completed" },
    googleRating != null && { n: googleRating.toFixed(1), l: "Star Average on Google", star: true },
  ].filter(Boolean) as { n: string; l: string; star?: boolean }[];

  return (
    <>
      <section className="hero grid-paper home">
        <div className="container home-hero">
          <div className="hero-main">
            <Eyebrow>Emergency response available · <span className="phone">{SITE.phone}</span></Eyebrow>
            <h1>Water Damage, Fire Damage &amp; Mold Remediation in Metro Detroit</h1>
            <p className="lede">Independently owned and operated in Metro Detroit. We handle water damage, mold remediation, fire and smoke cleanup, and reconstruction coordination for homeowners, landlords, and property managers across select communities.</p>
            <div className="hero-actions">
              <CallButton label="Need Emergency Services?" className="btn-xl" />
            </div>
            <ul className="checks">
              <li><IconCheck size={18} />Locally Owned, Operated and Headquartered</li>
              <li><IconCheck size={18} />Full Service - Water, Mold, Fire, Odor and Reconstruction</li>
              <li><IconCheck size={18} />Insurance Documentation Preparation and Supplement Support</li>
              <li><IconCheck size={18} />Residential and Commercial Service</li>
              <li><IconCheck size={18} />Licensed and Insured</li>
              <li><IconCheck size={18} />Preferred Vendor for Several Insurance Carriers</li>
            </ul>
            <p className="note">{AVAILABILITY_NOTE}</p>
          </div>
          <div className="hero-visual">
            <JobPhoto src="/images/jobs/drying-equipment.webp" alt="RGMD air movers and dehumidifiers drying a room after water damage, with the wet area marked in red tape" />
            <MoistureMap />
          </div>
        </div>
        {stats.length > 0 && (
          <div className="container">
            <dl className="stats">
              {stats.map((s) => <div key={s.l} className="stat"><dt className="stat-l">{s.l}</dt><dd className="stat-n">{s.n}{s.star && <IconStar size={26} className="stat-star" />}</dd></div>)}
            </dl>
          </div>
        )}
      </section>

      <section className="section request">
        <div className="container request-grid">
          <div className="request-intro">
            <h2>Request Service Online</h2>
            <p>Active water damage, flooding, and fire damage require an immediate phone call — not a web form.</p>
            <CallButton />
          </div>
          <div className="form-card">
            <RequestForm source="home" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Eyebrow>Our Services</Eyebrow>
          <h2>Professional Disaster Restoration in Metro Detroit</h2>
          <p className="prose">Remediation of water, mold, fire, smoke and odor damage with complete rebuild capability all under one roof. We serve homeowners, landlords, property managers and more across select Metro Detroit communities with transparent, full-service restoration services.</p>
          <ServiceCards />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Recent Projects</h2>
          <p className="prose">Before and after photos from RGMD jobs across Metro Detroit.</p>
          <div className="projects">
            {PROJECTS.map((pr) => <BeforeAfter key={pr.title} project={pr} />)}
          </div>
        </div>
      </section>

      <CallBand text="Get Started" />

      <section className="section">
        <div className="container cols">
          <div>
            <Eyebrow>Water Damage Response</Eyebrow>
            <h2>Water Damage Help When Every Minute Matters</h2>
            <p>Water damage never occurs on your schedule. Whether it’s 2 AM or over a holiday weekend, the clock starts the moment excess water contaminates your structure. We respond to all types of residential and commercial water intrusion across Metro Detroit, available when you are.</p>
            <h3>Common Water Damage Situations We Handle:</h3>
            <ul className="tick-list">{WATER_SITUATIONS.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
          <div>
            <PhotoSlot photo={PHOTOS.waterResponse} ratio="16 / 10" className="section-photo" />
            <h3>Avoid Secondary Damage</h3>
            <p>Water doesn’t stop moving once it enters a structure. Within hours, moisture migrates into walls, subfloor, and insulation — creating conditions for mold growth, structural weakening, and odor that compounds the original loss. Fast extraction and proper drying aren’t optional steps, they’re the difference between a manageable claim and a major rebuild. We respond quickly, assess accurately, and start mitigation before secondary damage turns a water call into a mold job.</p>
            <CallButton label="Call Now -" />
          </div>
        </div>
      </section>

      <section className="section section-alt minor">
        <div className="container cols">
          <div className="prose">
            <h2>Not Every Leak Needs an Insurance Claim</h2>
            <p>A dripping supply line, a small leak under the sink, a stained ceiling below a bathroom — plenty of water damage is real but small. For damage like that, the repair can cost less than your deductible, and some homeowners would rather keep minor losses off their claim history.</p>
            <p>We work directly with homeowners to fix it. We find the source, dry what’s wet, replace what can’t be saved, and give you a straightforward price up front so you can decide whether to pay directly or go through insurance.</p>
            <Link href="/services/minor-water-damage-repairs/" className="text-link">Learn about minor water damage repairs <IconArrow size={16} /></Link>
          </div>
          <Guarantees />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Eyebrow>How It Works</Eyebrow>
          <h2>Our Water Restoration Process</h2>
          <p className="prose">A structured, documented approach from first call through project completion.</p>
          <Steps steps={WATER_PROCESS} />
        </div>
      </section>

      <DocsSection heading="Insurance Documentation Support" paragraphs={[
        "Filing a water, fire, or mold damage claim involves more than just calling your insurer. The quality of your documentation — photos, moisture readings, material inventories, and scope notes — can directly affect how your claim is handled.",
        "When you file a water, fire, or mold damage claim, your insurance carrier relies on documentation to evaluate scope, validate losses, and determine coverage. We photograph every affected area at each stage of the process, log daily moisture readings with dates and locations, inventory all materials removed, and produce a written scope that follows the job from extraction through dry-out. Everything we compile is organized and ready to hand off to your adjuster — so your claim has the documentation it needs to move forward accurately and efficiently. We then produce a reciprocal rebuild report either as an estimate for our services or for your use post-loss, helping you get your property back to its original state.",
      ]} />

      <section className="section">
        <div className="container cols">
          <div>
            <Eyebrow>Commercial Services</Eyebrow>
            <h2>Restoration for Commercial Properties &amp; Property Managers</h2>
            <p>Water damage, mold, and fire incidents in commercial and multi-unit properties carry compounding risks — tenant displacement, business interruption, and regulatory concerns. We work with a practical, documentation-first approach.</p>
            <p>Commercial restoration requires a different approach than residential. Multiple stakeholders, active tenants, ongoing operations, and commercial insurance policies all add layers that a standard residential mitigation crew isn’t equipped to manage. We communicate directly with property managers, building owners, and adjusters — keeping everyone aligned on scope, timeline, and documentation from first response through project close.</p>
          </div>
          <div>
            <PhotoSlot photo={PHOTOS.commercial} ratio="16 / 10" className="section-photo" />
            <h3>We Work With:</h3>
            <ul className="tick-list">{COMMERCIAL_CLIENTS.map((c) => <li key={c}>{c}</li>)}</ul>
            <Link href="/commercial-mitigation-plan/" className="btn btn-ghost">Set Up Your Property for Rapid Response</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Eyebrow>Where We Work</Eyebrow>
          <h2>Metro Detroit Service Area</h2>
          <p className="prose">We serve select Metro Detroit communities across Wayne, Oakland, Macomb, Livingston, and Washtenaw Counties. Service availability may vary by ZIP code, project type, and scheduling. Contact us with your property address to confirm.</p>
          <div className="county-grid">
            {COUNTY_ORDER.map((county) => (
              <div key={county}>
                <h3>{county} County</h3>
                <ul>{citiesByCounty(county).map((c) => <li key={c.slug}><Link href={`/service-area/${c.slug}/`}>{c.place}, MI</Link></li>)}</ul>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 24 }}><Link href="/service-area/" className="text-link">Discover our service areas <IconArrow size={16} /></Link></p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Eyebrow>Why Work With Us</Eyebrow>
          <h2>What Sets Us Apart</h2>
          <p className="prose">A local, operator-led restoration company. Not a franchise. Not a call center. Real people who understand mitigation, documentation, and what it takes to manage a claim.</p>
          <div className="cards plain">
            {WHY_US.map((w) => <div key={w.title} className="card"><h3>{w.title}</h3><p>{w.body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Reviews &amp; Testimonials</h2>
          <p className="prose">Verified reviews from homeowners and property managers across Metro Detroit. Every review is from a real client — no scripts, no incentivized feedback.</p>
          <div className="review-layout">
            <aside className="rating-card">
              <div className="ticket-head"><span className="ticket-title">Client rating</span><span className="ticket-tag">Google</span></div>
              <div className="rating-body">
                <p className="rating-num">{googleRating?.toFixed(1)}</p>
                <Stars />
                <p className="rating-label">Star average on Google</p>
              </div>
              <dl className="ticket-fields">
                <div><dt>Experience</dt><dd>{yearsExperience}+ years</dd></div>
                <div><dt>Projects completed</dt><dd>{projectsCompleted?.toLocaleString()}+</dd></div>
              </dl>
            </aside>
            {featured && (
              <figure className="review review-featured">
                <PhotoSlot photo={PHOTOS.featuredReview} ratio="16 / 9" className="review-photo" />
                <div className="review-body">
                  <Stars />
                  <blockquote>“{featured.quote}”</blockquote>
                  <figcaption>{featured.author}{featured.source ? ` — ${featured.source}` : ""}<span>{featured.service}</span></figcaption>
                </div>
              </figure>
            )}
          </div>
          <ReviewCarousel reviews={others} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Eyebrow>Common Questions</Eyebrow>
          <h2>Frequently Asked Questions</h2>
          <p className="prose">Answers to common questions about services we offer in Metro Detroit.</p>
          <FaqList items={HOME_FAQ} />
        </div>
      </section>

      <CtaSection heading="Need Restoration Help in Metro Detroit?" />
      <JsonLd data={faqSchema(HOME_FAQ)} />
    </>
  );
}
