import Image from "next/image";

import { PhoneScreen } from "@/components/phone-screen";
import type { Product } from "@/content/apps";

// Lifestyle photo with the app screenshot in front of it. Without a photo only
// the phone is shown.
export function HeroVisual({ product, label }: { product: Product; label: string }) {
  const photo = product.heroPhoto;
  const icon = product.modules[0].asset;

  return (
    <div className={photo ? "hero-visual" : "hero-visual hero-visual--phone-only"}>
      {photo ? (
        <Image
          alt={photo.alt}
          className="hero-visual__photo"
          height={photo.height}
          priority
          sizes="(max-width: 1020px) 92vw, 560px"
          src={photo.src}
          width={photo.width}
        />
      ) : null}
      <div className="hero-visual__phone">
        <PhoneScreen label={label} product={product} />
      </div>
      <Image
        alt=""
        aria-hidden="true"
        className="hero-visual__icon"
        height={icon.height}
        priority
        src={icon.src}
        width={icon.width}
      />
    </div>
  );
}
