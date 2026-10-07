import { AppCard } from "@/components/app-card";
import { getProducts } from "@/content/apps";

export const metadata = {
  title: "Apps",
  description: "Explore the apps and see how they help people use smart homes more easily.",
};

export default function AppsIndexPage() {
  const products = getProducts();
  const hasCompanion = products.length > 1;

  return (
    <main className="page-main">
      <section className="section app-index-hero">
        <div className="shell section-heading">
          <div>
            <p className="section-label">Apps</p>
            <h1>
              {hasCompanion
                ? "Apps that make smart homes easier to use."
                : "Easy Control and what it helps people do."}
            </h1>
          </div>
          <p>
            {hasCompanion
              ? "Choose the app that matches what you want to do at home."
              : "Start with Easy Control to understand guest access, everyday use, and the devices you can share."}
          </p>
        </div>
        <div className="shell app-grid">
          {products.map((product) => (
            <AppCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
