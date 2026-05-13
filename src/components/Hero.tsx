"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const FloralSprig = () => (
  <svg viewBox="0 0 60 80" fill="none" className="w-full h-full opacity-30">
    <path
      d="M30 75 C30 75 30 20 30 5"
      stroke="#9BAD9B"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M30 35 C20 25 10 28 8 20"
      stroke="#9BAD9B"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M30 45 C40 35 50 38 52 30"
      stroke="#9BAD9B"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M30 25 C22 18 18 10 20 5"
      stroke="#9BAD9B"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <ellipse
      cx="8"
      cy="20"
      rx="5"
      ry="3"
      fill="#9BAD9B"
      opacity="0.4"
      transform="rotate(-30 8 20)"
    />
    <ellipse
      cx="52"
      cy="30"
      rx="5"
      ry="3"
      fill="#9BAD9B"
      opacity="0.4"
      transform="rotate(20 52 30)"
    />
    <ellipse
      cx="20"
      cy="5"
      rx="4"
      ry="2.5"
      fill="#9BAD9B"
      opacity="0.4"
      transform="rotate(-45 20 5)"
    />
  </svg>
);

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FAF8F5 0%, #F5F0E8 50%, #FAF8F5 100%)",
      }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2C2C2C 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Decorative floral elements */}
      <div className="absolute top-20 left-8 w-16 h-24 hidden lg:block">
        <FloralSprig />
      </div>
      <div className="absolute bottom-32 right-12 w-12 h-20 hidden lg:block rotate-180">
        <FloralSprig />
      </div>

      {/* Thin decorative lines */}
      <div className="absolute top-1/3 left-0 w-24 h-px bg-gradient-to-r from-transparent to-[#C4A55A]/30" />
      <div className="absolute bottom-1/3 right-0 w-24 h-px bg-gradient-to-l from-transparent to-[#C4A55A]/30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-80px)]">
          {/* Left: Editorial content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative z-10 py-16 lg:py-0"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-[#C4A55A]" />
              <span
                className="text-[10px] tracking-[0.25em] uppercase text-[#C4A55A]"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                The Premium Planning Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="text-[#2C2C2C] leading-[0.95] mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
              }}
            >
              Plan the
              <br />
              <span className="italic font-light" style={{ color: "#B5785F" }}>
                Perfect
              </span>
              <br />
              Baby Shower
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[#2C2C2C]/60 leading-relaxed mb-10 max-w-md text-base lg:text-lg"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Curated themes, bespoke invitations, printable games and planning
              tools — everything to create an unforgettable celebration.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <Link
                href="/start"
                className="inline-block px-8 py-4 bg-[#2C2C2C] text-white text-[11px] tracking-[0.15em] uppercase hover:bg-[#3D2B1F] transition-colors duration-300"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Start Planning
              </Link>
              <Link
                href="/themes"
                className="inline-block px-8 py-4 border border-[#2C2C2C] text-[#2C2C2C] text-[11px] tracking-[0.15em] uppercase hover:bg-[#2C2C2C] hover:text-white transition-all duration-300"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Explore Themes
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-8 pt-8 border-t border-[#E8E0D8]"
            >
              {[
                ["50,000+", "Showers Planned"],
                ["500+", "Curated Themes"],
                ["Free", "To Get Started"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div
                    className="text-xl text-[#2C2C2C]"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    {num}
                  </div>
                  <div
                    className="text-[10px] tracking-[0.12em] uppercase text-[#2C2C2C]/50 mt-0.5"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Layered invitation mockups */}
          <div className="relative h-[520px] lg:h-[640px] hidden lg:block">
            {/* Main invitation card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute bg-white shadow-2xl w-64"
              style={{
                height: "352px",
                top: "32px",
                left: "96px",
                transform: "rotate(-4deg)",
              }}
            >
              <div
                className="absolute border border-[#E8E0D8] pointer-events-none"
                style={{ inset: "8px" }}
              />
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-px bg-[#C4A55A] mb-4" />
                <p
                  className="text-[9px] tracking-[0.2em] uppercase text-[#2C2C2C]/50 mb-2"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  You are invited to a
                </p>
                <p
                  className="text-2xl text-[#2C2C2C] leading-tight mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
                >
                  Baby Shower
                </p>
                <p
                  className="text-[8px] tracking-[0.15em] uppercase text-[#C4A55A] mb-4"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  for Emma &amp; James
                </p>
                <div className="w-8 h-px bg-[#E8E0D8] mb-4" />
                <p
                  className="text-[8px] text-[#2C2C2C]/40"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Saturday, June 14th · 2pm
                </p>
                <p
                  className="text-[8px] text-[#2C2C2C]/40 mt-1"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  The Garden Room, Mayfair
                </p>
              </div>
            </motion.div>

            {/* Second card behind */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute w-56 bg-[#F5F0E8] shadow-xl border border-[#E8E0D8]"
              style={{
                height: "320px",
                top: "80px",
                left: "176px",
                transform: "rotate(5deg)",
              }}
            >
              <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 mb-4 border border-[#C4A55A]/30 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 border border-[#C4A55A]/50 rounded-full" />
                </div>
                <p
                  className="text-lg text-[#2C2C2C]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
                >
                  Garden Botanica
                </p>
                <p
                  className="text-[9px] tracking-[0.2em] uppercase text-[#2C2C2C]/40 mt-1"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Theme Collection
                </p>
                <div className="flex gap-1.5 mt-4">
                  {["#F5F0E8", "#E8C4C4", "#9BAD9B", "#D4B896"].map((c) => (
                    <div
                      key={c}
                      className="w-5 h-5 rounded-full"
                      style={{ background: c }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Small RSVP card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute w-40 h-24 bg-white shadow-xl border border-[#E8E0D8]"
              style={{ bottom: "112px", left: "32px", transform: "rotate(2deg)" }}
            >
              <div className="h-full flex flex-col items-center justify-center p-4 text-center">
                <p
                  className="text-[8px] tracking-[0.25em] uppercase text-[#C4A55A] mb-1"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  RSVP
                </p>
                <p
                  className="text-sm text-[#2C2C2C]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Kindly reply by
                </p>
                <p
                  className="text-[8px] text-[#2C2C2C]/50 mt-0.5"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  June 1st, 2025
                </p>
              </div>
            </motion.div>

            {/* Theme palette card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bg-[#FAF8F5] shadow-xl border border-[#E8E0D8]"
              style={{
                bottom: "80px",
                right: "60px",
                transform: "rotate(3deg)",
              }}
            >
              <div className="p-4">
                <p
                  className="text-[8px] tracking-[0.2em] uppercase text-[#2C2C2C]/40 mb-3"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Theme Palette
                </p>
                <div className="flex gap-1.5 mb-3">
                  {[
                    "#F5F0E8",
                    "#E8C4C4",
                    "#9BAD9B",
                    "#D4B896",
                    "#C4A55A",
                  ].map((c) => (
                    <div
                      key={c}
                      className="w-6 h-6 rounded-full border border-white shadow-sm"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <p
                  className="text-sm text-[#2C2C2C]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  Garden Botanica
                </p>
              </div>
            </motion.div>

            {/* Printable set card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute w-44 h-28 bg-[#3D2B1F] shadow-xl flex flex-col items-center justify-center"
              style={{ bottom: "64px", right: "32px", transform: "rotate(3deg)" }}
            >
              <p
                className="text-[8px] tracking-[0.2em] uppercase text-white/50 mb-2"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Printable Set
              </p>
              <p
                className="text-base text-white font-light"
                style={{ fontFamily: "var(--font-display)" }}
              >
                12 Designs
              </p>
              <div className="w-8 h-px bg-[#C4A55A] mt-2" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-[9px] tracking-[0.2em] uppercase text-[#2C2C2C]/30"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          Discover
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[#2C2C2C]/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
