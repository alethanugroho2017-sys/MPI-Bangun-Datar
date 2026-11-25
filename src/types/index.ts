export type ShapeType = 'persegi' | 'persegi_panjang' | 'segitiga' | 'lingkaran' | 'oval' | 'trapesium';

export interface RealPhotoItem {
  id: string;
  title: string;
  shape: ShapeType;
  shapeName: string;
  imageUrl: string;
  altText: string;
  explanation: string;
  sourceCredit: string;
  license: string;
  svgFallbackType: 'ubin' | 'catur' | 'saputangan' | 'buku' | 'pintu' | 'papantulis' | 'penggaris_segitiga' | 'rambu' | 'pizza' | 'jam' | 'roda' | 'piring' | 'telur' | 'cermin_oval' | 'semangka' | 'kap_lampu' | 'tas_trapesium' | 'pot_trapesium' | 'uang' | 'koin';
}

export interface ShapeDetail {
  id: ShapeType;
  name: string;
  badgeColor: string;
  themeColor: string;
  lightBg: string;
  borderColor: string;
  shadowColor: string;
  jumlahSisi: number;
  jumlahSudut: number;
  sisiLabel: string;
  sudutLabel: string;
  ciriCiri: string[];
  deskripsiSederhana: string;
  audioNarasi: string;
  geoTip: string;
  contohBenda: string[];
  realPhotos: RealPhotoItem[];
}

export interface ObservationItem {
  id: string;
  bendaName: string;
  correctShape: ShapeType;
  correctShapeName: string;
  imageUrl: string;
  svgFallbackType: RealPhotoItem['svgFallbackType'];
  explanation: string;
  clue: string;
  sourceCredit: string;
}

export interface VideoLesson {
  id: string;
  shapeId?: ShapeType;
  title: string;
  duration: string;
  description: string;
  thumbnail: string;
  defaultYoutubeId: string;
  narrativePoints: string[];
  postQuestions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  shapeType?: ShapeType;
  photoUrl?: string;
  svgFallbackType?: RealPhotoItem['svgFallbackType'];
}

export interface Game1Question {
  id: string;
  title: string;
  imageUrl: string;
  svgFallbackType: RealPhotoItem['svgFallbackType'];
  correctShape: ShapeType;
  options: { label: string; shape: ShapeType }[];
  hint: string;
  funFact: string;
}

export interface Game2Pair {
  id: string;
  bendaName: string;
  shapeType: ShapeType;
  shapeName: string;
  imageUrl: string;
  svgFallbackType: RealPhotoItem['svgFallbackType'];
}

export interface Game3Object {
  id: string;
  name: string;
  shapeType: ShapeType;
  shapeName: string;
  imageUrl: string;
  svgFallbackType: RealPhotoItem['svgFallbackType'];
}

export interface CreatorProfile {
  nama: string;
  nim: string;
  prodi: string;
  perguruanTinggi: string;
  satuanPendidikan: string;
  tahun: string;
  deskripsi: string;
}

export type ActivePage = 
  | 'home'
  | 'menu'
  | 'petunjuk'
  | 'tujuan'
  | 'belajar'
  | 'mengamati'
  | 'video'
  | 'game1'
  | 'game2'
  | 'game3'
  | 'kuis'
  | 'hasil'
  | 'profil';
