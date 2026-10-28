import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The WordPress site used trailing slashes on every URL. Keeping them means
  // every indexed URL stays identical, and /contact → /contact/ resolves itself.
  trailingSlash: true,

  async redirects() {
    return [
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
