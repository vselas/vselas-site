import { getFeatureFlags } from "@/lib/feature-flags";

const fallbackUrl = "https://example.com";

const baseDescription =
  "Apple-native apps that help people use smart homes more easily, starting with Easy Control for simple guest access.";

function readValue(name: string) {
  return process.env[name]?.trim() ?? "";
}

export function getSiteConfig() {
  const featureFlags = getFeatureFlags();

  return {
    name: readValue("SITE_NAME") || "vselas Apps",
    title: "Apps for easier smart homes",
    description:
      featureFlags.homeControlPlus
        ? `${baseDescription} HomeControl+ can be published as an owner-facing macOS control center when it is ready.`
        : baseDescription,
    url: readValue("SITE_URL") || fallbackUrl,
    links: {
      github: "https://github.com/dvselas",
    },
  };
}

export function absoluteUrl(path = "/") {
  return new URL(path, getSiteConfig().url).toString();
}
