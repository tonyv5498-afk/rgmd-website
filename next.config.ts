import type { NextConfig } from "next";

const OLD_HOST = "(www\\.)?metrodetroitrestoration\\.com";

const nextConfig: NextConfig = {
  // The WordPress site used trailing slashes on every URL. Keeping them means
  // every indexed URL stays identical, and /contact → /contact/ resolves itself.
  trailingSlash: true,

  async redirects() {
    return [
      // Old domain: once metrodetroitrestoration.com is added to this Vercel project,
      // every URL 301s to the same path on the new domain, so rankings carry over.
      ...[
        { source: "/", destination: "https://www.restorationgroupmd.com/" },
        { source: "/:file(.+\\.[a-z0-9]+)", destination: "https://www.restorationgroupmd.com/:file" },
        { source: "/:path+", destination: "https://www.restorationgroupmd.com/:path+/" },
      ].map((r) => ({ ...r, has: [{ type: "host" as const, value: OLD_HOST }], permanent: true })),
      // Duplicate city pages that were live alongside the -mi versions.
      { source: "/service-area/sterling-heights", destination: "/service-area/sterling-heights-mi/", permanent: true },
      { source: "/service-area/richmond", destination: "/service-area/richmond-mi/", permanent: true },
      // WordPress system URLs Google may still request.
      { source: "/wp-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/:file(wp-sitemap-.+\\.xml)", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-content/uploads/:path*", destination: "/images/:path*", permanent: true },
      { source: "/feed", destination: "/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
