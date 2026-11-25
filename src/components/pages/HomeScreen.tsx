import React, { useState } from 'react';
import { Play, Sparkles, BookOpen, Film, Gamepad2, Award, Music, VolumeX, Eye } from 'lucide-react';
import { ActivePage } from '../../types';
import { sound } from '../../utils/audio';
import { HeroWorldSvg } from '../HeroWorldSvg';
import { GeoMascotSvg } from '../GeoMascotSvg';

interface HomeScreenProps {
  onStart: (page: ActivePage) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onStart }) => {
  const [bgmActive, setBgmActive] = useState(sound.getBgmState());

  const toggleBgm = () => {
    sound.playClick();
    const active = sound.toggleBgm();
    setBgmActive(active);
  };

  const handleStart = () => {
    sound.playFanfare();
    onStart('menu');
  };

  const shapePills = [
    { name: 'Persegi', color: 'bg-emerald-500', icon: '■' },
    { name: 'Persegi Panjang', color: 'bg-blue-500', icon: '▬' },
    { name: 'Segitiga', color: 'bg-amber-500', icon: '▲' },
    { name: 'Lingkaran', color: 'bg-rose-500', icon: '●' },
    { name: 'Oval', color: 'bg-purple-500', icon: '⬭' },
    { name: 'Trapesium', color: 'bg-orange-500', icon: '⏢' },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-between py-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Top Banner with Quick Music & Mode Status */}
      <div className="flex items-center justify-between bg-white/90 border border-amber-200 rounded-2xl px-5 py-3 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-xs font-bold text-amber-900 tracking-wide uppercase">
            MPI Matematika Kelas II SD · Geometri Bangun Datar
          </span>
        </div>
        <button
          onClick={toggleBgm}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all border ${
            bgmActive
              ? 'bg-emerald-500 text-white border-emerald-600'
              : 'bg-amber-100 text-amber-900 border-amber-300 hover:bg-amber-200'
          }`}
        >
          {bgmActive ? <Music className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          <span>{bgmActive ? 'Musik Ceria Aktif' : 'Nyalakan Musik'}</span>
        </button>
      </div>

      {/* Main Hero Card with Geometry World Landscape */}
      <div className="relative mt-6 rounded-3xl overflow-hidden border-4 border-amber-300 bg-white shadow-xl">
        {/* Landscape Graphic Background (Instant SVG) with soft overlay */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
          <HeroWorldSvg className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/85 via-amber-950/30 to-transparent" />

          {/* Six Shapes Floating Visual Ribbon */}
          <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-center gap-2">
            {shapePills.map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-1.5 px-3 py-1 bg-white/95 text-slate-800 rounded-full text-xs font-bold shadow-md backdrop-blur-sm border border-white/40"
              >
                <span className={`w-3.5 h-3.5 rounded-full ${s.color} text-white flex items-center justify-center text-[10px]`}>
                  {s.icon}
                </span>
                <span>{s.name}</span>
              </div>
            ))}
          </div>

          {/* Hero Titles over Landscape */}
          <div className="absolute bottom-6 left-6 right-6 text-white text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4">
            <div>
              <span className="inline-block text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-widest mb-1">
                Selamat Datang di Dunia Petualangan
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-md text-balance text-white">
                PETUALANGAN DI DUNIA BANGUN DATAR
              </h1>
              <p className="text-amber-100 text-sm sm:text-base max-w-xl mt-1 drop-shadow-xs">
                Mengenal Persegi, Persegi Panjang, Segitiga, Lingkaran, Oval, dan Trapesium lewat foto benda nyata di sekitarmu!
              </p>
            </div>

            {/* Big Start Button */}
            <button
              onClick={handleStart}
              className="shrink-0 px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-amber-950 font-extrabold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 border-2 border-white/60 animate-gentle-wobble"
            >
              <Play className="w-6 h-6 fill-current" />
              <span>MULAI PETUALANGAN</span>
            </button>
          </div>
        </div>

        {/* Mascot GEO Intro Deck */}
        <div className="p-6 md:p-8 bg-gradient-to-b from-amber-50/70 to-white flex flex-col md:flex-row items-center gap-6">
          <div className="relative shrink-0">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-3xl overflow-hidden border-4 border-amber-400 bg-sky-100 shadow-md animate-soft-bounce">
              <GeoMascotSvg className="w-full h-full" />
            </div>
            <div className="absolute -bottom-2 -right-1 bg-amber-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full border-2 border-white shadow">
              GEO Explorer
            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-2">
            <h2 className="text-xl md:text-2xl font-bold text-amber-950 flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Halo Teman Hebat! Aku GEO, Teman Belajarmu!</span>
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed">
              Di petualangan ini, kita akan mengamati benda-benda nyata di rumah dan sekolah kita. Kamu akan melihat <strong>foto asli</strong>, menonton <strong>video seru</strong>, bermain <strong>3 permainan tantangan</strong>, serta mengerjakan <strong>kuis berhadiah predikat bintang</strong>!
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <button
                onClick={() => {
                  sound.playClick();
                  onStart('belajar');
                }}
                className="flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs md:text-sm font-bold rounded-xl shadow-xs transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>Langsung Belajar Materi</span>
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  onStart('mengamati');
                }}
                className="flex items-center gap-1.5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs md:text-sm font-bold rounded-xl shadow-xs transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>Ayo Mengamati Benda</span>
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  onStart('video');
                }}
                className="flex items-center gap-1.5 px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white text-xs md:text-sm font-bold rounded-xl shadow-xs transition-colors"
              >
                <Film className="w-4 h-4" />
                <span>Nonton Video Belajar</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Highlights Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-xs text-center space-y-1">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center font-bold">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-800 text-sm">Foto Benda Nyata</h3>
          <p className="text-xs text-slate-500">Ubin, catur, jam, pintu, telur asli</p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-xs text-center space-y-1">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 mx-auto flex items-center justify-center font-bold">
            <Film className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-800 text-sm">Video Interaktif</h3>
          <p className="text-xs text-slate-500">6 topik video dengan kuis cepat</p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-xs text-center space-y-1">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 mx-auto flex items-center justify-center font-bold">
            <Gamepad2 className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-800 text-sm">3 Game Seru</h3>
          <p className="text-xs text-slate-500">Tebak, Pasangkan, Kelompokkan</p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-xs text-center space-y-1">
          <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 mx-auto flex items-center justify-center font-bold">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-800 text-sm">Kuis & Piagam</h3>
          <p className="text-xs text-slate-500">Nilai otomatis & piagam petualang</p>
        </div>
      </div>
    </div>
  );
};
