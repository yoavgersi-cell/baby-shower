"use client";
import { useState } from "react";
import Flower from "@/components/ui/Flower";

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

// ── CSS Moodboard scenes ──────────────────────────────────────────────────────

function FrenchGardenScene() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: 320,
        background:
          "linear-gradient(160deg, #E8F0E4 0%, #D4E8D0 60%, #EAF0E0 100%)",
      }}
    >
      {/* Sky gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-24"
        style={{
          background: "linear-gradient(180deg, #E8F4F8 0%, transparent 100%)",
        }}
      />
      {/* Gingham tablecloth */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <div
          className="absolute inset-0"
          style={{ background: "white", opacity: 0.7 }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 12px, rgba(232,196,196,0.3) 12px, rgba(232,196,196,0.3) 13px), repeating-linear-gradient(90deg, transparent, transparent 12px, rgba(232,196,196,0.3) 12px, rgba(232,196,196,0.3) 13px)",
          }}
        />
      </div>
      {/* Lavender bunches */}
      <div className="absolute left-8 bottom-28">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute w-1.5 rounded-full"
            style={{
              height: 24 + i * 4,
              background: "linear-gradient(180deg, #B8A0D0, #9A80B8)",
              left: i * 6,
              bottom: 0,
              borderRadius: "40% 40% 0 0",
            }}
          />
        ))}
      </div>
      <div className="absolute left-16 bottom-28" style={{ opacity: 0.7 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute w-1.5 rounded-full"
            style={{
              height: 20 + i * 3,
              background: "linear-gradient(180deg, #C8B0E0, #A890C8)",
              left: i * 5,
              bottom: 0,
              borderRadius: "40% 40% 0 0",
            }}
          />
        ))}
      </div>
      {/* Invitation card on table */}
      <div
        className="absolute bottom-12 bg-white shadow-xl p-4 w-40"
        style={{
          left: "50%",
          transform: "translateX(-60%) rotate(-2deg)",
          border: "1px solid #E8E0D0",
        }}
      >
        <div className="text-center">
          <div className="w-12 h-px mx-auto mb-2" style={{ background: "#9BAD9B" }} />
          <p
            className="text-[7px] tracking-[0.2em] uppercase"
            style={{ color: "#9BAD9B", fontFamily: "var(--font-ui)" }}
          >
            Bébé Shower
          </p>
          <p
            className="text-base mt-1"
            style={{
              fontFamily: "var(--font-display)",
              color: "#2C2C2C",
              fontWeight: 400,
            }}
          >
            Sophie &amp; Pierre
          </p>
          <div className="flex gap-1 justify-center mt-2">
            <Flower color="#9BAD9B" size={10} />
            <Flower color="#E8C4C4" size={10} />
            <Flower color="#9BAD9B" size={10} />
          </div>
        </div>
      </div>
      {/* Basket outline */}
      <div
        className="absolute bottom-10 right-16 w-20 h-16 rounded-b-3xl"
        style={{
          border: "2px solid #C4A55A",
          borderTop: "none",
          background: "rgba(212,184,150,0.3)",
        }}
      />
      <div
        className="absolute bottom-24 right-16 w-20 h-3 rounded-full"
        style={{ background: "#C4A55A", opacity: 0.6 }}
      />
      {/* Floating flowers */}
      <div className="absolute top-16 right-12">
        <Flower color="#E8C4C4" size={40} />
      </div>
      <div className="absolute top-24 right-32">
        <Flower color="#9BAD9B" size={28} />
      </div>
      <div className="absolute top-12" style={{ left: "50%" }}>
        <Flower color="#C4A55A" size={20} />
      </div>
    </div>
  );
}

function ChampagneAndBowsScene() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: 240,
        background: "linear-gradient(160deg, #FDF5E8 0%, #F8EDCC 60%, #FDF8EE 100%)",
      }}
    >
      {/* Gold shimmer overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 20%, #C4A55A 0%, transparent 60%)",
        }}
      />
      {/* Champagne flute left */}
      <div className="absolute left-8 bottom-6">
        <div
          className="w-6 h-20 rounded-t-full opacity-40"
          style={{ background: "linear-gradient(180deg, #F5E6C8, #C4A55A44)", border: "1px solid #C4A55A" }}
        />
        <div className="w-10 h-1 -ml-2 rounded-full" style={{ background: "#C4A55A", opacity: 0.5 }} />
        <div className="w-2 h-6 ml-2" style={{ background: "#C4A55A44", borderLeft: "1px solid #C4A55A44", borderRight: "1px solid #C4A55A44" }} />
        <div className="w-8 h-1 -ml-3 rounded-full" style={{ background: "#C4A55A", opacity: 0.4 }} />
      </div>
      {/* Champagne flute right */}
      <div className="absolute right-10 bottom-6">
        <div
          className="w-6 h-20 rounded-t-full opacity-40"
          style={{ background: "linear-gradient(180deg, #F5E6C8, #C4A55A44)", border: "1px solid #C4A55A" }}
        />
        <div className="w-10 h-1 -ml-2 rounded-full" style={{ background: "#C4A55A", opacity: 0.5 }} />
        <div className="w-2 h-6 ml-2" style={{ background: "#C4A55A44", borderLeft: "1px solid #C4A55A44", borderRight: "1px solid #C4A55A44" }} />
        <div className="w-8 h-1 -ml-3 rounded-full" style={{ background: "#C4A55A", opacity: 0.4 }} />
      </div>
      {/* Large bow center */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2">
        <svg width="90" height="60" viewBox="0 0 60 40" fill="none">
          <path d="M30 20 C20 10 5 8 8 18 C11 28 22 22 30 20Z" fill="#E8C4C4" opacity="0.9" />
          <path d="M30 20 C40 10 55 8 52 18 C49 28 38 22 30 20Z" fill="#E8C4C4" opacity="0.9" />
          <path d="M30 20 C24 26 14 32 10 36" stroke="#E8C4C4" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
          <path d="M30 20 C36 26 46 32 50 36" stroke="#E8C4C4" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
          <circle cx="30" cy="20" r="4" fill="#F5E6C8" />
          <circle cx="30" cy="20" r="2" fill="#C4A55A" opacity="0.5" />
        </svg>
      </div>
      {/* Satin ribbon drape */}
      <div
        className="absolute top-16 left-0 right-0 h-1 opacity-30"
        style={{ background: "linear-gradient(90deg, transparent, #C4A55A 20%, #E8C4C4 50%, #C4A55A 80%, transparent)" }}
      />
      {/* Bubbles */}
      {[
        { l: "28%", t: "30%" }, { l: "32%", t: "50%" }, { l: "25%", t: "60%" },
        { l: "36%", t: "40%" }, { l: "22%", t: "45%" },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute rounded-full border"
          style={{ left: pos.l, top: pos.t, width: 4 + (i % 3) * 2, height: 4 + (i % 3) * 2, borderColor: "#C4A55A", opacity: 0.4 }}
        />
      ))}
      <div className="absolute bottom-4 right-1/2 translate-x-1/2">
        <Flower color="#C4A55A" size={22} />
      </div>
    </div>
  );
}

function ModernTeddyBearScene() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: 240,
        background: "linear-gradient(160deg, #FDF5EE 0%, #F5E8D8 60%, #F0DEC8 100%)",
      }}
    >
      {/* Honeycomb pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='28' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 2l10 6v12l-10 6L4 20V8z' fill='none' stroke='%23C4A55A' strokeWidth='0.5'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Teddy bear face — CSS circles */}
      {/* Ears */}
      <div
        className="absolute rounded-full"
        style={{ width: 44, height: 44, background: "#D4B896", top: 24, left: "calc(50% - 38px)" }}
      />
      <div
        className="absolute rounded-full"
        style={{ width: 44, height: 44, background: "#D4B896", top: 24, left: "calc(50% + 0px)" }}
      />
      {/* Inner ears */}
      <div
        className="absolute rounded-full"
        style={{ width: 26, height: 26, background: "#C9927A", opacity: 0.5, top: 33, left: "calc(50% - 29px)" }}
      />
      <div
        className="absolute rounded-full"
        style={{ width: 26, height: 26, background: "#C9927A", opacity: 0.5, top: 33, left: "calc(50% + 9px)" }}
      />
      {/* Head */}
      <div
        className="absolute rounded-full"
        style={{ width: 88, height: 80, background: "#D4B896", top: 40, left: "calc(50% - 44px)" }}
      />
      {/* Eyes */}
      <div
        className="absolute rounded-full"
        style={{ width: 10, height: 10, background: "#3D2B1F", top: 64, left: "calc(50% - 22px)" }}
      />
      <div
        className="absolute rounded-full"
        style={{ width: 10, height: 10, background: "#3D2B1F", top: 64, left: "calc(50% + 12px)" }}
      />
      {/* Nose */}
      <div
        className="absolute"
        style={{ width: 16, height: 10, background: "#3D2B1F", borderRadius: "50%", top: 82, left: "calc(50% - 8px)" }}
      />
      {/* Honey jar outline */}
      <div className="absolute bottom-8 left-8">
        <div className="w-10 h-12 rounded-b-xl rounded-t-sm" style={{ background: "#F5E6C8", border: "1.5px solid #C4A55A" }} />
        <div className="w-12 h-2.5 -ml-1 rounded-sm" style={{ background: "#C4A55A", opacity: 0.6 }} />
        <div className="text-[8px] text-center mt-0.5" style={{ color: "#C4A55A", fontFamily: "var(--font-ui)" }}>honey</div>
      </div>
      {/* Flowers in corner */}
      <div className="absolute bottom-6 right-6">
        <Flower color="#C9927A" size={28} />
      </div>
    </div>
  );
}

function CoastalItalianScene() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: 240,
        background: "linear-gradient(180deg, #87CEEB 0%, #B8E0F7 30%, #FAF8F5 60%, #F5E040 100%)",
      }}
    >
      {/* Sea waves */}
      <div
        className="absolute"
        style={{
          bottom: "35%",
          left: 0,
          right: 0,
          height: 20,
          background: "linear-gradient(180deg, transparent, #4A7AB5)",
          borderRadius: "50% 50% 0 0 / 20px 20px 0 0",
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: "32%",
          left: 0,
          right: 0,
          height: 16,
          background: "#4A7AB5",
          opacity: 0.4,
        }}
      />
      {/* Ground — terracotta tiles */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[35%]"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, #E8703A 0px, #E8703A 24px, #D4601A 24px, #D4601A 25px)",
          opacity: 0.6,
        }}
      />
      {/* Lemon slices — circles with wedge lines */}
      {[
        { left: "10%", top: "45%", size: 32 },
        { left: "55%", top: "42%", size: 26 },
        { left: "80%", top: "48%", size: 28 },
      ].map((lemon, i) => (
        <div key={i} className="absolute" style={{ left: lemon.left, top: lemon.top }}>
          <div
            className="rounded-full"
            style={{
              width: lemon.size,
              height: lemon.size,
              background: "radial-gradient(circle, #F5E040 50%, #D4C030 100%)",
              border: "1.5px solid #C4A530",
            }}
          />
          {/* Wedge lines */}
          <div
            className="absolute"
            style={{
              top: "50%", left: 0, right: 0, height: 1,
              background: "#C4A530", opacity: 0.5, transform: "translateY(-50%)",
            }}
          />
          <div
            className="absolute"
            style={{
              top: 0, bottom: 0, left: "50%", width: 1,
              background: "#C4A530", opacity: 0.5, transform: "translateX(-50%)",
            }}
          />
        </div>
      ))}
      {/* Terracotta pot */}
      <div className="absolute bottom-[35%] right-8">
        <div
          className="w-12 h-10 rounded-b-xl"
          style={{ background: "#E8703A", border: "1px solid #C05820" }}
        />
        <div className="w-14 h-3 -ml-1 rounded-sm" style={{ background: "#C05820" }} />
        <div className="absolute -top-8 left-2">
          <Flower color="#9BAD9B" size={20} />
        </div>
      </div>
      {/* Cobalt blue border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-2"
        style={{ background: "#4A7AB5" }}
      />
    </div>
  );
}

function VintageStorybookScene() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: 240,
        background: "linear-gradient(160deg, #F8F2E4 0%, #F0E8D0 60%, #E8DEC4 100%)",
      }}
    >
      {/* Aged paper texture lines */}
      {[20, 35, 50, 65, 80].map((top, i) => (
        <div
          key={i}
          className="absolute left-8 right-8 opacity-15"
          style={{ top: `${top}%`, height: 1, background: "#7A6A5A" }}
        />
      ))}
      {/* Open book shape */}
      <div
        className="absolute"
        style={{
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          width: 160,
          height: 100,
          background: "#FAF5E8",
          border: "1px solid #C4A55A",
          borderRadius: "2px 2px 0 0",
        }}
      >
        {/* Book spine */}
        <div
          className="absolute top-0 bottom-0"
          style={{ left: "50%", width: 2, background: "#9A8070", opacity: 0.4 }}
        />
        {/* Page lines left */}
        {[15, 28, 41, 54].map((top) => (
          <div
            key={top}
            className="absolute opacity-20"
            style={{ top, left: 10, width: 55, height: 1, background: "#7A6A5A" }}
          />
        ))}
        {/* Page lines right */}
        {[15, 28, 41, 54].map((top) => (
          <div
            key={top}
            className="absolute opacity-20"
            style={{ top, left: 95, width: 55, height: 1, background: "#7A6A5A" }}
          />
        ))}
        {/* Watercolor circle illustration */}
        <div
          className="absolute rounded-full opacity-30"
          style={{ width: 30, height: 30, background: "#E8C4C4", top: 16, left: 20 }}
        />
        <div
          className="absolute rounded-full opacity-20"
          style={{ width: 18, height: 18, background: "#9BAD9B", top: 20, left: 24 }}
        />
      </div>
      {/* Decorative corner flourish lines */}
      <div
        className="absolute top-4 left-4 opacity-30"
        style={{ width: 30, height: 30, borderTop: "2px solid #C4A55A", borderLeft: "2px solid #C4A55A" }}
      />
      <div
        className="absolute top-4 right-4 opacity-30"
        style={{ width: 30, height: 30, borderTop: "2px solid #C4A55A", borderRight: "2px solid #C4A55A" }}
      />
      {/* Scattered "watercolor" blobs */}
      <div className="absolute top-6 right-8 opacity-40">
        <Flower color="#C4A55A" size={24} />
      </div>
      <div className="absolute top-16 left-6 opacity-30">
        <Flower color="#E8C4C4" size={18} />
      </div>
      {/* Handwritten-style decorative line */}
      <svg
        className="absolute top-8 left-1/2 -translate-x-1/2 opacity-20"
        width="100"
        height="20"
        viewBox="0 0 100 20"
        fill="none"
      >
        <path d="M5 10 Q25 2 50 10 Q75 18 95 10" stroke="#7A6A5A" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}

// ── Theme data ────────────────────────────────────────────────────────────────

const themes = [
  {
    name: "French Garden Picnic",
    category: "Editorial Pick",
    vibe: "Gingham, lavender, baguettes & bows in the Provençal sun",
    palette: ["#9BAD9B", "#E8C4C4", "#F5F0E8", "#C4A55A", "#9B8A6B"],
    featured: true,
    Scene: FrenchGardenScene,
  },
  {
    name: "Champagne & Bows",
    category: "Luxury",
    vibe: "Golden bubbles, satin ribbons, and ultra-feminine elegance",
    palette: ["#F5E6C8", "#C4A55A", "#E8C4C4", "#FAF8F5", "#B5785F"],
    featured: false,
    Scene: ChampagneAndBowsScene,
  },
  {
    name: "Modern Teddy Bear",
    category: "Cozy",
    vibe: "Cozy neutrals, plush textures, honey jars, and bear ears",
    palette: ["#D4B896", "#C4A55A", "#FAF8F5", "#9B7B5A", "#E8D8C0"],
    featured: false,
    Scene: ModernTeddyBearScene,
  },
  {
    name: "Coastal Italian Summer",
    category: "Wanderlust",
    vibe: "Lemon-yellow, cobalt blue, terracotta, and Mediterranean warmth",
    palette: ["#4A7AB5", "#F5E040", "#E8703A", "#FAF8F5", "#9BAD9B"],
    featured: false,
    Scene: CoastalItalianScene,
  },
  {
    name: "Vintage Storybook",
    category: "Nostalgic",
    vibe: "Dusty pages, watercolor illustrations, and once-upon-a-time magic",
    palette: ["#C4A55A", "#9B8A6B", "#E8C4C4", "#F0ECE0", "#7A6A5A"],
    featured: false,
    Scene: VintageStorybookScene,
  },
];

// ── Card components ───────────────────────────────────────────────────────────

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

// ── Main component ────────────────────────────────────────────────────────────

export default function FeaturedThemes() {
  const [featuredTheme, ...restThemes] = themes;
  const FeaturedScene = featuredTheme.Scene;
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
              style={{ background: "linear-gradient(90deg, transparent, #C4A55A)" }}
            />
            <span
              className="text-[10px] tracking-[0.25em] uppercase text-[#C4A55A]"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Curated for You
            </span>
            <div
              className="w-16 h-px"
              style={{ background: "linear-gradient(90deg, #C4A55A, transparent)" }}
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
            Hand-curated concepts that go beyond a color palette — each one is a complete world to step into.
          </p>
        </div>

        {/* Featured full-width card */}
        <div
          className="overflow-hidden mb-5 hover:shadow-2xl transition-shadow duration-300"
          style={{ border: "1px solid #EDE5DC", borderRadius: 12 }}
        >
          <FeaturedScene />
          <ThemeCardInfo theme={featuredTheme} />
        </div>

        {/* Row of 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {pairA.map((theme) => {
            const Scene = theme.Scene;
            return (
              <div
                key={theme.name}
                className="overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                style={{ border: "1px solid #EDE5DC", borderRadius: 12 }}
              >
                <Scene />
                <ThemeCardInfo theme={theme} />
              </div>
            );
          })}
        </div>

        {/* Staggered row of 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pairB.map((theme, i) => {
            const Scene = theme.Scene;
            return (
              <div
                key={theme.name}
                className="overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                style={{
                  border: "1px solid #EDE5DC",
                  borderRadius: 12,
                  marginTop: i === 1 ? 24 : 0,
                }}
              >
                <Scene />
                <ThemeCardInfo theme={theme} />
              </div>
            );
          })}
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
            <Flower color="#E8C4C4" size={16} />
            Browse All 500+ Themes
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
