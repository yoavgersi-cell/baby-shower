"use client";
import { motion } from "framer-motion";
import Flower from "@/components/ui/Flower";
import Bow from "@/components/ui/Bow";

const bundles = [
  {
    name: "The Complete Shower Kit",
    items: [
      "10 Invitation designs",
      "6 Game cards",
      "12 Signs & banners",
      "Seating chart template",
      "Thank you cards",
    ],
    price: "$12.99",
    originalPrice: "$34.00",
    tag: "Most Popular",
    tagColor: "#C9927A",
    palette: ["#E8C4C4", "#9BAD9B", "#C4A55A", "#FAF8F5"],
    accentBg: "linear-gradient(135deg, #FDF5F0 0%, #F8EDE4 100%)",
  },
  {
    name: "Garden Floral Collection",
    items: [
      "5 Floral invitation styles",
      "Bingo cards",
      "Baby predictions game",
      "Welcome sign",
      "Food tent cards",
    ],
    price: "Free",
    originalPrice: null,
    tag: "Free Bundle",
    tagColor: "#9BAD9B",
    palette: ["#9BAD9B", "#E8C4C4", "#F5F0E8", "#D4B896"],
    accentBg: "linear-gradient(135deg, #F0F5F0 0%, #E4EEE4 100%)",
  },
  {
    name: "Modern Luxe Set",
    items: [
      "8 Minimal invitation designs",
      "RSVP cards",
      "Timeline of love game",
      "Table numbers",
      "Gift tags",
    ],
    price: "$8.99",
    originalPrice: "$22.00",
    tag: "New Arrival",
    tagColor: "#4A7AB5",
    palette: ["#C4A55A", "#3D2B1F", "#FAF8F5", "#E8E0D8"],
    accentBg: "linear-gradient(135deg, #FDF8EE 0%, #F5EDD4 100%)",
  },
];

// CSS paper stack preview for each bundle
function BundlePreview({ bundle }: { bundle: (typeof bundles)[0] }) {
  return (
    <div
      className="relative w-full h-52 flex items-center justify-center overflow-hidden rounded-t-2xl"
      style={{ background: bundle.accentBg }}
    >
      {/* Background paper stack */}
      {[
        { rotate: 10, tx: 20, ty: 12, opacity: 0.4 },
        { rotate: 6, tx: 12, ty: 7, opacity: 0.55 },
        { rotate: -6, tx: -14, ty: 8, opacity: 0.5 },
        { rotate: -3, tx: -7, ty: 3, opacity: 0.7 },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            width: 120,
            height: 155,
            background: i % 2 === 0 ? "#FAF8F5" : "#FDF5EE",
            border: "0.5px solid #E8D8C8",
            borderRadius: 3,
            transform: `rotate(${p.rotate}deg) translate(${p.tx}px, ${p.ty}px)`,
            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
            opacity: p.opacity,
          }}
        />
      ))}
      {/* Front main paper */}
      <div
        className="relative z-10 bg-white shadow-xl flex flex-col items-center justify-center p-5 text-center"
        style={{ width: 120, height: 155, border: "0.5px solid #E8C4C4", borderRadius: 3 }}
      >
        <div className="absolute inset-3 border opacity-10" style={{ borderColor: bundle.palette[0] }} />
        <Bow color={bundle.palette[0]} size={32} />
        <div className="w-10 h-px my-2" style={{ background: bundle.palette[2] || "#C4A55A", opacity: 0.6 }} />
        <p className="text-[5px] tracking-[0.2em] uppercase text-[#2C2C2C]/50 mb-0.5" style={{ fontFamily: "var(--font-ui)" }}>
          Bundle
        </p>
        <p
          className="text-[9px] leading-tight"
          style={{ fontFamily: "var(--font-display)", color: "#2C2C2C", fontWeight: 400 }}
        >
          {bundle.name}
        </p>
        <div className="w-8 h-px my-1.5" style={{ background: "#E8E0D8" }} />
        {/* Palette dots */}
        <div className="flex gap-1 justify-center">
          {bundle.palette.slice(0, 3).map((c) => (
            <div
              key={c}
              className="rounded-full border border-white shadow-sm"
              style={{ width: 8, height: 8, background: c }}
            />
          ))}
        </div>
      </div>
      {/* Floating flower */}
      <div className="absolute top-3 right-4 opacity-40">
        <Flower color={bundle.palette[0]} size={18} />
      </div>
      <div className="absolute bottom-3 left-4 opacity-30">
        <Flower color={bundle.palette[1]} size={14} />
      </div>
    </div>
  );
}

export default function PrintableBundles() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#1A1502" }}>
      {/* Background flowers */}
      <div className="absolute top-12 left-8 opacity-[0.06] pointer-events-none">
        <Flower color="#C4A55A" size={140} />
      </div>
      <div className="absolute bottom-20 right-12 opacity-[0.04] pointer-events-none">
        <Flower color="#E8C4C4" size={120} />
      </div>
      <div className="absolute top-1/3 left-2/3 opacity-[0.03] pointer-events-none">
        <Flower color="#9BAD9B" size={100} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(196,165,90,0.5))" }} />
            <Bow color="rgba(196,165,90,0.6)" size={24} />
            <div className="w-16 h-px" style={{ background: "linear-gradient(90deg, rgba(196,165,90,0.5), transparent)" }} />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "#FAF8F2",
            }}
          >
            Complete Printable Bundles
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.45)",
              fontStyle: "italic",
            }}
          >
            Everything you need, beautifully designed and ready to print
          </p>
        </motion.div>

        {/* Bundle cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bundles.map((bundle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Tag badge */}
              <div className="absolute top-4 left-4 z-20">
                <span
                  className="text-[8px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full font-medium text-white shadow-md"
                  style={{ background: bundle.tagColor, fontFamily: "var(--font-ui)" }}
                >
                  {bundle.tag}
                </span>
              </div>

              {/* Preview */}
              <BundlePreview bundle={bundle} />

              {/* Card body */}
              <div
                className="flex-1 flex flex-col p-6"
                style={{ background: "rgba(255,255,255,0.04)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                {/* Name & price */}
                <div className="flex items-start justify-between mb-4">
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      color: "#FAF8F2",
                      flex: 1,
                      marginRight: 8,
                    }}
                  >
                    {bundle.name}
                  </h3>
                  <div className="text-right flex-shrink-0">
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.25rem",
                        fontWeight: 400,
                        color: bundle.tagColor,
                      }}
                    >
                      {bundle.price}
                    </div>
                    {bundle.originalPrice && (
                      <div
                        className="text-[10px] line-through"
                        style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-ui)" }}
                      >
                        {bundle.originalPrice}
                      </div>
                    )}
                  </div>
                </div>

                {/* Items list */}
                <ul className="space-y-2 mb-6 flex-1">
                  {bundle.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[11px]"
                      style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)" }}
                    >
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0 flex items-center justify-center"
                        style={{ background: `${bundle.tagColor}30`, border: `1px solid ${bundle.tagColor}40` }}
                      >
                        <svg width="6" height="6" viewBox="0 0 8 8" fill="none">
                          <path d="M1 4l2 2 4-3" stroke={bundle.tagColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className="w-full py-3 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    background: bundle.price === "Free"
                      ? "linear-gradient(135deg, #9BAD9B, #6B8A6B)"
                      : "linear-gradient(135deg, #C9927A, #B5785F)",
                    color: "white",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  {bundle.price === "Free" ? "Download Free Bundle" : `Get Bundle — ${bundle.price}`}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom browse link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p
            className="text-sm"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Looking for individual items?{" "}
            <button
              className="underline transition-colors hover:text-white"
              style={{ color: "rgba(196,165,90,0.6)" }}
            >
              Browse All Printables →
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
