"use client";
import { useRef } from "react";
import Flower from "@/components/ui/Flower";
import Bow from "@/components/ui/Bow";

// ── Individual invitation CSS art ─────────────────────────────────────────────

function FloralArchDesign({ bg, accent }: { bg: string; accent: string }) {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-between py-4 px-3"
      style={{ background: bg }}
    >
      {/* Arch of flowers at top */}
      <div className="relative flex justify-center" style={{ height: 48 }}>
        {[-60, -30, 0, 30, 60].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 50 + Math.sin(rad) * 28;
          const y = 24 - Math.cos(rad) * 20;
          return (
            <div
              key={i}
              className="absolute"
              style={{ left: `calc(${x}% - 8px)`, top: y - 8 }}
            >
              <Flower color={i % 2 === 0 ? accent : "#E8C4C4"} size={16} />
            </div>
          );
        })}
      </div>
      {/* Content */}
      <div className="text-center flex-1 flex flex-col justify-center">
        <div className="w-10 h-px mx-auto mb-2" style={{ background: accent }} />
        <p className="text-[6px] tracking-[0.2em] uppercase text-[#2C2C2C]/50 mb-1" style={{ fontFamily: "var(--font-ui)" }}>
          You&apos;re invited
        </p>
        <p className="text-sm leading-tight" style={{ fontFamily: "var(--font-display)", color: "#2C2C2C", fontWeight: 300 }}>
          Baby Shower
        </p>
        <p className="text-[6px] tracking-wider mt-1 mb-2" style={{ color: accent, fontFamily: "var(--font-ui)" }}>
          for Sophie
        </p>
        <div className="w-8 h-px mx-auto" style={{ background: "#E8E0D8" }} />
        <p className="text-[5px] text-[#2C2C2C]/40 mt-1.5" style={{ fontFamily: "var(--font-ui)" }}>
          June 14 · 2pm
        </p>
      </div>
      {/* Botanical border */}
      <div className="flex gap-1 justify-center">
        <Flower color={accent} size={10} />
        <Flower color="#E8C4C4" size={10} />
        <Flower color={accent} size={10} />
      </div>
      {/* Inner border */}
      <div className="absolute inset-2 border opacity-15" style={{ borderColor: accent }} />
    </div>
  );
}

function GoldMinimalDesign({ bg, accent }: { bg: string; accent: string }) {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center"
      style={{ background: bg }}
    >
      {/* Double gold border */}
      <div className="absolute inset-3" style={{ border: `1px solid ${accent}`, opacity: 0.6 }} />
      <div className="absolute inset-5" style={{ border: `0.5px solid ${accent}`, opacity: 0.3 }} />
      {/* Content */}
      <div className="text-center px-6">
        <div className="w-12 h-px mx-auto mb-3" style={{ background: accent }} />
        <p className="text-[5px] tracking-[0.3em] uppercase mb-1" style={{ color: accent, fontFamily: "var(--font-ui)" }}>
          Baby Shower
        </p>
        <p className="text-base leading-tight mb-1" style={{ fontFamily: "var(--font-display)", color: "#2C2C2C", fontWeight: 300 }}>
          Golden Hour
        </p>
        <div className="w-8 h-px mx-auto my-2" style={{ background: "#E8E0D8" }} />
        <p className="text-[5px] text-[#2C2C2C]/40 tracking-wider uppercase" style={{ fontFamily: "var(--font-ui)" }}>
          Saturday · June 14
        </p>
        <div className="w-12 h-px mx-auto mt-3" style={{ background: accent } } />
      </div>
      {/* Corner ornaments */}
      <div className="absolute top-6 left-6 w-4 h-4 opacity-30" style={{ borderTop: `1px solid ${accent}`, borderLeft: `1px solid ${accent}` }} />
      <div className="absolute top-6 right-6 w-4 h-4 opacity-30" style={{ borderTop: `1px solid ${accent}`, borderRight: `1px solid ${accent}` }} />
      <div className="absolute bottom-6 left-6 w-4 h-4 opacity-30" style={{ borderBottom: `1px solid ${accent}`, borderLeft: `1px solid ${accent}` }} />
      <div className="absolute bottom-6 right-6 w-4 h-4 opacity-30" style={{ borderBottom: `1px solid ${accent}`, borderRight: `1px solid ${accent}` }} />
    </div>
  );
}

function TeddyCozyDesign({ bg, accent }: { bg: string; accent: string }) {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-between py-3 px-3"
      style={{ background: bg }}
    >
      {/* Mini teddy head */}
      <div className="relative flex justify-center" style={{ height: 52 }}>
        {/* Ears */}
        <div className="absolute rounded-full w-7 h-7" style={{ background: "#D4B896", top: 2, left: "calc(50% - 22px)" }} />
        <div className="absolute rounded-full w-7 h-7" style={{ background: "#D4B896", top: 2, left: "calc(50% + 2px)" }} />
        {/* Head */}
        <div className="absolute rounded-full" style={{ width: 44, height: 40, background: "#D4B896", top: 10, left: "calc(50% - 22px)" }} />
        {/* Eyes */}
        <div className="absolute rounded-full w-2 h-2" style={{ background: "#3D2B1F", top: 22, left: "calc(50% - 10px)" }} />
        <div className="absolute rounded-full w-2 h-2" style={{ background: "#3D2B1F", top: 22, left: "calc(50% + 6px)" }} />
        {/* Nose */}
        <div className="absolute" style={{ width: 8, height: 5, background: "#3D2B1F", borderRadius: "50%", top: 30, left: "calc(50% - 4px)" }} />
      </div>
      {/* Content */}
      <div className="text-center flex-1 flex flex-col justify-center">
        <p className="text-[6px] tracking-[0.2em] uppercase text-[#2C2C2C]/50 mb-1" style={{ fontFamily: "var(--font-ui)" }}>
          Baby Shower
        </p>
        <p className="text-sm leading-tight" style={{ fontFamily: "var(--font-display)", color: "#2C2C2C", fontWeight: 300 }}>
          Bear Hugs
        </p>
        <p className="text-[6px] tracking-wider mt-1" style={{ color: accent, fontFamily: "var(--font-ui)" }}>
          for little one
        </p>
      </div>
      <div className="w-8 h-px" style={{ background: "#E8E0D8" }} />
      <p className="text-[5px] text-[#2C2C2C]/40 mt-1" style={{ fontFamily: "var(--font-ui)" }}>
        June 14 · 2pm
      </p>
    </div>
  );
}

function CoastalBrightDesign({ bg, accent }: { bg: string; accent: string }) {
  return (
    <div
      className="relative w-full h-full flex flex-col"
      style={{ background: bg }}
    >
      {/* Bold lemon yellow top stripe */}
      <div className="h-16 relative flex items-center justify-center" style={{ background: "#F5E040" }}>
        {/* Lemon slices */}
        {[20, 50, 80].map((left, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 18,
              height: 18,
              background: "radial-gradient(circle, #F5E040 40%, #D4C030 100%)",
              border: "1px solid #C4A530",
              left: `${left}%`,
              top: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.7,
            }}
          />
        ))}
        <p className="text-[7px] tracking-[0.2em] uppercase font-bold" style={{ color: "#4A7AB5", fontFamily: "var(--font-ui)" }}>
          Amalfi Dreams
        </p>
      </div>
      {/* Cobalt blue border */}
      <div className="h-1" style={{ background: accent }} />
      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-3">
        <p className="text-[6px] tracking-[0.2em] uppercase text-[#2C2C2C]/50 mb-1" style={{ fontFamily: "var(--font-ui)" }}>
          You&apos;re invited
        </p>
        <p className="text-sm leading-tight" style={{ fontFamily: "var(--font-display)", color: "#2C2C2C", fontWeight: 300 }}>
          Baby Shower
        </p>
        <div className="w-8 h-px my-2" style={{ background: accent, opacity: 0.5 }} />
        <p className="text-[5px] text-[#2C2C2C]/40" style={{ fontFamily: "var(--font-ui)" }}>
          June 14 · 2pm
        </p>
      </div>
    </div>
  );
}

function VintagePageDesign({ bg, accent }: { bg: string; accent: string }) {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center"
      style={{ background: bg }}
    >
      {/* Manuscript lines */}
      {[25, 38, 51, 64, 77].map((top) => (
        <div
          key={top}
          className="absolute left-5 right-5 opacity-10"
          style={{ top: `${top}%`, height: 1, background: "#7A6A5A" }}
        />
      ))}
      {/* Content */}
      <div className="text-center px-5 z-10">
        {/* Decorative flourish */}
        <svg width="60" height="12" viewBox="0 0 60 12" fill="none" className="mx-auto mb-2 opacity-40">
          <path d="M5 6 Q15 1 30 6 Q45 11 55 6" stroke="#9A8070" strokeWidth="1" fill="none" />
          <circle cx="30" cy="6" r="2" fill="#9A8070" />
        </svg>
        <p className="text-[6px] tracking-[0.25em] uppercase mb-1" style={{ color: accent, fontFamily: "var(--font-ui)" }}>
          Once Upon a Time
        </p>
        <p className="text-sm leading-tight" style={{ fontFamily: "var(--font-display)", color: "#2C2C2C", fontWeight: 400, fontStyle: "italic" }}>
          Baby Shower
        </p>
        <div className="w-10 h-px mx-auto my-2" style={{ background: accent, opacity: 0.4 }} />
        <p className="text-[5px] text-[#2C2C2C]/40 tracking-wider" style={{ fontFamily: "var(--font-ui)" }}>
          Saturday · June 14th
        </p>
        <svg width="60" height="12" viewBox="0 0 60 12" fill="none" className="mx-auto mt-2 opacity-40">
          <path d="M5 6 Q15 11 30 6 Q45 1 55 6" stroke="#9A8070" strokeWidth="1" fill="none" />
          <circle cx="30" cy="6" r="2" fill="#9A8070" />
        </svg>
      </div>
      {/* Corner flourishes */}
      <div className="absolute top-4 left-4 opacity-20" style={{ fontSize: 14, color: accent }}>✦</div>
      <div className="absolute top-4 right-4 opacity-20" style={{ fontSize: 14, color: accent }}>✦</div>
      <div className="absolute bottom-4 left-4 opacity-20" style={{ fontSize: 14, color: accent }}>✦</div>
      <div className="absolute bottom-4 right-4 opacity-20" style={{ fontSize: 14, color: accent }}>✦</div>
    </div>
  );
}

function BohoWildflowerDesign({ bg, accent }: { bg: string; accent: string }) {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-between py-4 px-3"
      style={{ background: bg }}
    >
      {/* Scattered wildflowers */}
      <div className="absolute top-2 left-2 opacity-60"><Flower color="#E8C4C4" size={14} /></div>
      <div className="absolute top-4 right-3 opacity-50"><Flower color={accent} size={12} /></div>
      <div className="absolute bottom-12 left-3 opacity-40"><Flower color="#9BAD9B" size={12} /></div>
      <div className="absolute bottom-16 right-2 opacity-60"><Flower color="#E8C4C4" size={10} /></div>
      <div className="absolute top-16 left-5 opacity-40"><Flower color={accent} size={10} /></div>
      {/* Content */}
      <div className="text-center flex-1 flex flex-col justify-center z-10">
        <p className="text-[6px] tracking-[0.2em] uppercase text-[#2C2C2C]/50 mb-1" style={{ fontFamily: "var(--font-ui)" }}>
          Baby Shower
        </p>
        <p className="text-sm leading-tight" style={{ fontFamily: "var(--font-display)", color: "#2C2C2C", fontWeight: 300 }}>
          Wild Blooms
        </p>
        <p className="text-[6px] tracking-wider mt-1" style={{ color: accent, fontFamily: "var(--font-ui)" }}>
          for Emma
        </p>
        <div className="w-8 h-px mx-auto my-2" style={{ background: "#E8E0D8" }} />
        <p className="text-[5px] text-[#2C2C2C]/40" style={{ fontFamily: "var(--font-ui)" }}>
          June 14 · 2pm
        </p>
      </div>
    </div>
  );
}

function BlueClassicDesign({ bg, accent }: { bg: string; accent: string }) {
  return (
    <div
      className="relative w-full h-full flex flex-col"
      style={{ background: bg }}
    >
      {/* Navy top header */}
      <div
        className="h-16 flex flex-col items-center justify-center"
        style={{ background: accent }}
      >
        <p className="text-[7px] tracking-[0.25em] uppercase text-white/80" style={{ fontFamily: "var(--font-ui)" }}>
          Baby Shower
        </p>
        <p className="text-sm text-white leading-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>
          Powder Blue
        </p>
      </div>
      {/* Crisp lines */}
      <div className="h-0.5" style={{ background: "#E8E0D8" }} />
      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-3">
        <div className="w-8 h-px mb-2" style={{ background: accent, opacity: 0.4 }} />
        <p className="text-[6px] tracking-[0.2em] uppercase text-[#2C2C2C]/50 mb-1" style={{ fontFamily: "var(--font-ui)" }}>
          You&apos;re invited
        </p>
        <p className="text-[8px]" style={{ fontFamily: "var(--font-display)", color: "#2C2C2C" }}>
          for little one
        </p>
        <div className="w-8 h-px my-2" style={{ background: "#E8E0D8" }} />
        <p className="text-[5px] text-[#2C2C2C]/40" style={{ fontFamily: "var(--font-ui)" }}>
          Saturday · June 14th
        </p>
      </div>
    </div>
  );
}

function FrenchScriptDesign({ bg, accent }: { bg: string; accent: string }) {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center"
      style={{ background: bg }}
    >
      {/* French-style border with corner ornaments */}
      <div className="absolute inset-3" style={{ border: `0.5px solid ${accent}`, opacity: 0.4 }} />
      {/* Corner ornaments */}
      {[
        { top: 4, left: 4 },
        { top: 4, right: 4 },
        { bottom: 4, left: 4 },
        { bottom: 4, right: 4 },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute"
          style={{ ...pos, fontSize: 10, color: accent, opacity: 0.5, fontFamily: "serif" }}
        >
          ❧
        </div>
      ))}
      {/* Content */}
      <div className="text-center px-5 z-10">
        <Bow color={accent} size={30} />
        <div className="w-10 h-px mx-auto my-2" style={{ background: accent, opacity: 0.4 }} />
        <p className="text-[5px] tracking-[0.3em] uppercase mb-1 opacity-50" style={{ fontFamily: "var(--font-ui)", color: "#2C2C2C" }}>
          Chéri
        </p>
        <p className="text-sm leading-tight" style={{ fontFamily: "var(--font-display)", color: "#2C2C2C", fontWeight: 400, fontStyle: "italic" }}>
          Bébé Shower
        </p>
        <p className="text-[6px] tracking-wider mt-1" style={{ color: accent, fontFamily: "var(--font-ui)" }}>
          pour Sophie
        </p>
        <div className="w-10 h-px mx-auto mt-2" style={{ background: accent, opacity: 0.4 }} />
      </div>
    </div>
  );
}

// ── Design switcher ──────────────────────────────────────────────────────────

function InvitationDesign({
  type,
  bg,
  accent,
}: {
  type: string;
  bg: string;
  accent: string;
}) {
  switch (type) {
    case "floral-arch":
      return <FloralArchDesign bg={bg} accent={accent} />;
    case "gold-minimal":
      return <GoldMinimalDesign bg={bg} accent={accent} />;
    case "teddy-cozy":
      return <TeddyCozyDesign bg={bg} accent={accent} />;
    case "coastal-bright":
      return <CoastalBrightDesign bg={bg} accent={accent} />;
    case "vintage-page":
      return <VintagePageDesign bg={bg} accent={accent} />;
    case "boho-wildflower":
      return <BohoWildflowerDesign bg={bg} accent={accent} />;
    case "blue-classic":
      return <BlueClassicDesign bg={bg} accent={accent} />;
    case "french-script":
      return <FrenchScriptDesign bg={bg} accent={accent} />;
    default:
      return <FloralArchDesign bg={bg} accent={accent} />;
  }
}

// ── Data ─────────────────────────────────────────────────────────────────────

const invitations = [
  { name: "La Belle Fête", style: "French Garden", downloads: "2,847", free: true, design: "floral-arch", bg: "#FDF8F5", accent: "#9BAD9B" },
  { name: "Golden Hour", style: "Champagne Luxe", downloads: "1,923", free: false, price: "$4.99", design: "gold-minimal", bg: "#FDFAF0", accent: "#C4A55A" },
  { name: "Bear Hugs", style: "Modern Teddy", downloads: "3,102", free: true, design: "teddy-cozy", bg: "#FDF5EE", accent: "#C9927A" },
  { name: "Amalfi Dreams", style: "Coastal Italian", downloads: "1,456", free: false, price: "$3.99", design: "coastal-bright", bg: "#F0F8FF", accent: "#4A7AB5" },
  { name: "Once Upon a Time", style: "Vintage Storybook", downloads: "987", free: true, design: "vintage-page", bg: "#F8F5EE", accent: "#9A8070" },
  { name: "Wild Blooms", style: "Boho Floral", downloads: "2,234", free: true, design: "boho-wildflower", bg: "#F8F5F0", accent: "#A08060" },
  { name: "Powder Blue Bow", style: "Classic Blue", downloads: "1,788", free: false, price: "$2.99", design: "blue-classic", bg: "#F0F8FF", accent: "#6A9AC4" },
  { name: "Chéri Bébé", style: "French Nursery", downloads: "1,102", free: true, design: "french-script", bg: "#FDF8F5", accent: "#C4A55A" },
];

// ── Main component ────────────────────────────────────────────────────────────

export default function MostSavedInvitations() {
  return (
    <section className="py-24 md:py-32" style={{ background: "#FDF5F0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Flower color="#E8C4C4" size={16} />
              <span
                className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A]"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Most Saved
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 400,
                color: "#2C2C2C",
              }}
            >
              Most Saved Invitations This Week
            </h2>
          </div>
          <button
            className="hidden md:block text-[11px] tracking-wider uppercase px-5 py-2.5 rounded-full border transition-all hover:-translate-y-0.5"
            style={{
              borderColor: "#E8C4C4",
              color: "#C9927A",
              fontFamily: "var(--font-ui)",
              background: "white",
            }}
          >
            Browse All →
          </button>
        </div>

        {/* Horizontal scroll */}
        <div
          className="flex gap-5 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        >
          {invitations.map((inv, i) => (
            <div key={i} className="flex-shrink-0 w-48 cursor-pointer group">
              {/* Invitation visual — portrait orientation */}
              <div
                className="relative w-48 h-64 bg-white shadow-md mb-3 overflow-hidden group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1"
                style={{ border: "1px solid #EDE5DC" }}
              >
                <InvitationDesign type={inv.design} bg={inv.bg} accent={inv.accent} />
              </div>
              {/* Info */}
              <p
                className="text-xs font-medium text-[#2C2C2C] mb-0.5"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                {inv.name}
              </p>
              <p
                className="text-[10px] text-[#2C2C2C]/50 mb-1"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                {inv.style}
              </p>
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] text-[#2C2C2C]/40"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  ↓ {inv.downloads}
                </span>
                <span
                  className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                    inv.free ? "bg-[#E8F0E8] text-[#6A8A6A]" : "bg-[#FDF5E8] text-[#9A7A3A]"
                  }`}
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {inv.free ? "Free" : inv.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
