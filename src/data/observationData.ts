import { ObservationItem } from '../types';

export const OBSERVATION_ITEMS: ObservationItem[] = [
  {
    id: 'obs-1',
    bendaName: 'Buku Tulis Pelajaran',
    correctShape: 'persegi_panjang',
    correctShapeName: 'Persegi Panjang',
    imageUrl: '/src/assets/images/real_book_rectangle_1793925639382.jpg',
    svgFallbackType: 'buku',
    clue: 'Perhatikan sisi tegak dan sisi mendatarnya, panjangnya tidak sama kan?',
    explanation: 'Buku tulis memiliki 4 sisi dan 4 titik sudut. Sisi yang berhadapan sama panjang (sisi atas sama dengan sisi bawah, sisi kiri sama dengan sisi kanan). Karena itu, buku berbentuk persegi panjang!',
    sourceCredit: 'Dokumentasi Foto Asli Pembelajaran'
  },
  {
    id: 'obs-2',
    bendaName: 'Jam Dinding Bundar',
    correctShape: 'lingkaran',
    correctShapeName: 'Lingkaran',
    imageUrl: '/src/assets/images/real_clock_circle_1793925621166.jpg',
    svgFallbackType: 'jam',
    clue: 'Raba tepinya, apakah ada pojok yang tajam atau sudut runcing?',
    explanation: 'Jam dinding memiliki garis lengkung tertutup yang melingkar sempurna dan sama sekali tidak memiliki titik sudut (0 titik sudut). Jadi jam dinding berbentuk lingkaran!',
    sourceCredit: 'Dokumentasi Foto Asli Pembelajaran'
  },
  {
    id: 'obs-3',
    bendaName: 'Papan Catur & Ubin Lantai',
    correctShape: 'persegi',
    correctShapeName: 'Persegi',
    imageUrl: '/src/assets/images/real_chessboard_square_1793925620983.jpg',
    svgFallbackType: 'catur',
    clue: 'Coba ukur keempat sisinya, semuanya berukuran sama persis!',
    explanation: 'Papan catur dan ubin lantai memiliki 4 sisi yang sama panjang dan 4 titik sudut siku-siku. Karena keempat sisinya sama, maka benda ini berbentuk persegi!',
    sourceCredit: 'Dokumentasi Foto Asli Pembelajaran'
  },
  {
    id: 'obs-4',
    bendaName: 'Telur Ayam Segar',
    correctShape: 'oval',
    correctShapeName: 'Oval (Lonjong)',
    imageUrl: '/src/assets/images/real_egg_oval_1793925622798.jpg',
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
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1603199506695-17739e4a3073?auto=format&fit=crop&w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    svgFallbackType: 'papantulis',
    clue: 'Papan tulis membentang lebar ke samping dengan 4 sudut pojok.',
    explanation: 'Papan tulis kelas memiliki 4 sisi garis lurus dengan sisi atas-bawah yang lebih panjang daripada sisi kiri-kanan. Bentuk ini adalah persegi panjang!',
    sourceCredit: 'Unsplash - School Classroom'
  },
  {
    id: 'obs-10',
    bendaName: 'Kap Lampu Gantung / Pot Trapesium',
    correctShape: 'trapesium',
    correctShapeName: 'Trapesium',
    imageUrl: '/src/assets/images/real_lamp_trapezoid_1793925623048.jpg',
    svgFallbackType: 'kap_lampu',
    clue: 'Perhatikan sisi atas dan bawahnya yang sejajar, tapi panjangnya berbeda!',
    explanation: 'Benda ini memiliki 4 sisi dengan sepasang sisi yang sejajar (sisi atas lebih sempit dan sisi bawah lebih lebar), serta 4 titik sudut. Bentuk ini adalah trapesium!',
    sourceCredit: 'Dokumentasi Foto Asli Pembelajaran'
  }
];
