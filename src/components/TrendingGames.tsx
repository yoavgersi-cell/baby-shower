import Image from "next/image";
import Link from "next/link";
import { games } from "@/data/games";

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

export default function TrendingGames() {
  const [featured, ...rest] = games;

  return (
    <section className="py-20" style={{ background: "#FAF6F0" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <p
              className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A] mb-2"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Games & Activities
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#2C2C2C",
              }}
            >
              Games Everyone Actually Plays
            </h2>
          </div>
          <Link
            href="/games"
            className="text-sm font-medium text-[#C9927A] hover:underline flex-shrink-0"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            See All Games →
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured large card */}
          <div
            className="lg:col-span-1 rounded-2xl overflow-hidden border bg-white hover:shadow-xl transition-all duration-300 group"
            style={{ borderColor: "#F0EBE4" }}
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span
                  className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold mb-2"
                  style={{
                    background: difficultyBg[featured.difficulty],
                    color: difficultyColor[featured.difficulty],
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  {featured.difficulty}
                </span>
                <h3
                  className="text-white text-xl leading-tight"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {featured.name}
                </h3>
              </div>
            </div>
            <div className="p-5">
              <p
                className="text-sm text-[#2C2C2C]/60 leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {featured.description}
              </p>
              <div className="flex items-center gap-4 mb-4 text-xs text-[#2C2C2C]/50" style={{ fontFamily: "var(--font-ui)" }}>
                <span>👥 {featured.players}</span>
                <span>⏱ {featured.duration}</span>
                <span className="text-[#2C2C2C]/30">· {featured.category}</span>
              </div>
              <Link
                href={`/games/${featured.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-white text-xs font-medium rounded-full"
                style={{
                  background: "linear-gradient(135deg,#C9927A,#B5785F)",
                  fontFamily: "var(--font-ui)",
                }}
              >
                Get Free →
              </Link>
            </div>
          </div>

          {/* Smaller cards grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {rest.slice(0, 4).map((game) => (
              <div
                key={game.slug}
                className="bg-white rounded-2xl overflow-hidden border hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group flex gap-4 p-4"
                style={{ borderColor: "#F0EBE4" }}
              >
                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={game.image}
                    alt={game.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4
                      className="text-sm font-medium text-[#2C2C2C] leading-tight"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {game.name}
                    </h4>
                    <span
                      className="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-semibold"
                      style={{
                        background: game.isFree ? "#E8F0E8" : "#FDF5E8",
                        color: game.isFree ? "#6A8A6A" : "#C4A55A",
                        fontFamily: "var(--font-ui)",
                      }}
                    >
                      {game.isFree ? "Free" : `$${game.price}`}
                    </span>
                  </div>
                  <p
                    className="text-[11px] text-[#2C2C2C]/50 mb-2"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {game.players}
                  </p>
                  <Link
                    href={`/games/${game.slug}`}
                    className="text-[11px] font-medium text-[#C9927A] hover:underline"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    Get It →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
