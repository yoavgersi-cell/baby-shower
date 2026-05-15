export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
  featured: boolean;
  publishedAt: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "25-baby-shower-games-people-actually-play",
    title: "25 Baby Shower Games People Actually Want to Play",
    excerpt: "Skip the awkward games nobody likes. These 25 tried-and-true baby shower games will have your guests laughing, competing, and begging to play again.",
    category: "Games",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?w=800&q=80&fit=crop",
    tags: ["games", "activities", "planning"],
    featured: true,
    publishedAt: "2025-05-01",
  },
  {
    slug: "teddy-bear-baby-shower-ideas",
    title: "Teddy Bear Baby Shower: 40 Adorable Ideas for 2025",
    excerpt: "From honey-toned invitations to DIY teddy bear centerpieces — everything you need to pull off the coziest baby shower of the year.",
    category: "Themes",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1558171813-680a73e39d78?w=800&q=80&fit=crop",
    tags: ["themes", "teddy bear", "decor"],
    featured: true,
    publishedAt: "2025-04-28",
  },
  {
    slug: "baby-shower-planning-checklist-timeline",
    title: "The Ultimate Baby Shower Planning Checklist (8 Weeks Out)",
    excerpt: "A week-by-week timeline covering every detail — from booking the venue to the thank-you notes. Never miss a single step.",
    category: "Planning",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1487530811015-780526e5f6e6?w=800&q=80&fit=crop",
    tags: ["planning", "checklist", "timeline"],
    featured: false,
    publishedAt: "2025-04-20",
  },
  {
    slug: "best-baby-shower-music-playlist",
    title: "The Best Baby Shower Music Playlist for Every Vibe",
    excerpt: "Whether you want background jazz, feel-good pop, or a boho acoustic vibe — we've curated the perfect playlists for every baby shower style.",
    category: "Music",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80&fit=crop",
    tags: ["music", "playlist", "atmosphere"],
    featured: false,
    publishedAt: "2025-04-15",
  },
  {
    slug: "how-to-host-modern-baby-shower",
    title: "How to Host a Modern Baby Shower in 2025",
    excerpt: "Modern baby showers are all about intentionality, aesthetic, and experience. Here's how to throw one that feels nothing like your mom's version.",
    category: "Planning",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&q=80&fit=crop",
    tags: ["planning", "modern", "trends"],
    featured: true,
    publishedAt: "2025-04-10",
  },
  {
    slug: "safari-baby-shower-decor-ideas",
    title: "Safari Baby Shower Decor Ideas That Will Wow Your Guests",
    excerpt: "Golden savanna hues, jungle greenery, and adorable animal details. These safari baby shower ideas are anything but generic.",
    category: "Themes",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80&fit=crop",
    tags: ["themes", "safari", "decor"],
    featured: false,
    publishedAt: "2025-04-05",
  },
];
