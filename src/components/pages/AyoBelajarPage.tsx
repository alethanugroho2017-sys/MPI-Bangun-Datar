import React, { useState } from 'react';
import {
  Volume2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Camera,
  Film,
  ZoomIn,
  RotateCcw,
  CheckCircle2,
  HelpCircle,
  Hash
} from 'lucide-react';
import { ActivePage, ShapeType, RealPhotoItem } from '../../types';
import { SHAPES_DATA } from '../../data/shapesData';
import { InteractiveShapeSvg } from '../InteractiveShapeSvg';
import { PhotoModal } from '../PhotoModal';
import { RealisticItemSvg } from '../RealisticItemSvg';
import { GeoMascot } from '../GeoMascot';
import { sound } from '../../utils/audio';

interface AyoBelajarPageProps {
  onNavigate: (page: ActivePage) => void;
  onGoToVideoForShape?: (shapeId: ShapeType) => void;
}

export const AyoBelajarPage: React.FC<AyoBelajarPageProps> = ({
  onNavigate,
  onGoToVideoForShape
}) => {
  const [selectedShapeIndex, setSelectedShapeIndex] = useState(0);
  const [inspectedPhoto, setInspectedPhoto] = useState<RealPhotoItem | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const currentShape = SHAPES_DATA[selectedShapeIndex];

  const handleSelectShape = (idx: number) => {
    sound.playClick();
    sound.stopSpeech();
    setIsSpeaking(false);
    setSelectedShapeIndex(idx);
  };

  const handleNext = () => {
    sound.playClick();
    sound.stopSpeech();
    setIsSpeaking(false);
    if (selectedShapeIndex < SHAPES_DATA.length - 1) {
      setSelectedShapeIndex(selectedShapeIndex + 1);
    } else {
      onNavigate('mengamati');
    }
  };

  const handlePrev = () => {
    sound.playClick();
    sound.stopSpeech();
    setIsSpeaking(false);
    if (selectedShapeIndex > 0) {
      setSelectedShapeIndex(selectedShapeIndex - 1);
    }
  };

  const handleSpeakNarration = () => {
    sound.playClick();
    if (isSpeaking) {
      sound.stopSpeech();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      sound.speak(currentShape.audioNarasi, () => setIsSpeaking(false));
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Mascot Guidance */}
      <GeoMascot
        message={currentShape.geoTip}
        mood="talk"
      />

      {/* Top Navigation & Shape Selector Tabs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-amber-200 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">MODUL 03 · AYO BELAJAR</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-950 flex items-center gap-2">
            <span>Mengenal {currentShape.name}</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
              {selectedShapeIndex + 1} dari 6
            </span>
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              sound.playClick();
              onNavigate('menu');
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-xl transition-colors border border-amber-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Menu Utama</span>
          </button>
        </div>
      </div>

      {/* 6 Shape Buttons Selector */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {SHAPES_DATA.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => handleSelectShape(idx)}
            className={`px-3 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex flex-col items-center gap-1 border-2 ${
              selectedShapeIndex === idx
                ? 'bg-amber-500 text-white border-amber-600 shadow-md scale-102'
                : 'bg-white text-slate-700 border-amber-200 hover:border-amber-400 hover:bg-amber-50'
            }`}
          >
            <span className="text-base sm:text-lg">
              {s.id === 'persegi' && '■'}
              {s.id === 'persegi_panjang' && '▬'}
              {s.id === 'segitiga' && '▲'}
              {s.id === 'lingkaran' && '●'}
              {s.id === 'oval' && '⬭'}
              {s.id === 'trapesium' && '⏢'}
            </span>
            <span className="truncate">{s.name}</span>
          </button>
        ))}
      </div>

      {/* Main Split Content: Interactive Shape on Left, Details & Voice on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Card: Interactive Geometry Visualizer */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 border-2 border-amber-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Laboratorium Bentuk Interaktif
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                Klik Gambar
              </span>
            </div>

            <InteractiveShapeSvg
              shape={currentShape.id}
              className="w-56 h-56 md:w-64 md:h-64 mx-auto my-2"
            />
          </div>

          {/* Quick Metrics: Sisi & Titik Sudut Counters */}
          <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-100">
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="flex items-center justify-center gap-1 text-slate-500 text-xs font-bold mb-0.5">
                <Hash className="w-3.5 h-3.5 text-blue-500" />
                <span>Jumlah Sisi</span>
              </div>
              <span className="text-2xl font-extrabold text-blue-600 block">
                {currentShape.jumlahSisi}
              </span>
              <span className="text-[11px] text-slate-600 font-semibold block leading-tight">
                {currentShape.sisiLabel}
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="flex items-center justify-center gap-1 text-slate-500 text-xs font-bold mb-0.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Titik Sudut</span>
              </div>
              <span className="text-2xl font-extrabold text-amber-600 block">
                {currentShape.jumlahSudut}
              </span>
              <span className="text-[11px] text-slate-600 font-semibold block leading-tight">
                {currentShape.sudutLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Right Card: Explanations, Characteristics & Audio */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 border-2 border-amber-200 shadow-sm flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            {/* Title & Audio Narration Trigger */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">CIRI-CIRI GEOMETRIS</span>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Ciri & Karakteristik {currentShape.name}
                </h3>
              </div>

              <button
                onClick={handleSpeakNarration}
                className={`flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold rounded-2xl border transition-all ${
                  isSpeaking
                    ? 'bg-rose-500 text-white border-rose-600 animate-pulse'
                    : 'bg-amber-400 hover:bg-amber-500 text-amber-950 border-amber-500 shadow-xs'
                }`}
              >
                <Volume2 className="w-4 h-4" />
                <span>{isSpeaking ? 'Hentikan Audio' : 'Dengarkan Narasi'}</span>
              </button>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed bg-amber-50/60 p-4 rounded-2xl border border-amber-200">
              {currentShape.deskripsiSederhana}
            </p>

            {/* Bullet Characteristics */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Ciri-ciri Utama (Perlu Kamu Ingat):
              </span>
              <ul className="space-y-2">
                {currentShape.ciriCiri.map((ciri, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{ciri}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Everyday Object Examples Tags */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                Contoh di Sekitarmu:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentShape.contohBenda.map((benda, bIdx) => (
                  <span
                    key={bIdx}
                    className="px-3 py-1 bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 rounded-full text-xs font-semibold transition-colors border border-slate-200"
                  >
                    {benda}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick link to related video */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => {
                sound.playClick();
                if (onGoToVideoForShape) {
                  onGoToVideoForShape(currentShape.id);
                } else {
                  onNavigate('video');
                }
              }}
              className="flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-200"
            >
              <Film className="w-4 h-4" />
              <span>Tonton Video Pembelajaran {currentShape.name}</span>
            </button>
          </div>
        </div>
      </div>

      {/* MANDATORY SECTION: Real Photographs Gallery (Foto Asli Benda Nyata) */}
      <div className="bg-white rounded-3xl p-6 border-2 border-amber-300 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-amber-400 text-amber-950 flex items-center justify-center font-bold">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">
                Galeri Foto Asli Benda Nyata: {currentShape.name}
              </h4>
              <p className="text-xs text-slate-500">
                Foto realistis benda sehari-hari (Bukan kartun / clipart). Klik foto untuk melihat detail garis bangun datar!
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            {currentShape.realPhotos.length} Foto Tersedia
          </span>
        </div>

        {/* Real Photo Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {currentShape.realPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => {
                sound.playClick();
                setInspectedPhoto(photo);
              }}
              className="group bg-slate-50 rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              {/* Photo Image Area */}
              <div className="relative aspect-4/3 w-full bg-slate-200 overflow-hidden">
                <img
                  src={photo.imageUrl}
                  alt={photo.altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback container if photo blocked */}
                <div className="hidden absolute inset-0 w-full h-full items-center justify-center p-3 bg-amber-50">
                  <RealisticItemSvg type={photo.svgFallbackType} className="w-full h-full" />
                </div>

                {/* Inspect Zoom Pill */}
                <div className="absolute top-2.5 right-2.5 bg-black/70 hover:bg-black/90 text-white text-[11px] font-semibold px-2 py-1 rounded-lg backdrop-blur-xs flex items-center gap-1 shadow">
                  <ZoomIn className="w-3 h-3" />
                  <span>Perbesar</span>
                </div>

                {/* Shape Tag */}
                <div className="absolute bottom-2 left-2 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                  {photo.shapeName}
                </div>
              </div>

              {/* Photo Caption & Info */}
              <div className="p-3.5 space-y-1">
                <h5 className="font-bold text-slate-900 text-sm group-hover:text-amber-800 transition-colors">
                  {photo.title}
                </h5>
                <p className="text-xs text-slate-600 line-clamp-2">
                  {photo.explanation}
                </p>
                <div className="pt-2 text-[10px] text-slate-400 flex items-center justify-between border-t border-slate-200">
                  <span>{photo.sourceCredit}</span>
                  <span className="text-amber-600 font-bold">Lihat Ciri</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons (Kembali & Berikutnya) */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={handlePrev}
          disabled={selectedShapeIndex === 0}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold border transition-all ${
            selectedShapeIndex === 0
              ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400 border-slate-200'
              : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300 shadow-xs'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Bangun Sebelumnya</span>
        </button>

        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm rounded-2xl shadow transition-colors"
        >
          <span>
            {selectedShapeIndex < SHAPES_DATA.length - 1
              ? `Lanjut: ${SHAPES_DATA[selectedShapeIndex + 1].name}`
              : 'Lanjut ke Ayo Mengamati'}
          </span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Full Detail Real Photo Modal Inspector */}
      {inspectedPhoto && (
        <PhotoModal
          photo={inspectedPhoto}
          onClose={() => setInspectedPhoto(null)}
        />
      )}
    </div>
  );
};
