"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Flower from "@/components/ui/Flower";
import Bow from "@/components/ui/Bow";
import Balloon from "@/components/ui/Balloon";

// ── CSS art scenes ────────────────────────────────────────────────────────────

function TablescapeArt() {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F8F5F2 0%, #F0EBE2 100%)" }}
    >
      {/* Table surface */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[45%]"
        style={{ background: "linear-gradient(180deg, #E8E0D4, #DDD4C4)", borderTop: "2px solid #C8BEB2" }}
      />
      {/* Linen runner */}
      <div
        className="absolute"
        style={{ bottom: "45%", left: "15%", right: "15%", height: 8, background: "#F8F0E8", borderRadius: 2, transform: "translateY(50%)" }}
      />
      {/* Plates */}
      {[25, 50, 75].map((left, i) => (
        <div key={i} className="absolute" style={{ left: `${left}%`, bottom: "44%", transform: "translateX(-50%)" }}>
          <div className="rounded-full" style={{ width: 40, height: 40, background: "white", border: "1.5px solid #E8E0D8", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }} />
          <div className="rounded-full absolute" style={{ width: 28, height: 28, background: "#FAF8F5", border: "0.5px solid #E8C4C4", top: 6, left: 6 }} />
        </div>
      ))}
      {/* Glasses */}
      {[35, 65].map((left, i) => (
        <div key={i} className="absolute" style={{ left: `${left}%`, bottom: "50%", transform: "translateX(-50%)" }}>
          <div style={{ width: 12, height: 24, background: "rgba(200,220,240,0.4)", border: "1px solid rgba(150,180,200,0.3)", borderRadius: "0 0 3px 3px" }} />
          <div style={{ width: 16, height: 2, background: "rgba(150,180,200,0.3)", marginLeft: -2 }} />
          <div style={{ width: 10, height: 4, background: "rgba(150,180,200,0.2)", marginLeft: 1 }} />
        </div>
      ))}
      {/* Center flower arrangement */}
      <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: "52%" }}>
        <Flower color="#E8C4C4" size={36} />
      </div>
      <div className="absolute" style={{ left: "calc(50% - 16px)", bottom: "60%" }}>
        <Flower color="#9BAD9B" size={22} />
      </div>
      <div className="absolute" style={{ left: "calc(50% + 10px)", bottom: "58%" }}>
        <Flower color="#C4A55A" size={18} />
      </div>
      {/* Candles */}
      {[20, 80].map((left, i) => (
        <div key={i} className="absolute" style={{ left: `${left}%`, bottom: "50%", transform: "translateX(-50%)" }}>
          <div style={{ width: 4, height: 28, background: "#F5E6C8", borderRadius: "2px 2px 0 0", border: "0.5px solid #C4A55A40" }} />
          <div className="rounded-full" style={{ width: 6, height: 6, background: "#F5C040", marginLeft: -1, marginTop: -2 }} />
        </div>
      ))}
    </div>
  );
}

function BalloonArchArt() {
  const balloonColors = ["#E8C4C4", "#F5E6C8", "#9BAD9B", "#E8D4B8", "#FAF8F5", "#C4A55A", "#E8C4C4", "#D4B896"];
  return (
    <div
      className="relative overflow-hidden h-full"
      style={{ background: "linear-gradient(180deg, #F8F5F2 0%, #FAF8F5 100%)" }}
    >
      {[...Array(20)].map((_, i) => {
        const angle = (i / 19) * Math.PI;
        const x = 50 + 42 * Math.cos(angle + Math.PI);
        const y = 95 - 55 * Math.sin(angle);
        const size = 18 + (i % 3) * 6;
        return (
          <div
            key={i}
            className="absolute rounded-full shadow-sm"
            style={{
              width: size,
              height: size,
              left: `${x}%`,
              top: `${y}%`,
              background: `radial-gradient(circle at 35% 30%, ${balloonColors[i % balloonColors.length]}EE, ${balloonColors[i % balloonColors.length]}88)`,
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      })}
      {/* Floor accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-8"
        style={{ background: "linear-gradient(180deg, transparent, #F0E8DE)" }}
      />
      {/* Bow at arch top */}
      <div className="absolute" style={{ left: "50%", top: "10%", transform: "translateX(-50%)" }}>
        <Bow color="#E8C4C4" size={32} />
      </div>
    </div>
  );
}

function CakeArt() {
  return (
    <div
      className="relative flex flex-col items-center justify-end pb-8 h-full"
      style={{ background: "linear-gradient(180deg, #FDF8F5 0%, #F8F0E8 100%)" }}
    >
      {/* Top tier */}
      <div
        className="relative w-20 h-12 mb-0"
        style={{
          background: "linear-gradient(180deg, #FAF8F5, #F0E8E0)",
          border: "1px solid #E8E0D8",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          borderRadius: "2px 2px 0 0",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-3 rounded-t-sm"
          style={{ background: "linear-gradient(180deg, #E8C4C4, #E8C4C4BB)" }}
        />
        {/* Candle */}
        <div
          className="absolute -top-5 left-1/2 -translate-x-1/2 w-1 h-5 rounded-full"
          style={{ background: "#F5E6C8", border: "0.5px solid #C4A55A40" }}
        />
        {/* Flame */}
        <div
          className="absolute -top-7 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
          style={{ background: "#C4A55A" }}
        />
      </div>
      {/* Middle tier */}
      <div
        className="w-32 h-14"
        style={{
          background: "linear-gradient(180deg, #FAF8F5, #F0E8E0)",
          border: "1px solid #E8E0D8",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        <div className="h-3" style={{ background: "#E8C4C4BB" }} />
        <div className="flex justify-center gap-2 mt-2">
          <div className="w-3 h-3 rounded-full" style={{ background: "#9BAD9B" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#E8C4C4" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#C4A55A" }} />
        </div>
      </div>
      {/* Bottom tier */}
      <div
        className="w-44 h-16"
        style={{
          background: "linear-gradient(180deg, #FAF8F5, #F0E8E0)",
          border: "1px solid #E8E0D8",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <div className="h-3" style={{ background: "#E8C4C4BB" }} />
        <div className="flex justify-center gap-1.5 mt-2">
          <Flower color="#E8C4C4" size={14} />
          <Flower color="#9BAD9B" size={14} />
          <Flower color="#E8C4C4" size={14} />
          <Flower color="#C4A55A" size={14} />
        </div>
      </div>
      {/* Cake board */}
      <div className="w-48 h-2 rounded-full" style={{ background: "#E8E0D8" }} />
      {/* Floating flowers */}
      <div className="absolute top-8 right-6 opacity-40">
        <Flower color="#E8C4C4" size={24} />
      </div>
      <div className="absolute top-16 left-6 opacity-30">
        <Flower color="#9BAD9B" size={18} />
      </div>
    </div>
  );
}

function FlatLayArt() {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ background: "linear-gradient(160deg, #F8F5F0 0%, #F0EBE2 100%)" }}
    >
      {/* Marble texture simulation */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(180,170,160,0.3) 20px, rgba(180,170,160,0.3) 21px)",
        }}
      />
      {/* Scattered papers */}
      <div
        className="absolute bg-white shadow-lg"
        style={{ width: 100, height: 130, top: 20, left: 15, transform: "rotate(-8deg)", border: "0.5px solid #E8D8C8" }}
      >
        <div className="h-3 w-full" style={{ background: "#E8C4C4" }} />
        <div className="p-2">
          <div className="w-12 h-1 rounded mb-1.5" style={{ background: "#2C2C2C20" }} />
          <div className="w-10 h-1 rounded mb-1" style={{ background: "#2C2C2C15" }} />
          <Flower color="#E8C4C4" size={20} />
        </div>
      </div>
      <div
        className="absolute bg-white shadow-lg"
        style={{ width: 90, height: 120, top: 30, right: 20, transform: "rotate(6deg)", border: "0.5px solid #C4A55A30" }}
      >
        <div className="absolute inset-3 border opacity-20" style={{ borderColor: "#C4A55A" }} />
        <div className="p-3 text-center">
          <div className="w-8 h-px mx-auto mb-2" style={{ background: "#C4A55A" }} />
          <p className="text-[5px] tracking-[0.2em] uppercase opacity-50" style={{ fontFamily: "var(--font-ui)" }}>
            Baby Shower
          </p>
          <p className="text-[8px]" style={{ fontFamily: "var(--font-display)", color: "#2C2C2C" }}>
            Emma
          </p>
        </div>
      </div>
      <div
        className="absolute bg-white shadow-xl"
        style={{ width: 110, height: 140, bottom: 20, left: "50%", transform: "translateX(-50%) rotate(2deg)", border: "0.5px solid #E8C4C4" }}
      >
        <div className="h-4" style={{ background: "linear-gradient(135deg, #E8C4C4, #C9927A)" }} />
        <div className="p-3">
          <div className="flex justify-center mb-2">
            <Flower color="#E8C4C4" size={18} />
          </div>
          <div className="w-12 h-px mx-auto mb-1" style={{ background: "#C4A55A" }} />
          <p className="text-[5px] text-center tracking-[0.2em] uppercase opacity-40" style={{ fontFamily: "var(--font-ui)" }}>
            You&apos;re invited
          </p>
          <p className="text-[8px] text-center" style={{ fontFamily: "var(--font-display)", color: "#2C2C2C" }}>
            Baby Shower
          </p>
        </div>
      </div>
      {/* Scattered gold confetti */}
      {[
        { t: "15%", l: "55%" }, { t: "40%", l: "30%" },
        { t: "70%", l: "80%" }, { t: "20%", l: "75%" },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{ top: pos.t, left: pos.l, width: 5, height: 5, background: "#C4A55A", opacity: 0.4 }}
        />
      ))}
    </div>
  );
}

function GiftTableArt() {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F8F5F2 0%, #F0EBE4 100%)" }}
    >
      {/* Table */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[30%]"
        style={{ background: "linear-gradient(180deg, #E8E0D4, #DDD4C4)", borderTop: "2px solid #C8BEB2" }}
      />
      {/* Stacked gift boxes */}
      {/* Large bottom box */}
      <div
        className="absolute"
        style={{ bottom: "30%", left: "50%", transform: "translateX(-50%)" }}
      >
        <div
          className="relative"
          style={{ width: 80, height: 56, background: "#E8C4C4", border: "1px solid #C4A0A0", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
        >
          {/* Ribbon vertical */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-2" style={{ background: "#C4A55A", opacity: 0.6 }} />
          {/* Ribbon horizontal */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-2" style={{ background: "#C4A55A", opacity: 0.6 }} />
        </div>
      </div>
      {/* Medium box on top-left */}
      <div
        className="absolute"
        style={{ bottom: "calc(30% + 56px)", left: "calc(50% - 40px - 20px)", transform: "translateX(-50%)" }}
      >
        <div
          className="relative"
          style={{ width: 52, height: 44, background: "#9BAD9B", border: "1px solid #7A9070", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
        >
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1.5" style={{ background: "#E8C4C4", opacity: 0.7 }} />
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1.5" style={{ background: "#E8C4C4", opacity: 0.7 }} />
        </div>
        <div className="absolute" style={{ top: -12, left: "50%", transform: "translateX(-50%)" }}>
          <Bow color="#E8C4C4" size={24} />
        </div>
      </div>
      {/* Small box on top */}
      <div
        className="absolute"
        style={{ bottom: "calc(30% + 56px + 28px)", left: "50%", transform: "translateX(-50%)" }}
      >
        <div
          className="relative"
          style={{ width: 40, height: 36, background: "#C4A55A", border: "1px solid #A08840", boxShadow: "0 2px 6px rgba(0,0,0,0.08)" }}
        >
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1" style={{ background: "#E8C4C4", opacity: 0.7 }} />
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1" style={{ background: "#E8C4C4", opacity: 0.7 }} />
        </div>
        <div className="absolute" style={{ top: -10, left: "50%", transform: "translateX(-50%)" }}>
          <Bow color="#FAF8F5" size={20} />
        </div>
      </div>
      {/* Floating balloons */}
      <div className="absolute top-4 left-8 flex gap-1 animate-bob">
        <Balloon color="#E8C4C4" size={20} />
        <Balloon color="#9BAD9B" size={16} style={{ marginTop: 4 }} />
      </div>
      <div className="absolute top-2 right-6 animate-bob" style={{ animationDelay: "0.7s" }}>
        <Balloon color="#C4A55A" size={18} />
      </div>
    </div>
  );
}

function FlowerArrangementArt() {
  return (
    <div
      className="relative w-full h-full flex items-end justify-center pb-4"
      style={{ background: "linear-gradient(180deg, #E8F4F8 0%, #F8F5F2 60%, #F0EBE2 100%)" }}
    >
      {/* Vase */}
      <div className="relative z-10">
        {/* Vase body */}
        <div
          style={{
            width: 60,
            height: 70,
            background: "linear-gradient(180deg, #E8703A 0%, #C05820 100%)",
            borderRadius: "5px 5px 12px 12px",
            border: "1px solid #A04010",
            boxShadow: "inset -4px 0 8px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          {/* Highlight */}
          <div
            className="absolute top-2 left-2 rounded-full opacity-20"
            style={{ width: 10, height: 20, background: "white" }}
          />
        </div>
        {/* Vase neck */}
        <div
          className="mx-auto"
          style={{
            width: 36,
            height: 12,
            background: "#C05820",
            border: "1px solid #A04010",
            marginTop: -2,
            borderRadius: "0 0 4px 4px",
          }}
        />
        {/* Stems */}
        {[-20, -8, 0, 8, 20].map((offset, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              bottom: 70,
              left: "50%",
              width: 1.5,
              height: 50 + Math.abs(offset) * 1.5,
              background: "#7A9A7A",
              transform: `translateX(calc(-50% + ${offset}px)) rotate(${offset / 3}deg)`,
              transformOrigin: "bottom",
              opacity: 0.6,
            }}
          />
        ))}
        {/* Flowers on stems */}
        {[
          { x: -28, y: -90, color: "#E8C4C4", size: 28 },
          { x: -12, y: -80, color: "#9BAD9B", size: 22 },
          { x: 2, y: -95, color: "#C4A55A", size: 24 },
          { x: 14, y: -78, color: "#E8C4C4", size: 20 },
          { x: 26, y: -88, color: "#C9927A", size: 18 },
        ].map((flower, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              bottom: 70,
              left: "50%",
              transform: `translateX(calc(-50% + ${flower.x}px)) translateY(${flower.y}px)`,
            }}
          >
            <Flower color={flower.color} size={flower.size} />
          </div>
        ))}
        {/* Leaves */}
        {[-15, 15].map((x, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-50"
            style={{
              bottom: 100,
              left: `calc(50% + ${x}px)`,
              width: 16,
              height: 24,
              background: "#9BAD9B",
              borderRadius: "50% 0",
              transform: `rotate(${x > 0 ? 30 : -30}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────

const ideas = [
  {
    title: "The Perfect Tablescape",
    category: "Decor",
    height: "h-72",
    Art: TablescapeArt,
  },
  {
    title: "Balloon Arch Goals",
    category: "Decor",
    height: "h-96",
    Art: BalloonArchArt,
  },
  {
    title: "Cake Inspo",
    category: "Food",
    height: "h-80",
    Art: CakeArt,
  },
  {
    title: "Invitation Suite Flatlay",
    category: "Stationery",
    height: "h-72",
    Art: FlatLayArt,
  },
  {
    title: "Gift Table Setup",
    category: "Decor",
    height: "h-80",
    Art: GiftTableArt,
  },
  {
    title: "Flower Arrangement Station",
    category: "Florals",
    height: "h-96",
    Art: FlowerArrangementArt,
  },
];

function SaveButton() {
  const [saved, setSaved] = useState(false);
  return (
    <button
      onClick={() => setSaved(!saved)}
      className="w-8 h-8 flex items-center justify-center rounded-full shadow-md transition-transform hover:scale-110"
      style={{ background: "white" }}
      aria-label={saved ? "Unsave" : "Save"}
    >
      <svg
        width="13"
        height="13"
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

// ── Main component ────────────────────────────────────────────────────────────

export default function MoodboardGallery() {
  return (
    <section className="py-24 md:py-32" style={{ background: "#FDFBF7" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 h-px" style={{ background: "linear-gradient(90deg, transparent, #E8C4C4)" }} />
            <Flower color="#E8C4C4" size={18} />
            <div className="w-12 h-px" style={{ background: "linear-gradient(90deg, #E8C4C4, transparent)" }} />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "#2C2C2C",
            }}
          >
            Steal These Ideas
          </h2>
          <p
            className="mt-3 text-[#5A4A42]/60 max-w-md mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Hand-curated inspiration to make your shower unforgettable.
          </p>
        </motion.div>

        {/* Pinterest-style masonry */}
        <div className="columns-2 lg:columns-3 gap-5" style={{ columnGap: "1.25rem" }}>
          {ideas.map((idea, i) => {
            const Art = idea.Art;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="mb-5 break-inside-avoid group"
              >
                <div
                  className="relative overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  style={{ border: "1px solid #EDE5DC", borderRadius: 12 }}
                >
                  {/* Art */}
                  <div className={`relative ${idea.height} overflow-hidden`}>
                    <Art />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#2C2C2C]/0 group-hover:bg-[#2C2C2C]/5 transition-colors duration-300" />
                    {/* Save button */}
                    <div className="absolute top-3 right-3 z-20">
                      <SaveButton />
                    </div>
                    {/* Category tag */}
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
                        {idea.category}
                      </span>
                    </div>
                  </div>
                  {/* Info bar */}
                  <div className="px-4 py-3 bg-white flex items-center justify-between">
                    <p
                      className="text-sm font-medium text-[#2C2C2C]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {idea.title}
                    </p>
                    <button
                      className="text-[10px] tracking-wider uppercase text-[#C9927A] hover:underline flex-shrink-0 ml-2"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      Get the Look →
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
