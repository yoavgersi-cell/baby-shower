export interface Freebie {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  downloadCount: string;
  requiresEmail: boolean;
  fileType: string;
}

export const freebies: Freebie[] = [
  {
    id: "planning-checklist",
    title: "Baby Shower Planning Checklist",
    description: "8-week countdown checklist covering every detail from venue to thank-you notes.",
    category: "Planning",
    image: "https://images.unsplash.com/photo-1487530811015-780526e5f6e6?w=500&q=80&fit=crop",
    downloadCount: "18.2k",
    requiresEmail: false,
    fileType: "PDF",
  },
  {
    id: "bingo-cards",
    title: "Baby Shower Bingo (30 Cards)",
    description: "30 unique bingo cards + calling card. The most downloaded game on the platform.",
    category: "Games",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=500&q=80&fit=crop",
    downloadCount: "12.4k",
    requiresEmail: false,
    fileType: "PDF",
  },
  {
    id: "baby-predictions",
    title: "Baby Predictions Cards",
    description: "Printable prediction cards for guests — seal and open at the first birthday.",
    category: "Games",
    image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?w=500&q=80&fit=crop",
    downloadCount: "7.8k",
    requiresEmail: false,
    fileType: "PDF",
  },
  {
    id: "floral-invitation",
    title: "Garden Floral Invitation",
    description: "Editable Canva invitation template in a timeless botanical style.",
    category: "Invitations",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&q=80&fit=crop",
    downloadCount: "3.2k",
    requiresEmail: true,
    fileType: "Canva + PDF",
  },
  {
    id: "budget-tracker",
    title: "Baby Shower Budget Tracker",
    description: "Spreadsheet-style PDF for tracking every expense. Stay on budget effortlessly.",
    category: "Planning",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=500&q=80&fit=crop",
    downloadCount: "5.6k",
    requiresEmail: true,
    fileType: "PDF",
  },
  {
    id: "word-scramble",
    title: "Baby Word Scramble",
    description: "20-word scramble game sheet. Great icebreaker for any size group.",
    category: "Games",
    image: "https://images.unsplash.com/photo-1558171813-680a73e39d78?w=500&q=80&fit=crop",
    downloadCount: "4.1k",
    requiresEmail: false,
    fileType: "PDF",
  },
];
