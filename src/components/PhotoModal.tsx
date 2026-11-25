import React, { useState } from 'react';
import { X, Volume2, Sparkles, Info } from 'lucide-react';
import { RealPhotoItem } from '../types';
import { SmartObjectImage } from './SmartObjectImage';
import { sound } from '../utils/audio';

interface PhotoModalProps {
  photo: RealPhotoItem | null;
  onClose: () => void;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({ photo, onClose }) => {
  const [showShapeOverlay, setShowShapeOverlay] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);

  if (!photo) return null;

  const handleSpeak = () => {
    sound.playClick();
    if (isSpeaking) {
      sound.stopSpeech();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      const text = `${photo.title}. Berbentuk bangun datar ${photo.shapeName}. ${photo.explanation}`;
      sound.speak(text, () => setIsSpeaking(false));
    }
  };

  const getOverlaySvg = () => {
    switch (photo.shape) {
      case 'persegi':
        return (
          <rect
            x="15%"
            y="15%"
            width="70%"
            height="70%"
            fill="rgba(16, 185, 129, 0.2)"
            stroke="#10B981"
            strokeWidth="5"
            strokeDasharray="10 6"
            rx="6"
          />
        );
      case 'persegi_panjang':
        return (
          <rect
            x="15%"
            y="25%"
            width="70%"
            height="50%"
            fill="rgba(59, 130, 246, 0.2)"
            stroke="#3B82F6"
            strokeWidth="5"
            strokeDasharray="10 6"
            rx="6"
          />
        );
      case 'segitiga':
        return (
          <polygon
            points="50%,15% 85%,80% 15%,80%"
            fill="rgba(245, 158, 11, 0.2)"
            stroke="#F59E0B"
            strokeWidth="5"
            strokeDasharray="10 6"
          />
        );
      case 'lingkaran':
        return (
          <circle
            cx="50%"
            cy="50%"
            r="38%"
            fill="rgba(244, 63, 94, 0.2)"
            stroke="#F43F5E"
            strokeWidth="5"
            strokeDasharray="10 6"
          />
        );
      case 'oval':
        return (
          <ellipse
            cx="50%"
            cy="50%"
            rx="40%"
            ry="30%"
            fill="rgba(168, 85, 247, 0.2)"
            stroke="#A855F7"
            strokeWidth="5"
            strokeDasharray="10 6"
          />
        );
      case 'trapesium':
        return (
          <polygon
            points="30%,25% 70%,25% 88%,78% 12%,78%"
            fill="rgba(249, 115, 22, 0.2)"
            stroke="#F97316"
            strokeWidth="5"
            strokeDasharray="10 6"
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-amber-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 border-b border-amber-300">
          <div className="flex items-center gap-3">
            <span className="bg-white/90 text-amber-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              FOTO ASLI BENDA NYATA
            </span>
            <h3 className="text-xl font-bold text-amber-950">{photo.title}</h3>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              sound.stopSpeech();
              onClose();
            }}
            className="p-2 text-amber-950 bg-white/80 hover:bg-white rounded-full transition-colors shadow-sm"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          {/* Main Photo Viewer Area with Shape Overlay */}
          <div className="relative w-full aspect-video md:aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-200 flex items-center justify-center">
            <SmartObjectImage
              src={photo.imageUrl}
              alt={photo.altText}
              svgFallbackType={photo.svgFallbackType}
              className="w-full h-full object-cover"
            />

            {/* Geometric Shape Outline Overlay */}
            {showShapeOverlay && (
              <svg className="absolute inset-0 z-20 w-full h-full pointer-events-none">
                {getOverlaySvg()}
              </svg>
            )}

            {/* Shape Badge Tag */}
            <div className="absolute top-4 left-4 z-30 bg-slate-900/85 text-white text-xs font-bold px-3 py-1.5 rounded-xl backdrop-blur-md border border-white/20 shadow-lg flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Bentuk: {photo.shapeName}</span>
            </div>

            {/* Toggle Overlay Button */}
            <button
              onClick={() => {
                sound.playClick();
                setShowShapeOverlay(!showShapeOverlay);
              }}
              className="absolute bottom-4 right-4 z-30 bg-white/95 hover:bg-white text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg border border-slate-200 transition-all flex items-center gap-1.5"
            >
              <span>{showShapeOverlay ? 'Sembunyikan Garis Bentuk' : 'Tampilkan Garis Bentuk'}</span>
            </button>
          </div>

          {/* Explanation Text & Voice */}
          <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-800 flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                Mengapa Benda Ini Berbentuk {photo.shapeName}?
              </span>
              <button
                onClick={handleSpeak}
                className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 transition-all ${
                  isSpeaking
                    ? 'bg-rose-500 text-white animate-pulse'
                    : 'bg-amber-500 hover:bg-amber-600 text-white'
                }`}
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>{isSpeaking ? 'Berhenti' : 'Baca Penjelasan'}</span>
              </button>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              {photo.explanation}
            </p>
          </div>

          {/* Attribution and License Footer */}
          <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3">
            <span>Sumber: <strong className="text-slate-700">{photo.sourceCredit}</strong></span>
            <span>Lisensi: <strong className="text-slate-700">{photo.license}</strong></span>
          </div>
        </div>

        {/* Footer Action */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={() => {
              sound.playClick();
              sound.stopSpeech();
              onClose();
            }}
            className="px-5 py-2 text-sm font-bold bg-amber-500 hover:bg-amber-600 text-white rounded-xl shadow transition-colors"
          >
            Tutup Tampilan
          </button>
        </div>
      </div>
    </div>
  );
};
