import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '1. Manakah di bawah ini yang merupakan ciri-ciri utama dari bangun datar PERSEGI?',
    options: [
      'Memiliki 4 sisi yang SEMUANYA sama panjang',
      'Hanya memiliki 3 sisi dan 3 sudut runcing',
      'Memiliki 1 garis lengkung dan tidak bersudut'
    ],
    correctIndex: 0,
    shapeType: 'persegi',
    svgFallbackType: 'catur',
    photoUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=600&q=75',
    explanation: 'Persegi adalah bangun datar yang memiliki 4 sisi dan SEMUA sisinya berukuran tepat sama panjang.'
  },
  {
    id: 2,
    question: '2. Bangun datar PERSEGI PANJANG memiliki ciri-ciri yaitu...',
    options: [
      'Keempat sisinya harus berbeda-beda panjangnya',
      'Sisi-sisi yang saling berhadapan memiliki ukuran sama panjang',
      'Tidak memiliki titik sudut sama sekali'
    ],
    correctIndex: 1,
    shapeType: 'persegi_panjang',
    svgFallbackType: 'buku',
    photoUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=75',
    explanation: 'Pada persegi panjang, sisi atas sama dengan sisi bawah, dan sisi kiri sama dengan sisi kanan (sisi berhadapan sama panjang).'
  },
  {
    id: 3,
    question: '3. Berapa banyak jumlah sisi garis lurus yang dimiliki oleh bangun datar SEGITIGA?',
    options: [
      '2 sisi',
      '3 sisi',
      '4 sisi'
    ],
    correctIndex: 1,
    shapeType: 'segitiga',
    svgFallbackType: 'pizza',
    photoUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=75',
    explanation: 'Segitiga dibentuk oleh tepat 3 sisi garis lurus yang saling terhubung.'
  },
  {
    id: 4,
    question: '4. Jam dinding di ruang tamu rumah memiliki bentuk bulat tanpa sudut tajam. Benda tersebut berbentuk...?',
    options: [
      'Persegi',
      'Lingkaran',
      'Trapesium'
    ],
    correctIndex: 1,
    shapeType: 'lingkaran',
    svgFallbackType: 'jam',
    photoUrl: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&q=75',
    explanation: 'Jam dinding bundar dibatasi oleh garis lengkung tertutup tanpa sudut, sehingga berbentuk lingkaran.'
  },
  {
    id: 5,
    question: '5. Ciri-ciri bangun datar OVAL yang membedakannya dari lingkaran adalah...',
    options: [
      'Bentuknya melengkung lonjong seperti bentuk sebutir telur',
      'Memiliki 4 sisi yang tegak lurus',
      'Memiliki 3 titik sudut yang sangat tajam'
    ],
    correctIndex: 0,
    shapeType: 'oval',
    svgFallbackType: 'telur',
    photoUrl: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=75',
    explanation: 'Oval adalah bangun lengkung tertutup yang bentuknya lonjong memanjang seperti telur ayam.'
  },
  {
    id: 6,
    question: '6. Ciri khas dari bangun TRAPESIUM adalah...',
    options: [
      'Memiliki sepasang sisi yang saling sejajar',
      'Tidak memiliki sisi lurus sama sekali',
      'Hanya memiliki 2 titik sudut'
    ],
    correctIndex: 0,
    shapeType: 'trapesium',
    svgFallbackType: 'kap_lampu',
    photoUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=75',
    explanation: 'Trapesium memiliki 4 sisi dan 4 titik sudut, dengan keistimewaan memiliki sepasang sisi yang sejajar.'
  },
  {
    id: 7,
    question: '7. Berapakah jumlah TITIK SUDUT yang dimiliki oleh bangun datar PERSEGI?',
    options: [
      '3 titik sudut',
      '4 titik sudut siku-siku',
      '0 titik sudut'
    ],
    correctIndex: 1,
    shapeType: 'persegi',
    svgFallbackType: 'catur',
    photoUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=600&q=75',
    explanation: 'Persegi memiliki 4 titik sudut siku-siku di setiap pojoknya.'
  },
  {
    id: 8,
    question: '8. Jika kamu melihat rambu lalu lintas peringatan bahaya di jalan raya, rambu tersebut memiliki... sisi garis lurus.',
    options: [
      '3 sisi (Segitiga)',
      '4 sisi (Persegi)',
      '1 sisi lengkung (Lingkaran)'
    ],
    correctIndex: 0,
    shapeType: 'segitiga',
    svgFallbackType: 'rambu',
    photoUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=75',
    explanation: 'Rambu peringatan lalu lintas berbentuk segitiga, yang memiliki 3 sisi garis lurus dan 3 titik sudut.'
  },
  {
    id: 9,
    question: '9. Manakah di bawah ini kelompok benda nyata yang semuanya berbentuk LINGKARAN?',
    options: [
      'Papan tulis, buku cerita, dan pintu rumah',
      'Roda sepeda, piring makan, dan uang koin',
      'Penggaris siku, potongan pizza, dan tenda'
    ],
    correctIndex: 1,
    shapeType: 'lingkaran',
    svgFallbackType: 'piring',
    photoUrl: 'https://images.unsplash.com/photo-1545874239-30867bd8f206?auto=format&fit=crop&w=600&q=75',
    explanation: 'Roda sepeda, piring makan, dan koin logam semuanya bundar dan merupakan contoh bangun lingkaran.'
  },
  {
    id: 10,
    question: '10. Apa perbedaan yang paling tepat antara PERSEGI dan PERSEGI PANJANG?',
    options: [
      'Persegi 4 sisinya sama panjang, sedangkan persegi panjang hanya sisi yang berhadapan yang sama panjang',
      'Persegi punya 3 sudut, sedangkan persegi panjang punya 4 sudut',
      'Persegi berbentuk bulat, sedangkan persegi panjang berbentuk lurus'
    ],
    correctIndex: 0,
    shapeType: 'persegi',
    svgFallbackType: 'ubin',
    photoUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=75',
    explanation: 'Hebat! Persegi memiliki 4 sisi kembar yang semuanya sama panjang, sedangkan persegi panjang memiliki pasangan sisi panjang dan pendek yang berhadapan.'
  }
];
