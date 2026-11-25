import React, { useState } from 'react';
import { ShapeType } from '../types';
import { sound } from '../utils/audio';

interface InteractiveShapeSvgProps {
  shape: ShapeType;
  className?: string;
  onSideClick?: (sideNum: number) => void;
  onVertexClick?: (vertexNum: number) => void;
}

export const InteractiveShapeSvg: React.FC<InteractiveShapeSvgProps> = ({
  shape,
  className = 'w-64 h-64 mx-auto',
}) => {
  const [activeSide, setActiveSide] = useState<number | null>(null);
  const [activeVertex, setActiveVertex] = useState<number | null>(null);
  const [infoPopup, setInfoPopup] = useState<string | null>(null);

  const triggerSide = (num: number, label: string) => {
    sound.playCount(num);
    setActiveSide(num);
    setActiveVertex(null);
    setInfoPopup(`Sisi ${num}: ${label}`);
  };

  const triggerVertex = (num: number, label: string) => {
    sound.playCorrect();
    setActiveVertex(num);
    setActiveSide(null);
    setInfoPopup(`Titik Sudut ${num}: Pertemuan 2 sisi garis lurus!`);
  };

  const renderShape = () => {
    switch (shape) {
      case 'persegi':
        return (
          <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-md">
            {/* Shape Body */}
            <rect
              x="40"
              y="40"
              width="160"
              height="160"
              fill="#D1FAE5"
              stroke="#059669"
              strokeWidth="4"
              rx="4"
              className="transition-colors hover:fill-emerald-200"
            />
            {/* Side 1 (Top) */}
            <line
              x1="40" y1="40" x2="200" y2="40"
              stroke={activeSide === 1 ? '#EF4444' : '#10B981'}
              strokeWidth={activeSide === 1 ? 9 : 5}
              strokeLinecap="round"
              className="cursor-pointer transition-all"
              onClick={() => triggerSide(1, 'Sisi Atas (Sama Panjang)')}
            />
            {/* Side 2 (Right) */}
            <line
              x1="200" y1="40" x2="200" y2="200"
              stroke={activeSide === 2 ? '#EF4444' : '#10B981'}
              strokeWidth={activeSide === 2 ? 9 : 5}
              strokeLinecap="round"
              className="cursor-pointer transition-all"
              onClick={() => triggerSide(2, 'Sisi Kanan (Sama Panjang)')}
            />
            {/* Side 3 (Bottom) */}
            <line
              x1="200" y1="200" x2="40" y2="200"
              stroke={activeSide === 3 ? '#EF4444' : '#10B981'}
              strokeWidth={activeSide === 3 ? 9 : 5}
              strokeLinecap="round"
              className="cursor-pointer transition-all"
              onClick={() => triggerSide(3, 'Sisi Bawah (Sama Panjang)')}
            />
            {/* Side 4 (Left) */}
            <line
              x1="40" y1="200" x2="40" y2="40"
              stroke={activeSide === 4 ? '#EF4444' : '#10B981'}
              strokeWidth={activeSide === 4 ? 9 : 5}
              strokeLinecap="round"
              className="cursor-pointer transition-all"
              onClick={() => triggerSide(4, 'Sisi Kiri (Sama Panjang)')}
            />

            {/* Vertices (Titik Sudut) */}
            {[
              { num: 1, cx: 40, cy: 40 },
              { num: 2, cx: 200, cy: 40 },
              { num: 3, cx: 200, cy: 200 },
              { num: 4, cx: 40, cy: 200 },
            ].map((v) => (
              <g key={v.num} className="cursor-pointer" onClick={() => triggerVertex(v.num, `Sudut ke-${v.num}`)}>
                <circle
                  cx={v.cx}
                  cy={v.cy}
                  r={activeVertex === v.num ? 14 : 9}
                  fill={activeVertex === v.num ? '#EF4444' : '#F59E0B'}
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  className="transition-all hover:scale-125"
                />
                <text
                  x={v.cx}
                  y={v.cy + 4}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="bold"
                  fill="#FFFFFF"
                >
                  {v.num}
                </text>
              </g>
            ))}
          </svg>
        );

      case 'persegi_panjang':
        return (
          <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-md">
            {/* Shape Body */}
            <rect
              x="25"
              y="60"
              width="190"
              height="120"
              fill="#DBEAFE"
              stroke="#2563EB"
              strokeWidth="4"
              rx="4"
              className="transition-colors hover:fill-blue-200"
            />
            {/* Side 1 (Top) */}
            <line
              x1="25" y1="60" x2="215" y2="60"
              stroke={activeSide === 1 ? '#EF4444' : '#3B82F6'}
              strokeWidth={activeSide === 1 ? 9 : 5}
              strokeLinecap="round"
              className="cursor-pointer transition-all"
              onClick={() => triggerSide(1, 'Sisi Panjang Atas')}
            />
            {/* Side 2 (Right) */}
            <line
              x1="215" y1="60" x2="215" y2="180"
              stroke={activeSide === 2 ? '#EF4444' : '#3B82F6'}
              strokeWidth={activeSide === 2 ? 9 : 5}
              strokeLinecap="round"
              className="cursor-pointer transition-all"
              onClick={() => triggerSide(2, 'Sisi Pendek Kanan')}
            />
            {/* Side 3 (Bottom) */}
            <line
              x1="215" y1="180" x2="25" y2="180"
              stroke={activeSide === 3 ? '#EF4444' : '#3B82F6'}
              strokeWidth={activeSide === 3 ? 9 : 5}
              strokeLinecap="round"
              className="cursor-pointer transition-all"
              onClick={() => triggerSide(3, 'Sisi Panjang Bawah')}
            />
            {/* Side 4 (Left) */}
            <line
              x1="25" y1="180" x2="25" y2="60"
              stroke={activeSide === 4 ? '#EF4444' : '#3B82F6'}
              strokeWidth={activeSide === 4 ? 9 : 5}
              strokeLinecap="round"
              className="cursor-pointer transition-all"
              onClick={() => triggerSide(4, 'Sisi Pendek Kiri')}
            />

            {/* Vertices */}
            {[
              { num: 1, cx: 25, cy: 60 },
              { num: 2, cx: 215, cy: 60 },
              { num: 3, cx: 215, cy: 180 },
              { num: 4, cx: 25, cy: 180 },
            ].map((v) => (
              <g key={v.num} className="cursor-pointer" onClick={() => triggerVertex(v.num, `Sudut ke-${v.num}`)}>
                <circle
                  cx={v.cx}
                  cy={v.cy}
                  r={activeVertex === v.num ? 14 : 9}
                  fill={activeVertex === v.num ? '#EF4444' : '#F59E0B'}
                  stroke="#FFFFFF"
                  strokeWidth="3"
                />
                <text x={v.cx} y={v.cy + 4} textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">
                  {v.num}
                </text>
              </g>
            ))}
          </svg>
        );

      case 'segitiga':
        return (
          <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-md">
            {/* Shape Body */}
            <polygon
              points="120,35 210,195 30,195"
              fill="#FEF3C7"
              stroke="#D97706"
              strokeWidth="4"
              className="transition-colors hover:fill-amber-200"
            />
            {/* Side 1 (Right slope) */}
            <line
              x1="120" y1="35" x2="210" y2="195"
              stroke={activeSide === 1 ? '#EF4444' : '#F59E0B'}
              strokeWidth={activeSide === 1 ? 9 : 5}
              strokeLinecap="round"
              className="cursor-pointer transition-all"
              onClick={() => triggerSide(1, 'Sisi Miring Kanan')}
            />
            {/* Side 2 (Bottom base) */}
            <line
              x1="210" y1="195" x2="30" y2="195"
              stroke={activeSide === 2 ? '#EF4444' : '#F59E0B'}
              strokeWidth={activeSide === 2 ? 9 : 5}
              strokeLinecap="round"
              className="cursor-pointer transition-all"
              onClick={() => triggerSide(2, 'Sisi Alas Bawah')}
            />
            {/* Side 3 (Left slope) */}
            <line
              x1="30" y1="195" x2="120" y2="35"
              stroke={activeSide === 3 ? '#EF4444' : '#F59E0B'}
              strokeWidth={activeSide === 3 ? 9 : 5}
              strokeLinecap="round"
              className="cursor-pointer transition-all"
              onClick={() => triggerSide(3, 'Sisi Miring Kiri')}
            />

            {/* Vertices */}
            {[
              { num: 1, cx: 120, cy: 35 },
              { num: 2, cx: 210, cy: 195 },
              { num: 3, cx: 30, cy: 195 },
            ].map((v) => (
              <g key={v.num} className="cursor-pointer" onClick={() => triggerVertex(v.num, `Sudut ke-${v.num}`)}>
                <circle
                  cx={v.cx}
                  cy={v.cy}
                  r={activeVertex === v.num ? 14 : 9}
                  fill={activeVertex === v.num ? '#EF4444' : '#DC2626'}
                  stroke="#FFFFFF"
                  strokeWidth="3"
                />
                <text x={v.cx} y={v.cy + 4} textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">
                  {v.num}
                </text>
              </g>
            ))}
          </svg>
        );

      case 'lingkaran':
        return (
          <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-md">
            {/* Shape Body */}
            <circle
              cx="120"
              cy="120"
              r="85"
              fill="#FFE4E6"
              stroke={activeSide === 1 ? '#EF4444' : '#E11D48'}
              strokeWidth={activeSide === 1 ? 8 : 5}
              className="cursor-pointer transition-all hover:fill-rose-200"
              onClick={() => triggerSide(1, '1 Garis Lengkung Tertutup Rapat')}
            />
            {/* Center mark */}
            <circle cx="120" cy="120" r="5" fill="#BE123C" />
            <text x="120" y="145" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#BE123C">
              Titik Pusat
            </text>
            <text x="120" y="70" textAnchor="middle" fontSize="12" fill="#E11D48" fontWeight="600">
              0 Titik Sudut
            </text>
          </svg>
        );

      case 'oval':
        return (
          <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-md">
            {/* Shape Body */}
            <ellipse
              cx="120"
              cy="120"
              rx="90"
              ry="65"
              fill="#F3E8FF"
              stroke={activeSide === 1 ? '#EF4444' : '#7E22CE'}
              strokeWidth={activeSide === 1 ? 8 : 5}
              className="cursor-pointer transition-all hover:fill-purple-200"
              onClick={() => triggerSide(1, '1 Garis Lengkung Lonjong Tertutup')}
            />
            <text x="120" y="125" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#6B21A8">
              Bentuk Lonjong (Oval)
            </text>
            <text x="120" y="150" textAnchor="middle" fontSize="11" fill="#7E22CE" fontWeight="600">
              0 Titik Sudut
            </text>
          </svg>
        );

      case 'trapesium':
        return (
          <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-md">
            {/* Shape Body */}
            <polygon
              points="65,60 175,60 215,180 25,180"
              fill="#FFEDD5"
              stroke="#EA580C"
              strokeWidth="4"
              className="transition-colors hover:fill-orange-200"
            />
            {/* Side 1 (Top parallel) */}
            <line
              x1="65" y1="60" x2="175" y2="60"
              stroke={activeSide === 1 ? '#EF4444' : '#F97316'}
              strokeWidth={activeSide === 1 ? 9 : 5}
              strokeLinecap="round"
              className="cursor-pointer transition-all"
              onClick={() => triggerSide(1, 'Sisi Atas (Sejajar dengan Bawah)')}
            />
            {/* Side 2 (Right slant) */}
            <line
              x1="175" y1="60" x2="215" y2="180"
              stroke={activeSide === 2 ? '#EF4444' : '#F97316'}
              strokeWidth={activeSide === 2 ? 9 : 5}
              strokeLinecap="round"
              className="cursor-pointer transition-all"
              onClick={() => triggerSide(2, 'Sisi Miring Kanan')}
            />
            {/* Side 3 (Bottom parallel) */}
            <line
              x1="215" y1="180" x2="25" y2="180"
              stroke={activeSide === 3 ? '#EF4444' : '#F97316'}
              strokeWidth={activeSide === 3 ? 9 : 5}
              strokeLinecap="round"
              className="cursor-pointer transition-all"
              onClick={() => triggerSide(3, 'Sisi Alas Bawah (Lebih Panjang & Sejajar)')}
            />
            {/* Side 4 (Left slant) */}
            <line
              x1="25" y1="180" x2="65" y2="60"
              stroke={activeSide === 4 ? '#EF4444' : '#F97316'}
              strokeWidth={activeSide === 4 ? 9 : 5}
              strokeLinecap="round"
              className="cursor-pointer transition-all"
              onClick={() => triggerSide(4, 'Sisi Miring Kiri')}
            />

            {/* Vertices */}
            {[
              { num: 1, cx: 65, cy: 60 },
              { num: 2, cx: 175, cy: 60 },
              { num: 3, cx: 215, cy: 180 },
              { num: 4, cx: 25, cy: 180 },
            ].map((v) => (
              <g key={v.num} className="cursor-pointer" onClick={() => triggerVertex(v.num, `Sudut ke-${v.num}`)}>
                <circle
                  cx={v.cx}
                  cy={v.cy}
                  r={activeVertex === v.num ? 14 : 9}
                  fill={activeVertex === v.num ? '#EF4444' : '#F59E0B'}
                  stroke="#FFFFFF"
                  strokeWidth="3"
                />
                <text x={v.cx} y={v.cy + 4} textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">
                  {v.num}
                </text>
              </g>
            ))}
          </svg>
        );
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${className} flex items-center justify-center p-2`}>
        {renderShape()}
      </div>

      {/* Dynamic Inspector Feedback Box */}
      {infoPopup ? (
        <div className="mt-3 px-4 py-2 bg-amber-500 text-white font-bold text-xs rounded-xl shadow animate-in fade-in zoom-in-95 duration-150">
          ✨ {infoPopup}
        </div>
      ) : (
        <p className="mt-2 text-xs text-slate-500 font-medium">
          💡 Klik sisi atau titik sudut pada gambar di atas untuk menghitung!
        </p>
      )}
    </div>
  );
};
