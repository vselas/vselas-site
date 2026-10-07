import type { Metadata } from "next";
import Link from "next/link";

import { getFaqGroups, getProducts, getSupportEmail } from "@/content/apps";
import { getLegalConfig } from "@/lib/legal";

export function generateMetadata(): Metadata {
  return {
    title: "Help & FAQ",
    description: "Answers to common questions about the apps, for everyone coming from the App Store.",
    robots: { index: getFaqGroups().length > 0 },
  };
}

export default function FaqPage() {
  const groups = getFaqGroups();
  const products = getProducts();
  const firstProduct = products[0];
  const supportEmail = getSupportEmail(getLegalConfig().email);
  const links = products.flatMap((product) => product.links ?? []);
  const disclaimers = products.flatMap((product) => (product.disclaimer ? [product.disclaimer] : []));

  return (
    <main className="page-main">
      <section className="section">
        <div className="shell section-heading">
          <div>
            <p className="section-label">Help &amp; FAQ</p>
            <h1>
              {groups.length > 0 ? "Questions that come up often." : "Answers are on the way."}
            </h1>
          </div>
          <p>
            {groups.length > 0
              ? "Quick answers for everyone using the apps. If something is missing, use the support options below and we will help directly."
              : "Frequently asked questions will appear here as soon as the first app is available."}
          </p>
        </div>
        {groups.length > 0 ? (
          <div className="shell faq-groups">
            {groups.map((group) => (
              <div className="faq-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="faq-accordion">
                  {group.items.map((item) => (
                    <details className="faq-item" key={item.question}>
                      <summary>
                        {item.question}
                        <span aria-hidden="true" className="faq-item__marker" />
                      </summary>
                      <p>{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </section>

      <section className="section section--flush" id="support">
        <div className="shell">
          <div className="support-band">
            <div>
              <p className="section-label">{groups.length > 0 ? "Still stuck?" : "Support"}</p>
              <h2>We help directly.</h2>
              <p>
                If your question is not covered here, send a short email with what
                you tried and what you expected. Screenshots help a lot.
              </p>
              {links.length > 0 ? (
                <ul className="support-band__links">
                  {links.map((link) => (
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
              {supportEmail ? (
                <a className="button" href={`mailto:${supportEmail}`}>
                  Email support
                </a>
              ) : null}
              {firstProduct ? (
                <Link className="button button--secondary" href={`/apps/${firstProduct.slug}`}>
                  Read the setup guide
                </Link>
              ) : null}
            </div>
          </div>
          {disclaimers.map((text) => (
            <p className="product-disclaimer" key={text}>
              {text}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}
