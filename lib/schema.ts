import { SITE } from "@/data/site";
import type { Service } from "@/data/services";
import type { City } from "@/data/cities";

const BUSINESS_ID = `${SITE.url}/#business`;

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": BUSINESS_ID,
    name: SITE.name,
    url: `${SITE.url}/`,
    telephone: "+1-313-771-3673",
    email: SITE.email,
    areaServed: SITE.counties.map((c) => ({ "@type": "AdministrativeArea", name: `${c} County, Michigan` })),
    address: { "@type": "PostalAddress", addressRegion: "MI", addressCountry: "US" },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };
}

export function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    url: `${SITE.url}/services/${s.slug}/`,
    description: s.description,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "Place", name: "Metro Detroit, Michigan" },
  };
}

export function cityServiceSchema(c: City) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Water, Fire, Mold & Odor Restoration in ${c.place}, MI`,
    serviceType: "Property damage restoration",
    url: `${SITE.url}/service-area/${c.slug}/`,
    provider: { "@id": BUSINESS_ID },
    areaServed: {
      "@type": "City",
      name: `${c.place}, MI`,
      containedInPlace: { "@type": "AdministrativeArea", name: `${c.county} County, Michigan` },
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${SITE.url}${it.path}` })),
  };
}
