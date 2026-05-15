import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { games } from "@/data/games";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = games.find((g) => g.slug === slug);
  if (!game) return { title: "Game Not Found" };
  return {
    title: `${game.name} Baby Shower Game | Plan My Baby Shower`,
    description: `${game.description} ${game.isFree ? "Free printable" : `Only $${game.price}`} — instant download.`,
    keywords: `${game.name}, baby shower games, printable baby shower games, ${game.category.toLowerCase()}`,
    openGraph: {
      title: `${game.name} | Baby Shower Game`,
      description: game.description,
      images: [game.image],
    },
  };
}

export default async function GamePage({ params }: Props) {
  const { slug } = await params;
  const game = games.find((g) => g.slug === slug);
  if (!game) notFound();

  const related = games.filter((g) => g.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: image + how to play */}
            <div className="lg:col-span-3">
              <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                <Image
                  src={game.image}
                  alt={game.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>

              <h2
                className="text-[#2C2C2C] mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "1.4rem",
                }}
              >
                How to Play
              </h2>
              <ol className="space-y-4">
                {game.howToPlay.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: "#C9927A", fontFamily: "var(--font-ui)" }}
                    >
                      {i + 1}
                    </span>
                    <p
                      className="text-[#2C2C2C]/70 leading-relaxed pt-0.5"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                    >
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Right: CTA card + details */}
            <div className="lg:col-span-2">
              <div
                className="sticky top-24 rounded-2xl p-6 border"
                style={{ borderColor: "#EDE5DC", background: "#FAF6F0" }}
              >
                <span
                  className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold mb-3"
                  style={{
                    background: game.isFree ? "#E8F0E8" : "#FDF5E8",
                    color: game.isFree ? "#6A8A6A" : "#C4A55A",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  {game.isFree ? "Free Download" : `$${game.price}`}
                </span>
                <h1
                  className="text-[#2C2C2C] leading-tight mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    fontSize: "1.6rem",
                  }}
                >
                  {game.name}
                </h1>
                <p
                  className="text-[#5A4A42]/60 text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {game.description}
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    { label: "Players", value: game.players },
                    { label: "Duration", value: game.duration },
                    { label: "Difficulty", value: game.difficulty },
                    { label: "Category", value: game.category },
                  ].map((detail) => (
                    <div key={detail.label} className="flex justify-between items-center text-sm">
                      <span
                        className="text-[#2C2C2C]/50"
                        style={{ fontFamily: "var(--font-ui)" }}
                      >
                        {detail.label}
                      </span>
                      <span
                        className="font-medium text-[#2C2C2C]"
                        style={{ fontFamily: "var(--font-ui)" }}
                      >
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className="w-full py-3.5 text-white text-sm font-medium rounded-full mb-3 transition-all hover:brightness-110 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg,#C9927A,#B5785F)",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  {game.isFree ? "Download Free →" : `Buy Now — $${game.price}`}
                </button>
                <Link
                  href="/games"
                  className="block text-center text-sm text-[#2C2C2C]/50 hover:text-[#C9927A] transition-colors"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  ← Back to all games
                </Link>
              </div>
            </div>
          </div>

          {/* Related games */}
          {related.length > 0 && (
            <div className="mt-20">
              <h2
                className="text-[#2C2C2C] mb-8"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "1.5rem",
                }}
              >
                More Games You&apos;ll Love
              </h2>
              <div className="grid sm:grid-cols-3 gap-5">
                {related.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/games/${g.slug}`}
                    className="group rounded-2xl overflow-hidden border hover:shadow-lg transition-all duration-300 block"
                    style={{ borderColor: "#F0EBE4" }}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={g.image}
                        alt={g.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="33vw"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <h3
                        className="text-sm font-medium text-[#2C2C2C] mb-1 group-hover:text-[#C9927A] transition-colors"
                        style={{ fontFamily: "var(--font-ui)" }}
                      >
                        {g.name}
                      </h3>
                      <p
                        className="text-[11px] text-[#2C2C2C]/50"
                        style={{ fontFamily: "var(--font-ui)" }}
                      >
                        {g.players} · {g.isFree ? "Free" : `$${g.price}`}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
