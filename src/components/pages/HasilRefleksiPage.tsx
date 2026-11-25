import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Award,
  Trophy,
  CheckCircle2,
  XCircle,
  Smile,
  Meh,
  Frown,
  Printer,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Heart,
  Save,
  Compass
} from 'lucide-react';
import { ActivePage } from '../../types';
import { GeoMascot } from '../GeoMascot';
import { sound } from '../../utils/audio';

interface HasilRefleksiProps {
  onNavigate: (page: ActivePage) => void;
  quizResult?: {
    score: number;
    correctCount: number;
    wrongCount: number;
    predicate: string;
    message: string;
  };
}

export const HasilRefleksiPage: React.FC<HasilRefleksiProps> = ({
  onNavigate,
  quizResult,
}) => {
  const [studentName, setStudentName] = useState('Siswa Hebat');
  const [q1EasyShape, setQ1EasyShape] = useState('Lingkaran');
  const [q2HardShape, setQ2HardShape] = useState('Trapesium');
  const [q3Feeling, setQ3Feeling] = useState<'senang' | 'biasa' | 'bingung'>('senang');
  const [notes, setNotes] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Retrieve stored scores if not passed as prop
  const score = quizResult?.score ?? parseInt(localStorage.getItem('geo_quiz_score') || '90', 10);
  const correctCount = quizResult?.correctCount ?? parseInt(localStorage.getItem('geo_quiz_correct') || '9', 10);
  const wrongCount = 10 - correctCount;

  let predicate = 'Perlu Latihan';
  let message = 'Tidak apa-apa, baca materi dan coba lagi. Kamu pasti bisa!';

  if (score >= 90) {
    predicate = 'Sangat Baik';
    message = 'Luar biasa, kamu penjelajah bangun datar hebat!';
  } else if (score >= 70) {
    predicate = 'Baik';
    message = 'Bagus sekali, terus pertahankan semangatmu!';
  } else if (score >= 50) {
    predicate = 'Cukup';
    message = 'Usaha yang baik, ayo pelajari lagi bagian yang belum dikuasai.';
  }

  useEffect(() => {
    try {
      const storedName = localStorage.getItem('geo_student_name');
      if (storedName) setStudentName(storedName);
      const storedRefl = localStorage.getItem('geo_reflection');
      if (storedRefl) {
        const parsed = JSON.parse(storedRefl);
        if (parsed.q1) setQ1EasyShape(parsed.q1);
        if (parsed.q2) setQ2HardShape(parsed.q2);
        if (parsed.feeling) setQ3Feeling(parsed.feeling);
        if (parsed.notes) setNotes(parsed.notes);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSaveReflection = () => {
    sound.playCorrect();
    const data = {
      name: studentName,
      q1: q1EasyShape,
      q2: q2HardShape,
      feeling: q3Feeling,
      notes: notes,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem('geo_student_name', studentName);
      localStorage.setItem('geo_reflection', JSON.stringify(data));
    } catch {
      // ignore
    }
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handlePrintCertificate = () => {
    sound.playClick();
    window.print();
  };

  const shapesList = ['Persegi', 'Persegi Panjang', 'Segitiga', 'Lingkaran', 'Oval', 'Trapesium'];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <GeoMascot
        message={message}
        mood="cheer"
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-amber-200 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">MODUL 10 · HASIL & REFLEKSI</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-950 flex items-center gap-2">
            <Sparkles className="w-7 h-7 text-amber-500" />
            <span>Rapor Nilai & Refleksi Belajar</span>
          </h2>
        </div>

        <button
          onClick={handlePrintCertificate}
          className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow transition-colors"
        >
          <Printer className="w-4 h-4" />
          <span>Cetak / Simpan Piagam</span>
        </button>
      </div>

      {/* Printable Certificate Card */}
      <div className="bg-gradient-to-b from-amber-50 to-white rounded-3xl p-6 sm:p-8 border-4 border-amber-400 shadow-xl relative overflow-hidden print:border-none print:shadow-none">
        {/* Certificate Watermark / Header Ribbons */}
        <div className="text-center space-y-2 border-b-2 border-amber-200 pb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-widest shadow-sm">
            <Award className="w-4 h-4" />
            PIAGAM PENGHARGAAN PENJELAJAH GEOMETRI
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-950">
            Dunia Bangun Datar · Matematika Kelas II SD
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Diberikan sebagai apresiasi atas ketelitian, semangat belajar, dan keberhasilan menyelesaikan seluruh tantangan.
          </p>

          <div className="pt-2">
            <span className="text-xs text-slate-500">Nama Penjelajah Cilik:</span>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="text-xl sm:text-2xl font-black text-amber-900 text-center block mx-auto mt-1 border-b-2 border-dashed border-amber-400 focus:outline-none bg-transparent max-w-sm"
              placeholder="Ketik Namamu di sini"
            />
          </div>
        </div>

        {/* Score & Statistics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          <div className="p-4 rounded-2xl bg-white border border-amber-200 text-center shadow-xs">
            <span className="text-[11px] font-bold text-slate-500 block uppercase">NILAI AKHIR</span>
            <span className="text-4xl font-extrabold text-amber-600 block my-0.5">{score}</span>
            <span className="text-[11px] font-semibold text-slate-400">Skala 100</span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-amber-200 text-center shadow-xs">
            <span className="text-[11px] font-bold text-slate-500 block uppercase">PREDIKAT</span>
            <span className="text-xl font-extrabold text-purple-700 block my-2">{predicate}</span>
            <span className="text-[11px] font-semibold text-slate-400">Kategori Hasil</span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-amber-200 text-center shadow-xs">
            <span className="text-[11px] font-bold text-slate-500 block uppercase">JAWABAN BENAR</span>
            <span className="text-4xl font-extrabold text-emerald-600 block my-0.5">{correctCount}</span>
            <span className="text-[11px] font-semibold text-slate-400">Dari 10 Soal</span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-amber-200 text-center shadow-xs">
            <span className="text-[11px] font-bold text-slate-500 block uppercase">PERLU LATIHAN</span>
            <span className="text-4xl font-extrabold text-rose-500 block my-0.5">{wrongCount}</span>
            <span className="text-[11px] font-semibold text-slate-400">Soal Belum Tepat</span>
          </div>
        </div>

        {/* Motivational Feedback Note */}
        <div className="p-4 rounded-2xl bg-amber-100/70 border border-amber-300 text-center space-y-1">
          <span className="text-xs font-bold text-amber-900 uppercase">Catatan Motivasi Pendidik & Maskot GEO:</span>
          <p className="text-sm font-semibold text-amber-950 italic">
            "{message}"
          </p>
        </div>

        {/* Closing Inspirational Message */}
        <div className="mt-6 pt-4 border-t border-amber-200 text-center text-xs text-slate-600 leading-relaxed font-medium">
          "Selamat! Kamu telah menyelesaikan petualangan di dunia bangun datar. Teruslah belajar dan temukan bentuk-bentuk menarik di sekitarmu!"
        </div>
      </div>

      {/* Student Reflection Section */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-amber-300 shadow-md space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">LEMBAR REFLEKSI DIRI</span>
          <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
            Ayo Renungkan Pengalaman Belajarmu!
          </h3>
          <p className="text-xs text-slate-500">
            Jawablah 3 pertanyaan ini dengan jujur sesuai pengalaman belajarmu hari ini.
          </p>
        </div>

        <div className="space-y-5">
          {/* Question 1: Paling Mudah */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 block">
              1. Bangun datar apa yang paling mudah kamu kenali?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {shapesList.map((shape) => (
                <button
                  key={shape}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setQ1EasyShape(shape);
                  }}
                  className={`p-2.5 rounded-xl text-xs font-bold border-2 transition-all ${
                    q1EasyShape === shape
                      ? 'bg-emerald-500 text-white border-emerald-600 shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {shape}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Masih Membingungkan */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 block">
              2. Bangun datar apa yang masih sedikit membingungkan untukmu?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {shapesList.map((shape) => (
                <button
                  key={shape}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setQ2HardShape(shape);
                  }}
                  className={`p-2.5 rounded-xl text-xs font-bold border-2 transition-all ${
                    q2HardShape === shape
                      ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {shape}
                </button>
              ))}
            </div>
          </div>

          {/* Question 3: Perasaan Belajar bersama GEO */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 block">
              3. Bagaimana perasaanmu saat belajar bersama GEO di aplikasi ini?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setQ3Feeling('senang');
                }}
                className={`p-3.5 rounded-2xl border-2 transition-all flex items-center justify-center gap-2 ${
                  q3Feeling === 'senang'
                    ? 'bg-emerald-500 text-white border-emerald-600 shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <Smile className="w-5 h-5" />
                <span className="font-bold text-sm">Sangat Senang! 😊</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setQ3Feeling('biasa');
                }}
                className={`p-3.5 rounded-2xl border-2 transition-all flex items-center justify-center gap-2 ${
                  q3Feeling === 'biasa'
                    ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <Meh className="w-5 h-5" />
                <span className="font-bold text-sm">Biasa Saja 😐</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setQ3Feeling('bingung');
                }}
                className={`p-3.5 rounded-2xl border-2 transition-all flex items-center justify-center gap-2 ${
                  q3Feeling === 'bingung'
                    ? 'bg-purple-600 text-white border-purple-700 shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <Frown className="w-5 h-5" />
                <span className="font-bold text-sm">Masih Bingung 😕</span>
              </button>
            </div>
          </div>

          {/* Additional Notes Box */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Pesan atau Cerita Belajarmu untuk Guru:
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Tuliskan pengalaman belajarmu, benda paling menarik yang kamu temukan di rumah, atau pesan untuk bu guru..."
              rows={3}
              className="w-full p-3.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Save Reflection Button */}
          <div className="flex items-center justify-between pt-2">
            {savedSuccess ? (
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                Refleksi berhasil disimpan ke memori aplikasi!
              </span>
            ) : <span />}

            <button
              onClick={handleSaveReflection}
              className="flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Refleksi Saya</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            sound.playClick();
            onNavigate('kuis');
          }}
          className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Ulangi Kuis Evaluasi</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            onNavigate('profil');
          }}
          className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow transition-colors"
        >
          <span>Lihat Profil Pengembang & TPACK</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
