"use client";
import Link from "next/link";
import Image from "next/image";
import { ProductMockup } from "@/components/ui/ProductMockup";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || "",
      type: product.isFree ? "free" : "pdf",
      category: product.category,
    });
  };

  const displayPrice = product.salePrice ?? product.price;

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{ borderColor: "#F0EBE4" }}
    >
      {/* Product visual */}
      <div className="relative bg-[#FAF8F5] overflow-hidden" style={{ aspectRatio: "3/4" }}>
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width:768px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full">
            <ProductMockup
              type={product.mockupType}
              accentColor={product.mockupAccent}
              bgColor={product.mockupBg}
              title={product.mockupTitle}
            />
          </div>
        )}

        {/* Overlay CTA on hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <button
            onClick={handleAdd}
            className="w-full py-2.5 text-white text-xs font-semibold tracking-wide rounded-xl shadow-lg"
            style={{
              background: "linear-gradient(135deg,#C9927A,#B5785F)",
              fontFamily: "var(--font-ui)",
            }}
          >
            {product.isFree ? "Download Free" : `Add to Cart — $${displayPrice.toFixed(2)}`}
          </button>
        </div>

        {/* Tag badge */}
        {product.tag && (
          <div
            className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold"
            style={{
              background: product.tagBg || "#F0ECF8",
              color: product.tagColor || "#7A5AB5",
              fontFamily: "var(--font-ui)",
            }}
          >
            {product.tag}
          </div>
        )}

        {/* Wishlist */}
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9927A" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </button>
      </div>

      {/* Product info */}
      <div className="p-4">
        <p
          className="text-[9px] tracking-[0.15em] uppercase mb-1"
          style={{ color: "#C9927A80", fontFamily: "var(--font-ui)" }}
        >
          {product.category}
        </p>
        <h3
          className="text-sm font-medium text-[#2C2C2C] leading-snug mb-2 line-clamp-2"
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
            ({product.reviews.toLocaleString()})
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span
              className="text-base font-semibold"
              style={{
                fontFamily: "var(--font-ui)",
                color: product.isFree ? "#5A8A5A" : "#2C2C2C",
              }}
            >
              {product.isFree ? "Free" : `$${displayPrice.toFixed(2)}`}
            </span>
            {product.originalPrice && !product.isFree && (
              <span
                className="text-xs text-[#2C2C2C]/30 line-through"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className="text-xs px-3 py-1.5 rounded-full border font-medium transition-all hover:bg-[#C9927A] hover:text-white hover:border-[#C9927A]"
            style={{
              fontFamily: "var(--font-ui)",
              borderColor: "#E8E0D8",
              color: "#2C2C2C",
            }}
          >
            {product.isFree ? "Get Free" : "Add"}
          </button>
        </div>
      </div>
    </Link>
  );
}
