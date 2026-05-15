import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { playlists } from "@/data/playlists";

export const metadata: Metadata = {
  title: "Baby Shower Music & Playlists — Set the Perfect Mood",
  description:
    "Curated baby shower music playlists on Spotify. Upbeat pop, soft acoustic, jazz brunch vibes, and empowering girl-boss anthems.",
  keywords:
    "baby shower music, baby shower playlist, baby shower songs, baby shower spotify playlist, baby shower background music",
};

export default function MusicPage() {
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
              Music & Atmosphere
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 400,
                color: "#2C2C2C",
              }}
            >
              Baby Shower Music & Playlists
            </h1>
            <p
              className="mt-3 text-[#5A4A42]/60 max-w-lg"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              The right music sets the entire tone. We&apos;ve curated Spotify playlists for every baby shower vibe.
            </p>
          </div>
        </section>

        {/* Playlists grid */}
        <section className="py-16 px-4 lg:px-8" style={{ background: "white" }}>
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {playlists.map((playlist) => (
              <a
                key={playlist.id}
                href={playlist.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
                style={{ borderColor: "#F0EBE4" }}
              >
                {/* Gradient cover */}
                <div
                  className="relative h-52 flex flex-col items-center justify-center gap-3"
                  style={{
                    background: `linear-gradient(135deg, ${playlist.coverColors[0]}, ${playlist.coverColors[1]})`,
                  }}
                >
                  <svg
                    width="44"
                    height="44"
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
                  <span
                    className="px-3 py-1.5 rounded-full text-[10px] font-semibold text-white"
                    style={{ background: "#1DB954", fontFamily: "var(--font-ui)" }}
                  >
                    Listen on Spotify
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1">
                    {playlist.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[9px]"
                        style={{
                          background: "rgba(255,255,255,0.2)",
                          color: "rgba(255,255,255,0.8)",
                          fontFamily: "var(--font-ui)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 bg-white">
                  <span
                    className="inline-block px-2.5 py-1 rounded-full text-[9px] font-semibold mb-2"
                    style={{ background: "#FAF6F0", color: "#C9927A", fontFamily: "var(--font-ui)" }}
                  >
                    {playlist.vibe}
                  </span>
                  <h2
                    className="font-medium text-[#2C2C2C] leading-snug mb-2"
                    style={{ fontFamily: "var(--font-ui)", fontSize: "0.95rem" }}
                  >
                    {playlist.title}
                  </h2>
                  <p
                    className="text-[12px] text-[#2C2C2C]/55 leading-relaxed mb-3 line-clamp-2"
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
                      className="text-[11px] font-medium text-[#1DB954]"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      Open →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Tips section */}
        <section
          className="py-16 px-4 lg:px-8"
          style={{ background: "#FAF6F0" }}
        >
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-[#2C2C2C] mb-8 text-center"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              Music Tips for a Perfect Baby Shower
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  tip: "Set the volume right",
                  desc: "Background music should be audible but not overpowering — guests should be able to chat easily without raising their voices.",
                },
                {
                  tip: "Create a playlist per phase",
                  desc: "A calm arrival playlist, an upbeat games playlist, and a sweet gift-opening playlist make the flow feel intentional.",
                },
                {
                  tip: "Avoid explicit content",
                  desc: "Even if the mom-to-be loves certain artists, choose the clean version playlists to keep all ages comfortable.",
                },
              ].map((item) => (
                <div
                  key={item.tip}
                  className="bg-white rounded-2xl p-5 border"
                  style={{ borderColor: "#EDE5DC" }}
                >
                  <h3
                    className="text-sm font-medium text-[#C9927A] mb-2"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {item.tip}
                  </h3>
                  <p
                    className="text-[12px] text-[#2C2C2C]/60 leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/blog/best-baby-shower-music-playlist"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#C9927A] hover:underline"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Read our full music planning guide →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
