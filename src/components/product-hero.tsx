import Link from "next/link";

import { HeroVisual } from "@/components/hero-visual";
import { StoreBadgePlaceholder } from "@/components/placeholders";
import type { Product } from "@/content/apps";

export function ProductHero({ product }: { product: Product }) {
  const storeBadges = product.downloads.filter((download) => download.badge);

  return (
    <section className="product-hero">
      <div className="product-hero__glow" aria-hidden="true" />
      <div className="shell product-hero__inner">
        <div className="product-hero__copy">
          <p className="hero-eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="product-hero__tagline">{product.tagline}</p>
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
        <HeroVisual label={`${product.modules[0].name} home view`} product={product} />
      </div>
    </section>
  );
}
