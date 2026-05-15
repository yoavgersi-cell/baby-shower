"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

const invitations = products.filter(
  (p) => p.category === "invitation" || p.isFeatured
);

export default function PopularInvitations() {
  const { addItem } = useCart();

  return (
    <section className="py-20" style={{ background: "white" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <p
              className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A] mb-2"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Invitations · This Week
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#2C2C2C",
              }}
            >
              Most Saved Invitations This Week
            </h2>
          </div>
          <Link
            href="/invitations"
            className="text-sm font-medium text-[#C9927A] hover:underline flex-shrink-0"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            Browse All Invitations →
          </Link>
        </div>

        {/* Scroll grid */}
        <div className="flex lg:grid lg:grid-cols-4 gap-5 overflow-x-auto pb-4 lg:pb-0 snap-x snap-mandatory lg:overflow-visible">
          {invitations.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0 w-64 sm:w-72 lg:w-auto snap-start"
              style={{ borderColor: "#F0EBE4" }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#FAF8F5]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 288px, 25vw"
                />
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
                <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <button
                    onClick={() =>
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        type: product.isFree ? "free" : "pdf",
                        category: product.category,
                      })
                    }
                    className="w-full py-2.5 text-white text-xs font-medium tracking-wide rounded-xl shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #C9927A, #B5785F)",
                      fontFamily: "var(--font-ui)",
                    }}
                  >
                    {product.isFree ? "Download Free →" : `Add to Cart — $${product.price}`}
                  </button>
                </div>
              </div>
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
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span
                          key={i}
                          style={{
                            color: i < Math.floor(product.rating) ? "#C4A55A" : "#E8E0D8",
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
                  <span
                    className="text-[10px] text-[#2C2C2C]/30 ml-auto"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {product.downloads} downloads
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className="text-base font-semibold"
                    style={{
                      fontFamily: "var(--font-ui)",
                      color: product.isFree ? "#6A8A6A" : "#2C2C2C",
                    }}
                  >
                    {product.isFree ? "Free" : `$${product.price.toFixed(2)}`}
                  </span>
                  {product.originalPrice && (
                    <span
                      className="text-xs text-[#2C2C2C]/30 line-through"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <button
                    onClick={() =>
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        type: product.isFree ? "free" : "pdf",
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
                    {product.isFree ? "Download" : "Add"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
