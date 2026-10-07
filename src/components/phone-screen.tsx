import Image from "next/image";

import { ImagePlaceholder } from "@/components/placeholders";
import type { Product } from "@/content/apps";

export function PhoneScreen({ product, label }: { product: Product; label: string }) {
  const image = product.heroImage;

  return (
    <div className="phone-frame">
      {image ? (
        <Image
          alt={image.alt}
          className="phone-frame__shot"
          height={image.height}
          priority
          src={image.src}
          width={image.width}
        />
      ) : (
        <ImagePlaceholder
          label={label}
          note="App screenshot coming soon"
          tone="dark"
          variant="phone"
        />
      )}
    </div>
  );
}
