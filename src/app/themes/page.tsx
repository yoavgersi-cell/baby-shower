import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { themes } from "@/data/themes";

export const metadata: Metadata = {
  title: "Baby Shower Themes | Browse All Themes & Color Palettes",
  description:
    "Explore the most beautiful baby shower themes of 2025. Teddy Bear, Garden Floral, Safari, Champagne & Bows, Boho Wildflower, and more.",
  keywords:
    "baby shower themes, baby shower ideas, baby shower decor, baby shower color palettes, themed baby shower",
};

const categories = ["All", ...Array.from(new Set(themes.map((t) => t.category)))];

export default function ThemesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section
          className="py-16 px-4 lg:px-8"
          style={{ background: "linear-gradient(160deg, #1A1502 0%, #2C2204 100%)" }}
        >
          <div className="max-w-7xl mx-auto">
            <p
              className="text-[10px] tracking-[0.25em] uppercase mb-3"
              style={{ fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.4)" }}
            >
              2025 Trending
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 400,
                color: "#FAF8F2",
              }}
            >
              Baby Shower Themes
            </h1>
            <p
              className="mt-3 max-w-lg"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              From cozy neutrals to botanical gardens — find the theme that matches your vision and personality.
            </p>
          </div>
        </section>

        {/* Category filter */}
        <section
          className="py-5 px-4 lg:px-8 border-b"
          style={{ borderColor: "#F0EBE4", background: "white" }}
        >
          <div className="max-w-7xl mx-auto flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full text-xs font-medium cursor-pointer"
                style={{
                  fontFamily: "var(--font-ui)",
                  background: cat === "All" ? "#C9927A" : "#FAF8F5",
                  color: cat === "All" ? "white" : "#2C2C2C",
                  border: "1px solid",
                  borderColor: cat === "All" ? "#C9927A" : "#EDE5DC",
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </section>

        {/* Theme masonry grid */}
        <section className="py-16 px-4 lg:px-8" style={{ background: "white" }}>
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme) => (
              <Link
                key={theme.slug}
                href={`/themes/${theme.slug}`}
                className="group relative rounded-2xl overflow-hidden block hover:shadow-2xl transition-all duration-300"
                style={{ aspectRatio: "4/5" }}
              >
                <Image
                  src={theme.coverImage}
                  alt={theme.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                {theme.isTrending && (
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-2.5 py-1 rounded-full text-[10px] font-semibold text-white"
                      style={{ background: "#C9927A", fontFamily: "var(--font-ui)" }}
                    >
                      Trending
                    </span>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex gap-1.5 mb-2">
                    {theme.palette.slice(0, 4).map((color, i) => (
                      <div
                        key={i}
                        className="w-3.5 h-3.5 rounded-full border border-white/30"
                        style={{ background: color }}
                      />
                    ))}
                  </div>
                  <h2
                    className="text-white text-lg leading-tight mb-1"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    {theme.name}
                  </h2>
                  <p
                    className="text-white/60 text-xs mb-3"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {theme.tagline}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[10px]"
                      style={{ fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.45)" }}
                    >
                      {theme.saves} saves
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full text-[11px] font-medium text-white"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        fontFamily: "var(--font-ui)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
