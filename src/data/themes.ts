export interface Theme {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  palette: string[];
  coverImage: string;
  gallery: string[];
  relatedProducts: string[];
  isTrending: boolean;
  saves: string;
}

export const themes: Theme[] = [
  {
    slug: "teddy-bear",
    name: "Teddy Bear",
    tagline: "Cozy, warm & irresistibly sweet",
    description: "Warm honey tones, plush textures, and adorable bear details. The most-pinned theme of 2025.",
    category: "Neutral",
    palette: ["#D4B896","#C4A55A","#F5F0E8","#9B7B5A","#E8D8C0"],
    coverImage: "https://images.unsplash.com/photo-1558171813-680a73e39d78?w=800&q=80&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1558171813-680a73e39d78?w=600&q=80&fit=crop"],
    relatedProducts: ["teddy-bear-invite","complete-shower-bundle"],
    isTrending: true,
    saves: "24.3k",
  },
  {
    slug: "garden-floral",
    name: "Garden Floral",
    tagline: "Lush botanicals, sage greens & blush roses",
    description: "Garden party vibes with linen tablecloths, pressed flowers, and botanical invitation suites.",
    category: "Floral",
    palette: ["#9BAD9B","#E8C4C4","#F5F0E8","#D4B896","#C4A55A"],
    coverImage: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&q=80&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&q=80&fit=crop"],
    relatedProducts: ["garden-floral-invite","complete-shower-bundle"],
    isTrending: true,
    saves: "18.7k",
  },
  {
    slug: "safari",
    name: "Safari Adventure",
    tagline: "Golden savanna tones & wild animal accents",
    description: "Think golden hour on the savanna — neutral tones, jungle greenery, and adorable animal details.",
    category: "Safari",
    palette: ["#D4B896","#9BAD9B","#C4A55A","#3D2B1F","#E8F0E0"],
    coverImage: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80&fit=crop"],
    relatedProducts: ["complete-shower-bundle"],
    isTrending: false,
    saves: "11.2k",
  },
  {
    slug: "champagne-bows",
    name: "Champagne & Bows",
    tagline: "Ultra-feminine, golden & utterly glamorous",
    description: "Satin ribbons, gold accents, and champagne bubbles. For the mama who wants maximum elegance.",
    category: "Luxe",
    palette: ["#F5E6C8","#C4A55A","#E8C4C4","#FAF8F5","#B5785F"],
    coverImage: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&q=80&fit=crop"],
    relatedProducts: ["champagne-gold-invite","complete-shower-bundle"],
    isTrending: true,
    saves: "15.9k",
  },
  {
    slug: "boho-wildflower",
    name: "Boho Wildflower",
    tagline: "Free-spirited, earthy & effortlessly beautiful",
    description: "Pampas grass, dried wildflowers, and terracotta tones. The boho shower done right.",
    category: "Boho",
    palette: ["#B5785F","#C4A55A","#9BAD9B","#F5F0E8","#D4B896"],
    coverImage: "https://images.unsplash.com/photo-1487530811015-780526e5f6e6?w=800&q=80&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1487530811015-780526e5f6e6?w=600&q=80&fit=crop"],
    relatedProducts: ["garden-floral-invite"],
    isTrending: false,
    saves: "9.4k",
  },
];
