import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function BestSellers() {
  const featured = products.filter((p) => p.isBestseller || p.isFeatured).slice(0, 6);

  return (
    <section className="py-20" style={{ background: "#FAF8F5" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <p
              className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A] mb-2"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Most Popular
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#2C2C2C",
              }}
            >
              Best Sellers
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-sm font-medium text-[#C9927A] hover:underline flex-shrink-0"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
