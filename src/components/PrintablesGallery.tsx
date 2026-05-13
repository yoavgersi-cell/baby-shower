"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const printables = [
  {
    id: 1,
    title: "Garden Botanica Invitation Suite",
    description: "Pressed botanicals, gold foil edges, and layered envelope liners",
    category: "Invitation",
    price: "Free",
    rating: 5,
    downloads: "8.4k",
    paperColor: "#F5F0E8",
    accentColor: "#9BAD9B",
    lineColors: ["#C4A55A", "#E8C4C4", "#9BAD9B"],
  },
  {
    id: 2,
    title: "Baby Shower Bingo — Neutral Edit",
    description: "Set of 10 unique bingo cards in champagne and ivory",
    category: "Game",
    price: "Free",
    rating: 5,
    downloads: "12.1k",
    paperColor: "#FAF8F5",
    accentColor: "#D4B896",
    lineColors: ["#D4B896", "#E8E0D8", "#C4A55A"],
  },
  {
    id: 3,
    title: "Mama-to-Be Keepsake Sign",
    description: "Elegant framed printable sign with calligraphy-style lettering",
    category: "Sign",
    price: "$3.99",
    rating: 5,
    downloads: "3.2k",
    paperColor: "#F8EEE8",
    accentColor: "#C9927A",
    lineColors: ["#C9927A", "#E8C4C4", "#D4B896"],
  },
  {
    id: 4,
    title: "Luxury Bundle — Complete Set",
    description: "Invites, games, signs, thank you cards — 24 coordinated designs",
    category: "Bundle",
    price: "$9.99",
    rating: 5,
    downloads: "5.7k",
    paperColor: "#FAF8F5",
    accentColor: "#C4A55A",
    lineColors: ["#C4A55A", "#D4B896", "#E8C4C4"],
  },
  {
    id: 5,
    title: "Planning Checklist — Heirloom Edition",
    description: "The definitive 100-point checklist, beautifully typeset and ready to print",
    category: "Checklist",
    price: "Free",
    rating: 5,
    downloads: "19.3k",
    paperColor: "#FDFBF7",
    accentColor: "#6B8A6B",
    lineColors: ["#9BAD9B", "#6B8A6B", "#D4B896"],
  },
  {
    id: 6,
    title: "Safari Serenity Games Pack",
    description: "Five coordinated party games: bingo, word search, trivia, and more",
    category: "Game Pack",
    price: "$4.99",
    rating: 5,
    downloads: "4.8k",
    paperColor: "#F0E8D8",
    accentColor: "#B5785F",
    lineColors: ["#D4B896", "#B5785F", "#C4A55A"],
  },
];

const filters = ["All", "Invitations", "Games", "Signs", "Bundles", "Checklists"];

function PaperMockup({
  paperColor,
  accentColor,
  lineColors,
}: {
  paperColor: string;
  accentColor: string;
  lineColors: string[];
}) {
  return (
    <div className="relative flex items-center justify-center h-48" style={{ background: "#FAF8F5" }}>
      {/* Shadow paper behind */}
      <div
        className="absolute shadow-sm"
        style={{
          width: "100px",
          height: "128px",
          background: paperColor,
          border: "1px solid #E8E0D8",
          transform: "rotate(4deg) translate(8px, 4px)",
          top: "50%",
          left: "50%",
          marginTop: "-64px",
          marginLeft: "-50px",
        }}
      />
      {/* Main paper */}
      <div
        className="relative shadow-md flex flex-col items-center justify-between py-4 px-5"
        style={{
          width: "100px",
          height: "128px",
          background: "white",
          border: "1px solid #E8E0D8",
          transform: "rotate(-2deg)",
        }}
      >
        {/* Top accent line */}
        <div className="w-full h-px" style={{ background: accentColor, opacity: 0.6 }} />
        {/* Inner border lines simulation */}
        <div className="w-full flex flex-col gap-2 flex-1 py-3">
          {lineColors.map((c, i) => (
            <div
              key={i}
              className="h-px w-full"
              style={{ background: c, opacity: 0.35, width: i === 1 ? "80%" : "100%" }}
            />
          ))}
          <div className="h-px w-3/4" style={{ background: lineColors[0], opacity: 0.2 }} />
          <div className="h-px w-full" style={{ background: lineColors[1], opacity: 0.2 }} />
        </div>
        {/* Bottom accent line */}
        <div className="w-full h-px" style={{ background: accentColor, opacity: 0.6 }} />
      </div>
    </div>
  );
}

function PrintableCard({ item, index }: { item: typeof printables[0]; index: number }) {
  const isFree = item.price === "Free";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group bg-white border border-[#E8E0D8] hover:border-[#C4A55A]/40 hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      {/* Paper mockup preview */}
      <div className="relative border-b border-[#E8E0D8]">
        <PaperMockup
          paperColor={item.paperColor}
          accentColor={item.accentColor}
          lineColors={item.lineColors}
        />
        {/* Category label */}
        <div className="absolute top-3 left-3">
          <span
            className="text-[9px] tracking-[0.15em] uppercase text-[#2C2C2C]/50 bg-white/90 border border-[#E8E0D8] px-2 py-0.5"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            {item.category}
          </span>
        </div>
        {/* Price */}
        <div className="absolute top-3 right-3">
          <span
            className={`text-[9px] tracking-[0.1em] uppercase px-2 py-0.5 ${
              isFree
                ? "bg-[#9BAD9B]/20 text-[#6B8A6B] border border-[#9BAD9B]/30"
                : "bg-[#C4A55A]/10 text-[#C4A55A] border border-[#C4A55A]/30"
            }`}
            style={{ fontFamily: "var(--font-ui)" }}
          >
            {item.price}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="text-base text-[#2C2C2C] mb-1.5 leading-snug"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
        >
          {item.title}
        </h3>
        <p
          className="text-sm text-[#2C2C2C]/55 leading-relaxed mb-4 flex-1"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {item.description}
        </p>

        {/* Rating + downloads */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#E8E0D8]">
          <span className="text-[#C4A55A] text-xs tracking-tight">
            {"★".repeat(item.rating)}
          </span>
          <span
            className="text-[10px] text-[#2C2C2C]/40"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            ({item.downloads} downloads)
          </span>
        </div>

        {/* CTA */}
        <button
          className={`w-full py-3 text-[11px] tracking-[0.12em] uppercase transition-all duration-300 ${
            isFree
              ? "bg-[#2C2C2C] text-white hover:bg-[#3D2B1F]"
              : "border border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white"
          }`}
          style={{ fontFamily: "var(--font-ui)" }}
        >
          {isFree ? "Download Free" : `View Product — ${item.price}`}
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
    <section id="printables" className="py-24 md:py-32 bg-white">
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
                Free &amp; Premium
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
              Printables &amp; Templates
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
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 text-[11px] tracking-[0.1em] uppercase transition-all duration-200 border-b-2 ${
                  activeFilter === f
                    ? "text-[#2C2C2C] border-[#2C2C2C]"
                    : "text-[#2C2C2C]/40 border-transparent hover:text-[#2C2C2C]/70"
                }`}
                style={{ fontFamily: "var(--font-ui)" }}
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
          className="mt-14 flex items-center gap-4"
        >
          <div className="w-8 h-px bg-[#E8E0D8]" />
          <Link
            href="/printables"
            className="text-[11px] tracking-[0.15em] uppercase text-[#2C2C2C]/50 hover:text-[#2C2C2C] transition-colors"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            Browse All Printables
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
