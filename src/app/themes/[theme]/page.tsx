import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ theme: string }>;
}

function formatThemeName(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { theme } = await params;
  const name = formatThemeName(theme);
  return {
    title: `${name} Baby Shower Theme | Plan My Baby Shower`,
    description: `Plan the perfect ${name} baby shower. Browse invitations, games, printables, and decorations for a stunning ${name} theme.`,
    keywords: `${name} baby shower, ${name} baby shower theme, ${name} baby shower ideas, ${name} baby shower decorations`,
    openGraph: {
      title: `${name} Baby Shower Theme | Plan My Baby Shower`,
      description: `Plan the perfect ${name} baby shower with beautiful invitations, games, and printables.`,
      type: "website",
    },
  };
}

const themeData: Record<string, {
  emoji: string[];
  gradient: string;
  palette: string[];
  paletteNames: string[];
  description: string;
  printables: string[];
  games: string[];
}> = {
  "teddy-bear": {
    emoji: ["🧸", "🎀", "🍯"],
    gradient: "linear-gradient(135deg, #fbf0cc 0%, #ffd0b8 60%, #f7e4a1 100%)",
    palette: ["#f7e4a1", "#ffd0b8", "#f4a8c7", "#cddccd", "#fbf0cc"],
    paletteNames: ["Honey Yellow", "Peachy Beige", "Blush Rose", "Sage Green", "Warm Cream"],
    description: "Warm, cozy, and absolutely adorable — the Teddy Bear theme is a timeless classic that wraps your celebration in the softest hues of honey, peach, and blush.",
    printables: ["Teddy Bear Invitation Set", "Teddy Bear Bingo Cards", "Baby Prediction Cards", "Diaper Raffle Tickets", "Thank You Cards"],
    games: ["Baby Bingo", "Guess the Baby Food", "Price is Right Baby", "Baby Word Scramble", "Teddy Bear Hunt"],
  },
  "safari-adventure": {
    emoji: ["🦒", "🦁", "🌿"],
    gradient: "linear-gradient(135deg, #fdf9ec 0%, #f7e4a1 40%, #cddccd 100%)",
    palette: ["#f7e4a1", "#cddccd", "#a8c2a8", "#fbf0cc", "#7ea27e"],
    paletteNames: ["Safari Sand", "Sage Mist", "Jungle Green", "Warm Ivory", "Forest"],
    description: "Venture into the wild with our Safari Adventure theme — a playful, nature-inspired celebration featuring giraffes, lions, and lush greenery.",
    printables: ["Safari Invitation Set", "Animal Bingo Cards", "Safari Bunting Banner", "Animal Name Tags", "Jungle Backdrop"],
    games: ["Animal Sound Bingo", "Guess the Safari Animal", "Baby Word Safari", "Pin the Tail on the Giraffe", "Animal Baby Shower Trivia"],
  },
  "boho-floral": {
    emoji: ["🌸", "🌾", "🦋"],
    gradient: "linear-gradient(135deg, #fce8f1 0%, #ffd0b8 40%, #f9d0e3 100%)",
    palette: ["#f9d0e3", "#ffd0b8", "#f4a8c7", "#cddccd", "#e04880"],
    paletteNames: ["Dusty Rose", "Terracotta", "Blush", "Sage", "Berry Rose"],
    description: "Effortlessly beautiful and wildly romantic — the Boho Floral theme combines dried botanicals, flowing greenery, and soft dusty rose tones.",
    printables: ["Boho Floral Invitation", "Wildflower Bingo Cards", "Floral Banner", "Botanical Name Tags", "Pressed Flower Cards"],
    games: ["Floral Baby Bingo", "Wildflower Trivia", "Baby Name Race", "Mama's Measurements", "Wishes for Baby"],
  },
};

export default async function ThemePage({ params }: Props) {
  const { theme } = await params;
  const name = formatThemeName(theme);
  const data = themeData[theme] || {
    emoji: ["🎀", "✨", "🌸"],
    gradient: "linear-gradient(135deg, #fdf4f7 0%, #fce8f1 100%)",
    palette: ["#fce8f1", "#f9d0e3", "#f4a8c7", "#cddccd", "#fbf0cc"],
    paletteNames: ["Blush", "Rose", "Pink", "Sage", "Cream"],
    description: `Celebrate your little one with the beautiful ${name} theme — filled with charm, warmth, and unforgettable details.`,
    printables: ["Invitation Set", "Bingo Cards", "Banner", "Name Tags", "Thank You Cards"],
    games: ["Baby Bingo", "Baby Trivia", "Word Scramble", "Price is Right", "Wishes for Baby"],
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--font-nunito), sans-serif" }}>
      {/* Nav back */}
      <div className="sticky top-0 z-10 glass border-b border-blush-100 px-4 py-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blush-600 hover:text-blush-700"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Hero */}
      <div
        className="relative min-h-72 flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden"
        style={{ background: data.gradient }}
      >
        <div className="text-6xl mb-4 flex gap-3">
          {data.emoji.map((e, i) => <span key={i}>{e}</span>)}
        </div>
        <div className="inline-block px-3 py-1 bg-white/70 rounded-full text-xs font-bold uppercase tracking-widest text-blush-600 mb-4">
          Baby Shower Theme
        </div>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {name}
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed">
          {data.description}
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Color palette */}
        <section>
          <h2
            className="text-2xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Theme Color Palette
          </h2>
          <div className="flex flex-wrap gap-4">
            {data.palette.map((color, i) => (
              <div key={color} className="flex flex-col items-center gap-2">
                <div
                  className="w-16 h-16 rounded-2xl shadow-md border-2 border-white"
                  style={{ background: color }}
                />
                <span className="text-xs text-gray-500 font-medium text-center w-20">
                  {data.paletteNames[i]}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Printables */}
        <section>
          <h2
            className="text-2xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Printables for This Theme
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.printables.map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-5 shadow-sm border border-blush-100 hover:shadow-md transition-shadow duration-200 flex items-center gap-3"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: data.palette[0] }}
                >
                  {data.emoji[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{item}</p>
                  <p className="text-xs text-sage-500 font-semibold">Free Download</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Games */}
        <section>
          <h2
            className="text-2xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Games for This Theme
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.games.map((game) => (
              <div
                key={game}
                className="bg-white rounded-2xl p-5 shadow-sm border border-blush-100 hover:shadow-md transition-shadow duration-200 flex items-center gap-3"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: data.palette[1] }}
                >
                  🎮
                </div>
                <p className="font-semibold text-gray-800 text-sm">{game}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-6">
          <Link
            href="#tools"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blush-500 hover:bg-blush-600 text-white font-bold text-base rounded-2xl shadow-lg shadow-blush-200 transition-all duration-200 hover:scale-105"
          >
            🎀 Start Planning This Theme Free
          </Link>
        </section>
      </div>
    </div>
  );
}
