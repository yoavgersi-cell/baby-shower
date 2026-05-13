"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

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
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E8E0D8]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-[#C4A55A] flex items-center justify-center flex-shrink-0">
              <span
                className="text-[10px] tracking-widest text-[#C4A55A] font-light"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                PBS
              </span>
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
                className="text-[11px] tracking-[0.12em] uppercase text-[#2C2C2C]/70 hover:text-[#2C2C2C] transition-colors"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/start"
              className="text-[11px] tracking-[0.12em] uppercase px-5 py-2.5 border border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white transition-all duration-300"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Start Planning
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
                className={`block w-5 h-px bg-[#2C2C2C] transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-[#2C2C2C] transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-[#2C2C2C] transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-[#E8E0D8] py-6 space-y-4">
            {["Themes", "Tools", "Printables", "Games", "Blog"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block px-4 text-sm tracking-widest uppercase text-[#2C2C2C]/70 hover:text-[#2C2C2C] transition-colors"
                style={{ fontFamily: "var(--font-ui)" }}
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                href="/start"
                className="block text-center text-[11px] tracking-widest uppercase px-5 py-3 border border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white transition-all duration-300"
                style={{ fontFamily: "var(--font-ui)" }}
                onClick={() => setMobileOpen(false)}
              >
                Start Planning
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
