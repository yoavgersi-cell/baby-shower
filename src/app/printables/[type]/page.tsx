import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ type: string }>;
}

function formatTypeName(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params;
  const name = formatTypeName(type);
  return {
    title: `${name} Baby Shower Printables | Plan My Baby Shower`,
    description: `Free and premium ${name} baby shower printables — download, print, and celebrate! Beautiful designs for every theme and style.`,
    keywords: `${name} baby shower printables, free baby shower printables, printable ${name}, baby shower templates`,
    openGraph: {
      title: `${name} Baby Shower Printables | Plan My Baby Shower`,
      description: `Download free ${name} baby shower printables. Beautiful, instant download templates.`,
      type: "website",
    },
  };
}

const printableTypes: Record<string, {
  emoji: string;
  gradient: string;
  description: string;
  items: { name: string; price: string; emoji: string }[];
}> = {
  invitations: {
    emoji: "💌",
    gradient: "linear-gradient(135deg, #fdf4f7 0%, #fce8f1 100%)",
    description: "Gorgeous, customizable baby shower invitations in every style — from boho florals to modern minimalist. Instant download, easy to edit.",
    items: [
      { name: "Teddy Bear Invitation", price: "Free", emoji: "🧸" },
      { name: "Floral Garden Invitation", price: "Free", emoji: "🌸" },
      { name: "Safari Adventure Invite", price: "$2.99", emoji: "🦒" },
      { name: "Neutral Luxe Invitation", price: "$3.99", emoji: "✨" },
      { name: "Moon & Stars Invite", price: "$2.99", emoji: "🌙" },
      { name: "Pink Bow Invitation Set", price: "Free", emoji: "🎀" },
    ],
  },
  games: {
    emoji: "🎮",
    gradient: "linear-gradient(135deg, #e6ede6 0%, #cddccd 100%)",
    description: "Fun, printable baby shower games that every guest will enjoy. From bingo to word scrambles — all free or budget-friendly.",
    items: [
      { name: "Baby Shower Bingo", price: "Free", emoji: "🎯" },
      { name: "Baby Word Scramble", price: "Free", emoji: "🔤" },
      { name: "Baby Trivia Cards", price: "Free", emoji: "🧠" },
      { name: "Price is Right Baby", price: "$1.99", emoji: "💰" },
      { name: "Baby Predictions Card", price: "Free", emoji: "🔮" },
      { name: "Diaper Raffle Tickets", price: "Free", emoji: "🎟" },
    ],
  },
  checklists: {
    emoji: "✅",
    gradient: "linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%)",
    description: "Stay on top of every detail with our comprehensive baby shower planning checklists — free to download and print.",
    items: [
      { name: "Complete Planning Checklist", price: "Free", emoji: "📋" },
      { name: "Guest List Template", price: "Free", emoji: "👥" },
      { name: "Budget Tracker", price: "Free", emoji: "💵" },
      { name: "Venue Checklist", price: "Free", emoji: "📍" },
      { name: "Food & Drinks Planner", price: "Free", emoji: "🍰" },
      { name: "Day-of Timeline", price: "Free", emoji: "⏰" },
    ],
  },
};

export default async function PrintablesPage({ params }: Props) {
  const { type } = await params;
  const name = formatTypeName(type);
  const data = printableTypes[type] || {
    emoji: "🖨️",
    gradient: "linear-gradient(135deg, #fdf4f7 0%, #fce8f1 100%)",
    description: `Beautiful ${name} printables for your baby shower — download instantly and print at home.`,
    items: [
      { name: `${name} Template 1`, price: "Free", emoji: "🎀" },
      { name: `${name} Template 2`, price: "$2.99", emoji: "✨" },
      { name: `${name} Template 3`, price: "Free", emoji: "🌸" },
    ],
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--font-nunito), sans-serif" }}>
      {/* Nav */}
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
        className="relative flex flex-col items-center justify-center text-center px-4 py-20"
        style={{ background: data.gradient }}
      >
        <div className="text-6xl mb-4">{data.emoji}</div>
        <div className="inline-block px-3 py-1 bg-white/70 rounded-full text-xs font-bold uppercase tracking-widest text-blush-600 mb-4">
          Free Printables
        </div>
        <h1
          className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Baby Shower {name}
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Printables grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((item) => {
            const isFree = item.price === "Free";
            return (
              <div
                key={item.name}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.07)" }}
              >
                {/* Preview */}
                <div
                  className="h-40 flex items-center justify-center text-5xl"
                  style={{ background: data.gradient }}
                >
                  {item.emoji}
                </div>
                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3
                      className="font-bold text-gray-800 text-base leading-snug flex-1"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {item.name}
                    </h3>
                    <span
                      className={`ml-3 px-2.5 py-1 rounded-full text-xs font-bold flex-shrink-0 ${
                        isFree ? "bg-sage-100 text-sage-700" : "bg-blush-100 text-blush-700"
                      }`}
                    >
                      {item.price}
                    </span>
                  </div>
                  <div className="flex gap-0.5 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-cream-500 text-xs">★</span>
                    ))}
                  </div>
                  <button
                    className="w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-105"
                    style={{
                      background: isFree
                        ? "linear-gradient(135deg, #5d845d, #486948)"
                        : "linear-gradient(135deg, #e04880, #cd2d62)",
                    }}
                  >
                    {isFree ? "Download Free →" : `Get for ${item.price} →`}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blush-500 hover:bg-blush-600 text-white font-bold text-base rounded-2xl shadow-lg shadow-blush-200 transition-all duration-200 hover:scale-105"
          >
            🎀 Browse All Printables
          </Link>
        </div>
      </div>
    </div>
  );
}
