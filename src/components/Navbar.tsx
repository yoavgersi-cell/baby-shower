"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Shop", href: "/shop", highlight: true },
  { label: "Invitations", href: "/category/invitations" },
  { label: "Games", href: "/category/games" },
  { label: "Printables", href: "/category/printables" },
  { label: "Bundles", href: "/category/bundles" },
  { label: "Freebies", href: "/freebies" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count, setIsOpen: openCart } = useCart();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-sm"
        }`}
        style={{ borderBottom: "1px solid #F0EBE4" }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span
                className="text-base font-medium tracking-wide text-[#2C2C2C]"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}
              >
                Plan My Baby Shower
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 text-[12px] font-medium tracking-wide rounded-lg transition-colors ${
                    link.highlight
                      ? "text-white rounded-full"
                      : "text-[#2C2C2C]/70 hover:text-[#2C2C2C] hover:bg-[#FAF8F5]"
                  }`}
                  style={{
                    fontFamily: "var(--font-ui)",
                    ...(link.highlight
                      ? {
                          background: "linear-gradient(135deg,#C9927A,#B5785F)",
                          padding: "6px 14px",
                        }
                      : {}),
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="hidden lg:flex w-9 h-9 items-center justify-center rounded-full hover:bg-[#FAF8F5] transition-colors"
                aria-label="Search"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2C2C2C" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>

              {/* Cart */}
              <button
                onClick={() => openCart(true)}
                className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#FAF8F5] transition-colors"
                aria-label="Open cart"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2C2C2C" strokeWidth="1.75">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
                {count > 0 && (
                  <span
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[9px] text-white flex items-center justify-center font-bold"
                    style={{ background: "#C9927A", fontFamily: "var(--font-ui)" }}
                  >
                    {count}
                  </span>
                )}
              </button>

              {/* CTA */}
              <Link
                href="/freebies"
                className="hidden lg:inline-flex items-center px-4 py-2 text-[#2C2C2C] text-[11px] font-medium tracking-wide rounded-full border transition-all hover:border-[#C9927A] hover:text-[#C9927A]"
                style={{ borderColor: "#E8E0D8", fontFamily: "var(--font-ui)" }}
              >
                Free Templates
              </Link>

              {/* Mobile hamburger */}
              <button
                className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-5 h-px bg-[#2C2C2C] transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-[5px]" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-px bg-[#2C2C2C] transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-px bg-[#2C2C2C] transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <div className="hidden lg:block pb-3">
              <input
                autoFocus
                type="text"
                placeholder="Search invitations, games, bundles, printables..."
                className="w-full px-5 py-3 rounded-full text-sm border outline-none focus:border-[#C9927A] bg-[#FAF8F5]"
                style={{ borderColor: "#E8E0D8", fontFamily: "var(--font-ui)", color: "#2C2C2C" }}
                onBlur={() => setSearchOpen(false)}
              />
            </div>
          )}
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t" style={{ borderColor: "#F0EBE4" }}>
            <div className="max-w-7xl mx-auto px-4 py-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2.5 rounded-full text-sm border outline-none mb-4 bg-[#FAF8F5]"
                style={{ borderColor: "#E8E0D8", fontFamily: "var(--font-ui)" }}
              />
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-xl text-sm font-medium text-center"
                    style={{
                      fontFamily: "var(--font-ui)",
                      background: link.highlight
                        ? "linear-gradient(135deg,#C9927A,#B5785F)"
                        : "#FAF8F5",
                      color: link.highlight ? "white" : "#2C2C2C",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
