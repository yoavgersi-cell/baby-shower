"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProductMockup } from "@/components/ui/ProductMockup";

function FloatingMockup({
  type,
  accent,
  bg,
  title,
  className,
  delay = 0,
  rotate = 0,
  style,
}: {
  type: "invitation" | "bingo" | "bundle" | "sign" | "checklist" | "game";
  accent: string;
  bg: string;
  title?: string;
  className?: string;
  delay?: number;
  rotate?: number;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.34, 1.1, 0.64, 1] }}
      className={`absolute rounded-xl overflow-hidden shadow-xl ${className ?? ""}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        border: "1px solid #F0EBE4",
        ...style,
      }}
    >
      <ProductMockup type={type} accentColor={accent} bgColor={bg} title={title} />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{
        background: "linear-gradient(160deg,#FDF9F5 0%,#F8F0E8 60%,#FDF9F5 100%)",
      }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle,#2C2C2C 1px,transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-16 pb-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-64px)]">

          {/* Left: value prop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-[10px] font-medium"
              style={{
                background: "white",
                border: "1px solid #E8C4C4",
                color: "#C9927A",
                fontFamily: "var(--font-ui)",
              }}
            >
              <span>⭐</span> 50,000+ downloads · Trusted by mamas worldwide
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-5 leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                color: "#2C2C2C",
                fontSize: "clamp(2.2rem,5vw,4rem)",
                lineHeight: 1.1,
              }}
            >
              Baby Shower Invitations, Games & Printables —{" "}
              <span style={{ color: "#C9927A", fontStyle: "italic" }}>Ready to Download</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8 text-lg text-[#5A4A42]/70 leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300, maxWidth: "36rem" }}
            >
              Browse editable invitations, printable games, party signs, bundles, and planning
              guides — all instant download, all beautifully designed.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                style={{
                  background: "linear-gradient(135deg,#C9927A,#B5785F)",
                  fontFamily: "var(--font-ui)",
                }}
              >
                Shop Baby Shower Templates
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/freebies"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 text-sm font-semibold rounded-full hover:bg-[#2C2C2C] hover:text-white hover:border-[#2C2C2C] transition-all"
                style={{
                  borderColor: "#2C2C2C",
                  color: "#2C2C2C",
                  fontFamily: "var(--font-ui)",
                }}
              >
                Download Free Checklist
              </Link>
            </motion.div>

            {/* Key value props */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-x-6 gap-y-2"
            >
              {[
                ["↓", "Instant Download"],
                ["✎", "Editable in Canva"],
                ["✓", "Print at Home"],
                ["♾", "Unlimited Prints"],
              ].map(([icon, label]) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 text-sm text-[#2C2C2C]/60"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  <span style={{ color: "#C9927A", fontWeight: "bold" }}>{icon}</span> {label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: product mockup collage */}
          <div className="relative h-[520px] hidden lg:block">
            {/* Invitation */}
            <FloatingMockup
              type="invitation"
              accent="#C9927A"
              bg="#FDF5EE"
              title="Baby Shower"
              className="w-44 h-60"
              delay={0.3}
              rotate={-4}
              style={{ top: "20px", left: "40px" }}
            />

            {/* Bingo */}
            <FloatingMockup
              type="bingo"
              accent="#9BAD9B"
              bg="#F4F8F4"
              className="w-48 h-52"
              delay={0.5}
              rotate={3}
              style={{ top: "30px", right: "20px" }}
            />

            {/* Bundle */}
            <FloatingMockup
              type="bundle"
              accent="#C4A55A"
              bg="#FAF5EC"
              title="Complete Bundle"
              className="w-40 h-44"
              delay={0.7}
              rotate={-2}
              style={{ bottom: "80px", left: "20px" }}
            />

            {/* Sign */}
            <FloatingMockup
              type="sign"
              accent="#9BAD9B"
              bg="#F4F8F4"
              title="Welcome Baby"
              className="w-36 h-44"
              delay={0.9}
              rotate={5}
              style={{ bottom: "60px", right: "40px" }}
            />

            {/* Checklist — center */}
            <FloatingMockup
              type="checklist"
              accent="#C9927A"
              bg="#FDF8F5"
              className="w-44 h-52"
              delay={1.1}
              rotate={1}
              style={{ top: "140px", left: "110px", zIndex: 10 }}
            />

            {/* Instant Download badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 }}
              className="absolute flex items-center gap-2 bg-white rounded-2xl shadow-xl px-4 py-3"
              style={{ top: "10px", left: "200px", border: "1px solid #F0EBE4", zIndex: 20 }}
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: "#E8F4E8" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5A8A5A" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#2C2C2C]" style={{ fontFamily: "var(--font-ui)" }}>
                  Instant Download
                </p>
                <p className="text-[9px] text-[#2C2C2C]/40" style={{ fontFamily: "var(--font-ui)" }}>
                  PDF ready in seconds
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 50" fill="none" preserveAspectRatio="none" className="w-full h-10">
          <path d="M0 50L0 25Q360 0 720 25Q1080 50 1440 25L1440 50Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
