import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { themes } from "@/data/themes";
import { products } from "@/data/products";

interface Props {
  params: Promise<{ theme: string }>;
}

export async function generateStaticParams() {
  return themes.map((t) => ({ theme: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { theme: slug } = await params;
  const theme = themes.find((t) => t.slug === slug);
  if (!theme) return { title: "Theme Not Found" };
  return {
    title: `${theme.name} Baby Shower Theme | Plan My Baby Shower`,
    description: `Plan the perfect ${theme.name} baby shower. ${theme.description} Browse invitations, games, and printables.`,
    keywords: `${theme.name} baby shower, ${theme.name} baby shower theme, ${theme.name} baby shower ideas, ${theme.name} decor`,
    openGraph: {
      title: `${theme.name} Baby Shower Theme`,
      description: theme.description,
      images: [theme.coverImage],
      type: "website",
    },
  };
}

export default async function ThemePage({ params }: Props) {
  const { theme: slug } = await params;
  const theme = themes.find((t) => t.slug === slug);
  if (!theme) notFound();

  const relatedProducts = products.filter((p) =>
    theme.relatedProducts.includes(p.id)
  );
  const otherThemes = themes.filter((t) => t.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <div className="relative h-80 md:h-[500px] overflow-hidden">
          <Image
            src={theme.coverImage}
            alt={theme.name}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 max-w-5xl mx-auto">
            {theme.isTrending && (
              <span
                className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold text-white mb-3"
                style={{ background: "#C9927A", fontFamily: "var(--font-ui)" }}
              >
                Trending 2025
              </span>
            )}
            <h1
              className="text-white leading-tight mb-2"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
              }}
            >
              {theme.name}
            </h1>
            <p
              className="text-white/70 text-lg"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
            >
              {theme.tagline}
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <p
                className="text-lg text-[#5A4A42]/70 leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {theme.description}
              </p>

              {/* Color palette */}
              <div className="mb-10">
                <h2
                  className="text-[#2C2C2C] mb-4"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "1.2rem" }}
                >
                  Color Palette
                </h2>
                <div className="flex gap-3">
                  {theme.palette.map((color, i) => (
                    <div key={i} className="text-center">
                      <div
                        className="w-12 h-12 rounded-xl border border-white shadow-md mb-2"
                        style={{ background: color }}
                      />
                      <p
                        className="text-[9px] text-[#2C2C2C]/40"
                        style={{ fontFamily: "var(--font-ui)" }}
                      >
                        {color}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related products */}
              {relatedProducts.length > 0 && (
                <div>
                  <h2
                    className="text-[#2C2C2C] mb-6"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "1.2rem" }}
                  >
                    Templates for This Theme
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {relatedProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div
                className="sticky top-24 rounded-2xl p-5 border"
                style={{ borderColor: "#EDE5DC", background: "#FAF6F0" }}
              >
                <h3
                  className="text-sm font-medium text-[#2C2C2C] mb-4"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Theme Details
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#2C2C2C]/50" style={{ fontFamily: "var(--font-ui)" }}>
                      Category
                    </span>
                    <span className="font-medium text-[#2C2C2C]" style={{ fontFamily: "var(--font-ui)" }}>
                      {theme.category}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#2C2C2C]/50" style={{ fontFamily: "var(--font-ui)" }}>
                      Saves
                    </span>
                    <span className="font-medium text-[#2C2C2C]" style={{ fontFamily: "var(--font-ui)" }}>
                      {theme.saves}
                    </span>
                  </div>
                </div>
                <Link
                  href="/shop"
                  className="block w-full py-3 text-center text-white text-sm font-medium rounded-full mb-3"
                  style={{
                    background: "linear-gradient(135deg,#C9927A,#B5785F)",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  Shop This Theme →
                </Link>
                <Link
                  href="/themes"
                  className="block text-center text-sm text-[#2C2C2C]/50 hover:text-[#C9927A] transition-colors"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  ← All Themes
                </Link>
              </div>
            </div>
          </div>

          {/* Other themes */}
          <div className="mt-20">
            <h2
              className="text-[#2C2C2C] mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "1.5rem" }}
            >
              More Themes to Explore
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {otherThemes.map((t) => (
                <Link
                  key={t.slug}
                  href={`/themes/${t.slug}`}
                  className="group relative rounded-2xl overflow-hidden block"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={t.coverImage}
                    alt={t.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3
                      className="text-white text-base leading-tight"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      {t.name}
                    </h3>
                    <p
                      className="text-white/60 text-xs"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {t.saves} saves
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
