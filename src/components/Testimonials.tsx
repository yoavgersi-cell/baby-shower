"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    initials: "SE",
    name: "Sarah E.",
    role: "Mom of Lily",
    quote:
      "I planned my entire baby shower in one afternoon using this platform. The invitation maker is stunning — my guests thought I hired a designer! The teddy bear theme was absolutely perfect for our little one.",
    rating: 5,
    avatarBg: "linear-gradient(135deg, #fce8f1, #f4a8c7)",
    avatarColor: "#cd2d62",
    theme: "Teddy Bear Theme",
  },
  {
    initials: "MK",
    name: "Michelle K.",
    role: "Mom of twins Oliver & Ava",
    quote:
      "The bingo generator saved me so much stress! We printed 20 cards in minutes and everyone had a blast. The garden party theme was exactly the aesthetic I wanted. 10/10 would recommend to every mama-to-be.",
    rating: 5,
    avatarBg: "linear-gradient(135deg, #e6ede6, #a8c2a8)",
    avatarColor: "#3b543b",
    theme: "Garden Party Theme",
  },
  {
    initials: "JP",
    name: "Jessica P.",
    role: "Mom of Noah",
    quote:
      "The RSVP website feature is a game changer. I just sent the link and tracked responses in real time — no more chasing people down! Everything from the checklist to the printables was beautiful and professional.",
    rating: 5,
    avatarBg: "linear-gradient(135deg, #fff5f0, #ffb088)",
    avatarColor: "#c82e0e",
    theme: "Safari Adventure Theme",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#e8b83a">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ background: "linear-gradient(180deg, #fdf4f7 0%, #fefdf8 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest text-blush-500 mb-3"
          >
            Mama Love
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            50,000+ Mamas
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #e04880, #cd2d62)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Are Planning Their Dream Shower
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
            Real stories from real mamas who made their special day unforgettable.
          </motion.p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-7 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col gap-5 relative overflow-hidden"
              style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}
            >
              {/* Decorative circle */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20"
                style={{ background: t.avatarBg }}
              />

              {/* Quote mark */}
              <div
                className="text-5xl leading-none font-bold opacity-20"
                style={{ color: t.avatarColor, fontFamily: "Georgia, serif", lineHeight: 1 }}
              >
                "
              </div>

              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Quote */}
              <p
                className="text-gray-600 text-sm sm:text-base leading-relaxed flex-1 -mt-2"
                style={{ fontFamily: "var(--font-nunito), sans-serif" }}
              >
                "{t.quote}"
              </p>

              {/* Theme tag */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold w-fit"
                style={{
                  background: t.avatarBg,
                  color: t.avatarColor,
                }}
              >
                <span>🎀</span>
                {t.theme}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-1 border-t border-gray-100">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold shadow-sm flex-shrink-0"
                  style={{
                    background: t.avatarBg,
                    color: t.avatarColor,
                    border: `2px solid ${t.avatarColor}30`,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    className="text-sm font-bold text-gray-800"
                    style={{ fontFamily: "var(--font-nunito), sans-serif" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
                <div className="ml-auto">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-blush-100"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { value: "50,000+", label: "Happy Mamas", icon: "💕" },
              { value: "4.9/5", label: "Average Rating", icon: "⭐" },
              { value: "500+", label: "Themes Available", icon: "🎨" },
              { value: "100%", label: "Free to Start", icon: "🆓" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div
                  className="text-2xl md:text-3xl font-bold text-gray-800"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm text-gray-500 font-medium"
                  style={{ fontFamily: "var(--font-nunito), sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
