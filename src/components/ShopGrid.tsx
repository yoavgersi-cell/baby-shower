"use client";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const categories = ["All", "Invitations", "Games", "Signs", "Bundles", "Checklists"];

export const products = [
  {
    id: "floral-invite-01",
    name: "Garden Floral Invitation",
    category: "Invitations",
    price: 0,
    originalPrice: null as number | null,
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80&fit=crop",
    tag: "Free",
    tagColor: "#6A8A6A",
    tagBg: "#E8F0E8",
    rating: 4.9,
    reviews: 248,
    downloads: "3.2k",
    description: "Elegant botanical invitation with editable text",
    features: ["A5 & A4 sizes", "Canva template", "Instant PDF"],
  },
  {
    id: "champagne-invite-01",
    name: "Champagne & Gold Invite",
    category: "Invitations",
    price: 4.99,
    originalPrice: 12.0,
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&q=80&fit=crop",
    tag: "Bestseller",
    tagColor: "#C4A55A",
    tagBg: "#FDF5E8",
    rating: 5.0,
    reviews: 412,
    downloads: "5.1k",
    description: "Luxurious gold-foil style invitation for the chic celebration",
    features: ["3 color variations", "Matching RSVP card", "Print-ready PDF"],
  },
  {
    id: "bingo-classic-01",
    name: "Baby Shower Bingo",
    category: "Games",
    price: 0,
    originalPrice: null as number | null,
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&q=80&fit=crop",
    tag: "Free",
    tagColor: "#6A8A6A",
    tagBg: "#E8F0E8",
    rating: 4.8,
    reviews: 1024,
    downloads: "12.4k",
    description: "Classic bingo cards for groups of up to 30 guests",
    features: ["30 unique cards", "Calling card included", "Instant download"],
  },
  {
    id: "complete-bundle-01",
    name: "The Complete Shower Kit",
    category: "Bundles",
    price: 12.99,
    originalPrice: 34.0,
    image:
      "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?w=600&q=80&fit=crop",
    tag: "Best Value",
    tagColor: "#7A5AB5",
    tagBg: "#F0ECF8",
    rating: 4.9,
    reviews: 187,
    downloads: "2.8k",
    description: "Everything you need for the perfect shower in one download",
    features: ["10 invitation designs", "6 games", "12 signs & banners"],
  },
  {
    id: "teddy-invite-01",
    name: "Modern Teddy Bear Invite",
    category: "Invitations",
    price: 3.99,
    originalPrice: 9.0,
    image:
      "https://images.unsplash.com/photo-1558171813-680a73e39d78?w=600&q=80&fit=crop",
    tag: "New",
    tagColor: "#C9927A",
    tagBg: "#FDF0E8",
    rating: 4.7,
    reviews: 89,
    downloads: "1.1k",
    description: "Adorable neutral teddy bear invitation in warm honey tones",
    features: ["Editable in Canva", "Matching thank you card", "Digital + Print"],
  },
  {
    id: "predictions-game-01",
    name: "Baby Predictions Game",
    category: "Games",
    price: 0,
    originalPrice: null as number | null,
    image:
      "https://images.unsplash.com/photo-1487530811015-780526e5f6e6?w=600&q=80&fit=crop",
    tag: "Free",
    tagColor: "#6A8A6A",
    tagBg: "#E8F0E8",
    rating: 4.6,
    reviews: 356,
    downloads: "7.8k",
    description: "Guests predict the baby's arrival — so fun to open later!",
    features: ["Fill-in cards", "Envelope template", "Instant download"],
  },
  {
    id: "welcome-sign-01",
    name: "Welcome Baby Sign",
    category: "Signs",
    price: 2.99,
    originalPrice: null as number | null,
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80&fit=crop",
    tag: null,
    tagColor: "",
    tagBg: "",
    rating: 4.8,
    reviews: 134,
    downloads: "2.1k",
    description: "Beautiful welcome sign for your gift or food table",
    features: ["A3 & 18x24\" sizes", "Editable text", "Matte print finish"],
  },
  {
    id: "checklist-01",
    name: "Ultimate Planning Checklist",
    category: "Checklists",
    price: 0,
    originalPrice: null as number | null,
    image:
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&q=80&fit=crop",
    tag: "Free",
    tagColor: "#6A8A6A",
    tagBg: "#E8F0E8",
    rating: 4.9,
    reviews: 892,
    downloads: "18.2k",
    description:
      "The most comprehensive baby shower planning checklist. 12 weeks out to party day.",
    features: ["12-week timeline", "Budget tracker", "Vendor list"],
  },
];

export default function ShopGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addItem } = useCart();

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Category filter */}
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                activeCategory === cat
                  ? "bg-[#2C2C2C] text-white shadow-md"
                  : "bg-white text-[#2C2C2C]/70 border hover:border-[#C9927A] hover:text-[#C9927A]"
              }`}
              style={{
                fontFamily: "var(--font-ui)",
                borderColor: "#E8E0D8",
              }}
            >
              {cat}
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
                    className="w-full py-2.5 text-white text-xs font-medium tracking-wide rounded-xl shadow-lg transition-opacity"
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
                {/* Wishlist */}
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors opacity-0 group-hover:opacity-100">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9927A"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
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
