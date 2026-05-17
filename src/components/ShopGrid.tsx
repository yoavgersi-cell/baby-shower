"use client";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const categoryFilters = [
  { label: "All", value: "all" },
  { label: "Invitations", value: "invitation" },
  { label: "Games", value: "game" },
  { label: "Signs", value: "sign" },
  { label: "Bundles", value: "bundle" },
  { label: "Checklists", value: "checklist" },
  { label: "Free", value: "free" },
];

export default function ShopGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = products.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "free") return p.isFree;
    return p.category === activeFilter;
  });

  return (
    <section className="py-12 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Category filter */}
        <div className="flex gap-2 flex-wrap mb-10">
          {categoryFilters.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                activeFilter === cat.value
                  ? "bg-[#2C2C2C] text-white shadow-md"
                  : "bg-white text-[#2C2C2C]/70 border hover:border-[#C9927A] hover:text-[#C9927A]"
              }`}
              style={{ fontFamily: "var(--font-ui)", borderColor: "#E8E0D8" }}
            >
              {cat.label}
            </button>
          ))}
          <div
            className="ml-auto flex items-center gap-2 text-xs text-[#2C2C2C]/40"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            {filtered.length} products
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-16 py-12 rounded-3xl"
          style={{ background: "linear-gradient(135deg, #FDF5EE, #F8EDE4)" }}
        >
          <p
            className="text-[10px] tracking-[0.2em] uppercase text-[#C9927A] mb-3"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            More Coming Soon
          </p>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.75rem",
              color: "#2C2C2C",
              fontWeight: 400,
            }}
          >
            New Templates Every Week
          </h3>
          <p
            className="text-sm text-[#5A4A42]/60 mt-2 mb-6"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Join 50,000+ mamas and get new templates straight to your inbox
          </p>
          <div className="flex max-w-sm mx-auto gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-full text-sm border outline-none focus:border-[#C9927A]"
              style={{ borderColor: "#E8E0D8", fontFamily: "var(--font-ui)" }}
            />
            <button
              className="px-6 py-3 rounded-full text-white text-sm font-medium"
              style={{
                background: "linear-gradient(135deg,#C9927A,#B5785F)",
                fontFamily: "var(--font-ui)",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
