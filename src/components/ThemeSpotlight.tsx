import Image from "next/image";
import Link from "next/link";
import { themes } from "@/data/themes";

export default function ThemeSpotlight() {
  const trending = themes.filter((t) => t.isTrending).slice(0, 3);

  return (
    <section className="py-20" style={{ background: "#1A1502" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <p
              className="text-[10px] tracking-[0.25em] uppercase mb-2"
              style={{ fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.4)" }}
            >
              Trending Now
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#FAF8F2",
              }}
            >
              Trending Themes Right Now
            </h2>
          </div>
          <Link
            href="/themes"
            className="text-sm font-medium hover:underline flex-shrink-0"
            style={{ fontFamily: "var(--font-ui)", color: "#C9927A" }}
          >
            Explore All Themes →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trending.map((theme) => (
            <Link
              key={theme.slug}
              href={`/themes/${theme.slug}`}
              className="group relative rounded-2xl overflow-hidden block"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src={theme.coverImage}
                alt={theme.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Palette dots */}
                <div className="flex gap-1.5 mb-3">
                  {theme.palette.slice(0, 4).map((color, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full border-2 border-white/30"
                      style={{ background: color }}
                    />
                  ))}
                </div>
                <h3
                  className="text-white text-xl leading-tight mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {theme.name}
                </h3>
                <p
                  className="text-white/60 text-xs mb-4"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {theme.tagline}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px]"
                    style={{ fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.4)" }}
                  >
                    {theme.saves} saves
                  </span>
                  <span
                    className="px-4 py-2 rounded-full text-xs font-medium text-white transition-all group-hover:bg-[#C9927A]"
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      fontFamily: "var(--font-ui)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
