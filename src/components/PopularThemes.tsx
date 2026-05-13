"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  {
    name: "Teddy Bear",
    category: "Neutral",
    emojis: ["🧸", "🎀", "🍯"],
    gradient: "linear-gradient(160deg, #fbf0cc 0%, #ffd0b8 50%, #f7e4a1 100%)",
    overlayColor: "rgba(139, 94, 27, 0.7)",
    saves: "14.2k",
    trending: true,
  },
  {
    name: "Safari Adventure",
    category: "Safari",
    emojis: ["🦒", "🦁", "🌿"],
    gradient: "linear-gradient(160deg, #fdf9ec 0%, #f7e4a1 40%, #cddccd 100%)",
    overlayColor: "rgba(74, 57, 22, 0.7)",
    saves: "11.8k",
    trending: true,
  },
  {
    name: "Boho Floral",
    category: "Boho",
    emojis: ["🌸", "🌾", "🦋"],
    gradient: "linear-gradient(160deg, #fce8f1 0%, #ffd0b8 40%, #f9d0e3 100%)",
    overlayColor: "rgba(100, 50, 50, 0.7)",
    saves: "9.5k",
    trending: false,
  },
  {
    name: "Garden Party",
    category: "Floral",
    emojis: ["🌷", "🌿", "🍃"],
    gradient: "linear-gradient(160deg, #e6ede6 0%, #cddccd 50%, #a8c2a8 100%)",
    overlayColor: "rgba(31, 54, 31, 0.75)",
    saves: "8.1k",
    trending: false,
  },
  {
    name: "Neutral Luxe",
    category: "Neutral",
    emojis: ["✨", "🤍", "🎀"],
    gradient: "linear-gradient(160deg, #fefdf8 0%, #fdf9ec 50%, #fbf0cc 100%)",
    overlayColor: "rgba(80, 70, 50, 0.7)",
    saves: "17.3k",
    trending: true,
  },
  {
    name: "Blue Bear",
    category: "Classic",
    emojis: ["🧸", "💙", "☁️"],
    gradient: "linear-gradient(160deg, #e0f2fe 0%, #bae6fd 50%, #93c5fd 100%)",
    overlayColor: "rgba(30, 58, 138, 0.7)",
    saves: "7.6k",
    trending: false,
  },
  {
    name: "Pink Bow",
    category: "Classic",
    emojis: ["🎀", "💕", "🌸"],
    gradient: "linear-gradient(160deg, #fdf4f7 0%, #fce8f1 50%, #f9d0e3 100%)",
    overlayColor: "rgba(139, 28, 66, 0.7)",
    saves: "12.9k",
    trending: true,
  },
  {
    name: "Woodland",
    category: "Boho",
    emojis: ["🦔", "🍄", "🌲"],
    gradient: "linear-gradient(160deg, #e6ede6 0%, #a8c2a8 40%, #7ea27e 100%)",
    overlayColor: "rgba(20, 40, 20, 0.75)",
    saves: "6.4k",
    trending: false,
  },
  {
    name: "Moon & Stars",
    category: "Classic",
    emojis: ["🌙", "⭐", "🌟"],
    gradient: "linear-gradient(160deg, #e0e7ff 0%, #c7d2fe 40%, #818cf8 100%)",
    overlayColor: "rgba(10, 20, 80, 0.75)",
    saves: "10.2k",
    trending: false,
  },
];

const filters = ["All", "Neutral", "Floral", "Safari", "Boho", "Classic"];

function ThemeCard({ theme, index }: { theme: typeof themes[0]; index: number }) {
  const [saved, setSaved] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
      style={{ aspectRatio: "3/4" }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0" style={{ background: theme.gradient }} />

      {/* Emoji collage */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <div className="text-5xl sm:text-6xl group-hover:scale-110 transition-transform duration-500">
          {theme.emojis[0]}
        </div>
        <div className="flex gap-3 text-3xl sm:text-4xl">
          <span>{theme.emojis[1]}</span>
          <span>{theme.emojis[2]}</span>
        </div>
      </div>

      {/* Trending badge */}
      {theme.trending && (
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-blush-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            🔥 Trending
          </span>
        </div>
      )}

      {/* Save button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setSaved(!saved);
        }}
        className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:scale-110 transition-all duration-200"
        aria-label="Save theme"
      >
        <span className={`text-base transition-transform duration-200 ${saved ? "scale-125" : ""}`}>
          {saved ? "❤️" : "🤍"}
        </span>
      </button>

      {/* Bottom overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
        }}
      >
        <div className="flex items-end justify-between">
          <div>
            <h3
              className="text-white font-bold text-base leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {theme.name}
            </h3>
            <p className="text-white/70 text-xs mt-0.5">{theme.saves} saves</p>
          </div>
          <button className="px-3 py-1.5 bg-white text-gray-800 text-xs font-bold rounded-xl hover:bg-blush-50 transition-colors duration-200 opacity-0 group-hover:opacity-100 transition-opacity">
            View →
          </button>
        </div>
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
    <section id="themes" className="py-20 md:py-28" style={{ background: "linear-gradient(180deg, #fdf4f7 0%, #fefdf8 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest text-sage-500 mb-3"
          >
            Inspiration
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Trending Baby Shower
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #5d845d, #3b543b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Themes
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto mb-8"
            style={{ fontFamily: "var(--font-nunito), sans-serif" }}
          >
            Discover beautiful, curated themes loved by thousands of mamas around the world.
          </motion.p>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-blush-500 text-white shadow-md shadow-blush-200"
                    : "bg-white text-gray-600 hover:bg-blush-50 hover:text-blush-600 border border-gray-200"
                }`}
                style={{ fontFamily: "var(--font-nunito), sans-serif" }}
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
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6"
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
          className="text-center mt-14"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-cream-50 text-gray-700 font-bold text-base rounded-2xl border-2 border-gray-200 hover:border-blush-200 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            style={{ fontFamily: "var(--font-nunito), sans-serif" }}
          >
            Browse All 500+ Themes
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
