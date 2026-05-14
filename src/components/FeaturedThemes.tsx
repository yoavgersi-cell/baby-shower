"use client";
import { useState } from "react";
import Image from "next/image";

function HeartButton() {
  const [saved, setSaved] = useState(false);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setSaved(!saved);
      }}
      className="w-8 h-8 flex items-center justify-center rounded-full shadow-md transition-transform hover:scale-110 flex-shrink-0"
      style={{ background: "white" }}
      aria-label={saved ? "Unsave" : "Save"}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={saved ? "#C9927A" : "none"}
        stroke="#C9927A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}

const themes = [
  {
    name: "French Garden Picnic",
    vibe: "Gingham, lavender & Provençal sunshine",
    category: "Floral",
    palette: ["#9BAD9B", "#E8C4C4", "#F5F0E8", "#C4A55A"],
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&q=80&fit=crop",
    featured: true,
  },
  {
    name: "Champagne & Bows",
    vibe: "Golden bubbles, satin ribbons & ultra-feminine elegance",
    category: "Luxe",
    palette: ["#F5E6C8", "#C4A55A", "#E8C4C4", "#FAF8F5"],
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80&fit=crop",
    featured: false,
  },
  {
    name: "Modern Teddy Bear",
    vibe: "Cozy neutrals, plush textures & honey jar sweetness",
    category: "Neutral",
    palette: ["#D4B896", "#C4A55A", "#FAF8F5", "#9B7B5A"],
    image:
      "https://images.unsplash.com/photo-1558171813-680a73e39d78?w=800&q=80&fit=crop",
    featured: false,
  },
  {
    name: "Coastal Italian Summer",
    vibe: "Lemons, cobalt blue & Mediterranean warmth",
    category: "Coastal",
    palette: ["#4A7AB5", "#F5E040", "#E8703A", "#FAF8F5"],
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80&fit=crop",
    featured: false,
  },
  {
    name: "Vintage Storybook",
    vibe: "Dusty pages, watercolor wonder & once-upon-a-time magic",
    category: "Vintage",
    palette: ["#C4A55A", "#9B8A6B", "#E8C4C4", "#F0ECE0"],
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80&fit=crop",
    featured: false,
  },
];

function ThemeCardInfo({ theme }: { theme: (typeof themes)[0] }) {
  return (
    <div className="p-5 bg-white">
      <div className="flex items-start justify-between mb-2">
        <div>
          <p
            className="text-[9px] tracking-[0.2em] uppercase mb-1"
            style={{ color: theme.palette[0], fontFamily: "var(--font-ui)" }}
          >
            {theme.category}
          </p>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.25rem",
              fontWeight: 500,
              color: "#2C2C2C",
            }}
          >
            {theme.name}
          </h3>
        </div>
        <HeartButton />
      </div>
      <p
        className="text-sm text-[#5A4A42]/70 mb-4 leading-relaxed"
        style={{ fontFamily: "var(--font-body)", fontStyle: "italic" }}
      >
        {theme.vibe}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">
          {theme.palette.slice(0, 4).map((c) => (
            <div
              key={c}
              className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
              style={{ background: c }}
            />
          ))}
        </div>
        <button
          className="text-[11px] tracking-wider uppercase px-4 py-2 rounded-full text-white font-medium"
          style={{ background: theme.palette[1], fontFamily: "var(--font-ui)" }}
        >
          Explore →
        </button>
      </div>
    </div>
  );
}

export default function FeaturedThemes() {
  const [featuredTheme, ...restThemes] = themes;
  const pairA = restThemes.slice(0, 2);
  const pairB = restThemes.slice(2, 4);

  return (
    <section className="py-24 md:py-32" style={{ background: "#FAF6F0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div
              className="w-16 h-px"
              style={{
                background: "linear-gradient(90deg, transparent, #C4A55A)",
              }}
            />
            <span
              className="text-[10px] tracking-[0.25em] uppercase text-[#C4A55A]"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Curated for You
            </span>
            <div
              className="w-16 h-px"
              style={{
                background: "linear-gradient(90deg, #C4A55A, transparent)",
              }}
            />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "#2C2C2C",
            }}
          >
            This Season&apos;s Most-Loved Themes
          </h2>
          <p
            className="mt-3 text-[#5A4A42]/60 max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Hand-curated concepts that go beyond a color palette — each one is a
            complete world to step into.
          </p>
        </div>

        {/* Featured full-width card */}
        <div
          className="overflow-hidden mb-5 hover:shadow-2xl transition-shadow duration-300"
          style={{ border: "1px solid #EDE5DC", borderRadius: 12 }}
        >
          {/* Large banner image */}
          <div className="relative w-full h-80 overflow-hidden">
            <Image
              src={featuredTheme.image}
              alt={featuredTheme.name}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <ThemeCardInfo theme={featuredTheme} />
        </div>

        {/* Row of 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {pairA.map((theme) => (
            <div
              key={theme.name}
              className="overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              style={{ border: "1px solid #EDE5DC", borderRadius: 12 }}
            >
              <div className="relative w-full h-60 overflow-hidden">
                <Image
                  src={theme.image}
                  alt={theme.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <ThemeCardInfo theme={theme} />
            </div>
          ))}
        </div>

        {/* Staggered row of 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pairB.map((theme, i) => (
            <div
              key={theme.name}
              className="overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              style={{
                border: "1px solid #EDE5DC",
                borderRadius: 12,
                marginTop: i === 1 ? 24 : 0,
              }}
            >
              <div className="relative w-full h-60 overflow-hidden">
                <Image
                  src={theme.image}
                  alt={theme.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <ThemeCardInfo theme={theme} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              background: "white",
              border: "1px solid #E8C4C4",
              color: "#C9927A",
              fontFamily: "var(--font-ui)",
            }}
          >
            Browse All 500+ Themes
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
