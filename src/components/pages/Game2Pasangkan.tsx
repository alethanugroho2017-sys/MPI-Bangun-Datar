import React, { useState } from 'react';
import {
  Puzzle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Trophy,
  Star
} from 'lucide-react';
import { ActivePage, ShapeType, Game2Pair } from '../../types';
import { GAME2_PAIRS } from '../../data/gamesData';
import { SmartObjectImage } from '../SmartObjectImage';
import { GeoMascot } from '../GeoMascot';
import { sound } from '../../utils/audio';

interface Game2Props {
  onNavigate: (page: ActivePage) => void;
}

export const Game2Pasangkan: React.FC<Game2Props> = ({ onNavigate }) => {
  const [selectedBendaId, setSelectedBendaId] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, ShapeType>>({});
  const [wrongAttempt, setWrongAttempt] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  // 6 Target shapes
  const targetShapes: { shape: ShapeType; name: string; color: string }[] = [
    { shape: 'persegi', name: 'Persegi', color: 'bg-emerald-500 text-white' },
    { shape: 'persegi_panjang', name: 'Persegi Panjang', color: 'bg-blue-500 text-white' },
    { shape: 'segitiga', name: 'Segitiga', color: 'bg-amber-500 text-white' },
    { shape: 'lingkaran', name: 'Lingkaran', color: 'bg-rose-500 text-white' },
    { shape: 'oval', name: 'Oval (Lonjong)', color: 'bg-purple-500 text-white' },
    { shape: 'trapesium', name: 'Trapesium', color: 'bg-orange-500 text-white' },
  ];

  const handleSelectBenda = (bendaId: string) => {
    // If already matched, skip
    if (matchedPairs[bendaId]) return;
    sound.playClick();
    setSelectedBendaId(bendaId);
    setWrongAttempt(null);
  };

  const handleSelectTargetShape = (targetShape: ShapeType) => {
    if (!selectedBendaId) return;

    const benda = GAME2_PAIRS.find((p) => p.id === selectedBendaId);
    if (!benda) return;

    if (benda.shapeType === targetShape) {
      sound.playCorrect();
      setMatchedPairs((prev) => ({ ...prev, [selectedBendaId]: targetShape }));
      setSelectedBendaId(null);
      setWrongAttempt(null);
      setScore((prev) => prev + 10);
    } else {
      sound.playWrong();
      setWrongAttempt(`Ups! ${benda.bendaName} bukan berbentuk ${targetShape}. Coba lagi ya!`);
      setTimeout(() => setWrongAttempt(null), 2500);
    }
  };

  const handleReset = () => {
    sound.playClick();
    setSelectedBendaId(null);
    setMatchedPairs({});
    setWrongAttempt(null);
    setScore(0);
  };

  const allMatched = Object.keys(matchedPairs).length === GAME2_PAIRS.length;

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <GeoMascot
        message={
          allMatched
            ? 'Hebat sekali! Semua 6 pasangan benda nyata dan bangun datarnya cocok sempurna!'
            : selectedBendaId
            ? 'Sekarang, klik kotak nama bangun datar di sebelah kanan yang cocok dengan fotomu!'
            : 'Klik salah satu foto benda nyata di kolom kiri, lalu pasangkan dengan nama bangun datarnya di kolom kanan!'
        }
        mood={allMatched ? 'cheer' : 'happy'}
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-amber-200 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">GAME 02 · PASANGKAN BENDA</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-950 flex items-center gap-2">
            <Puzzle className="w-7 h-7 text-orange-500" />
            <span>Mencocokkan Benda & Bangun Datar</span>
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs font-bold px-3 py-1 bg-amber-100 text-amber-900 rounded-full border border-amber-300">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Skor: {score} / 60</span>
          </div>
          <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300">
            Terpasang: {Object.keys(matchedPairs).length} / 6
          </span>
        </div>
      </div>

      {wrongAttempt && (
        <div className="p-3 bg-rose-100 border border-rose-300 text-rose-900 text-xs sm:text-sm font-bold rounded-2xl text-center animate-shake">
          {wrongAttempt}
        </div>
      )}

      {/* Matching Board Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-3xl p-6 border-2 border-amber-300 shadow-md">
        {/* Left Column: 6 Real Object Cards */}
        <div className="space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              1. Pilih Benda Nyata (Klik Foto):
            </span>
            <span className="text-[11px] text-slate-500">Kolom Foto Asli</span>
          </div>

          <div className="space-y-2.5">
            {GAME2_PAIRS.map((p) => {
              const isMatched = !!matchedPairs[p.id];
              const isSelected = selectedBendaId === p.id;

              return (
                <div
                  key={p.id}
                  onClick={() => handleSelectBenda(p.id)}
                  className={`p-3 rounded-2xl border-2 transition-all flex items-center justify-between cursor-pointer ${
                    isMatched
                      ? 'bg-emerald-50 border-emerald-300 opacity-80 cursor-default'
                      : isSelected
                      ? 'bg-amber-100 border-amber-500 shadow-md scale-102 ring-2 ring-amber-300'
                      : 'bg-slate-50 hover:bg-amber-50/70 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-200 shrink-0 border border-slate-300">
                      <SmartObjectImage
                        src={p.imageUrl}
                        alt={p.bendaName}
                        svgFallbackType={p.svgFallbackType}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{p.bendaName}</h4>
                      <span className="text-[11px] text-slate-500">
                        {isMatched ? `✓ Cocok dengan ${p.shapeName}` : 'Klik untuk memilih'}
                      </span>
                    </div>
                  </div>

                  {isMatched ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  ) : isSelected ? (
                    <span className="text-xs font-bold text-amber-700 bg-amber-200 px-2.5 py-1 rounded-full">
                      Dipilih
                    </span>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: 6 Target Shape Slots */}
        <div className="space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              2. Pasangkan ke Bentuk:
            </span>
            <span className="text-[11px] text-slate-500">Target Bangun Datar</span>
          </div>

          <div className="space-y-2.5">
            {targetShapes.map((t) => {
              // Check if any item matched this shape
              const matchedItem = GAME2_PAIRS.find(
                (p) => matchedPairs[p.id] === t.shape
              );

              return (
                <button
                  key={t.shape}
                  onClick={() => handleSelectTargetShape(t.shape)}
                  disabled={!!matchedItem}
                  className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center justify-between text-left ${
                    matchedItem
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-900 cursor-default'
                      : selectedBendaId
                      ? 'bg-white hover:bg-amber-50 hover:border-amber-400 border-slate-300 shadow-xs'
                      : 'bg-white border-slate-200 text-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-xl ${t.color} flex items-center justify-center text-sm font-bold shadow-xs`}>
                      {t.shape === 'persegi' && '■'}
                      {t.shape === 'persegi_panjang' && '▬'}
                      {t.shape === 'segitiga' && '▲'}
                      {t.shape === 'lingkaran' && '●'}
                      {t.shape === 'oval' && '⬭'}
                      {t.shape === 'trapesium' && '⏢'}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                        {t.name}
                      </h4>
                      {matchedItem ? (
                        <span className="text-xs font-semibold text-emerald-700">
                          ✓ Berpasangan dengan: {matchedItem.bendaName}
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-400">
                          {selectedBendaId ? 'Klik untuk memasangkan' : 'Pilih benda di kiri terlebih dahulu'}
                        </span>
                      )}
                    </div>
                  </div>

                  {matchedItem && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Completion Banner */}
      {allMatched && (
        <div className="p-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl text-white shadow-lg text-center space-y-3 animate-in fade-in">
          <Trophy className="w-12 h-12 mx-auto text-amber-300 animate-soft-bounce" />
          <h3 className="text-2xl font-extrabold">Hore! Semua Pasangan Berhasil Dicocokkan!</h3>
          <p className="text-sm text-emerald-100 max-w-lg mx-auto">
            Kamu sungguh penjelajah geometri yang teliti! Kamu berhasil mengenali ubin persegi, buku persegi panjang, penggaris segitiga, jam lingkaran, telur oval, dan kap lampu trapesium!
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white font-bold text-xs rounded-xl transition-colors"
            >
              Mainkan Lagi
            </button>
            <button
              onClick={() => {
                sound.playClick();
                onNavigate('game3');
              }}
              className="flex items-center gap-2 px-6 py-2.5 bg-amber-400 hover:bg-amber-500 text-amber-950 font-extrabold text-sm rounded-xl shadow transition-colors"
            >
              <span>Lanjut ke Game 3: Kelompokkan Benda</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Footer Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            sound.playClick();
            onNavigate('game1');
          }}
          className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Game 1</span>
        </button>

        <button
          onClick={handleReset}
          className="flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Pasangan</span>
        </button>
      </div>
    </div>
  );
};
