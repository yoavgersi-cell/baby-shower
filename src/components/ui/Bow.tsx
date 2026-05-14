import React from "react";

interface BowProps {
  color?: string;
  size?: number;
}

export default function Bow({ color = "#E8C4C4", size = 50 }: BowProps) {
  const h = size * 0.7;
  return (
    <svg width={size} height={h} viewBox="0 0 60 40" fill="none">
      {/* Left loop */}
      <path d="M30 20 C20 10 5 8 8 18 C11 28 22 22 30 20Z" fill={color} opacity="0.9" />
      {/* Right loop */}
      <path d="M30 20 C40 10 55 8 52 18 C49 28 38 22 30 20Z" fill={color} opacity="0.9" />
      {/* Left tail */}
      <path d="M30 20 C24 26 14 32 10 36" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Right tail */}
      <path d="M30 20 C36 26 46 32 50 36" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Center knot */}
      <circle cx="30" cy="20" r="4" fill="#F5E6C8" />
      <circle cx="30" cy="20" r="2" fill={color} opacity="0.5" />
    </svg>
  );
}
