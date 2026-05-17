import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const invitations = products.filter((p) => p.category === "invitation" || p.isFeatured);

export default function PopularInvitations() {
  return (
    <section className="py-20" style={{ background: "white" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <p
              className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A] mb-2"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Most Loved
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#2C2C2C",
              }}
            >
              Popular Invitations & Templates
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {invitations.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
