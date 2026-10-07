import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ImagePlaceholder, StoreBadgePlaceholder } from "@/components/placeholders";
import { ProductHero } from "@/components/product-hero";
import { getProductBySlug, getProductCopy, getProducts } from "@/content/apps";
import { absoluteUrl } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

// A static export needs at least one param. Without any enabled product, a
// placeholder slug is generated that renders the 404 page and is not indexed.
export function generateStaticParams() {
  const slugs = getProducts().map((product) => product.slug);

  return (slugs.length > 0 ? slugs : ["unavailable"]).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { robots: { index: false } };
  }

  return {
    title: product.name,
    description: product.longSummary,
    alternates: {
      canonical: absoluteUrl(`/apps/${product.slug}`),
    },
    openGraph: {
      title: product.name,
      description: product.longSummary,
      url: absoluteUrl(`/apps/${product.slug}`),
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const companionHowTo = product.companionHowTo;
  const copy = getProductCopy(product);

  return (
    <main className="page-main">
      <ProductHero product={product} />

      <section className="section section--compact">
        <div className="shell section-heading">
          <div>
            <p className="section-label">Parts of the app</p>
            <h2>What you install and where you use it.</h2>
          </div>
          <p>{copy.modulesIntro}</p>
        </div>
        <div className="shell module-grid">
          {product.modules.map((module) => (
            <article className="module-card" key={module.name}>
              <div className="module-card__head">
                <Image
                  alt={module.asset.alt}
                  className="module-card__asset"
                  height={module.asset.height}
                  src={module.asset.src}
                  width={module.asset.width}
                />
                <div>
                  <p className="section-label">{module.role}</p>
                  <h3>{module.name}</h3>
                </div>
              </div>
              <p>{module.summary}</p>
              <ul className="detail-list">
                {module.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--muted">
        <div className="shell section-heading">
          <div>
            <p className="section-label">How it works</p>
            <h2>{copy.storyHeading}</h2>
          </div>
        </div>
        <div className="shell story-grid">
          {product.story.map((step, index) => (
            <article className="story-card" key={step.title}>
              <span className="story-card__index">0{index + 1}</span>
              <div className="story-card__media">
                {step.image ? (
                  <Image
                    alt={step.image.alt}
                    className="story-card__shot"
                    height={step.image.height}
                    src={step.image.src}
                    width={step.image.width}
                  />
                ) : (
                  <ImagePlaceholder label={step.title} note="Screenshot coming soon" />
                )}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {product.gallery ? (
        <section className="section" id="screenshots">
          <div className="shell section-heading">
            <div>
              <p className="section-label">Screenshots</p>
              <h2>{product.gallery.heading}</h2>
            </div>
            <p>{product.gallery.intro}</p>
          </div>
          <div className="shell">
            <div
              aria-label={`${product.navLabel ?? product.name} screenshots`}
              className="shot-row"
              role="region"
              tabIndex={0}
            >
              {product.gallery.images.map((image) => (
                <figure className="shot" key={image.src}>
                  <Image
                    alt={image.alt}
                    className="shot__img"
                    height={image.height}
                    src={image.src}
                    width={image.width}
                  />
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="shell section-heading">
          <div>
            <p className="section-label">Why people choose it</p>
            <h2>Why {product.name} feels good to use.</h2>
          </div>
        </div>
        <div className="shell feature-group-grid">
          {product.featureGroups.map((group) => (
            <article className="feature-group-card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.intro}</p>
              <ul className="detail-list">
                {group.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--muted" id="security">
        <div className="shell security-band">
          <div>
            <p className="section-label">Why it feels safe</p>
            <h2>{copy.securityHeading}</h2>
            <p>{copy.securityIntro}</p>
          </div>
          <ul className="detail-list detail-list--contrast">
            {product.securityHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="shell two-column">
          <div>
            <p className="section-label">What it works with</p>
            <h2>{copy.domainsHeading}</h2>
            <ul className="detail-list">
              {product.supportedDomains.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div id="setup">
            <p className="section-label">Getting started</p>
            <h2>How you start using it.</h2>
            <div className="setup-list">
              {product.setup.map((step) => (
                <article className="setup-card" key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="shell section-heading">
          <div>
            <p className="section-label">What to install</p>
            <h2>{copy.downloadsHeading}</h2>
          </div>
          <p>{copy.downloadsIntro}</p>
        </div>
        <div className="shell download-grid">
          {product.downloads.map((download) => (
            <article className="download-card" key={download.label}>
              <span className="download-card__status">{download.status}</span>
              <h3>{download.label}</h3>
              <p>{download.description}</p>
              {download.badge ? (
                <div className="download-card__badge">
                  <StoreBadgePlaceholder store={download.badge} />
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {companionHowTo ? (
        <section className="section companion-guide" id="home-assistant-howto">
          <div className="shell section-heading">
            <div>
              <p className="section-label">{companionHowTo.eyebrow}</p>
              <h2>{companionHowTo.title}</h2>
            </div>
            <p>{companionHowTo.intro}</p>
          </div>

          <div className="shell companion-guide__layout">
            <div className="companion-guide__steps">
              <p className="section-label">Setup path</p>
              {companionHowTo.installSteps.map((step) => (
                <article className="companion-step" key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                  <ul className="detail-list">
                    {step.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
              <article className="companion-step companion-step--gallery">
                <h3>Visual walkthrough</h3>
                <p>Screenshots of these steps are being prepared.</p>
                <div className="companion-gallery">
                  {companionHowTo.screenshotNotes.map((note) => (
                    <ImagePlaceholder key={note} label={note} />
                  ))}
                </div>
              </article>
            </div>

            <div className="companion-guide__actions">
              <p className="section-label">Available Home Assistant actions</p>
              {companionHowTo.actions.map((action) => (
                <article className="action-card" key={action.name}>
                  <div className="action-card__head">
                    <p className="action-card__name">{action.name}</p>
                    <h3>{action.title}</h3>
                    <p>{action.purpose}</p>
                  </div>

                  {action.fields.length > 0 ? (
                    <div>
                      <h4>Fields</h4>
                      <dl className="action-field-list">
                        {action.fields.map((field) => (
                          <div key={field.name}>
                            <dt>
                              {field.name}
                              <span>{field.required ? "Required" : "Optional"}</span>
                            </dt>
                            <dd>{field.detail}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  ) : (
                    <p className="action-card__empty">
                      This action has no input fields.
                    </p>
                  )}

                  <div>
                    <h4>What happens</h4>
                    <ul className="detail-list">
                      {action.whatHappens.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {action.response ? (
                    <p className="action-card__response">{action.response}</p>
                  ) : null}

                  <pre className="code-example">
                    <code>{action.example}</code>
                  </pre>
                </article>
              ))}
            </div>
          </div>

          <div className="shell companion-support">
            <div>
              <p className="section-label">Entity support</p>
              <h3>Actions are inferred from the Home Assistant domain.</h3>
              <p>
                You choose entities, not low-level permissions. The integration maps
                each domain to the guest actions and Home Assistant services below.
              </p>
            </div>
            <div className="entity-support-list">
              {companionHowTo.supportedEntities.map((item) => (
                <article className="entity-support-row" key={item.domain}>
                  <strong>{item.domain}</strong>
                  <span>{item.guestActions}</span>
                  <span>{item.homeAssistantServices}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section--dense">
        <div className="shell section-heading">
          <div>
            <p className="section-label">Frequently asked</p>
            <h2>Questions people usually ask before they try it.</h2>
          </div>
        </div>
        <div className="shell faq-grid">
          {product.faq.map((item) => (
            <article className="faq-card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {product.supportEmail || product.faqGroups?.length || product.links?.length ? (
        <section className="section section--flush" id="help">
          <div className="shell">
            <div className="support-band">
              <div>
                <p className="section-label">Help</p>
                <h2>Need a hand with {product.navLabel ?? product.name}?</h2>
                <p>
                  Find step-by-step answers in the help center, or write to us directly and
                  we will help.
                </p>
                {product.links?.length ? (
                  <ul className="support-band__links">
                    {product.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} rel="noopener">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="support-band__actions">
                {product.faqGroups?.length ? (
                  <Link className="button" href="/faq">
                    Browse the help &amp; FAQ
                  </Link>
                ) : null}
                {product.supportEmail ? (
                  <a
                    className={product.faqGroups?.length ? "button button--secondary" : "button"}
                    href={`mailto:${product.supportEmail}`}
                  >
                    Email support
                  </a>
                ) : null}
              </div>
            </div>
            {product.disclaimer ? <p className="product-disclaimer">{product.disclaimer}</p> : null}
          </div>
        </section>
      ) : null}
    </main>
  );
}
