import React from "react";

interface FlowerProps {
  color?: string;
  size?: number;
}

export default function Flower({ color = "#E8C4C4", size = 40 }: FlowerProps) {
  const angles = [0, 60, 120, 180, 240, 300];
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {angles.map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 20 + Math.cos(rad) * 8;
        const cy = 20 + Math.sin(rad) * 8;
        return (
          <ellipse
            key={angle}
            cx={cx}
            cy={cy}
            rx="6"
            ry="9"
            fill={color}
            opacity="0.85"
            transform={`rotate(${angle} ${cx} ${cy})`}
          />
        );
      })}
      <circle cx="20" cy="20" r="6" fill="#F5E6C8" />
      <circle cx="20" cy="20" r="3" fill="#E8C4A0" />
    </svg>
  );
}
