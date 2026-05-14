"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Flower from "@/components/ui/Flower";
import Balloon from "@/components/ui/Balloon";
import Bow from "@/components/ui/Bow";

// Rich CSS invitation preview
function FloralInvitationPreview() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{ background: "linear-gradient(160deg, #FDF8F5 0%, #F8F0EA 100%)" }}
    >
      {/* Background papers at angles */}
      <div className="absolute w-36 h-48 bg-[#F5EEE8] shadow-sm" style={{ transform: "rotate(8deg) translate(10px, 5px)", border: "0.5px solid #E8D8C8" }} />
      <div className="absolute w-36 h-48 bg-[#FAF3EC] shadow-sm" style={{ transform: "rotate(3deg) translate(4px, 2px)", border: "0.5px solid #E8D8C8" }} />
      {/* Main card */}
      <div
        className="relative z-10 w-36 h-48 bg-white shadow-xl flex flex-col items-center justify-between py-4 px-3"
        style={{ border: "0.5px solid #E8C4C4" }}
      >
        {/* Decorative inner border */}
        <div className="absolute inset-2 border opacity-20" style={{ borderColor: "#E8C4C4" }} />
        {/* Top flowers */}
        <div className="flex gap-1 z-10">
          <Flower color="#E8C4C4" size={20} />
          <Flower color="#C9927A" size={16} />
          <Flower color="#E8C4C4" size={20} />
        </div>
        {/* Gold rule */}
        <div className="w-10 h-px" style={{ background: "#C4A55A" }} />
        {/* Text area */}
        <div className="text-center z-10">
          <p className="text-[6px] tracking-[0.2em] uppercase text-[#2C2C2C]/50 mb-1" style={{ fontFamily: "var(--font-ui)" }}>You&apos;re invited to a</p>
          <p className="text-sm text-[#2C2C2C] leading-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>Baby Shower</p>
          <p className="text-[6px] tracking-wider mt-1" style={{ color: "#C4A55A", fontFamily: "var(--font-ui)" }}>for Emma &amp; James</p>
        </div>
        <div className="w-8 h-px" style={{ background: "#E8C4C4" }} />
        {/* Date */}
        <p className="text-[5px] text-[#2C2C2C]/40 z-10" style={{ fontFamily: "var(--font-ui)" }}>Saturday · June 14th · 2pm</p>
        {/* Bottom flowers */}
        <div className="flex gap-1 z-10">
          <Flower color="#9BAD9B" size={14} />
          <Flower color="#E8C4C4" size={16} />
          <Flower color="#9BAD9B" size={14} />
        </div>
      </div>
      {/* Corner bow */}
      <div className="absolute top-2 left-2 opacity-50"><Bow color="#E8C4C4" size={22} /></div>
      <div className="absolute top-2 right-2 animate-drift opacity-40"><Flower color="#C4A55A" size={14} /></div>
    </div>
  );
}

// Bingo card preview
function BingoPreview() {
  const babyWords = [
    "Diaper", "Crib", "Bottles", "Onesie", "★",
    "Stroller", "Pacifier", "Bib", "Rattle", "Mobile",
    "Blanket", "Booties", "FREE", "Monitor", "Wipes",
    "Swaddle", "Teether", "Lullaby", "Burp", "Nap",
    "Crawl", "Giggle", "Cuddle", "Milestone", "Nappy",
  ];
  const filledIdx = new Set([0, 5, 12, 18, 24, 6, 8]);
  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{ background: "linear-gradient(160deg, #FDF8F5 0%, #FAF5F0 100%)" }}
    >
      <div className="bg-white shadow-xl p-3" style={{ border: "1px solid #E8C4C4" }}>
        {/* Scrapbook tape */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-3 opacity-70" style={{ background: "rgba(240,230,180,0.8)", borderRadius: 1, transform: "translateX(-50%) rotate(-1deg)" }} />
        <p className="text-[6px] tracking-[0.2em] uppercase text-center text-[#C9927A] mb-2" style={{ fontFamily: "var(--font-ui)" }}>Baby Shower Bingo</p>
        {/* B I N G O header */}
        <div className="flex mb-1">
          {["B","I","N","G","O"].map((l) => (
            <div key={l} className="w-8 h-4 flex items-center justify-center text-[7px] font-bold" style={{ color: "#C9927A", fontFamily: "var(--font-ui)" }}>{l}</div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-0.5">
          {babyWords.map((word, i) => (
            <div
              key={i}
              className="w-8 h-8 flex items-center justify-center text-center text-[4.5px] leading-tight"
              style={{
                background: i === 12 ? "#C4A55A" : filledIdx.has(i) ? "#E8C4C4" : "#FAF8F5",
                border: "0.5px solid #E8E0D8",
                color: "#2C2C2C",
                fontFamily: "var(--font-ui)",
                fontWeight: filledIdx.has(i) ? 600 : 400,
              }}
            >
              {word}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Sign preview
function SignPreview() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{ background: "linear-gradient(160deg, #FDF5F0 0%, #F8EDE4 100%)" }}
    >
      {/* Bunting banner */}
      <div className="absolute top-3 left-0 right-0 flex justify-center gap-1 items-end">
        {["#E8C4C4", "#C4A55A", "#9BAD9B", "#C9927A", "#E8C4C4", "#C4A55A"].map((c, i) => (
          <div
            key={i}
            className="w-5 h-6"
            style={{
              background: c,
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              opacity: 0.7,
              transform: `rotate(${(i - 2.5) * 3}deg)`,
            }}
          />
        ))}
      </div>
      {/* Main sign */}
      <div
        className="relative z-10 bg-white shadow-xl p-5 flex flex-col items-center text-center"
        style={{ width: 150, border: "1px solid #E8C4C4" }}
      >
        <div className="absolute inset-2 border opacity-15" style={{ borderColor: "#C9927A" }} />
        <Flower color="#E8C4C4" size={24} />
        <div className="w-16 h-px my-2" style={{ background: "#C4A55A" }} />
        <p className="text-[6px] tracking-[0.2em] uppercase text-[#2C2C2C]/50 mb-1" style={{ fontFamily: "var(--font-ui)" }}>She is</p>
        <p className="text-lg leading-tight mb-0.5" style={{ fontFamily: "var(--font-display)", color: "#C9927A", fontWeight: 300, fontStyle: "italic" }}>Our Sunshine</p>
        <div className="flex gap-0.5 my-1">
          {Array(5).fill(0).map((_, i) => <span key={i} style={{ color: "#C4A55A", fontSize: 8 }}>☀</span>)}
        </div>
        <div className="w-16 h-px my-2" style={{ background: "#E8C4C4" }} />
        <p className="text-[6px] tracking-wider uppercase text-[#2C2C2C]/40" style={{ fontFamily: "var(--font-ui)" }}>Baby Shower 2026</p>
      </div>
      <div className="absolute bottom-3 left-4 animate-bob opacity-60">
        <Balloon color="#E8C4C4" size={18} />
      </div>
      <div className="absolute bottom-3 right-4 animate-bob opacity-60" style={{ animationDelay: "0.5s" }}>
        <Balloon color="#C4A55A" size={16} />
      </div>
    </div>
  );
}

// Bundle preview — stacked papers
function BundlePreview() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{ background: "linear-gradient(160deg, #FAF8F5 0%, #F5EDE4 100%)" }}
    >
      <div className="relative" style={{ width: 160, height: 200 }}>
        {/* Multiple stacked papers in a fan */}
        {[
          { color: "#F5EEE8", rotate: 12, tx: 15, ty: 10 },
          { color: "#FAF5F0", rotate: 8, tx: 10, ty: 6 },
          { color: "#FDF8F5", rotate: -8, tx: -12, ty: 5 },
          { color: "#FAF3EC", rotate: -4, tx: -6, ty: 2 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute inset-0 shadow-sm"
            style={{
              background: p.color,
              border: "0.5px solid #E8D8C8",
              transform: `rotate(${p.rotate}deg) translate(${p.tx}px, ${p.ty}px)`,
              borderRadius: 2,
            }}
          />
        ))}
        {/* Front paper */}
        <div
          className="absolute inset-0 bg-white shadow-xl flex flex-col items-center justify-center p-4"
          style={{ border: "0.5px solid #E8C4C4", borderRadius: 2 }}
        >
          <Bow color="#E8C4C4" size={40} />
          <div className="w-12 h-px my-2" style={{ background: "#C4A55A" }} />
          <p className="text-[6px] tracking-[0.2em] uppercase text-[#2C2C2C]/50 text-center mb-1" style={{ fontFamily: "var(--font-ui)" }}>Complete Bundle</p>
          <p className="text-base text-center" style={{ fontFamily: "var(--font-display)", color: "#2C2C2C", fontWeight: 300, lineHeight: 1.2 }}>Baby Shower Printables</p>
          <div className="w-12 h-px my-2" style={{ background: "#E8E0D8" }} />
          <p className="text-[6px] text-[#2C2C2C]/40 text-center" style={{ fontFamily: "var(--font-ui)" }}>24 coordinated designs</p>
          <div className="flex gap-1.5 mt-3">
            {["#E8C4C4","#9BAD9B","#C4A55A","#D4B896"].map((c) => (
              <div key={c} className="w-3 h-3 rounded-full border border-white shadow-sm" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Checklist preview
function ChecklistPreview() {
  const items = [
    { text: "Book the venue", done: true },
    { text: "Send invitations", done: true },
    { text: "Order the cake", done: true },
    { text: "Plan party games", done: false },
    { text: "Arrange decorations", done: false },
    { text: "Prepare favours", done: false },
  ];
  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{ background: "linear-gradient(160deg, #F4F8F2 0%, #EBF2E8 100%)" }}
    >
      <div className="bg-white shadow-xl p-4 w-48" style={{ border: "1px solid #D4E8C8" }}>
        {/* Header */}
        <div className="w-full h-7 rounded-sm flex items-center justify-center mb-3" style={{ background: "linear-gradient(90deg, #9BAD9B, #6B8A6B)" }}>
          <Flower color="rgba(255,255,255,0.6)" size={12} />
          <p className="text-[6px] tracking-widest uppercase text-white mx-1" style={{ fontFamily: "var(--font-ui)" }}>Checklist</p>
          <Flower color="rgba(255,255,255,0.6)" size={12} />
        </div>
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="w-4 h-4 flex-shrink-0 flex items-center justify-center"
                style={{
                  background: item.done ? "#9BAD9B" : "white",
                  border: `1px solid ${item.done ? "#9BAD9B" : "#E8E0D8"}`,
                  borderRadius: 2,
                }}
              >
                {item.done && (
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1 4l2 2 4-3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <p
                className="text-[7px]"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "#2C2C2C",
                  opacity: item.done ? 0.35 : 0.8,
                  textDecoration: item.done ? "line-through" : "none",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
        {/* Progress */}
        <div className="mt-3">
          <div className="w-full h-1 bg-[#E8E0D8] rounded-full">
            <div className="h-full rounded-full" style={{ width: "50%", background: "linear-gradient(90deg, #9BAD9B, #6B8A6B)" }} />
          </div>
          <p className="text-[5px] text-[#2C2C2C]/40 mt-1 text-right" style={{ fontFamily: "var(--font-ui)" }}>3 of 6 complete</p>
        </div>
      </div>
    </div>
  );
}

// Safari games pack preview
function SafariPreview() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{ background: "linear-gradient(160deg, #F8F0E0 0%, #F0E4CC 100%)" }}
    >
      {/* Sun */}
      <div className="absolute top-3 right-6 w-10 h-10 rounded-full opacity-60" style={{ background: "radial-gradient(circle, #F5D878, #C4A55A)" }} />
      {/* Stacked cards */}
      <div className="relative" style={{ width: 150, height: 180 }}>
        <div className="absolute inset-0 bg-[#F0E4D0] shadow-sm" style={{ transform: "rotate(7deg) translate(10px, 6px)", border: "0.5px solid #D4C4A8" }} />
        <div className="absolute inset-0 bg-[#F8F0E0] shadow-sm" style={{ transform: "rotate(3deg) translate(5px, 3px)", border: "0.5px solid #D4C4A8" }} />
        {/* Main card */}
        <div className="absolute inset-0 bg-white shadow-xl flex flex-col items-center justify-center p-3" style={{ border: "0.5px solid #D4B896" }}>
          <div className="absolute inset-2 border opacity-20" style={{ borderColor: "#C4A55A" }} />
          <Flower color="#D4B896" size={28} />
          <div className="w-10 h-px my-2" style={{ background: "#C4A55A" }} />
          <p className="text-[6px] tracking-[0.2em] uppercase text-[#2C2C2C]/50 text-center mb-1" style={{ fontFamily: "var(--font-ui)" }}>Safari Adventure</p>
          <p className="text-sm text-center" style={{ fontFamily: "var(--font-display)", color: "#B5785F", fontWeight: 300, lineHeight: 1.2 }}>Games Pack</p>
          <div className="w-12 h-px my-2" style={{ background: "#E8D8C0" }} />
          <p className="text-[6px] text-[#2C2C2C]/40 text-center" style={{ fontFamily: "var(--font-ui)" }}>5 party games included</p>
          <div className="flex gap-1.5 mt-2">
            {["#D4B896","#C4A55A","#9BAD9B","#B5785F"].map((c) => (
              <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
      {/* Grass */}
      <div className="absolute bottom-0 left-0 right-0 h-3 opacity-20" style={{ background: "repeating-linear-gradient(90deg, #9BAD9B 0, #9BAD9B 2px, transparent 2px, transparent 8px)" }} />
    </div>
  );
}

// Save button
function HeartButton({ isFree }: { isFree: boolean }) {
  const [saved, setSaved] = useState(false);
  return (
    <button
      onClick={() => setSaved(!saved)}
      className="absolute top-3 right-3 z-20 w-7 h-7 flex items-center justify-center rounded-full shadow-md transition-transform hover:scale-110"
      style={{ background: "white" }}
      aria-label={saved ? "Unsave" : "Save"}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill={saved ? "#C9927A" : "none"} stroke="#C9927A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}

const printables = [
  {
    id: 1,
    title: "Garden Floral Invitation",
    description: "Pressed botanicals, gold foil, layered envelope liners",
    category: "Invitation",
    price: "Free",
    rating: 5,
    downloads: "8.4k",
    Preview: FloralInvitationPreview,
  },
  {
    id: 2,
    title: "Baby Bingo Classic",
    description: "Set of 10 unique bingo cards in champagne and ivory",
    category: "Game",
    price: "Free",
    rating: 5,
    downloads: "12.1k",
    Preview: BingoPreview,
  },
  {
    id: 3,
    title: "\"She's Our Sunshine\" Sign",
    description: "Elegant framed printable with calligraphy-style lettering",
    category: "Sign",
    price: "$3.99",
    rating: 5,
    downloads: "3.2k",
    Preview: SignPreview,
  },
  {
    id: 4,
    title: "Complete Printable Bundle",
    description: "Invites, games, signs & thank you cards — 24 coordinated designs",
    category: "Bundle",
    price: "$9.99",
    rating: 5,
    downloads: "5.7k",
    Preview: BundlePreview,
  },
  {
    id: 5,
    title: "Baby Shower Checklist",
    description: "The definitive 100-point checklist, beautifully typeset",
    category: "Checklist",
    price: "Free",
    rating: 5,
    downloads: "19.3k",
    Preview: ChecklistPreview,
  },
  {
    id: 6,
    title: "Safari Adventure Pack",
    description: "Five coordinated party games: bingo, word search, trivia & more",
    category: "Game Pack",
    price: "$4.99",
    rating: 5,
    downloads: "4.8k",
    Preview: SafariPreview,
  },
];

const filters = ["All", "Invitations", "Games", "Signs", "Bundles", "Checklists"];

function PrintableCard({ item, index }: { item: typeof printables[0]; index: number }) {
  const isFree = item.price === "Free";
  const PreviewComponent = item.Preview;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative bg-white overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
      style={{ border: "1px solid #EDE5DC", borderRadius: 12 }}
    >
      <HeartButton isFree={isFree} />

      {/* Category label */}
      <div className="absolute top-3 left-3 z-20">
        <span
          className="text-[8px] tracking-[0.12em] uppercase px-2 py-0.5 rounded-full"
          style={{
            background: "rgba(255,255,255,0.9)",
            color: "#C9927A",
            border: "1px solid #E8C4C4",
            fontFamily: "var(--font-ui)",
          }}
        >
          {item.category}
        </span>
      </div>

      {/* Price badge */}
      <div className="absolute top-10 left-3 z-20">
        <span
          className="text-[8px] tracking-wide px-2 py-0.5 rounded-full font-medium"
          style={{
            background: isFree ? "rgba(155,173,155,0.15)" : "rgba(196,165,90,0.12)",
            color: isFree ? "#6B8A6B" : "#B5900A",
            border: isFree ? "1px solid #9BAD9B" : "1px solid #C4A55A",
            fontFamily: "var(--font-ui)",
          }}
        >
          {item.price}
        </span>
      </div>

      {/* Preview area */}
      <div className="h-52 relative overflow-hidden">
        <PreviewComponent />
        <div className="absolute inset-0 bg-[#C9927A]/0 group-hover:bg-[#C9927A]/5 transition-colors duration-300" />
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col flex-1">
        <h3
          className="text-base text-[#2C2C2C] mb-1.5 leading-snug"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
        >
          {item.title}
        </h3>
        <p
          className="text-xs text-[#2C2C2C]/55 leading-relaxed mb-3 flex-1"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {item.description}
        </p>

        {/* Stars + downloads */}
        <div className="flex items-center gap-2 mb-3 pb-3" style={{ borderBottom: "1px solid #EDE5DC" }}>
          <span style={{ color: "#C4A55A", fontSize: 11 }}>{"★".repeat(item.rating)}</span>
          <span className="text-[9px] text-[#2C2C2C]/40" style={{ fontFamily: "var(--font-ui)" }}>
            ({item.downloads})
          </span>
        </div>

        {/* CTA */}
        <button
          className="w-full py-2.5 text-[11px] tracking-wide font-medium rounded-full transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: isFree
              ? "linear-gradient(135deg, #9BAD9B, #6B8A6B)"
              : "linear-gradient(135deg, #C4A55A, #A8893A)",
            color: "white",
            fontFamily: "var(--font-ui)",
          }}
        >
          {isFree ? "Download Free" : `Get it — ${item.price}`}
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
    <section id="printables" className="py-24 md:py-32" style={{ background: "#FAF6F0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <Bow color="#C9927A" size={22} />
              <span
                className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A]"
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

          {/* Filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="px-4 py-2 text-[11px] tracking-wider rounded-full transition-all duration-200"
                style={{
                  fontFamily: "var(--font-ui)",
                  background: activeFilter === f ? "#C9927A" : "white",
                  color: activeFilter === f ? "white" : "#2C2C2C",
                  border: activeFilter === f ? "1px solid #C9927A" : "1px solid #E8E0D8",
                  fontWeight: activeFilter === f ? 600 : 400,
                }}
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
          className="mt-14 text-center"
        >
          <Link
            href="/printables"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              background: "white",
              border: "1px solid #E8C4C4",
              color: "#C9927A",
              fontFamily: "var(--font-ui)",
            }}
          >
            <Flower color="#E8C4C4" size={14} />
            Browse All Printables
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
