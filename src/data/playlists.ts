export interface Playlist {
  id: string;
  title: string;
  vibe: string;
  description: string;
  trackCount: number;
  duration: string;
  spotifyUrl: string;
  coverColors: string[];
  tags: string[];
}

export const playlists: Playlist[] = [
  {
    id: "modern-baby-shower",
    title: "Modern Baby Shower Vibes",
    vibe: "Upbeat & Celebratory",
    description: "The perfect mix of feel-good pop and acoustic hits for a modern, energetic shower.",
    trackCount: 42,
    duration: "2h 48min",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX2sUQwD7tbmL",
    coverColors: ["#E8C4C4", "#C9927A"],
    tags: ["pop", "upbeat", "celebratory"],
  },
  {
    id: "soft-acoustic",
    title: "Soft & Dreamy Acoustic",
    vibe: "Calm & Intimate",
    description: "Gentle guitar, soft vocals, and heartfelt songs for a cozy, intimate gathering.",
    trackCount: 38,
    duration: "2h 15min",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DWXmlLSKkfdAC",
    coverColors: ["#9BAD9B", "#F5F0E8"],
    tags: ["acoustic", "calm", "background"],
  },
  {
    id: "girl-boss-mama",
    title: "Girl Boss Mama",
    vibe: "Empowering & Fun",
    description: "Female empowerment anthems and confident pop bangers to celebrate the queen of the hour.",
    trackCount: 35,
    duration: "2h 02min",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX3WvGXE8FqYX",
    coverColors: ["#C4A55A", "#F5E6C8"],
    tags: ["pop", "empowering", "fun"],
  },
  {
    id: "brunch-vibes",
    title: "Baby Brunch Vibes",
    vibe: "Chic & Relaxed",
    description: "Jazz, bossa nova, and laid-back indie for an elegant daytime shower brunch.",
    trackCount: 45,
    duration: "3h 10min",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DWUvHZA1zLcjW",
    coverColors: ["#D4B896", "#C4A55A"],
    tags: ["jazz", "brunch", "elegant"],
  },
];
