import Image from "next/image";
import Link from "next/link";

import type { Product, ProductSpotlight } from "@/content/apps";

// Home page band that promotes a product next to the flagship.
export function ProductSpotlightBand({
  product,
  spotlight,
}: {
  product: Product;
  spotlight: ProductSpotlight;
}) {
  const icon = product.modules[0].asset;
  const label = product.navLabel ?? product.name;

  return (
    <section className="section spotlight" id={`spotlight-${product.slug}`}>
      <div className="shell spotlight__inner">
        <div className="spotlight__visual">
          <Image
            alt={spotlight.photo.alt}
            className="spotlight__photo"
            height={spotlight.photo.height}
            sizes="(max-width: 1020px) 92vw, 540px"
            src={spotlight.photo.src}
            width={spotlight.photo.width}
          />
          <Image
            alt=""
            aria-hidden="true"
            className="spotlight__icon"
            height={icon.height}
            src={icon.src}
            width={icon.width}
          />
        </div>
        <div className="spotlight__copy">
          <p className="section-label">{spotlight.eyebrow}</p>
          <h2>{spotlight.heading}</h2>
          <p className="spotlight__intro">{spotlight.intro}</p>
          <ul className="spotlight__highlights">
            {spotlight.highlights.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </li>
            ))}
          </ul>
          <div className="button-row">
            <Link className="button" href={`/apps/${product.slug}`}>
              Discover {label}
            </Link>
            <span className="spotlight__status">{product.status}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
