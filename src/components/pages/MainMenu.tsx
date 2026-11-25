import React from 'react';
import {
  HelpCircle,
  Target,
  BookOpen,
  Eye,
  Film,
  Gamepad2,
  Puzzle,
  Boxes,
  Award,
  Sparkles,
  UserCheck,
  ChevronRight,
} from 'lucide-react';
import { ActivePage } from '../../types';
import { GeoMascot } from '../GeoMascot';
import { sound } from '../../utils/audio';

interface MainMenuProps {
  onNavigate: (page: ActivePage) => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({ onNavigate }) => {
  const menuItems: {
    page: ActivePage;
    number: string;
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    color: string;
    badge: string;
  }[] = [
    {
      page: 'petunjuk',
      number: '01',
      title: 'Petunjuk Penggunaan',
      subtitle: 'Panduan cara belajar, menonton, dan bermain',
      icon: <HelpCircle className="w-6 h-6" />,
      color: 'bg-emerald-500 text-white',
      badge: 'Panduan Cilik'
    },
    {
      page: 'tujuan',
      number: '02',
      title: 'Tujuan Pembelajaran',
      subtitle: 'Capaian materi geometri Kelas II SD',
      icon: <Target className="w-6 h-6" />,
      color: 'bg-teal-500 text-white',
      badge: 'Kurikulum Merdeka'
    },
    {
      page: 'belajar',
      number: '03',
      title: 'Ayo Belajar Bangun Datar',
      subtitle: 'Mengenal 6 bangun datar, sisi, sudut, & galeri foto asli',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'bg-blue-500 text-white',
      badge: 'Materi Lengkap'
    },
    {
      page: 'mengamati',
      number: '04',
      title: 'Ayo Mengamati Benda',
      subtitle: 'Tantangan 10 benda nyata di lingkungan sekitar',
      icon: <Eye className="w-6 h-6" />,
      color: 'bg-cyan-500 text-white',
      badge: 'Aktivitas Foto'
    },
    {
      page: 'video',
      number: '05',
      title: 'Video Pembelajaran',
      subtitle: 'Ayo Menonton! 6 video edukasi geometri seru',
      icon: <Film className="w-6 h-6" />,
      color: 'bg-rose-500 text-white',
      badge: 'Audio Visual'
    },
    {
      page: 'game1',
      number: '06',
      title: 'Game 1: Tebak Bentuk',
      subtitle: 'Tebak bangun datar dari foto benda asli',
      icon: <Gamepad2 className="w-6 h-6" />,
      color: 'bg-amber-500 text-white',
      badge: 'Level 1'
    },
    {
      page: 'game2',
      number: '07',
      title: 'Game 2: Pasangkan Benda',
      subtitle: 'Mencocokkan foto benda dengan nama bangun datarnya',
      icon: <Puzzle className="w-6 h-6" />,
      color: 'bg-orange-500 text-white',
      badge: 'Level 2'
    },
    {
      page: 'game3',
      number: '08',
      title: 'Game 3: Kelompokkan Benda',
      subtitle: 'Memasukkan 12 benda ke keranjang bentuk yang tepat',
      icon: <Boxes className="w-6 h-6" />,
      color: 'bg-red-500 text-white',
      badge: 'Level 3'
    },
    {
      page: 'kuis',
      number: '09',
      title: 'Kuis Evaluasi (10 Soal)',
      subtitle: 'Uji pemahamanmu dan raih predikat Sangat Baik',
      icon: <Award className="w-6 h-6" />,
      color: 'bg-purple-600 text-white',
      badge: 'Nilai Otomatis'
    },
    {
      page: 'hasil',
      number: '10',
      title: 'Hasil dan Refleksi',
      subtitle: 'Lihat nilai, cetak piagam petualang, & isi perasaan',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'bg-indigo-600 text-white',
      badge: 'Rapor Belajar'
    },
    {
      page: 'profil',
      number: '11',
      title: 'Profil Pengembang & TPACK',
      subtitle: 'Identitas pembuat multimedia dan kerangka TPACK',
      icon: <UserCheck className="w-6 h-6" />,
      color: 'bg-slate-700 text-white',
      badge: 'Info Pendidik'
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Mascot Greeting */}
      <GeoMascot
        message="Pilih stasiun petualangan yang ingin kamu kunjungi! Kamu bisa mulai dari Ayo Belajar, menonton Video, atau langsung uji ketangkasanmu di 3 Permainan!"
        mood="happy"
      />

      {/* Title & Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-amber-200 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">PETA PETUALANGAN</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-950">
            Daftar Menu Pembelajaran Interaktif
          </h2>
        </div>
        <span className="text-xs font-semibold px-3 py-1 bg-amber-100 text-amber-900 rounded-full border border-amber-300">
          11 Modul Lengkap Tersedia
        </span>
      </div>

      {/* 11 Menu Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuItems.map((item) => (
          <div
            key={item.page}
            onClick={() => {
              sound.playClick();
              onNavigate(item.page);
            }}
            className="group relative bg-white rounded-2xl p-5 border-2 border-amber-200/90 shadow-sm hover:shadow-md hover:border-amber-400 transition-all cursor-pointer flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 font-mono">{item.number}</span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {item.badge}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                {item.subtitle}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600 group-hover:text-amber-700">
              <span>Buka Menu</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
