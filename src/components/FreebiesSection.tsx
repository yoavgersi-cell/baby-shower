import Image from "next/image";
import Link from "next/link";
import { freebies } from "@/data/freebies";

export default function FreebiesSection() {
  return (
    <section className="py-20" style={{ background: "#F5F0E8" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 gap-4">
          <div>
            <p
              className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A] mb-2"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Free Downloads
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#2C2C2C",
              }}
            >
              Free Downloads — No Sign-Up Required
              <span className="text-[#C9927A]">*</span>
            </h2>
          </div>
          <Link
            href="/freebies"
            className="text-sm font-medium text-[#C9927A] hover:underline flex-shrink-0"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            See All Freebies →
          </Link>
        </div>
        <p
          className="text-[11px] text-[#2C2C2C]/45 mb-10"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          *Some items require email for instant delivery
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {freebies.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: "#EDE5DC" }}
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Category pill */}
                <span
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold"
                  style={{
                    background: "white",
                    color: "#C9927A",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  {item.category}
                </span>
                {/* Email badge */}
                {item.requiresEmail && (
                  <span
                    className="absolute top-3 right-3 px-2 py-1 rounded-full text-[9px] font-semibold"
                    style={{
                      background: "#FDF5E8",
                      color: "#C4A55A",
                      fontFamily: "var(--font-ui)",
                    }}
                  >
                    Free w/ Email
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="px-2 py-0.5 rounded text-[9px] font-medium"
                    style={{
                      background: "#E8F0E8",
                      color: "#6A8A6A",
                      fontFamily: "var(--font-ui)",
                    }}
                  >
                    {item.fileType}
                  </span>
                  <span
                    className="text-[10px] text-[#2C2C2C]/40"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {item.downloadCount} downloads
                  </span>
                </div>
                <h3
                  className="text-sm font-medium text-[#2C2C2C] leading-tight mb-1"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[11px] text-[#2C2C2C]/50 leading-relaxed mb-4 line-clamp-2"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {item.description}
                </p>
                <Link
                  href="/freebies"
                  className="block w-full py-2.5 text-center text-xs font-medium rounded-xl border transition-all hover:bg-[#C9927A] hover:text-white hover:border-[#C9927A]"
                  style={{
                    fontFamily: "var(--font-ui)",
                    borderColor: "#E8E0D8",
                    color: "#2C2C2C",
                  }}
                >
                  Download Free →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
