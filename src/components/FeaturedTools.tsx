"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const tools = [
  {
    emoji: "💌",
    name: "Invitation Maker",
    description: "Design stunning custom invitations in minutes with our drag & drop editor.",
    gradient: "linear-gradient(135deg, #fce8f1 0%, #f9d0e3 50%, #f4a8c7 100%)",
    accentColor: "#cd2d62",
    bgAccent: "#fdf4f7",
    patternColor: "#f9d0e3",
    badge: "Most Popular",
  },
  {
    emoji: "🎮",
    name: "Game Generator",
    description: "Auto-generate fun, printable baby shower games your guests will love.",
    gradient: "linear-gradient(135deg, #e6ede6 0%, #cddccd 50%, #a8c2a8 100%)",
    accentColor: "#486948",
    bgAccent: "#f4f7f4",
    patternColor: "#cddccd",
    badge: null,
  },
  {
    emoji: "✨",
    name: "Theme Finder Quiz",
    description: "Find your perfect baby shower theme in 60 seconds with our smart quiz.",
    gradient: "linear-gradient(135deg, #fff5f0 0%, #ffd0b8 50%, #ffb088 100%)",
    accentColor: "#f04010",
    bgAccent: "#fff5f0",
    patternColor: "#ffd0b8",
    badge: "New",
  },
  {
    emoji: "✅",
    name: "Printable Checklist",
    description: "The ultimate baby shower planning checklist — never forget a single detail.",
    gradient: "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 50%, #c4b5fd 100%)",
    accentColor: "#7c3aed",
    bgAccent: "#faf5ff",
    patternColor: "#ddd6fe",
    badge: null,
  },
  {
    emoji: "🌐",
    name: "RSVP Website",
    description: "Create a beautiful, shareable RSVP page in minutes — no coding needed.",
    gradient: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #7dd3fc 100%)",
    accentColor: "#0369a1",
    bgAccent: "#f0f9ff",
    patternColor: "#bae6fd",
    badge: null,
  },
  {
    emoji: "🎯",
    name: "Bingo Generator",
    description: "Instant, customizable baby shower bingo cards — print or play digitally.",
    gradient: "linear-gradient(135deg, #ccfbf1 0%, #99f6e4 50%, #5eead4 100%)",
    accentColor: "#0f766e",
    bgAccent: "#f0fdfa",
    patternColor: "#99f6e4",
    badge: null,
  },
];

function ToolCard({ tool, index }: { tool: typeof tools[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
    >
      {/* Card gradient header */}
      <div
        className="relative h-36 flex items-center justify-center overflow-hidden"
        style={{ background: tool.gradient }}
      >
        {/* Pattern overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, ${tool.patternColor}88 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
            opacity: 0.5,
          }}
        />
        {/* Badge */}
        {tool.badge && (
          <div
            className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold text-white"
            style={{ background: tool.accentColor }}
          >
            {tool.badge}
          </div>
        )}
        {/* Emoji */}
        <span
          className="relative text-5xl group-hover:scale-110 transition-transform duration-300 select-none"
          style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" }}
        >
          {tool.emoji}
        </span>
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3
          className="text-lg font-bold text-gray-800 mb-2"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {tool.name}
        </h3>
        <p
          className="text-sm text-gray-500 leading-relaxed mb-5"
          style={{ fontFamily: "var(--font-nunito), sans-serif" }}
        >
          {tool.description}
        </p>
        <button
          className="inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-200 hover:gap-2.5"
          style={{ color: tool.accentColor, fontFamily: "var(--font-nunito), sans-serif" }}
        >
          Try Free
          <span className="text-base">→</span>
        </button>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: tool.gradient }}
      />
    </motion.div>
  );
}

export default function FeaturedTools() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tools" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest text-blush-500 mb-3"
            style={{ fontFamily: "var(--font-nunito), sans-serif" }}
          >
            Planning Tools
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-5 leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Everything You Need to Plan
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #e04880, #cd2d62)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              the Perfect Shower
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-nunito), sans-serif" }}
          >
            From invitations to games to printables — our free tools make planning easy,
            beautiful, and stress-free.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tools.map((tool, index) => (
            <ToolCard key={tool.name} tool={tool} index={index} />
          ))}
        </div>

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
            className="inline-flex items-center gap-2 px-8 py-4 bg-blush-50 hover:bg-blush-100 text-blush-600 font-bold text-base rounded-2xl border-2 border-blush-200 hover:border-blush-300 transition-all duration-300 hover:scale-105"
            style={{ fontFamily: "var(--font-nunito), sans-serif" }}
          >
            View All Tools
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
