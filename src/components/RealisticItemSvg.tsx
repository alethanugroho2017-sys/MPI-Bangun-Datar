import React from 'react';
import { RealPhotoItem } from '../types';

interface RealisticItemSvgProps {
  type: RealPhotoItem['svgFallbackType'];
  className?: string;
}

export const RealisticItemSvg: React.FC<RealisticItemSvgProps> = ({ type, className = 'w-full h-full' }) => {
  switch (type) {
    case 'ubin':
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#E2E8F0" rx="12" />
          <rect x="15" y="15" width="170" height="170" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="3" rx="8" />
          {/* Tile decorative pattern */}
          <rect x="30" y="30" width="65" height="65" fill="#CBD5E1" rx="4" />
          <rect x="105" y="30" width="65" height="65" fill="#E2E8F0" rx="4" />
          <rect x="30" y="105" width="65" height="65" fill="#E2E8F0" rx="4" />
          <rect x="105" y="105" width="65" height="65" fill="#CBD5E1" rx="4" />
          {/* Ceramic sheen */}
          <path d="M25 25 L80 25 L40 65 Z" fill="white" opacity="0.4" />
          <text x="100" y="190" textAnchor="middle" fontSize="11" fill="#64748B" fontWeight="600">Ubin Keramik (Persegi)</text>
        </svg>
      );

    case 'catur':
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#78350F" rx="10" />
          <rect x="12" y="12" width="176" height="176" fill="#FDE68A" stroke="#B45309" strokeWidth="3" rx="4" />
          {/* 6x6 grid sample */}
          {[0, 1, 2, 3, 4, 5].map((r) =>
            [0, 1, 2, 3, 4, 5].map((c) => (
              <rect
                key={`${r}-${c}`}
                x={20 + c * 26.6}
                y={20 + r * 26.6}
                width="26.6"
                height="26.6"
                fill={(r + c) % 2 === 0 ? '#451A03' : '#FEF3C7'}
              />
            ))
          )}
          <text x="100" y="195" textAnchor="middle" fontSize="10" fill="#FEF3C7" fontWeight="600">Papan Catur (Persegi)</text>
        </svg>
      );

    case 'saputangan':
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#F1F5F9" rx="12" />
          <rect x="25" y="25" width="150" height="150" fill="#BAE6FD" stroke="#0284C7" strokeWidth="3" strokeDasharray="6 4" rx="4" />
          <rect x="40" y="40" width="120" height="120" fill="#E0F2FE" rx="2" />
          {/* Embroidered floral corner */}
          <circle cx="60" cy="60" r="12" fill="#F43F5E" />
          <circle cx="60" cy="60" r="4" fill="#FEF08A" />
          <text x="100" y="185" textAnchor="middle" fontSize="11" fill="#0369A1" fontWeight="600">Sapu Tangan Katun</text>
        </svg>
      );

    case 'buku':
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#F8FAFC" rx="12" />
          <rect x="35" y="20" width="130" height="160" fill="#3B82F6" rx="6" />
          <rect x="45" y="25" width="115" height="150" fill="#EFF6FF" rx="4" />
          {/* Spiral binder */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <ellipse key={i} cx="35" cy={35 + i * 18} rx="6" ry="3" fill="#64748B" />
          ))}
          {/* Cover design */}
          <rect x="60" y="45" width="85" height="25" fill="#DBEAFE" rx="3" />
          <text x="102" y="62" textAnchor="middle" fontSize="12" fill="#1D4ED8" fontWeight="bold">BUKU TULIS</text>
          <line x1="60" y1="90" x2="145" y2="90" stroke="#93C5FD" strokeWidth="2" />
          <line x1="60" y1="110" x2="145" y2="110" stroke="#93C5FD" strokeWidth="2" />
          <line x1="60" y1="130" x2="145" y2="130" stroke="#93C5FD" strokeWidth="2" />
          <text x="100" y="192" textAnchor="middle" fontSize="10" fill="#475569" fontWeight="600">Buku Tulis (Persegi Panjang)</text>
        </svg>
      );

    case 'pintu':
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#F1F5F9" rx="12" />
          {/* Door frame */}
          <rect x="45" y="15" width="110" height="170" fill="#78350F" rx="4" />
          {/* Door leaf */}
          <rect x="52" y="22" width="96" height="163" fill="#B45309" rx="2" />
          {/* Panels */}
          <rect x="62" y="32" width="76" height="65" fill="#92400E" rx="3" stroke="#78350F" strokeWidth="2" />
          <rect x="62" y="107" width="76" height="68" fill="#92400E" rx="3" stroke="#78350F" strokeWidth="2" />
          {/* Doorknob */}
          <circle cx="138" cy="100" r="5" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
          <text x="100" y="196" textAnchor="middle" fontSize="10" fill="#78350F" fontWeight="600">Pintu Kayu (Persegi Panjang)</text>
        </svg>
      );

    case 'papantulis':
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#F8FAFC" rx="12" />
          {/* Wooden frame */}
          <rect x="20" y="40" width="160" height="110" fill="#92400E" rx="6" />
          {/* Green board */}
          <rect x="28" y="48" width="144" height="94" fill="#065F46" rx="3" />
          {/* Chalk writing */}
          <text x="100" y="85" textAnchor="middle" fontSize="14" fill="#F0FDF4" fontWeight="bold">1 + 1 = 2</text>
          <text x="100" y="115" textAnchor="middle" fontSize="13" fill="#BBF7D0">Matematika</text>
          {/* Chalk tray */}
          <rect x="60" y="142" width="80" height="6" fill="#D97706" rx="2" />
          <rect x="75" y="139" width="15" height="3" fill="#FFFFFF" rx="1" />
          <text x="100" y="175" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="600">Papan Tulis Sekolah</text>
        </svg>
      );

    case 'penggaris_segitiga':
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#FFFBEB" rx="12" />
          {/* Triangle ruler body */}
          <polygon points="30,170 170,170 30,30" fill="#FDE047" stroke="#CA8A04" strokeWidth="3" />
          {/* Triangle hollow center */}
          <polygon points="50,150 140,150 50,60" fill="#FFFBEB" stroke="#CA8A04" strokeWidth="2" />
          {/* Ticks along bottom */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <line key={i} x1={35 + i * 16} y1="170" x2={35 + i * 16} y2={i % 2 === 0 ? "160" : "164"} stroke="#854D0E" strokeWidth="1.5" />
          ))}
          {/* Ticks along left */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <line key={i} x1="30" y1={165 - i * 16} x2={i % 2 === 0 ? "40" : "36"} y2={165 - i * 16} stroke="#854D0E" strokeWidth="1.5" />
          ))}
          <text x="100" y="190" textAnchor="middle" fontSize="10" fill="#854D0E" fontWeight="600">Penggaris Segitiga Siku-Siku</text>
        </svg>
      );

    case 'rambu':
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#F8FAFC" rx="12" />
          {/* Triangle sign outer */}
          <polygon points="100,20 180,160 20,160" fill="#DC2626" stroke="#991B1B" strokeWidth="3" strokeLinejoin="round" />
          {/* Triangle inner */}
          <polygon points="100,45 160,150 40,150" fill="#FEF08A" strokeLinejoin="round" />
          {/* Exclamation mark */}
          <rect x="94" y="65" width="12" height="45" rx="4" fill="#000000" />
          <circle cx="100" cy="125" r="7" fill="#000000" />
          <text x="100" y="185" textAnchor="middle" fontSize="10" fill="#475569" fontWeight="600">Rambu Segitiga Hati-Hati</text>
        </svg>
      );

    case 'pizza':
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#FFF1F2" rx="12" />
          {/* Slice */}
          <path d="M100 25 L165 155 Q100 175 35 155 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="3" />
          {/* Crust */}
          <path d="M35 155 Q100 175 165 155 L165 165 Q100 185 35 165 Z" fill="#D97706" />
          {/* Cheese melted */}
          <path d="M100 35 L155 145 Q100 162 45 145 Z" fill="#FDE047" />
          {/* Pepperoni */}
          <circle cx="85" cy="85" r="10" fill="#DC2626" />
          <circle cx="115" cy="115" r="11" fill="#DC2626" />
          <circle cx="75" cy="130" r="9" fill="#DC2626" />
          <text x="100" y="190" textAnchor="middle" fontSize="10" fill="#991B1B" fontWeight="600">Sepotong Pizza (Segitiga)</text>
        </svg>
      );

    case 'jam':
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#F0FDF4" rx="12" />
          {/* Clock frame */}
          <circle cx="100" cy="95" r="75" fill="#EF4444" stroke="#B91C1C" strokeWidth="4" />
          <circle cx="100" cy="95" r="66" fill="#FFFFFF" />
          {/* Numbers / hour marks */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((h) => {
            const angle = (h * 30 - 90) * (Math.PI / 180);
            const x = 100 + Math.cos(angle) * 54;
            const y = 98 + Math.sin(angle) * 54;
            const num = h === 0 ? 12 : h;
            return (
              <text key={h} x={x} y={y} textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1E293B">
                {num}
              </text>
            );
          })}
          {/* Hands */}
          <line x1="100" y1="95" x2="100" y2="55" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
          <line x1="100" y1="95" x2="135" y2="95" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="100" cy="95" r="4.5" fill="#DC2626" />
          <text x="100" y="190" textAnchor="middle" fontSize="10" fill="#15803D" fontWeight="600">Jam Dinding (Lingkaran)</text>
        </svg>
      );

    case 'roda':
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#F8FAFC" rx="12" />
          {/* Outer rubber tire */}
          <circle cx="100" cy="95" r="75" fill="#1E293B" stroke="#0F172A" strokeWidth="4" />
          <circle cx="100" cy="95" r="64" fill="#64748B" />
          <circle cx="100" cy="95" r="54" fill="#F1F5F9" />
          {/* Spokes */}
          {[0, 30, 60, 90, 120, 150].map((deg) => (
            <line
              key={deg}
              x1={100 + Math.cos((deg * Math.PI) / 180) * 52}
              y1={95 + Math.sin((deg * Math.PI) / 180) * 52}
              x2={100 - Math.cos((deg * Math.PI) / 180) * 52}
              y2={95 - Math.sin((deg * Math.PI) / 180) * 52}
              stroke="#94A3B8"
              strokeWidth="2"
            />
          ))}
          {/* Center hub */}
          <circle cx="100" cy="95" r="14" fill="#CBD5E1" stroke="#475569" strokeWidth="3" />
          <circle cx="100" cy="95" r="6" fill="#1E293B" />
          <text x="100" y="190" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="600">Roda Sepeda (Lingkaran)</text>
        </svg>
      );

    case 'piring':
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#F0FDFA" rx="12" />
          <circle cx="100" cy="95" r="75" fill="#0D9488" stroke="#0F766E" strokeWidth="3" />
          <circle cx="100" cy="95" r="68" fill="#F0FDFA" />
          <circle cx="100" cy="95" r="50" fill="#CCFBF1" stroke="#5EEAD4" strokeWidth="2" />
          <text x="100" y="190" textAnchor="middle" fontSize="10" fill="#115E59" fontWeight="600">Piring Makan (Lingkaran)</text>
        </svg>
      );

    case 'telur':
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#FAF5FF" rx="12" />
          {/* Realistic egg silhouette */}
          <path
            d="M 100 25 C 135 25, 155 75, 155 115 C 155 150, 130 170, 100 170 C 70 170, 45 150, 45 115 C 45 75, 65 25, 100 25 Z"
            fill="#FED7AA"
            stroke="#EA580C"
            strokeWidth="3"
          />
          {/* Highlight sheen */}
          <ellipse cx="85" cy="85" rx="18" ry="32" fill="#FFF7ED" opacity="0.6" transform="rotate(-15 85 85)" />
          <text x="100" y="190" textAnchor="middle" fontSize="10" fill="#7E22CE" fontWeight="600">Telur Ayam Asli (Oval/Lonjong)</text>
        </svg>
      );

    case 'cermin_oval':
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#F5F3FF" rx="12" />
          {/* Wooden vintage frame */}
          <ellipse cx="100" cy="95" rx="60" ry="75" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="4" />
          {/* Mirror glass */}
          <ellipse cx="100" cy="95" rx="50" ry="65" fill="#E0E7FF" stroke="#A5B4FC" strokeWidth="2" />
          {/* Reflection gloss */}
          <path d="M80 40 L120 40 L65 140 L50 140 Z" fill="#FFFFFF" opacity="0.45" />
          <text x="100" y="190" textAnchor="middle" fontSize="10" fill="#5B21B6" fontWeight="600">Cermin Hias (Oval)</text>
        </svg>
      );

    case 'semangka':
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#F0FDF4" rx="12" />
          <ellipse cx="100" cy="95" rx="72" ry="54" fill="#15803D" stroke="#166534" strokeWidth="3" />
          {/* Stripes */}
          <path d="M 40 95 Q 100 65 160 95" stroke="#14532D" strokeWidth="6" fill="none" />
          <path d="M 45 75 Q 100 45 155 75" stroke="#14532D" strokeWidth="5" fill="none" />
          <path d="M 45 115 Q 100 145 155 115" stroke="#14532D" strokeWidth="5" fill="none" />
          <text x="100" y="190" textAnchor="middle" fontSize="10" fill="#166534" fontWeight="600">Semangka Lonjong (Oval)</text>
        </svg>
      );

    case 'kap_lampu':
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#FFFBEB" rx="12" />
          {/* Ceiling wire */}
          <line x1="100" y1="10" x2="100" y2="45" stroke="#78350F" strokeWidth="3" />
          {/* Lampshade: Trapezoid (top parallel to bottom) */}
          <polygon points="65,45 135,45 170,140 30,140" fill="#F59E0B" stroke="#B45309" strokeWidth="3" />
          {/* Glow beneath */}
          <ellipse cx="100" cy="140" rx="70" ry="12" fill="#FDE047" opacity="0.6" />
          <path d="M30 140 L15 180 L185 180 L170 140 Z" fill="#FEF08A" opacity="0.25" />
          <text x="100" y="192" textAnchor="middle" fontSize="10" fill="#B45309" fontWeight="600">Kap Lampu Gantung (Trapesium)</text>
        </svg>
      );

    case 'tas_trapesium':
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#FFF7ED" rx="12" />
          {/* Handle */}
          <path d="M75 55 C75 25, 125 25, 125 55" fill="none" stroke="#9A3412" strokeWidth="5" strokeLinecap="round" />
          {/* Bag Body (Trapezoid) */}
          <polygon points="65,55 135,55 165,160 35,160" fill="#EA580C" stroke="#9A3412" strokeWidth="3" />
          {/* Flap */}
          <polygon points="70,55 130,55 125,95 75,95" fill="#C2410C" />
          <circle cx="100" cy="85" r="5" fill="#FDE047" />
          <text x="100" y="190" textAnchor="middle" fontSize="10" fill="#9A3412" fontWeight="600">Tas Tangan (Trapesium)</text>
        </svg>
      );

    case 'pot_trapesium':
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#F0FDF4" rx="12" />
          {/* Plant green leaves */}
          <circle cx="100" cy="50" r="24" fill="#22C55E" />
          <circle cx="78" cy="65" r="18" fill="#16A34A" />
          <circle cx="122" cy="65" r="18" fill="#16A34A" />
          {/* Pot (Trapezoid: wider top, narrower bottom) */}
          <polygon points="40,85 160,85 135,165 65,165" fill="#D97706" stroke="#92400E" strokeWidth="3" />
          <rect x="36" y="80" width="128" height="12" fill="#B45309" rx="2" />
          <text x="100" y="190" textAnchor="middle" fontSize="10" fill="#78350F" fontWeight="600">Pot Bunga (Trapesium)</text>
        </svg>
      );

    case 'uang':
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#F0FDF4" rx="12" />
          <rect x="20" y="55" width="160" height="90" fill="#86EFAC" stroke="#16A34A" strokeWidth="3" rx="4" />
          <circle cx="100" cy="100" r="26" fill="#BBF7D0" stroke="#15803D" strokeWidth="1.5" />
          <text x="100" y="106" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#166534">Rp</text>
          <text x="35" y="78" fontSize="11" fontWeight="bold" fill="#14532D">10.000</text>
          <text x="100" y="175" textAnchor="middle" fontSize="10" fill="#166534" fontWeight="600">Uang Kertas (Persegi Panjang)</text>
        </svg>
      );

    case 'koin':
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#FFFBEB" rx="12" />
          <circle cx="100" cy="95" r="68" fill="#FBBF24" stroke="#D97706" strokeWidth="4" />
          <circle cx="100" cy="95" r="56" fill="#FEF08A" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 2" />
          <text x="100" y="104" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#B45309">1000</text>
          <text x="100" y="190" textAnchor="middle" fontSize="10" fill="#B45309" fontWeight="600">Koin Logam (Lingkaran)</text>
        </svg>
      );

    default:
      return (
        <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-500 rounded-lg p-4 text-center text-xs">
          Ilustrasi Benda Nyata
        </div>
      );
  }
};
