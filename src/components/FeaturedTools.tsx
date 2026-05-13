"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const InvitationIcon = () => (
  <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
    <rect x="10" y="8" width="100" height="64" rx="2" fill="#FAF8F5" stroke="#E8E0D8" strokeWidth="1" />
    <rect x="18" y="16" width="84" height="48" rx="1" fill="none" stroke="#C4A55A" strokeWidth="0.5" />
    <circle cx="60" cy="30" r="6" fill="none" stroke="#C4A55A" strokeWidth="0.75" />
    <line x1="40" y1="42" x2="80" y2="42" stroke="#2C2C2C" strokeWidth="1" opacity="0.25" />
    <line x1="35" y1="50" x2="85" y2="50" stroke="#2C2C2C" strokeWidth="0.75" opacity="0.15" />
    <line x1="42" y1="57" x2="78" y2="57" stroke="#2C2C2C" strokeWidth="0.75" opacity="0.15" />
  </svg>
);

const PaletteIcon = () => (
  <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
    <circle cx="60" cy="40" r="28" fill="none" stroke="#E8E0D8" strokeWidth="1" />
    <circle cx="60" cy="40" r="6" fill="#FAF8F5" stroke="#C4A55A" strokeWidth="0.75" />
    <circle cx="60" cy="18" r="7" fill="#E8C4C4" stroke="#E8E0D8" strokeWidth="0.5" />
    <circle cx="78" cy="27" r="7" fill="#C4A55A" stroke="#E8E0D8" strokeWidth="0.5" opacity="0.8" />
    <circle cx="78" cy="53" r="7" fill="#9BAD9B" stroke="#E8E0D8" strokeWidth="0.5" />
    <circle cx="60" cy="62" r="7" fill="#D4B896" stroke="#E8E0D8" strokeWidth="0.5" />
    <circle cx="42" cy="53" r="7" fill="#B5785F" stroke="#E8E0D8" strokeWidth="0.5" opacity="0.7" />
    <circle cx="42" cy="27" r="7" fill="#F5F0E8" stroke="#E8E0D8" strokeWidth="0.5" />
  </svg>
);

const BingoIcon = () => (
  <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
    <rect x="15" y="8" width="90" height="64" rx="2" fill="#FAF8F5" stroke="#E8E0D8" strokeWidth="1" />
    {[0,1,2,3,4].map(col =>
      [0,1,2,3,4].map(row => (
        <rect
          key={`${col}-${row}`}
          x={20 + col * 17}
          y={14 + row * 11}
          width="13"
          height="8"
          rx="1"
          fill={
            (col === 0 && row === 0) || (col === 2 && row === 2) || (col === 4 && row === 4) || (col === 1 && row === 3)
              ? "#C4A55A"
              : (col === 3 && row === 1) || (col === 0 && row === 4)
              ? "#E8C4C4"
              : "#F5F0E8"
          }
          stroke="#E8E0D8"
          strokeWidth="0.5"
        />
      ))
    )}
  </svg>
);

const ChecklistIcon = () => (
  <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
    <rect x="20" y="6" width="80" height="68" rx="2" fill="#FAF8F5" stroke="#E8E0D8" strokeWidth="1" />
    <rect x="20" y="6" width="80" height="14" rx="2" fill="#F5F0E8" />
    {[0,1,2,3,4].map(i => (
      <g key={i}>
        <rect x="30" y={28 + i * 10} width="8" height="6" rx="1" fill="none" stroke={i < 3 ? "#C4A55A" : "#E8E0D8"} strokeWidth="0.75" />
        {i < 3 && (
          <path d={`M${32} ${30 + i * 10} l2 2 4-3`} stroke="#C4A55A" strokeWidth="0.75" strokeLinecap="round" fill="none" />
        )}
        <line x1="44" y1={31 + i * 10} x2={i < 3 ? 76 : 68} y2={31 + i * 10} stroke="#2C2C2C" strokeWidth="0.5" opacity="0.2" />
      </g>
    ))}
  </svg>
);

const RSVPIcon = () => (
  <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
    <rect x="15" y="10" width="90" height="60" rx="6" fill="#FAF8F5" stroke="#E8E0D8" strokeWidth="1" />
    <rect x="15" y="10" width="90" height="16" rx="6" fill="#F5F0E8" />
    <rect x="15" y="20" width="90" height="6" fill="#F5F0E8" />
    <circle cx="28" cy="18" r="4" fill="#E8C4C4" />
    <circle cx="40" cy="18" r="4" fill="#9BAD9B" />
    <circle cx="52" cy="18" r="4" fill="#D4B896" />
    <rect x="30" y="36" width="60" height="8" rx="2" fill="#2C2C2C" opacity="0.06" />
    <line x1="30" y1="54" x2="65" y2="54" stroke="#E8E0D8" strokeWidth="1" />
    <circle cx="72" cy="54" r="6" fill="none" stroke="#C4A55A" strokeWidth="0.75" />
    <path d="M69 54 l2 2 4-4" stroke="#C4A55A" strokeWidth="0.75" strokeLinecap="round" fill="none" />
  </svg>
);

const PrintableStackIcon = () => (
  <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
    <rect x="30" y="22" width="64" height="48" rx="2" fill="#F5F0E8" stroke="#E8E0D8" strokeWidth="1" transform="rotate(6 30 22)" />
    <rect x="26" y="18" width="64" height="48" rx="2" fill="#FAF8F5" stroke="#E8E0D8" strokeWidth="1" transform="rotate(2 26 18)" />
    <rect x="22" y="14" width="64" height="48" rx="2" fill="white" stroke="#E8E0D8" strokeWidth="1" />
    <line x1="32" y1="30" x2="76" y2="30" stroke="#C4A55A" strokeWidth="0.75" opacity="0.6" />
    <line x1="32" y1="38" x2="72" y2="38" stroke="#2C2C2C" strokeWidth="0.5" opacity="0.15" />
    <line x1="32" y1="45" x2="68" y2="45" stroke="#2C2C2C" strokeWidth="0.5" opacity="0.15" />
    <line x1="32" y1="52" x2="70" y2="52" stroke="#2C2C2C" strokeWidth="0.5" opacity="0.15" />
  </svg>
);

const tools = [
  {
    name: "Create Your Invitations",
    description: "Design bespoke invitations with curated templates and elegant typesetting.",
    icon: <InvitationIcon />,
    href: "/tools/invitations",
    badge: "Most Popular",
  },
  {
    name: "Design Your Theme",
    description: "Discover your perfect theme palette through our curated style finder.",
    icon: <PaletteIcon />,
    href: "/tools/theme",
    badge: null,
  },
  {
    name: "Build Your Games",
    description: "Generate printable bingo cards and party games in moments.",
    icon: <BingoIcon />,
    href: "/tools/games",
    badge: null,
  },
  {
    name: "Print Your Checklist",
    description: "The complete planning checklist so nothing is ever overlooked.",
    icon: <ChecklistIcon />,
    href: "/tools/checklist",
    badge: null,
  },
  {
    name: "Launch Your RSVP Site",
    description: "A beautiful, shareable RSVP page — live in minutes, no code needed.",
    icon: <RSVPIcon />,
    href: "/tools/rsvp",
    badge: "New",
  },
  {
    name: "Curate Your Printables",
    description: "Browse and download a full suite of coordinated printable designs.",
    icon: <PrintableStackIcon />,
    href: "/tools/printables",
    badge: null,
  },
];

function ToolCard({ tool, index }: { tool: typeof tools[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative bg-white border border-[#E8E0D8] hover:border-[#C4A55A]/50 hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      {/* Badge */}
      {tool.badge && (
        <div className="absolute top-4 right-4 z-10">
          <span
            className="text-[9px] tracking-[0.15em] uppercase text-[#C4A55A] border border-[#C4A55A]/40 px-2 py-0.5"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            {tool.badge}
          </span>
        </div>
      )}

      {/* Icon area */}
      <div className="h-40 p-6 flex items-center justify-center bg-[#FAF8F5] border-b border-[#E8E0D8] overflow-hidden">
        <div className="w-full h-full max-w-[160px]">{tool.icon}</div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3
          className="text-lg text-[#2C2C2C] mb-2 leading-snug"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
        >
          {tool.name}
        </h3>
        <p
          className="text-sm text-[#2C2C2C]/55 leading-relaxed mb-5 flex-1"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {tool.description}
        </p>
        <Link
          href={tool.href}
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase text-[#2C2C2C]/60 hover:text-[#2C2C2C] transition-colors group-hover:gap-3 duration-300"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          Begin
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </motion.div>
  );
}

export default function FeaturedTools() {
  return (
    <section id="tools" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 max-w-xl">
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
              Planning Tools
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#2C2C2C] leading-tight mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Your Planning Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#2C2C2C]/55 text-base leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            From inspiration to the perfect celebration
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8E0D8]">
          {tools.map((tool, index) => (
            <ToolCard key={tool.name} tool={tool} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex items-center gap-4"
        >
          <div className="w-8 h-px bg-[#E8E0D8]" />
          <Link
            href="/tools"
            className="text-[11px] tracking-[0.15em] uppercase text-[#2C2C2C]/50 hover:text-[#2C2C2C] transition-colors"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            View All Tools
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
