import { VideoLesson } from '../types';

export const VIDEO_LESSONS: VideoLesson[] = [
  {
    id: 'vid-1',
    title: 'Mengenal Bangun Datar di Sekitar Kita',
    duration: '04:15',
    description: 'Petualangan seru bersama GEO menjelajahi berbagai bentuk bangun datar yang ada di rumah, sekolah, dan jalan raya.',
    thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    defaultYoutubeId: 'EB2rOeSnheY', // Referensi resmi video pembelajaran: https://www.youtube.com/watch?v=EB2rOeSnheY
    narrativePoints: [
      'Bangun datar adalah bentuk bidang dua dimensi yang memiliki keliling dan luas.',
      'Ada bangun datar bersisi lurus seperti persegi, persegi panjang, segitiga, dan trapesium.',
      'Ada juga bangun datar bersisi lengkung seperti lingkaran dan oval.',
      'Semua benda di sekitar kita memiliki bentuk bangun datar tertentu.'
    ],
    postQuestions: [
      {
        question: 'Bangun datar manakah yang sisinya berupa garis lengkung tertutup dan tidak punya titik sudut?',
        options: ['Persegi', 'Lingkaran', 'Segitiga'],
        correctIndex: 1,
        explanation: 'Benar sekali! Lingkaran dibatasi oleh garis lengkung tertutup dan tidak memiliki titik sudut.'
      },
      {
        question: 'Berapa banyak titik sudut yang dimiliki oleh bangun segitiga?',
        options: ['3 titik sudut', '4 titik sudut', '0 titik sudut'],
        correctIndex: 0,
        explanation: 'Hebat! Segitiga memiliki tepat 3 titik sudut dan 3 sisi.'
      }
    ]
  },
  {
    id: 'vid-2',
    shapeId: 'persegi',
    title: 'Mengenal Persegi dan Persegi Panjang',
    duration: '03:45',
    description: 'Pelajari perbedaan penting antara persegi yang memiliki 4 sisi sama panjang dan persegi panjang yang sisi berhadapannya sama.',
    thumbnail: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    defaultYoutubeId: 'EB2rOeSnheY',
    narrativePoints: [
      'Persegi memiliki 4 sisi yang SEMUANYA sama panjang.',
      'Persegi panjang memiliki 4 sisi, di mana sisi yang berhadapan sama panjang.',
      'Keduanya sama-sama memiliki 4 titik sudut siku-siku.',
      'Contoh persegi: papan catur dan ubin lantai. Contoh persegi panjang: buku dan pintu.'
    ],
    postQuestions: [
      {
        question: 'Apa ciri khusus yang membedakan persegi dari persegi panjang?',
        options: ['Semua 4 sisinya sama panjang', 'Jumlah sudutnya ada 5', 'Sisinya melengkung'],
        correctIndex: 0,
        explanation: 'Tepat! Pada persegi, keempat sisinya memiliki panjang yang persis sama.'
      },
      {
        question: 'Pintu rumah dan buku tulis adalah contoh benda berbentuk apa?',
        options: ['Lingkaran', 'Persegi Panjang', 'Segitiga'],
        correctIndex: 1,
        explanation: 'Pintar! Buku tulis dan pintu memiliki 2 sisi panjang dan 2 sisi pendek, yaitu persegi panjang.'
      }
    ]
  },
  {
    id: 'vid-3',
    shapeId: 'segitiga',
    title: 'Mengenal Segitiga & Sudut Runcingnya',
    duration: '03:10',
    description: 'Menemukan bentuk segitiga pada penggaris, potongan pizza, rambu jalan, serta atap rumah yang kuat dan kokoh.',
    thumbnail: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    defaultYoutubeId: 'EB2rOeSnheY',
    narrativePoints: [
      'Segitiga adalah bangun datar dengan 3 sisi garis lurus.',
      'Memiliki 3 titik sudut.',
      'Merupakan struktur yang sangat kokoh dalam konstruksi atap dan jembatan.',
      'Contoh nyata: penggaris segitiga, rambu peringatan, dan potongan pizza.'
    ],
    postQuestions: [
      {
        question: 'Berapa jumlah sisi pada sebuah segitiga?',
        options: ['2 sisi', '3 sisi', '4 sisi'],
        correctIndex: 1,
        explanation: 'Luar biasa! Segitiga selalu memiliki tepat 3 sisi garis lurus.'
      },
      {
        question: 'Rambu lalu lintas tanda bahaya biasanya dibuat berbentuk apa?',
        options: ['Segitiga', 'Oval', 'Persegi'],
        correctIndex: 0,
        explanation: 'Tepat sekali! Rambu peringatan di jalan dibuat segitiga berwarna kuning-merah agar mudah terlihat.'
      }
    ]
  },
  {
    id: 'vid-4',
    shapeId: 'lingkaran',
    title: 'Mengenal Lingkaran yang Bulat Sempurna',
    duration: '03:30',
    description: 'Mengapa roda sepeda dibuat berbentuk lingkaran? Temukan rahasia bentuk lingkaran yang tidak memiliki sudut sama sekali.',
    thumbnail: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80',
    defaultYoutubeId: 'EB2rOeSnheY',
    narrativePoints: [
      'Lingkaran dibatasi oleh 1 garis lengkung tertutup rapat.',
      'Lingkaran sama sekali TIDAK memiliki titik sudut (sudut = 0).',
      'Jarak dari titik pusat ke seluruh tepinya selalu sama panjang.',
      'Sangat mudah menggelinding, oleh karena itu digunakan untuk roda dan bola.'
    ],
    postQuestions: [
      {
        question: 'Apakah lingkaran memiliki titik sudut?',
        options: ['Punya 1 titik sudut', 'Punya 4 titik sudut', 'Tidak memiliki titik sudut (0)'],
        correctIndex: 2,
        explanation: 'Benar! Lingkaran bulat mulus dan sama sekali tidak memiliki sudut tajam.'
      },
      {
        question: 'Mengapa roda kendaraan dibuat berbentuk lingkaran?',
        options: ['Agar tidak bisa berputar', 'Agar bisa menggelinding mulus', 'Agar bisa berdiri tegak'],
        correctIndex: 1,
        explanation: 'Hebat! Karena tidak memiliki sudut yang mengganjal, lingkaran dapat menggelinding dengan sangat lancar.'
      }
    ]
  },
  {
    id: 'vid-5',
    shapeId: 'oval',
    title: 'Mengenal Bentuk Oval atau Lonjong',
    duration: '02:50',
    description: 'Lihatlah keindahan bentuk oval pada sebutir telur ayam, cermin rias yang anggun, dan buah semangka lonjong.',
    thumbnail: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=800&q=80',
    defaultYoutubeId: 'EB2rOeSnheY',
    narrativePoints: [
      'Oval sering disebut juga bentuk lonjong.',
      'Sama seperti lingkaran, oval dibatasi oleh garis lengkung tertutup tanpa titik sudut.',
      'Perbedaannya: oval lebih memanjang pada salah satu sisinya seperti telur.',
      'Contoh: telur ayam, cermin oval, buah semangka lonjong, dan bola rugbi.'
    ],
    postQuestions: [
      {
        question: 'Benda alami di dapur yang paling terkenal berbentuk oval adalah...?',
        options: ['Telur ayam', 'Kotak susu', 'Piring makan'],
        correctIndex: 0,
        explanation: 'Pintar! Telur ayam adalah contoh paling nyata dari bentuk oval (lonjong).'
      },
      {
        question: 'Berapakah jumlah titik sudut pada bangun oval?',
        options: ['0 (tidak ada)', '2 titik sudut', '4 titik sudut'],
        correctIndex: 0,
        explanation: 'Benar! Garis lengkung pada oval tidak memiliki titik sudut sama sekali.'
      }
    ]
  },
  {
    id: 'vid-6',
    shapeId: 'trapesium',
    title: 'Mengenal Trapesium dan Sisi Sejajarnya',
    duration: '03:20',
    description: 'Mengenal keunikan trapesium dengan sepasang sisi yang sejajar, terlihat pada kap lampu gantung dan tas jinjing.',
    thumbnail: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    defaultYoutubeId: 'EB2rOeSnheY',
    narrativePoints: [
      'Trapesium adalah bangun datar segi empat dengan 4 sisi dan 4 titik sudut.',
      'Ciri utamanya: memiliki TEPAT SEPASANG sisi yang sejajar (atas dan bawah).',
      'Dua sisi lainnya tidak sejajar.',
      'Contoh: kap lampu meja, tas jinjing trapesium, dan pot tanaman hias.'
    ],
    postQuestions: [
      {
        question: 'Apa ciri khas bangun trapesium yang membedakannya dari bangun datar lainnya?',
        options: ['Memiliki sepasang sisi yang sejajar', 'Memiliki 3 titik sudut', 'Berbentuk melingkar lonjong'],
        correctIndex: 0,
        explanation: 'Tepat sekali! Trapesium memiliki sepasang sisi berhadapan yang sejajar tetapi panjangnya bisa berbeda.'
      },
      {
        question: 'Berapa banyak titik sudut pada bangun datar trapesium?',
        options: ['3 titik sudut', '4 titik sudut', '0 titik sudut'],
        correctIndex: 1,
        explanation: 'Bagus sekali! Trapesium adalah bangun segi empat, sehingga memiliki 4 titik sudut.'
      }
    ]
  }
];
