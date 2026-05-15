import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export default function BlogSection() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const others = blogPosts.filter((p) => p.slug !== featured.slug).slice(0, 4);

  return (
    <section className="py-20" style={{ background: "white" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <p
              className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A] mb-2"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Ideas & Inspiration
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#2C2C2C",
              }}
            >
              Baby Shower Ideas & Inspiration
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-medium text-[#C9927A] hover:underline flex-shrink-0"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            View All Articles →
          </Link>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Large featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="lg:col-span-2 group rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300 block"
            style={{ borderColor: "#F0EBE4" }}
          >
            <div className="relative h-64 lg:h-72 overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span
                className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-semibold text-white"
                style={{ background: "#C9927A", fontFamily: "var(--font-ui)" }}
              >
                {featured.category}
              </span>
            </div>
            <div className="p-5 bg-white">
              <h3
                className="text-[#2C2C2C] leading-snug mb-3 group-hover:text-[#C9927A] transition-colors"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "1.2rem",
                }}
              >
                {featured.title}
              </h3>
              <p
                className="text-sm text-[#2C2C2C]/60 leading-relaxed mb-4 line-clamp-3"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span
                  className="text-[11px] text-[#2C2C2C]/40"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {featured.readTime}
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

          {/* 2x2 grid of smaller posts */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {others.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden border hover:shadow-lg transition-all duration-300 block"
                style={{ borderColor: "#F0EBE4" }}
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 50vw, 30vw"
                  />
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
                <div className="p-4 bg-white">
                  <h4
                    className="text-sm font-medium text-[#2C2C2C] leading-snug mb-2 group-hover:text-[#C9927A] transition-colors line-clamp-2"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {post.title}
                  </h4>
                  <p
                    className="text-[11px] text-[#2C2C2C]/50 leading-relaxed mb-3 line-clamp-2"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[10px] text-[#2C2C2C]/40"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {post.readTime}
                    </span>
                    <span
                      className="text-[10px] font-medium text-[#C9927A]"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
