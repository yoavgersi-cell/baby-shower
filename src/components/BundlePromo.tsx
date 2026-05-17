"use client";
import Link from "next/link";
import { ProductMockup } from "@/components/ui/ProductMockup";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

export default function BundlePromo() {
  const { addItem } = useCart();
  const bundle = products.find((p) => p.id === "complete-bundle")!;

  const handleAdd = () => {
    addItem({
      id: bundle.id,
      name: bundle.name,
      price: bundle.price,
      image: bundle.image || "",
      type: "bundle",
      category: bundle.category,
    });
  };

  return (
    <section className="py-0" style={{ background: "#1A1502" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: mockup */}
          <div className="flex justify-center">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{ width: 320, height: 380, border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <ProductMockup
                type="bundle"
                accentColor="#C4A55A"
                bgColor="#FAF5EC"
                title="Complete Baby Shower Bundle"
              />
            </div>
          </div>

          {/* Right: copy */}
          <div>
            <p
              className="text-[10px] tracking-[0.25em] uppercase mb-4"
              style={{ color: "#C4A55A", fontFamily: "var(--font-ui)" }}
            >
              Best Value · Digital Download
            </p>
            <h2
              className="mb-4 leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(2rem,4vw,3rem)",
                color: "#FAF8F2",
              }}
            >
              The Complete Baby Shower Bundle
            </h2>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span
                className="text-3xl font-semibold"
                style={{ color: "#C4A55A", fontFamily: "var(--font-ui)" }}
              >
                $12.99
              </span>
              <span
                className="text-lg line-through"
                style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-ui)" }}
              >
                $34.00
              </span>
              <span
                className="px-2.5 py-1 rounded-full text-[10px] font-semibold"
                style={{
                  background: "#C4A55A20",
                  color: "#C4A55A",
                  fontFamily: "var(--font-ui)",
                  border: "1px solid #C4A55A40",
                }}
              >
                Save 62%
              </span>
            </div>

            {/* Feature list */}
            <ul className="space-y-3 mb-8">
              {bundle.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className="mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{ background: "#C4A55A20" }}
                  >
                    <svg width="8" height="8" viewBox="0 0 12 12">
                      <polyline points="2 6 5 9 10 3" stroke="#C4A55A" strokeWidth="1.5" fill="none" />
                    </svg>
                  </div>
                  <span
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-ui)" }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleAdd}
                className="px-8 py-4 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                style={{
                  background: "linear-gradient(135deg,#C9927A,#B5785F)",
                  fontFamily: "var(--font-ui)",
                }}
              >
                Add Bundle to Cart — $12.99
              </button>
              <Link
                href="/shop/complete-baby-shower-printable-bundle"
                className="px-8 py-4 text-sm font-semibold rounded-full border transition-all hover:border-white/40"
                style={{
                  borderColor: "rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "var(--font-ui)",
                }}
              >
                View Details
              </Link>
            </div>

            {/* File formats */}
            <div className="flex gap-3 mt-6">
              {["PDF", "Canva", "Instant Download", "Print-Ready"].map((label) => (
                <span
                  key={label}
                  className="px-2.5 py-1 rounded-full text-[10px]"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.4)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
