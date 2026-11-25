import React, { useState, useEffect } from 'react';
import {
  UserCheck,
  Edit3,
  Save,
  RotateCcw,
  Layers,
  Cpu,
  GraduationCap,
  BookOpen,
  CheckCircle2,
  ArrowLeft,
  Compass
} from 'lucide-react';
import { ActivePage, CreatorProfile } from '../../types';
import { GeoMascot } from '../GeoMascot';
import { sound } from '../../utils/audio';

interface ProfilPembuatProps {
  onNavigate: (page: ActivePage) => void;
}

export const ProfilPembuatPage: React.FC<ProfilPembuatProps> = ({ onNavigate }) => {
  const defaultProfile: CreatorProfile = {
    nama: 'Setyawan Eko Nugroho, S.Pd. & tim digitalisasi SD Gonggang 2',
    nim: 'Tim Pengembang & Digitalisasi',
    prodi: 'Pendidikan Guru Sekolah Dasar (PGSD)',
    perguruanTinggi: 'Fasilitator Pembelajaran Digital',
    satuanPendidikan: 'SDN Gonggang 2',
    tahun: '2026',
    deskripsi: 'Multimedia Pembelajaran Interaktif (MPI) ini dikembangkan oleh Setyawan Eko Nugroho, S.Pd. bersama tim digitalisasi SDN Gonggang 2 untuk mendukung pembelajaran matematika berdiferensiasi pada materi geometri bangun datar sekolah dasar berbasis kerangka TPACK.'
  };

  const [profile, setProfile] = useState<CreatorProfile>(defaultProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [savedMessage, setSavedMessage] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('geo_creator_profile');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.nama.includes('Pengembang Media Pembelajaran')) {
          setProfile(defaultProfile);
          localStorage.setItem('geo_creator_profile', JSON.stringify(defaultProfile));
        } else {
          setProfile(parsed);
        }
      } else {
        localStorage.setItem('geo_creator_profile', JSON.stringify(defaultProfile));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSave = () => {
    sound.playCorrect();
    try {
      localStorage.setItem('geo_creator_profile', JSON.stringify(profile));
    } catch {
      // ignore
    }
    setIsEditing(false);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  const handleReset = () => {
    sound.playClick();
    setProfile(defaultProfile);
    try {
      localStorage.removeItem('geo_creator_profile');
    } catch {
      // ignore
    }
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <GeoMascot
        message="Halaman ini berisi identitas pengembang media dan integrasi kerangka TPACK (Technological, Pedagogical, and Content Knowledge) yang dirancang khusus untuk pembelajaran bermakna anak kelas II SD!"
        mood="talk"
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-amber-200 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">MODUL 11 · IDENTITAS & KONSEPTUAL</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-950 flex items-center gap-2">
            <UserCheck className="w-7 h-7 text-slate-700" />
            <span>Profil Pengembang & Integrasi TPACK</span>
          </h2>
        </div>

        <div className="flex items-center gap-2">
          {!isEditing ? (
            <button
              onClick={() => {
                sound.playClick();
                setIsEditing(true);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white rounded-xl transition-colors shadow-xs"
            >
              <Edit3 className="w-4 h-4" />
              <span>Edit Data Pengembang</span>
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Perubahan</span>
            </button>
          )}

          <button
            onClick={() => {
              sound.playClick();
              onNavigate('menu');
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-xl transition-colors border border-amber-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Menu Utama</span>
          </button>
        </div>
      </div>

      {savedMessage && (
        <div className="p-3 bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-bold rounded-2xl text-center">
          ✓ Data profil pengembang berhasil diperbarui dan disimpan ke memori aplikasi!
        </div>
      )}

      {/* Profile Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-300 shadow-md space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Kartu Identitas Pengembang Media
              </h3>
              <p className="text-xs text-slate-500">
                Informasi otentik pengembang multimedia pembelajaran berbasis web
              </p>
            </div>
          </div>
          <span className="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-900 rounded-full border border-amber-300">
            Tahun {profile.tahun}
          </span>
        </div>

        {/* Profile Fields (Editable) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Nama Lengkap Pembuat:
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.nama}
                onChange={(e) => setProfile({ ...profile, nama: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 font-semibold"
              />
            ) : (
              <p className="text-base font-bold text-slate-900 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                {profile.nama}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              NIM / NIP:
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.nim}
                onChange={(e) => setProfile({ ...profile, nim: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 font-semibold"
              />
            ) : (
              <p className="text-base font-bold text-slate-900 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                {profile.nim}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Program Studi:
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.prodi}
                onChange={(e) => setProfile({ ...profile, prodi: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 font-semibold"
              />
            ) : (
              <p className="text-base font-bold text-slate-900 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                {profile.prodi}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Perguruan Tinggi:
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.perguruanTinggi}
                onChange={(e) => setProfile({ ...profile, perguruanTinggi: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 font-semibold"
              />
            ) : (
              <p className="text-base font-bold text-slate-900 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                {profile.perguruanTinggi}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Satuan Pendidikan Sasaran:
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.satuanPendidikan}
                onChange={(e) => setProfile({ ...profile, satuanPendidikan: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 font-semibold"
              />
            ) : (
              <p className="text-base font-bold text-slate-900 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                {profile.satuanPendidikan}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Tahun Pembuatan:
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profile.tahun}
                onChange={(e) => setProfile({ ...profile, tahun: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 font-semibold"
              />
            ) : (
              <p className="text-base font-bold text-slate-900 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                {profile.tahun}
              </p>
            )}
          </div>
        </div>

        {isEditing && (
          <div className="pt-2 flex justify-end gap-2">
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl"
            >
              Reset ke Default
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl"
            >
              Simpan Data
            </button>
          </div>
        )}
      </div>

      {/* TPACK Integration Framework Showcase */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-300 shadow-md space-y-5">
        <div className="border-b border-slate-100 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">KERANGKA DESAIN PEMBELAJARAN</span>
          <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
            Integrasi TPACK (Technological, Pedagogical, and Content Knowledge)
          </h3>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            Penyusunan Multimedia Pembelajaran Interaktif ini mengadopsi kerangka kerja TPACK secara terstruktur untuk menjamin keefektifan pedagogis dan penguasaan konten matematika siswa kelas II SD.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* TK Card */}
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                <Cpu className="w-4 h-4" />
              </div>
              <h4 className="font-extrabold text-blue-900 text-sm">TK (Technological)</h4>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Pemanfaatan HTML5, CSS3, JavaScript, Web Audio API (BGM & SFX sintetis), Web Speech API (suara narasi id-ID), pemutar video YouTube/Canvas interaktif, galeri foto asli berlisensi bebas, animasi SVG, dan penyimpanan progres LocalStorage.
            </p>
          </div>

          {/* PK Card */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="font-extrabold text-amber-900 text-sm">PK (Pedagogical)</h4>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Prinsip <em>Gamified Learning</em> (belajar sambil bermain), pengamatan kontekstual benda konkret, demonstrasi interaktif sisi & sudut, scaffolding berjenjang, umpan balik positif instan, kuis terukur, serta evaluasi diri dan refleksi perasaan.
            </p>
          </div>

          {/* CK Card */}
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                <BookOpen className="w-4 h-4" />
              </div>
              <h4 className="font-extrabold text-emerald-900 text-sm">CK (Content)</h4>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Materi Geometri Kelas II SD: Persegi, Persegi Panjang, Segitiga, Lingkaran, Oval, dan Trapesium. Ciri sederhana berdasarkan jenis garis pembatas (lurus atau lengkung), jumlah sisi, jumlah titik sudut, serta hubungan objek konkret di sekitar anak.
            </p>
          </div>
        </div>

        {/* Synthesis Box */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-400/10 to-orange-500/10 border border-amber-300">
          <h5 className="font-bold text-amber-950 text-xs sm:text-sm mb-1 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Sintesis Integrasi TPACK pada Aplikasi:
          </h5>
          <p className="text-xs text-slate-700 leading-relaxed">
            Teknologi foto asli dan video edukasi digunakan untuk membantu peserta didik usia 7–8 tahun mengonstruksi konsep geometri secara visual dari benda nyata. Tiga permainan edukasi digunakan untuk menerapkan konsep melalui tindakan langsung, sedangkan kuis otomatis dan lembar refleksi digunakan untuk mengevaluasi pemahaman secara komprehensif.
          </p>
        </div>
      </div>
    </div>
  );
};
