import Link from "next/link";

const tools = [
  {
    title: "Checklist Builder",
    description: "8-week timeline from first step to party day — never miss a detail.",
    href: "/printables/baby-shower-planning-checklist",
    cta: "Try Free →",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C4A55A" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 8h10M7 12h10M7 16h6" strokeLinecap="round" opacity="0.6" />
        <path d="M5 8l0.01 0M5 12l0.01 0M5 16l0.01 0" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
    ),
    iconBg: "linear-gradient(135deg,#F5F2E8,#EEE8D0)",
  },
  {
    title: "RSVP Website",
    description: "Create a beautiful RSVP page in minutes. Share it instantly.",
    href: "/rsvp",
    cta: "Try Free →",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9BAD9B" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" strokeLinecap="round" />
      </svg>
    ),
    iconBg: "linear-gradient(135deg,#F0F8F0,#E0EEE0)",
  },
  {
    title: "Budget Tracker",
    description: "Track every expense, stay on budget, and avoid surprises.",
    href: "/freebies",
    cta: "Try Free →",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7AADC4" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v2M12 16v2" strokeLinecap="round" />
        <path d="M9 9.5C9 8.67 10.34 8 12 8s3 .67 3 1.5c0 1.67-6 1.67-6 3C9 13.83 10.34 14.5 12 14.5s3-.67 3-1.5" strokeLinecap="round" />
      </svg>
    ),
    iconBg: "linear-gradient(135deg,#F0F4FC,#E4ECF8)",
  },
  {
    title: "Theme Finder Quiz",
    description: "Answer 5 questions. Get your perfect baby shower theme instantly.",
    href: "/themes",
    cta: "Take Quiz →",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9927A" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 10c0-1.66 1.34-3 3-3s3 1.34 3 3c0 1.66-1.34 3-3 3" strokeLinecap="round" />
        <circle cx="12" cy="17" r="0.5" fill="#C9927A" />
      </svg>
    ),
    iconBg: "linear-gradient(135deg,#FDF0EC,#F8E4DC)",
  },
];

export default function PlanningTools() {
  return (
    <section className="py-20" style={{ background: "white" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="mb-10">
          <p
            className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A] mb-2"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            Planning Tools
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              color: "#2C2C2C",
            }}
          >
            Plan Your Shower, Step by Step
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="group bg-white rounded-2xl border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex flex-col gap-4"
              style={{ borderColor: "#EDE5DC" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: tool.iconBg }}
              >
                {tool.icon}
              </div>
              <div className="flex-1">
                <h3
                  className="text-sm font-medium text-[#2C2C2C] mb-1.5"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {tool.title}
                </h3>
                <p
                  className="text-[12px] text-[#2C2C2C]/50 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {tool.description}
                </p>
              </div>
              <span
                className="text-[11px] font-medium text-[#C9927A]"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                {tool.cta}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
