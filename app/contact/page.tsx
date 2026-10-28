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
            <p className="lede">For active flooding or fire, call now rather than waiting on a form response.</p>
            <a href={SITE.phoneHref} className="btn btn-call">Call {SITE.phone}</a>
            <h2 style={{ marginTop: 36 }}>Call or Email Us</h2>
            <p><strong>Phone</strong> — <a href={SITE.phoneHref}>{SITE.phone}</a></p>
            <p><strong>Email</strong> — <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
            {/* TODO(Tony): add business hours and, if you want it shown, the office address. */}
            <h2 style={{ marginTop: 36 }}>Service Area</h2>
            <p>Select communities in Wayne, Oakland, Macomb, Livingston, and Washtenaw Counties. <Link href="/service-area/">See the full list and excluded ZIP codes</Link>.</p>
          </div>
          <div className="form-card">
            <h2>Submit a Service Request</h2>
            <p className="note">For non-emergency inquiries.</p>
            <RequestForm source="contact" />
          </div>
        </div>
      </section>
    </>
  );
}
