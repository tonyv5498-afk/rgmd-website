import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/600.css";
import "@fontsource/public-sans/700.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/data/site";
import { businessSchema } from "@/lib/schema";
import { IconPhone } from "@/components/Icons";
import Analytics from "@/components/Analytics";
import { GTM_ID } from "@/lib/gtm";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Water Damage, Mold, Fire & Odor Restoration - Metro Detroit", template: "%s" },
  description:
    "Water damage, mold remediation, fire & smoke cleanup, odor removal and reconstruction contractor. Serving Metro Detroit communities Call Now - (313) 771-3673.",
  openGraph: { siteName: SITE.name, locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  verification: { google: "WgScnyn5lir-ME9AeqktYGB7jLIjTruWo1EJISoJQOU" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#14264a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {GTM_ID && (
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} title="Google Tag Manager" />
          </noscript>
        )}
        <Analytics />
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <a href={SITE.phoneHref} className="sticky-call"><IconPhone size={22} />Call now <span className="phone">{SITE.phone}</span></a>
        <JsonLd data={businessSchema()} />
      </body>
    </html>
  );
}
