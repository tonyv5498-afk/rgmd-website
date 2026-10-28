import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { SERVICES } from "@/data/services";
import { CITIES } from "@/data/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const core = ["/", "/services/", "/service-area/", "/commercial/", "/commercial-mitigation-plan/", "/contact/", "/insurance-help/"];
  return [
    ...core.map((p) => ({ url: `${SITE.url}${p}`, priority: p === "/" ? 1 : 0.8 })),
    ...SERVICES.map((s) => ({ url: `${SITE.url}/services/${s.slug}/`, priority: 0.8 })),
    ...CITIES.map((c) => ({ url: `${SITE.url}/service-area/${c.slug}/`, priority: 0.7 })),
  ];
}
