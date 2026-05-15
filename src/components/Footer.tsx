"use client";
import { useState } from "react";
import Link from "next/link";

const footerLinks = {
  "Plan Your Shower": [
    { label: "Checklist Builder", href: "/printables/baby-shower-planning-checklist" },
    { label: "Budget Tracker", href: "/freebies" },
    { label: "RSVP Site", href: "/rsvp" },
    { label: "Theme Finder Quiz", href: "/themes" },
    { label: "Guest List", href: "/tools" },
  ],
  "Invitations": [
    { label: "Garden Floral", href: "/shop/garden-floral-invitation" },
    { label: "Champagne & Gold", href: "/shop/champagne-gold-invitation" },
    { label: "Teddy Bear", href: "/shop/teddy-bear-invitation" },
    { label: "Safari", href: "/themes/safari" },
    { label: "Boho", href: "/themes/boho-wildflower" },
    { label: "Browse All", href: "/invitations" },
  ],
  "Games & Printables": [
    { label: "Baby Bingo", href: "/games/baby-shower-bingo" },
    { label: "Predictions Cards", href: "/games/baby-predictions" },
    { label: "Price Is Right", href: "/games/price-is-right-baby" },
    { label: "Word Scramble", href: "/games/baby-word-scramble" },
    { label: "Browse All", href: "/games" },
  ],
  "Inspiration": [
    { label: "Blog", href: "/blog" },
    { label: "Themes", href: "/themes" },
    { label: "Music Playlists", href: "/music" },
    { label: "Pinterest", href: "#" },
    { label: "Instagram", href: "#" },
  ],
  "Shop": [
    { label: "Bundles", href: "/shop" },
    { label: "Invitations", href: "/invitations" },
    { label: "Games", href: "/games" },
    { label: "Signs & Banners", href: "/printables" },
    { label: "View All Products", href: "/shop" },
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
    <footer style={{ background: "#1A1502" }} className="relative overflow-hidden">
      {/* Newsletter section */}
      <div
        className="relative z-10 border-b"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-sm">
              <h3
                className="leading-tight mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: "1.6rem",
                  color: "#FAF8F2",
                }}
              >
                Get Free Templates + Weekly Inspiration
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                Join 50,000+ mamas. Free templates, curated themes, and no-noise planning tips weekly.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="flex gap-0 w-full md:w-auto">
              {subscribed ? (
                <div
                  className="flex items-center gap-3 px-6 py-3 text-sm"
                  style={{
                    color: "#9BAD9B",
                    fontFamily: "var(--font-ui)",
                    border: "1px solid rgba(155,173,155,0.3)",
                    borderRadius: 8,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7l3 3 7-7"
                      stroke="#9BAD9B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  You&apos;re subscribed!
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 md:w-56 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRight: "none",
                      borderRadius: "8px 0 0 8px",
                      fontFamily: "var(--font-body)",
                    }}
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 text-[11px] tracking-[0.12em] uppercase whitespace-nowrap hover:brightness-110 transition-all"
                    style={{
                      background: "linear-gradient(135deg, #C9927A, #B5785F)",
                      color: "white",
                      borderRadius: "0 8px 8px 0",
                      fontFamily: "var(--font-ui)",
                    }}
                  >
                    Subscribe
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <span
                className="font-light"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  color: "#FAF8F2",
                }}
              >
                Plan My Baby Shower
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed mb-6 italic"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                color: "rgba(255,255,255,0.35)",
              }}
            >
              Creating extraordinary celebrations, one detail at a time.
            </p>
            <div className="flex gap-2">
              {[
                { icon: <PinterestIcon />, label: "Pinterest" },
                { icon: <InstagramIcon />, label: "Instagram" },
                { icon: <TikTokIcon />, label: "TikTok" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.35)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, items]) => (
            <div key={category}>
              <h4
                className="text-[10px] tracking-[0.2em] uppercase mb-5"
                style={{
                  fontFamily: "var(--font-ui)",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm transition-colors duration-150 hover:text-white"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.45)",
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="relative z-10 border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p
              className="text-[11px]"
              style={{
                fontFamily: "var(--font-ui)",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              &copy; 2026 Plan My Baby Shower. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {[
                { label: "Privacy", href: "#" },
                { label: "Terms", href: "#" },
                { label: "Contact", href: "#" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[11px] transition-colors hover:text-white/60"
                  style={{
                    fontFamily: "var(--font-ui)",
                    color: "rgba(255,255,255,0.25)",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
