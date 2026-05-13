import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ game: string }>;
}

function formatGameName(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { game } = await params;
  const name = formatGameName(game);
  return {
    title: `${name} Baby Shower Game | Plan My Baby Shower`,
    description: `Free ${name} baby shower game — print instantly and play at your next baby shower. Easy, fun, and totally free!`,
    keywords: `${name} baby shower game, baby shower games, free baby shower games, printable baby shower games`,
    openGraph: {
      title: `${name} Baby Shower Game | Plan My Baby Shower`,
      description: `Free printable ${name} baby shower game. Download and print instantly!`,
      type: "website",
    },
  };
}

const gameDetails: Record<string, {
  emoji: string;
  gradient: string;
  description: string;
  howToPlay: string[];
  players: string;
  duration: string;
}> = {
  "baby-bingo": {
    emoji: "🎯",
    gradient: "linear-gradient(135deg, #fdf4f7 0%, #fce8f1 100%)",
    description: "The classic baby shower game — guests fill in bingo cards with expected gifts, then mark them off as the mama-to-be opens presents!",
    howToPlay: [
      "Print one bingo card per guest (each card is unique!)",
      "Guests write baby gift predictions in each square",
      "Mark off squares as the mama opens matching gifts",
      "First to get 5 in a row shouts 'Baby Bingo!' and wins",
    ],
    players: "5–30 players",
    duration: "Throughout gift opening",
  },
  "baby-trivia": {
    emoji: "🧠",
    gradient: "linear-gradient(135deg, #e6ede6 0%, #cddccd 100%)",
    description: "Test your guests' baby knowledge with fun trivia questions — covering pregnancy facts, baby milestones, celebrity babies, and more!",
    howToPlay: [
      "Print or display one trivia question at a time",
      "Give guests 30 seconds to write their answer",
      "Reveal the answer after everyone has guessed",
      "Tally up points — highest score wins a prize!",
    ],
    players: "4–50 players",
    duration: "15–20 minutes",
  },
  "word-scramble": {
    emoji: "🔤",
    gradient: "linear-gradient(135deg, #fff5f0 0%, #ffd0b8 100%)",
    description: "Unscramble baby-themed words as fast as you can! A fun, laughter-filled game that's perfect for all ages.",
    howToPlay: [
      "Give each guest a scramble sheet and pen",
      "Set a timer for 3 minutes",
      "Guests unscramble as many baby words as possible",
      "Most correct answers wins!",
    ],
    players: "Any number",
    duration: "3–5 minutes",
  },
};

export default async function GamePage({ params }: Props) {
  const { game } = await params;
  const name = formatGameName(game);
  const data = gameDetails[game] || {
    emoji: "🎮",
    gradient: "linear-gradient(135deg, #fdf4f7 0%, #fce8f1 100%)",
    description: `The ${name} game is a fun, engaging activity for your baby shower that all guests will enjoy!`,
    howToPlay: [
      "Print the game cards for all guests",
      "Explain the rules to everyone",
      "Play and have fun!",
      "Award prizes to the winner",
    ],
    players: "Any number",
    duration: "10–15 minutes",
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
          Baby Shower Game
        </div>
        <h1
          className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {name}
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed mb-6">
          {data.description}
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <span className="px-4 py-2 bg-white/80 rounded-full text-sm font-semibold text-gray-600">
            👥 {data.players}
          </span>
          <span className="px-4 py-2 bg-white/80 rounded-full text-sm font-semibold text-gray-600">
            ⏱ {data.duration}
          </span>
          <span className="px-4 py-2 bg-white/80 rounded-full text-sm font-semibold text-sage-600">
            🆓 Free Printable
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        {/* How to play */}
        <section>
          <h2
            className="text-2xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            How to Play
          </h2>
          <div className="space-y-4">
            {data.howToPlay.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-blush-100"
              >
                <div className="w-8 h-8 rounded-full bg-blush-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Download CTA */}
        <section className="bg-white rounded-3xl p-8 text-center shadow-md border border-blush-100">
          <div className="text-4xl mb-4">🎉</div>
          <h3
            className="text-2xl font-bold text-gray-800 mb-3"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Get Your Free Printable
          </h3>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Download and print your {name} cards instantly — no account required!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-8 py-4 bg-blush-500 hover:bg-blush-600 text-white font-bold rounded-2xl shadow-md transition-all duration-200 hover:scale-105">
              Download Free PDF →
            </button>
            <Link
              href="/"
              className="px-8 py-4 bg-cream-50 hover:bg-cream-100 text-gray-700 font-bold rounded-2xl border border-cream-200 transition-all duration-200 hover:scale-105"
            >
              Browse More Games
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
