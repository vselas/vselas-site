import type { Metadata } from "next";
import Link from "next/link";

import { getFaqGroups, getProducts } from "@/content/apps";
import { getLegalConfig } from "@/lib/legal";

export function generateMetadata(): Metadata {
  return {
    title: "FAQ",
    description: "Answers to common questions about the apps, for everyone coming from the App Store.",
    robots: { index: getFaqGroups().length > 0 },
  };
}

export default function FaqPage() {
  const legalConfig = getLegalConfig();
  const groups = getFaqGroups();
  const firstProduct = getProducts()[0];

  return (
    <main className="page-main">
      <section className="section">
        <div className="shell section-heading">
          <div>
            <p className="section-label">FAQ</p>
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
            </div>
            <div className="support-band__actions">
              {legalConfig.email ? (
                <a className="button" href={`mailto:${legalConfig.email}`}>
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
        </div>
      </section>
    </main>
  );
}
