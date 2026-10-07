import Link from "next/link";
import Image from "next/image";

import type { Product } from "@/content/apps";

export function AppCard({ product }: { product: Product }) {
  const asset = product.modules[0].asset;

  return (
    <article className="app-card">
      <div className="app-card__head">
        <Image
          alt={asset.alt}
          className="app-card__icon"
          height={asset.height}
          src={asset.src}
          width={asset.width}
        />
        <div className="app-card__meta">
          <span>{product.category}</span>
          <span>{product.status}</span>
        </div>
      </div>
      <h3>{product.name}</h3>
      <p>{product.shortSummary}</p>
      <div className="app-card__badges">
        {product.platforms.map((platform) => (
          <span key={platform}>{platform}</span>
        ))}
      </div>
      <Link className="button button--secondary" href={`/apps/${product.slug}`}>
        View app
      </Link>
    </article>
  );
}
