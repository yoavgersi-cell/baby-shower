export interface Game {
  slug: string;
  name: string;
  description: string;
  players: string;
  duration: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  isFree: boolean;
  price?: number;
  image: string;
  howToPlay: string[];
  downloadUrl?: string;
}

export const games: Game[] = [
  {
    slug: "baby-shower-bingo",
    name: "Baby Shower Bingo",
    description: "The classic. Works for any size group. Guests mark off baby items as gifts are opened.",
    players: "5–50 players",
    duration: "30–60 min",
    difficulty: "Easy",
    category: "Gift Opening",
    isFree: true,
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&q=80&fit=crop",
    howToPlay: ["Print one card per guest", "Guests fill in baby items before the shower", "Mark off items as gifts are opened", "First to get 5 in a row wins!"],
  },
  {
    slug: "baby-predictions",
    name: "Baby Predictions",
    description: "Guests predict baby details — weight, due date, hair color, first word. Open at the 1-year birthday!",
    players: "Any group size",
    duration: "15 min",
    difficulty: "Easy",
    category: "Keepsake",
    isFree: true,
    image: "https://images.unsplash.com/photo-1487530811015-780526e5f6e6?w=600&q=80&fit=crop",
    howToPlay: ["Hand out prediction cards on arrival", "Guests fill in their predictions", "Seal in the provided envelope", "Open at baby's first birthday party"],
  },
  {
    slug: "price-is-right-baby",
    name: "Baby Price Is Right",
    description: "How much does a box of diapers cost? Guests guess the price of popular baby items. Hilarious every time.",
    players: "4–30 players",
    duration: "15–20 min",
    difficulty: "Easy",
    category: "Trivia",
    isFree: true,
    image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?w=600&q=80&fit=crop",
    howToPlay: ["Print the price cards", "Show each item one at a time", "Guests write their guess", "Closest without going over wins"],
  },
  {
    slug: "who-knows-mommy-best",
    name: "Who Knows Mommy Best?",
    description: "How well do your guests know the mama-to-be? This game always sparks the best conversations.",
    players: "5–40 players",
    duration: "20 min",
    difficulty: "Easy",
    category: "Trivia",
    isFree: false,
    price: 1.99,
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&q=80&fit=crop",
    howToPlay: ["Host fills in answers before the shower", "Guests answer questions about mom-to-be", "Compare answers — most matches wins", "Hilarious wrong answers encouraged"],
  },
  {
    slug: "baby-word-scramble",
    name: "Baby Word Scramble",
    description: "Unscramble 20 baby-related words as fast as you can. Great icebreaker for mixed groups.",
    players: "Any group size",
    duration: "10 min",
    difficulty: "Medium",
    category: "Word Games",
    isFree: true,
    image: "https://images.unsplash.com/photo-1558171813-680a73e39d78?w=600&q=80&fit=crop",
    howToPlay: ["Hand out scramble sheets", "Set a 5-minute timer", "Most correct answers wins", "Tie-breaker: fastest time"],
  },
  {
    slug: "diaper-raffle",
    name: "Diaper Raffle",
    description: "Guests bring a pack of diapers to enter a raffle. The mom gets diapers, a guest wins a prize. Win-win.",
    players: "Any group size",
    duration: "Throughout event",
    difficulty: "Easy",
    category: "Raffle",
    isFree: false,
    price: 2.99,
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80&fit=crop",
    howToPlay: ["Include raffle ticket with invitation", "Guests bring diapers to enter", "Draw winner at end of shower", "Mom keeps all the diapers!"],
  },
];
