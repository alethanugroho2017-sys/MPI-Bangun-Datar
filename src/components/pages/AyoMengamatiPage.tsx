import React, { useState } from 'react';
import {
  Eye,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  ZoomIn
} from 'lucide-react';
import { ActivePage, ShapeType } from '../../types';
import { OBSERVATION_ITEMS } from '../../data/observationData';
import { RealisticItemSvg } from '../RealisticItemSvg';
import { GeoMascot } from '../GeoMascot';
import { sound } from '../../utils/audio';

interface AyoMengamatiPageProps {
  onNavigate: (page: ActivePage) => void;
}

export const AyoMengamatiPage: React.FC<AyoMengamatiPageProps> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedShape, setSelectedShape] = useState<ShapeType | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const currentItem = OBSERVATION_ITEMS[currentIndex];

  const shapeOptions: { id: ShapeType; name: string }[] = [
    { id: 'persegi', name: 'Persegi' },
    { id: 'persegi_panjang', name: 'Persegi Panjang' },
    { id: 'segitiga', name: 'Segitiga' },
    { id: 'lingkaran', name: 'Lingkaran' },
    { id: 'oval', name: 'Oval (Lonjong)' },
    { id: 'trapesium', name: 'Trapesium' },
  ];

  const handleSelectShape = (shape: ShapeType) => {
    if (isAnswered) return;
    sound.playClick();
    setSelectedShape(shape);
  };

  const handleCheckAnswer = () => {
    if (!selectedShape) return;
    setIsAnswered(true);
    setShowExplanation(true);

    if (selectedShape === currentItem.correctShape) {
      sound.playCorrect();
      setScore((prev) => prev + 10);
    } else {
      sound.playWrong();
    }
  };

  const handleRevealAnswer = () => {
    sound.playClick();
    setSelectedShape(currentItem.correctShape);
    setIsAnswered(true);
    setShowExplanation(true);
  };

  const handleNextItem = () => {
    sound.playClick();
    if (currentIndex < OBSERVATION_ITEMS.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedShape(null);
      setIsAnswered(false);
      setShowExplanation(false);
    } else {
      onNavigate('video');
    }
  };

  const handleRestart = () => {
    sound.playClick();
    setCurrentIndex(0);
    setSelectedShape(null);
    setIsAnswered(false);
    setShowExplanation(false);
    setScore(0);
  };

  const isCorrect = selectedShape === currentItem.correctShape;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <GeoMascot
        message={
          isAnswered
            ? isCorrect
              ? 'Luar biasa! Pengamatanmu sangat teliti! Bentuknya persis seperti yang kamu tebak!'
              : `Bagus sudah mencoba! Benda ini sebenarnya berbentuk ${currentItem.correctShapeName}. Baca penjelasannya ya!`
            : `Amatilah benda nomor ${currentIndex + 1} ini baik-baik. Menurutmu, bentuk bangun datar apa yang dimilikinya?`
        }
        mood={isAnswered ? (isCorrect ? 'cheer' : 'think') : 'talk'}
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-amber-200 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">MODUL 04 · AYO MENGAMATI</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-950 flex items-center gap-2">
            <span>Tantangan Pengamatan Benda Nyata</span>
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-900 rounded-full border border-amber-300">
            Benda {currentIndex + 1} dari {OBSERVATION_ITEMS.length}
          </span>
          <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full border border-emerald-300">
            Skor: {score}
          </span>
        </div>
      </div>

      {/* Observation Item Card */}
      <div className="bg-white rounded-3xl p-6 border-2 border-amber-300 shadow-sm space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Real Photo Box with Fallback */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-200 shadow-inner flex items-center justify-center">
            <img
              src={currentItem.imageUrl}
              alt={currentItem.bendaName}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="hidden absolute inset-0 w-full h-full items-center justify-center p-4 bg-amber-50">
              <RealisticItemSvg type={currentItem.svgFallbackType} className="w-full h-full" />
            </div>

            <div className="absolute top-3 left-3 bg-slate-900/80 text-white text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-xs">
              Foto Asli: {currentItem.bendaName}
            </div>
          </div>

          {/* Prompt & Clue */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">OBJEK PENGAMATAN</span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-0.5">
                {currentItem.bendaName}
              </h3>
              <p className="text-xs text-slate-500 mt-1">Sumber: {currentItem.sourceCredit}</p>
            </div>

            <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 space-y-1">
              <span className="text-xs font-bold text-amber-900 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Petunjuk GEO:
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {currentItem.clue}
              </p>
            </div>

            {/* Shape Selection Choices */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Pilih Bentuk Bangun Datar:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {shapeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectShape(opt.id)}
                    disabled={isAnswered}
                    className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold border-2 transition-all flex items-center justify-center ${
                      selectedShape === opt.id
                        ? isAnswered
                          ? opt.id === currentItem.correctShape
                            ? 'bg-emerald-500 text-white border-emerald-600'
                            : 'bg-rose-500 text-white border-rose-600'
                          : 'bg-amber-500 text-white border-amber-600'
                        : isAnswered && opt.id === currentItem.correctShape
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-400'
                        : 'bg-slate-50 hover:bg-amber-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    <span>{opt.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons: Cek Jawaban & Lihat Jawaban */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
          <button
            onClick={handleRevealAnswer}
            disabled={isAnswered}
            className="text-xs font-bold text-slate-500 hover:text-slate-800 underline decoration-slate-300 disabled:opacity-50"
          >
            LIHAT JAWABAN LANGSUNG
          </button>

          <div className="flex items-center gap-2">
            {!isAnswered ? (
              <button
                onClick={handleCheckAnswer}
                disabled={!selectedShape}
                className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 disabled:bg-slate-200 text-white font-bold text-sm rounded-xl shadow transition-colors disabled:cursor-not-allowed"
              >
                Cek Jawaban Saya
              </button>
            ) : (
              <button
                onClick={handleNextItem}
                className="flex items-center gap-1.5 px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-xl shadow transition-colors"
              >
                <span>{currentIndex < OBSERVATION_ITEMS.length - 1 ? 'Benda Berikutnya' : 'Selesai & Ke Video'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Feedback & Explanation Card */}
        {showExplanation && (
          <div className={`p-4 rounded-2xl border-2 animate-in fade-in zoom-in-95 duration-200 ${
            isCorrect ? 'bg-emerald-50/80 border-emerald-300' : 'bg-amber-50/80 border-amber-300'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="font-extrabold text-emerald-900 text-sm">Jawabanmu Tepat Sekali!</span>
                </>
              ) : (
                <>
                  <HelpCircle className="w-5 h-5 text-amber-600" />
                  <span className="font-extrabold text-amber-900 text-sm">Mari Kita Pelajari Bersama!</span>
                </>
              )}
            </div>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              <strong>{currentItem.bendaName}</strong> berbentuk <strong>{currentItem.correctShapeName}</strong>. {currentItem.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            sound.playClick();
            onNavigate('belajar');
          }}
          className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Ayo Belajar</span>
        </button>

        <button
          onClick={handleRestart}
          className="flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Ulangi Pengamatan dari Awal</span>
        </button>
      </div>
    </div>
  );
};
