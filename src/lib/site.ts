const fallbackUrl = "https://example.com";

import { hasNonSmartHomeProducts } from "@/content/apps";
import { getBrandIntro } from "@/content/brand";

function readValue(name: string) {
  return process.env[name]?.trim() ?? "";
}

export function getSiteConfig() {
  const broad = hasNonSmartHomeProducts();

  return {
    name: readValue("SITE_NAME") || "vselas Apps",
    title: broad ? "Apple apps for home and everyday life" : "Apps for easier smart homes",
    description: getBrandIntro(broad),
    url: readValue("SITE_URL") || fallbackUrl,
    links: {
      github: "https://github.com/dvselas",
    },
  };
}

// The site is exported with `trailingSlash: true`, so page URLs end in "/".
// Canonical, Open Graph and sitemap URLs must use that exact form.
export function absoluteUrl(path = "/") {
  const isFile = /\.[a-z0-9]+$/i.test(path);
  const normalizedPath = isFile || path.endsWith("/") ? path : `${path}/`;

  return new URL(normalizedPath, getSiteConfig().url).toString();
}
