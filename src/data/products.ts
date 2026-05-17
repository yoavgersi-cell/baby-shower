export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: "invitation" | "game" | "sign" | "bundle" | "checklist" | "template";
  price: number;
  salePrice?: number;
  originalPrice?: number;
  // Image fields — populated by owner from Etsy/Canva
  image?: string;
  previewImages?: string[];
  // CSS mockup fallback (used until real images uploaded)
  mockupType: "invitation" | "bingo" | "bundle" | "sign" | "checklist" | "game" | "pdf";
  mockupAccent: string;
  mockupBg: string;
  mockupTitle?: string;
  // Product details
  tag?: string;
  tagColor?: string;
  tagBg?: string;
  rating: number;
  reviews: number;
  downloads: string;
  features: string[];
  editableIn?: string;
  fileFormats: string[];
  isFree: boolean;
  isFeatured: boolean;
  isBestseller: boolean;
  // SEO
  seoTitle?: string;
  seoDescription?: string;
  // Relations
  relatedProductIds?: string[];
  canvaLink?: string;
  downloadUrl?: string;
}

export const products: Product[] = [
  {
    id: "teddy-bear-invite",
    slug: "editable-teddy-bear-baby-shower-invitation",
    name: "Editable Teddy Bear Baby Shower Invitation",
    shortDescription: "Warm neutral tones with adorable bear details. Edit in Canva in minutes.",
    description:
      "A beautifully designed teddy bear baby shower invitation in warm honey and cream tones. Fully editable in Canva — change the text, colors, and fonts to match your vision. Includes matching RSVP card.",
    category: "invitation",
    price: 4.99,
    originalPrice: 9.99,
    mockupType: "invitation",
    mockupAccent: "#C9927A",
    mockupBg: "#FDF5EE",
    mockupTitle: "Baby Shower",
    tag: "Bestseller",
    tagColor: "#C9927A",
    tagBg: "#FDF0E8",
    rating: 4.9,
    reviews: 312,
    downloads: "4.1k",
    features: [
      "Fully editable in Canva",
      "Matching RSVP card",
      "A5 & 5x7\" sizes",
      "Instant download",
      "Print-ready PDF",
    ],
    editableIn: "Canva",
    fileFormats: ["PDF", "Canva"],
    isFree: false,
    isFeatured: true,
    isBestseller: true,
    seoTitle:
      "Editable Teddy Bear Baby Shower Invitation — Canva Template | Plan My Baby Shower",
    seoDescription:
      "Download this editable teddy bear baby shower invitation template. Edit in Canva, download as PDF. Warm neutral tones, instant download.",
    relatedProductIds: ["complete-bundle", "baby-bingo"],
  },
  {
    id: "baby-bingo",
    slug: "baby-shower-bingo-printable",
    name: "Baby Shower Bingo Game Pack",
    shortDescription: "30 unique bingo cards + calling card. The most-played baby shower game.",
    description:
      "Keep guests entertained with 30 unique baby shower bingo cards. Each card has a different arrangement of baby-related items. Includes a host calling card. Print at home or at your local print shop.",
    category: "game",
    price: 0,
    mockupType: "bingo",
    mockupAccent: "#9BAD9B",
    mockupBg: "#F4F8F4",
    tag: "Free · Most Downloaded",
    tagColor: "#5A8A5A",
    tagBg: "#E8F4E8",
    rating: 4.8,
    reviews: 1204,
    downloads: "14.2k",
    features: ["30 unique bingo cards", "Host calling card included", "Letter & A4 sizes", "Instant download", "Print at home"],
    fileFormats: ["PDF"],
    isFree: true,
    isFeatured: true,
    isBestseller: true,
    seoTitle: "Free Baby Shower Bingo Printable — 30 Unique Cards | Plan My Baby Shower",
    seoDescription: "Free printable baby shower bingo cards. 30 unique cards included. Instant PDF download.",
    relatedProductIds: ["complete-games-bundle", "baby-predictions"],
  },
  {
    id: "complete-bundle",
    slug: "complete-baby-shower-printable-bundle",
    name: "Complete Baby Shower Printable Bundle",
    shortDescription: "Everything you need in one download. 10 invitations, 6 games, signs & more.",
    description:
      "The ultimate baby shower printable bundle. Includes 10 invitation designs, 6 game cards, welcome sign, food tent cards, thank you cards, and a complete planning checklist — all fully editable in Canva.",
    category: "bundle",
    price: 12.99,
    originalPrice: 34.0,
    mockupType: "bundle",
    mockupAccent: "#C4A55A",
    mockupBg: "#FAF5EC",
    mockupTitle: "Complete Baby Shower Bundle",
    tag: "Best Value",
    tagColor: "#7A5AB5",
    tagBg: "#F0ECF8",
    rating: 4.9,
    reviews: 198,
    downloads: "2.9k",
    features: [
      "10 invitation designs",
      "6 game cards (bingo, predictions, scramble + more)",
      "Welcome sign & food tent cards",
      "Thank you cards",
      "Planning checklist",
      "All editable in Canva",
    ],
    editableIn: "Canva",
    fileFormats: ["PDF", "Canva"],
    isFree: false,
    isFeatured: true,
    isBestseller: true,
    seoTitle:
      "Complete Baby Shower Printable Bundle — 10 Invitations + Games + Signs | Plan My Baby Shower",
    seoDescription:
      "The best value baby shower printable bundle. Invitations, games, signs, thank you cards and more. All editable in Canva. Instant download.",
    relatedProductIds: ["teddy-bear-invite", "welcome-sign"],
  },
  {
    id: "diaper-raffle-bundle",
    slug: "diaper-raffle-printable-bundle",
    name: "Diaper Raffle Printable Bundle",
    shortDescription: "Complete diaper raffle setup — ticket cards, insert, and prize sign.",
    description:
      "Everything you need to run a successful diaper raffle. Includes raffle ticket cards (include with invitations), a diaper raffle instructions insert, and a matching prize display sign.",
    category: "bundle",
    price: 2.99,
    mockupType: "bundle",
    mockupAccent: "#E8C4C4",
    mockupBg: "#FDF5F5",
    mockupTitle: "Diaper Raffle Bundle",
    tag: "Popular",
    tagColor: "#C9927A",
    tagBg: "#FDF0E8",
    rating: 4.7,
    reviews: 156,
    downloads: "3.8k",
    features: ["Raffle ticket cards", "Instructions insert card", "Prize display sign", "Editable in Canva"],
    editableIn: "Canva",
    fileFormats: ["PDF", "Canva"],
    isFree: false,
    isFeatured: false,
    isBestseller: false,
    relatedProductIds: ["complete-bundle"],
  },
  {
    id: "welcome-sign",
    slug: "welcome-baby-sign-printable",
    name: "Welcome Baby Sign Template",
    shortDescription: "Large-format welcome sign for your gift or food table. Editable in Canva.",
    description:
      "A beautiful, customisable welcome sign perfect for the gift table, entrance, or food station. Available in A3, 18x24\", and 24x36\" sizes. Fully editable in Canva.",
    category: "sign",
    price: 2.99,
    mockupType: "sign",
    mockupAccent: "#9BAD9B",
    mockupBg: "#F4F8F4",
    mockupTitle: "Welcome Baby",
    rating: 4.8,
    reviews: 143,
    downloads: "2.3k",
    features: ["A3, 18x24\" & 24x36\" sizes", "Editable name & date", "Editable in Canva", "Print-ready PDF"],
    editableIn: "Canva",
    fileFormats: ["PDF", "Canva"],
    isFree: false,
    isFeatured: false,
    isBestseller: false,
    relatedProductIds: ["complete-bundle"],
  },
  {
    id: "neutral-invite",
    slug: "minimal-neutral-baby-shower-invitation",
    name: "Minimal Neutral Baby Shower Invitation",
    shortDescription: "Clean, modern design in warm cream and sage. Perfect for any theme.",
    description:
      "A minimal, modern baby shower invitation in warm neutral tones. No fuss, no clutter — just beautiful typography and clean design. Works for any theme. Fully editable in Canva.",
    category: "invitation",
    price: 3.99,
    mockupType: "invitation",
    mockupAccent: "#9BAD9B",
    mockupBg: "#F4F8F4",
    mockupTitle: "Baby Shower",
    tag: "New",
    tagColor: "#5A8A6A",
    tagBg: "#E8F4E8",
    rating: 4.7,
    reviews: 74,
    downloads: "980",
    features: ["Editable in Canva", "A5 & 5x7\" sizes", "Matching envelope liner", "Instant download"],
    editableIn: "Canva",
    fileFormats: ["PDF", "Canva"],
    isFree: false,
    isFeatured: true,
    isBestseller: false,
    relatedProductIds: ["complete-bundle", "welcome-sign"],
  },
  {
    id: "baby-predictions",
    slug: "baby-predictions-cards-printable",
    name: "Baby Predictions Cards",
    shortDescription: "Guests predict weight, date, hair color & more. A keepsake you'll treasure.",
    description:
      "A fun and heartfelt baby shower game. Guests write their predictions for the baby — due date, weight, hair color, first word, and more. Seal in the included envelope and open at the first birthday!",
    category: "game",
    price: 0,
    mockupType: "game",
    mockupAccent: "#C9927A",
    mockupBg: "#FDF8F5",
    mockupTitle: "Baby Predictions",
    tag: "Free",
    tagColor: "#5A8A5A",
    tagBg: "#E8F4E8",
    rating: 4.6,
    reviews: 387,
    downloads: "8.1k",
    features: ["Prediction fill-in cards", "Envelope template", "Keepsake format", "Instant download"],
    fileFormats: ["PDF"],
    isFree: true,
    isFeatured: false,
    isBestseller: false,
    relatedProductIds: ["baby-bingo", "complete-games-bundle"],
  },
  {
    id: "complete-games-bundle",
    slug: "complete-baby-shower-games-bundle",
    name: "Complete Baby Shower Games Bundle",
    shortDescription: "6 games in one pack — bingo, predictions, scramble, price is right & more.",
    description:
      "Never worry about game planning again. This bundle includes 6 of the best baby shower games: Bingo (30 cards), Baby Predictions, Word Scramble, Price Is Right, Who Knows Mommy Best?, and Baby ABCs.",
    category: "bundle",
    price: 6.99,
    originalPrice: 14.0,
    mockupType: "bundle",
    mockupAccent: "#9BAD9B",
    mockupBg: "#F4F8F4",
    mockupTitle: "Complete Games Bundle",
    tag: "Save 50%",
    tagColor: "#5A8A5A",
    tagBg: "#E8F4E8",
    rating: 4.8,
    reviews: 124,
    downloads: "1.7k",
    features: [
      "Baby Shower Bingo (30 cards)",
      "Baby Predictions cards",
      "Baby Word Scramble",
      "Price Is Right game",
      "Who Knows Mommy Best?",
      "Baby ABCs",
    ],
    fileFormats: ["PDF"],
    isFree: false,
    isFeatured: true,
    isBestseller: false,
    relatedProductIds: ["complete-bundle", "baby-bingo"],
  },
  {
    id: "planning-checklist",
    slug: "baby-shower-planning-checklist-printable",
    name: "Ultimate Baby Shower Planning Checklist",
    shortDescription: "8-week countdown timeline. The most downloaded planning tool on the platform.",
    description:
      "The most comprehensive baby shower planning checklist available. A week-by-week breakdown covering every detail from booking venues to writing thank-you notes.",
    category: "checklist",
    price: 0,
    mockupType: "checklist",
    mockupAccent: "#C9927A",
    mockupBg: "#FDF8F5",
    tag: "Free · 18k Downloads",
    tagColor: "#5A8A5A",
    tagBg: "#E8F4E8",
    rating: 4.9,
    reviews: 932,
    downloads: "18.4k",
    features: ["8-week countdown timeline", "Budget tracker", "Vendor checklist", "Guest list template"],
    fileFormats: ["PDF"],
    isFree: true,
    isFeatured: true,
    isBestseller: true,
    seoTitle: "Free Baby Shower Planning Checklist — 8-Week Timeline | Plan My Baby Shower",
    seoDescription:
      "Free printable baby shower planning checklist. 8-week countdown timeline covering every detail.",
    relatedProductIds: ["complete-bundle"],
  },
];
