import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="page-main">
      <section className="section">
        <div className="shell not-found">
          <p className="section-label">Error 404</p>
          <h1>This page could not be found.</h1>
          <p>
            The link may be outdated or the address was mistyped. Start from the home
            page, or check the FAQ for quick answers.
          </p>
          <div className="button-row">
            <Link className="button" href="/">
              Back to home
            </Link>
            <Link className="button button--secondary" href="/faq">
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
