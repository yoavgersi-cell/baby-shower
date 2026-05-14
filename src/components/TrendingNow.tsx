"use client";
import { useRef } from "react";

const trends = [
  { label: "French Garden Picnic", color: "#E8F0E4", accent: "#9BAD9B" },
  { label: "Champagne & Bows", color: "#FDF5E8", accent: "#C4A55A" },
  { label: "Modern Teddy Bear", color: "#F5EDE4", accent: "#C9927A" },
  { label: "Coastal Italian", color: "#E8F4F8", accent: "#7AADC4" },
  { label: "Soft Cowboy Baby", color: "#F5EDE0", accent: "#B5845A" },
  { label: "Vintage Storybook", color: "#F0EDF8", accent: "#9A8AB4" },
  { label: "Boho Wildflower", color: "#F5F0E4", accent: "#A0906A" },
  { label: "Sage & Linen", color: "#EEF2EE", accent: "#7A9A7A" },
  { label: "Pink Bow Dream", color: "#FEF0F4", accent: "#D4789A" },
  { label: "Moon & Stars Night", color: "#EEF0F8", accent: "#6A7AAA" },
];

export default function TrendingNow() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section className="bg-white border-y" style={{ borderColor: "#E8E0D8" }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#C9927A">
              <path d="M12 2C12 2 8 6 8 11C8 13.8 9.8 16 12 16C14.2 16 16 13.8 16 11C16 8.5 14.5 6 14.5 6C14.5 6 14 9 12 9C10 9 10 7 10 7C10 7 12 2 12 2Z" />
              <path d="M12 16C9.2 16 7 18.2 7 21H17C17 18.2 14.8 16 12 16Z" opacity="0.5" />
            </svg>
            <span
              className="text-[10px] tracking-[0.15em] uppercase text-[#2C2C2C]/50 font-medium whitespace-nowrap"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Trending
            </span>
          </div>
          <div
            ref={ref}
            className="flex gap-2 overflow-x-auto pb-0.5"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
          >
            {trends.map((t, i) => (
              <button
                key={i}
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-medium whitespace-nowrap hover:opacity-90 transition-all cursor-pointer"
                style={{
                  background: t.color,
                  color: t.accent,
                  border: `1px solid ${t.accent}30`,
                  fontFamily: "var(--font-ui)",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: t.accent }}
                />
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
