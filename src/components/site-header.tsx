import Link from "next/link";
import Image from "next/image";

import { getProducts } from "@/content/apps";
import { getSiteConfig } from "@/lib/site";

export function SiteHeader() {
  const products = getProducts();
  const flagship = products[0];
  const productLinks = products.map((product) => ({
    href: `/apps/${product.slug}`,
    label: product.navLabel ?? product.name,
  }));
  const siteConfig = getSiteConfig();

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="site-header__brand" href="/">
          <Image
            alt=""
            className="site-header__logo"
            height={1024}
            priority
            src="/brand/vselas-mark-dark.png"
            width={1024}
          />
          <span>{siteConfig.name}</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="site-header__nav">
            {[
              { href: "/apps", label: "Apps" },
              ...productLinks,
              { href: "/faq", label: "FAQ" },
              { href: "/#app-store-support", label: "Support" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {flagship ? (
          <Link className="site-header__cta" href={`/apps/${flagship.slug}`}>
            Get {flagship.navLabel ?? flagship.name}
          </Link>
        ) : null}
      </div>
    </header>
  );
}
