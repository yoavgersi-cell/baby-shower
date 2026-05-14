"use client";
import { motion } from "framer-motion";
import Flower from "@/components/ui/Flower";
import Bow from "@/components/ui/Bow";

// Mini moodboard thumbnail at top of each testimonial card
function MiniMoodboard({ colors, flowerColor }: { colors: string[]; flowerColor: string }) {
  return (
    <div
      className="relative w-full h-12 rounded-lg overflow-hidden mb-3"
      style={{ background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})` }}
    >
      <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-60">
        <Flower color={flowerColor} size={20} />
      </div>
      <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-40">
        <Flower color={flowerColor} size={14} />
      </div>
      <p
        className="absolute inset-0 flex items-center justify-center text-[6px] tracking-widest uppercase text-white/70"
        style={{ fontFamily: "var(--font-ui)" }}
      >
        planmybabyshower.com
      </p>
    </div>
  );
}

// Pinterest "saved from" tag
function PinterestTag({ theme }: { theme: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 mt-1">
      {/* Pinterest P icon */}
      <svg width="10" height="10" viewBox="0 0 24 24" fill="#C9927A">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
      <span className="text-[8px] text-[#C9927A]" style={{ fontFamily: "var(--font-ui)" }}>
        Saved · {theme}
      </span>
    </div>
  );
}

const testimonials = [
  {
    name: "Sarah M.",
    event: "Baby shower for Lily",
    quote: "Every detail was perfect. Our guests couldn't stop talking about the invitations.",
    theme: "Garden Botanica",
    stars: 5,
    moodColors: ["#E8F0E4", "#C8DEB0"],
    flowerColor: "#9BAD9B",
    rotate: -2,
    offsetY: 0,
  },
  {
    name: "Jessica R.",
    event: "Baby shower for Noah",
    quote: "I planned my entire shower in one afternoon. The theme finder changed everything.",
    theme: "Neutral Luxe",
    stars: 5,
    moodColors: ["#FAF8F2", "#E8E0D0"],
    flowerColor: "#C4A55A",
    rotate: 1,
    offsetY: 20,
  },
  {
    name: "Amanda K.",
    event: "Baby shower for twins",
    quote: "The printable games were an absolute hit. So elegant and professional looking.",
    theme: "Dusty Rose",
    stars: 5,
    moodColors: ["#FDF0F0", "#F0D8D0"],
    flowerColor: "#E8C4C4",
    rotate: -1,
    offsetY: 0,
  },
  {
    name: "Priya S.",
    event: "Baby shower for Maya",
    quote: "I've used so many planning sites. This one actually makes me excited to plan.",
    theme: "Wildflower Meadow",
    stars: 5,
    moodColors: ["#F0F4E8", "#E0ECD8"],
    flowerColor: "#9BAD9B",
    rotate: 2,
    offsetY: 30,
  },
  {
    name: "Lauren B.",
    event: "Baby shower for James",
    quote: "The RSVP site looked better than my wedding website. I'm completely obsessed.",
    theme: "Safari Golden Hour",
    stars: 5,
    moodColors: ["#F8F0E0", "#E8D8C0"],
    flowerColor: "#C4A55A",
    rotate: -1,
    offsetY: 10,
  },
];

const stats = [
  { value: "50,000+", label: "Showers Planned", accent: "#E8C4C4" },
  { value: "4.9", label: "Average Rating", accent: "#C4A55A" },
  { value: "500+", label: "Themes Available", accent: "#9BAD9B" },
  { value: "Free", label: "To Get Started", accent: "#C9927A" },
];

export default function Testimonials() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#FAF6F0" }}
    >
      {/* Texture */}
      <div className="absolute inset-0 texture-linen opacity-40 pointer-events-none" />

      {/* Background flowers */}
      <div className="absolute top-20 left-8 opacity-15 pointer-events-none animate-drift">
        <Flower color="#E8C4C4" size={80} />
      </div>
      <div className="absolute bottom-20 right-8 opacity-15 pointer-events-none animate-drift" style={{ animationDelay: "2s" }}>
        <Flower color="#9BAD9B" size={70} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-xl mb-16 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Bow color="#C9927A" size={26} />
            <span
              className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A]"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Kind Words
            </span>
            <Bow color="#C9927A" size={26} />
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
            Celebrations We&apos;ve Helped Create
          </motion.h2>
        </div>

        {/* Masonry/staggered testimonial grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5" style={{ columnGap: "1.25rem" }}>
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-5 break-inside-avoid"
            >
              {/* Polaroid-style card */}
              <div
                className="bg-white shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
                style={{
                  border: "1px solid #EDE5DC",
                  borderRadius: 12,
                  transform: `rotate(${t.rotate}deg)`,
                }}
              >
                {/* Scrapbook tape */}
                <div
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3 opacity-70 z-10"
                  style={{ background: "rgba(240,230,180,0.8)", borderRadius: 1, transform: "translateX(-50%) rotate(-0.5deg)" }}
                />

                {/* Mini moodboard at top */}
                <MiniMoodboard colors={t.moodColors} flowerColor={t.flowerColor} />

                {/* Stars */}
                <div className="flex gap-0.5 mb-2">
                  {Array(t.stars).fill(0).map((_, i) => (
                    <span key={i} style={{ color: "#C4A55A", fontSize: 11 }}>★</span>
                  ))}
                </div>

                {/* Large italic quote */}
                <p
                  className="text-[#2C2C2C]/75 leading-relaxed mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "1.05rem",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Divider with flower */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex-1 h-px" style={{ background: "#EDE5DC" }} />
                  <Flower color="#E8C4C4" size={10} />
                  <div className="flex-1 h-px" style={{ background: "#EDE5DC" }} />
                </div>

                {/* Attribution */}
                <div>
                  <p
                    className="text-sm text-[#2C2C2C] font-medium"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[9px] text-[#2C2C2C]/50 tracking-wide mt-0.5"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {t.event}
                  </p>
                  <PinterestTag theme={t.theme} />
                </div>
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
          className="mt-20 rounded-2xl p-8 lg:p-10"
          style={{ background: "white", border: "1px solid #EDE5DC" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: stat.accent }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-[9px] tracking-[0.15em] uppercase text-[#2C2C2C]/50"
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
