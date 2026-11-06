"use client";

import Script from "next/script";
import { useEffect } from "react";
import { GTM_ID, track } from "@/lib/gtm";

// Loads Google Tag Manager and reports call-button taps as a `phone_click` event.
// Form submissions report `form_submit` from RequestForm.
export default function Analytics() {
  useEffect(() => {
    if (!GTM_ID) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!a) return;
      const where =
        a.closest(".sticky-call") ? "sticky_bar" :
        a.closest(".site-header") ? "header" :
        a.closest(".site-footer") ? "footer" :
        a.closest(".hero, .home-hero") ? "hero" : "page";
      track("phone_click", { click_location: where, page_path: window.location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!GTM_ID) return null;
  return (
    <Script id="gtm" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
}
