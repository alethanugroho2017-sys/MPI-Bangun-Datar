import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';
import { GeoMascotSvg } from './GeoMascotSvg';

interface GeoMascotProps {
  message: string;
  mood?: 'happy' | 'cheer' | 'think' | 'talk';
  autoSpeak?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const GeoMascot: React.FC<GeoMascotProps> = ({
  message,
  mood = 'happy',
  className = '',
  size = 'md',
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = () => {
    sound.playClick();
    if (isSpeaking) {
      sound.stopSpeech();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      sound.speak(message, () => setIsSpeaking(false));
    }
  };

  const avatarSizes = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24 md:w-28 md:h-28',
    lg: 'w-32 h-32 md:w-36 md:h-36'
  };

  return (
    <div className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-white/95 border-2 border-amber-300 shadow-lg shadow-amber-100/50 backdrop-blur-sm ${className}`}>
      {/* Mascot Avatar with Badge */}
      <div className="relative shrink-0 group cursor-pointer" onClick={handleSpeak} title="Klik GEO untuk mendengarkan!">
        <div className={`relative ${avatarSizes[size]} rounded-2xl overflow-hidden border-4 border-amber-400 bg-sky-100 shadow-md transform transition-transform group-hover:scale-105 animate-soft-bounce`}>
          <GeoMascotSvg className="w-full h-full" />
        </div>
        <div className="absolute -bottom-2 -right-1 bg-amber-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow border-2 border-white flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          <span>GEO</span>
        </div>
      </div>

      {/* Speech Bubble */}
      <div className="flex-1 text-center sm:text-left">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            {mood === 'cheer' ? '🎉 GEO Sangat Bangga!' : mood === 'think' ? '💡 Petunjuk GEO' : '🗣️ Kata GEO Sang Penjelajah'}
          </span>
          <button
            onClick={handleSpeak}
            className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border transition-all ${
              isSpeaking
                ? 'bg-rose-500 text-white border-rose-600 animate-pulse'
                : 'bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200'
            }`}
            title="Dengarkan suara narasi GEO"
          >
            {isSpeaking ? (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span>Berhenti</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5" />
                <span>Dengarkan Suara</span>
              </>
            )}
          </button>
        </div>
        <p className="text-slate-800 text-base md:text-lg font-medium leading-relaxed">
          "{message}"
        </p>
      </div>
    </div>
  );
};
