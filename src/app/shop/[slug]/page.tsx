"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductCard from "@/components/ProductCard";
import { ProductMockup } from "@/components/ui/ProductMockup";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => product.relatedProductIds?.includes(p.id));
  const displayPrice = product.salePrice ?? product.price;

  return (
    <>
      <Navbar />
      <main className="pt-16" style={{ background: "#FAF8F5" }}>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-xs text-[#2C2C2C]/50" style={{ fontFamily: "var(--font-ui)" }}>
            <Link href="/" className="hover:text-[#C9927A]">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-[#C9927A]">Shop</Link>
            <span>/</span>
            <Link href={`/category/${product.category}s`} className="hover:text-[#C9927A] capitalize">{product.category}s</Link>
            <span>/</span>
            <span className="text-[#2C2C2C]/70 line-clamp-1">{product.name}</span>
          </nav>
        </div>

        {/* Product layout */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left: product visual */}
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden"
                style={{ aspectRatio: "3/4", border: "1px solid #F0EBE4" }}
              >
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 50vw"
                    priority
                  />
                ) : (
                  <ProductMockup
                    type={product.mockupType}
                    accentColor={product.mockupAccent}
                    bgColor={product.mockupBg}
                    title={product.mockupTitle}
                  />
                )}
              </div>

              {/* File format pills */}
              <div className="flex gap-2 mt-4">
                {product.fileFormats.map((fmt) => (
                  <span
                    key={fmt}
                    className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: "white",
                      border: "1px solid #E8E0D8",
                      color: "#2C2C2C",
                      fontFamily: "var(--font-ui)",
                    }}
                  >
                    {fmt}
                  </span>
                ))}
                <span
                  className="px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: "#E8F4E8",
                    color: "#5A8A5A",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  Instant Download
                </span>
              </div>
            </div>

            {/* Right: product info */}
            <div className="flex flex-col">
              {/* Tag */}
              {product.tag && (
                <div className="mb-4">
                  <span
                    className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background: product.tagBg || "#F0ECF8",
                      color: product.tagColor || "#7A5AB5",
                      fontFamily: "var(--font-ui)",
                    }}
                  >
                    {product.tag}
                  </span>
                </div>
              )}

              {/* Category */}
              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-2"
                style={{ color: "#C9927A", fontFamily: "var(--font-ui)" }}
              >
                {product.category}
              </p>

              {/* Title */}
              <h1
                className="mb-4 leading-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem,3vw,2.8rem)",
                  fontWeight: 400,
                  color: "#2C2C2C",
                }}
              >
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} style={{ color: i < Math.floor(product.rating) ? "#C4A55A" : "#E8E0D8", fontSize: 14 }}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-[#2C2C2C]/50" style={{ fontFamily: "var(--font-ui)" }}>
                  {product.rating} ({product.reviews.toLocaleString()} reviews)
                </span>
                <span className="text-sm text-[#2C2C2C]/40" style={{ fontFamily: "var(--font-ui)" }}>
                  · {product.downloads} downloads
                </span>
              </div>

              {/* Description */}
              <p
                className="text-base text-[#5A4A42]/70 leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {product.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6 pb-6" style={{ borderBottom: "1px solid #F0EBE4" }}>
                <span
                  className="text-3xl font-semibold"
                  style={{
                    fontFamily: "var(--font-ui)",
                    color: product.isFree ? "#5A8A5A" : "#2C2C2C",
                  }}
                >
                  {product.isFree ? "Free" : `$${displayPrice.toFixed(2)}`}
                </span>
                {product.originalPrice && !product.isFree && (
                  <span
                    className="text-xl line-through text-[#2C2C2C]/30"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.originalPrice && !product.isFree && (
                  <span
                    className="px-2 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "#E8F4E8", color: "#5A8A5A", fontFamily: "var(--font-ui)" }}
                  >
                    Save ${(product.originalPrice - displayPrice).toFixed(2)}
                  </span>
                )}
              </div>

              {/* Add to Cart */}
              <AddToCartButton product={product} displayPrice={displayPrice} />

              {/* Features */}
              <div className="mt-8">
                <h3
                  className="text-sm font-semibold text-[#2C2C2C] mb-4"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                        style={{ background: "#E8F4E8" }}
                      >
                        <svg width="8" height="8" viewBox="0 0 12 12">
                          <polyline points="2 6 5 9 10 3" stroke="#5A8A5A" strokeWidth="1.5" fill="none" />
                        </svg>
                      </div>
                      <span className="text-sm text-[#2C2C2C]/70" style={{ fontFamily: "var(--font-ui)" }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust badges */}
              <div
                className="mt-8 p-4 rounded-2xl grid grid-cols-2 gap-3"
                style={{ background: "#FAF8F5" }}
              >
                {[
                  ["↓", "Instant Download", "PDF ready in seconds"],
                  ["✎", "Editable in Canva", "Customize text & colors"],
                  ["✓", "Print at Home", "Or at any print shop"],
                  ["♾", "Unlimited Prints", "No restrictions"],
                ].map(([icon, title, sub]) => (
                  <div key={title} className="flex items-start gap-2">
                    <span style={{ color: "#C9927A", fontSize: 14, fontWeight: "bold" }}>{icon}</span>
                    <div>
                      <p className="text-xs font-medium text-[#2C2C2C]" style={{ fontFamily: "var(--font-ui)" }}>
                        {title}
                      </p>
                      <p className="text-[10px] text-[#2C2C2C]/40" style={{ fontFamily: "var(--font-ui)" }}>
                        {sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div className="mt-20">
              <div className="flex items-end justify-between mb-8">
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.4rem,2.5vw,2rem)",
                    fontWeight: 400,
                    color: "#2C2C2C",
                  }}
                >
                  You Might Also Like
                </h2>
                <Link
                  href="/shop"
                  className="text-sm font-medium text-[#C9927A] hover:underline"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}

function AddToCartButton({ product, displayPrice }: { product: { id: string; name: string; price: number; image?: string; isFree: boolean; category: string }, displayPrice: number }) {
  const { addItem } = useCart();

  return (
    <button
      onClick={() =>
        addItem({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image || "",
          type: product.isFree ? "free" : "pdf",
          category: product.category,
        })
      }
      className="w-full py-4 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
      style={{
        background: "linear-gradient(135deg,#C9927A,#B5785F)",
        fontFamily: "var(--font-ui)",
      }}
    >
      {product.isFree ? "Download Free" : `Add to Cart — $${displayPrice.toFixed(2)}`}
    </button>
  );
}
