import React, { useState, useEffect } from 'react';
import { Music, VolumeX, Menu, Compass } from 'lucide-react';
import { ActivePage } from '../types';
import { sound } from '../utils/audio';

interface HeaderNavProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ activePage, onNavigate }) => {
  const [bgmActive, setBgmActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setBgmActive(sound.getBgmState());
  }, []);

  const toggleMusic = () => {
    sound.playClick();
    const isPlaying = sound.toggleBgm();
    setBgmActive(isPlaying);
  };

  const navLinks: { label: string; page: ActivePage }[] = [
    { label: 'Beranda', page: 'home' },
    { label: 'Menu Utama', page: 'menu' },
    { label: 'Ayo Belajar', page: 'belajar' },
    { label: 'Ayo Mengamati', page: 'mengamati' },
    { label: 'Video Pembelajaran', page: 'video' },
    { label: 'Tebak Bentuk', page: 'game1' },
    { label: 'Kuis Evaluasi', page: 'kuis' },
    { label: 'Profil Guru', page: 'profil' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Brand Wordmark (Single element) */}
          <button
            onClick={() => {
              sound.playClick();
              onNavigate('home');
            }}
            className="flex items-center gap-2 text-left group shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-400 border-2 border-amber-500 flex items-center justify-center text-amber-950 shadow-xs group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 animate-spin" style={{ animationDuration: '18s' }} />
            </div>
            <div>
              <span className="text-lg md:text-xl font-bold tracking-tight text-amber-950 block leading-tight">
                Dunia Bangun Datar
              </span>
              <span className="text-[11px] font-semibold text-amber-700 tracking-wide block">
                Matematika Kelas II SD
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Clean single line typography) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
            {navLinks.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  sound.playClick();
                  onNavigate(item.page);
                }}
                className={`whitespace-nowrap shrink-0 transition-colors py-1.5 border-b-2 ${
                  activePage === item.page
                    ? 'text-amber-800 border-amber-500 font-bold'
                    : 'border-transparent hover:text-amber-900 hover:border-amber-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Audio controls & Primary Action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Music Synthesizer Toggle */}
            <button
              onClick={toggleMusic}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
                bgmActive
                  ? 'bg-emerald-500 text-white border-emerald-600 shadow-xs animate-pulse'
                  : 'bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200'
              }`}
              title={bgmActive ? 'Matikan Musik Latar' : 'Nyalakan Musik Latar Ceria'}
            >
              {bgmActive ? <Music className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{bgmActive ? 'Musik: Hidup' : 'Musik: Mati'}</span>
            </button>

            {/* Main Menu Button */}
            <button
              onClick={() => {
                sound.playClick();
                onNavigate('menu');
              }}
              className="px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white bg-amber-500 hover:bg-amber-600 rounded-xl transition-colors shadow-xs whitespace-nowrap shrink-0"
            >
              Menu Petualangan
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
              aria-label="Buka Menu Navigasi"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-amber-200 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navLinks.map((item) => (
            <button
              key={item.page}
              onClick={() => {
                sound.playClick();
                onNavigate(item.page);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activePage === item.page
                  ? 'bg-amber-100 text-amber-900 font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
