import Link from "next/link";

const guides = [
  {
    title: "Baby Shower Checklist",
    description: "8-week countdown. Never miss a detail.",
    href: "/guides/baby-shower-checklist",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    title: "Baby Shower Budget",
    description: "How to plan a beautiful shower on any budget.",
    href: "/guides/baby-shower-budget",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    title: "Baby Shower Games Guide",
    description: "The best games for every group size.",
    href: "/guides/baby-shower-games",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    title: "Invitation Wording",
    description: "What to write on a baby shower invitation.",
    href: "/guides/invitation-wording",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,13 22,4" />
      </svg>
    ),
  },
  {
    title: "Baby Shower Themes",
    description: "100+ theme ideas for 2025.",
    href: "/themes",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Music & Playlist Ideas",
    description: "Curated playlists for every vibe.",
    href: "/music",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
];

export default function PlanningGuides() {
  return (
    <section className="py-20" style={{ background: "#FAF8F5" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <p
              className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A] mb-2"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Planning Guides
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#2C2C2C",
              }}
            >
              Everything You Need to Know
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-medium text-[#C9927A] hover:underline flex-shrink-0"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            View All Guides →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group flex items-start gap-4 p-5 bg-white rounded-2xl border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              style={{ borderColor: "#F0EBE4" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center transition-colors duration-200 group-hover:bg-[#C9927A] group-hover:text-white"
                style={{ background: "#FDF5EE", color: "#C9927A" }}
              >
                {guide.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className="text-sm font-semibold text-[#2C2C2C] mb-1 group-hover:text-[#C9927A] transition-colors"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {guide.title}
                </h3>
                <p
                  className="text-xs text-[#2C2C2C]/55 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {guide.description}
                </p>
                <p
                  className="text-[11px] font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "#C9927A", fontFamily: "var(--font-ui)" }}
                >
                  Read Guide →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
