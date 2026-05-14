import React from "react";

interface BalloonProps {
  color: string;
  size?: number;
  style?: React.CSSProperties;
}

export default function Balloon({ color, size = 48, style }: BalloonProps) {
  return (
    <div className="relative" style={{ width: size, height: size * 1.25, ...style }}>
      <div
        className="rounded-full w-full shadow-lg"
        style={{
          height: size,
          background: `radial-gradient(ellipse at 35% 30%, ${color}EE 0%, ${color}88 60%, ${color}AA 100%)`,
        }}
      />
      {/* knot */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: size - 2,
          width: 4,
          height: 4,
          borderRadius: "50%",
          background: color,
          opacity: 0.7,
        }}
      />
      {/* string */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: size + 2,
          width: 1,
          height: size * 0.35,
          background: color,
          opacity: 0.3,
        }}
      />
    </div>
  );
}
