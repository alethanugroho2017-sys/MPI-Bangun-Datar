import React from 'react';
import { Target, CheckCircle2, ArrowRight, ArrowLeft, Star, Award, Layers } from 'lucide-react';
import { ActivePage } from '../../types';
import { GeoMascot } from '../GeoMascot';
import { sound } from '../../utils/audio';

interface TujuanPageProps {
  onNavigate: (page: ActivePage) => void;
}

export const TujuanPage: React.FC<TujuanPageProps> = ({ onNavigate }) => {
  const goals = [
    {
      num: 1,
      title: 'Mengenal & Menyebutkan 6 Bangun Datar',
      desc: 'Peserta didik mampu menyebutkan nama Persegi, Persegi Panjang, Segitiga, Lingkaran, Oval, dan Trapesium secara tepat dan percaya diri.',
      tag: 'Pengetahuan Dasar (C1)',
      color: 'border-emerald-300 bg-emerald-50/70',
      badgeColor: 'bg-emerald-500'
    },
    {
      num: 2,
      title: 'Mengidentifikasi Ciri Sederhana Bangun Datar',
      desc: 'Peserta didik mampu menjelaskan ciri-ciri sederhana berdasarkan jenis garis (lurus atau lengkung) serta keberadaan sisi dan sudut.',
      tag: 'Pemahaman Konseptual (C2)',
      color: 'border-blue-300 bg-blue-50/70',
      badgeColor: 'bg-blue-500'
    },
    {
      num: 3,
      title: 'Menghitung Jumlah Sisi dan Titik Sudut',
      desc: 'Peserta didik dapat menghitung jumlah sisi dan titik sudut pada bangun datar yang bersesuaian dengan cermat dan teliti.',
      tag: 'Keterampilan Matematika (P2)',
      color: 'border-amber-300 bg-amber-50/70',
      badgeColor: 'bg-amber-500'
    },
    {
      num: 4,
      title: 'Menemukan & Mengelompokkan Contoh Benda Nyata',
      desc: 'Peserta didik mampu mengenali dan mengelompokkan benda-benda asli di lingkungan rumah serta sekolah ke dalam bangun datar yang sesuai.',
      tag: 'Penerapan Nyata / TPACK (C3)',
      color: 'border-rose-300 bg-rose-50/70',
      badgeColor: 'bg-rose-500'
    },
    {
      num: 5,
      title: 'Menyelesaikan Soal & Merefleksikan Belajar',
      desc: 'Peserta didik mampu menyelesaikan soal evaluasi mandiri serta mengungkapkan perasaan dan pengalaman belajar bersama media interaktif.',
      tag: 'Evaluasi & Refleksi (A3)',
      color: 'border-purple-300 bg-purple-50/70',
      badgeColor: 'bg-purple-500'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <GeoMascot
        message="Ini adalah 5 misi petualangan hebat kita hari ini! Setelah menyelesaikan semua materi dan permainan, kamu pasti akan menguasai kelima tujuan ini dengan predikat Bintang!"
        mood="cheer"
      />

      <div className="flex items-center justify-between border-b border-amber-200 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">CAPAIAN & TUJUAN PEMBELAJARAN</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-950">
            Target Belajar Penjelajah Cilik
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

      {/* Capaian Pembelajaran Big Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 p-6 rounded-3xl text-amber-950 shadow-md border-2 border-amber-300 flex flex-col md:flex-row items-center gap-5">
        <div className="w-14 h-14 rounded-2xl bg-white/90 text-amber-900 flex items-center justify-center shrink-0 shadow-sm">
          <Target className="w-8 h-8" />
        </div>
        <div>
          <span className="text-xs font-bold tracking-wider uppercase text-amber-900">
            Capaian Pembelajaran (CP) Fase A · Kelas II SD
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold mt-0.5">
            Mengenal Bangun Datar dan Menghubungkannya dengan Benda Nyata
          </h3>
          <p className="text-xs sm:text-sm text-amber-950/90 mt-1 leading-relaxed">
            Peserta didik mampu mengenali berbagai bentuk bangun datar (persegi, persegi panjang, segitiga, lingkaran, oval, trapesium) dan menghubungkannya dengan benda-benda yang dijumpai dalam kehidupan sehari-hari di rumah dan sekolah.
          </p>
        </div>
      </div>

      {/* 5 Goal Cards */}
      <div className="space-y-4">
        {goals.map((g) => (
          <div
            key={g.num}
            className={`p-5 rounded-2xl border-2 ${g.color} bg-white shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}
          >
            <div className="flex items-start gap-4">
              <span className={`w-9 h-9 rounded-xl ${g.badgeColor} text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-xs mt-0.5 sm:mt-0`}>
                {g.num}
              </span>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-base font-bold text-slate-900">{g.title}</h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-700 rounded-full">
                    {g.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{g.desc}</p>
              </div>
            </div>
            <div className="shrink-0 self-end sm:self-center">
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Action */}
      <div className="pt-4 flex items-center justify-between">
        <button
          onClick={() => {
            sound.playClick();
            onNavigate('petunjuk');
          }}
          className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Lihat Petunjuk</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            onNavigate('belajar');
          }}
          className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-2xl shadow transition-colors"
        >
          <span>Ayo Mulai Belajar Materi!</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
