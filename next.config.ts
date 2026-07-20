import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The gallery is now a single filterable page; the old sub-routes redirect
  // to it so any bookmarked / external links keep working.
  async redirects() {
    return [
      { source: '/gallery/images', destination: '/gallery', permanent: true },
      { source: '/gallery/videos', destination: '/gallery', permanent: true },
    ];
  },
};

export default nextConfig;
