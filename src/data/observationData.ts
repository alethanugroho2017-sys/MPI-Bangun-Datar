import { ObservationItem } from '../types';

export const OBSERVATION_ITEMS: ObservationItem[] = [
  {
    id: 'obs-1',
    bendaName: 'Buku Tulis Pelajaran',
    correctShape: 'persegi_panjang',
    correctShapeName: 'Persegi Panjang',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'buku',
    clue: 'Perhatikan sisi tegak dan sisi mendatarnya, panjangnya tidak sama kan?',
    explanation: 'Buku tulis memiliki 4 sisi dan 4 titik sudut. Sisi yang berhadapan sama panjang (sisi atas sama dengan sisi bawah, sisi kiri sama dengan sisi kanan). Karena itu, buku berbentuk persegi panjang!',
    sourceCredit: 'Unsplash - Foto Benda Nyata'
  },
  {
    id: 'obs-2',
    bendaName: 'Jam Dinding Bundar',
    correctShape: 'lingkaran',
    correctShapeName: 'Lingkaran',
    imageUrl: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'jam',
    clue: 'Raba tepinya, apakah ada pojok yang tajam atau sudut runcing?',
    explanation: 'Jam dinding memiliki garis lengkung tertutup yang melingkar sempurna dan sama sekali tidak memiliki titik sudut (0 titik sudut). Jadi jam dinding berbentuk lingkaran!',
    sourceCredit: 'Unsplash - Still Life Objects'
  },
  {
    id: 'obs-3',
    bendaName: 'Papan Catur Kayu',
    correctShape: 'persegi',
    correctShapeName: 'Persegi',
    imageUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'catur',
    clue: 'Coba ukur keempat sisinya, semuanya berukuran sama persis!',
    explanation: 'Papan catur memiliki 4 sisi yang sama panjang dan 4 titik sudut siku-siku. Karena keempat sisinya sama, maka benda ini berbentuk persegi!',
    sourceCredit: 'Unsplash - Foto Benda Nyata'
  },
  {
    id: 'obs-4',
    bendaName: 'Telur Ayam Segar',
    correctShape: 'oval',
    correctShapeName: 'Oval (Lonjong)',
    imageUrl: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'telur',
    clue: 'Bentuknya melengkung halus tanpa sudut, tetapi tidak bulat bola melainkan lonjong.',
    explanation: 'Telur ayam memiliki garis tepi melengkung tertutup tanpa sudut, dengan salah satu bagian lebih memanjang. Bentuk melengkung lonjong seperti ini disebut oval!',
    sourceCredit: 'Unsplash - Natural Organic Food'
  },
  {
    id: 'obs-5',
    bendaName: 'Penggaris Segitiga Gambar',
    correctShape: 'segitiga',
    correctShapeName: 'Segitiga',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'penggaris_segitiga',
    clue: 'Ada berapa ujung runcing pada penggaris ini? Coba hitung bersama!',
    explanation: 'Penggaris ini dibatasi oleh 3 sisi garis lurus dan mempunyai tepat 3 titik sudut runcing. Maka penggaris ini tergolong bangun datar segitiga!',
    sourceCredit: 'Unsplash - Educational Tools'
  },
  {
    id: 'obs-6',
    bendaName: 'Piring Makan Keramik',
    correctShape: 'lingkaran',
    correctShapeName: 'Lingkaran',
    imageUrl: 'https://images.unsplash.com/photo-1545874239-30867bd8f206?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'piring',
    clue: 'Piring tidak memiliki sudut lancip, tepiannya melengkung halus.',
    explanation: 'Piring makan berbentuk bulat sempurna yang dibatasi satu garis lengkung tertutup tanpa titik sudut. Bentuk ini adalah lingkaran!',
    sourceCredit: 'Unsplash - Tableware Photography'
  },
  {
    id: 'obs-7',
    bendaName: 'Pintu Masuk Kayu',
    correctShape: 'persegi_panjang',
    correctShapeName: 'Persegi Panjang',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'pintu',
    clue: 'Pintu ini sangat tinggi ke atas dan memiliki 4 sudut siku-siku.',
    explanation: 'Pintu memiliki 4 sisi lurus dan 4 titik sudut. Sisi tegak kiri dan kanan sama tinggi, serta sisi atas dan bawah sama lebar. Bentuk ini adalah persegi panjang!',
    sourceCredit: 'Unsplash - Architecture & Living'
  },
  {
    id: 'obs-8',
    bendaName: 'Roda Sepeda Anak',
    correctShape: 'lingkaran',
    correctShapeName: 'Lingkaran',
    imageUrl: 'https://images.unsplash.com/photo-1635204764493-58955cb8e157?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'roda',
    clue: 'Benda ini bisa menggelinding dan berputar kencang tanpa terhenti sudut.',
    explanation: 'Roda sepeda tidak memiliki titik sudut sama sekali sehingga dapat berputar dengan mulus menggelinding di tanah. Bentuknya adalah lingkaran!',
    sourceCredit: 'Unsplash - Bicycle Life'
  },
  {
    id: 'obs-9',
    bendaName: 'Papan Tulis Kelas',
    correctShape: 'persegi_panjang',
    correctShapeName: 'Persegi Panjang',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'papantulis',
    clue: 'Papan tulis membentang lebar ke samping dengan 4 sudut pojok.',
    explanation: 'Papan tulis kelas memiliki 4 sisi garis lurus dengan sisi atas-bawah yang lebih panjang daripada sisi kiri-kanan. Bentuk ini adalah persegi panjang!',
    sourceCredit: 'Unsplash - School Classroom'
  },
  {
    id: 'obs-10',
    bendaName: 'Kap Lampu Gantung Trapesium',
    correctShape: 'trapesium',
    correctShapeName: 'Trapesium',
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=75',
    svgFallbackType: 'kap_lampu',
    clue: 'Perhatikan sisi atas dan bawahnya yang sejajar, tapi panjangnya berbeda!',
    explanation: 'Benda ini memiliki 4 sisi dengan sepasang sisi yang sejajar (sisi atas lebih sempit dan sisi bawah lebih lebar), serta 4 titik sudut. Bentuk ini adalah trapesium!',
    sourceCredit: 'Unsplash - Modern Design Interior'
  }
];
