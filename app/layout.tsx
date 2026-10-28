import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/data/site";
import { businessSchema } from "@/lib/schema";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&family=Source+Sans+3:wght@400;600;700&display=swap" />
      </head>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={businessSchema()} />
      </body>
    </html>
  );
}
