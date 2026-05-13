"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Choose Your Theme",
    description:
      "Browse our curated collection of 500+ themes or take our style finder to discover the palette and aesthetic that speaks to you.",
  },
  {
    number: "02",
    title: "Customise Everything",
    description:
      "Personalise invitations, games, and printables with your details. Our tools make editing intuitive and the results look professionally designed.",
  },
  {
    number: "03",
    title: "Share & Celebrate",
    description:
      "Download and print your creations, or share digital versions instantly. Your guests will be delighted — and you can relax and savour the day.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32"
      style={{ background: "#FDFBF7" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-xl mb-20">
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
              How It Works
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
            Plan Your Dream Shower in Three Steps
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[16.5%] right-[16.5%] h-px"
            style={{ background: "#E8E0D8" }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative flex flex-col"
            >
              {/* Step number — large, thin */}
              <div
                className="text-[5rem] leading-none text-[#2C2C2C]/08 mb-6 select-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  color: "rgba(44,44,44,0.08)",
                  lineHeight: 1,
                  fontSize: "5rem",
                }}
              >
                {step.number}
              </div>

              {/* Step dot on line */}
              <div className="absolute top-[2.2rem] left-0">
                <div className="w-4 h-4 rounded-full border-2 border-[#C4A55A] bg-[#FDFBF7]" />
              </div>

              <h3
                className="text-xl text-[#2C2C2C] mb-3"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm text-[#2C2C2C]/55 leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {step.description}
              </p>

              {/* Mobile step arrow */}
              {index < steps.length - 1 && (
                <div className="lg:hidden mt-8 flex items-center gap-2">
                  <div className="flex-1 h-px bg-[#E8E0D8]" />
                  <span className="text-[#E8E0D8] text-sm">↓</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 flex items-center gap-6"
        >
          <Link
            href="/start"
            className="inline-block px-8 py-4 bg-[#2C2C2C] text-white text-[11px] tracking-[0.15em] uppercase hover:bg-[#3D2B1F] transition-colors duration-300"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            Start Planning — It&apos;s Free
          </Link>
          <div className="w-8 h-px bg-[#E8E0D8]" />
        </motion.div>
      </div>
    </section>
  );
}
