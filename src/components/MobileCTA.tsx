"use client";
import Link from "next/link";

export default function MobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-3 md:hidden"
      style={{ background: "linear-gradient(to top, white 60%, transparent)" }}
    >
      <Link
        href="/start"
        className="block w-full py-4 text-center text-white text-sm font-medium tracking-wide rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
        style={{
          background: "linear-gradient(135deg, #C9927A, #B5785F)",
          fontFamily: "var(--font-ui)",
        }}
      >
        Start Planning Free — It&apos;s Free
      </Link>
    </div>
  );
}
