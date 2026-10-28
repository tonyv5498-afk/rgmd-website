"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/data/site";
import { SERVICES } from "@/data/services";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Emergency response available</span>
          <a href={SITE.phoneHref} className="topbar-phone">{SITE.phone}</a>
        </div>
      </div>
      <div className="container nav-row">
        <Link href="/" className="brand" onClick={close} aria-label={`${SITE.name} home`}>
          {/* TODO(Tony): swap for the logo file at /public/logo.svg */}
          <span className="brand-mark" aria-hidden="true">RG</span>
          <span className="brand-text">Restoration Group<br />of Metro Detroit</span>
        </Link>

        <button className="menu-btn" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>

        <nav id="primary-nav" className={open ? "nav open" : "nav"} aria-label="Main">
          <details className="nav-drop">
            <summary>Services</summary>
            <ul>
              <li><Link href="/services/" onClick={close}>All Services</Link></li>
              {SERVICES.map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}/`} onClick={close}>{s.name}</Link></li>
              ))}
            </ul>
          </details>
          <Link href="/service-area/" onClick={close}>Service Area</Link>
          <Link href="/commercial/" onClick={close}>Commercial</Link>
          <Link href="/insurance-help/" onClick={close}>Insurance Help</Link>
          <Link href="/contact/" onClick={close}>Contact</Link>
          <a href={SITE.phoneHref} className="btn btn-call nav-call">Call {SITE.phone}</a>
        </nav>
      </div>
    </header>
  );
}
