import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { freebies } from "@/data/freebies";

export const metadata: Metadata = {
  title: "Free Baby Shower Printables — No Sign-Up Required",
  description:
    "Download free baby shower games, invitations, checklists, and planning tools. Most are instant download — no email required.",
  keywords:
    "free baby shower printables, free baby shower games, free baby shower invitations, free baby shower checklist",
};

const categories = ["All", ...Array.from(new Set(freebies.map((f) => f.category)))];

export default function FreebiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section
          className="py-16 px-4 lg:px-8"
          style={{ background: "linear-gradient(160deg, #F5F0E8 0%, #EDE5DC 100%)" }}
        >
          <div className="max-w-7xl mx-auto">
            <p
              className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A] mb-3"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Free Downloads
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 400,
                color: "#2C2C2C",
              }}
            >
              Free Baby Shower Printables
            </h1>
            <p
              className="mt-3 text-[#5A4A42]/60 max-w-lg"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              No sign-up required for most downloads. Just click, download, and print.
              <span className="text-[#C9927A]">*</span>
            </p>
            <p
              className="text-[11px] text-[#2C2C2C]/40 mt-1"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              *Some items delivered by email
            </p>
          </div>
        </section>

        {/* Category filter */}
        <section
          className="py-5 px-4 lg:px-8 border-b"
          style={{ borderColor: "#F0EBE4", background: "white" }}
        >
          <div className="max-w-7xl mx-auto flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full text-xs font-medium cursor-pointer"
                style={{
                  fontFamily: "var(--font-ui)",
                  background: cat === "All" ? "#C9927A" : "#FAF8F5",
                  color: cat === "All" ? "white" : "#2C2C2C",
                  border: "1px solid",
                  borderColor: cat === "All" ? "#C9927A" : "#EDE5DC",
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </section>

        {/* Freebies grid */}
        <section className="py-16 px-4 lg:px-8" style={{ background: "white" }}>
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {freebies.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: "#F0EBE4" }}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold"
                    style={{ background: "white", color: "#C9927A", fontFamily: "var(--font-ui)" }}
                  >
                    {item.category}
                  </span>
                  {item.requiresEmail && (
                    <span
                      className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-semibold"
                      style={{ background: "#FDF5E8", color: "#C4A55A", fontFamily: "var(--font-ui)" }}
                    >
                      Free w/ Email
                    </span>
                  )}
                </div>
                <div className="p-5 bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="px-2 py-0.5 rounded text-[9px] font-medium"
                      style={{ background: "#E8F0E8", color: "#6A8A6A", fontFamily: "var(--font-ui)" }}
                    >
                      {item.fileType}
                    </span>
                    <span
                      className="text-[10px] text-[#2C2C2C]/40"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {item.downloadCount} downloads
                    </span>
                  </div>
                  <h2
                    className="font-medium text-[#2C2C2C] leading-snug mb-2"
                    style={{ fontFamily: "var(--font-ui)", fontSize: "0.95rem" }}
                  >
                    {item.title}
                  </h2>
                  <p
                    className="text-[12px] text-[#2C2C2C]/55 leading-relaxed mb-4 line-clamp-2"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {item.description}
                  </p>
                  <button
                    className="w-full py-2.5 text-white text-xs font-medium rounded-xl transition-all hover:brightness-110"
                    style={{
                      background: "linear-gradient(135deg,#C9927A,#B5785F)",
                      fontFamily: "var(--font-ui)",
                    }}
                  >
                    {item.requiresEmail ? "Get Free with Email →" : "Download Free →"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section
          className="py-16 px-4 lg:px-8 text-center"
          style={{ background: "#FAF6F0" }}
        >
          <h2
            className="text-[#2C2C2C] mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            Need More? Shop Premium Templates
          </h2>
          <p
            className="text-[#5A4A42]/60 max-w-md mx-auto mb-8"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Our premium templates include full invitation suites, matching game cards, and complete bundles — all instantly editable.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 text-white text-sm font-medium rounded-full shadow-lg"
            style={{ background: "linear-gradient(135deg,#C9927A,#B5785F)", fontFamily: "var(--font-ui)" }}
          >
            Browse Premium Templates →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
