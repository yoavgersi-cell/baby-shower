import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Baby Shower Invitations | Free & Premium Templates",
  description:
    "Beautiful baby shower invitation templates — free and premium. Editable in Canva, instant PDF download. Garden Floral, Champagne & Gold, Teddy Bear, and more.",
  keywords:
    "baby shower invitations, baby shower invitation templates, free baby shower invitations, printable baby shower invitations",
};

const invitations = products.filter((p) => p.category === "invitation");

export default function InvitationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section
          className="py-16 px-4 lg:px-8"
          style={{ background: "linear-gradient(160deg, #FDF9F5 0%, #F8F0E8 100%)" }}
        >
          <div className="max-w-7xl mx-auto">
            <p
              className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A] mb-3"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Invitations
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 400,
                color: "#2C2C2C",
              }}
            >
              Baby Shower Invitations
            </h1>
            <p
              className="mt-3 text-[#5A4A42]/60 max-w-lg"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Beautifully designed, instantly editable. Set the tone for your perfect shower with an invitation that arrives first.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {["Canva Editable", "Instant Download", "Print-Ready PDF", "Multiple Sizes"].map((feat) => (
                <span
                  key={feat}
                  className="flex items-center gap-2 text-sm text-[#2C2C2C]/60"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  <span className="text-[#9BAD9B]">✓</span>
                  {feat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Products grid */}
        <section className="py-16 px-4 lg:px-8" style={{ background: "white" }}>
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {invitations.map((product) => (
              <div
                key={product.id}
                className="group rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: "#F0EBE4" }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#FAF8F5]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  {product.tag && (
                    <span
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold"
                      style={{
                        background: product.tagBg,
                        color: product.tagColor,
                        fontFamily: "var(--font-ui)",
                      }}
                    >
                      {product.tag}
                    </span>
                  )}
                </div>
                <div className="p-4 bg-white">
                  <h2
                    className="text-sm font-medium text-[#2C2C2C] leading-tight mb-1"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {product.name}
                  </h2>
                  <p
                    className="text-[11px] text-[#2C2C2C]/50 mb-3 line-clamp-2"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {product.description}
                  </p>
                  <div className="flex items-center gap-1 mb-3">
                    {Array(5).fill(0).map((_, i) => (
                      <span key={i} style={{ color: i < Math.floor(product.rating) ? "#C4A55A" : "#E8E0D8", fontSize: 10 }}>★</span>
                    ))}
                    <span className="text-[10px] text-[#2C2C2C]/40 ml-1" style={{ fontFamily: "var(--font-ui)" }}>
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-semibold"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: product.isFree ? "#6A8A6A" : "#2C2C2C",
                        fontSize: "0.95rem",
                      }}
                    >
                      {product.isFree ? "Free" : `$${product.price.toFixed(2)}`}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-[#2C2C2C]/30 line-through" style={{ fontFamily: "var(--font-ui)" }}>
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <Link
                      href="/shop"
                      className="text-xs px-3 py-1.5 rounded-full text-white"
                      style={{ background: "linear-gradient(135deg,#C9927A,#B5785F)", fontFamily: "var(--font-ui)" }}
                    >
                      {product.isFree ? "Get Free" : "Get It"}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
