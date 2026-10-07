import type { Metadata } from "next";
import Link from "next/link";

import { siteFaq } from "@/content/faq";
import { getLegalConfig } from "@/lib/legal";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Easy Control, for guests, hosts, and everyone coming from the App Store.",
};

export default function FaqPage() {
  const legalConfig = getLegalConfig();

  return (
    <main className="page-main">
      <section className="section">
        <div className="shell section-heading">
          <div>
            <p className="section-label">FAQ</p>
            <h1>Questions that come up often.</h1>
          </div>
          <p>
            Quick answers for guests and hosts. If something is missing, use the
            support options below and we will help directly.
          </p>
        </div>
        <div className="shell faq-groups">
          {siteFaq.map((group) => (
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
      </section>

      <section className="section section--flush" id="support">
        <div className="shell">
          <div className="support-band">
            <div>
              <p className="section-label">Still stuck?</p>
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
              <Link className="button button--secondary" href="/apps/easy-control">
                Read the setup guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
