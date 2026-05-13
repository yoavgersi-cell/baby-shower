"use client";

import { motion } from "framer-motion";

const floatingShapes = [
  { top: "8%", left: "4%", size: 60, color: "#fce8f1", delay: 0, type: "circle" },
  { top: "15%", right: "6%", size: 44, color: "#ffd0b8", delay: 1, type: "circle" },
  { top: "70%", left: "2%", size: 36, color: "#cddccd", delay: 2, type: "circle" },
  { top: "80%", right: "4%", size: 52, color: "#fce8f1", delay: 0.5, type: "circle" },
  { top: "45%", left: "1%", size: 24, color: "#f9d0e3", delay: 1.5, type: "star" },
  { top: "30%", right: "2%", size: 28, color: "#ffb088", delay: 2.5, type: "star" },
  { top: "60%", right: "8%", size: 20, color: "#cddccd", delay: 3, type: "circle" },
  { top: "20%", left: "12%", size: 16, color: "#f4a8c7", delay: 0.8, type: "dot" },
  { top: "75%", left: "15%", size: 14, color: "#ffb088", delay: 1.8, type: "dot" },
];

function FloatingShape({ shape }: { shape: typeof floatingShapes[0] }) {
  const style: React.CSSProperties = {
    position: "absolute",
    top: shape.top,
    animationDelay: `${shape.delay}s`,
    opacity: 0.5,
  };
  if ("left" in shape && shape.left) style.left = shape.left;
  if ("right" in shape && shape.right) style.right = shape.right;

  if (shape.type === "star") {
    return (
      <div className="animate-float-slow" style={style}>
        <svg width={shape.size} height={shape.size} viewBox="0 0 24 24" fill={shape.color}>
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      </div>
    );
  }
  if (shape.type === "dot") {
    return (
      <div
        className="animate-float rounded-full"
        style={{ ...style, width: shape.size, height: shape.size, background: shape.color }}
      />
    );
  }
  return (
    <div
      className="animate-float rounded-full"
      style={{ ...style, width: shape.size, height: shape.size, background: shape.color }}
    />
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(145deg, #fdf4f7 0%, #fce8f1 25%, #fefdf8 55%, #fff5f0 80%, #fdf9ec 100%)",
        }}
      />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Floating background shapes */}
      {floatingShapes.map((shape, i) => (
        <FloatingShape key={i} shape={shape} />
      ))}

      {/* Large soft blobs */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #f9d0e3 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #ffd0b8 0%, transparent 70%)",
          transform: "translate(20%, 20%)",
        }}
      />

      {/* Left floating card — Invitation Mockup */}
      <div
        className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 hidden lg:block animate-float"
        style={{ animationDuration: "5s" }}
      >
        <div className="bg-white rounded-3xl shadow-xl shadow-blush-100 p-5 w-52 border border-blush-100">
          {/* Floral border strip */}
          <div
            className="h-2 rounded-full mb-4"
            style={{ background: "linear-gradient(90deg, #f4a8c7, #ffd0b8, #a8c2a8)" }}
          />
          <div className="text-center">
            <div className="text-3xl mb-2">🌸</div>
            <p
              className="text-blush-700 font-bold text-sm leading-tight mb-1"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Baby Shower
            </p>
            <p className="text-gray-400 text-xs mb-3">Join us to celebrate</p>
            <div className="space-y-1">
              <div className="h-1.5 bg-blush-100 rounded-full w-3/4 mx-auto" />
              <div className="h-1.5 bg-cream-200 rounded-full w-1/2 mx-auto" />
              <div className="h-1.5 bg-sage-100 rounded-full w-2/3 mx-auto" />
            </div>
          </div>
          <div
            className="h-2 rounded-full mt-4"
            style={{ background: "linear-gradient(90deg, #a8c2a8, #ffd0b8, #f4a8c7)" }}
          />
          <div className="mt-3 text-center">
            <span className="text-xs text-blush-400 font-semibold bg-blush-50 px-2 py-0.5 rounded-full">
              Invitation
            </span>
          </div>
        </div>
      </div>

      {/* Right floating card — Theme Preview */}
      <div
        className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 hidden lg:block animate-float"
        style={{ animationDuration: "6s", animationDelay: "1s" }}
      >
        <div className="bg-white rounded-3xl shadow-xl shadow-peach-100 p-5 w-52 border border-peach-100">
          <div
            className="rounded-2xl h-28 flex items-center justify-center mb-4"
            style={{
              background: "linear-gradient(135deg, #fbf0cc 0%, #ffd0b8 100%)",
            }}
          >
            <div className="text-center">
              <div className="text-4xl">🧸</div>
              <div className="text-2xl mt-1">🎀 🍯</div>
            </div>
          </div>
          <p
            className="text-gray-800 font-bold text-sm mb-1"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Teddy Bear Theme
          </p>
          <p className="text-gray-400 text-xs mb-3">Warm, cozy & adorable</p>
          <div className="flex gap-1">
            {["#f7e4a1", "#ffd0b8", "#f4a8c7", "#cddccd"].map((c) => (
              <div key={c} className="w-5 h-5 rounded-full border-2 border-white shadow-sm" style={{ background: c }} />
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-peach-500 font-semibold">Trending 🔥</span>
            <span className="text-xs text-gray-400">12k saves</span>
          </div>
        </div>
      </div>

      {/* Floating emoji elements */}
      <div className="absolute bottom-32 left-8 lg:left-72 flex gap-3 text-2xl animate-bounce-gentle hidden sm:flex">
        <span style={{ animationDelay: "0s" }}>🎀</span>
        <span style={{ animationDelay: "0.3s" }}>🧸</span>
        <span style={{ animationDelay: "0.6s" }}>🎈</span>
        <span style={{ animationDelay: "0.9s" }}>⭐</span>
        <span style={{ animationDelay: "1.2s" }}>🌸</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blush-200 rounded-full shadow-sm shadow-blush-100">
              <span className="text-sm">✨</span>
              <span className="text-xs sm:text-sm font-bold text-blush-600 tracking-wide">
                The #1 Baby Shower Planning Platform
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants}>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              <span
                className="block gradient-text"
                style={{
                  background: "linear-gradient(135deg, #e04880 0%, #cd2d62 50%, #ab1f4d 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Plan the Perfect
              </span>
              <span
                className="block gradient-text mt-1"
                style={{
                  background: "linear-gradient(135deg, #f4a8c7 0%, #e04880 40%, #cd2d62 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Baby Shower
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed font-medium"
            style={{ fontFamily: "var(--font-nunito), sans-serif" }}
          >
            Create invitations, games, printables, themes, and unforgettable baby shower
            moments — all in one place.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
          >
            <a
              href="#tools"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-blush-500 hover:bg-blush-600 text-white font-bold text-base rounded-2xl shadow-lg shadow-blush-200 hover:shadow-xl hover:shadow-blush-300 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-nunito), sans-serif" }}
            >
              Start Planning
              <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
            </a>
            <a
              href="#themes"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 hover:bg-white text-blush-600 font-bold text-base rounded-2xl border-2 border-blush-200 hover:border-blush-400 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-nunito), sans-serif" }}
            >
              Explore Themes
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 mt-2"
          >
            {[
              { icon: "💕", label: "50,000+ Mamas Planning" },
              { icon: "🎨", label: "500+ Themes" },
              { icon: "🆓", label: "Free to Start" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <span className="text-base">{item.icon}</span>
                <span className="text-sm font-semibold text-gray-500">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="white"
            fillOpacity="0.6"
          />
        </svg>
      </div>
    </section>
  );
}
