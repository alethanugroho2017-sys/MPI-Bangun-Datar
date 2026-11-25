import React, { useState, useEffect } from 'react';
import { ActivePage, ShapeType } from './types';
import { HeaderNav } from './components/HeaderNav';
import { HomeScreen } from './components/pages/HomeScreen';
import { MainMenu } from './components/pages/MainMenu';
import { PetunjukPage } from './components/pages/PetunjukPage';
import { TujuanPage } from './components/pages/TujuanPage';
import { AyoBelajarPage } from './components/pages/AyoBelajarPage';
import { AyoMengamatiPage } from './components/pages/AyoMengamatiPage';
import { VideoBelajarPage } from './components/pages/VideoBelajarPage';
import { Game1TebakBentuk } from './components/pages/Game1TebakBentuk';
import { Game2Pasangkan } from './components/pages/Game2Pasangkan';
import { Game3Kelompokkan } from './components/pages/Game3Kelompokkan';
import { KuisEvaluasiPage } from './components/pages/KuisEvaluasiPage';
import { HasilRefleksiPage } from './components/pages/HasilRefleksiPage';
import { ProfilPembuatPage } from './components/pages/ProfilPembuatPage';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedShapeForVideo, setSelectedShapeForVideo] = useState<ShapeType | undefined>(undefined);
  const [quizResult, setQuizResult] = useState<{
    score: number;
    correctCount: number;
    wrongCount: number;
    predicate: string;
    message: string;
  } | undefined>(undefined);

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
  };

  const handleGoToVideoForShape = (shapeId: ShapeType) => {
    setSelectedShapeForVideo(shapeId);
    setActivePage('video');
  };

  const handleQuizComplete = (result: {
    score: number;
    correctCount: number;
    wrongCount: number;
    predicate: string;
    message: string;
  }) => {
    setQuizResult(result);
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <HomeScreen onStart={handleNavigate} />;
      case 'menu':
        return <MainMenu onNavigate={handleNavigate} />;
      case 'petunjuk':
        return <PetunjukPage onNavigate={handleNavigate} />;
      case 'tujuan':
        return <TujuanPage onNavigate={handleNavigate} />;
      case 'belajar':
        return (
          <AyoBelajarPage
            onNavigate={handleNavigate}
            onGoToVideoForShape={handleGoToVideoForShape}
          />
        );
      case 'mengamati':
        return <AyoMengamatiPage onNavigate={handleNavigate} />;
      case 'video':
        return (
          <VideoBelajarPage
            onNavigate={handleNavigate}
            initialShapeId={selectedShapeForVideo}
          />
        );
      case 'game1':
        return <Game1TebakBentuk onNavigate={handleNavigate} />;
      case 'game2':
        return <Game2Pasangkan onNavigate={handleNavigate} />;
      case 'game3':
        return <Game3Kelompokkan onNavigate={handleNavigate} />;
      case 'kuis':
        return (
          <KuisEvaluasiPage
            onNavigate={handleNavigate}
            onQuizComplete={handleQuizComplete}
          />
        );
      case 'hasil':
        return (
          <HasilRefleksiPage
            onNavigate={handleNavigate}
            quizResult={quizResult}
          />
        );
      case 'profil':
        return <ProfilPembuatPage onNavigate={handleNavigate} />;
      default:
        return <HomeScreen onStart={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50/50 via-white to-amber-50/40 text-slate-800">
      {/* Top Bar Navigation */}
      <HeaderNav activePage={activePage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderActivePage()}
      </main>

      {/* Clean Educational Footer */}
      <footer className="mt-12 py-6 bg-white border-t border-amber-200/80 text-xs text-slate-500 print:hidden">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <p className="font-bold text-slate-800">
              Petualangan di Dunia Bangun Datar · Matematika Kelas II SD
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Multimedia Pembelajaran Interaktif (MPI) SDN Gonggang 2 · Setyawan Eko Nugroho, S.Pd. & Tim Digitalisasi · Tahun 2026
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-amber-800">
            <button onClick={() => handleNavigate('petunjuk')} className="hover:underline">
              Petunjuk
            </button>
            <span>·</span>
            <button onClick={() => handleNavigate('tujuan')} className="hover:underline">
              Tujuan
            </button>
            <span>·</span>
            <button onClick={() => handleNavigate('profil')} className="hover:underline">
              Profil Pengembang
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
