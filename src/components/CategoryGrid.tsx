import Link from "next/link";

const categories = [
  {
    name: "Digital Invitations",
    slug: "/category/invitations",
    count: "120+ designs",
    accent: "#C9927A",
    bg: "#FDF5EE",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,13 22,4" />
      </svg>
    ),
  },
  {
    name: "Printable Games",
    slug: "/category/games",
    count: "30+ games",
    accent: "#9BAD9B",
    bg: "#F4F8F4",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    name: "Bundles",
    slug: "/category/bundles",
    count: "Best value",
    accent: "#C4A55A",
    bg: "#FAF5EC",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    name: "Signs & Decor",
    slug: "/category/signs",
    count: "50+ templates",
    accent: "#C9927A",
    bg: "#FDF0E8",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: "Free Downloads",
    slug: "/freebies",
    count: "Always free",
    accent: "#5A8A5A",
    bg: "#E8F4E8",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-16" style={{ background: "white" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
          <div>
            <p
              className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A] mb-2"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Shop by Category
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.6rem,3vw,2.2rem)",
                fontWeight: 400,
                color: "#2C2C2C",
              }}
            >
              Everything You Need for the Perfect Shower
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-sm font-medium text-[#C9927A] hover:underline flex-shrink-0"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            View All Products →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.slug}
              className="group flex flex-col items-center text-center p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ background: cat.bg, borderColor: `${cat.accent}20` }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${cat.accent}20`, color: cat.accent }}
              >
                {cat.icon}
              </div>
              <h3
                className="text-sm font-semibold text-[#2C2C2C] mb-1 leading-tight"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                {cat.name}
              </h3>
              <p
                className="text-[11px]"
                style={{ color: cat.accent, fontFamily: "var(--font-ui)" }}
              >
                {cat.count}
              </p>
              <p
                className="text-[10px] mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: cat.accent, fontFamily: "var(--font-ui)" }}
              >
                Browse →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
