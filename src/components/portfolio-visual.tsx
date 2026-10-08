import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/content/apps";
import { brandPortfolioPhoto } from "@/content/brand";

// Home hero visual while several apps are enabled: a neutral home photo with one
// card per app, so no single app stands for the whole brand.
export function PortfolioVisual({ products }: { products: Product[] }) {
  return (
    <div className="portfolio-visual">
      <Image
        alt={brandPortfolioPhoto.alt}
        className="portfolio-visual__photo"
        height={brandPortfolioPhoto.height}
        priority
        sizes="(max-width: 1020px) 92vw, 560px"
        src={brandPortfolioPhoto.src}
        width={brandPortfolioPhoto.width}
      />
      <ul className="portfolio-visual__apps">
        {products.map((product) => {
          const icon = product.modules[0].asset;

          return (
            <li key={product.slug}>
              <Link className="portfolio-app" href={`/apps/${product.slug}`}>
                <Image
                  alt=""
                  aria-hidden="true"
                  className="portfolio-app__icon"
                  height={icon.height}
                  priority
                  src={icon.src}
                  width={icon.width}
                />
                <span className="portfolio-app__text">
                  <strong>{product.navLabel ?? product.name}</strong>
                  <span>{product.tagline}</span>
                </span>
                <span aria-hidden="true" className="portfolio-app__arrow">
                  →
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
