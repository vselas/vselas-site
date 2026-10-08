import Link from "next/link";
import Image from "next/image";

import { getFaqGroups, getProducts } from "@/content/apps";
import { getSiteConfig } from "@/lib/site";

export function SiteHeader() {
  const products = getProducts();
  const flagship = products[0];
  const siteConfig = getSiteConfig();
  const navItems = [
    ...(products.length > 0
      ? [
          { href: "/apps", label: "Apps" },
          ...products.map((product) => ({
            href: `/apps/${product.slug}`,
            label: product.navLabel ?? product.name,
          })),
        ]
      : []),
    ...(getFaqGroups().length > 0 ? [{ href: "/faq", label: "FAQ" }] : []),
    { href: "/#app-store-support", label: "Support" },
  ];

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="site-header__brand" href="/">
          <Image
            alt=""
            className="site-header__logo"
            height={192}
            priority
            src="/brand/vselas-mark-dark.png"
            width={192}
          />
          <span>{siteConfig.name}</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="site-header__nav">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {products.length > 1 ? (
          <Link className="site-header__cta" href="/apps">
            Explore the apps
          </Link>
        ) : flagship ? (
          <Link className="site-header__cta" href={`/apps/${flagship.slug}`}>
            Get {flagship.navLabel ?? flagship.name}
          </Link>
        ) : null}
      </div>
    </header>
  );
}
