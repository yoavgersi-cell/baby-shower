"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Flower from "@/components/ui/Flower";
import Balloon from "@/components/ui/Balloon";
import Bow from "@/components/ui/Bow";

// Invitation card mockup (CSS art)
function InvitationCard({
  theme,
  rotate = 0,
  delay = 0,
  className = "",
}: {
  theme: "floral" | "boho" | "safari";
  rotate?: number;
  delay?: number;
  className?: string;
}) {
  const themes = {
    floral: { bg: "#FDF8F5", accent: "#E8C4C4", text: "#8B5E5E", border: "#E8C4C4", label: "Dusty Rose Garden" },
    boho: { bg: "#FAF3EC", accent: "#C4A55A", text: "#7A5A3A", border: "#D4B896", label: "Boho Desert Bloom" },
    safari: { bg: "#F5F0E0", accent: "#9BAD9B", text: "#5A7A5A", border: "#C4B896", label: "Safari Golden Hour" },
  };
  const t = themes[theme];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: rotate - 5 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ delay, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      className={`absolute bg-white shadow-2xl overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform duration-300 ${className}`}
      style={{ border: `1px solid ${t.border}` }}
    >
      {/* Card header gradient */}
      <div
        className="h-16 relative"
        style={{ background: `linear-gradient(135deg, ${t.bg}, ${t.accent}44)` }}
      >
        <div className="absolute inset-2 border opacity-30" style={{ borderColor: t.accent }} />
        <div className="absolute top-1 left-1 opacity-50">
          <Flower color={t.accent} size={16} />
        </div>
        <div className="absolute top-1 right-1 opacity-50" style={{ transform: "scaleX(-1)" }}>
          <Flower color={t.accent} size={16} />
        </div>
        <div className="absolute bottom-1 right-3 opacity-30">
          <Flower color={t.accent} size={10} />
        </div>
      </div>
      {/* Card body */}
      <div className="p-3 text-center">
        <div className="w-8 h-px mx-auto mb-2" style={{ background: t.accent }} />
        <p
          className="text-[7px] tracking-[0.2em] uppercase mb-0.5"
          style={{ color: t.text, fontFamily: "var(--font-ui)" }}
        >
          You&apos;re invited to a
        </p>
        <p
          className="text-sm leading-tight mb-0.5"
          style={{ fontFamily: "var(--font-display)", color: "#2C2C2C", fontWeight: 400 }}
        >
          Baby Shower
        </p>
        <p
          className="text-[7px] tracking-wider mb-2"
          style={{ color: t.accent, fontFamily: "var(--font-ui)" }}
        >
          for Emma &amp; James
        </p>
        <div className="w-12 h-px mx-auto mb-2" style={{ background: t.border }} />
        <p
          className="text-[6px] text-[#2C2C2C]/40"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          Saturday · June 14th · 2pm
        </p>
        <p
          className="text-[5px] text-[#2C2C2C]/30 mt-0.5 tracking-wider uppercase"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          {t.label}
        </p>
      </div>
    </motion.div>
  );
}

// Bingo card mockup
function BingoCard({ delay = 0, className = "" }: { delay?: number; className?: string }) {
  const filledCells = [2, 7, 8, 13, 17, 22];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
      animate={{ opacity: 1, scale: 1, rotate: 6 }}
      transition={{ delay, duration: 0.7 }}
      className={`absolute bg-white shadow-xl p-3 ${className}`}
      style={{ border: "1px solid #E8C4C4" }}
    >
      {/* Scrapbook tape */}
      <div
        className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-3 z-10"
        style={{ background: "rgba(240,230,180,0.75)", transform: "translateX(-50%) rotate(-1deg)", borderRadius: 1 }}
      />
      <p
        className="text-[7px] tracking-[0.2em] uppercase text-center text-[#C4A55A] mb-2"
        style={{ fontFamily: "var(--font-ui)" }}
      >
        Baby Shower Bingo
      </p>
      <div className="grid grid-cols-5 gap-0.5">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="w-5 h-5 flex items-center justify-center text-[5px]"
            style={{
              background: filledCells.includes(i) ? "#E8C4C4" : i === 12 ? "#C4A55A" : "#FAF8F5",
              border: "0.5px solid #E8E0D8",
              color: "#2C2C2C",
              fontFamily: "var(--font-ui)",
            }}
          >
            {i === 12 ? "★" : ""}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Polaroid photo mockup
function Polaroid({
  bg,
  label,
  rotate = 0,
  delay = 0,
  className = "",
}: {
  bg: string;
  label: string;
  rotate?: number;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={`absolute bg-white shadow-lg p-1.5 pb-6 ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, border: "1px solid #F0EBE0" }}
    >
      {/* Photo area */}
      <div className="relative overflow-hidden" style={{ background: bg, minWidth: 80, minHeight: 70 }}>
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)" }}
        />
      </div>
      <p
        className="absolute bottom-1 left-0 right-0 text-center text-[7px] text-[#2C2C2C]/50"
        style={{ fontFamily: "var(--font-ui)" }}
      >
        {label}
      </p>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: "linear-gradient(160deg, #FDF9F5 0%, #F8F0E8 40%, #FDF5F0 100%)" }}
    >
      {/* Linen texture overlay */}
      <div className="absolute inset-0 texture-linen opacity-60 pointer-events-none" />

      {/* Photographic grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px",
        }}
      />

      {/* Background scattered flowers */}
      <div className="absolute top-16 left-16 animate-drift opacity-50 pointer-events-none">
        <Flower color="#E8C4C4" size={32} />
      </div>
      <div
        className="absolute top-32 right-20 animate-drift opacity-40 pointer-events-none"
        style={{ animationDelay: "1s" }}
      >
        <Flower color="#9BAD9B" size={24} />
      </div>
      <div
        className="absolute bottom-40 left-12 animate-drift opacity-40 pointer-events-none"
        style={{ animationDelay: "2s" }}
      >
        <Flower color="#C4A55A" size={20} />
      </div>
      <div
        className="absolute bottom-24 right-32 animate-drift opacity-50 pointer-events-none"
        style={{ animationDelay: "0.5s" }}
      >
        <Flower color="#E8C4C4" size={28} />
      </div>
      <div
        className="absolute top-1/2 left-8 animate-drift opacity-30 pointer-events-none hidden lg:block"
        style={{ animationDelay: "3s" }}
      >
        <Flower color="#B5785F" size={18} />
      </div>

      {/* Floating balloons top */}
      <div
        className="absolute top-8 left-1/4 animate-bob hidden lg:block pointer-events-none"
        style={{ animationDelay: "0.3s" }}
      >
        <Balloon color="#E8C4C4" size={36} />
      </div>
      <div
        className="absolute top-4 left-1/3 animate-bob hidden lg:block pointer-events-none"
        style={{ animationDelay: "0.8s" }}
      >
        <Balloon color="#F5E6C8" size={28} />
      </div>
      <div
        className="absolute top-12 right-1/4 animate-bob hidden lg:block pointer-events-none"
        style={{ animationDelay: "1.2s" }}
      >
        <Balloon color="#9BAD9B" size={32} />
      </div>

      {/* Bow top center */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 animate-sway hidden lg:block opacity-50 pointer-events-none">
        <Bow color="#E8C4C4" size={60} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[85vh]">

          {/* Left: Headline + CTAs */}
          <div className="relative z-10 order-2 lg:order-1">
            {/* Floating tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full shadow-sm"
              style={{ background: "white", border: "1px solid #E8C4C4" }}
            >
              <Flower color="#E8C4C4" size={14} />
              <span
                className="text-[10px] tracking-widest uppercase text-[#C9927A]"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                The #1 Baby Shower Platform
              </span>
              <Flower color="#E8C4C4" size={14} />
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
            >
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  lineHeight: 1,
                  color: "#2C2C2C",
                }}
              >
                <span style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", display: "block" }}>
                  Plan the
                </span>
                <span
                  style={{
                    fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
                    display: "block",
                    color: "#C9927A",
                    fontStyle: "italic",
                    fontWeight: 300,
                  }}
                >
                  Perfect
                </span>
                <span style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", display: "block" }}>
                  Baby Shower
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-5 mb-8 text-base lg:text-lg text-[#5A4A42] leading-relaxed max-w-md"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Invitations, themes, games, printables &amp; moodboards — everything to make your celebration unforgettable.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link
                href="/start"
                className="inline-flex items-center gap-2 px-7 py-4 text-white text-sm font-medium tracking-wide rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #C9927A, #B5785F)",
                  fontFamily: "var(--font-ui)",
                }}
              >
                <Bow color="white" size={20} />
                Start Planning Free
              </Link>
              <Link
                href="/themes"
                className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium tracking-wide rounded-full border-2 hover:text-white transition-all"
                style={{
                  borderColor: "#C9927A",
                  color: "#C9927A",
                  fontFamily: "var(--font-ui)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#C9927A";
                  (e.currentTarget as HTMLAnchorElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#C9927A";
                }}
              >
                Explore Themes
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <div className="flex -space-x-2">
                {[
                  { color: "#E8C4C4", letter: "E" },
                  { color: "#9BAD9B", letter: "S" },
                  { color: "#C4A55A", letter: "M" },
                  { color: "#E8D4B8", letter: "A" },
                  { color: "#9BBAD4", letter: "J" },
                ].map(({ color, letter }, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[9px] text-white font-medium shadow-sm"
                    style={{ background: color, fontFamily: "var(--font-ui)" }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} style={{ color: "#C4A55A", fontSize: 12 }}>
                        ★
                      </span>
                    ))}
                </div>
                <p
                  className="text-[10px] text-[#2C2C2C]/50 mt-0.5"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Loved by 50,000+ mamas
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Scrapbook collage */}
          <div className="relative h-[480px] lg:h-[640px] order-1 lg:order-2">
            {/* Large floral invitation */}
            <div className="absolute top-4 left-4 w-48">
              <InvitationCard theme="floral" rotate={-4} delay={0.4} />
            </div>

            {/* Boho invitation overlapping */}
            <div className="absolute top-20 right-2 w-44">
              <InvitationCard theme="boho" rotate={5} delay={0.6} />
            </div>

            {/* Safari invitation lower */}
            <div className="absolute bottom-28 left-16 w-40">
              <InvitationCard theme="safari" rotate={-2} delay={0.8} />
            </div>

            {/* Bingo card */}
            <div className="absolute bottom-16 right-4 w-36">
              <BingoCard delay={1} />
            </div>

            {/* Polaroids */}
            <div className="absolute top-52 left-2 w-20">
              <Polaroid
                bg="linear-gradient(135deg, #F8E0D8, #E8C4B8)"
                label="tablescape"
                rotate={-5}
                delay={0.9}
              />
            </div>
            <div className="absolute top-60 right-36 w-20">
              <Polaroid
                bg="linear-gradient(135deg, #E8F0E8, #C8DCC8)"
                label="florals"
                rotate={4}
                delay={1.1}
              />
            </div>
            <div className="absolute bottom-60 right-8 w-20">
              <Polaroid
                bg="linear-gradient(135deg, #F5E6C8, #E8D4A8)"
                label="details"
                rotate={-3}
                delay={1.2}
              />
            </div>

            {/* Floating balloon cluster */}
            <div className="absolute top-2 right-16 flex gap-1 animate-bob">
              <Balloon color="#E8C4C4" size={28} />
              <Balloon color="#F5E6C8" size={24} style={{ marginTop: 8 }} />
              <Balloon color="#9BAD9B" size={22} />
            </div>

            {/* Bow accent */}
            <div className="absolute top-72 left-36 animate-sway">
              <Bow color="#E8C4C4" size={44} />
            </div>

            {/* Floating flowers on collage */}
            <div className="absolute top-48 right-2 animate-drift">
              <Flower color="#E8C4C4" size={28} />
            </div>
            <div className="absolute bottom-52 right-20 animate-drift" style={{ animationDelay: "1.5s" }}>
              <Flower color="#9BAD9B" size={22} />
            </div>
            <div className="absolute bottom-80 left-40 animate-drift" style={{ animationDelay: "2.5s" }}>
              <Flower color="#C4A55A" size={18} />
            </div>

            {/* Scrapbook tape on main invitation */}
            <div
              className="absolute top-6 left-28 w-14 h-3 z-30"
              style={{
                background: "rgba(240,230,200,0.75)",
                boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
                transform: "rotate(1deg)",
                borderRadius: 1,
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
