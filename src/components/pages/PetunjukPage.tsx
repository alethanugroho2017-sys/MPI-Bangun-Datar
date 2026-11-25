import React from 'react';
import {
  Compass,
  BookOpen,
  Camera,
  Film,
  Gamepad2,
  Award,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Volume2
} from 'lucide-react';
import { ActivePage } from '../../types';
import { GeoMascot } from '../GeoMascot';
import { sound } from '../../utils/audio';

interface PetunjukPageProps {
  onNavigate: (page: ActivePage) => void;
}

export const PetunjukPage: React.FC<PetunjukPageProps> = ({ onNavigate }) => {
  const steps = [
    {
      num: 1,
      title: 'Cara Memulai Petualangan',
      desc: 'Klik tombol "MULAI PETUALANGAN" di halaman depan atau tombol "Menu Utama" di bagian atas untuk memilih bagian yang ingin kamu jelajahi.',
      icon: <Compass className="w-6 h-6 text-emerald-600" />,
      color: 'bg-emerald-50 border-emerald-200'
    },
    {
      num: 2,
      title: 'Cara Membuka & Mempelajari Materi',
      desc: 'Di menu "Ayo Belajar", pilih salah satu dari 6 tab bangun datar. Klik sisi untuk menghitung garis lurus, dan klik titik sudut untuk melihat pojok yang runcing!',
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      color: 'bg-blue-50 border-blue-200'
    },
    {
      num: 3,
      title: 'Cara Melihat Foto Benda Asli',
      desc: 'Di setiap materi bangun datar dan menu "Ayo Mengamati", klik pada kartu foto asli. Foto akan membesar dan kamu bisa menyalakan garis bentuk geometrisnya!',
      icon: <Camera className="w-6 h-6 text-amber-600" />,
      color: 'bg-amber-50 border-amber-200'
    },
    {
      num: 4,
      title: 'Cara Memutar Video Pembelajaran',
      desc: 'Buka menu "Video Pembelajaran". Pilih video yang ingin kamu tonton, tekan tombol Putar (Play). Kamu juga bisa menjawab pertanyaan seru setelah menonton!',
      icon: <Film className="w-6 h-6 text-rose-600" />,
      color: 'bg-rose-50 border-rose-200'
    },
    {
      num: 5,
      title: 'Cara Memainkan 3 Game Edukasi',
      desc: 'Cobalah ketiga permainan secara berurutan: Game 1 (Tebak Bentuk), Game 2 (Pasangkan), dan Game 3 (Kelompokkan Benda) untuk mengumpulkan bintang emas.',
      icon: <Gamepad2 className="w-6 h-6 text-purple-600" />,
      color: 'bg-purple-50 border-purple-200'
    },
    {
      num: 6,
      title: 'Cara Mengerjakan Kuis Evaluasi',
      desc: 'Kerjakan 10 soal pilihan ganda satu per satu. Pilih jawaban A, B, atau C, lalu tekan tombol "Kunci Jawaban" untuk melihat langsung apakah jawabanmu tepat!',
      icon: <Award className="w-6 h-6 text-indigo-600" />,
      color: 'bg-indigo-50 border-indigo-200'
    },
    {
      num: 7,
      title: 'Cara Melihat Hasil Belajar & Piagam',
      desc: 'Setelah kuis selesai, buka halaman "Hasil & Refleksi". Kamu bisa melihat nilaimu, memilih perasaanmu hari ini, dan mencetak Piagam Penghargaan Petualang!',
      icon: <Sparkles className="w-6 h-6 text-orange-600" />,
      color: 'bg-orange-50 border-orange-200'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <GeoMascot
        message="Jangan khawatir teman-teman! Ikuti 7 langkah petunjuk ini agar kamu bisa menjelajah dan belajar dengan mudah dan menyenangkan!"
        mood="talk"
      />

      <div className="flex items-center justify-between border-b border-amber-200 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">PANDUAN APLIKASI</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-950">
            Petunjuk Penggunaan MPI
          </h2>
        </div>
        <button
          onClick={() => {
            sound.playClick();
            onNavigate('menu');
          }}
          className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-xl transition-colors border border-amber-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Menu</span>
        </button>
      </div>

      {/* Helpful Audio Tip */}
      <div className="bg-amber-100/70 border-2 border-amber-300 rounded-2xl p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
          <Volume2 className="w-5 h-5" />
        </div>
        <p className="text-xs sm:text-sm text-amber-950 font-medium">
          <strong>Tips Suara Narasi:</strong> Jika kamu ingin mendengarkan penjelasan dibacakan, cukup tekan tombol bergambar speaker atau klik maskot GEO di mana saja!
        </p>
      </div>

      {/* 7 Illustrated Guide Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {steps.map((s) => (
          <div
            key={s.num}
            className={`p-5 rounded-2xl border-2 ${s.color} bg-white shadow-xs space-y-2 flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-extrabold flex items-center justify-center">
                  {s.num}
                </span>
                <div className="p-2 rounded-xl bg-white shadow-xs border border-slate-100">
                  {s.icon}
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900">{s.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Action */}
      <div className="pt-4 flex justify-end">
        <button
          onClick={() => {
            sound.playClick();
            onNavigate('tujuan');
          }}
          className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-2xl shadow transition-colors"
        >
          <span>Lanjut ke Tujuan Pembelajaran</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
