import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { games } from "@/data/games";

export const metadata: Metadata = {
  title: "Baby Shower Games | Free Printable Games & Activities",
  description:
    "Free printable baby shower games that people actually want to play. Baby Bingo, Predictions, Price Is Right, and more — instant download.",
  keywords:
    "baby shower games, free baby shower games, printable baby shower games, baby shower bingo, baby shower activities",
};

const categories = ["All", ...Array.from(new Set(games.map((g) => g.category)))];

const difficultyColor: Record<string, string> = {
  Easy: "#6A8A6A",
  Medium: "#C4A55A",
  Hard: "#C9927A",
};
const difficultyBg: Record<string, string> = {
  Easy: "#E8F0E8",
  Medium: "#FDF5E8",
  Hard: "#FDF0E8",
};

export default function GamesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section
          className="py-16 px-4 lg:px-8"
          style={{ background: "linear-gradient(160deg, #FAF6F0 0%, #F5EEE4 100%)" }}
        >
          <div className="max-w-7xl mx-auto">
            <p
              className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A] mb-3"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Games & Activities
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 400,
                color: "#2C2C2C",
              }}
            >
              Games Everyone Actually Wants to Play
            </h1>
            <p
              className="mt-3 text-[#5A4A42]/60 max-w-lg"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Skip the awkward ones. These are the games your guests will be talking about after.
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

        {/* Games grid */}
        <section className="py-16 px-4 lg:px-8" style={{ background: "white" }}>
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <Link
                key={game.slug}
                href={`/games/${game.slug}`}
                className="group rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
                style={{ borderColor: "#F0EBE4" }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={game.image}
                    alt={game.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span
                      className="px-2.5 py-1 rounded-full text-[10px] font-semibold"
                      style={{
                        background: difficultyBg[game.difficulty],
                        color: difficultyColor[game.difficulty],
                        fontFamily: "var(--font-ui)",
                      }}
                    >
                      {game.difficulty}
                    </span>
                    <span
                      className="px-2.5 py-1 rounded-full text-[10px] font-semibold"
                      style={{
                        background: game.isFree ? "#E8F0E8" : "#FDF5E8",
                        color: game.isFree ? "#6A8A6A" : "#C4A55A",
                        fontFamily: "var(--font-ui)",
                      }}
                    >
                      {game.isFree ? "Free" : `$${game.price}`}
                    </span>
                  </div>
                </div>
                <div className="p-5 bg-white">
                  <p
                    className="text-[9px] tracking-[0.15em] uppercase text-[#C9927A]/70 mb-1"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {game.category}
                  </p>
                  <h2
                    className="font-medium text-[#2C2C2C] leading-snug mb-2 group-hover:text-[#C9927A] transition-colors"
                    style={{ fontFamily: "var(--font-ui)", fontSize: "0.95rem" }}
                  >
                    {game.name}
                  </h2>
                  <p
                    className="text-[12px] text-[#2C2C2C]/55 leading-relaxed mb-4 line-clamp-2"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {game.description}
                  </p>
                  <div
                    className="flex items-center gap-4 text-[10px] text-[#2C2C2C]/40"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    <span>👥 {game.players}</span>
                    <span>⏱ {game.duration}</span>
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
