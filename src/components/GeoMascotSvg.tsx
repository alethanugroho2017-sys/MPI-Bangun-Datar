import React from 'react';

interface GeoMascotSvgProps {
  className?: string;
}

export const GeoMascotSvg: React.FC<GeoMascotSvgProps> = ({ className = 'w-full h-full' }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Maskot GEO Penjelajah Geometri"
    >
      {/* Sky Backdrop */}
      <defs>
        <linearGradient id="geoBgGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BAE6FD" />
          <stop offset="100%" stopColor="#E0F2FE" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#geoBgGrad)" />

      {/* Ground shadow */}
      <ellipse cx="100" cy="186" rx="52" ry="8" fill="#7DD3FC" opacity="0.7" />

      {/* Backpack */}
      <rect x="44" y="106" width="38" height="48" rx="12" fill="#15803D" stroke="#1E293B" strokeWidth="3.5" />
      <rect x="48" y="122" width="24" height="22" rx="6" fill="#22C55E" stroke="#1E293B" strokeWidth="2.5" />

      {/* Body / Vest */}
      <path d="M72 112 L128 112 L134 162 L66 162 Z" fill="#16A34A" stroke="#1E293B" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M75 112 L92 112 L90 162 L68 162 Z" fill="#0284C7" stroke="#1E293B" strokeWidth="3" strokeLinejoin="round" />
      <path d="M125 112 L108 112 L110 162 L132 162 Z" fill="#0284C7" stroke="#1E293B" strokeWidth="3" strokeLinejoin="round" />

      {/* Shorts & Boots */}
      <rect x="74" y="158" width="22" height="16" rx="4" fill="#92400E" stroke="#1E293B" strokeWidth="3" />
      <rect x="104" y="158" width="22" height="16" rx="4" fill="#92400E" stroke="#1E293B" strokeWidth="3" />
      <rect x="72" y="172" width="24" height="12" rx="5" fill="#78350F" stroke="#1E293B" strokeWidth="3" />
      <rect x="104" y="172" width="24" height="12" rx="5" fill="#78350F" stroke="#1E293B" strokeWidth="3" />

      {/* Head */}
      <circle cx="100" cy="78" r="34" fill="#FDBA74" stroke="#1E293B" strokeWidth="3.5" />
      {/* Ears */}
      <circle cx="65" cy="80" r="7" fill="#FDBA74" stroke="#1E293B" strokeWidth="3" />
      <circle cx="135" cy="80" r="7" fill="#FDBA74" stroke="#1E293B" strokeWidth="3" />

      {/* Hair */}
      <path d="M68 68 C70 46, 130 46, 132 68 C122 58, 78 58, 68 68 Z" fill="#78350F" stroke="#1E293B" strokeWidth="3" />

      {/* Cheeks */}
      <ellipse cx="78" cy="86" rx="6" ry="3.5" fill="#FB7185" opacity="0.6" />
      <ellipse cx="122" cy="86" rx="6" ry="3.5" fill="#FB7185" opacity="0.6" />

      {/* Eyes */}
      <circle cx="86" cy="76" r="4.5" fill="#1E293B" />
      <circle cx="87.5" cy="74.5" r="1.5" fill="#FFFFFF" />
      <circle cx="114" cy="76" r="4.5" fill="#1E293B" />
      <circle cx="115.5" cy="74.5" r="1.5" fill="#FFFFFF" />

      {/* Happy Smile */}
      <path d="M88 90 Q100 103 112 90 Z" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3" strokeLinejoin="round" />

      {/* Safari Explorer Hat */}
      <path d="M62 56 C62 24, 138 24, 138 56 Z" fill="#D6C08D" stroke="#1E293B" strokeWidth="3.5" />
      <ellipse cx="100" cy="56" rx="48" ry="10" fill="#C4AB72" stroke="#1E293B" strokeWidth="3.5" />
      {/* Hat Badge */}
      <rect x="84" y="31" width="32" height="17" rx="5" fill="#FEF3C7" stroke="#1E293B" strokeWidth="2.5" />
      <text x="100" y="43" textAnchor="middle" fontSize="10" fontWeight="900" fill="#78350F">GEO</text>

      {/* Right Arm + Magnifying Glass */}
      <path d="M128 118 L148 106" stroke="#FDBA74" strokeWidth="10" strokeLinecap="round" />
      <path d="M128 118 L148 106" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Magnifier Handle */}
      <line x1="145" y1="112" x2="154" y2="96" stroke="#92400E" strokeWidth="6" strokeLinecap="round" />
      {/* Magnifier Lens */}
      <circle cx="160" cy="82" r="18" fill="#E0F2FE" fillOpacity="0.85" stroke="#0284C7" strokeWidth="4.5" />
      <path d="M150 76 A10 10 0 0 1 162 69" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Floating Geometric Shapes in Left Hand */}
      <polygon points="44,82 56,102 32,102" fill="#FACC15" stroke="#1E293B" strokeWidth="2.5" />
      <circle cx="44" cy="68" r="8" fill="#F97316" stroke="#1E293B" strokeWidth="2.5" />
    </svg>
  );
};
