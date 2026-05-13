"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Themes", href: "#themes" },
    { label: "Tools", href: "#tools" },
    { label: "Printables", href: "#printables" },
    { label: "Games", href: "#how-it-works" },
    { label: "Blog", href: "#" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass border-b border-blush-100 shadow-sm shadow-blush-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:scale-110 transition-transform duration-200"
              >
                {/* Bow/Ribbon SVG */}
                <ellipse cx="10" cy="16" rx="8" ry="5" fill="#f4a8c7" opacity="0.9" />
                <ellipse cx="22" cy="16" rx="8" ry="5" fill="#ec72a4" opacity="0.9" />
                <ellipse cx="10" cy="16" rx="5" ry="3" fill="#fce8f1" opacity="0.6" />
                <ellipse cx="22" cy="16" rx="5" ry="3" fill="#fce8f1" opacity="0.6" />
                <circle cx="16" cy="16" r="4" fill="#e04880" />
                <circle cx="16" cy="16" r="2" fill="#cd2d62" />
                {/* Ribbon tails */}
                <path d="M14 19 Q11 25 8 27" stroke="#ec72a4" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M18 19 Q21 25 24 27" stroke="#ec72a4" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-blush-700 font-bold text-base md:text-lg leading-tight"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Plan My
              </span>
              <span
                className="text-blush-500 font-bold text-base md:text-lg leading-tight"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Baby Shower
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-blush-600 rounded-full hover:bg-blush-50 transition-all duration-200"
                style={{ fontFamily: "var(--font-nunito), sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="#tools"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-blush-500 hover:bg-blush-600 text-white text-sm font-bold rounded-full shadow-md shadow-blush-200 hover:shadow-lg hover:shadow-blush-300 transition-all duration-200 hover:scale-105"
              style={{ fontFamily: "var(--font-nunito), sans-serif" }}
            >
              <span>Start Planning</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-blush-50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-blush-600 transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-blush-600 transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-blush-600 transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass border-t border-blush-100 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-sm font-semibold text-gray-700 hover:text-blush-600 hover:bg-blush-50 rounded-xl transition-all duration-150"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-blush-100 mt-1">
            <Link
              href="#tools"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-blush-500 hover:bg-blush-600 text-white text-sm font-bold rounded-xl shadow-md transition-all duration-200"
            >
              🎀 Start Planning Free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
