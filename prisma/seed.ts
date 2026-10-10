import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const experiences = [
    { title: 'Creator Digital', company: 'Pondok Pesantren Daarul Jalal', description: 'Bertanggung jawab dalam pengelolaan konten digital, desain grafis, dan publikasi media sosial untuk kebutuhan pondok pesantren.' },
    { title: 'Operator', company: 'Pondok Pesantren Daarul Jalal', description: 'Menangani urusan administrasi, pengelolaan data santri, dan operasional teknis harian di lingkungan pondok pesantren.' },
    { title: 'Manajemen Pendakian Gunung', company: 'Freelance', description: 'Berpengalaman dalam mengorganisir, merencanakan, dan mengelola kegiatan pendakian gunung, mencakup penyediaan logistik, pemetaan rute, dan manajemen keselamatan tim.' },
    { title: 'Jasa Desain & Joki Tugas', company: 'Freelance', description: 'Menerima jasa desain grafis (spanduk, poster, undangan digital) serta membantu penyelesaian tugas akademik (joki tugas kuliah, makalah, skripsi).' },
  ];
  const portfolios = [
    { title: 'Typography 01', category: 'Typography', image: '/images/typography/typography%2001.jpeg', aspect: 'aspect-[4/5]' },
    { title: 'Typography 02', category: 'Typography', image: '/images/typography/typography%2002.jpeg', aspect: 'aspect-[3/4]' },
    { title: 'Typography 03', category: 'Typography', image: '/images/typography/typography%2003.jpeg', aspect: 'aspect-square' },
    { title: 'Typography 04', category: 'Typography', image: '/images/typography/typography%2004.jpeg', aspect: 'aspect-[4/5]' },
    { title: 'Typography 05', category: 'Typography', image: '/images/typography/typography%2005.jpeg', aspect: 'aspect-[3/4]' },
    { title: 'Typography 06', category: 'Typography', image: '/images/typography/typography%2006.jpeg', aspect: 'aspect-[4/5]' },
  ];
  const services = [
    { title: 'Tugas Kuliah & Skripsi', description: 'Jasa pembuatan skripsi, makalah, jurnal, presentasi, dan tugas akademik lainnya secara terstruktur dan rapi.', icon: 'BookOpen' },
    { title: 'Undangan Digital', description: 'Desain website undangan pernikahan atau acara spesial yang elegan, responsif, dan siap disebar ke tamu undangan.', icon: 'MonitorSmartphone' },
    { title: 'Pembuatan CV / Resume', description: 'Jasa merapikan dan mendesain Curriculum Vitae yang profesional, baik format ATS-friendly maupun format desain kreatif.', icon: 'FileText' },
    { title: 'Jasa Desain Visual', description: 'Menerima jasa pembuatan poster, logo, banner, konten sosial media, dan berbagai kebutuhan desain grafis lainnya.', icon: 'Palette' },
  ];
  const skills = [
    ['Laravel', 'FaLaravel'], ['PHP', 'FaPhp'], ['MySQL', 'SiMysql'], ['Microsoft Word', 'FaFileWord'],
    ['Microsoft Excel', 'FaFileExcel'], ['Pixellab', 'FaPaintBrush'], ['CorelDRAW', 'FaPenNib'], ['Canva', 'Palette'],
    ['CapCut', 'Scissors'], ['Fotografer', 'Camera'], ['Adobe Lightroom', 'Aperture'], ['Snapseed', 'SlidersHorizontal'],
  ];
  if (await prisma.experience.count() === 0) await prisma.experience.createMany({ data: experiences.map((item, order) => ({ ...item, order })) });
  if (await prisma.portfolio.count() === 0) await prisma.portfolio.createMany({ data: portfolios.map((item, order) => ({ ...item, order })) });
  if (await prisma.service.count() === 0) await prisma.service.createMany({ data: services.map((item, order) => ({ ...item, order })) });
  if (await prisma.skill.count() === 0) await prisma.skill.createMany({ data: skills.map(([name, icon], order) => ({ name, icon, order, highlight: name === 'Microsoft Word' })) });
  if (await prisma.playlist.count() === 0) await prisma.playlist.createMany({ data: [
    { spotifyId: '18khva2AzYg9gczkDLRmZe', title: 'Bob Marley', subtitle: 'Reggae Classics', color: 'from-yellow-500/20 to-green-600/10', glow: 'rgba(234,179,8,0.3)', order: 0 },
    { spotifyId: '4xscepJB6tPFswikqLg52R', title: 'Alpha Blondy', subtitle: 'African Reggae', color: 'from-orange-500/20 to-red-600/10', glow: 'rgba(249,115,22,0.3)', order: 1 },
  ] });
  if (await prisma.socialLink.count() === 0) await prisma.socialLink.createMany({ data: [
    { href: 'https://github.com/genyot', label: 'GitHub', icon: 'FaGithub', order: 0 },
    { href: 'https://www.linkedin.com/in/muhammad-ridho-ramdene-4b40663ba', label: 'LinkedIn', icon: 'FaLinkedin', order: 1 },
    { href: 'https://www.instagram.com/g3ny0t', label: 'Instagram', icon: 'FaInstagram', order: 2 },
    { href: 'https://wa.me/+6281917320266', label: 'WhatsApp', icon: 'FaWhatsapp', order: 3 },
    { href: 'https://pin.it/4R3TYSukt', label: 'Pinterest', icon: 'FaPinterest', order: 4 },
    { href: 'https://www.facebook.com/ridho.ramdana.37', label: 'Facebook', icon: 'FaFacebook', order: 5 },
    { href: 'https://t.me/g3nyot', label: 'Telegram', icon: 'FaTelegram', order: 6 },
    { href: 'https://www.threads.com/@4p0f4s1s', label: 'Threads', icon: 'FaThreads', order: 7 },
    { href: 'https://www.tiktok.com/@apofasis', label: 'TikTok', icon: 'FaTiktok', order: 8 },
  ] });
  await prisma.siteProfile.upsert({ where: { id: 'main' }, create: { id: 'main', name: 'Muhammad Rido Ramdene', title: 'S1 Sistem Informasi', bio: 'Saya Muhammad Ridho Ramdene, fresh graduate Sistem Informasi dengan minat di web development, UI design, dan karya digital kreatif.', photo: '/images/profile.jpg', email: 'ridhoramdana985@gmail.com', phone: '+62 819-1732-0266', whatsappUrl: 'https://wa.me/+6281917320266' }, update: {} });
}

main().finally(() => prisma.$disconnect());
