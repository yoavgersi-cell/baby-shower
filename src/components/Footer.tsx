"use client";
import { useState } from "react";
import Link from "next/link";

const links = {
  Tools: [
    "Invitation Maker",
    "Game Generator",
    "Theme Finder",
    "Printable Checklist",
    "RSVP Website",
    "Bingo Generator",
  ],
  Themes: [
    "Garden Botanica",
    "Safari Serenity",
    "Boho Desert",
    "Neutral Luxe",
    "Midnight Garden",
    "Pink Peonies",
  ],
  Printables: [
    "Invitations",
    "Game Cards",
    "Signs & Banners",
    "Bundle Packs",
    "Checklists",
    "Thank You Cards",
  ],
  Company: [
    "About Us",
    "Blog",
    "Press",
    "Careers",
    "Privacy Policy",
    "Terms of Service",
  ],
};

function PinterestIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer style={{ background: "#FAF8F5" }}>
      {/* Newsletter bar */}
      <div className="border-t border-b border-[#E8E0D8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-sm">
              <h3
                className="text-[#2C2C2C] mb-2 leading-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: "1.6rem",
                }}
              >
                Inspiration &amp; Printables, Delivered
              </h3>
              <p
                className="text-sm text-[#2C2C2C]/50 leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                Weekly curation of themes, free printables, and planning ideas. No noise, ever.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="flex gap-0 w-full md:w-auto">
              {subscribed ? (
                <div
                  className="flex items-center gap-3 px-6 py-3 border border-[#9BAD9B] text-[#6B8A6B] text-sm"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l3 3 7-7" stroke="#6B8A6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  You&apos;re subscribed
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 md:w-56 px-4 py-3 border border-[#E8E0D8] bg-white text-sm text-[#2C2C2C] placeholder-[#2C2C2C]/30 focus:outline-none focus:border-[#C4A55A] transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#2C2C2C] text-white text-[11px] tracking-[0.12em] uppercase hover:bg-[#3D2B1F] transition-colors duration-300 whitespace-nowrap"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    Subscribe
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo + tagline col */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 w-fit">
              <div className="w-7 h-7 rounded-full border border-[#C4A55A] flex items-center justify-center flex-shrink-0">
                <span
                  className="text-[9px] tracking-widest text-[#C4A55A] font-light"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  PBS
                </span>
              </div>
              <span
                className="text-sm text-[#2C2C2C] font-light"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Plan My Baby Shower
              </span>
            </Link>

            <p
              className="text-sm text-[#2C2C2C]/45 leading-relaxed mb-6 italic"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Creating extraordinary celebrations, one detail at a time.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: <PinterestIcon />, label: "Pinterest" },
                { icon: <InstagramIcon />, label: "Instagram" },
                { icon: <TikTokIcon />, label: "TikTok" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-8 h-8 border border-[#E8E0D8] flex items-center justify-center text-[#2C2C2C]/40 hover:text-[#2C2C2C] hover:border-[#2C2C2C] transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4
                className="text-[10px] tracking-[0.2em] uppercase text-[#2C2C2C]/40 mb-5"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-[#2C2C2C]/60 hover:text-[#2C2C2C] transition-colors duration-150"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#E8E0D8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p
              className="text-[11px] text-[#2C2C2C]/35"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              &copy; 2026 Plan My Baby Shower. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy", "Terms", "Contact"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[11px] text-[#2C2C2C]/35 hover:text-[#2C2C2C] transition-colors"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
