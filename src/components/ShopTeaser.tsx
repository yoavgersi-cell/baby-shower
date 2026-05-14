"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { products } from "@/components/ShopGrid";

export default function ShopTeaser() {
  const { addItem } = useCart();
  const featured = products.slice(0, 4);

  return (
    <section className="py-20 px-6" style={{ background: "#FDFBF8" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <p
              className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A] mb-2"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Digital Downloads · Instant Access
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#2C2C2C",
              }}
            >
              Shop Our Templates
            </h2>
            <p
              className="mt-2 text-[#5A4A42]/60 max-w-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Professionally designed invitations, games & printables — ready to
              download instantly.
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#C9927A] hover:underline flex-shrink-0"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            View All Templates →
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-6 mb-10">
          {[
            { icon: "↓", label: "Instant Download" },
            { icon: "✎", label: "Editable in Canva" },
            { icon: "✓", label: "Print-Ready PDF" },
            { icon: "♾", label: "Unlimited Prints" },
          ].map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 text-sm text-[#2C2C2C]/60"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              <span className="text-[#C9927A]">{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>

        {/* Product grid — 4 products */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {featured.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border"
              style={{ borderColor: "#F0EBE4" }}
            >
              {/* Product image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#FAF8F5]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Tag */}
                {product.tag && (
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold"
                    style={{
                      background: product.tagBg,
                      color: product.tagColor,
                      fontFamily: "var(--font-ui)",
                    }}
                  >
                    {product.tag}
                  </div>
                )}
                {/* Quick add overlay */}
                <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <button
                    onClick={() =>
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        type: product.price === 0 ? "free" : "pdf",
                        category: product.category,
                      })
                    }
                    className="w-full py-2.5 text-white text-xs font-medium tracking-wide rounded-xl shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #C9927A, #B5785F)",
                      fontFamily: "var(--font-ui)",
                    }}
                  >
                    {product.price === 0
                      ? "Get Free →"
                      : `Add to Cart — $${product.price}`}
                  </button>
                </div>
              </div>

              {/* Product info */}
              <div className="p-4">
                <p
                  className="text-[9px] tracking-[0.15em] uppercase text-[#C9927A]/80 mb-1"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {product.category}
                </p>
                <h3
                  className="text-sm font-medium text-[#2C2C2C] leading-tight mb-2"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {product.name}
                </h3>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span
                          key={i}
                          style={{
                            color:
                              i < Math.floor(product.rating)
                                ? "#C4A55A"
                                : "#E8E0D8",
                            fontSize: 10,
                          }}
                        >
                          ★
                        </span>
                      ))}
                  </div>
                  <span
                    className="text-[10px] text-[#2C2C2C]/40"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    ({product.reviews})
                  </span>
                </div>
                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className="text-base font-semibold"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: product.price === 0 ? "#6A8A6A" : "#2C2C2C",
                      }}
                    >
                      {product.price === 0
                        ? "Free"
                        : `$${product.price.toFixed(2)}`}
                    </span>
                    {product.originalPrice && (
                      <span
                        className="text-xs text-[#2C2C2C]/30 line-through"
                        style={{ fontFamily: "var(--font-ui)" }}
                      >
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() =>
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        type: product.price === 0 ? "free" : "pdf",
                        category: product.category,
                      })
                    }
                    className="text-xs px-3 py-1.5 rounded-full border font-medium transition-all hover:bg-[#C9927A] hover:text-white hover:border-[#C9927A]"
                    style={{
                      fontFamily: "var(--font-ui)",
                      borderColor: "#E8E0D8",
                      color: "#2C2C2C",
                    }}
                  >
                    {product.price === 0 ? "Get Free" : "Add"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 text-white text-sm font-medium tracking-wide rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            style={{
              background: "linear-gradient(135deg, #C9927A, #B5785F)",
              fontFamily: "var(--font-ui)",
            }}
          >
            View All Templates
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
