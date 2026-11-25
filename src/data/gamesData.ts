import { Game1Question, Game2Pair, Game3Object } from '../types';

export const GAME1_QUESTIONS: Game1Question[] = [
  {
    id: 'g1-1',
    title: 'Papan Catur Kayu',
    imageUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'catur',
    correctShape: 'persegi',
    options: [
      { label: 'Persegi', shape: 'persegi' },
      { label: 'Persegi Panjang', shape: 'persegi_panjang' },
      { label: 'Segitiga', shape: 'segitiga' },
    ],
    hint: 'Keempat sisinya sama panjang lho!',
    funFact: 'Papan catur memiliki petak-petak kecil berbentuk persegi di dalamnya!'
  },
  {
    id: 'g1-2',
    title: 'Buku Tulis Catatan Siswa',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'buku',
    correctShape: 'persegi_panjang',
    options: [
      { label: 'Lingkaran', shape: 'lingkaran' },
      { label: 'Persegi Panjang', shape: 'persegi_panjang' },
      { label: 'Trapesium', shape: 'trapesium' },
    ],
    hint: 'Sisi atas dan bawahnya berhadapan sama panjang.',
    funFact: 'Buku tulismu sengaja dibuat persegi panjang agar pas ditaruh di dalam tas sekolah!'
  },
  {
    id: 'g1-3',
    title: 'Potongan Pizza Keju',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'pizza',
    correctShape: 'segitiga',
    options: [
      { label: 'Segitiga', shape: 'segitiga' },
      { label: 'Oval', shape: 'oval' },
      { label: 'Persegi', shape: 'persegi' },
    ],
    hint: 'Hitung ujung-ujungnya: ada satu, dua, tiga!',
    funFact: 'Sepotong pizza membentuk bangun segitiga dengan 3 sisi dan 3 titik sudut!'
  },
  {
    id: 'g1-4',
    title: 'Jam Dinding Bulat',
    imageUrl: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'jam',
    correctShape: 'lingkaran',
    options: [
      { label: 'Oval', shape: 'oval' },
      { label: 'Lingkaran', shape: 'lingkaran' },
      { label: 'Trapesium', shape: 'trapesium' },
    ],
    hint: 'Bentuknya melingkar mulus tanpa ada sudut yang menusuk.',
    funFact: 'Jam dinding dibuat lingkaran agar jarum jam dapat berputar 360 derajat dengan teratur!'
  },
  {
    id: 'g1-5',
    title: 'Telur Ayam Segar',
    imageUrl: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'telur',
    correctShape: 'oval',
    options: [
      { label: 'Persegi', shape: 'persegi' },
      { label: 'Lingkaran', shape: 'lingkaran' },
      { label: 'Oval', shape: 'oval' },
    ],
    hint: 'Melengkung halus tapi lonjong, mirip bentuk telur.',
    funFact: 'Bentuk lonjong pada telur melindunginya agar tidak mudah menggelinding jatuh dari sarang!'
  },
  {
    id: 'g1-6',
    title: 'Kap Lampu Meja Gantung',
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'kap_lampu',
    correctShape: 'trapesium',
    options: [
      { label: 'Trapesium', shape: 'trapesium' },
      { label: 'Segitiga', shape: 'segitiga' },
      { label: 'Persegi Panjang', shape: 'persegi_panjang' },
    ],
    hint: 'Sisi atas dan bawahnya lurus sejajar, sisi sampingnya miring.',
    funFact: 'Bentuk trapesium pada kap lampu membantu menyebarkan cahaya lampu ke seluruh meja belajarmu!'
  }
];

export const GAME2_PAIRS: Game2Pair[] = [
  {
    id: 'pair-ubin',
    bendaName: 'Papan Catur Kayu',
    shapeType: 'persegi',
    shapeName: 'Persegi',
    imageUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'catur',
  },
  {
    id: 'pair-buku',
    bendaName: 'Buku Tulis',
    shapeType: 'persegi_panjang',
    shapeName: 'Persegi Panjang',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'buku',
  },
  {
    id: 'pair-penggaris',
    bendaName: 'Potongan Pizza',
    shapeType: 'segitiga',
    shapeName: 'Segitiga',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'pizza',
  },
  {
    id: 'pair-jam',
    bendaName: 'Jam Dinding',
    shapeType: 'lingkaran',
    shapeName: 'Lingkaran',
    imageUrl: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'jam',
  },
  {
    id: 'pair-telur',
    bendaName: 'Telur Ayam',
    shapeType: 'oval',
    shapeName: 'Oval (Lonjong)',
    imageUrl: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'telur',
  },
  {
    id: 'pair-lampu',
    bendaName: 'Kap Lampu Meja',
    shapeType: 'trapesium',
    shapeName: 'Trapesium',
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'kap_lampu',
  }
];

export const GAME3_OBJECTS: Game3Object[] = [
  {
    id: 'g3-1',
    name: 'Papan Catur',
    shapeType: 'persegi',
    shapeName: 'Persegi',
    imageUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'catur',
  },
  {
    id: 'g3-2',
    name: 'Mainan Rubik',
    shapeType: 'persegi',
    shapeName: 'Persegi',
    imageUrl: 'https://images.unsplash.com/photo-1740119708658-436f57715c19?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'ubin',
  },
  {
    id: 'g3-3',
    name: 'Buku Tulis Siswa',
    shapeType: 'persegi_panjang',
    shapeName: 'Persegi Panjang',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'buku',
  },
  {
    id: 'g3-4',
    name: 'Pintu Kayu',
    shapeType: 'persegi_panjang',
    shapeName: 'Persegi Panjang',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'pintu',
  },
  {
    id: 'g3-5',
    name: 'Potongan Pizza',
    shapeType: 'segitiga',
    shapeName: 'Segitiga',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'pizza',
  },
  {
    id: 'g3-6',
    name: 'Rambu Bahaya',
    shapeType: 'segitiga',
    shapeName: 'Segitiga',
    imageUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'rambu',
  },
  {
    id: 'g3-7',
    name: 'Piring Makan',
    shapeType: 'lingkaran',
    shapeName: 'Lingkaran',
    imageUrl: 'https://images.unsplash.com/photo-1545874239-30867bd8f206?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'piring',
  },
  {
    id: 'g3-8',
    name: 'Jam Dinding Bulat',
    shapeType: 'lingkaran',
    shapeName: 'Lingkaran',
    imageUrl: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'jam',
  },
  {
    id: 'g3-9',
    name: 'Telur Ayam Alami',
    shapeType: 'oval',
    shapeName: 'Oval',
    imageUrl: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'telur',
  },
  {
    id: 'g3-10',
    name: 'Semangka Lonjong',
    shapeType: 'oval',
    shapeName: 'Oval',
    imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'semangka',
  },
  {
    id: 'g3-11',
    name: 'Kap Lampu Gantung',
    shapeType: 'trapesium',
    shapeName: 'Trapesium',
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'kap_lampu',
  },
  {
    id: 'g3-12',
    name: 'Pot Bunga Trapesium',
    shapeType: 'trapesium',
    shapeName: 'Trapesium',
    imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'pot_trapesium',
  }
];
