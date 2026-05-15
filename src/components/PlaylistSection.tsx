import Link from "next/link";
import { playlists } from "@/data/playlists";

export default function PlaylistSection() {
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
              Music & Atmosphere
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#2C2C2C",
              }}
            >
              Set the Mood — Curated Playlists
            </h2>
          </div>
          <Link
            href="/music"
            className="text-sm font-medium text-[#C9927A] hover:underline flex-shrink-0"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            See All Playlists →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {playlists.map((playlist) => (
            <a
              key={playlist.id}
              href={playlist.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
              style={{ border: "1px solid #F0EBE4" }}
            >
              {/* Gradient cover */}
              <div
                className="relative h-44 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${playlist.coverColors[0]}, ${playlist.coverColors[1]})`,
                }}
              >
                {/* Music note icon */}
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.8)"
                  strokeWidth="1.5"
                  className="group-hover:scale-110 transition-transform duration-300"
                >
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
                {/* Spotify badge */}
                <div
                  className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[9px] font-semibold"
                  style={{
                    background: "#1DB954",
                    color: "white",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  Spotify
                </div>
              </div>

              <div className="p-4 bg-white">
                {/* Vibe tag */}
                <span
                  className="inline-block px-2.5 py-1 rounded-full text-[9px] font-semibold mb-2"
                  style={{
                    background: "#FAF6F0",
                    color: "#C9927A",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  {playlist.vibe}
                </span>
                <h3
                  className="text-sm font-medium text-[#2C2C2C] leading-tight mb-2"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {playlist.title}
                </h3>
                <p
                  className="text-[11px] text-[#2C2C2C]/50 leading-relaxed mb-3 line-clamp-2"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {playlist.description}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] text-[#2C2C2C]/40"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {playlist.trackCount} tracks · {playlist.duration}
                  </span>
                  <span
                    className="text-[10px] font-medium text-[#C9927A]"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    Listen →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
