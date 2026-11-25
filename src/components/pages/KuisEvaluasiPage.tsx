import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  HelpCircle,
  Lock,
  Camera
} from 'lucide-react';
import { ActivePage } from '../../types';
import { QUIZ_QUESTIONS } from '../../data/quizData';
import { SmartObjectImage } from '../SmartObjectImage';
import { GeoMascot } from '../GeoMascot';
import { sound } from '../../utils/audio';

interface KuisEvaluasiProps {
  onNavigate: (page: ActivePage) => void;
  onQuizComplete: (result: {
    score: number;
    correctCount: number;
    wrongCount: number;
    predicate: string;
    message: string;
  }) => void;
}

export const KuisEvaluasiPage: React.FC<KuisEvaluasiProps> = ({
  onNavigate,
  onQuizComplete
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [correctCount, setCorrectCount] = useState(0);

  const currentQ = QUIZ_QUESTIONS[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (isLocked) return;
    sound.playClick();
    setSelectedOption(idx);
  };

  const handleLockAnswer = () => {
    if (selectedOption === null || isLocked) return;

    setIsLocked(true);
    const isCorrect = selectedOption === currentQ.correctIndex;

    setUserAnswers((prev) => ({ ...prev, [currentQ.id]: selectedOption }));

    if (isCorrect) {
      sound.playCorrect();
      setCorrectCount((prev) => prev + 1);
    } else {
      sound.playWrong();
    }
  };

  const handleNextQuestion = () => {
    sound.playClick();
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsLocked(false);
    } else {
      // Calculate final score
      const finalCorrect = selectedOption === currentQ.correctIndex ? correctCount + 1 : correctCount;
      // Note: if user locked it already, correctCount is already incremented.
      const totalCorrect = isLocked
        ? correctCount
        : selectedOption === currentQ.correctIndex
        ? correctCount + 1
        : correctCount;

      const finalScore = Math.round((totalCorrect / QUIZ_QUESTIONS.length) * 100);
      const wrongCount = QUIZ_QUESTIONS.length - totalCorrect;

      let predicate = 'Perlu Latihan';
      let message = 'Tidak apa-apa, baca materi dan coba lagi. Kamu pasti bisa!';

      if (finalScore >= 90) {
        predicate = 'Sangat Baik';
        message = 'Luar biasa, kamu penjelajah bangun datar hebat!';
      } else if (finalScore >= 70) {
        predicate = 'Baik';
        message = 'Bagus sekali, terus pertahankan semangatmu!';
      } else if (finalScore >= 50) {
        predicate = 'Cukup';
        message = 'Usaha yang baik, ayo pelajari lagi bagian yang belum dikuasai.';
      }

      // Save to localStorage
      try {
        localStorage.setItem('geo_quiz_score', finalScore.toString());
        localStorage.setItem('geo_quiz_correct', totalCorrect.toString());
        localStorage.setItem('geo_quiz_predicate', predicate);
        localStorage.setItem('geo_quiz_message', message);
      } catch {
        // ignore
      }

      sound.playFanfare();
      onQuizComplete({
        score: finalScore,
        correctCount: totalCorrect,
        wrongCount,
        predicate,
        message,
      });
      onNavigate('hasil');
    }
  };

  const isCurrentCorrect = selectedOption === currentQ.correctIndex;
  const progressPercent = ((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <GeoMascot
        message={
          isLocked
            ? isCurrentCorrect
              ? 'Jawabanmu benar! Luar biasa cerdas!'
              : 'Kurang tepat, tapi tidak apa-apa! Baca penjelasannya untuk belajar ya!'
            : `Soal nomor ${currentIndex + 1}: Baca pertanyaan dengan teliti, pilih jawaban yang paling tepat, lalu klik Kunci Jawaban!`
        }
        mood={isLocked ? (isCurrentCorrect ? 'cheer' : 'think') : 'talk'}
      />

      {/* Header with Progress Bar */}
      <div className="space-y-2 border-b border-amber-200 pb-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">MODUL 09 · KUIS EVALUASI</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-950 flex items-center gap-2">
              <Award className="w-7 h-7 text-purple-600" />
              <span>Kuis Geometri (10 Soal Pilihan Ganda)</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold px-3 py-1 bg-purple-100 text-purple-900 rounded-full border border-purple-300">
              Soal {currentIndex + 1} dari {QUIZ_QUESTIONS.length}
            </span>
            <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300">
              Benar: {correctCount}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden shadow-inner">
          <div
            className="bg-gradient-to-r from-purple-500 to-indigo-600 h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-amber-300 shadow-md space-y-6">
        {/* Question Text */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 leading-snug">
          {currentQ.question}
        </h3>

        {/* Real Photo / Illustration Reference if available */}
        {currentQ.photoUrl && (
          <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-200 shrink-0 border border-slate-300">
              <SmartObjectImage
                src={currentQ.photoUrl}
                alt="Foto rujukan soal"
                svgFallbackType={currentQ.svgFallbackType || 'ubin'}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-800 uppercase flex items-center gap-1">
                <Camera className="w-3.5 h-3.5 text-amber-600" />
                Foto Benda Rujukan Soal
              </span>
              <p className="text-xs text-slate-600 mt-0.5">
                Amati bentuk pada foto ini untuk membantumu menemukan jawaban yang benar!
              </p>
            </div>
          </div>
        )}

        {/* 3 Options */}
        <div className="space-y-3">
          {currentQ.options.map((opt, oIdx) => {
            const isSelected = selectedOption === oIdx;
            const isThisCorrect = oIdx === currentQ.correctIndex;

            let btnStyle = 'bg-slate-50 hover:bg-amber-50/80 border-slate-200 text-slate-800';
            if (isLocked) {
              if (isThisCorrect) {
                btnStyle = 'bg-emerald-500 text-white border-emerald-600 shadow-sm';
              } else if (isSelected && !isThisCorrect) {
                btnStyle = 'bg-rose-500 text-white border-rose-600';
              } else {
                btnStyle = 'bg-slate-50 opacity-40 border-slate-200 text-slate-400';
              }
            } else if (isSelected) {
              btnStyle = 'bg-amber-100 border-amber-500 text-amber-950 ring-2 ring-amber-300';
            }

            return (
              <button
                key={oIdx}
                onClick={() => handleSelectOption(oIdx)}
                disabled={isLocked}
                className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center justify-between text-left text-sm sm:text-base font-bold ${btnStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-extrabold ${
                    isSelected ? 'bg-amber-500 text-white' : 'bg-white text-slate-700 shadow-xs'
                  }`}>
                    {String.fromCharCode(65 + oIdx)}
                  </span>
                  <span>{opt}</span>
                </div>

                {isLocked && isThisCorrect && (
                  <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
                )}
                {isLocked && isSelected && !isThisCorrect && (
                  <XCircle className="w-6 h-6 text-white shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Action Button: Kunci Jawaban vs Soal Selanjutnya */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="text-xs text-slate-500 font-semibold">
            {isLocked ? 'Jawaban telah dikunci ✓' : 'Pilih jawaban lalu kunci'}
          </div>

          <div>
            {!isLocked ? (
              <button
                onClick={handleLockAnswer}
                disabled={selectedOption === null}
                className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 disabled:bg-slate-200 text-white font-extrabold text-sm rounded-2xl shadow transition-colors disabled:cursor-not-allowed"
              >
                <Lock className="w-4 h-4" />
                <span>Kunci Jawaban Saya</span>
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-2 px-7 py-3 bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-sm rounded-2xl shadow transition-colors"
              >
                <span>
                  {currentIndex < QUIZ_QUESTIONS.length - 1
                    ? 'Lanjut Soal Berikutnya'
                    : 'Lihat Hasil & Predikat Nilai'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Explanation Card when locked */}
        {isLocked && (
          <div className={`p-4 rounded-2xl border-2 animate-in fade-in zoom-in-95 duration-200 ${
            isCurrentCorrect ? 'bg-emerald-50 border-emerald-300' : 'bg-amber-50 border-amber-300'
          }`}>
            <span className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-700">
              Penjelasan Jawaban:
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {currentQ.explanation}
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
          <span>Kembali ke Menu Utama</span>
        </button>
      </div>
    </div>
  );
};
