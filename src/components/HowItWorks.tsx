"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    emoji: "🎨",
    title: "Choose Your Theme",
    description:
      "Browse 500+ beautiful themes or take our 60-second quiz to find your perfect match. From boho florals to safari adventures — there's a theme for every mama.",
    color: "#e04880",
    bg: "linear-gradient(135deg, #fdf4f7, #fce8f1)",
    border: "#f9d0e3",
  },
  {
    step: "02",
    emoji: "✏️",
    title: "Customize Everything",
    description:
      "Personalize your invitations, games, and printables with our easy drag-and-drop tools. Add your name, date, and details — then make it uniquely yours.",
    color: "#486948",
    bg: "linear-gradient(135deg, #f4f7f4, #e6ede6)",
    border: "#cddccd",
  },
  {
    step: "03",
    emoji: "🎉",
    title: "Share & Celebrate",
    description:
      "Download and print your creations, or share digital versions instantly. Your guests will be amazed — and you can finally relax and enjoy the shower!",
    color: "#d49a23",
    bg: "linear-gradient(135deg, #fefdf8, #fdf9ec)",
    border: "#fbf0cc",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28"
      style={{ background: "linear-gradient(180deg, #fefdf8 0%, #fdf4f7 50%, #fefdf8 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest text-blush-500 mb-3"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Plan Your Dream Shower
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #e04880, #cd2d62)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              in 3 Simple Steps
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-nunito), sans-serif" }}
          >
            No design experience needed. We make it easy for every mama and party planner.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-20 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blush-200 via-sage-200 to-cream-300 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="relative mb-6">
                  {/* Outer ring */}
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center relative"
                    style={{
                      background: step.bg,
                      border: `2px solid ${step.border}`,
                      boxShadow: `0 8px 32px ${step.color}20`,
                    }}
                  >
                    <span className="text-4xl">{step.emoji}</span>
                    {/* Step number badge */}
                    <div
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md"
                      style={{ background: step.color }}
                    >
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Arrow between steps (mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden text-2xl mb-6 text-gray-300 rotate-90">→</div>
                )}

                <h3
                  className="text-xl md:text-2xl font-bold text-gray-800 mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif", color: step.color }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xs"
                  style={{ fontFamily: "var(--font-nunito), sans-serif" }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#tools"
            className="inline-flex items-center gap-2 px-10 py-4 bg-blush-500 hover:bg-blush-600 text-white font-bold text-base rounded-2xl shadow-lg shadow-blush-200 hover:shadow-xl hover:shadow-blush-300 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            style={{ fontFamily: "var(--font-nunito), sans-serif" }}
          >
            🎀 Start Planning — It&apos;s Free
          </a>
        </motion.div>
      </div>
    </section>
  );
}
