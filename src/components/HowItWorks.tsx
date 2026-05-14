"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Flower from "@/components/ui/Flower";
import Balloon from "@/components/ui/Balloon";
import Bow from "@/components/ui/Bow";

// Step 1 preview: CSS moodboard theme grid
function Step1Preview() {
  const swatches = [
    { bg: "linear-gradient(135deg, #E8F0E4, #C8DEB0)", label: "Garden", flower: "#9BAD9B" },
    { bg: "linear-gradient(135deg, #FDF0F0, #F0D8D0)", label: "Rose", flower: "#E8C4C4" },
    { bg: "linear-gradient(135deg, #F5ECD8, #D4B896)", label: "Safari", flower: "#C4A55A" },
    { bg: "linear-gradient(135deg, #FFE8F4, #FFB0D0)", label: "Pink", flower: "#FF69A0" },
  ];
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden p-4 shadow-xl"
      style={{ background: "white", border: "1px solid #EDE5DC" }}
    >
      {/* Scrapbook tape */}
      <div
        className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-12 h-3 opacity-70 z-10"
        style={{ background: "rgba(240,230,180,0.8)", borderRadius: 1 }}
      />
      <p className="text-[8px] tracking-[0.2em] uppercase text-center text-[#C9927A] mb-3" style={{ fontFamily: "var(--font-ui)" }}>
        Choose Your Vibe
      </p>
      <div className="grid grid-cols-2 gap-2">
        {swatches.map((s, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden flex flex-col items-center justify-center py-4 cursor-pointer hover:scale-105 transition-transform duration-200"
            style={{ background: s.bg, minHeight: 80 }}
          >
            <div className="mb-1.5"><Flower color={s.flower} size={24} /></div>
            <p className="text-[7px] tracking-wider uppercase text-white/80 font-medium drop-shadow" style={{ fontFamily: "var(--font-ui)" }}>{s.label}</p>
            {/* Selected indicator on first */}
            {i === 0 && (
              <div className="absolute top-1.5 right-1.5 w-3 h-3 rounded-full bg-white flex items-center justify-center shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9927A" }} />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-center">
        <div className="px-4 py-1.5 rounded-full text-[7px] tracking-widest uppercase text-white" style={{ background: "linear-gradient(135deg, #C9927A, #B5785F)", fontFamily: "var(--font-ui)" }}>
          Explore 500+ Themes
        </div>
      </div>
    </div>
  );
}

// Step 2 preview: CSS invitation editor
function Step2Preview() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden p-4 shadow-xl"
      style={{ background: "white", border: "1px solid #EDE5DC" }}
    >
      <div
        className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-12 h-3 opacity-70 z-10"
        style={{ background: "rgba(240,230,180,0.8)", borderRadius: 1 }}
      />
      <p className="text-[8px] tracking-[0.2em] uppercase text-center text-[#C9927A] mb-3" style={{ fontFamily: "var(--font-ui)" }}>
        Customise Everything
      </p>
      {/* Editor layout */}
      <div className="flex gap-2">
        {/* Mini invitation */}
        <div
          className="flex-shrink-0 w-28 bg-white shadow-md flex flex-col items-center justify-between py-3 px-2"
          style={{ border: "0.5px solid #E8C4C4", minHeight: 120 }}
        >
          <div className="absolute inset-3 border opacity-10" style={{ borderColor: "#C4A55A" }} />
          <Flower color="#E8C4C4" size={18} />
          <div className="w-8 h-px" style={{ background: "#C4A55A" }} />
          <div className="text-center">
            <p className="text-[5px] tracking-wider uppercase text-[#2C2C2C]/50 mb-0.5" style={{ fontFamily: "var(--font-ui)" }}>Baby Shower</p>
            <p className="text-[9px]" style={{ fontFamily: "var(--font-display)", color: "#2C2C2C" }}>Emma &amp; James</p>
          </div>
          <div className="w-6 h-px" style={{ background: "#E8E0D8" }} />
          <p className="text-[5px] text-[#2C2C2C]/40" style={{ fontFamily: "var(--font-ui)" }}>June 14 · 2pm</p>
          {/* Cursor */}
          <div
            className="absolute -right-0.5 top-1/2 w-0.5 h-4 rounded"
            style={{ background: "#C9927A", animation: "bob 1s ease-in-out infinite" }}
          />
        </div>
        {/* Controls panel */}
        <div className="flex-1 space-y-2">
          <div>
            <p className="text-[6px] text-[#2C2C2C]/50 mb-0.5" style={{ fontFamily: "var(--font-ui)" }}>Event Name</p>
            <div className="w-full h-5 rounded px-2 flex items-center" style={{ background: "#FAF8F5", border: "0.5px solid #E8C4C4" }}>
              <p className="text-[6px] text-[#2C2C2C]/70" style={{ fontFamily: "var(--font-ui)" }}>Emma&apos;s Baby Shower</p>
            </div>
          </div>
          <div>
            <p className="text-[6px] text-[#2C2C2C]/50 mb-0.5" style={{ fontFamily: "var(--font-ui)" }}>Theme Color</p>
            <div className="flex gap-1">
              {["#E8C4C4","#9BAD9B","#C4A55A","#B5785F"].map((c, i) => (
                <div
                  key={c}
                  className="w-4 h-4 rounded-full"
                  style={{ background: c, border: i === 0 ? "2px solid #2C2C2C" : "1px solid transparent" }}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="text-[6px] text-[#2C2C2C]/50 mb-0.5" style={{ fontFamily: "var(--font-ui)" }}>Font</p>
            <div className="w-full h-5 rounded px-2 flex items-center justify-between" style={{ background: "#FAF8F5", border: "0.5px solid #E8C4C4" }}>
              <p className="text-[6px] text-[#2C2C2C]/70" style={{ fontFamily: "var(--font-display)" }}>Cormorant</p>
              <span className="text-[6px] text-[#2C2C2C]/40">▾</span>
            </div>
          </div>
          <div className="flex gap-1 pt-1">
            <div className="flex-1 h-5 rounded flex items-center justify-center text-[5px] text-white" style={{ background: "linear-gradient(90deg, #C9927A, #B5785F)", fontFamily: "var(--font-ui)" }}>Preview</div>
            <div className="flex-1 h-5 rounded flex items-center justify-center text-[5px] text-[#2C2C2C]" style={{ background: "#FAF8F5", border: "0.5px solid #E8E0D8", fontFamily: "var(--font-ui)" }}>Download</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Step 3 preview: Celebration confetti + balloons
function Step3Preview() {
  const confettiColors = ["#E8C4C4","#C4A55A","#9BAD9B","#C9927A","#F5E6C8","#9BBAD4"];
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden p-4 shadow-xl"
      style={{ background: "white", border: "1px solid #EDE5DC" }}
    >
      <div
        className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-12 h-3 opacity-70 z-10"
        style={{ background: "rgba(240,230,180,0.8)", borderRadius: 1 }}
      />
      <p className="text-[8px] tracking-[0.2em] uppercase text-center text-[#C9927A] mb-3" style={{ fontFamily: "var(--font-ui)" }}>
        Share &amp; Celebrate
      </p>
      {/* Confetti dots scattered */}
      <div className="relative h-28 flex items-center justify-center">
        {[
          { t: 5, l: 10, color: confettiColors[0], size: 6 },
          { t: 15, l: 30, color: confettiColors[1], size: 5 },
          { t: 8, l: 55, color: confettiColors[2], size: 7 },
          { t: 20, l: 75, color: confettiColors[3], size: 5 },
          { t: 40, l: 5, color: confettiColors[4], size: 6 },
          { t: 60, l: 20, color: confettiColors[5], size: 5 },
          { t: 55, l: 45, color: confettiColors[0], size: 7 },
          { t: 65, l: 70, color: confettiColors[1], size: 6 },
          { t: 80, l: 15, color: confettiColors[2], size: 5 },
          { t: 75, l: 85, color: confettiColors[3], size: 6 },
          { t: 30, l: 88, color: confettiColors[4], size: 5 },
          { t: 45, l: 60, color: confettiColors[5], size: 4 },
        ].map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-sm"
            style={{
              top: `${dot.t}%`,
              left: `${dot.l}%`,
              width: dot.size,
              height: dot.size,
              background: dot.color,
              opacity: 0.7,
              transform: `rotate(${(i * 37) % 90}deg)`,
            }}
          />
        ))}
        {/* Central balloon cluster */}
        <div className="flex gap-2 items-end animate-bob">
          <Balloon color="#E8C4C4" size={32} />
          <Balloon color="#9BAD9B" size={26} style={{ marginBottom: 8 }} />
          <Balloon color="#C4A55A" size={30} />
          <Balloon color="#C9927A" size={24} style={{ marginBottom: 4 }} />
        </div>
      </div>
      {/* Share buttons row */}
      <div className="flex gap-1.5 mt-2">
        {[
          { label: "Share Link", color: "#C9927A" },
          { label: "Download", color: "#9BAD9B" },
          { label: "Print", color: "#C4A55A" },
        ].map((btn) => (
          <div
            key={btn.label}
            className="flex-1 h-6 rounded-full flex items-center justify-center text-[6px] font-medium text-white"
            style={{ background: btn.color, fontFamily: "var(--font-ui)" }}
          >
            {btn.label}
          </div>
        ))}
      </div>
    </div>
  );
}

const steps = [
  {
    number: "01",
    title: "Choose Your Theme",
    description: "Browse our curated collection of 500+ themes or take our style finder to discover the palette and aesthetic that speaks to you. Save your favourites like a Pinterest board.",
    accent: "#E8C4C4",
    Preview: Step1Preview,
    bgColor: "#FDF8F5",
    flowers: ["#E8C4C4", "#C9927A"],
  },
  {
    number: "02",
    title: "Customise & Create",
    description: "Personalise invitations, games, and printables with your details. Our tools make editing intuitive and the results look professionally designed — no skills needed.",
    accent: "#9BAD9B",
    Preview: Step2Preview,
    bgColor: "#F5F8F5",
    flowers: ["#9BAD9B", "#C4A55A"],
  },
  {
    number: "03",
    title: "Share & Celebrate",
    description: "Download and print your creations, or share digital versions instantly. Your guests will be delighted — and you can relax and savour every single moment.",
    accent: "#C4A55A",
    Preview: Step3Preview,
    bgColor: "#FDF8F0",
    flowers: ["#C4A55A", "#E8C4C4"],
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#FDFBF7" }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 texture-linen opacity-40 pointer-events-none" />

      {/* Background flowers */}
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none animate-drift">
        <Flower color="#E8C4C4" size={60} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 pointer-events-none animate-drift" style={{ animationDelay: "2s" }}>
        <Flower color="#9BAD9B" size={50} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-xl mb-20 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 justify-center"
          >
            <Flower color="#E8C4C4" size={16} />
            <span
              className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A]"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              How It Works
            </span>
            <Flower color="#E8C4C4" size={16} />
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
            Plan Your Dream Shower
            <br />
            <span style={{ color: "#C9927A", fontStyle: "italic" }}>in Three Steps</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => {
            const PreviewComponent = step.Preview;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}
              >
                {/* Preview card */}
                <div className="w-full lg:w-1/2 relative">
                  {/* Decorative number behind */}
                  <div
                    className="absolute -top-8 -left-4 select-none pointer-events-none z-0"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "8rem",
                      fontWeight: 300,
                      color: "rgba(44,44,44,0.04)",
                      lineHeight: 1,
                    }}
                  >
                    {step.number}
                  </div>
                  {/* Floating flowers around card */}
                  <div className="absolute -top-4 -right-4 animate-drift z-10">
                    <Flower color={step.flowers[0]} size={28} />
                  </div>
                  <div className="absolute -bottom-3 -left-3 animate-drift z-10" style={{ animationDelay: "1s" }}>
                    <Flower color={step.flowers[1]} size={22} />
                  </div>
                  <div className="relative z-10">
                    <PreviewComponent />
                  </div>
                </div>

                {/* Text content */}
                <div className="w-full lg:w-1/2">
                  {/* Step badge */}
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 shadow-sm"
                    style={{
                      background: "white",
                      border: `1px solid ${step.accent}`,
                    }}
                  >
                    <div className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[8px] font-bold" style={{ background: step.accent, fontFamily: "var(--font-ui)" }}>
                      {index + 1}
                    </div>
                    <span className="text-[9px] tracking-widest uppercase" style={{ color: step.accent, fontFamily: "var(--font-ui)" }}>Step {step.number}</span>
                  </div>

                  <h3
                    className="text-2xl lg:text-3xl text-[#2C2C2C] mb-4 leading-tight"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm lg:text-base text-[#2C2C2C]/60 leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {step.description}
                  </p>

                  {/* Mini flower decoration */}
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-px" style={{ background: step.accent, opacity: 0.4 }} />
                    <Flower color={step.accent} size={14} />
                    <div className="w-12 h-px" style={{ background: step.accent, opacity: 0.2 }} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          {/* Balloon row */}
          <div className="flex justify-center gap-3 mb-8 animate-bob">
            <Balloon color="#E8C4C4" size={32} />
            <Balloon color="#9BAD9B" size={26} style={{ marginTop: 8 }} />
            <Balloon color="#C4A55A" size={30} />
            <Balloon color="#C9927A" size={24} style={{ marginTop: 6 }} />
            <Balloon color="#9BBAD4" size={28} />
          </div>

          <div className="flex justify-center">
            <Bow color="#E8C4C4" size={50} />
          </div>
          <h3
            className="mt-4 mb-6 text-[#2C2C2C]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            Ready to start planning?
          </h3>
          <Link
            href="/start"
            className="inline-flex items-center gap-3 px-8 py-4 text-white text-sm font-medium tracking-wide rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #C9927A, #B5785F)",
              fontFamily: "var(--font-ui)",
            }}
          >
            <Bow color="rgba(255,255,255,0.8)" size={20} />
            Start Planning — It&apos;s Free
          </Link>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 50" fill="none" preserveAspectRatio="none" className="w-full h-10">
          <path d="M0 50 L0 25 Q360 0 720 25 Q1080 50 1440 25 L1440 50 Z" fill="#FAF6F0" />
        </svg>
      </div>
    </section>
  );
}
