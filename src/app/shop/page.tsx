import type { Metadata } from "next";
import ShopGrid from "@/components/ShopGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shop Templates | Plan My Baby Shower",
  description:
    "Download beautiful baby shower invitation templates, printable games, and planning bundles. Instant PDF download.",
};

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Shop Hero Banner */}
        <section
          className="pt-24 pb-12 px-6"
          style={{
            background:
              "linear-gradient(160deg, #FDF9F5 0%, #F8F0E8 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <p
              className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A] mb-3"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Digital Downloads · Instant Access
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 400,
                color: "#2C2C2C",
                lineHeight: 1.1,
              }}
            >
              Baby Shower Templates
            </h1>
            <p
              className="mt-4 text-[#5A4A42]/70 max-w-lg mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Professionally designed invitations, games, and printables.
              Download instantly. Print at home or at your local print shop.
            </p>
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {[
                { icon: "↓", label: "Instant Download" },
                { icon: "✎", label: "Editable in Canva" },
                { icon: "✓", label: "Print-Ready PDF" },
                { icon: "♾", label: "Unlimited Prints" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 text-sm text-[#2C2C2C]/60"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  <span className="text-[#C9927A]">{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>
          </div>
        </section>
        <ShopGrid />
      </main>
      <Footer />
    </>
  );
}
