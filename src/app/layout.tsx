import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSiteConfig } from "@/lib/site";

import "./globals.css";

export function generateMetadata(): Metadata {
  const siteConfig = getSiteConfig();

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} | ${siteConfig.title}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    referrer: "strict-origin-when-cross-origin",
    openGraph: {
      title: `${siteConfig.name} | ${siteConfig.title}`,
      description: siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} | ${siteConfig.title}`,
      description: siteConfig.description,
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body>
        <div className="page-frame" />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
