import Link from "next/link";
import { SITE } from "@/data/site";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container prose">
        <h1>Page not found</h1>
        <p>This page has moved or no longer exists. For emergency service, call <a href={SITE.phoneHref}>{SITE.phone}</a>.</p>
        <p><Link href="/">Go to the homepage</Link> · <Link href="/services/">See all services</Link> · <Link href="/service-area/">Check your service area</Link></p>
      </div>
    </section>
  );
}
