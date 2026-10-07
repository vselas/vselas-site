import Image from "next/image";
import Link from "next/link";

import { StoreBadgePlaceholder } from "@/components/placeholders";
import { PhoneScreen } from "@/components/phone-screen";
import type { Product } from "@/content/apps";

export function ProductHero({ product }: { product: Product }) {
  const primaryModule = product.modules[0];
  const secondaryModule = product.modules[1] ?? product.modules[0];
  const storeBadges = product.downloads.filter((download) => download.badge);

  return (
    <section className="product-hero">
      <div className="product-hero__glow" aria-hidden="true" />
      <div className="shell product-hero__inner">
        <div className="product-hero__copy">
          <p className="section-label">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="lede">{product.longSummary}</p>
          <ul className="hero-highlight-list">
            {product.heroHighlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <div className="button-row">
            <a className="button" href="#setup">
              Setup basics
            </a>
            <a className="button button--secondary" href="#security">
              Safety
            </a>
            {product.companionHowTo ? (
              <a className="button button--secondary" href="#home-assistant-howto">
                {product.companionHowTo.buttonLabel}
              </a>
            ) : null}
            {product.faqGroups?.length ? (
              <Link className="button button--secondary" href="/faq">
                Help &amp; FAQ
              </Link>
            ) : null}
          </div>
          {storeBadges.length > 0 ? (
            <div className="store-badge-row">
              {storeBadges.map((download) =>
                download.badge ? (
                  <StoreBadgePlaceholder key={download.badge} store={download.badge} />
                ) : null,
              )}
            </div>
          ) : null}
        </div>
        <div className="product-hero__visual">
          <PhoneScreen label={`${primaryModule.name} home view`} product={product} />
          <Image
            alt=""
            aria-hidden="true"
            className="product-hero__icon-float"
            height={primaryModule.asset.height}
            priority
            src={primaryModule.asset.src}
            width={primaryModule.asset.width}
          />
          <div className="product-hero__mini-card">
            <Image
              alt=""
              className="product-hero__mini-icon"
              height={secondaryModule.asset.height}
              priority
              src={secondaryModule.asset.src}
              width={secondaryModule.asset.width}
            />
            <div>
              <span>{secondaryModule.role}</span>
              <strong>{secondaryModule.name}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
