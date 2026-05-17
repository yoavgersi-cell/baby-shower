"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductCard from "@/components/ProductCard";
import { products, type Product } from "@/data/products";

const categoryMap: Record<
  string,
  { name: string; description: string; filter: (p: Product) => boolean }
> = {
  invitations: {
    name: "Baby Shower Invitations",
    description:
      "Editable invitation templates in Canva. Download, customize, and print — all in minutes.",
    filter: (p) => p.category === "invitation",
  },
  games: {
    name: "Baby Shower Games",
    description:
      "Printable games for every group size. Bingo, predictions, scrambles and more — all instant download.",
    filter: (p) => p.category === "game",
  },
  printables: {
    name: "Baby Shower Printables",
    description:
      "Signs, checklists, games and more. Everything you need to decorate and run your perfect shower.",
    filter: (p) => ["game", "sign", "checklist"].includes(p.category),
  },
  bundles: {
    name: "Baby Shower Bundles",
    description:
      "The best value way to get everything you need. Bundles include invitations, games, signs and more.",
    filter: (p) => p.category === "bundle",
  },
  signs: {
    name: "Baby Shower Signs & Decor",
    description:
      "Welcome signs, food tent cards, table signs and more — all editable in Canva.",
    filter: (p) => p.category === "sign",
  },
  checklists: {
    name: "Baby Shower Checklists & Planners",
    description:
      "Stay organised with printable planning checklists, budget trackers, and guest list templates.",
    filter: (p) => p.category === "checklist",
  },
};

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const category = categoryMap[slug];
  if (!category) notFound();

  const filtered = products.filter(category.filter);

  return (
    <>
      <Navbar />
      <main className="pt-16" style={{ background: "#FAF8F5" }}>
        {/* Category hero */}
        <section
          className="pt-12 pb-10 px-6"
          style={{ background: "linear-gradient(160deg,#FDF9F5 0%,#F8F0E8 100%)" }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <p
              className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A] mb-3"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              {filtered.length} Products Available
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem,4vw,3.5rem)",
                fontWeight: 400,
                color: "#2C2C2C",
                lineHeight: 1.1,
              }}
            >
              {category.name}
            </h1>
            <p
              className="mt-4 text-[#5A4A42]/70 max-w-lg mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {category.description}
            </p>
          </div>
        </section>

        {/* Product grid */}
        <section className="py-12 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Count */}
            <div className="flex items-center justify-between mb-8">
              <p
                className="text-sm text-[#2C2C2C]/50"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                {filtered.length} product{filtered.length !== 1 ? "s" : ""}
              </p>
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p
                  className="text-lg text-[#2C2C2C]/50"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  No products in this category yet. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
