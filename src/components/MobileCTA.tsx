"use client";

export default function MobileCTA() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pt-3 border-t border-[#E8E0D8]"
      style={{ background: "rgba(250,248,245,0.97)", backdropFilter: "blur(8px)" }}
    >
      <a
        href="/start"
        className="flex items-center justify-center gap-3 w-full py-4 bg-[#2C2C2C] hover:bg-[#3D2B1F] active:bg-[#1A1A1A] text-white text-[11px] tracking-[0.15em] uppercase transition-all duration-200 active:scale-98"
        style={{ fontFamily: "var(--font-ui)" }}
      >
        Start Planning
        <span className="text-[#C4A55A]">→</span>
      </a>
    </div>
  );
}
