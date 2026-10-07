import type { NextConfig } from "next";

// Static export for GitHub Pages.
// Note: GitHub Pages cannot set custom HTTP headers, so the former
// security/cache headers are not applied anymore.
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
