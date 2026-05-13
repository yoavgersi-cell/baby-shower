"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const themes = [
  {
    name: "Garden Botanica",
    category: "Floral",
    description: "Lush botanical prints, pressed flower arrangements, and sage green linens",
    palette: ["#9BAD9B", "#E8C4C4", "#F5F0E8", "#D4B896"],
    bgColors: ["#E8F0E8", "#F5F0E8", "#E8C4C4", "#D4B896"],
    tall: true,
  },
  {
    name: "Neutral Luxe",
    category: "Neutral",
    description: "Warm neutrals, champagne tones, and organic textures for an effortlessly chic celebration",
    palette: ["#F5F0E8", "#D4B896", "#C4A55A", "#3D2B1F"],
    bgColors: ["#FAF8F5", "#F5F0E8", "#E8E0D8", "#D4B896"],
    tall: false,
  },
  {
    name: "Safari Serenity",
    category: "Safari",
    description: "Golden savanna hues, natural textures, and elegant wildlife-inspired accents",
    palette: ["#D4B896", "#C4A55A", "#9BAD9B", "#3D2B1F"],
    bgColors: ["#F0E8D8", "#D4B896", "#C4A55A", "#E8F0E8"],
    tall: true,
  },
  {
    name: "Blush & Ivory",
    category: "Floral",
    description: "Soft blush roses, ivory linen, and delicate gold details for timeless elegance",
    palette: ["#E8C4C4", "#FAF8F5", "#C4A55A", "#B5785F"],
    bgColors: ["#F8EEE8", "#E8C4C4", "#F5F0E8", "#D4B896"],
    tall: true,
  },
  {
    name: "Midnight Garden",
    category: "Classic",
    description: "Deep emerald, black, and gold for a sophisticated evening garden party",
    palette: ["#2C2C2C", "#3D2B1F", "#C4A55A", "#9BAD9B"],
    bgColors: ["#2C2C2C", "#3D2B1F", "#1A1A1A", "#4A5A4A"],
    tall: false,
  },
  {
    name: "Boho Desert",
    category: "Boho",
    description: "Terracotta, rust, and cream with pampas grass and macramé textures",
    palette: ["#B5785F", "#C4A55A", "#F5F0E8", "#9BAD9B"],
    bgColors: ["#E8C4A8", "#B5785F", "#F0E0D0", "#C4A55A"],
    tall: true,
  },
  {
    name: "Classic Blue",
    category: "Classic",
    description: "Navy and powder blue with crisp white linens and silver accents",
    palette: ["#4A6B8A", "#9BBAD4", "#F5F0E8", "#C4A55A"],
    bgColors: ["#E8F0F8", "#9BBAD4", "#4A6B8A", "#F5F0E8"],
    tall: true,
  },
  {
    name: "Pink Peonies",
    category: "Floral",
    description: "Blush and dusty rose with lush peony arrangements and soft gold",
    palette: ["#E8C4C4", "#C9927A", "#B5785F", "#F5F0E8"],
    bgColors: ["#F8E0E0", "#E8C4C4", "#C9927A", "#FAF8F5"],
    tall: false,
  },
  {
    name: "Woodland Whimsy",
    category: "Boho",
    description: "Moss, birch, and wild mushroom tones for a forest-inspired gathering",
    palette: ["#9BAD9B", "#6B8A6B", "#D4B896", "#3D2B1F"],
    bgColors: ["#E8F0E8", "#9BAD9B", "#6B8A6B", "#D4B896"],
    tall: true,
  },
];

const filters = ["All", "Neutral", "Floral", "Safari", "Boho", "Classic"];

function ThemeMoodboard({ bgColors, palette }: { bgColors: string[]; palette: string[] }) {
  return (
    <div className="relative w-full h-48 overflow-hidden" style={{ background: bgColors[0] }}>
      {/* Angled color block 1 */}
      <div
        className="absolute -right-4 top-0 w-32 h-full"
        style={{ background: bgColors[1], transform: "skewX(-8deg)" }}
      />
      {/* Angled color block 2 */}
      <div
        className="absolute -right-8 bottom-0 w-20 h-24"
        style={{ background: bgColors[2], transform: "skewX(4deg)" }}
      />
      {/* Mini invitation mockup */}
      <div
        className="absolute left-4 top-4 w-24 h-32 bg-white shadow-lg flex flex-col items-center justify-center"
        style={{ transform: "rotate(-3deg)" }}
      >
        <div className="w-16 h-px bg-[#C4A55A] mb-2" />
        <div className="w-12 h-px bg-[#2C2C2C]/10 mb-1.5" />
        <div className="w-10 h-px bg-[#2C2C2C]/10 mb-1.5" />
        <div className="w-12 h-px bg-[#2C2C2C]/10 mb-2" />
        <p
          className="text-[7px] tracking-wider uppercase text-center text-[#2C2C2C]/50"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          BABY
          <br />
          SHOWER
        </p>
        <div className="w-16 h-px bg-[#C4A55A] mt-2" />
      </div>
      {/* Color palette strip */}
      <div className="absolute bottom-3 left-4 flex gap-1">
        {palette.map((c) => (
          <div
            key={c}
            className="w-4 h-4 rounded-full border border-white/50 shadow-sm"
            style={{ background: c }}
          />
        ))}
      </div>
      {/* Abstract organic shapes */}
      <div
        className="absolute right-6 top-6 w-16 h-16 rounded-full opacity-20"
        style={{ background: bgColors[3] }}
      />
      <div
        className="absolute right-10 top-10 w-8 h-8 rounded-full opacity-30"
        style={{ background: bgColors[0] }}
      />
    </div>
  );
}

function ThemeCard({
  theme,
  index,
}: {
  theme: (typeof themes)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group bg-white border border-[#E8E0D8] hover:border-[#C4A55A]/40 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Moodboard collage */}
      <ThemeMoodboard bgColors={theme.bgColors} palette={theme.palette} />

      {/* Theme info */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3
            className="text-lg text-[#2C2C2C] leading-snug"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
          >
            {theme.name}
          </h3>
          <span
            className="text-[9px] tracking-[0.15em] uppercase text-[#2C2C2C]/40 mt-1 ml-2 flex-shrink-0"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            {theme.category}
          </span>
        </div>

        <p
          className="text-sm text-[#2C2C2C]/55 leading-relaxed mb-4 flex-1"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {theme.description}
        </p>

        {/* Palette dots */}
        <div className="flex gap-1.5 mb-4">
          {theme.palette.map((c) => (
            <div
              key={c}
              className="w-4 h-4 rounded-full border border-[#E8E0D8]"
              style={{ background: c }}
            />
          ))}
        </div>

        <Link
          href={`/themes/${theme.name.toLowerCase().replace(/\s+/g, "-")}`}
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase text-[#2C2C2C]/50 hover:text-[#2C2C2C] transition-colors group-hover:gap-3 duration-300"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          Explore Theme
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </motion.div>
  );
}

export default function PopularThemes() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? themes
      : themes.filter((t) => t.category === activeFilter);

  return (
    <section
      id="themes"
      className="py-24 md:py-32"
      style={{ background: "#FAF8F5" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-[#C4A55A]" />
              <span
                className="text-[10px] tracking-[0.25em] uppercase text-[#C4A55A]"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Inspiration
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#2C2C2C] leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Curated Theme Collections
            </motion.h2>
          </div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-0"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-[11px] tracking-[0.1em] uppercase transition-all duration-200 border-b-2 ${
                  activeFilter === filter
                    ? "text-[#2C2C2C] border-[#2C2C2C]"
                    : "text-[#2C2C2C]/40 border-transparent hover:text-[#2C2C2C]/70"
                }`}
                style={{ fontFamily: "var(--font-ui)" }}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Theme grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            {filtered.map((theme, index) => (
              <ThemeCard key={theme.name} theme={theme} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex items-center gap-4"
        >
          <div className="w-8 h-px bg-[#E8E0D8]" />
          <Link
            href="/themes"
            className="text-[11px] tracking-[0.15em] uppercase text-[#2C2C2C]/50 hover:text-[#2C2C2C] transition-colors"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            Browse All 500+ Themes
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
