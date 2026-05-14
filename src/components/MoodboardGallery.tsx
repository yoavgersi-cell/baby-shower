"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ideas = [
  {
    title: "The Perfect Tablescape",
    tag: "Table Styling",
    image:
      "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?w=700&q=80&fit=crop",
    height: "h-96",
  },
  {
    title: "Balloon Arch Goals",
    tag: "Decorations",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=700&q=80&fit=crop",
    height: "h-80",
  },
  {
    title: "Cake Inspo",
    tag: "Sweet Table",
    image:
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=700&q=80&fit=crop",
    height: "h-80",
  },
  {
    title: "Invitation Flatlay",
    tag: "Stationery",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=700&q=80&fit=crop",
    height: "h-80",
  },
  {
    title: "Gift Table Styling",
    tag: "Setup Ideas",
    image:
      "https://images.unsplash.com/photo-1558171813-680a73e39d78?w=700&q=80&fit=crop",
    height: "h-96",
  },
  {
    title: "Floral Arrangements",
    tag: "Florals",
    image:
      "https://images.unsplash.com/photo-1487530811015-780526e5f6e6?w=700&q=80&fit=crop",
    height: "h-72",
  },
];

function SaveButton() {
  const [saved, setSaved] = useState(false);
  return (
    <button
      onClick={() => setSaved(!saved)}
      className="w-8 h-8 flex items-center justify-center rounded-full shadow-md transition-transform hover:scale-110"
      style={{ background: "white" }}
      aria-label={saved ? "Unsave" : "Save"}
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill={saved ? "#C9927A" : "none"}
        stroke="#C9927A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}

export default function MoodboardGallery() {
  return (
    <section className="py-24 md:py-32" style={{ background: "#FDFBF7" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div
              className="w-12 h-px"
              style={{
                background: "linear-gradient(90deg, transparent, #E8C4C4)",
              }}
            />
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#E8C4C4"
              stroke="#E8C4C4"
              strokeWidth="1"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <div
              className="w-12 h-px"
              style={{
                background: "linear-gradient(90deg, #E8C4C4, transparent)",
              }}
            />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "#2C2C2C",
            }}
          >
            Steal These Ideas
          </h2>
          <p
            className="mt-3 text-[#5A4A42]/60 max-w-md mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Hand-curated inspiration to make your shower unforgettable.
          </p>
        </motion.div>

        {/* Pinterest-style masonry */}
        <div className="columns-2 lg:columns-3 gap-5" style={{ columnGap: "1.25rem" }}>
          {ideas.map((idea, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="mb-5 break-inside-avoid group"
            >
              <div
                className={`relative overflow-hidden rounded-2xl cursor-pointer ${idea.height}`}
              >
                <Image
                  src={idea.image}
                  alt={idea.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Text over overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span
                    className="text-[9px] tracking-[0.2em] uppercase text-white/70 mb-1 block"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {idea.tag}
                  </span>
                  <h3
                    className="text-white text-lg leading-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {idea.title}
                  </h3>
                  <button
                    className="mt-3 text-xs text-white/80 hover:text-white tracking-wide opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    Get the Look →
                  </button>
                </div>

                {/* Heart save button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <SaveButton />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
