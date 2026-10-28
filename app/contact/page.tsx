import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/site";
import { Breadcrumbs, Eyebrow } from "@/components/Blocks";
import RequestForm from "@/components/RequestForm";

export const metadata: Metadata = {
  title: "Contact Restoration Group of Metro Detroit",
  description:
    "Call or request service for water damage, mold, fire, and restoration in Metro Detroit. Share your address to confirm availability. Call (313) 771-3673.",
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact" }]} />
      <section className="section">
        <div className="container cols">
          <div>
            <Eyebrow>Contact Us</Eyebrow>
            <h1>Contact Restoration Group of Metro Detroit</h1>
            <p className="lede">Call us directly for emergency response, or submit a service request online. We’ll confirm availability for your property address and get the process started.</p>

            <div className="form-done" style={{ margin: "24px 0" }}>
              <p className="form-done-head">For Emergency Response: Call {SITE.phone}</p>
              <p style={{ margin: 0 }}>Active water damage, flooding, and fire damage require an immediate phone call — not a web form. We respond to calls faster than form submissions.</p>
            </div>

            <h2>Call or Email Us</h2>
            <h3>Phone — <a href={SITE.phoneHref}>{SITE.phone}</a></h3>
            <p>For emergency water damage, flooding, or fire damage — call directly. Do not wait for a form response.</p>
            <h3>Email — <a href={`mailto:${SITE.email}`}>{SITE.email}</a></h3>
            <p>For non-emergency inquiries, documentation requests, and general questions.</p>
            <h3>Hours — {SITE.hours}</h3>
            <p>Emergency response is available around the clock, including nights, weekends and holidays.</p>
            <h3>Service Area</h3>
            <p>Serving select communities across Wayne, Oakland, Macomb, Livingston, and Washtenaw Counties. Availability varies by ZIP code. <Link href="/service-area/">See the full list and excluded ZIP codes</Link>.</p>
          </div>
          <div className="form-card">
            <h2>Submit a Service Request</h2>
            <p className="note">Fill out the form below for non-emergency inquiries. For active water damage, flooding, or fire damage, call us directly — don’t wait for a form response.</p>
            <RequestForm source="contact" />
            <p className="note" style={{ marginTop: 12 }}>Submitting this form does not guarantee service availability or pricing. We will follow up to confirm whether we can assist with your property and project type.</p>
          </div>
        </div>
      </section>
    </>
  );
}
