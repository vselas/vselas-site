import Link from "next/link";
import Image from "next/image";

import { getFaqGroups, getProducts, getSupportEmail } from "@/content/apps";
import { getLegalConfig } from "@/lib/legal";
import { getSiteConfig } from "@/lib/site";

export function SiteFooter() {
  const products = getProducts();
  const supportEmail = getSupportEmail(getLegalConfig().email);
  const siteConfig = getSiteConfig();

  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div>
          <div className="site-footer__brand">
            <Image
              alt=""
              className="site-footer__logo"
              height={192}
              src="/brand/vselas-mark-light.png"
              width={192}
            />
            <span>{siteConfig.name}</span>
          </div>
          <p className="site-footer__title">
            Apple-native apps that make smart homes simpler, clearer, and safer to use.
          </p>
        </div>
        <div className="site-footer__links">
          {products.length > 0 ? <Link href="/apps">All apps</Link> : null}
          {products.map((product) => (
            <Link href={`/apps/${product.slug}`} key={product.slug}>
              {product.navLabel ?? product.name}
            </Link>
          ))}
          {getFaqGroups().length > 0 ? <Link href="/faq">FAQ</Link> : null}
          {supportEmail ? <a href={`mailto:${supportEmail}`}>Support</a> : null}
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
