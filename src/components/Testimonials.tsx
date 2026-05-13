"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah E.",
    role: "Mother of Lily",
    theme: "Garden Botanica Theme",
    quote:
      "I planned my entire baby shower in one afternoon using this platform. The invitation maker is stunning — my guests thought I hired a designer. The botanical theme was absolutely perfect for our little one.",
  },
  {
    name: "Michelle K.",
    role: "Mother of twins Oliver & Ava",
    theme: "Neutral Luxe Theme",
    quote:
      "The bingo generator saved me so much stress. We printed 20 cards in minutes and everyone had a wonderful time. The neutral luxe aesthetic was exactly what I wanted — refined without being cold.",
  },
  {
    name: "Jessica P.",
    role: "Mother of Noah",
    theme: "Safari Serenity Theme",
    quote:
      "The RSVP website feature is a genuine game changer. I simply sent the link and tracked responses in real time. Everything from the checklist to the printables felt beautiful and considered.",
  },
];

const stats = [
  { value: "50,000+", label: "Showers Planned" },
  { value: "4.9 / 5", label: "Average Rating" },
  { value: "500+", label: "Themes Available" },
  { value: "100%", label: "Free to Start" },
];

export default function Testimonials() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "#FAF8F5" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-[#C4A55A]" />
            <span
              className="text-[10px] tracking-[0.25em] uppercase text-[#C4A55A]"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Kind Words
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#2C2C2C] leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            From the Celebrations We&apos;ve Helped Create
          </motion.h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col"
            >
              {/* Large quotation mark */}
              <div
                className="text-[80px] leading-none text-[#E8E0D8] mb-2 select-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  lineHeight: 0.8,
                }}
              >
                &ldquo;
              </div>

              {/* Quote */}
              <p
                className="text-[#2C2C2C]/70 text-base leading-relaxed mb-6 flex-1 italic"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "1.05rem" }}
              >
                {t.quote}
              </p>

              {/* Separator */}
              <div className="w-8 h-px bg-[#E8E0D8] mb-5" />

              {/* Author */}
              <div>
                <p
                  className="text-sm text-[#2C2C2C] mb-0.5"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  {t.name}
                </p>
                <p
                  className="text-[11px] tracking-[0.1em] uppercase text-[#2C2C2C]/40"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {t.role}
                </p>
                <p
                  className="text-[10px] tracking-[0.08em] uppercase text-[#C4A55A] mt-1"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {t.theme}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-[#E8E0D8] pt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div
                  className="text-3xl text-[#2C2C2C] mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-[10px] tracking-[0.15em] uppercase text-[#2C2C2C]/45"
                  style={{ fontFamily: "var(--font-ui)" }}
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
