"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SITE } from "@/data/site";
import { SERVICES } from "@/data/services";
import { IconChevron, IconPhone } from "@/components/Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <span><span className="live-dot" aria-hidden="true" />24/7 emergency response</span>
          <a href={SITE.phoneHref} className="topbar-phone phone">{SITE.phone}</a>
        </div>
      </div>
      <div className="container nav-row">
        <Link href="/" className="brand" onClick={close} aria-label={`${SITE.name} home`}>
          <Image src="/logo.png" alt="" width={56} height={56} priority className="brand-logo" />
          <span className="brand-text">Restoration Group<br />of Metro Detroit</span>
        </Link>

        <a href={SITE.phoneHref} className="mobile-call" aria-label={`Call ${SITE.phone}`}><IconPhone size={22} /></a>
        <button className="menu-btn" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>

        <nav id="primary-nav" className={open ? "nav open" : "nav"} aria-label="Main">
          <details className="nav-drop">
            <summary>Services <IconChevron size={16} /></summary>
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
          <a href={SITE.phoneHref} className="btn btn-call nav-call"><IconPhone size={18} /><span className="phone">{SITE.phone}</span></a>
        </nav>
      </div>
    </header>
  );
}
