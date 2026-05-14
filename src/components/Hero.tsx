"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: "linear-gradient(160deg, #FDF9F5 0%, #F8F0E8 100%)" }}
    >
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2C2C2C 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 w-full">

          {/* Left: Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-[10px] tracking-widest uppercase"
              style={{
                background: "white",
                border: "1px solid #E8C4C4",
                color: "#C9927A",
                fontFamily: "var(--font-ui)",
              }}
            >
              <span style={{ color: "#C9927A" }}>✦</span> The #1 Baby Shower Platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                lineHeight: 1.05,
                color: "#2C2C2C",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                  display: "block",
                }}
              >
                Plan the
              </span>
              <span
                style={{
                  fontSize: "clamp(3rem, 7vw, 5.5rem)",
                  display: "block",
                  color: "#C9927A",
                  fontStyle: "italic",
                  fontWeight: 300,
                }}
              >
                Perfect
              </span>
              <span
                style={{
                  fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                  display: "block",
                }}
              >
                Baby Shower
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-5 mb-8 text-lg text-[#5A4A42]/70 leading-relaxed max-w-md"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Invitations, themes, printable games &amp; planning tools —
              beautifully designed and ready to download.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 text-white text-sm font-medium tracking-wide rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                style={{
                  background: "linear-gradient(135deg, #C9927A, #B5785F)",
                  fontFamily: "var(--font-ui)",
                }}
              >
                Browse Templates
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/themes"
                className="inline-flex items-center gap-2 px-8 py-4 text-[#2C2C2C] text-sm font-medium tracking-wide rounded-full border-2 hover:border-[#C9927A] hover:text-[#C9927A] transition-all"
                style={{
                  borderColor: "#E8E0D8",
                  fontFamily: "var(--font-ui)",
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
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {(
                  [
                    ["#E8C4C4", "S"],
                    ["#9BAD9B", "E"],
                    ["#C4A55A", "M"],
                    ["#E8D4B8", "A"],
                    ["#9BBAD4", "J"],
                  ] as [string, string][]
                ).map(([c, letter], i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-[9px] text-white font-bold shadow-sm"
                    style={{
                      background: c,
                      fontFamily: "var(--font-ui)",
                    }}
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
          </motion.div>

          {/* Right: Real photo collage */}
          <div className="relative h-[500px] lg:h-[640px]">
            {/* Main large photo */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute top-0 left-0 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1519340333755-56e9c1d04579?w=600&q=80&fit=crop"
                alt="Baby shower decor"
                fill
                className="object-cover"
                sizes="256px"
                priority
              />
              {/* Scrapbook tape */}
              <div
                className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-3.5 rounded-sm opacity-70"
                style={{ background: "rgba(240,230,200,0.8)" }}
              />
            </motion.div>

            {/* Second photo overlapping */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 4 }}
              animate={{ opacity: 1, y: 0, rotate: 4 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute top-24 right-0 w-56 h-72 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&q=80&fit=crop"
                alt="Baby shower celebration"
                fill
                className="object-cover"
                sizes="224px"
              />
            </motion.div>

            {/* Third photo bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute bottom-8 left-12 w-52 h-60 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80&fit=crop"
                alt="Baby shower balloons"
                fill
                className="object-cover"
                sizes="208px"
              />
            </motion.div>

            {/* Small product card overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute bottom-28 right-4 w-40 bg-white rounded-2xl shadow-2xl p-4"
              style={{ border: "1px solid #F0EBE4" }}
            >
              <div className="relative w-full h-24 rounded-lg overflow-hidden mb-3">
                <Image
                  src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&q=80&fit=crop"
                  alt="Template preview"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
                <div
                  className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-semibold"
                  style={{
                    background: "#E8F0E8",
                    color: "#6A8A6A",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  Free
                </div>
              </div>
              <p
                className="text-xs font-medium text-[#2C2C2C]"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Garden Floral Invite
              </p>
              <div className="flex items-center gap-1 mt-1">
                <span style={{ color: "#C4A55A", fontSize: 10 }}>★★★★★</span>
                <span
                  className="text-[9px] text-[#2C2C2C]/40"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  248
                </span>
              </div>
            </motion.div>

            {/* Download count badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute top-8 right-12 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3"
              style={{ border: "1px solid #F0EBE4" }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "#FDF5EE" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9927A"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </div>
              <div>
                <p
                  className="text-sm font-bold text-[#2C2C2C]"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  50k+
                </p>
                <p
                  className="text-[9px] text-[#2C2C2C]/40"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Downloads
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-12"
        >
          <path
            d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
