import React, { useState } from 'react';
import {
  Gamepad2,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Trophy,
  Star
} from 'lucide-react';
import { ActivePage, ShapeType } from '../../types';
import { GAME1_QUESTIONS } from '../../data/gamesData';
import { RealisticItemSvg } from '../RealisticItemSvg';
import { GeoMascot } from '../GeoMascot';
import { sound } from '../../utils/audio';

interface Game1Props {
  onNavigate: (page: ActivePage) => void;
}

export const Game1TebakBentuk: React.FC<Game1Props> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedShape, setSelectedShape] = useState<ShapeType | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = GAME1_QUESTIONS[currentIndex];

  const handleSelectOption = (shape: ShapeType) => {
    if (isAnswered) return;
    sound.playClick();
    setSelectedShape(shape);
    setIsAnswered(true);

    const correct = shape === currentQ.correctShape;
    if (correct) {
      sound.playCorrect();
      setScore((prev) => prev + 10);
      setStreak((prev) => prev + 1);
    } else {
      sound.playWrong();
      setStreak(0);
    }
  };

  const handleNext = () => {
    sound.playClick();
    if (currentIndex < GAME1_QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedShape(null);
      setIsAnswered(false);
    } else {
      sound.playFanfare();
      setIsCompleted(true);
      // Save highscore
      try {
        const prevBest = parseInt(localStorage.getItem('geo_game1_score') || '0', 10);
        if (score > prevBest) {
          localStorage.setItem('geo_game1_score', score.toString());
        }
      } catch {
        // ignore
      }
    }
  };

  const handleRestart = () => {
    sound.playClick();
    setCurrentIndex(0);
    setSelectedShape(null);
    setIsAnswered(false);
    setScore(0);
    setStreak(0);
    setIsCompleted(false);
  };

  const isCurrentCorrect = selectedShape === currentQ?.correctShape;

  if (isCompleted) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 text-center space-y-6">
        <div className="w-24 h-24 mx-auto rounded-3xl bg-amber-400 text-amber-950 flex items-center justify-center shadow-xl animate-soft-bounce">
          <Trophy className="w-14 h-14" />
        </div>

        <h2 className="text-3xl font-extrabold text-slate-900">
          Selamat! Kamu Menyelesaikan Game 1!
        </h2>
        <p className="text-base text-slate-600">
          Kamu berhasil menebak semua benda nyata dengan sangat hebat!
        </p>

        <div className="p-6 bg-white rounded-3xl border-2 border-amber-300 shadow-md inline-block min-w-[280px]">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Skor Akhir Tebak Bentuk</span>
          <span className="text-5xl font-extrabold text-amber-600 block my-2">{score}</span>
          <span className="text-xs font-semibold text-emerald-600">
            {score === 60 ? '🌟 Nilai Sempurna 100%' : '👍 Usaha Hebat!'}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <button
            onClick={handleRestart}
            className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors border border-slate-300"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Main Ulang Game 1</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onNavigate('game2');
            }}
            className="flex items-center gap-2 px-7 py-3 bg-amber-500 hover:bg-amber-600 text-white font-extrabold rounded-2xl shadow-md transition-colors"
          >
            <span>Lanjut ke Game 2: Pasangkan Benda</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <GeoMascot
        message={
          isAnswered
            ? isCurrentCorrect
              ? 'Tepat sekali! Hebat! Kamu mengenali bangun datar benda ini!'
              : `Hampir benar! Benda ini memiliki bentuk ${currentQ.options.find(o => o.shape === currentQ.correctShape)?.label}. Perhatikan petunjuknya ya!`
            : `Tantangan ${currentIndex + 1}: Benda apakah ini dan apa bentuk bangun datarnya? Pilih salah satu jawaban di bawah ya!`
        }
        mood={isAnswered ? (isCurrentCorrect ? 'cheer' : 'think') : 'happy'}
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-amber-200 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">GAME 01 · TEBAK BENTUK</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-950 flex items-center gap-2">
            <Gamepad2 className="w-7 h-7 text-amber-500" />
            <span>Tebak Bentuk Benda Nyata</span>
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs font-bold px-3 py-1 bg-amber-100 text-amber-900 rounded-full border border-amber-300">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Skor: {score}</span>
          </div>
          <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-300">
            Tantangan {currentIndex + 1} / {GAME1_QUESTIONS.length}
          </span>
        </div>
      </div>

      {/* Challenge Card */}
      <div className="bg-white rounded-3xl p-6 border-2 border-amber-300 shadow-md space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Real Photo Viewer */}
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-200 flex items-center justify-center shadow-inner">
            <img
              src={currentQ.imageUrl}
              alt={currentQ.title}
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
              <RealisticItemSvg type={currentQ.svgFallbackType} className="w-full h-full" />
            </div>

            <div className="absolute top-3 left-3 bg-slate-900/80 text-white text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-xs">
              {currentQ.title}
            </div>
          </div>

          {/* Question & 3 Choices */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">PERTANYAAN:</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
                Benda ini berbentuk bangun datar apa ya?
              </h3>
            </div>

            {/* Hint Box */}
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span><strong>Petunjuk:</strong> {currentQ.hint}</span>
            </div>

            {/* 3 Large Choice Buttons */}
            <div className="space-y-2 pt-2">
              {currentQ.options.map((opt, oIdx) => {
                const isSelected = selectedShape === opt.shape;
                const isThisCorrect = opt.shape === currentQ.correctShape;

                let btnStyle = 'bg-slate-50 hover:bg-amber-50 text-slate-800 border-slate-200';
                if (isAnswered) {
                  if (isThisCorrect) {
                    btnStyle = 'bg-emerald-500 text-white border-emerald-600 shadow-sm';
                  } else if (isSelected && !isThisCorrect) {
                    btnStyle = 'bg-rose-500 text-white border-rose-600';
                  } else {
                    btnStyle = 'bg-slate-50 opacity-40 border-slate-200';
                  }
                }

                return (
                  <button
                    key={opt.shape}
                    onClick={() => handleSelectOption(opt.shape)}
                    disabled={isAnswered}
                    className={`w-full p-3.5 rounded-2xl text-sm sm:text-base font-bold border-2 transition-all flex items-center justify-between text-left ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center text-xs font-extrabold">
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span>{opt.label}</span>
                    </div>

                    {isAnswered && isThisCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    )}
                    {isAnswered && isSelected && !isThisCorrect && (
                      <XCircle className="w-5 h-5 text-white" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Fun Fact / Feedback After Answer */}
        {isAnswered && (
          <div className="p-4 rounded-2xl bg-amber-50/80 border-2 border-amber-200 space-y-2 animate-in fade-in">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Fakta Menarik Geometri:
              </span>
              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow transition-colors"
              >
                <span>{currentIndex < GAME1_QUESTIONS.length - 1 ? 'Lanjut Tantangan' : 'Lihat Hasil Game'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentQ.funFact}
            </p>
          </div>
        )}
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            sound.playClick();
            onNavigate('menu');
          }}
          className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Menu</span>
        </button>

        <button
          onClick={handleRestart}
          className="flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Ulangi Game 1</span>
        </button>
      </div>
    </div>
  );
};
