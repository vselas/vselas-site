import type { MetadataRoute } from "next";

import { getFaqGroups, getProducts } from "@/content/apps";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const products = getProducts();
  const lastModified = new Date();

  const productEntries = products.map((product) => ({
    url: absoluteUrl(`/apps/${product.slug}`),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const contentEntries: MetadataRoute.Sitemap = [];

  if (products.length > 0) {
    contentEntries.push({
      url: absoluteUrl("/apps"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  if (getFaqGroups().length > 0) {
    contentEntries.push({
      url: absoluteUrl("/faq"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...contentEntries,
    {
      url: absoluteUrl("/impressum"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/datenschutz"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    ...productEntries,
  ];
}
