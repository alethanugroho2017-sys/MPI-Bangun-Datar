import React, { useState, useEffect } from 'react';
import {
  Film,
  Play,
  Pause,
  Maximize,
  Volume2,
  VolumeX,
  Settings,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Tv,
  Edit3,
  Save,
  RotateCcw
} from 'lucide-react';
import { ActivePage, VideoLesson, ShapeType } from '../../types';
import { VIDEO_LESSONS } from '../../data/videoData';
import { GeoMascot } from '../GeoMascot';
import { InteractiveShapeSvg } from '../InteractiveShapeSvg';
import { sound } from '../../utils/audio';

interface VideoBelajarPageProps {
  onNavigate: (page: ActivePage) => void;
  initialShapeId?: ShapeType;
}

export const VideoBelajarPage: React.FC<VideoBelajarPageProps> = ({
  onNavigate,
  initialShapeId,
}) => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [playerMode, setPlayerMode] = useState<'youtube' | 'theater'>('youtube');
  const [isTheaterPlaying, setIsTheaterPlaying] = useState(false);
  const [customUrls, setCustomUrls] = useState<Record<string, string>>({});
  const [isEditingConfig, setIsEditingConfig] = useState(false);
  const [tempUrlInput, setTempUrlInput] = useState('');
  
  // Post-video questions state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<number, boolean>>({});

  useEffect(() => {
    // Load custom video URLs from localStorage if saved by teacher
    try {
      const saved = localStorage.getItem('geo_video_urls');
      if (saved) {
        setCustomUrls(JSON.parse(saved));
      }
    } catch {
      // ignore
    }

    if (initialShapeId) {
      const idx = VIDEO_LESSONS.findIndex((v) => v.shapeId === initialShapeId);
      if (idx !== -1) {
        setSelectedVideoIndex(idx);
      }
    }
  }, [initialShapeId]);

  const currentVideo = VIDEO_LESSONS[selectedVideoIndex];

  // Resolve current active video URL / YouTube Embed ID
  const activeVideoSource = customUrls[currentVideo.id] || currentVideo.defaultYoutubeId;

  const handleSelectVideo = (idx: number) => {
    sound.playClick();
    sound.stopSpeech();
    setSelectedVideoIndex(idx);
    setSelectedAnswers({});
    setSubmittedAnswers({});
    setIsTheaterPlaying(false);
  };

  const handleSaveCustomUrl = () => {
    sound.playCorrect();
    const updated = { ...customUrls, [currentVideo.id]: tempUrlInput.trim() };
    setCustomUrls(updated);
    try {
      localStorage.setItem('geo_video_urls', JSON.stringify(updated));
    } catch {
      // ignore
    }
    setIsEditingConfig(false);
  };

  const handleResetCustomUrl = () => {
    sound.playClick();
    const updated = { ...customUrls };
    delete updated[currentVideo.id];
    setCustomUrls(updated);
    try {
      localStorage.setItem('geo_video_urls', JSON.stringify(updated));
    } catch {
      // ignore
    }
    setTempUrlInput('');
    setIsEditingConfig(false);
  };

  const handleAnswerQuestion = (qIndex: number, optIndex: number) => {
    if (submittedAnswers[qIndex]) return;
    sound.playClick();
    setSelectedAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
  };

  const handleSubmitQuestion = (qIndex: number) => {
    if (selectedAnswers[qIndex] === undefined) return;
    const q = currentVideo.postQuestions[qIndex];
    const isCorrect = selectedAnswers[qIndex] === q.correctIndex;
    if (isCorrect) {
      sound.playCorrect();
    } else {
      sound.playWrong();
    }
    setSubmittedAnswers((prev) => ({ ...prev, [qIndex]: true }));
  };

  const toggleTheaterPlay = () => {
    sound.playClick();
    if (isTheaterPlaying) {
      sound.stopSpeech();
      setIsTheaterPlaying(false);
    } else {
      setIsTheaterPlaying(true);
      const text = `${currentVideo.title}. ${currentVideo.description}. Poin penting: ${currentVideo.narrativePoints.join('. ')}`;
      sound.speak(text, () => setIsTheaterPlaying(false));
    }
  };

  // Convert potential full youtube link or plain ID to embed URL
  const getEmbedUrl = (src: string) => {
    if (src.includes('youtube.com/watch?v=')) {
      const id = src.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${id}?rel=0&autoplay=0`;
    }
    if (src.includes('youtu.be/')) {
      const id = src.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}?rel=0&autoplay=0`;
    }
    if (src.includes('http://') || src.includes('https://')) {
      return src; // mp4 or external url
    }
    return `https://www.youtube.com/embed/${src}?rel=0&autoplay=0`;
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <GeoMascot
        message="Ayo Menonton! Video pembelajaran ini akan membuatmu semakin paham tentang bentuk-bentuk geometri di sekitarmu. Jangan lupa jawab pertanyaan seru di bawahnya ya!"
        mood="happy"
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-amber-200 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">MODUL 05 · AYO MENONTON!</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-950 flex items-center gap-2">
            <span>Video Pembelajaran Bangun Datar</span>
          </h2>
        </div>

        <div className="flex items-center gap-2">
          {/* Teacher Config Button */}
          <button
            onClick={() => {
              sound.playClick();
              setTempUrlInput(activeVideoSource);
              setIsEditingConfig(!isEditingConfig);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors border border-slate-300"
            title="Pengaturan URL Video oleh Guru"
          >
            <Settings className="w-4 h-4" />
            <span>Atur URL Video (Guru)</span>
          </button>

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

      {/* Teacher URL Config Modal/Box */}
      {isEditingConfig && (
        <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 shadow-sm space-y-3 animate-in fade-in">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <Edit3 className="w-4 h-4" />
              Pengaturan URL Video oleh Guru untuk: <strong>{currentVideo.title}</strong>
            </span>
            <span className="text-[11px] text-slate-500">Bisa YouTube ID, link YouTube, atau URL MP4</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={tempUrlInput}
              onChange={(e) => setTempUrlInput(e.target.value)}
              placeholder="Contoh: v3Q4pM9_Gsc atau https://www.youtube.com/watch?v=..."
              className="flex-1 px-4 py-2 text-xs sm:text-sm bg-white border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              onClick={handleSaveCustomUrl}
              className="flex items-center gap-1 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Simpan URL</span>
            </button>
            <button
              onClick={handleResetCustomUrl}
              className="flex items-center gap-1 px-3 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold rounded-xl transition-colors"
              title="Kembalikan ke Video Kurikulum Default"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset Default</span>
            </button>
          </div>
        </div>
      )}

      {/* Video Playlist Selector Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {VIDEO_LESSONS.map((v, idx) => (
          <button
            key={v.id}
            onClick={() => handleSelectVideo(idx)}
            className={`p-2.5 rounded-2xl text-left border-2 transition-all flex flex-col justify-between ${
              selectedVideoIndex === idx
                ? 'bg-rose-500 text-white border-rose-600 shadow-md scale-102'
                : 'bg-white hover:bg-rose-50 text-slate-800 border-amber-200'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold font-mono opacity-80">0{idx + 1}</span>
              <Film className="w-3.5 h-3.5" />
            </div>
            <p className="text-xs font-bold line-clamp-2 leading-snug">
              {v.title}
            </p>
            <span className="text-[10px] opacity-75 mt-1 block">{v.duration}</span>
          </button>
        ))}
      </div>

      {/* Main Integrated Video Player Container */}
      <div className="bg-white rounded-3xl p-6 border-2 border-amber-300 shadow-md space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">
              MEMUTAR BAGIAN 0{selectedVideoIndex + 1}
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-0.5">
              {currentVideo.title}
            </h3>
          </div>

          {/* Toggle between YouTube Player and Interactive Animated Stage */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => {
                sound.playClick();
                setPlayerMode('youtube');
              }}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1 ${
                playerMode === 'youtube'
                  ? 'bg-white text-rose-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Pemutar Video</span>
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setPlayerMode('theater');
              }}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1 ${
                playerMode === 'theater'
                  ? 'bg-white text-amber-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Tv className="w-3.5 h-3.5" />
              <span>Teater Animasi GEO</span>
            </button>
          </div>
        </div>

        {/* Player Screen Area */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border-4 border-slate-800 shadow-xl flex items-center justify-center">
          {playerMode === 'youtube' ? (
            <iframe
              src={getEmbedUrl(activeVideoSource)}
              title={currentVideo.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            /* Teater Animasi GEO (Reliable Offline / Self-Contained Interactive Fallback) */
            <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 p-6 flex flex-col items-center justify-between text-white">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Teater Animasi Interaktif GEO
                  </span>
                </div>
                <button
                  onClick={toggleTheaterPlay}
                  className="flex items-center gap-1.5 px-3 py-1 bg-amber-500 hover:bg-amber-600 text-amber-950 text-xs font-bold rounded-xl transition-colors"
                >
                  {isTheaterPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  <span>{isTheaterPlaying ? 'Jeda Narasi' : 'Mulai Narasi Audio'}</span>
                </button>
              </div>

              {/* Animated Geometry Stage Centerpiece */}
              <div className="flex items-center justify-center">
                {currentVideo.shapeId ? (
                  <div className="w-48 h-48 sm:w-60 sm:h-60 bg-white/10 rounded-3xl p-4 backdrop-blur-md border border-white/20">
                    <InteractiveShapeSvg shape={currentVideo.shapeId} className="w-full h-full" />
                  </div>
                ) : (
                  <div className="text-center space-y-3">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-4xl">■</span>
                      <span className="text-4xl">▬</span>
                      <span className="text-4xl">▲</span>
                      <span className="text-4xl">●</span>
                      <span className="text-4xl">⬭</span>
                      <span className="text-4xl">⏢</span>
                    </div>
                    <p className="text-sm text-amber-200 font-semibold max-w-md">
                      "Semua bangun datar memiliki keunikan masing-masing! Amati sisi dan sudutnya bersama GEO!"
                    </p>
                  </div>
                )}
              </div>

              {/* Live Narrative Ticker */}
              <div className="w-full bg-black/60 p-3 rounded-xl border border-white/10 text-center">
                <p className="text-xs sm:text-sm text-amber-100 font-medium">
                  {currentVideo.description}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Video Key Takeaway Summary */}
        <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">
            Rangkuman Materi Penting dari Video Ini:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {currentVideo.narrativePoints.map((pt, pIdx) => (
              <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* MANDATORY FEATURE: Pertanyaan Setelah Menonton */}
        <div className="pt-4 border-t border-slate-200 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-500 text-white flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">
                Pertanyaan Setelah Menonton (Cek Pemahaman)
              </h4>
              <p className="text-xs text-slate-500">
                Uji ingatanmu setelah menonton video di atas!
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {currentVideo.postQuestions.map((pq, qIdx) => {
              const isSubmitted = submittedAnswers[qIdx];
              const userAns = selectedAnswers[qIdx];
              const isCorrectAns = userAns === pq.correctIndex;

              return (
                <div
                  key={qIdx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3"
                >
                  <p className="text-sm font-bold text-slate-900">
                    {qIdx + 1}. {pq.question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {pq.options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => handleAnswerQuestion(qIdx, oIdx)}
                        disabled={isSubmitted}
                        className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold border-2 transition-all text-left ${
                          userAns === oIdx
                            ? isSubmitted
                              ? oIdx === pq.correctIndex
                                ? 'bg-emerald-500 text-white border-emerald-600'
                                : 'bg-rose-500 text-white border-rose-600'
                              : 'bg-amber-500 text-white border-amber-600'
                            : isSubmitted && oIdx === pq.correctIndex
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-400'
                            : 'bg-white hover:bg-amber-50 text-slate-700 border-slate-200'
                        }`}
                      >
                        <span className="font-bold mr-1.5">{String.fromCharCode(65 + oIdx)}.</span>
                        <span>{opt}</span>
                      </button>
                    ))}
                  </div>

                  {!isSubmitted ? (
                    <button
                      onClick={() => handleSubmitQuestion(qIdx)}
                      disabled={userAns === undefined}
                      className="px-4 py-1.5 bg-amber-500 hover:bg-amber-600 disabled:bg-slate-200 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
                    >
                      Kunci Jawaban Pertanyaan {qIdx + 1}
                    </button>
                  ) : (
                    <div className={`p-3 rounded-xl text-xs ${
                      isCorrectAns ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' : 'bg-amber-100 text-amber-900 border border-amber-300'
                    }`}>
                      <strong>{isCorrectAns ? 'Jawaban Benar! ' : 'Kurang Tepat. '}</strong>
                      {pq.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Return to learning material button */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={() => {
              sound.playClick();
              onNavigate('belajar');
            }}
            className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-xl transition-colors border border-amber-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Materi Belajar</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onNavigate('game1');
            }}
            className="flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow transition-colors"
          >
            <span>Lanjut ke Game 1: Tebak Bentuk</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
