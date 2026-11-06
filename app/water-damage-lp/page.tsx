import type { Metadata } from "next";
import Image from "next/image";
import { SITE, REVIEWS } from "@/data/site";
import { CITIES } from "@/data/cities";
import RequestForm from "@/components/RequestForm";
import { IconCheck, IconPhone, Stars } from "@/components/Icons";
import "./lp.css";

// Paid-ads landing page. Kept out of search results so it doesn't compete with
// the /services/ pages. Point Google Ads final URLs here.
export const metadata: Metadata = {
  title: "24/7 Emergency Water Damage Restoration in Metro Detroit | Call (313) 771-3673",
  description:
    "Flooded basement, burst pipe or sewage backup? Restoration Group of Metro Detroit answers 24/7/365. Emergency water removal, extraction and drying, plus fire and smoke damage. Call (313) 771-3673.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/water-damage-lp/" },
};

// Headline swaps for ad-group message match. Add ?service=<key> to the ad's final URL.
const VARIANTS: Record<string, { eyebrow: string; h1: string; hl: string; lede: string }> = {
  default:    { eyebrow: "Emergency Water Damage Restoration", h1: "Water Damage?", hl: "Every Hour Counts.", lede: "Flooded basement, burst pipe, sump pump failure or sewage backup. Standing water keeps soaking into drywall, flooring and framing until it's pulled out and dried." },
  basement:   { eyebrow: "Basement Flood Cleanup", h1: "Flooded Basement?", hl: "We Answer 24/7.", lede: "Heavy rain, groundwater or a failed sump pump. We pump it out, remove damaged materials and dry the space before it spreads." },
  sewage:     { eyebrow: "Sewage Backup Cleanup", h1: "Sewage Backup?", hl: "Don't Touch It. Call Us.", lede: "Sewage is Category 3 contaminated water. It needs proper extraction, material removal and sanitizing, not a shop vac." },
  pipe:       { eyebrow: "Burst Pipe Cleanup", h1: "Burst Pipe?", hl: "Every Hour Counts.", lede: "Shut off the water main if you safely can, then call. We'll extract the water and dry the structure." },
  frozen:     { eyebrow: "Frozen Pipe Water Damage", h1: "Frozen Pipe Burst?", hl: "Call Now. Day or Night.", lede: "When a frozen pipe thaws and splits, water can pour into walls and ceilings. Shut off the main if you safely can, then call." },
  sump:       { eyebrow: "Sump Pump Failure Cleanup", h1: "Sump Pump Failed?", hl: "We'll Get the Water Out.", lede: "Pump quit during a storm or power outage? We extract the water, dry the basement and document the loss for your claim." },
  extraction: { eyebrow: "Emergency Water Removal", h1: "Emergency Water", hl: "Removal, 24/7.", lede: "Standing water keeps soaking into drywall, flooring and framing until it's pulled out and dried. We bring commercial extraction and drying equipment." },
  fire:       { eyebrow: "Fire Damage Restoration", h1: "Fire Damage?", hl: "We're Here 24/7.", lede: "Fire, smoke and soot, plus the water left from putting it out. One call handles all of it." },
  smoke:      { eyebrow: "Smoke Damage Restoration", h1: "Smoke Damage?", hl: "Call Before It Sets In.", lede: "Smoke and soot travel well beyond the burned area. We clean, deodorize and restore." },
};

const TIMELINE = [
  { when: "Minutes", body: "Water spreads across floors and starts wicking into carpet, pad, baseboards and drywall.", level: 14 },
  { when: "Hours", body: "Drywall swells, wood flooring cups, and furniture and stored items keep absorbing moisture.", level: 34 },
  { when: "24–48 Hours", body: "Wet materials that haven't been dried are at risk of mold growth.", level: 56 },
  { when: "Days", body: "Odors set in and damage can move into subfloors and framing, making it a bigger rebuild.", level: 80 },
];

const SERVICES = [
  { name: "Emergency Water Removal", body: "Commercial extraction equipment pulls standing water out fast, followed by structural drying to stop the spread.", fire: false },
  { name: "Basement Flood Cleanup", body: "Heavy rain, groundwater or a failed sump pump. We pump it out, remove damaged materials and dry the space.", fire: false },
  { name: "Burst & Frozen Pipe Cleanup", body: "A burst pipe can release a lot of water fast. Shut off the main if you safely can, then call.", fire: false },
  { name: "Sewage Backup Cleanup", body: "Category 3 contaminated water needs proper removal, disposal and sanitizing.", fire: false },
  { name: "Sump Pump Failure Cleanup", body: "Pump quit during a storm or outage? We extract, dry the basement and document the loss.", fire: false },
  { name: "Fire & Smoke Damage", body: "Fire, smoke and odor restoration, plus the water damage left behind from firefighting.", fire: true },
];

const WHY = [
  { title: "Real People Answer", body: "Operator-led response, not a call center or national dispatch. You talk to the team that shows up." },
  { title: "Metro Detroit Based", body: "Locally owned and operated. We know the area's older homes, basements and weather." },
  { title: "Insurance Documentation", body: "Photos, daily moisture logs, material inventory and scope reports for you and your adjuster." },
  { title: "Straight Answers", body: "We tell you what we see, explain your options and let you decide. No high-pressure tactics." },
];

function CallBtn({ label = SITE.phone, className = "" }: { label?: string; className?: string }) {
  return (
    <a href={SITE.phoneHref} className={`btn btn-call ${className}`}>
      <IconPhone size={22} />
      <span className="phone">{label}</span>
    </a>
  );
}

type Props = { searchParams: Promise<{ [key: string]: string | string[] | undefined }> };

export default async function WaterDamageLP({ searchParams }: Props) {
  const sp = await searchParams;
  const key = typeof sp.service === "string" ? sp.service.toLowerCase() : "default";
  const v = VARIANTS[key] ?? VARIANTS.default;
  const { yearsExperience, projectsCompleted, googleRating } = SITE.stats;

  return (
    <div className="lp-page">
      {/* ============ HERO ============ */}
      <section className="hero lp-hero">
        <div className="lp-rings" aria-hidden="true"><span /><span /><span /></div>
        <div className="container lp-hero-grid">
          <div className="lp-hero-copy">
            <p className="lp-eyebrow"><span className="lp-dot" aria-hidden="true" />{v.eyebrow} · Metro Detroit</p>
            <h1>{v.h1}<br /><span className="lp-hl">{v.hl}</span></h1>
            <p className="lp-lede">{v.lede} <strong>Call now and talk to a real person, 24/7.</strong></p>
            <div className="lp-ctas">
              <CallBtn className="btn-xl lp-pulse" />
              <a href="#request" className="btn btn-ghost-light lp-ghost">Request a Callback</a>
            </div>
            <ul className="lp-checks">
              <li><IconCheck size={18} />Open 24/7/365</li>
              <li><IconCheck size={18} />Callback typically within 1 hour</li>
              <li><IconCheck size={18} />Insurance documentation support</li>
            </ul>
            {(yearsExperience || projectsCompleted || googleRating) && (
              <dl className="lp-stats">
                {yearsExperience && <div><dt>Years experience</dt><dd className="mono">{yearsExperience}+</dd></div>}
                {projectsCompleted && <div><dt>Projects completed</dt><dd className="mono">{projectsCompleted.toLocaleString()}+</dd></div>}
                {googleRating && <div><dt>Google rating</dt><dd className="mono">{googleRating}<Stars /></dd></div>}
              </dl>
            )}
          </div>

          <div className="form-card lp-form" id="request">
            <h2>Get Help Now</h2>
            <p className="lp-form-sub">Can&apos;t talk right now? Send your details and we&apos;ll call you back, typically within 1 hour.</p>
            <a href={SITE.phoneHref} className="lp-form-call">Fastest response: call directly<span className="phone">{SITE.phone}</span></a>
            <RequestForm source="water-damage-lp" />
          </div>
        </div>
      </section>

      {/* ============ WHY SPEED MATTERS ============ */}
      <section className="section section-alt">
        <div className="container">
          <div className="lp-head">
            <p className="lp-kicker">Why speed matters</p>
            <h2>Water Damage Doesn&apos;t Wait</h2>
            <p>The longer water sits, the more gets pulled into walls, floors and framing, and the more there is to tear out, dry and rebuild.</p>
          </div>
          <ol className="lp-timeline">
            {TIMELINE.map((t, i) => (
              <li key={t.when} className={i === TIMELINE.length - 1 ? "late" : ""}>
                <span className="lp-level" style={{ height: `${t.level}%` }} aria-hidden="true" />
                <span className="lp-when">{t.when}</span>
                <p>{t.body}</p>
              </li>
            ))}
          </ol>
          <p className="lp-src">24–48 hour guidance: U.S. EPA, <em>A Brief Guide to Mold, Moisture, and Your Home</em>.</p>
          <div className="lp-inline-cta">
            <p>Water still coming in? Don&apos;t wait until morning.</p>
            <CallBtn label={`Call ${SITE.phone}`} className="btn-xl" />
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section">
        <div className="container">
          <div className="lp-head">
            <p className="lp-kicker">Emergency services</p>
            <h2>Water Damage Restoration &amp; Cleanup</h2>
            <p>Emergency water removal, extraction and structural drying for homes and businesses across Metro Detroit, plus fire and smoke damage restoration.</p>
          </div>
          <div className="lp-svc-grid">
            {SERVICES.map((s) => (
              <div key={s.name} className={`lp-svc${s.fire ? " fire" : ""}`}>
                <h3>{s.name}</h3>
                <p>{s.body}</p>
                <a href={SITE.phoneHref} className="lp-svc-call"><IconPhone size={16} />Call about {s.name.toLowerCase()}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CALL BAND ============ */}
      <section className="lp-band">
        <div className="container lp-band-inner">
          <div>
            <p className="lp-band-head">Talk to a real person right now</p>
            <p>Not a call center. Available 24/7/365 across Metro Detroit.</p>
          </div>
          <a href={SITE.phoneHref} className="btn btn-xl lp-band-btn"><IconPhone size={22} /><span className="phone">{SITE.phone}</span></a>
        </div>
      </section>

      {/* ============ FIRE ============ */}
      <section className="lp-fire">
        <div className="container lp-fire-grid">
          <div>
            <p className="lp-kicker">Fire damage restoration</p>
            <h2>Had a Fire? Same Number. Same 24/7 Response.</h2>
            <p>After the fire department leaves, you&apos;re usually dealing with three problems at once: fire damage, smoke and soot throughout the home, and water from putting the fire out. We handle all three.</p>
            <CallBtn label={`Call ${SITE.phone}`} className="btn-xl" />
          </div>
          <ul className="lp-fire-list">
            <li><IconCheck size={20} /><div><strong>Fire Damage Restoration</strong><span>Removal of damaged materials and repairs back to pre-loss condition.</span></div></li>
            <li><IconCheck size={20} /><div><strong>Smoke &amp; Soot Cleanup</strong><span>Smoke travels well beyond the burned area and needs proper cleaning.</span></div></li>
            <li><IconCheck size={20} /><div><strong>Odor Removal</strong><span>Treating lingering smoke odor in the structure and contents.</span></div></li>
            <li><IconCheck size={20} /><div><strong>Water From Firefighting</strong><span>Extraction and drying of the water left behind.</span></div></li>
          </ul>
        </div>
      </section>

      {/* ============ STEPS + PHOTO ============ */}
      <section className="section section-alt">
        <div className="container lp-steps-grid">
          <div>
            <p className="lp-kicker">What to do right now</p>
            <h2>Three Steps. Start With a Call.</h2>
            <ol className="lp-steps">
              <li><strong>Stay safe.</strong> Stay out of standing water if outlets, cords or appliances are in it. If you can safely reach it, shut off the water main. Avoid contact with sewage.</li>
              <li><strong>Call us 24/7</strong> at <a href={SITE.phoneHref} className="phone">{SITE.phone}</a>. Tell us what happened and where. We&apos;ll confirm your area and get a crew moving.</li>
              <li><strong>We extract, dry and document.</strong> We remove the water, dry the structure and prepare documentation for your insurance claim.</li>
            </ol>
          </div>
          <figure className="lp-photo">
            <Image src="/images/jobs/drying-equipment.webp" alt="RGMD drying equipment set up on a water damage job" width={1200} height={900} sizes="(max-width: 900px) 100vw, 560px" />
            <figcaption>Drying equipment on an RGMD job</figcaption>
          </figure>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      <section className="section">
        <div className="container">
          <div className="lp-head">
            <p className="lp-kicker">Why Restoration Group</p>
            <h2>Local. Operator-Led. Not a Franchise.</h2>
          </div>
          <div className="lp-why">
            {WHY.map((w) => (
              <div key={w.title}><h3>{w.title}</h3><p>{w.body}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REVIEWS ============ */}
      <section className="lp-reviews">
        <div className="container">
          <div className="lp-head">
            <p className="lp-kicker">What clients say</p>
            <h2>Reviews From Metro Detroit</h2>
          </div>
          <div className="lp-rev-grid">
            {REVIEWS.map((r) => (
              <figure key={r.author} className="lp-rev">
                <Stars />
                <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
                <figcaption><strong>{r.author} · {r.source}</strong><span>{r.service}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICE AREA ============ */}
      <section className="section">
        <div className="container cols">
          <div>
            <p className="lp-kicker">Service area</p>
            <h2>Serving Metro Detroit</h2>
            <p>Emergency water damage, fire damage and mold remediation across five counties.</p>
            <p className="lp-counties">{SITE.counties.map((c) => <span key={c}>{c}</span>)}</p>
            <p className="lp-small">Availability can vary by ZIP code, project type and current scheduling. Call with your property address to confirm we can get to you.</p>
            <CallBtn label={`Confirm my area: ${SITE.phone}`} />
          </div>
          <ul className="lp-cities">
            {CITIES.map((c) => <li key={c.slug}>{c.name}</li>)}
          </ul>
        </div>
      </section>

      {/* ============ CLOSING ============ */}
      <section className="lp-closing">
        <div className="container">
          <h2>Water Damage Now?<br /><span className="lp-hl">Call Before It Spreads.</span></h2>
          <p>Water, sewage, fire or smoke: one call gets a real person on the line, day or night.</p>
          <CallBtn className="btn-xl lp-pulse lp-closing-btn" />
          <p className="lp-alt">Prefer a callback? <a href="#request">Send your details</a></p>
        </div>
      </section>
    </div>
  );
}
