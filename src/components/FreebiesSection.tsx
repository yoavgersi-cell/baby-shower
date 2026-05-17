import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function FreebiesSection() {
  const freebies = products.filter((p) => p.isFree);

  return (
    <section className="py-20" style={{ background: "white" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 gap-4">
          <div>
            <p
              className="text-[10px] tracking-[0.25em] uppercase text-[#5A8A5A] mb-2"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Free Downloads
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#2C2C2C",
              }}
            >
              Free Downloads — No Sign-Up Required
            </h2>
          </div>
          <Link
            href="/freebies"
            className="text-sm font-medium text-[#C9927A] hover:underline flex-shrink-0"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            See All Freebies →
          </Link>
        </div>

        {/* Trust note */}
        <p
          className="text-[11px] text-[#2C2C2C]/40 mb-10"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          Click any card to download instantly — no email required, no catch.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {freebies.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="mt-12 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg,#F4F8F4,#E8F4E8)",
            border: "1px solid #9BAD9B30",
          }}
        >
          <div>
            <p
              className="text-lg font-medium text-[#2C2C2C] mb-1"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Want the full planning kit?
            </p>
            <p
              className="text-sm text-[#2C2C2C]/60"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              The Complete Bundle includes everything — invitations, games, signs and more.
            </p>
          </div>
          <Link
            href="/shop/complete-baby-shower-printable-bundle"
            className="flex-shrink-0 px-6 py-3 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all whitespace-nowrap"
            style={{
              background: "linear-gradient(135deg,#C9927A,#B5785F)",
              fontFamily: "var(--font-ui)",
            }}
          >
            View Complete Bundle →
          </Link>
        </div>
      </div>
    </section>
  );
}
