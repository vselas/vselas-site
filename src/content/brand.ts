import type { ProductImage } from "@/content/apps";

// Brand-level content for the home page. It must not mention any product, because
// it is also shown while every product is switched off.

export type BrandPrinciple = {
  title: string;
  description: string;
  photo: ProductImage;
};

// CC0 photos from StockSnap, see docs/image-credits.md.
function brandPhoto(name: string, alt: string, height = 640): ProductImage {
  return { src: `/brand/photos/${name}.webp`, alt, width: 960, height };
}

export const brandIntro =
  "Apple-native apps that make smart homes simpler, clearer, and safer to use.";

// Used once a product outside the smart-home focus (e.g. a mail app) is enabled,
// so the brand does not promise smart-home apps only.
export const brandIntroBroad =
  "Apple-native apps for your home and your everyday life: simple, private, and made with care.";

export function getBrandIntro(broad: boolean) {
  return broad ? brandIntroBroad : brandIntro;
}

export const brandHeroPhoto = brandPhoto(
  "house-at-dusk",
  "A small house at dusk with warm light in the windows, reached by a wooden boardwalk",
);

export const brandFacts = [
  { label: "Built for", value: "iPhone, iPad and Mac" },
  { label: "Made for", value: "Smart homes" },
  { label: "Privacy", value: "No ads, no tracking" },
  { label: "Support", value: "Direct, by email" },
];

export function getBrandFacts(broad: boolean) {
  return broad
    ? brandFacts.map((fact) =>
        fact.label === "Made for" ? { ...fact, value: "Home and everyday life" } : fact,
      )
    : brandFacts;
}

// Hero photo while several apps are enabled: a calm home without people, so no
// single app's story takes over the brand.
export const brandPortfolioPhoto = brandHeroPhoto;

export const brandPrinciples: BrandPrinciple[] = [
  {
    title: "Simple enough for everyone",
    description:
      "Clear screens and plain words, so the whole household can use the app without a manual.",
    photo: brandPhoto(
      "bright-living-room",
      "A bright, calm living room with a sofa, a round coffee table and large windows",
      641,
    ),
  },
  {
    title: "Private by design",
    description:
      "No ads, no tracking, and no more data than the app needs. Wherever possible, it talks to your devices at home.",
    photo: brandPhoto(
      "lounge-corner",
      "A quiet lounge corner with a leather sofa, yellow armchairs and a plant",
      540,
    ),
  },
  {
    title: "You stay in charge",
    description:
      "Clear limits and protected settings, so control stays with the people who run the home.",
    photo: brandPhoto(
      "warm-living-room",
      "A cosy living room in warm evening light with a green sofa and a floor lamp",
      641,
    ),
  },
];
