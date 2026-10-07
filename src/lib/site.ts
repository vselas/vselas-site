const fallbackUrl = "https://example.com";

const description =
  "Apple-native apps that make smart homes simpler, clearer, and safer to use.";

function readValue(name: string) {
  return process.env[name]?.trim() ?? "";
}

export function getSiteConfig() {
  return {
    name: readValue("SITE_NAME") || "vselas Apps",
    title: "Apps for easier smart homes",
    description,
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
