import Link from "next/link";
import Image from "next/image";

import { getProducts } from "@/content/apps";
import { getLegalConfig } from "@/lib/legal";
import { getSiteConfig } from "@/lib/site";

export function SiteFooter() {
  const products = getProducts();
  const hasCompanion = products.length > 1;
  const legalConfig = getLegalConfig();
  const siteConfig = getSiteConfig();

  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div>
          <div className="site-footer__brand">
            <Image
              alt=""
              className="site-footer__logo"
              height={1024}
              src="/brand/vselas-mark-light.png"
              width={1024}
            />
            <span>{siteConfig.name}</span>
          </div>
          <p className="site-footer__title">
            {hasCompanion
              ? "Helpful apps for different moments at home, from guest access today to more control over time."
              : "Easy Control is built to make smart-home visits simpler for both guests and hosts."}
          </p>
        </div>
        <div className="site-footer__links">
          <Link href="/apps">All apps</Link>
          {products.map((product) => (
            <Link href={`/apps/${product.slug}`} key={product.slug}>
              {product.navLabel ?? product.name}
            </Link>
          ))}
          <Link href="/faq">FAQ</Link>
          {legalConfig.email ? <a href={`mailto:${legalConfig.email}`}>Support</a> : null}
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
