import React, { useState } from 'react';
import {
  Boxes,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Trophy,
  Star,
  Check
} from 'lucide-react';
import { ActivePage, ShapeType, Game3Object } from '../../types';
import { GAME3_OBJECTS } from '../../data/gamesData';
import { SmartObjectImage } from '../SmartObjectImage';
import { GeoMascot } from '../GeoMascot';
import { sound } from '../../utils/audio';

interface Game3Props {
  onNavigate: (page: ActivePage) => void;
}

export const Game3Kelompokkan: React.FC<Game3Props> = ({ onNavigate }) => {
  const [selectedObjectId, setSelectedObjectId] = useState<string | null>(null);
  const [sortedItems, setSortedItems] = useState<Record<string, ShapeType>>({});
  const [feedback, setFeedback] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const categories: { shape: ShapeType; name: string; color: string; border: string; bg: string }[] = [
    { shape: 'persegi', name: 'Persegi', color: 'text-emerald-700', border: 'border-emerald-300', bg: 'bg-emerald-50' },
    { shape: 'persegi_panjang', name: 'Persegi Panjang', color: 'text-blue-700', border: 'border-blue-300', bg: 'bg-blue-50' },
    { shape: 'segitiga', name: 'Segitiga', color: 'text-amber-700', border: 'border-amber-300', bg: 'bg-amber-50' },
    { shape: 'lingkaran', name: 'Lingkaran', color: 'text-rose-700', border: 'border-rose-300', bg: 'bg-rose-50' },
    { shape: 'oval', name: 'Oval (Lonjong)', color: 'text-purple-700', border: 'border-purple-300', bg: 'bg-purple-50' },
    { shape: 'trapesium', name: 'Trapesium', color: 'text-orange-700', border: 'border-orange-300', bg: 'bg-orange-50' },
  ];

  const handleSelectObject = (objId: string) => {
    if (sortedItems[objId]) return;
    sound.playClick();
    setSelectedObjectId(objId);
    setFeedback(null);
  };

  const handleSelectBasket = (targetCategory: ShapeType) => {
    if (!selectedObjectId) return;

    const obj = GAME3_OBJECTS.find((o) => o.id === selectedObjectId);
    if (!obj) return;

    if (obj.shapeType === targetCategory) {
      sound.playCorrect();
      setSortedItems((prev) => ({ ...prev, [selectedObjectId]: targetCategory }));
      setSelectedObjectId(null);
      setScore((prev) => prev + 10);
      setFeedback(`Bagus sekali! ${obj.name} berhasil masuk ke keranjang ${obj.shapeName}!`);
    } else {
      sound.playWrong();
      setFeedback(`Ups, ${obj.name} bukan berbentuk ${targetCategory}. Coba amati sisinya lagi!`);
    }
  };

  const handleReset = () => {
    sound.playClick();
    setSelectedObjectId(null);
    setSortedItems({});
    setFeedback(null);
    setScore(0);
  };

  const allSorted = Object.keys(sortedItems).length === GAME3_OBJECTS.length;
  const unsortedObjects = GAME3_OBJECTS.filter((o) => !sortedItems[o.id]);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <GeoMascot
        message={
          allSorted
            ? 'Luar biasa! 12 benda nyata telah kamu kelompokkan ke dalam 6 keranjang bangun datar dengan sempurna!'
            : selectedObjectId
            ? 'Sekarang klik keranjang bangun datar yang tepat di bawah ini untuk memasukkan benda!'
            : 'Pilih salah satu benda nyata yang belum dikelompokkan di rak atas, lalu masukkan ke keranjang bentuk yang sesuai!'
        }
        mood={allSorted ? 'cheer' : 'happy'}
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-amber-200 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">GAME 03 · KELOMPOKKAN BENDA</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-950 flex items-center gap-2">
            <Boxes className="w-7 h-7 text-red-500" />
            <span>Sortir 12 Objek Nyata ke Keranjang Geometri</span>
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs font-bold px-3 py-1 bg-amber-100 text-amber-900 rounded-full border border-amber-300">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Skor: {score} / 120</span>
          </div>
          <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300">
            Tersortir: {Object.keys(sortedItems).length} / 12
          </span>
        </div>
      </div>

      {feedback && (
        <div className="p-3 bg-amber-50 border border-amber-300 text-amber-950 text-xs sm:text-sm font-bold rounded-2xl text-center">
          {feedback}
        </div>
      )}

      {/* Unsorted Items Shelf */}
      <div className="bg-white rounded-3xl p-5 border-2 border-amber-300 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Rak Benda Nyata (Klik Benda untuk Mengelompokkan):
          </span>
          <span className="text-xs font-bold text-slate-500">
            Sisa: {unsortedObjects.length} Benda
          </span>
        </div>

        {unsortedObjects.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {unsortedObjects.map((obj) => {
              const isSelected = selectedObjectId === obj.id;
              return (
                <div
                  key={obj.id}
                  onClick={() => handleSelectObject(obj.id)}
                  className={`p-2.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col items-center text-center ${
                    isSelected
                      ? 'bg-amber-100 border-amber-500 shadow-md scale-105 ring-2 ring-amber-300'
                      : 'bg-slate-50 hover:bg-amber-50/70 border-slate-200'
                  }`}
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-200 mb-2 border border-slate-300">
                    <SmartObjectImage
                      src={obj.imageUrl}
                      alt={obj.name}
                      svgFallbackType={obj.svgFallbackType}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="font-bold text-xs text-slate-900 truncate w-full">{obj.name}</h5>
                  <span className="text-[10px] text-amber-700 font-semibold mt-0.5">
                    {isSelected ? 'Dipilih' : 'Klik'}
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-4 text-center text-emerald-700 font-bold text-sm bg-emerald-50 rounded-2xl border border-emerald-200">
            🎉 Semua benda sudah masuk ke dalam keranjang bentuknya masing-masing!
          </div>
        )}
      </div>

      {/* 6 Shape Category Baskets */}
      <div className="space-y-3">
        <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
          Keranjang 6 Bangun Datar (Klik Keranjang Tujuan):
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => {
            // Find items that belong to this basket and are already sorted
            const itemsInThisBasket = GAME3_OBJECTS.filter(
              (o) => sortedItems[o.id] === cat.shape
            );

            return (
              <div
                key={cat.shape}
                onClick={() => handleSelectBasket(cat.shape)}
                className={`p-5 rounded-3xl border-2 ${cat.border} ${cat.bg} transition-all cursor-pointer hover:shadow-md flex flex-col justify-between min-h-[160px] ${
                  selectedObjectId ? 'hover:scale-102 ring-2 ring-amber-300' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                      Keranjang
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white shadow-xs text-slate-700">
                      {itemsInThisBasket.length} Benda
                    </span>
                  </div>

                  <h4 className={`text-lg font-extrabold ${cat.color} flex items-center gap-1.5`}>
                    <span>{cat.name}</span>
                  </h4>
                </div>

                {/* Display objects placed in this basket */}
                <div className="mt-3 pt-3 border-t border-slate-200/60 flex flex-wrap gap-2">
                  {itemsInThisBasket.length > 0 ? (
                    itemsInThisBasket.map((item) => (
                      <span
                        key={item.id}
                        className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 bg-white rounded-lg shadow-xs text-slate-800 border border-slate-200"
                      >
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>{item.name}</span>
                      </span>
                    ))
                  ) : (
                    <span className="text-[11px] text-slate-400 italic">
                      Keranjang masih kosong...
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Completion Banner */}
      {allSorted && (
        <div className="p-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl text-white shadow-xl text-center space-y-3 animate-in fade-in">
          <Trophy className="w-14 h-14 mx-auto text-amber-300 animate-soft-bounce" />
          <h3 className="text-2xl font-extrabold">Hebat! Kamu Juara Mengelompokkan Benda!</h3>
          <p className="text-sm text-purple-100 max-w-lg mx-auto">
            Semua benda nyata sudah berada di keranjang bangun datar yang tepat. Sekarang kamu siap menguji kemampuanmu di Kuis Evaluasi 10 Soal!
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white font-bold text-xs rounded-xl transition-colors"
            >
              Ulangi Game 3
            </button>
            <button
              onClick={() => {
                sound.playClick();
                onNavigate('kuis');
              }}
              className="flex items-center gap-2 px-7 py-3 bg-amber-400 hover:bg-amber-500 text-amber-950 font-extrabold text-sm rounded-xl shadow transition-colors"
            >
              <span>Ayo Mulai Kuis Evaluasi!</span>
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
            onNavigate('game2');
          }}
          className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Game 2</span>
        </button>

        <button
          onClick={handleReset}
          className="flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Pengelompokan</span>
        </button>
      </div>
    </div>
  );
};
