import Link from "next/link";
import Image from "next/image";

import { AppCard } from "@/components/app-card";
import { PhoneScreen } from "@/components/phone-screen";
import { StoreBadgePlaceholder } from "@/components/placeholders";
import { getFaqGroups, getProductCopy, getProducts, getSupportEmail } from "@/content/apps";
import { getLegalConfig } from "@/lib/legal";

const brandIntro = "Apple-native apps that make smart homes simpler, clearer, and safer to use.";

function SupportBand({ hasApps }: { hasApps: boolean }) {
  const supportEmail = getSupportEmail(getLegalConfig().email);
  const hasFaq = getFaqGroups().length > 0;

  return (
    <section className="section" id="app-store-support">
      <div className="shell">
        <div className="support-band">
          <div>
            <p className="section-label">{hasApps ? "For App Store visitors" : "Support"}</p>
            <h2>{hasApps ? "Quick answers and direct help." : "Questions? We are happy to help."}</h2>
            <p>
              {hasFaq
                ? "Most questions are already answered in the FAQ. For everything else, send us a short email and we will help directly."
                : "Send us a short email with what you tried and what you expected, and we will help directly."}
            </p>
          </div>
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
        </div>
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
        <section className="home-hero home-hero--solo">
          <div className="home-hero__glow" aria-hidden="true" />
          <div className="shell home-hero__inner home-hero__inner--solo">
            <div className="home-hero__copy">
              <p className="hero-eyebrow">Apps by Deno von Selasinsky</p>
              <h1>
                Smart homes that feel <span className="text-gradient">welcoming</span>.
              </h1>
              <p className="hero-copy">{brandIntro} The first app is coming soon.</p>
            </div>
          </div>
        </section>

        <SupportBand hasApps={false} />
      </main>
    );
  }

  const hasCompanion = products.length > 1;
  const copy = getProductCopy(flagship);
  const flagshipLabel = flagship.navLabel ?? flagship.name;
  const primaryAsset = flagship.modules[0].asset;
  const storeBadges = flagship.downloads.filter((download) => download.badge);

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
              <Link className="button" href={`/apps/${flagship.slug}`}>
                Explore {flagshipLabel}
              </Link>
              <Link className="button button--secondary" href="#app-store-support">
                App Store support
              </Link>
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
          <div className="home-hero__visual">
            <PhoneScreen label={`${flagshipLabel} home view`} product={flagship} />
            <Image
              alt=""
              aria-hidden="true"
              className="home-hero__app-icon"
              height={primaryAsset.height}
              priority
              src={primaryAsset.src}
              width={primaryAsset.width}
            />
          </div>
        </div>
      </section>

      <section className="stat-band" aria-label={`${flagship.name} at a glance`}>
        <div className="shell">
          <div className="stat-band__inner">
            {flagship.proofPoints.map((point) => (
              <div className="stat-band__item" key={point.label}>
                <strong>{point.value}</strong>
                <span>{point.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--intro">
        <div className="shell intro-grid">
          <div>
            <p className="section-label">Start here</p>
            <h2>Understand the app before you use it.</h2>
          </div>
          <p>
            This site is the place to learn what each app does, how it fits into your
            home, and where to find support, privacy information, and setup guidance
            after coming from the Apple App Store.
          </p>
        </div>
      </section>

      <section className="section section--flush">
        <div className="shell app-feature">
          <div className="app-feature__visual" aria-hidden="true">
            <Image
              alt=""
              className="app-feature__icon"
              height={primaryAsset.height}
              src={primaryAsset.src}
              width={primaryAsset.width}
            />
          </div>
          <div className="app-feature__copy">
            <p className="section-label">Featured app</p>
            <h2>{flagship.name}</h2>
            <p>{flagship.longSummary}</p>
            <div className="button-row button-row--compact">
              <Link className="button" href={`/apps/${flagship.slug}`}>
                Learn how it works
              </Link>
              <Link className="button button--secondary" href="#app-store-support">
                Get support
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell section-heading">
          <div>
            <p className="section-label">How {flagshipLabel} helps</p>
            <h2>{copy.homeBenefitsHeading}</h2>
          </div>
        </div>
        <div className="shell benefit-grid">
          {flagship.featureGroups.slice(0, 3).map((group) => (
            <article className="benefit-item" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.intro}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--muted">
        <div className="shell section-heading">
          <div>
            <p className="section-label">Apps</p>
            <h2>{hasCompanion ? "Choose the app that fits your home." : "Available app"}</h2>
          </div>
          <p>
            Each app page covers practical use cases, setup notes, and support information.
          </p>
        </div>
        <div className="shell app-grid">
          {products.map((product) => (
            <AppCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <SupportBand hasApps />
    </main>
  );
}
