"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Flower from "@/components/ui/Flower";
import Balloon from "@/components/ui/Balloon";
import Bow from "@/components/ui/Bow";

// Save / heart button
function HeartButton() {
  const [saved, setSaved] = useState(false);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setSaved(!saved);
      }}
      className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center rounded-full shadow-md transition-transform hover:scale-110"
      style={{ background: "white" }}
      aria-label={saved ? "Unsave" : "Save"}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill={saved ? "#C9927A" : "none"} stroke="#C9927A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}

// Mini invitation card helper
function MiniInvite({ accentColor, borderColor }: { accentColor: string; borderColor: string }) {
  return (
    <div
      className="bg-white shadow-lg p-2 w-24"
      style={{ transform: "rotate(-3deg)", border: `0.5px solid ${borderColor}` }}
    >
      <div className="h-1 w-12 mx-auto mb-1.5 rounded" style={{ background: accentColor }} />
      <div className="h-0.5 w-10 mx-auto mb-0.5 rounded opacity-30" style={{ background: "#2C2C2C" }} />
      <div className="h-0.5 w-8 mx-auto rounded opacity-20" style={{ background: "#2C2C2C" }} />
      <p
        className="text-[6px] text-center mt-1 tracking-wider uppercase opacity-50"
        style={{ fontFamily: "var(--font-ui)" }}
      >
        Baby Shower
      </p>
    </div>
  );
}

// Individual moodboard scenes per theme
function GardenBotanicaMoodboard() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: 220,
        background: "radial-gradient(ellipse at 20% 80%, #C8DEB0 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #E8F0E4 0%, transparent 60%), linear-gradient(160deg, #E8F0E4 0%, #D4E8D0 40%, #E8F4E4 100%)",
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-20" style={{ background: "linear-gradient(180deg, transparent, rgba(245,245,240,0.6))" }} />
      <div className="absolute top-3 right-3 opacity-80"><Flower color="#C8DEB0" size={64} /></div>
      <div className="absolute top-8 right-14 opacity-60"><Flower color="#E8C4C4" size={44} /></div>
      <div className="absolute top-6 right-28 opacity-40"><Flower color="#9BAD9B" size={28} /></div>
      <div className="absolute bottom-8 left-4"><MiniInvite accentColor="#9BAD9B" borderColor="#C4DEB4" /></div>
      <div className="absolute top-2 left-6 flex gap-1.5 animate-bob">
        <Balloon color="#9BAD9B" size={20} />
        <Balloon color="#E8C4C4" size={16} style={{ marginTop: 4 }} />
        <Balloon color="#C4A55A" size={18} />
      </div>
      <div className="absolute top-0 left-4 animate-sway opacity-70"><Bow color="#E8C4C4" size={30} /></div>
      <div className="absolute bottom-4 right-0 w-16 h-8 opacity-20 rounded-l-full" style={{ background: "linear-gradient(90deg, #E8C4C4, transparent)" }} />
    </div>
  );
}

function DustyRoseMoodboard() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: 260,
        background: "radial-gradient(ellipse at 30% 40%, #F8E8E8 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, #EDD8C8 0%, transparent 60%), linear-gradient(135deg, #FDF0F0 0%, #F0E0D8 100%)",
      }}
    >
      <div className="absolute inset-0 texture-linen opacity-30" />
      <div className="absolute top-4 right-4 opacity-90"><Flower color="#E8C4C4" size={56} /></div>
      <div className="absolute top-10 right-16 opacity-70"><Flower color="#C9927A" size={36} /></div>
      <div className="absolute top-20 right-6 opacity-50"><Flower color="#F0D0C0" size={24} /></div>
      <div className="absolute bottom-6 left-3"><MiniInvite accentColor="#C9927A" borderColor="#E8C4C4" /></div>
      <div className="absolute bottom-10 right-4 animate-bob opacity-80">
        <Balloon color="#E8C4C4" size={28} />
      </div>
      <div className="absolute bottom-10 right-12 animate-bob opacity-60" style={{ animationDelay: "0.5s" }}>
        <Balloon color="#C9927A" size={22} />
      </div>
      <div className="absolute top-2 left-8 animate-sway"><Bow color="#E8C4C4" size={36} /></div>
      {/* Gold confetti dots */}
      {[{ t: 30, l: 20 }, { t: 50, l: 40 }, { t: 20, l: 60 }, { t: 60, l: 15 }].map((pos, i) => (
        <div key={i} className="absolute w-1.5 h-1.5 rounded-full opacity-60" style={{ top: `${pos.t}%`, left: `${pos.l}%`, background: "#C4A55A" }} />
      ))}
    </div>
  );
}

function SafariMoodboard() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: 230,
        background: "radial-gradient(ellipse at 60% 30%, #F5E8C8 0%, transparent 50%), radial-gradient(ellipse at 20% 70%, #E8D4A8 0%, transparent 60%), linear-gradient(160deg, #F5ECD8 0%, #EAD8B0 100%)",
      }}
    >
      {/* Sun glow */}
      <div className="absolute top-4 right-6 w-16 h-16 rounded-full opacity-40" style={{ background: "radial-gradient(circle, #F5E68A, transparent)" }} />
      {/* Acacia tree silhouette (CSS) */}
      <div className="absolute top-8 right-12 w-24 h-20 opacity-15" style={{ background: "radial-gradient(ellipse at 50% 20%, #6B5A3A 0%, transparent 60%)" }} />
      <div className="absolute top-24 right-16 w-1 h-10 opacity-20" style={{ background: "#6B5A3A" }} />
      <div className="absolute bottom-6 left-3"><MiniInvite accentColor="#C4A55A" borderColor="#D4B896" /></div>
      <div className="absolute top-3 left-8 flex gap-2 animate-bob opacity-70">
        <Balloon color="#D4B896" size={22} />
        <Balloon color="#C4A55A" size={18} style={{ marginTop: 5 }} />
        <Balloon color="#9BAD9B" size={20} />
      </div>
      <div className="absolute top-1 left-6 animate-sway opacity-60"><Bow color="#D4B896" size={28} /></div>
      {/* Grass tufts */}
      <div className="absolute bottom-0 left-0 right-0 h-4 opacity-20" style={{ background: "repeating-linear-gradient(90deg, #9BAD9B 0px, #9BAD9B 2px, transparent 2px, transparent 8px)" }} />
    </div>
  );
}

function NeutralLuxeMoodboard() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: 200,
        background: "radial-gradient(ellipse at 50% 0%, #F8F4EE 0%, transparent 60%), linear-gradient(180deg, #FAF8F2 0%, #F0EBE0 100%)",
      }}
    >
      <div className="absolute inset-0 texture-linen opacity-50" />
      {/* Elegant arches */}
      <div className="absolute top-6 right-6 w-20 h-28 opacity-15 rounded-t-full" style={{ border: "1px solid #C4A55A" }} />
      <div className="absolute top-6 right-14 w-16 h-24 opacity-10 rounded-t-full" style={{ border: "1px solid #D4B896" }} />
      <div className="absolute bottom-6 left-3"><MiniInvite accentColor="#C4A55A" borderColor="#E8E0D0" /></div>
      <div className="absolute top-4 left-8 animate-sway opacity-40"><Bow color="#D4B896" size={32} /></div>
      <div className="absolute bottom-8 right-6 flex gap-1.5 animate-bob opacity-50">
        <Balloon color="#D4B896" size={18} />
        <Balloon color="#F5E6C8" size={14} style={{ marginTop: 4 }} />
      </div>
      {/* Palette chips */}
      {["#FAF8F2", "#E8E0D0", "#D4B896", "#C4A55A"].map((c, i) => (
        <div key={i} className="absolute bottom-3 right-4 w-5 h-5 rounded-full shadow-sm border border-white" style={{ right: `${16 + i * 22}px`, background: c }} />
      ))}
    </div>
  );
}

function BohoDesertMoodboard() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: 250,
        background: "radial-gradient(ellipse at 30% 60%, #E8C4A0 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #F0D4B0 0%, transparent 60%), linear-gradient(160deg, #F5E8D8 0%, #E8C4A0 60%, #F0D8C0 100%)",
      }}
    >
      {/* Desert sun */}
      <div className="absolute top-3 right-8 w-12 h-12 rounded-full opacity-50" style={{ background: "radial-gradient(circle, #F5C878, #C4A55A)" }} />
      {/* Cactus silhouette */}
      <div className="absolute bottom-0 right-10 w-3 h-20 opacity-20" style={{ background: "#7A5A3A", borderRadius: "4px 4px 0 0" }} />
      <div className="absolute bottom-12 right-7 w-8 h-2 opacity-20 rounded-full" style={{ background: "#7A5A3A" }} />
      {/* Pampas grass blobs */}
      <div className="absolute bottom-0 left-0 w-20 h-16 opacity-30" style={{ background: "radial-gradient(ellipse at 50% 100%, #D4B896, transparent)" }} />
      <div className="absolute bottom-6 left-4"><MiniInvite accentColor="#B5785F" borderColor="#D4B896" /></div>
      <div className="absolute top-4 left-10 flex gap-2 animate-bob">
        <Balloon color="#B5785F" size={24} />
        <Balloon color="#C4A55A" size={20} style={{ marginTop: 6 }} />
        <Balloon color="#E8C4A0" size={22} />
      </div>
      <div className="absolute top-2 left-8 animate-sway opacity-70"><Bow color="#C4A55A" size={30} /></div>
      <div className="absolute top-20 right-6 animate-drift opacity-50"><Flower color="#B5785F" size={22} /></div>
    </div>
  );
}

function MidnightFloralsMoodboard() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: 215,
        background: "radial-gradient(ellipse at 30% 30%, #2A3A5A 0%, transparent 60%), linear-gradient(160deg, #1A2540 0%, #0D1A30 100%)",
      }}
    >
      {/* Star dots */}
      {[{ t: 15, l: 20 }, { t: 25, l: 60 }, { t: 10, l: 80 }, { t: 35, l: 40 }, { t: 8, l: 50 }].map((pos, i) => (
        <div key={i} className="absolute w-0.5 h-0.5 rounded-full bg-white opacity-60" style={{ top: `${pos.t}%`, left: `${pos.l}%` }} />
      ))}
      {/* Gold-outlined flowers */}
      <div className="absolute top-3 right-3 opacity-70"><Flower color="#C4A55A" size={52} /></div>
      <div className="absolute top-10 right-14 opacity-40"><Flower color="#E8C4C4" size={32} /></div>
      <div className="absolute bottom-6 left-3">
        <div className="bg-[#1A2540] shadow-lg p-2 w-24" style={{ transform: "rotate(-3deg)", border: "0.5px solid #C4A55A" }}>
          <div className="h-1 w-12 mx-auto mb-1.5 rounded" style={{ background: "#C4A55A" }} />
          <div className="h-0.5 w-10 mx-auto mb-0.5 rounded opacity-30" style={{ background: "white" }} />
          <div className="h-0.5 w-8 mx-auto rounded opacity-20" style={{ background: "white" }} />
          <p className="text-[6px] text-center mt-1 tracking-wider uppercase opacity-50 text-white" style={{ fontFamily: "var(--font-ui)" }}>Baby Shower</p>
        </div>
      </div>
      <div className="absolute top-2 left-6 flex gap-1.5 animate-bob">
        <Balloon color="#C4A55A" size={22} />
        <Balloon color="#E8C4C4" size={18} style={{ marginTop: 4 }} />
        <Balloon color="#4A6B8A" size={20} />
      </div>
      <div className="absolute top-0 left-4 animate-sway opacity-70"><Bow color="#C4A55A" size={28} /></div>
    </div>
  );
}

function PowderBlueMoodboard() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: 235,
        background: "radial-gradient(ellipse at 40% 30%, #E8F4FF 0%, transparent 60%), linear-gradient(160deg, #EEF6FF 0%, #D8ECF8 100%)",
      }}
    >
      <div className="absolute inset-0 texture-linen opacity-30" />
      {/* Ribbon banner */}
      <div className="absolute top-6 left-0 right-0 h-6 opacity-20" style={{ background: "linear-gradient(90deg, transparent, #9BBAD4, transparent)" }} />
      <div className="absolute top-4 right-4 opacity-70"><Flower color="#9BBAD4" size={50} /></div>
      <div className="absolute top-10 right-16 opacity-40"><Flower color="#E8C4C4" size={30} /></div>
      <div className="absolute bottom-6 left-3"><MiniInvite accentColor="#9BBAD4" borderColor="#C8DFF0" /></div>
      <div className="absolute top-2 left-8 flex gap-2 animate-bob">
        <Balloon color="#9BBAD4" size={24} />
        <Balloon color="#C8E4F8" size={20} style={{ marginTop: 6 }} />
        <Balloon color="#E8C4C4" size={22} />
      </div>
      <div className="absolute top-0 left-6 animate-sway opacity-60"><Bow color="#9BBAD4" size={32} /></div>
      {/* Gold star details */}
      {[{ t: 40, l: 65 }, { t: 55, l: 75 }, { t: 35, l: 80 }].map((pos, i) => (
        <div key={i} className="absolute text-[8px] opacity-40" style={{ top: `${pos.t}%`, left: `${pos.l}%`, color: "#C4A55A" }}>★</div>
      ))}
    </div>
  );
}

function WildflowerMoodboard() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: 245,
        background: "radial-gradient(ellipse at 30% 50%, #E8F0D8 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, #F8EDE0 0%, transparent 60%), linear-gradient(160deg, #F0F4E8 0%, #E8EED8 100%)",
      }}
    >
      {/* Meadow floor */}
      <div className="absolute bottom-0 left-0 right-0 h-12 opacity-30" style={{ background: "linear-gradient(180deg, transparent, #C8D8A8)" }} />
      <div className="absolute top-3 right-3 opacity-80"><Flower color="#E8C4C4" size={44} /></div>
      <div className="absolute top-8 right-14 opacity-70"><Flower color="#C4A55A" size={36} /></div>
      <div className="absolute top-4 right-24 opacity-60"><Flower color="#9BAD9B" size={30} /></div>
      <div className="absolute top-14 right-8 opacity-50"><Flower color="#B5785F" size={24} /></div>
      <div className="absolute bottom-6 left-3"><MiniInvite accentColor="#9BAD9B" borderColor="#C8D8A8" /></div>
      <div className="absolute top-2 left-8 flex gap-1.5 animate-bob">
        <Balloon color="#E8C4C4" size={22} />
        <Balloon color="#9BAD9B" size={18} style={{ marginTop: 5 }} />
        <Balloon color="#C4A55A" size={20} />
        <Balloon color="#B5785F" size={16} style={{ marginTop: 3 }} />
      </div>
      <div className="absolute top-0 left-6 animate-sway opacity-70"><Bow color="#E8C4C4" size={28} /></div>
    </div>
  );
}

function PinkBowMoodboard() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: 220,
        background: "radial-gradient(ellipse at 50% 0%, #FFE4F0 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, #F8D0E8 0%, transparent 60%), linear-gradient(160deg, #FFE8F4 0%, #F8D8EC 100%)",
      }}
    >
      {/* Big bow hero */}
      <div className="absolute top-4 right-4 animate-sway opacity-90"><Bow color="#FF69A0" size={70} /></div>
      <div className="absolute top-16 right-20 animate-sway opacity-60" style={{ animationDelay: "0.5s" }}><Bow color="#E8C4C4" size={44} /></div>
      <div className="absolute top-3 right-3 opacity-60"><Flower color="#FFB0D0" size={40} /></div>
      <div className="absolute bottom-6 left-3"><MiniInvite accentColor="#FF69A0" borderColor="#FFB0D0" /></div>
      <div className="absolute top-2 left-6 flex gap-1.5 animate-bob">
        <Balloon color="#FF69A0" size={26} />
        <Balloon color="#FFB0D0" size={22} style={{ marginTop: 6 }} />
        <Balloon color="#E8C4C4" size={20} />
        <Balloon color="#F8A0C8" size={18} style={{ marginTop: 4 }} />
      </div>
      {/* Confetti dots */}
      {[{ t: 20, l: 40 }, { t: 40, l: 55 }, { t: 60, l: 45 }, { t: 30, l: 70 }, { t: 50, l: 30 }, { t: 70, l: 60 }].map((pos, i) => (
        <div key={i} className="absolute w-1.5 h-1.5 rounded-full" style={{ top: `${pos.t}%`, left: `${pos.l}%`, background: ["#FF69A0", "#C4A55A", "#E8C4C4", "#9BAD9B"][i % 4], opacity: 0.5 }} />
      ))}
    </div>
  );
}

const themes = [
  {
    name: "Garden Botanica",
    category: "Floral",
    description: "Lush botanical prints, pressed flowers, sage green linens and wild fern arrangements.",
    palette: ["#9BAD9B", "#E8C4C4", "#C8DEB0", "#D4B896"],
    Moodboard: GardenBotanicaMoodboard,
  },
  {
    name: "Dusty Rose & Champagne",
    category: "Floral",
    description: "Soft blush roses, ivory linen and delicate gold details for timeless romantic elegance.",
    palette: ["#E8C4C4", "#C9927A", "#C4A55A", "#F5E6C8"],
    Moodboard: DustyRoseMoodboard,
  },
  {
    name: "Safari Golden Hour",
    category: "Safari",
    description: "Golden savanna hues, natural textures and elegant wildlife-inspired warmth.",
    palette: ["#D4B896", "#C4A55A", "#9BAD9B", "#B5785F"],
    Moodboard: SafariMoodboard,
  },
  {
    name: "Neutral Luxe",
    category: "Neutral",
    description: "Warm neutrals, champagne tones and organic textures — effortlessly chic.",
    palette: ["#FAF8F2", "#E8E0D0", "#D4B896", "#C4A55A"],
    Moodboard: NeutralLuxeMoodboard,
  },
  {
    name: "Boho Desert",
    category: "Boho",
    description: "Terracotta, rust and cream with pampas grass and macramé textures.",
    palette: ["#B5785F", "#C4A55A", "#E8C4A0", "#9BAD9B"],
    Moodboard: BohoDesertMoodboard,
  },
  {
    name: "Midnight Florals",
    category: "Classic",
    description: "Deep navy, blush and gold for a dramatic, sophisticated evening celebration.",
    palette: ["#1A2540", "#4A6B8A", "#C4A55A", "#E8C4C4"],
    Moodboard: MidnightFloralsMoodboard,
  },
  {
    name: "Powder Blue Classic",
    category: "Classic",
    description: "Sky blue, crisp white and gold — a timeless palette for any little one.",
    palette: ["#9BBAD4", "#C8E4F8", "#E8C4C4", "#C4A55A"],
    Moodboard: PowderBlueMoodboard,
  },
  {
    name: "Wildflower Meadow",
    category: "Boho",
    description: "A joyful wildflower palette — multicolor blooms for a meadow picnic vibe.",
    palette: ["#E8C4C4", "#C4A55A", "#9BAD9B", "#B5785F"],
    Moodboard: WildflowerMoodboard,
  },
  {
    name: "Pink Bow Dream",
    category: "Floral",
    description: "Maximalist pink with oversized bows, hot pink blooms and blush everything.",
    palette: ["#FF69A0", "#FFB0D0", "#E8C4C4", "#C4A55A"],
    Moodboard: PinkBowMoodboard,
  },
];

const filters = ["All", "Neutral", "Floral", "Safari", "Boho", "Classic"];

function ThemeCard({ theme, index }: { theme: typeof themes[0]; index: number }) {
  const MoodboardComponent = theme.Moodboard;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative bg-white overflow-hidden hover:shadow-2xl transition-all duration-300 break-inside-avoid"
      style={{ border: "1px solid #EDE5DC", borderRadius: 12 }}
    >
      {/* Heart save button */}
      <HeartButton />

      {/* Category badge */}
      <div className="absolute top-3 left-3 z-20">
        <span
          className="text-[8px] tracking-[0.15em] uppercase px-2 py-0.5 rounded-full"
          style={{
            background: "rgba(255,255,255,0.9)",
            color: "#C9927A",
            border: "1px solid #E8C4C4",
            fontFamily: "var(--font-ui)",
          }}
        >
          {theme.category}
        </span>
      </div>

      {/* Moodboard scene */}
      <div className="relative overflow-hidden">
        <MoodboardComponent />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#C9927A]/0 group-hover:bg-[#C9927A]/10 transition-colors duration-300" />
      </div>

      {/* Card info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-1.5">
          <h3
            className="text-lg text-[#2C2C2C] leading-snug"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
          >
            {theme.name}
          </h3>
        </div>

        <p
          className="text-xs text-[#2C2C2C]/55 leading-relaxed mb-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {theme.description}
        </p>

        {/* Palette dots */}
        <div className="flex gap-1.5 mb-3">
          {theme.palette.map((c) => (
            <div
              key={c}
              className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
              style={{ background: c }}
            />
          ))}
        </div>

        {/* Explore link */}
        <Link
          href={`/themes/${theme.name.toLowerCase().replace(/\s+/g, "-")}`}
          className="inline-flex items-center gap-1.5 text-[11px] tracking-wide font-medium transition-colors group-hover:gap-3 duration-300"
          style={{ color: "#C9927A", fontFamily: "var(--font-ui)" }}
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
    <section id="themes" className="py-24 md:py-32" style={{ background: "#FAF6F0" }}>
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
              <Flower color="#E8C4C4" size={18} />
              <span
                className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A]"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Save your favourites
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

          {/* Filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="px-4 py-2 text-[11px] tracking-wider rounded-full transition-all duration-200"
                style={{
                  fontFamily: "var(--font-ui)",
                  background: activeFilter === filter ? "#C9927A" : "white",
                  color: activeFilter === filter ? "white" : "#2C2C2C",
                  border: activeFilter === filter ? "1px solid #C9927A" : "1px solid #E8E0D8",
                  fontWeight: activeFilter === filter ? 600 : 400,
                }}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Pinterest masonry grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="columns-2 lg:columns-3 gap-5"
            style={{ columnGap: "1.25rem" }}
          >
            {filtered.map((theme, index) => (
              <div key={theme.name} className="mb-5 break-inside-avoid">
                <ThemeCard theme={theme} index={index} />
              </div>
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
            href="/themes"
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
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
