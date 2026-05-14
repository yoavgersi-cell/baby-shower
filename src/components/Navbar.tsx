"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Flower from "@/components/ui/Flower";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      style={{ borderBottom: scrolled ? "1px solid #EDE5DC" : "none" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors"
              style={{ borderColor: "#C4A55A" }}
            >
              <Flower color="#C4A55A" size={16} />
            </div>
            <span
              className="text-[#2C2C2C] font-light tracking-wide hidden sm:block"
              style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}
            >
              Plan My Baby Shower
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {["Themes", "Tools", "Printables", "Games", "Blog"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-[11px] tracking-[0.12em] uppercase transition-colors"
                style={{ fontFamily: "var(--font-ui)", color: "#2C2C2C" }}
                onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "#C9927A"}
                onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "#2C2C2C"}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/start"
              className="inline-flex items-center gap-2 text-[11px] tracking-wide font-medium px-5 py-2.5 text-white rounded-full transition-all hover:-translate-y-0.5 hover:shadow-md"
              style={{
                background: "linear-gradient(135deg, #C9927A, #B5785F)",
                fontFamily: "var(--font-ui)",
              }}
            >
              Start Planning Free
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block w-5 h-px transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                style={{ background: "#2C2C2C" }}
              />
              <span
                className={`block w-5 h-px transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
                style={{ background: "#2C2C2C" }}
              />
              <span
                className={`block w-5 h-px transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
                style={{ background: "#2C2C2C" }}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="lg:hidden py-6 space-y-4"
            style={{ background: "white", borderTop: "1px solid #EDE5DC" }}
          >
            {["Themes", "Tools", "Printables", "Games", "Blog"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block px-4 text-sm tracking-widest uppercase text-[#2C2C2C]/70 hover:text-[#C9927A] transition-colors"
                style={{ fontFamily: "var(--font-ui)" }}
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                href="/start"
                className="block text-center text-[11px] tracking-widest uppercase px-5 py-3 text-white rounded-full transition-all"
                style={{
                  background: "linear-gradient(135deg, #C9927A, #B5785F)",
                  fontFamily: "var(--font-ui)",
                }}
                onClick={() => setMobileOpen(false)}
              >
                Start Planning Free
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
