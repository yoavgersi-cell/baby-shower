import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Plan My Baby Shower`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero image */}
        <div className="relative h-72 md:h-96 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
          <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
            <span
              className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold text-white mb-3"
              style={{ background: "#C9927A", fontFamily: "var(--font-ui)" }}
            >
              {post.category}
            </span>
            <h1
              className="text-white leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              }}
            >
              {post.title}
            </h1>
            <p
              className="text-white/60 text-sm mt-2"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              {post.readTime} · Published {post.publishedAt}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article content */}
            <article className="lg:col-span-2">
              <p
                className="text-lg text-[#5A4A42]/70 leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {post.excerpt}
              </p>

              {/* Mock article paragraphs */}
              <div
                className="prose prose-lg max-w-none"
                style={{ fontFamily: "var(--font-body)", color: "#2C2C2C" }}
              >
                <p className="text-[#5A4A42]/70 leading-relaxed mb-6" style={{ fontWeight: 300 }}>
                  Planning a baby shower can feel overwhelming, but with the right approach and resources, it becomes one of the most joyful experiences you&apos;ll have. Whether you&apos;re the host, the mother-to-be, or a close friend stepping in to help, this guide will walk you through everything you need to know.
                </p>
                <p className="text-[#5A4A42]/70 leading-relaxed mb-6" style={{ fontWeight: 300 }}>
                  The key is to start with a clear vision — a theme, a color palette, a vibe. Once you have that locked in, every other decision becomes much easier. Your invitations, your games, your decorations, your food — they all flow naturally from that single creative anchor.
                </p>
                <p className="text-[#5A4A42]/70 leading-relaxed mb-6" style={{ fontWeight: 300 }}>
                  We&apos;ve curated everything you need on this platform, from free printable games to editable invitation templates that work in Canva. You don&apos;t need a professional designer or a massive budget to throw a beautiful, memorable shower.
                </p>
                <div
                  className="rounded-2xl p-6 my-8"
                  style={{ background: "#F5F0E8", border: "1px solid #EDE5DC" }}
                >
                  <p
                    className="text-sm font-medium text-[#C9927A] mb-1"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    Pro Tip
                  </p>
                  <p
                    className="text-[#2C2C2C]/70 leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    Download our free 8-week planning checklist to stay on track from your very first planning step all the way to the day of the shower.
                  </p>
                  <Link
                    href="/freebies"
                    className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-[#C9927A] hover:underline"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    Get Free Checklist →
                  </Link>
                </div>
                <p className="text-[#5A4A42]/70 leading-relaxed mb-6" style={{ fontWeight: 300 }}>
                  Full article content coming soon. In the meantime, explore our free templates and themed inspiration below.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-8" style={{ borderTop: "1px solid #F0EBE4" }}>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[11px] font-medium"
                    style={{
                      background: "#FAF8F5",
                      color: "#2C2C2C",
                      border: "1px solid #EDE5DC",
                      fontFamily: "var(--font-ui)",
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </article>

            {/* Sidebar */}
            <aside>
              <div
                className="rounded-2xl p-5 mb-6"
                style={{ background: "#FAF6F0", border: "1px solid #EDE5DC" }}
              >
                <h3
                  className="text-sm font-medium text-[#2C2C2C] mb-4"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Free Downloads
                </h3>
                {[
                  "Baby Shower Bingo (30 cards)",
                  "Planning Checklist",
                  "Baby Predictions Cards",
                ].map((item) => (
                  <Link
                    key={item}
                    href="/freebies"
                    className="flex items-center gap-3 py-2.5 text-sm hover:text-[#C9927A] transition-colors"
                    style={{
                      fontFamily: "var(--font-ui)",
                      color: "#2C2C2C",
                      borderBottom: "1px solid #EDE5DC",
                    }}
                  >
                    <span className="text-[#9BAD9B] text-xs">↓</span>
                    {item}
                  </Link>
                ))}
                <Link
                  href="/freebies"
                  className="block mt-4 text-center py-2.5 rounded-xl text-xs font-medium text-white"
                  style={{
                    background: "linear-gradient(135deg,#C9927A,#B5785F)",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  Browse All Freebies →
                </Link>
              </div>

              {related.length > 0 && (
                <div>
                  <h3
                    className="text-sm font-medium text-[#2C2C2C] mb-4"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    Related Articles
                  </h3>
                  {related.map((rp) => (
                    <Link
                      key={rp.slug}
                      href={`/blog/${rp.slug}`}
                      className="flex gap-3 mb-4 group"
                    >
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={rp.image}
                          alt={rp.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="64px"
                        />
                      </div>
                      <div>
                        <p
                          className="text-xs font-medium text-[#2C2C2C] leading-snug group-hover:text-[#C9927A] transition-colors line-clamp-2"
                          style={{ fontFamily: "var(--font-ui)" }}
                        >
                          {rp.title}
                        </p>
                        <p
                          className="text-[10px] text-[#2C2C2C]/40 mt-1"
                          style={{ fontFamily: "var(--font-ui)" }}
                        >
                          {rp.readTime}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
