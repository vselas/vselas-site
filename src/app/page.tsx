import Link from "next/link";
import Image from "next/image";

import { AppCard } from "@/components/app-card";
import { HeroVisual } from "@/components/hero-visual";
import { PortfolioVisual } from "@/components/portfolio-visual";
import { ProductSpotlightBand } from "@/components/product-spotlight";
import { StoreBadgePlaceholder } from "@/components/placeholders";
import type { Product } from "@/content/apps";
import {
  getFaqGroups,
  getProductCopy,
  getProducts,
  getSpotlightProducts,
  getSupportEmail,
  hasNonSmartHomeProducts,
} from "@/content/apps";
import {
  brandFacts,
  brandHeroPhoto,
  brandIntro,
  brandPrinciples,
  getBrandFacts,
  getBrandIntro,
} from "@/content/brand";
import { getLegalConfig } from "@/lib/legal";

function SupportBand({ hasApps, product }: { hasApps: boolean; product?: Product }) {
  const supportEmail = getSupportEmail(getLegalConfig().email);
  const hasFaq = getFaqGroups().length > 0;
  const photo = product?.supportPhoto;
  const actions = (
    <div className="support-band__actions">
      {hasFaq ? (
        <Link className="button" href="/faq">
          Browse the FAQ
        </Link>
      ) : null}
      {supportEmail ? (
        <a
          className={hasFaq ? "button button--secondary" : "button"}
          href={`mailto:${supportEmail}`}
        >
          Email support
        </a>
      ) : null}
    </div>
  );

  return (
    <section className="section" id="app-store-support">
      <div className="shell">
        <div className={photo ? "support-band support-band--photo" : "support-band"}>
          {photo ? (
            <Image
              alt={photo.alt}
              className="support-band__photo"
              height={photo.height}
              sizes="(max-width: 1020px) 92vw, 420px"
              src={photo.src}
              width={photo.width}
            />
          ) : null}
          <div>
            <p className="section-label">{hasApps ? "For App Store visitors" : "Support"}</p>
            <h2>{hasApps ? "Quick answers and direct help." : "Questions? We are happy to help."}</h2>
            <p>
              {hasFaq
                ? "Most questions are already answered in the FAQ. For everything else, send us a short email and we will help directly."
                : "Send us a short email with what you tried and what you expected, and we will help directly."}
            </p>
            {photo ? actions : null}
          </div>
          {photo ? null : actions}
        </div>
      </div>
    </section>
  );
}

function PrinciplesSection() {
  return (
    <section className="section" id="principles">
      <div className="shell section-heading">
        <div>
          <p className="section-label">What we build</p>
          <h2>Apps for the home, made with care.</h2>
        </div>
        <p>
          Every app here starts with an everyday moment at home and keeps it simple:
          easy to understand, respectful of your privacy, and with you in control.
        </p>
      </div>
      <div className="shell moment-grid">
        {brandPrinciples.map((principle) => (
          <article className="moment-card" key={principle.title}>
            <Image
              alt={principle.photo.alt}
              className="moment-card__photo"
              height={principle.photo.height}
              sizes="(max-width: 1020px) 92vw, 370px"
              src={principle.photo.src}
              width={principle.photo.width}
            />
            <div className="moment-card__body">
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  const products = getProducts();
  const flagship = products[0];

  if (!flagship) {
    return (
      <main>
        <section className="home-hero">
          <div className="home-hero__glow" aria-hidden="true" />
          <div className="shell home-hero__inner">
            <div className="home-hero__copy">
              <p className="hero-eyebrow">Apps by Deno von Selasinsky</p>
              <h1>
                Smart homes that feel <span className="text-gradient">welcoming</span>.
              </h1>
              <p className="hero-copy">{brandIntro}</p>
              <div className="button-row">
                <Link className="button" href="#principles">
                  What we build
                </Link>
                <Link className="button button--secondary" href="#app-store-support">
                  Get in touch
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <Image
                alt={brandHeroPhoto.alt}
                className="hero-visual__photo"
                height={brandHeroPhoto.height}
                priority
                sizes="(max-width: 1020px) 92vw, 560px"
                src={brandHeroPhoto.src}
                width={brandHeroPhoto.width}
              />
              <div className="coming-soon-card">
                <span className="coming-soon-card__dot" aria-hidden="true" />
                <div>
                  <span>In the works</span>
                  <strong>The first app is coming soon.</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stat-band" aria-label="At a glance">
          <div className="shell">
            <div className="stat-band__inner">
              {brandFacts.map((fact) => (
                <div className="stat-band__item" key={fact.label}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PrinciplesSection />

        <SupportBand hasApps={false} />
      </main>
    );
  }

  const hasCompanion = products.length > 1;
  const copy = getProductCopy(flagship);
  const flagshipLabel = flagship.navLabel ?? flagship.name;
  const storeBadges = flagship.downloads.filter((download) => download.badge);
  // Up to three photo moments: the first two plus the last, so the set covers the whole day.
  const photoGroups = flagship.featureGroups.filter((group) => group.photo);
  const moments =
    photoGroups.length > 3
      ? [...photoGroups.slice(0, 2), photoGroups[photoGroups.length - 1]]
      : photoGroups;
  const screens = flagship.gallery?.images.slice(0, 4) ?? [];
  // Products that step outside the smart-home focus get their own band and a
  // hero announcement, unless they already are the flagship.
  const spotlights = getSpotlightProducts().filter((product) => product !== flagship);
  const broad = hasNonSmartHomeProducts();
  // With several apps the hero speaks for all of them, not for the flagship.
  const isPortfolio = products.length > 1;

  const flagshipMoments = (
    <section className="section">
      <div className="shell section-heading">
        <div>
          <p className="section-label">How {flagshipLabel} helps</p>
          <h2>{copy.homeBenefitsHeading}</h2>
        </div>
        <p>{flagship.shortSummary}</p>
      </div>
      <div className="shell moment-grid">
        {(moments.length > 0 ? moments : flagship.featureGroups.slice(0, 3)).map((group) => (
          <article className="moment-card" key={group.title}>
            {group.photo ? (
              <Image
                alt={group.photo.alt}
                className="moment-card__photo"
                height={group.photo.height}
                sizes="(max-width: 1020px) 92vw, 370px"
                src={group.photo.src}
                width={group.photo.width}
              />
            ) : null}
            <div className="moment-card__body">
              <h3>{group.title}</h3>
              <p>{group.intro}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );

  return (
    <main>
      <section className="home-hero">
        <div className="home-hero__glow" aria-hidden="true" />
        <div className="shell home-hero__inner">
          <div className="home-hero__copy">
            {spotlights.length > 0 ? (
              <Link className="hero-announcement" href={`#spotlight-${spotlights[0].slug}`}>
                <span className="hero-announcement__tag">New</span>
                {spotlights[0].navLabel ?? spotlights[0].name}:{" "}
                {spotlights[0].tagline}
                <span aria-hidden="true" className="hero-announcement__arrow">
                  →
                </span>
              </Link>
            ) : (
              <p className="hero-eyebrow">Apps by Deno von Selasinsky</p>
            )}
            <h1>
              {broad ? (
                <>
                  Apps that feel <span className="text-gradient">at home</span>.
                </>
              ) : (
                <>
                  Smart homes that feel <span className="text-gradient">welcoming</span>.
                </>
              )}
            </h1>
            <p className="hero-copy">{getBrandIntro(broad)}</p>
            <div className="button-row">
              {isPortfolio ? (
                <Link className="button" href="/apps">
                  Explore the apps
                </Link>
              ) : (
                <Link className="button" href={`/apps/${flagship.slug}`}>
                  Explore {flagshipLabel}
                </Link>
              )}
              <Link className="button button--secondary" href="#app-store-support">
                App Store support
              </Link>
            </div>
            {!isPortfolio && storeBadges.length > 0 ? (
              <div className="store-badge-row">
                {storeBadges.map((download) =>
                  download.badge ? (
                    <StoreBadgePlaceholder key={download.badge} store={download.badge} />
                  ) : null,
                )}
              </div>
            ) : null}
          </div>
          {isPortfolio ? (
            <PortfolioVisual products={products} />
          ) : (
            <HeroVisual label={`${flagshipLabel} home view`} product={flagship} />
          )}
        </div>
      </section>

      <section
        className="stat-band"
        aria-label={isPortfolio ? "At a glance" : `${flagship.name} at a glance`}
      >
        <div className="shell">
          <div className="stat-band__inner">
            {(isPortfolio ? getBrandFacts(broad) : flagship.proofPoints).map((point) => (
              <div className="stat-band__item" key={point.label}>
                <span>{point.label}</span>
                <strong>{point.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isPortfolio ? <PrinciplesSection /> : flagshipMoments}

      {spotlights.map((product) =>
        product.spotlight ? (
          <ProductSpotlightBand
            key={product.slug}
            product={product}
            spotlight={product.spotlight}
          />
        ) : null,
      )}

      {isPortfolio ? flagshipMoments : null}

      {screens.length > 0 ? (
        <section className="section screen-band">
          <div className="shell screen-band__inner">
            <div className="screen-band__copy">
              <p className="section-label">Inside the app</p>
              <h2>{copy.homeScreensHeading}</h2>
              <p>{flagship.modules[0].summary}</p>
              <div className="button-row">
                <Link className="button" href={`/apps/${flagship.slug}#screenshots`}>
                  See all screenshots
                </Link>
              </div>
            </div>
            <div className="screen-band__shots" aria-hidden="true">
              {screens.map((image) => (
                <Image
                  alt=""
                  className="screen-band__shot"
                  height={image.height}
                  key={image.src}
                  sizes="180px"
                  src={image.src}
                  width={image.width}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="shell section-heading">
          <div>
            <p className="section-label">Apps</p>
            <h2>{hasCompanion ? "Choose the app that fits your home." : "Available app"}</h2>
          </div>
          <p>
            This site is the place to learn what each app does, how it fits into your home,
            and where to find support, privacy information, and setup guidance after coming
            from the App Store.
          </p>
        </div>
        <div className="shell app-grid">
          {products.map((product) => (
            <AppCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <SupportBand hasApps product={isPortfolio ? undefined : flagship} />
    </main>
  );
}
