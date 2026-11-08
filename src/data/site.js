export const site = {
  brand: 'Korean Class',
  hangulMark: '한국어',
  tutor: {
    name: 'Asatullayeva Mohinur',
    namePlaceholder: 'Repetitor ismini shu yerga yozing',
    age: 15,
    photo: '/tutor-photo.png',
    photoNote: '',
    experienceYearsLabel: 'O‘rganish tajribasi',
    experienceYears: 'Tajriba muddatini yozing',
    bio: 'Koreys tilini o‘rganishni sevib boshlagan, tengdoshlariga tushuntirishni yoqtiradigan yosh repetitor. Darslarda murakkab mavzularni sodda tilda, qadam-baqadam ochib beraman. Maqsadim — o‘quvchi TOPIK formatini tushunib, ishonch bilan imtihonga kirishi.',
    methodology: [
      'Har bir o‘quvchining darajasiga mos individual reja',
      'Yangi so‘z va grammatikani hayotiy misollar orqali tushuntirish',
      'TOPIK formatidagi tinglash, o‘qish va (II darajada) yozish mashqlari',
      'Xatolar ustida tinch, samimiy va izchil ishlash',
    ],
    certificates: [
      {
        title: 'TOPIK natijasi',
        detail: 'Daraja, ball va yilni shu yerga yozing',
      },
      {
        title: 'Sertifikat / hujjat',
        detail: 'Haqiqiy sertifikat nomini qo‘shing — o‘ylab chiqilgan yutuqlar yo‘q',
      },
    ],
  },
  courses: [
    {
      id: 'topik-1',
      hangul: '초급',
      title: 'TOPIK I',
      level: '1–2급',
      summary:
        'Koreys tilini noldan yoki boshlang‘ich darajadan mustahkamlash, asosiy grammatika va lug‘at, imtihon formati bilan tanishish.',
      format: 'Individual darslar · Offline',
      duration: 'Davomiyligi: individual reja asosida (shu yerga aniq muddatni yozing)',
      price: 'Bepul',
      accent: 'from-rose-100 to-lavender',
      modules: [
        { kr: '듣기', uz: 'Tinglab tushunish' },
        { kr: '읽기', uz: 'O‘qib tushunish' },
        { kr: '어휘', uz: 'Lug‘at boyligi' },
        { kr: '문법', uz: 'Grammatika' },
        { kr: '모의고사', uz: 'TOPIK formatidagi sinov testlari' },
      ],
    },
  ],
  contact: {
    telegram: 'https://t.me/asatullayeva_mohinur001',
    telegramLabel: '@asatullayeva_mohinur001',
  },
}

export const navLinks = [
  { href: '#bosh', label: 'Bosh sahifa' },
  { href: '#kurslar', label: 'Kurslar' },
  { href: '#afzalliklar', label: 'Afzalliklar' },
  { href: '#aloqa', label: 'Bog‘lanish' },
]
