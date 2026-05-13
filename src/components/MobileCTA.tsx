"use client";

export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pt-3 glass border-t border-blush-100 shadow-lg shadow-blush-100/50">
      <a
        href="#tools"
        className="flex items-center justify-center gap-2 w-full py-4 bg-blush-500 hover:bg-blush-600 active:bg-blush-700 text-white font-bold text-base rounded-2xl shadow-lg shadow-blush-300/50 transition-all duration-200 active:scale-95"
        style={{ fontFamily: "var(--font-nunito), sans-serif" }}
      >
        <span>🎀</span>
        <span>Start Planning Free</span>
        <span>→</span>
      </a>
    </div>
  );
}
