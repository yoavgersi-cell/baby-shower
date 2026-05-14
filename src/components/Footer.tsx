"use client";
import { useState } from "react";
import Link from "next/link";
import Flower from "@/components/ui/Flower";
import Bow from "@/components/ui/Bow";

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

const links = {
  Themes: ["Garden Botanica", "Safari Golden Hour", "Boho Desert", "Neutral Luxe", "Midnight Florals", "Pink Bow Dream"],
  Tools: ["Invitation Maker", "Game Generator", "Theme Finder", "Printable Checklist", "RSVP Website", "Bingo Generator"],
  Printables: ["Invitations", "Game Cards", "Signs & Banners", "Bundle Packs", "Checklists", "Thank You Cards"],
  Company: ["About Us", "Blog", "Press", "Careers", "Privacy Policy", "Terms of Service"],
};

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
      {/* Background flower decorations (very low opacity) */}
      <div className="absolute top-12 left-8 opacity-[0.07] pointer-events-none">
        <Flower color="#C4A55A" size={120} />
      </div>
      <div className="absolute bottom-20 right-12 opacity-[0.05] pointer-events-none">
        <Flower color="#E8C4C4" size={100} />
      </div>
      <div className="absolute top-1/2 left-1/3 opacity-[0.04] pointer-events-none">
        <Flower color="#9BAD9B" size={80} />
      </div>
      <div className="absolute top-8 right-1/4 opacity-[0.06] pointer-events-none">
        <Flower color="#C4A55A" size={60} />
      </div>

      {/* Newsletter section */}
      <div className="relative z-10 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-sm">
              <div className="flex items-center gap-2 mb-3">
                <Bow color="#C4A55A" size={28} />
                <h3
                  className="leading-tight"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 300,
                    fontSize: "1.6rem",
                    color: "#FAF8F2",
                  }}
                >
                  Inspiration, Delivered
                </h3>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "rgba(255,255,255,0.45)" }}
              >
                Weekly curation of themes, free printables, and planning ideas. No noise, ever.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="flex gap-0 w-full md:w-auto">
              {subscribed ? (
                <div
                  className="flex items-center gap-3 px-6 py-3 text-sm"
                  style={{ color: "#9BAD9B", fontFamily: "var(--font-ui)", border: "1px solid rgba(155,173,155,0.3)", borderRadius: 8 }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l3 3 7-7" stroke="#9BAD9B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                    className="flex-1 md:w-56 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none transition-colors"
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
                    className="px-6 py-3 text-[11px] tracking-[0.12em] uppercase whitespace-nowrap transition-all hover:brightness-110"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo + tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5 w-fit group">
              <div className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors group-hover:border-[#C4A55A]" style={{ borderColor: "rgba(196,165,90,0.4)" }}>
                <span className="text-[9px] tracking-widest font-light" style={{ color: "#C4A55A", fontFamily: "var(--font-ui)" }}>PBS</span>
              </div>
              <span
                className="font-light"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#FAF8F2" }}
              >
                Plan My Baby Shower
              </span>
            </Link>

            <div className="mb-4 opacity-50">
              <Bow color="#E8C4C4" size={32} />
            </div>

            <p
              className="text-sm leading-relaxed mb-6 italic"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "rgba(255,255,255,0.35)" }}
            >
              Creating extraordinary celebrations, one detail at a time.
            </p>

            {/* Social icons */}
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
                  className="w-8 h-8 flex items-center justify-center transition-all duration-200 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.35)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#C4A55A";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(196,165,90,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.35)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div className="flex items-center gap-2 mb-5">
                <Flower color="rgba(196,165,90,0.5)" size={10} />
                <h4
                  className="text-[10px] tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.35)" }}
                >
                  {category}
                </h4>
              </div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm transition-colors duration-150"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "#FAF8F2"}
                      onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)"}
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
      <div className="relative z-10 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Flower color="rgba(196,165,90,0.3)" size={10} />
              <p className="text-[11px]" style={{ fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.25)" }}>
                &copy; 2026 Plan My Baby Shower. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-5">
              {["Privacy", "Terms", "Contact"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[11px] transition-colors"
                  style={{ fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.25)" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.25)"}
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
