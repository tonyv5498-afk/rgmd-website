import Link from "next/link";
import { SITE } from "@/data/site";
import { SERVICES } from "@/data/services";
import { COUNTY_ORDER, citiesByCounty } from "@/data/cities";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <p className="footer-brand">{SITE.name}</p>
          <p>Independently owned and operated in Metro Detroit. Water, mold, fire, odor and reconstruction.</p>
          <p><a href={SITE.phoneHref} className="footer-phone">{SITE.phone}</a></p>
          <p>{SITE.email}</p>
        </div>
        <div className="footer-col">
          <p className="footer-head">Services</p>
          <ul>
            {SERVICES.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}/`}>{s.name}</Link></li>)}
            <li><Link href="/insurance-help/">Insurance Help</Link></li>
            <li><Link href="/commercial/">Commercial</Link></li>
            <li><Link href="/commercial-mitigation-plan/">Commercial Mitigation Plan</Link></li>
          </ul>
        </div>
        <div className="footer-col footer-cities">
          <p className="footer-head">Service Area</p>
          <div className="footer-counties">
            {COUNTY_ORDER.map((county) => (
              <div key={county}>
                <p className="footer-county">{county} County</p>
                <ul>
                  {citiesByCounty(county).map((c) => <li key={c.slug}><Link href={`/service-area/${c.slug}/`}>{c.name}</Link></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container footer-base">
        <span>© {new Date().getFullYear()} {SITE.name}</span>
        <span>Service availability subject to location and scheduling.</span>
      </div>
    </footer>
  );
}
