"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Flower from "@/components/ui/Flower";
import Balloon from "@/components/ui/Balloon";
import Bow from "@/components/ui/Bow";

// CSS invitation preview
function InvitationPreview() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(ellipse at 30% 30%, #F8E8D8, transparent 60%), radial-gradient(ellipse at 70% 70%, #E8D0C0, transparent 50%)" }}
      />
      {/* Stack of cards */}
      <div
        className="absolute bg-[#F5EEE8] shadow-md w-40 h-56"
        style={{ transform: "rotate(6deg) translate(12px, 8px)", border: "0.5px solid #E8D8C8" }}
      />
      <div
        className="absolute bg-[#FAF5F0] shadow-md w-40 h-56"
        style={{ transform: "rotate(2deg) translate(4px, 3px)", border: "0.5px solid #E8D8C8" }}
      />
      {/* Main invitation */}
      <div
        className="relative bg-white shadow-xl w-40 h-56 flex flex-col items-center justify-center p-4"
        style={{ border: "0.5px solid #E8D8C8" }}
      >
        <div className="absolute inset-3 border opacity-20" style={{ borderColor: "#C4A55A" }} />
        <div className="mb-2"><Flower color="#E8C4C4" size={28} /></div>
        <div className="w-12 h-px mb-3" style={{ background: "#C4A55A" }} />
        <p className="text-[7px] tracking-[0.2em] uppercase text-[#2C2C2C]/50 mb-1" style={{ fontFamily: "var(--font-ui)" }}>You&apos;re invited</p>
        <p className="text-base text-center" style={{ fontFamily: "var(--font-display)", color: "#2C2C2C", fontWeight: 300, lineHeight: 1.2 }}>Baby Shower</p>
        <p className="text-[7px] tracking-wider mt-1.5" style={{ color: "#C4A55A", fontFamily: "var(--font-ui)" }}>for Emma</p>
        <div className="w-10 h-px mt-2 mb-2" style={{ background: "#E8E0D8" }} />
        <p className="text-[6px] text-[#2C2C2C]/40" style={{ fontFamily: "var(--font-ui)" }}>June 14, 2pm</p>
        {/* Edit cursor */}
        <div
          className="absolute -right-2 bottom-8 w-1 h-5"
          style={{ background: "#C9927A", borderRadius: 1, animation: "bob 1.2s ease-in-out infinite" }}
        />
      </div>
      {/* Scattered flowers */}
      <div className="absolute top-3 right-3 opacity-40 animate-drift"><Flower color="#E8C4C4" size={20} /></div>
      <div className="absolute bottom-3 left-3 opacity-30 animate-drift" style={{ animationDelay: "1s" }}><Flower color="#9BAD9B" size={16} /></div>
    </div>
  );
}

// CSS moodboard theme grid preview
function ThemePreview() {
  const swatches = [
    { bg: "linear-gradient(135deg, #E8F0E4, #C8DEB0)", label: "Garden" },
    { bg: "linear-gradient(135deg, #FDF0F0, #F0D8D0)", label: "Rose" },
    { bg: "linear-gradient(135deg, #F5ECD8, #D4B896)", label: "Safari" },
    { bg: "linear-gradient(135deg, #1A2540, #2A3A5A)", label: "Midnight" },
    { bg: "linear-gradient(135deg, #FFE8F4, #FFB0D0)", label: "Pink" },
    { bg: "linear-gradient(135deg, #F5E8D8, #E8C4A0)", label: "Boho" },
  ];
  return (
    <div className="relative w-full h-full p-4">
      <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at center, #F5E6C8, transparent 70%)" }} />
      <div className="grid grid-cols-3 gap-2 h-full">
        {swatches.map((s, i) => (
          <div
            key={i}
            className="relative rounded-lg overflow-hidden shadow-sm hover:scale-105 transition-transform duration-200"
            style={{ background: s.bg, minHeight: 60 }}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-70">
              <Flower color={i % 2 === 0 ? "#E8C4C4" : "#C4A55A"} size={20} />
            </div>
            <div className="absolute bottom-1 left-0 right-0 text-center">
              <p className="text-[6px] tracking-wider uppercase text-white/80 font-medium drop-shadow" style={{ fontFamily: "var(--font-ui)" }}>{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// CSS bingo card preview
function BingoPreview() {
  const filledCells = new Set([0, 4, 6, 8, 12, 14, 16, 18, 20, 24]);
  const words = ["Diapers", "Crib", "Bottles", "Onesie", "FREE", "Stroller", "Pacifier", "Bib", "Rattle", "Mobile"];
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-15" style={{ background: "radial-gradient(circle at 50% 50%, #E8C4C4, transparent 70%)" }} />
      <div className="bg-white shadow-xl p-3 rounded-sm" style={{ border: "1px solid #E8C4C4" }}>
        {/* Header */}
        <div className="flex mb-2">
          {["B", "I", "N", "G", "O"].map((l) => (
            <div key={l} className="w-9 h-5 flex items-center justify-center text-[8px] font-bold" style={{ color: "#C9927A", fontFamily: "var(--font-ui)" }}>{l}</div>
          ))}
        </div>
        {/* Grid */}
        <div className="grid grid-cols-5 gap-0.5">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="w-9 h-9 flex items-center justify-center text-[5.5px] text-center leading-tight"
              style={{
                background: i === 12 ? "#C4A55A" : filledCells.has(i) ? "#E8C4C4" : "#FAF8F5",
                border: "0.5px solid #E8E0D8",
                color: filledCells.has(i) ? "#2C2C2C" : "#2C2C2C",
                fontFamily: "var(--font-ui)",
              }}
            >
              {i === 12 ? "★ FREE" : words[i % words.length]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// CSS phone/browser RSVP frame preview
function RSVPPreview() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 60% 40%, #D8ECF8, transparent 60%)" }} />
      {/* Phone frame */}
      <div
        className="relative bg-white shadow-xl rounded-2xl overflow-hidden"
        style={{ width: 130, height: 220, border: "2px solid #E8E0D8" }}
      >
        {/* Status bar */}
        <div className="h-5 flex items-center justify-center" style={{ background: "#FAF8F5" }}>
          <div className="w-12 h-2 rounded-full opacity-30" style={{ background: "#2C2C2C" }} />
        </div>
        {/* Screen content */}
        <div className="p-3">
          <div className="w-full h-8 rounded-lg mb-2 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #E8C4C4, #C9927A)" }}>
            <p className="text-[7px] text-white tracking-wider" style={{ fontFamily: "var(--font-ui)" }}>RSVP Site</p>
          </div>
          <p className="text-[7px] text-center text-[#2C2C2C]/50 mb-2" style={{ fontFamily: "var(--font-display)" }}>Emma&apos;s Baby Shower</p>
          <div className="w-full h-0.5 mb-2" style={{ background: "#E8E0D8" }} />
          <p className="text-[6px] text-[#2C2C2C]/40 mb-1" style={{ fontFamily: "var(--font-ui)" }}>Your name</p>
          <div className="w-full h-5 rounded mb-2" style={{ background: "#FAF8F5", border: "0.5px solid #E8E0D8" }} />
          <p className="text-[6px] text-[#2C2C2C]/40 mb-1" style={{ fontFamily: "var(--font-ui)" }}>Will you attend?</p>
          <div className="flex gap-1 mb-3">
            <div className="flex-1 h-5 rounded flex items-center justify-center text-[6px]" style={{ background: "#C9927A", color: "white", fontFamily: "var(--font-ui)" }}>Yes!</div>
            <div className="flex-1 h-5 rounded flex items-center justify-center text-[6px]" style={{ background: "#FAF8F5", border: "0.5px solid #E8E0D8", color: "#2C2C2C", fontFamily: "var(--font-ui)" }}>No</div>
          </div>
          <div className="w-full h-5 rounded flex items-center justify-center text-[6px] text-white" style={{ background: "linear-gradient(90deg, #C9927A, #B5785F)", fontFamily: "var(--font-ui)" }}>RSVP Now</div>
        </div>
      </div>
    </div>
  );
}

// CSS checklist preview
function ChecklistPreview() {
  const items = [
    { text: "Book venue", done: true },
    { text: "Send invites", done: true },
    { text: "Order cake", done: true },
    { text: "Plan games", done: false },
    { text: "Decor", done: false },
  ];
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 40% 60%, #D8E8D0, transparent 60%)" }} />
      <div className="bg-white shadow-xl p-4 rounded-sm w-44" style={{ border: "1px solid #E8E0D8" }}>
        {/* Header banner */}
        <div className="w-full h-6 rounded-sm flex items-center justify-center mb-3" style={{ background: "linear-gradient(90deg, #9BAD9B, #6B8A6B)" }}>
          <p className="text-[7px] tracking-[0.2em] uppercase text-white" style={{ fontFamily: "var(--font-ui)" }}>Baby Shower Checklist</p>
        </div>
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="w-4 h-4 flex-shrink-0 flex items-center justify-center rounded-sm"
                style={{ background: item.done ? "#9BAD9B" : "#FAF8F5", border: `1px solid ${item.done ? "#9BAD9B" : "#E8E0D8"}` }}
              >
                {item.done && (
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1 4l2 2 4-3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <p
                className="text-[8px]"
                style={{
                  fontFamily: "var(--font-ui)",
                  color: item.done ? "#2C2C2C" : "#2C2C2C",
                  opacity: item.done ? 0.4 : 0.8,
                  textDecoration: item.done ? "line-through" : "none",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-3 w-full bg-[#FAF8F5] rounded-full h-1.5" style={{ border: "0.5px solid #E8E0D8" }}>
          <div className="h-full rounded-full" style={{ width: "60%", background: "linear-gradient(90deg, #9BAD9B, #6B8A6B)" }} />
        </div>
        <p className="text-[6px] text-center text-[#2C2C2C]/40 mt-1" style={{ fontFamily: "var(--font-ui)" }}>3 of 5 complete</p>
      </div>
    </div>
  );
}

// CSS stacked printables preview
function PrintablesPreview() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 50% 50%, #F5E6C8, transparent 70%)" }} />
      {/* Stacked papers */}
      <div className="relative" style={{ width: 140, height: 180 }}>
        {/* Back papers */}
        <div
          className="absolute inset-0 bg-[#F5EEE8] shadow-sm"
          style={{ transform: "rotate(8deg) translate(10px, 6px)", border: "0.5px solid #E8D8C8", borderRadius: 2 }}
        />
        <div
          className="absolute inset-0 bg-[#FAF5F0] shadow-sm"
          style={{ transform: "rotate(4deg) translate(5px, 3px)", border: "0.5px solid #E8D8C8", borderRadius: 2 }}
        />
        <div
          className="absolute inset-0 bg-[#FDF8F5] shadow-sm"
          style={{ transform: "rotate(-4deg) translate(-5px, 2px)", border: "0.5px solid #E8D8C8", borderRadius: 2 }}
        />
        {/* Front paper — full mockup */}
        <div
          className="absolute inset-0 bg-white shadow-lg flex flex-col p-4"
          style={{ border: "0.5px solid #E8D8C8", borderRadius: 2 }}
        >
          <div className="flex justify-center mb-2"><Bow color="#E8C4C4" size={36} /></div>
          <div className="w-full h-0.5 mb-2" style={{ background: "#C4A55A", opacity: 0.5 }} />
          <p className="text-[7px] tracking-[0.2em] uppercase text-center text-[#2C2C2C]/50 mb-1" style={{ fontFamily: "var(--font-ui)" }}>Complete Bundle</p>
          <p className="text-sm text-center" style={{ fontFamily: "var(--font-display)", color: "#2C2C2C", lineHeight: 1.2 }}>Baby Shower Printables</p>
          <div className="w-full h-0.5 mt-2 mb-2" style={{ background: "#E8E0D8" }} />
          <p className="text-[6px] text-center text-[#2C2C2C]/40" style={{ fontFamily: "var(--font-ui)" }}>24 coordinated designs</p>
          <div className="mt-auto flex justify-center gap-1.5">
            {["#E8C4C4", "#9BAD9B", "#C4A55A", "#D4B896"].map((c) => (
              <div key={c} className="w-3 h-3 rounded-full border border-white shadow-sm" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-4 animate-drift opacity-40"><Flower color="#C4A55A" size={18} /></div>
    </div>
  );
}

const tools = [
  {
    name: "Create Your Invitations",
    description: "Design bespoke invitations with curated templates. Choose a theme, personalise with your details, and download print-ready files instantly.",
    badge: "Most Popular",
    badgeColor: "#C9927A",
    href: "/tools/invitations",
    Preview: InvitationPreview,
    bgAccent: "#FDF5F0",
  },
  {
    name: "Design Your Theme",
    description: "Discover your perfect theme palette through our curated style finder. Explore 500+ unique aesthetic directions.",
    badge: null,
    badgeColor: "",
    href: "/tools/theme",
    Preview: ThemePreview,
    bgAccent: "#F5F0E8",
  },
  {
    name: "Build Your Games",
    description: "Generate printable bingo cards, word searches, and party games in moments. Instantly unique for every guest.",
    badge: null,
    badgeColor: "",
    href: "/tools/games",
    Preview: BingoPreview,
    bgAccent: "#FDF0F4",
  },
  {
    name: "Launch Your RSVP Site",
    description: "A beautiful, shareable RSVP page — live in minutes, no code required. Track responses in real time.",
    badge: "New",
    badgeColor: "#9BAD9B",
    href: "/tools/rsvp",
    Preview: RSVPPreview,
    bgAccent: "#F0F5FC",
  },
  {
    name: "Print Your Checklist",
    description: "The complete 100-point planning checklist — beautifully typeset so nothing is ever overlooked.",
    badge: null,
    badgeColor: "",
    href: "/tools/checklist",
    Preview: ChecklistPreview,
    bgAccent: "#F0F5F0",
  },
  {
    name: "Curate Your Printables",
    description: "Browse and download a full suite of coordinated printable designs — invitations, games, signs, and more.",
    badge: null,
    badgeColor: "",
    href: "/tools/printables",
    Preview: PrintablesPreview,
    bgAccent: "#FDF8F0",
  },
];

export default function FeaturedTools() {
  return (
    <section id="tools" className="py-24 md:py-32" style={{ background: "#FDFBF7" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Bow color="#C9927A" size={24} />
            <span
              className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A]"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Planning Tools
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#2C2C2C] leading-tight mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Your Planning Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#2C2C2C]/55 text-base leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            From first spark of inspiration to the celebration itself
          </motion.p>
        </div>

        {/* Alternating feature rows */}
        <div className="space-y-8">
          {tools.map((tool, index) => {
            const PreviewComponent = tool.Preview;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`group flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0 overflow-hidden rounded-2xl hover:shadow-2xl transition-shadow duration-300`}
                style={{ border: "1px solid #EDE5DC" }}
              >
                {/* Preview area */}
                <div
                  className="relative flex-shrink-0 lg:w-[45%] h-64 lg:h-auto overflow-hidden"
                  style={{ background: tool.bgAccent }}
                >
                  <PreviewComponent />
                  {/* Badge */}
                  {tool.badge && (
                    <div className="absolute top-4 left-4 z-20">
                      <span
                        className="text-[9px] tracking-[0.15em] uppercase px-3 py-1 rounded-full text-white shadow-md"
                        style={{ background: tool.badgeColor, fontFamily: "var(--font-ui)" }}
                      >
                        {tool.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content area */}
                <div className="flex-1 flex flex-col justify-center p-8 lg:p-10 bg-white">
                  {/* Step number */}
                  <div
                    className="text-[4rem] leading-none mb-2 select-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 300,
                      color: "rgba(44,44,44,0.06)",
                      lineHeight: 1,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3
                    className="text-2xl text-[#2C2C2C] mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
                  >
                    {tool.name}
                  </h3>

                  <p
                    className="text-sm text-[#2C2C2C]/60 leading-relaxed mb-6 max-w-md"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {tool.description}
                  </p>

                  <Link
                    href={tool.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-md w-fit"
                    style={{
                      background: "linear-gradient(135deg, #C9927A, #B5785F)",
                      color: "white",
                      fontFamily: "var(--font-ui)",
                    }}
                  >
                    Try it free
                    <span>→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating balloon accent */}
        <div className="flex justify-center mt-16 gap-3 animate-bob">
          <Balloon color="#E8C4C4" size={28} />
          <Balloon color="#9BAD9B" size={22} style={{ marginTop: 8 }} />
          <Balloon color="#C4A55A" size={26} />
        </div>
      </div>
    </section>
  );
}
