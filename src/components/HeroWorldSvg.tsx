import React from 'react';

interface HeroWorldSvgProps {
  className?: string;
}

export const HeroWorldSvg: React.FC<HeroWorldSvgProps> = ({ className = 'w-full h-full' }) => {
  return (
    <svg
      viewBox="0 0 1200 500"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Dunia Petualangan Geometri Bangun Datar"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="65%" stopColor="#7DD3FC" />
          <stop offset="100%" stopColor="#E0F2FE" />
        </linearGradient>
        <linearGradient id="hillGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="100%" stopColor="#16A34A" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="1200" height="500" fill="url(#skyGrad)" />

      {/* Fluffy Clouds */}
      <g fill="#FFFFFF" opacity="0.92" stroke="#0369A1" strokeWidth="2.5">
        <path d="M120 110 H240 A28 28 0 0 0 232 58 A36 36 0 0 0 165 48 A30 30 0 0 0 120 110 Z" />
        <path d="M840 120 H980 A26 26 0 0 0 970 72 A38 38 0 0 0 900 62 A30 30 0 0 0 840 120 Z" />
        <path d="M1040 85 H1145 A22 22 0 0 0 1138 45 A28 28 0 0 0 1085 38 A24 24 0 0 0 1040 85 Z" />
      </g>

      {/* Smiling Rainbow Sun (Circle!) */}
      <g transform="translate(600, 125)">
        <circle r="76" fill="#EF4444" stroke="#1E293B" strokeWidth="3" />
        <circle r="64" fill="#F97316" />
        <circle r="52" fill="#FACC15" />
        <circle r="40" fill="#22C55E" />
        <circle r="30" fill="#3B82F6" />
        <circle r="22" fill="#FDE047" stroke="#1E293B" strokeWidth="2.5" />
        {/* Happy Face */}
        <circle cx="-7" cy="-3" r="2.5" fill="#1E293B" />
        <circle cx="7" cy="-3" r="2.5" fill="#1E293B" />
        <path d="M-7 5 Q0 12 7 5" fill="none" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Triangular Mountains (Segitiga!) */}
      <g stroke="#1E293B" strokeWidth="3" strokeLinejoin="round">
        <polygon points="-20,340 140,120 300,340" fill="#15803D" />
        <polygon points="88,191 140,120 192,191 165,180 140,196 115,180" fill="#86EFAC" />

        <polygon points="200,340 380,140 560,340" fill="#22C55E" />
        <polygon points="325,201 380,140 435,201 408,190 380,206 352,190" fill="#BBF7D0" />

        <polygon points="650,340 830,130 1010,340" fill="#16A34A" />
        <polygon points="776,193 830,130 884,193 857,183 830,198 803,183" fill="#86EFAC" />

        <polygon points="920,340 1080,145 1230,340" fill="#15803D" />
        <polygon points="1032,204 1080,145 1128,204 1105,193 1080,208 1055,193" fill="#BBF7D0" />
      </g>

      {/* Rolling Green Meadow */}
      <path d="M0 315 Q300 285 600 315 T1200 310 L1200 500 L0 500 Z" fill="url(#hillGrad)" stroke="#1E293B" strokeWidth="3" />

      {/* Winding Stone Path */}
      <path
        d="M520 500 C540 420, 620 380, 590 315 L635 315 C675 385, 620 430, 680 500 Z"
        fill="#E2E8F0"
        stroke="#1E293B"
        strokeWidth="3"
      />

      {/* Geometric Houses Left (Square, Rectangle, Triangle Roof, Circle Window) */}
      <g transform="translate(150, 225)" stroke="#1E293B" strokeWidth="3" strokeLinejoin="round">
        {/* House 1 */}
        <rect x="0" y="35" width="90" height="90" fill="#F97316" rx="3" />
        <polygon points="-8,35 45,-20 98,35" fill="#9333EA" />
        <circle cx="45" cy="65" r="16" fill="#BAE6FD" />
        <line x1="45" y1="49" x2="45" y2="81" stroke="#1E293B" strokeWidth="2.5" />
        <line x1="29" y1="65" x2="61" y2="65" stroke="#1E293B" strokeWidth="2.5" />
        <rect x="33" y="92" width="24" height="33" fill="#78350F" />

        {/* House 2 */}
        <rect x="105" y="45" width="85" height="80" fill="#FACC15" rx="3" />
        <polygon points="98,45 147,0 197,45" fill="#EF4444" />
        <rect x="122" y="64" width="22" height="22" fill="#BAE6FD" />
        <rect x="155" y="64" width="22" height="22" fill="#BAE6FD" />
        <rect x="136" y="95" width="24" height="30" fill="#0284C7" />
      </g>

      {/* Geometric Houses Right */}
      <g transform="translate(830, 230)" stroke="#1E293B" strokeWidth="3" strokeLinejoin="round">
        {/* Trapezoid Roof House */}
        <rect x="0" y="38" width="95" height="85" fill="#F59E0B" rx="3" />
        <polygon points="15,0 80,0 102,38 -7,38" fill="#0EA5E9" />
        <ellipse cx="47" cy="64" rx="18" ry="13" fill="#FEF08A" />
        <rect x="36" y="88" width="22" height="35" fill="#15803D" />

        {/* Tall Rectangle House */}
        <rect x="115" y="20" width="80" height="103" fill="#EC4899" rx="3" />
        <polygon points="108,20 155,-25 202,20" fill="#FACC15" />
        <circle cx="155" cy="48" r="14" fill="#E0F2FE" />
        <rect x="142" y="84" width="26" height="39" fill="#92400E" />
      </g>

      {/* Triangular Pine Trees */}
      <g stroke="#1E293B" strokeWidth="2.5" strokeLinejoin="round">
        <polygon points="65,335 95,240 125,335" fill="#16A34A" />
        <polygon points="415,340 445,250 475,340" fill="#15803D" />
        <polygon points="725,335 755,245 785,335" fill="#22C55E" />
        <polygon points="1085,335 1115,240 1145,335" fill="#16A34A" />
      </g>

      {/* Flying Geometric Kite */}
      <g transform="translate(260, 120) rotate(-12)" stroke="#1E293B" strokeWidth="2.5">
        <polygon points="0,-24 20,0 0,32 -20,0" fill="#FACC15" />
        <polygon points="0,-24 20,0 0,0" fill="#EF4444" />
        <polygon points="0,0 -20,0 0,32" fill="#3B82F6" />
        <path d="M0 32 Q-8 55 8 78" fill="none" stroke="#1E293B" strokeWidth="2" />
      </g>
    </svg>
  );
};
