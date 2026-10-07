import type { Metadata } from "next";

import { AppCard } from "@/components/app-card";
import { getProducts } from "@/content/apps";

export function generateMetadata(): Metadata {
  return {
    title: "Apps",
    description: "Explore the apps and see how they help people use smart homes more easily.",
    robots: { index: getProducts().length > 0 },
  };
}

export default function AppsIndexPage() {
  const products = getProducts();
  const hasApps = products.length > 0;

  return (
    <main className="page-main">
      <section className="section app-index-hero">
        <div className="shell section-heading">
          <div>
            <p className="section-label">Apps</p>
            <h1>
              {hasApps
                ? "Apps that make smart homes easier to use."
                : "The first app is coming soon."}
            </h1>
          </div>
          <p>
            {hasApps
              ? "Learn what each app does, how to set it up, and where to get help."
              : "Check back soon, or get in touch if you have questions."}
          </p>
        </div>
        {hasApps ? (
          <div className="shell app-grid">
            {products.map((product) => (
              <AppCard key={product.slug} product={product} />
            ))}
          </div>
        ) : null}
      </section>
    </main>
  );
}
