"use client";
import { motion } from "framer-motion";
import Flower from "@/components/ui/Flower";
import Bow from "@/components/ui/Bow";

const bingoWords = [
  "Diaper", "Onesie", "Rattle", "Pacifier", "Stroller",
  "Blanket", "Booties", "Bib", "Bottle", "Teddy Bear",
  "Baby Wipes", "Formula", "Crib", "Mobile", "FREE",
  "Swaddle", "Breast Pump", "Monitor", "Thermometer", "Lotion",
  "Burp Cloth", "Socks", "Hat", "Car Seat", "Swing",
];

const filledCells = new Set([0, 3, 6, 9, 11, 14, 16, 20, 23]);

const smallGames = [
  {
    name: "Baby Predictions",
    description: "Guess the baby's weight, date & features",
    players: "4–30 players",
    gradient: "linear-gradient(135deg, #FDF0F4 0%, #F8E0EC 100%)",
    accent: "#D4789A",
    emoji: "🍼",
  },
  {
    name: "Price Is Right",
    description: "Guess the price of baby items",
    players: "Any group size",
    gradient: "linear-gradient(135deg, #FDF5E8 0%, #F5E0C0 100%)",
    accent: "#C4A55A",
    emoji: "💰",
  },
  {
    name: "Baby ABC's",
    description: "Find a baby item for every letter",
    players: "2–20 players",
    gradient: "linear-gradient(135deg, #EEF5EE 0%, #D8EED8 100%)",
    accent: "#7A9A7A",
    emoji: "🔤",
  },
  {
    name: "Word Scramble",
    description: "Unscramble baby-related words",
    players: "Any group size",
    gradient: "linear-gradient(135deg, #EEF0F8 0%, #D8DCF0 100%)",
    accent: "#6A7AAA",
    emoji: "✏️",
  },
  {
    name: "Who Knows Mommy Best",
    description: "How well do you know the mama-to-be?",
    players: "4–30 players",
    gradient: "linear-gradient(135deg, #FDF5F0 0%, #F5E4D8 100%)",
    accent: "#C9927A",
    emoji: "💕",
  },
];

export default function GamesSection() {
  return (
    <section className="py-24 md:py-32" style={{ background: "#FDF0EC" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Flower color="#E8C4C4" size={18} />
            <span
              className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A]"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Party Games
            </span>
            <Flower color="#E8C4C4" size={18} />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "#2C2C2C",
            }}
          >
            Games Everyone Will Love
          </h2>
          <p
            className="mt-3 text-[#5A4A42]/60 max-w-md mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Generate beautiful printable games in seconds. Free, fun, and unforgettable.
          </p>
        </motion.div>

        {/* Main layout: featured bingo + small games */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Featured Bingo Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-[400px] flex-shrink-0"
          >
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              style={{ border: "1px solid #E8C4C4" }}
            >
              {/* Bingo card header */}
              <div
                className="p-4 text-center relative"
                style={{ background: "linear-gradient(135deg, #FDF8F5, #F8EEE8)" }}
              >
                <div className="absolute top-2 left-3 animate-sway opacity-70">
                  <Bow color="#E8C4C4" size={32} />
                </div>
                <p
                  className="text-xs tracking-[0.25em] uppercase text-[#C9927A] mb-1"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Baby Shower
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "#2C2C2C",
                  }}
                >
                  Bingo
                </h3>
              </div>

              {/* BINGO header row */}
              <div className="px-4 pt-3">
                <div className="flex mb-1">
                  {["B", "I", "N", "G", "O"].map((letter) => (
                    <div
                      key={letter}
                      className="flex-1 h-8 flex items-center justify-center text-[11px] font-bold"
                      style={{
                        background: "linear-gradient(135deg, #C9927A, #B5785F)",
                        color: "white",
                        fontFamily: "var(--font-ui)",
                        margin: "0 1px",
                        borderRadius: 4,
                      }}
                    >
                      {letter}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bingo grid */}
              <div className="px-4 pb-4">
                <div className="grid grid-cols-5 gap-0.5">
                  {bingoWords.map((word, i) => {
                    const isFree = i === 12;
                    const isFilled = filledCells.has(i);
                    return (
                      <div
                        key={i}
                        className="flex items-center justify-center text-center text-[8px] leading-tight font-medium"
                        style={{
                          height: 44,
                          background: isFree
                            ? "linear-gradient(135deg, #C4A55A, #A8893A)"
                            : isFilled
                            ? "#F8E0EC"
                            : "#FAF8F5",
                          border: isFilled || isFree ? "1px solid #E8C4C4" : "0.5px solid #E8E0D8",
                          color: isFree ? "white" : "#2C2C2C",
                          borderRadius: 3,
                          fontFamily: "var(--font-ui)",
                          padding: "2px 1px",
                        }}
                      >
                        {isFree ? (
                          <span className="text-[9px]">
                            <Bow color="white" size={16} />
                          </span>
                        ) : (
                          word
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <div className="px-4 pb-5">
                <button
                  className="w-full py-3 rounded-full text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    background: "linear-gradient(135deg, #C9927A, #B5785F)",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  Generate Yours Free →
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right: 5 small game cards vertical scroll */}
          <div className="flex-1 flex flex-col gap-4">
            {smallGames.map((game, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                style={{ background: game.gradient, border: `1px solid ${game.accent}20` }}
              >
                <div className="flex items-center gap-4 p-4">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                    style={{ background: "rgba(255,255,255,0.6)" }}
                  >
                    {game.emoji}
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h4
                      className="text-sm font-medium text-[#2C2C2C] mb-0.5"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {game.name}
                    </h4>
                    <p
                      className="text-[11px] text-[#2C2C2C]/55 mb-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {game.description}
                    </p>
                    <span
                      className="text-[9px] tracking-wider uppercase"
                      style={{ color: game.accent, fontFamily: "var(--font-ui)" }}
                    >
                      {game.players}
                    </span>
                  </div>
                  {/* Play button */}
                  <button
                    className="flex-shrink-0 px-4 py-2 rounded-full text-[11px] font-medium text-white transition-all hover:opacity-90"
                    style={{ background: game.accent, fontFamily: "var(--font-ui)" }}
                  >
                    Play →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
