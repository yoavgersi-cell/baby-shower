"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const printables = [
  {
    id: 1,
    title: "Teddy Bear Invitation Set",
    description: "Adorable teddy bear invitations with matching envelopes",
    category: "Invitation",
    price: "Free",
    rating: 5,
    downloads: "8.4k",
    previewGradient: "linear-gradient(135deg, #fbf0cc 0%, #ffd0b8 100%)",
    previewEmoji: "🧸",
    previewLines: ["#f7e4a1", "#ffd0b8", "#f4a8c7"],
    badgeColor: "#e04880",
    badgeBg: "#fdf4f7",
  },
  {
    id: 2,
    title: "Baby Shower Bingo Cards",
    description: "Set of 10 unique bingo cards, ready to print & play",
    category: "Game",
    price: "Free",
    rating: 5,
    downloads: "12.1k",
    previewGradient: "linear-gradient(135deg, #e6ede6 0%, #cddccd 100%)",
    previewEmoji: "🎯",
    previewLines: ["#cddccd", "#a8c2a8", "#7ea27e"],
    badgeColor: "#486948",
    badgeBg: "#f4f7f4",
  },
  {
    id: 3,
    title: '"Mom to Be" Sash Sign',
    description: "Elegant printable sash sign for the mama-to-be",
    category: "Sign",
    price: "$3.99",
    rating: 5,
    downloads: "3.2k",
    previewGradient: "linear-gradient(135deg, #fce8f1 0%, #f9d0e3 100%)",
    previewEmoji: "🎀",
    previewLines: ["#f9d0e3", "#f4a8c7", "#fce8f1"],
    badgeColor: "#cd2d62",
    badgeBg: "#fdf4f7",
  },
  {
    id: 4,
    title: "Complete Bundle Pack",
    description: "Everything you need: invites, games, signs & more",
    category: "Bundle",
    price: "$9.99",
    rating: 5,
    downloads: "5.7k",
    previewGradient: "linear-gradient(135deg, #fff5f0 0%, #ffd0b8 50%, #fce8f1 100%)",
    previewEmoji: "✨",
    previewLines: ["#ffd0b8", "#f4a8c7", "#cddccd"],
    badgeColor: "#f04010",
    badgeBg: "#fff5f0",
  },
  {
    id: 5,
    title: "Baby Shower Checklist",
    description: "The ultimate 100-point planning checklist — print & check off",
    category: "Checklist",
    price: "Free",
    rating: 5,
    downloads: "19.3k",
    previewGradient: "linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%)",
    previewEmoji: "✅",
    previewLines: ["#99f6e4", "#5eead4", "#cddccd"],
    badgeColor: "#0f766e",
    badgeBg: "#f0fdfa",
  },
  {
    id: 6,
    title: "Safari Games Pack",
    description: "5 jungle-themed party games: bingo, word search & more",
    category: "Game Pack",
    price: "$4.99",
    rating: 5,
    downloads: "4.8k",
    previewGradient: "linear-gradient(135deg, #fdf9ec 0%, #f7e4a1 50%, #a8c2a8 100%)",
    previewEmoji: "🦒",
    previewLines: ["#f7e4a1", "#cddccd", "#a8c2a8"],
    badgeColor: "#b07819",
    badgeBg: "#fefdf8",
  },
];

const filters = ["All", "Invitations", "Games", "Signs", "Bundles", "Checklists"];

function PrintableCard({ item, index }: { item: typeof printables[0]; index: number }) {
  const isFree = item.price === "Free";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.07)" }}
    >
      {/* Preview area */}
      <div
        className="relative h-48 flex items-center justify-center overflow-hidden"
        style={{ background: item.previewGradient }}
      >
        {/* Simulated printable mockup */}
        <div className="relative">
          {/* Paper/card mockup */}
          <div className="bg-white rounded-2xl shadow-lg p-4 w-36 h-44 flex flex-col items-center justify-between transform group-hover:-rotate-1 transition-transform duration-300">
            {/* Top accent bar */}
            <div
              className="w-full h-1.5 rounded-full"
              style={{ background: `linear-gradient(90deg, ${item.previewLines[0]}, ${item.previewLines[1]}, ${item.previewLines[2]})` }}
            />
            {/* Center emoji */}
            <div className="text-4xl">{item.previewEmoji}</div>
            {/* Content lines */}
            <div className="w-full space-y-1.5">
              <div className="h-1.5 rounded-full w-full" style={{ background: item.previewLines[0] }} />
              <div className="h-1.5 rounded-full w-4/5" style={{ background: item.previewLines[1] }} />
              <div className="h-1.5 rounded-full w-3/5" style={{ background: item.previewLines[2] }} />
            </div>
            {/* Bottom accent bar */}
            <div
              className="w-full h-1.5 rounded-full"
              style={{ background: `linear-gradient(90deg, ${item.previewLines[2]}, ${item.previewLines[1]}, ${item.previewLines[0]})` }}
            />
          </div>
          {/* Shadow card behind */}
          <div
            className="absolute -bottom-1 -right-2 bg-white/60 rounded-2xl w-36 h-44 -z-10 transform rotate-2"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
          />
        </div>

        {/* Category badge */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
          style={{ background: item.badgeBg, color: item.badgeColor, border: `1px solid ${item.badgeColor}30` }}
        >
          {item.category}
        </div>

        {/* Price badge */}
        <div
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${
            isFree
              ? "bg-sage-500 text-white"
              : "bg-blush-500 text-white"
          }`}
        >
          {item.price}
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <h3
          className="font-bold text-gray-800 text-base mb-1 leading-snug"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {item.title}
        </h3>
        <p
          className="text-sm text-gray-500 mb-3 leading-relaxed"
          style={{ fontFamily: "var(--font-nunito), sans-serif" }}
        >
          {item.description}
        </p>

        {/* Rating + downloads */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-0.5">
            {Array.from({ length: item.rating }).map((_, i) => (
              <span key={i} className="text-cream-500 text-xs">★</span>
            ))}
          </div>
          <span className="text-xs text-gray-400 font-medium">
            ({item.downloads} downloads)
          </span>
        </div>

        {/* Action button */}
        <button
          className="w-full py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105"
          style={{
            background: isFree
              ? "linear-gradient(135deg, #5d845d, #486948)"
              : "linear-gradient(135deg, #e04880, #cd2d62)",
            color: "white",
            boxShadow: isFree
              ? "0 4px 12px rgba(93, 132, 93, 0.3)"
              : "0 4px 12px rgba(224, 72, 128, 0.3)",
            fontFamily: "var(--font-nunito), sans-serif",
          }}
        >
          {isFree ? "Get Free →" : `Download — ${item.price}`}
        </button>
      </div>
    </motion.div>
  );
}

export default function PrintablesGallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? printables
      : printables.filter((p) => {
          const map: Record<string, string[]> = {
            Invitations: ["Invitation"],
            Games: ["Game", "Game Pack"],
            Signs: ["Sign"],
            Bundles: ["Bundle"],
            Checklists: ["Checklist"],
          };
          return map[activeFilter]?.includes(p.category);
        });

  return (
    <section id="printables" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest text-blush-500 mb-3"
          >
            Free & Premium
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Gorgeous Printables
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #e04880, #cd2d62)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              & Templates
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
            Designer-quality printables you can download instantly — many completely free.
          </motion.p>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-blush-500 text-white shadow-md shadow-blush-200"
                    : "bg-blush-50 text-blush-700 hover:bg-blush-100 border border-blush-100"
                }`}
                style={{ fontFamily: "var(--font-nunito), sans-serif" }}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filtered.map((item, index) => (
              <PrintableCard key={item.id} item={item} index={index} />
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-blush-500 hover:bg-blush-600 text-white font-bold text-base rounded-2xl shadow-lg shadow-blush-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{ fontFamily: "var(--font-nunito), sans-serif" }}
          >
            Browse All Printables
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
