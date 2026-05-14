"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Flower from "@/components/ui/Flower";
import Bow from "@/components/ui/Bow";

// ── Large tool previews ───────────────────────────────────────────────────────

function InvitationStackPreview() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{ background: "linear-gradient(160deg, #FDF5F0 0%, #F8EDE4 100%)" }}
    >
      {/* Stacked invitation cards at different angles */}
      <div className="absolute w-36 h-48 bg-[#F5EEE8] shadow-sm" style={{ transform: "rotate(10deg) translate(18px, 10px)", border: "0.5px solid #E8D8C8" }} />
      <div className="absolute w-36 h-48 bg-[#FAF3EC] shadow-sm" style={{ transform: "rotate(5deg) translate(8px, 4px)", border: "0.5px solid #E8C4C4" }} />
      <div className="absolute w-36 h-48 bg-[#FDF8F5] shadow-md" style={{ transform: "rotate(-5deg) translate(-10px, 6px)", border: "0.5px solid #9BAD9B40" }} />
      {/* Main front card */}
      <div
        className="relative z-10 w-36 h-48 bg-white shadow-xl flex flex-col items-center justify-between py-4 px-3"
        style={{ border: "0.5px solid #E8C4C4" }}
      >
        <div className="absolute inset-2 border opacity-15" style={{ borderColor: "#C4A55A" }} />
        <div className="flex gap-1">
          <Flower color="#E8C4C4" size={18} />
          <Flower color="#C9927A" size={14} />
          <Flower color="#E8C4C4" size={18} />
        </div>
        <div className="w-10 h-px" style={{ background: "#C4A55A" }} />
        <div className="text-center">
          <p className="text-[6px] tracking-[0.2em] uppercase text-[#2C2C2C]/40 mb-1" style={{ fontFamily: "var(--font-ui)" }}>You&apos;re invited</p>
          <p className="text-sm text-[#2C2C2C] leading-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>Baby Shower</p>
          <p className="text-[6px] tracking-wider mt-1" style={{ color: "#C4A55A", fontFamily: "var(--font-ui)" }}>for Emma &amp; James</p>
        </div>
        <div className="w-8 h-px" style={{ background: "#E8C4C4" }} />
        <p className="text-[5px] text-[#2C2C2C]/40" style={{ fontFamily: "var(--font-ui)" }}>Saturday · June 14th · 2pm</p>
        <div className="flex gap-1">
          <Flower color="#9BAD9B" size={12} />
          <Flower color="#E8C4C4" size={14} />
          <Flower color="#9BAD9B" size={12} />
        </div>
      </div>
      {/* Scattered flowers */}
      <div className="absolute top-4 right-6 opacity-40 animate-drift"><Flower color="#E8C4C4" size={20} /></div>
      <div className="absolute bottom-4 left-4 opacity-30 animate-drift" style={{ animationDelay: "1s" }}><Flower color="#9BAD9B" size={16} /></div>
    </div>
  );
}

function RSVPPhonePreview() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{ background: "linear-gradient(160deg, #F0F5FC 0%, #E4EEF8 100%)" }}
    >
      {/* Soft glow */}
      <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 60% 40%, #D8ECF8, transparent 60%)" }} />
      {/* Phone frame */}
      <div
        className="relative bg-white shadow-2xl rounded-2xl overflow-hidden"
        style={{ width: 140, height: 250, border: "2px solid #E8E0D8" }}
      >
        {/* Status bar */}
        <div className="h-6 flex items-center justify-center" style={{ background: "#FAF8F5" }}>
          <div className="w-14 h-2 rounded-full opacity-25" style={{ background: "#2C2C2C" }} />
        </div>
        {/* Screen content */}
        <div className="p-3">
          <div
            className="w-full h-10 rounded-xl mb-3 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #E8C4C4, #C9927A)" }}
          >
            <p className="text-[7px] text-white tracking-wider font-medium" style={{ fontFamily: "var(--font-ui)" }}>RSVP Page</p>
          </div>
          <p
            className="text-[7px] text-center text-[#2C2C2C]/60 mb-2"
            style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
          >
            Emma&apos;s Baby Shower
          </p>
          <div className="w-full h-px mb-3" style={{ background: "#E8E0D8" }} />
          <p className="text-[6px] text-[#2C2C2C]/40 mb-1" style={{ fontFamily: "var(--font-ui)" }}>Your name</p>
          <div className="w-full h-5 rounded-lg mb-2" style={{ background: "#FAF8F5", border: "0.5px solid #E8E0D8" }} />
          <p className="text-[6px] text-[#2C2C2C]/40 mb-1" style={{ fontFamily: "var(--font-ui)" }}>Will you attend?</p>
          <div className="flex gap-1 mb-3">
            <div className="flex-1 h-6 rounded-lg flex items-center justify-center text-[6px] text-white font-medium" style={{ background: "#C9927A", fontFamily: "var(--font-ui)" }}>Yes!</div>
            <div className="flex-1 h-6 rounded-lg flex items-center justify-center text-[6px]" style={{ background: "#FAF8F5", border: "0.5px solid #E8E0D8", color: "#2C2C2C", fontFamily: "var(--font-ui)" }}>Can&apos;t make it</div>
          </div>
          <div className="w-full h-6 rounded-full flex items-center justify-center text-[6px] text-white" style={{ background: "linear-gradient(90deg, #C9927A, #B5785F)", fontFamily: "var(--font-ui)" }}>RSVP Now</div>
        </div>
      </div>
      {/* Floating flowers */}
      <div className="absolute top-6 left-6 opacity-30 animate-drift"><Flower color="#9BBAD4" size={18} /></div>
      <div className="absolute bottom-6 right-6 opacity-20 animate-drift" style={{ animationDelay: "1.5s" }}><Flower color="#E8C4C4" size={14} /></div>
    </div>
  );
}

// ── Small utility card icons ──────────────────────────────────────────────────

function GameIcon() {
  return (
    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FDF0F4, #F8E0EC)" }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="3" stroke="#C9927A" strokeWidth="1.5" />
        <line x1="12" y1="2" x2="12" y2="22" stroke="#C9927A" strokeWidth="1" opacity="0.4" />
        <line x1="2" y1="12" x2="22" y2="12" stroke="#C9927A" strokeWidth="1" opacity="0.4" />
        <circle cx="7" cy="7" r="1.5" fill="#C9927A" opacity="0.7" />
        <circle cx="17" cy="7" r="1.5" fill="#C9927A" opacity="0.7" />
        <circle cx="12" cy="17" r="1.5" fill="#C9927A" opacity="0.7" />
      </svg>
    </div>
  );
}

function QuizIcon() {
  return (
    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #F0F8F0, #E0EEE0)" }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#9BAD9B" strokeWidth="1.5" />
        <path d="M9 10C9 8.34 10.34 7 12 7C13.66 7 15 8.34 15 10C15 11.66 13.66 13 12 13" stroke="#9BAD9B" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1" fill="#9BAD9B" />
      </svg>
    </div>
  );
}

function ChecklistIcon() {
  return (
    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #F5F2E8, #EEE8D0)" }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#C4A55A" strokeWidth="1.5" />
        <path d="M7 8h10M7 12h10M7 16h6" stroke="#C4A55A" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <circle cx="5" cy="8" r="1" fill="#C4A55A" />
        <circle cx="5" cy="12" r="1" fill="#C4A55A" />
        <circle cx="5" cy="16" r="1" fill="#C4A55A" />
      </svg>
    </div>
  );
}

function BudgetIcon() {
  return (
    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #F0F4FC, #E4ECF8)" }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#7AADC4" strokeWidth="1.5" />
        <path d="M12 6v2M12 16v2M9 9.5C9 8.67 10.34 8 12 8C13.66 8 15 8.67 15 9.5C15 11.17 9 11.17 9 12.5C9 13.83 10.34 14.5 12 14.5C13.66 14.5 15 13.83 15 12.5" stroke="#7AADC4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// ── Small utility tools ───────────────────────────────────────────────────────

const smallTools = [
  {
    icon: GameIcon,
    title: "Game Generator",
    description: "Auto-generate bingo, trivia & more",
    cta: "Generate Free",
    href: "/tools/games",
    ctaColor: "#C9927A",
  },
  {
    icon: QuizIcon,
    title: "Theme Finder Quiz",
    description: "Find your perfect vibe in 60 seconds",
    cta: "Take the Quiz",
    href: "/tools/theme-finder",
    ctaColor: "#9BAD9B",
  },
  {
    icon: ChecklistIcon,
    title: "Printable Checklist",
    description: "Never miss a single detail",
    cta: "Download Free",
    href: "/tools/checklist",
    ctaColor: "#C4A55A",
  },
  {
    icon: BudgetIcon,
    title: "Budget Tracker",
    description: "Keep your shower on budget",
    cta: "Track Now",
    href: "/tools/budget",
    ctaColor: "#7AADC4",
  },
];

// ── Main component ────────────────────────────────────────────────────────────

export default function PlanningTools() {
  return (
    <section id="tools" className="py-24 md:py-32" style={{ background: "#FDFBF7" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Bow color="#C9927A" size={24} />
            <span
              className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A]"
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
            Plan Every Detail, Beautifully
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#2C2C2C]/55 text-base leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            From your first invitation to the last game card — everything you need in one beautiful place.
          </motion.p>
        </div>

        {/* Large Tool 1: Invitations — image left, text right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col lg:flex-row gap-0 overflow-hidden rounded-2xl hover:shadow-2xl transition-shadow duration-300 mb-6"
          style={{ border: "1px solid #EDE5DC" }}
        >
          {/* Preview */}
          <div className="relative flex-shrink-0 lg:w-[45%] h-72 lg:h-auto overflow-hidden">
            <InvitationStackPreview />
            <div className="absolute top-4 left-4 z-20">
              <span
                className="text-[9px] tracking-[0.15em] uppercase px-3 py-1 rounded-full text-white shadow-md"
                style={{ background: "#C9927A", fontFamily: "var(--font-ui)" }}
              >
                Most Popular
              </span>
            </div>
          </div>
          {/* Content */}
          <div className="flex-1 flex flex-col justify-center p-8 lg:p-12 bg-white">
            <div className="text-[4rem] leading-none mb-2 select-none" style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "rgba(44,44,44,0.05)", lineHeight: 1 }}>
              01
            </div>
            <h3 className="text-2xl text-[#2C2C2C] mb-3 leading-snug" style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}>
              Create Your Invitations
            </h3>
            <p className="text-sm text-[#2C2C2C]/60 leading-relaxed mb-4 max-w-md" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
              Design custom invitations that match your dream theme — from boho florals to modern minimalism.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["50+ templates", "Instant download", "Print-ready"].map((feat) => (
                <span
                  key={feat}
                  className="text-[10px] px-3 py-1 rounded-full"
                  style={{ background: "#FDF5F0", color: "#C9927A", border: "1px solid #E8C4C4", fontFamily: "var(--font-ui)" }}
                >
                  ✓ {feat}
                </span>
              ))}
            </div>
            <Link
              href="/tools/invitations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-md w-fit"
              style={{ background: "linear-gradient(135deg, #C9927A, #B5785F)", color: "white", fontFamily: "var(--font-ui)" }}
            >
              Start Designing Free →
            </Link>
          </div>
        </motion.div>

        {/* Large Tool 2: RSVP — image right, text left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col lg:flex-row-reverse gap-0 overflow-hidden rounded-2xl hover:shadow-2xl transition-shadow duration-300 mb-12"
          style={{ border: "1px solid #EDE5DC" }}
        >
          {/* Preview */}
          <div className="relative flex-shrink-0 lg:w-[45%] h-72 lg:h-auto overflow-hidden">
            <RSVPPhonePreview />
            <div className="absolute top-4 left-4 z-20">
              <span
                className="text-[9px] tracking-[0.15em] uppercase px-3 py-1 rounded-full text-white shadow-md"
                style={{ background: "#9BAD9B", fontFamily: "var(--font-ui)" }}
              >
                New
              </span>
            </div>
          </div>
          {/* Content */}
          <div className="flex-1 flex flex-col justify-center p-8 lg:p-12 bg-white">
            <div className="text-[4rem] leading-none mb-2 select-none" style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "rgba(44,44,44,0.05)", lineHeight: 1 }}>
              02
            </div>
            <h3 className="text-2xl text-[#2C2C2C] mb-3 leading-snug" style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}>
              Launch Your RSVP Site
            </h3>
            <p className="text-sm text-[#2C2C2C]/60 leading-relaxed mb-4 max-w-md" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
              A beautiful, personalized RSVP page in minutes. Share it instantly. Track responses in real time.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Custom URL", "Mobile-first", "Real-time RSVPs"].map((feat) => (
                <span
                  key={feat}
                  className="text-[10px] px-3 py-1 rounded-full"
                  style={{ background: "#F0F8F0", color: "#6B8A6B", border: "1px solid #9BAD9B", fontFamily: "var(--font-ui)" }}
                >
                  ✓ {feat}
                </span>
              ))}
            </div>
            <Link
              href="/tools/rsvp"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-md w-fit"
              style={{ background: "linear-gradient(135deg, #9BAD9B, #6B8A6B)", color: "white", fontFamily: "var(--font-ui)" }}
            >
              Create Your Site →
            </Link>
          </div>
        </motion.div>

        {/* 4 small utility cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {smallTools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <Link
                key={i}
                href={tool.href}
                className="group bg-white p-5 rounded-xl border hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 flex flex-col gap-3"
                style={{ borderColor: "#EDE5DC" }}
              >
                <Icon />
                <div>
                  <h4
                    className="text-sm font-medium text-[#2C2C2C] mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {tool.title}
                  </h4>
                  <p
                    className="text-[11px] text-[#2C2C2C]/50 leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {tool.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <span
                    className="text-[10px] tracking-wider uppercase font-medium px-3 py-1.5 rounded-full transition-colors"
                    style={{
                      background: `${tool.ctaColor}15`,
                      color: tool.ctaColor,
                      border: `1px solid ${tool.ctaColor}30`,
                      fontFamily: "var(--font-ui)",
                    }}
                  >
                    {tool.cta} →
                  </span>
                </div>
              </Link>
            );
          })}
        </motion.div>

        {/* Accent flowers */}
        <div className="flex justify-center mt-12 gap-3">
          <Flower color="#E8C4C4" size={20} />
          <Flower color="#9BAD9B" size={16} />
          <Flower color="#C4A55A" size={20} />
        </div>
      </div>
    </section>
  );
}
