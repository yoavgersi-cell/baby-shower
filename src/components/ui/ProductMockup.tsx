interface MockupProps {
  type: "invitation" | "bingo" | "bundle" | "sign" | "checklist" | "game" | "pdf";
  accentColor?: string;
  bgColor?: string;
  title?: string;
  size?: "sm" | "md" | "lg";
}

const InvitationMockup = ({
  accentColor = "#C9927A",
  bgColor = "#FDF8F5",
  title = "Baby Shower",
}: {
  accentColor?: string;
  bgColor?: string;
  title?: string;
}) => (
  <div className="w-full h-full flex items-center justify-center p-3" style={{ background: bgColor }}>
    <div
      className="w-full h-full relative flex flex-col items-center justify-center p-4"
      style={{ border: `1px solid ${accentColor}40` }}
    >
      <div
        className="absolute top-1 left-1 w-4 h-4"
        style={{ borderTop: `1.5px solid ${accentColor}`, borderLeft: `1.5px solid ${accentColor}` }}
      />
      <div
        className="absolute top-1 right-1 w-4 h-4"
        style={{ borderTop: `1.5px solid ${accentColor}`, borderRight: `1.5px solid ${accentColor}` }}
      />
      <div
        className="absolute bottom-1 left-1 w-4 h-4"
        style={{ borderBottom: `1.5px solid ${accentColor}`, borderLeft: `1.5px solid ${accentColor}` }}
      />
      <div
        className="absolute bottom-1 right-1 w-4 h-4"
        style={{ borderBottom: `1.5px solid ${accentColor}`, borderRight: `1.5px solid ${accentColor}` }}
      />
      <div className="w-12 h-px mb-3" style={{ background: accentColor }} />
      <p
        className="text-[7px] tracking-[0.2em] uppercase mb-1"
        style={{ color: `${accentColor}CC`, fontFamily: "var(--font-ui)" }}
      >
        You are invited to a
      </p>
      <p
        className="text-center leading-tight mb-1"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.9rem",
          color: "#2C2C2C",
          fontWeight: 400,
        }}
      >
        {title}
      </p>
      <p
        className="text-[7px] tracking-[0.15em] mb-3"
        style={{ color: accentColor, fontFamily: "var(--font-ui)" }}
      >
        for Emma & James
      </p>
      <div className="w-8 h-px mb-3" style={{ background: `${accentColor}60` }} />
      {["Saturday, June 14th · 2pm", "The Garden Room", "RSVP by June 1st"].map((line, i) => (
        <p key={i} className="text-[6px] mb-0.5" style={{ color: "#2C2C2C60", fontFamily: "var(--font-ui)" }}>
          {line}
        </p>
      ))}
      <div className="w-12 h-px mt-3" style={{ background: accentColor }} />
    </div>
  </div>
);

const BingoMockup = ({
  accentColor = "#9BAD9B",
  bgColor = "#F5FAF5",
}: {
  accentColor?: string;
  bgColor?: string;
}) => {
  const words = [
    "Diaper","Onesie","Rattle","Bottle","Bib",
    "Blanket","Booties","Socks","★","Crib",
    "Stroller","Formula","Pacifier","Mobile","Teddy",
    "Wipes","Monitor","Swaddle","Lotion","Hat",
    "Burp Cloth","Car Seat","Swing","Bath","Toy",
  ];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-3" style={{ background: bgColor }}>
      <p
        className="text-[8px] font-bold tracking-[0.2em] uppercase mb-2"
        style={{ color: accentColor, fontFamily: "var(--font-ui)" }}
      >
        Baby Shower Bingo
      </p>
      <div className="grid grid-cols-5 gap-0.5 w-full" style={{ maxWidth: 160 }}>
        {words.map((word, i) => (
          <div
            key={i}
            className="flex items-center justify-center text-[5px] text-center leading-tight py-1.5 px-0.5"
            style={{
              background:
                i === 12
                  ? accentColor
                  : [2, 7, 8, 17, 22].includes(i)
                  ? `${accentColor}30`
                  : "white",
              color: i === 12 ? "white" : "#2C2C2C90",
              border: `0.5px solid ${accentColor}30`,
              fontFamily: "var(--font-ui)",
              minHeight: 20,
            }}
          >
            {word}
          </div>
        ))}
      </div>
      <div className="w-full mt-2 h-px" style={{ background: `${accentColor}40` }} />
      <p className="text-[6px] mt-1" style={{ color: "#2C2C2C50", fontFamily: "var(--font-ui)" }}>
        30 unique cards included
      </p>
    </div>
  );
};

const BundleMockup = ({
  accentColor = "#C4A55A",
  bgColor = "#FAF5EC",
  title = "Complete Baby Shower Bundle",
}: {
  accentColor?: string;
  bgColor?: string;
  title?: string;
}) => (
  <div className="w-full h-full relative flex items-center justify-center" style={{ background: bgColor }}>
    <div
      className="absolute"
      style={{
        width: "75%",
        height: "85%",
        background: `${accentColor}15`,
        transform: "rotate(4deg) translateX(6px) translateY(4px)",
        border: `1px solid ${accentColor}20`,
      }}
    />
    <div
      className="absolute"
      style={{
        width: "75%",
        height: "85%",
        background: `${accentColor}10`,
        transform: "rotate(-3deg) translateX(-4px) translateY(2px)",
        border: `1px solid ${accentColor}20`,
      }}
    />
    <div
      className="relative flex flex-col items-center justify-center text-center p-5"
      style={{
        width: "75%",
        height: "85%",
        background: "white",
        border: `1px solid ${accentColor}40`,
        zIndex: 1,
      }}
    >
      <div
        className="w-8 h-8 rounded-full mb-3 flex items-center justify-center"
        style={{ background: `${accentColor}20` }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </div>
      <div className="w-10 h-px mb-2" style={{ background: accentColor }} />
      <p
        className="text-[7px] tracking-widest uppercase mb-1"
        style={{ color: `${accentColor}AA`, fontFamily: "var(--font-ui)" }}
      >
        Digital Download
      </p>
      <p
        className="text-xs leading-tight"
        style={{ fontFamily: "var(--font-heading)", color: "#2C2C2C", fontWeight: 500 }}
      >
        {title}
      </p>
      <div className="w-10 h-px mt-2 mb-2" style={{ background: accentColor }} />
      <p className="text-[6px]" style={{ color: "#2C2C2C50", fontFamily: "var(--font-ui)" }}>
        PDF · Canva · Instant Download
      </p>
    </div>
  </div>
);

const SignMockup = ({
  accentColor = "#9BAD9B",
  bgColor = "#F5FAF5",
  title = "Welcome Baby",
}: {
  accentColor?: string;
  bgColor?: string;
  title?: string;
}) => (
  <div className="w-full h-full flex items-center justify-center" style={{ background: bgColor }}>
    <div
      className="relative flex flex-col items-center justify-center text-center px-4"
      style={{ border: `2px solid ${accentColor}`, padding: "16px 20px" }}
    >
      <div className="absolute -top-0.5 left-4 right-4 h-0.5" style={{ background: bgColor }} />
      <div className="flex gap-1.5 mb-3">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{ background: `${accentColor}${60 + i * 10}` }}
          />
        ))}
      </div>
      <p
        className="text-[8px] tracking-[0.25em] uppercase mb-1"
        style={{ color: `${accentColor}AA`, fontFamily: "var(--font-ui)" }}
      >
        It&apos;s A
      </p>
      <p
        className="text-2xl leading-tight mb-1"
        style={{ fontFamily: "var(--font-display)", color: "#2C2C2C", fontWeight: 400 }}
      >
        {title}
      </p>
      <div className="w-8 h-px my-2" style={{ background: accentColor }} />
      <p className="text-[7px]" style={{ color: "#2C2C2C50", fontFamily: "var(--font-ui)" }}>
        Editable Sign Template
      </p>
      <div className="flex gap-1.5 mt-3">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{ background: `${accentColor}${60 + i * 10}` }}
          />
        ))}
      </div>
    </div>
  </div>
);

const ChecklistMockup = ({
  accentColor = "#C9927A",
  bgColor = "#FDF8F5",
}: {
  accentColor?: string;
  bgColor?: string;
}) => {
  const items = [
    "Book the venue",
    "Send invitations",
    "Order cake",
    "Plan games",
    "Prepare decorations",
    "Arrange flowers",
    "Set up gift table",
    "Prepare party favors",
  ];
  const checked = [0, 1, 4];
  return (
    <div className="w-full h-full flex flex-col p-4" style={{ background: bgColor }}>
      <div
        className="flex items-center gap-2 mb-3 pb-2"
        style={{ borderBottom: `1px solid ${accentColor}30` }}
      >
        <div className="w-3 h-3 rounded-sm" style={{ background: accentColor }} />
        <p
          className="text-[8px] font-semibold tracking-[0.15em] uppercase"
          style={{ color: "#2C2C2C", fontFamily: "var(--font-ui)" }}
        >
          Baby Shower Checklist
        </p>
      </div>
      <p className="text-[7px] mb-3" style={{ color: `${accentColor}AA`, fontFamily: "var(--font-ui)" }}>
        8 Weeks Before the Shower
      </p>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2 mb-1.5">
          <div
            className="w-3 h-3 rounded-sm flex-shrink-0 flex items-center justify-center"
            style={{
              border: `1px solid ${accentColor}60`,
              background: checked.includes(i) ? accentColor : "transparent",
            }}
          >
            {checked.includes(i) && (
              <svg width="8" height="8" viewBox="0 0 12 12">
                <polyline points="2 6 5 9 10 3" stroke="white" strokeWidth="1.5" fill="none" />
              </svg>
            )}
          </div>
          <p
            className="text-[6.5px]"
            style={{
              color: checked.includes(i) ? "#2C2C2C40" : "#2C2C2C80",
              textDecoration: checked.includes(i) ? "line-through" : "none",
              fontFamily: "var(--font-ui)",
            }}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
};

const GameMockup = ({
  accentColor = "#C9927A",
  bgColor = "#FDF8F5",
  title = "Baby Predictions",
}: {
  accentColor?: string;
  bgColor?: string;
  title?: string;
}) => (
  <div className="w-full h-full flex flex-col p-4" style={{ background: bgColor }}>
    <div
      className="text-center mb-3 pb-2"
      style={{ borderBottom: `1px solid ${accentColor}30` }}
    >
      <p
        className="text-[9px] font-semibold tracking-widest uppercase"
        style={{ color: accentColor, fontFamily: "var(--font-ui)" }}
      >
        {title}
      </p>
    </div>
    {["Due date:", "Baby's weight:", "Hair color:", "Eye color:", "First word:", "Looks like:"].map(
      (label, i) => (
        <div key={i} className="flex items-center gap-2 mb-2">
          <p
            className="text-[7px] flex-shrink-0 w-20"
            style={{ color: "#2C2C2C80", fontFamily: "var(--font-ui)" }}
          >
            {label}
          </p>
          <div className="flex-1 h-px" style={{ background: `${accentColor}40` }} />
        </div>
      )
    )}
    <p
      className="text-[6px] mt-auto text-center"
      style={{ color: "#2C2C2C40", fontFamily: "var(--font-ui)" }}
    >
      Guest Name: _______________
    </p>
  </div>
);

export function ProductMockup({ type, accentColor, bgColor, title }: MockupProps) {
  const mockups: Record<string, React.ReactNode> = {
    invitation: <InvitationMockup accentColor={accentColor} bgColor={bgColor} title={title} />,
    bingo: <BingoMockup accentColor={accentColor} bgColor={bgColor} />,
    bundle: <BundleMockup accentColor={accentColor} bgColor={bgColor} title={title} />,
    sign: <SignMockup accentColor={accentColor} bgColor={bgColor} title={title} />,
    checklist: <ChecklistMockup accentColor={accentColor} bgColor={bgColor} />,
    game: <GameMockup accentColor={accentColor} bgColor={bgColor} title={title} />,
    pdf: <BundleMockup accentColor={accentColor} bgColor={bgColor} title={title} />,
  };
  return <>{mockups[type] ?? mockups.pdf}</>;
}
