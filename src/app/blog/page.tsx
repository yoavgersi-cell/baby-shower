import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Baby Shower Blog | Ideas, Tips & Inspiration",
  description:
    "Baby shower ideas, themes, game guides, and planning tips. Real inspiration for planning an unforgettable baby shower.",
  keywords:
    "baby shower blog, baby shower ideas, baby shower tips, baby shower inspiration, baby shower planning",
};

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section
          className="py-16 px-4 lg:px-8"
          style={{ background: "linear-gradient(160deg, #FDF9F5 0%, #F8F0E8 100%)" }}
        >
          <div className="max-w-7xl mx-auto">
            <p
              className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A] mb-3"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Ideas & Inspiration
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 400,
                color: "#2C2C2C",
              }}
            >
              Baby Shower Ideas & Inspiration
            </h1>
            <p
              className="mt-3 text-[#5A4A42]/60 max-w-lg"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Real tips, theme guides, and planning advice from people who&apos;ve been there.
            </p>
          </div>
        </section>

        {/* Category filters */}
        <section className="py-6 px-4 lg:px-8 border-b" style={{ borderColor: "#F0EBE4", background: "white" }}>
          <div className="max-w-7xl mx-auto flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full text-xs font-medium cursor-pointer transition-all"
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

        {/* Posts grid */}
        <section className="py-16 px-4 lg:px-8" style={{ background: "white" }}>
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
                style={{ borderColor: "#F0EBE4" }}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {post.featured && (
                    <span
                      className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white"
                      style={{ background: "#C9927A", fontFamily: "var(--font-ui)" }}
                    >
                      Featured
                    </span>
                  )}
                  <span
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold"
                    style={{
                      background: "white",
                      color: "#C9927A",
                      fontFamily: "var(--font-ui)",
                    }}
                  >
                    {post.category}
                  </span>
                </div>
                <div className="p-5 bg-white">
                  <h2
                    className="font-medium text-[#2C2C2C] leading-snug mb-2 group-hover:text-[#C9927A] transition-colors"
                    style={{ fontFamily: "var(--font-ui)", fontSize: "0.95rem" }}
                  >
                    {post.title}
                  </h2>
                  <p
                    className="text-[12px] text-[#2C2C2C]/55 leading-relaxed mb-4 line-clamp-3"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[10px] text-[#2C2C2C]/40"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {post.readTime} · {post.publishedAt}
                    </span>
                    <span
                      className="text-[11px] font-medium text-[#C9927A]"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
