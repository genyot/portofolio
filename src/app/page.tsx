import Image from "next/image";
import DesignGallery from "@/components/DesignGallery";
import MusicPlayer from "@/components/MusicPlayer";
import { Mail, Phone, FileText, MonitorSmartphone, Palette, BookOpen, Camera, Scissors, Video } from "lucide-react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaLaravel,
  FaPhp,
  FaFileWord,
  FaFileExcel,
  FaPaintBrush,
  FaPenNib,
} from "react-icons/fa";
import {
  FaPinterest,
  FaFacebook,
  FaTelegram,
  FaThreads,
  FaTiktok,
} from "react-icons/fa6";
import { SiMysql } from "react-icons/si";

const skills = [
  { name: "Laravel", icon: FaLaravel, highlight: false },
  { name: "PHP", icon: FaPhp, highlight: false },
  { name: "MySQL", icon: SiMysql, highlight: false },
  { name: "Microsoft Word", icon: FaFileWord, highlight: true },
  { name: "Microsoft Excel", icon: FaFileExcel, highlight: false },
  { name: "Pixellab", icon: FaPaintBrush, highlight: false },
  { name: "CorelDRAW", icon: FaPenNib, highlight: false },
  { name: "Canva", icon: Palette, highlight: false },
  { name: "CapCut", icon: Scissors, highlight: false },
  { name: "Fotografer", icon: Camera, highlight: false },
];

const socials = [
  { href: "https://github.com/genyot", icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/muhammad-ridho-ramdene-4b40663ba", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/g3ny0t", icon: FaInstagram, label: "Instagram" },
  { href: "https://wa.me/+6281917320266", icon: FaWhatsapp, label: "WhatsApp" },
  { href: "https://pin.it/4R3TYSukt", icon: FaPinterest, label: "Pinterest" },
  { href: "https://www.facebook.com/ridho.ramdana.37", icon: FaFacebook, label: "Facebook" },
  { href: "https://t.me/g3nyot", icon: FaTelegram, label: "Telegram" },
  { href: "https://www.threads.com/@4p0f4s1s", icon: FaThreads, label: "Threads" },
  { href: "https://www.tiktok.com/@apofasis", icon: FaTiktok, label: "TikTok" },
];

const experiences = [
  {
    title: "Creator Digital",
    company: "Pondok Pesantren Daarul Jalal",
    description: "Bertanggung jawab dalam pengelolaan konten digital, desain grafis, dan publikasi media sosial untuk kebutuhan pondok pesantren.",
  },
  {
    title: "Operator",
    company: "Pondok Pesantren Daarul Jalal",
    description: "Menangani urusan administrasi, pengelolaan data santri, dan operasional teknis harian di lingkungan pondok pesantren.",
  },
  {
    title: "Manajemen Pendakian Gunung",
    company: "Freelance",
    description: "Berpengalaman dalam mengorganisir, merencanakan, dan mengelola kegiatan pendakian gunung, mencakup penyediaan logistik, pemetaan rute, dan manajemen keselamatan tim.",
  },
  {
    title: "Jasa Desain & Joki Tugas",
    company: "Freelance",
    description: "Menerima jasa desain grafis (spanduk, poster, undangan digital) serta membantu penyelesaian tugas akademik (joki tugas kuliah, makalah, skripsi).",
  },
];

const services = [
  {
    title: "Tugas Kuliah & Skripsi",
    description: "Jasa pembuatan skripsi, makalah, jurnal, presentasi, dan tugas akademik lainnya secara terstruktur dan rapi.",
    icon: BookOpen,
  },
  {
    title: "Undangan Digital",
    description: "Desain website undangan pernikahan atau acara spesial yang elegan, responsif, dan siap disebar ke tamu undangan.",
    icon: MonitorSmartphone,
  },
  {
    title: "Pembuatan CV / Resume",
    description: "Jasa merapikan dan mendesain Curriculum Vitae yang profesional, baik format ATS-friendly maupun format desain kreatif.",
    icon: FileText,
  },
  {
    title: "Jasa Desain Visual",
    description: "Menerima jasa pembuatan poster, logo, banner, konten sosial media, dan berbagai kebutuhan desain grafis lainnya.",
    icon: Palette,
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#music", label: "Music" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Jasa" },
  { href: "#sosial", label: "Sosial" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-cyan-500/30 selection:text-white relative">
      {/* Liquid Blobs Background */}
      <div className="liquid-bg-container">
        <div className="liquid-blob liquid-blob-1"></div>
        <div className="liquid-blob liquid-blob-2"></div>
        <div className="liquid-blob liquid-blob-3"></div>
      </div>

      {/* Navbar */}
      <nav className="glass-navbar sticky top-0 z-50 w-full px-5 py-4 md:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="#" className="animate-fade-up font-serif text-2xl font-bold text-white md:text-3xl">
            MR<span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="animate-fade-up animation-delay-100 hidden gap-8 text-sm font-medium text-gray-300 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-cyan-400 transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile: hapus social icons, ganti tombol contact */}
          <div className="flex items-center md:hidden">
            <a href="#contact" className="glass-button rounded-lg px-4 py-2 text-xs font-medium text-white">
              Contact
            </a>
          </div>
        </div>

        {/* Mobile: bottom nav links */}
        <div className="mt-3 flex justify-center gap-6 text-xs font-medium text-gray-400 md:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-cyan-400 transition-colors py-1">
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-10 pb-16 md:pt-20 md:pb-0">
        {/* Grid: selalu 2 kolom (kiri: teks, kanan: foto) */}
        <div className="grid grid-cols-2 items-center gap-4 md:gap-12">

          {/* Teks — kiri */}
          <div className="animate-fade-up text-left">
            <h1 className="font-serif text-2xl font-bold leading-tight sm:text-4xl md:text-6xl lg:text-7xl">
              <span className="text-base text-gray-400 sm:text-2xl md:text-5xl">I&apos;M </span>
              <br />
              Muhammad Rido Ramdene
            </h1>
            <p className="animate-fade-up animation-delay-100 mt-2 text-xs text-gray-400 sm:text-base md:mt-3 md:text-lg">
              S1 Sistem Informasi
            </p>
            <div className="animate-fade-up animation-delay-200 mt-4 flex flex-wrap gap-2 md:mt-6 md:gap-3">
              <a
                href="#contact"
                className="glass-button rounded-lg px-3 py-2 text-xs font-medium text-white sm:px-6 sm:py-3 sm:text-sm"
              >
                Contact Me
              </a>
              <a
                href="#portfolio"
                className="rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-400 sm:px-6 sm:py-3 sm:text-sm"
              >
                Karya
              </a>
            </div>

            {/* Social icons — hidden, pindah ke section sendiri */}
          </div>

          {/* Foto — kanan, dengan gradasi di belakang */}
          <div className="animate-fade-up animation-delay-200 flex justify-center md:justify-end">
            <div className="animate-float relative flex items-center justify-center">
              {/* Gradasi blob di belakang foto */}
              <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-gradient-to-br from-cyan-500/40 via-violet-500/30 to-pink-500/20 blur-2xl" />
              <div className="absolute inset-0 -z-10 scale-95 rounded-full bg-gradient-to-tr from-indigo-600/30 to-cyan-400/20 blur-xl" />

              <div className="relative h-36 w-36 overflow-hidden rounded-full border border-white/20 shadow-[0_0_30px_rgba(34,211,238,0.2)] sm:h-52 sm:w-52 md:h-[300px] md:w-[300px]">
                <Image
                  src="/images/profile.jpg"
                  alt="Foto profil"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 144px, (max-width: 768px) 208px, 300px"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-20 relative z-10 md:py-32">
        <div className="animate-fade-up">
          <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">About</h2>
          <div className="flex gap-5">
            <div className="mt-2 h-1 w-10 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] md:w-12" />
            <p className="text-sm leading-relaxed text-gray-300 md:text-base">
              I&apos;m Muhammad Ridho Ramdene, but you can call me <span className="font-medium text-cyan-400">Genyot</span>. I&apos;m a fresh graduate with a Bachelor&apos;s degree in Information Systems, with a strong interest in web development, UI design, and creative digital work.
              <br /><br />
              I enjoy turning ideas into something real, whether it&apos;s a website, a visual design, or a simple video project. I like experimenting with code, exploring new technologies, and using <span className="font-medium text-cyan-400">vibecoding</span> to bring ideas to life in a more creative and flexible way.
              <br /><br />
              Besides coding, I also enjoy designing and occasionally editing videos. I&apos;m always curious to learn new things, try different approaches, and improve through every project I work on.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-5 pb-20 relative z-10 md:pb-32">
        <h2 className="animate-fade-up mb-8 text-center font-serif text-3xl font-bold md:mb-12 md:text-left md:text-4xl">My Skills</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`glass-card group flex aspect-square animate-fade-up flex-col items-center justify-center gap-3 md:gap-4 ${
                  skill.highlight ? "ring-1 ring-cyan-400/50 bg-cyan-900/10" : ""
                }`}
                style={{ animationDelay: `${(i % 4) * 80}ms` }}
              >
                <Icon size={36} className={`transition-transform duration-500 group-hover:scale-110 md:text-5xl ${skill.highlight ? "text-cyan-400" : "text-gray-300"}`} />
                <span className="text-center text-xs font-medium leading-tight text-gray-200 px-1 md:text-sm">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Portfolio Header */}
      <div id="portfolio" className="pb-4 pt-16 text-center animate-fade-up relative z-10 md:pt-20">
        <h2 className="font-serif text-3xl font-bold md:text-4xl">Portfolio</h2>
        <div className="mt-3 flex justify-center gap-2 text-cyan-400">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          <span className="h-2 w-2 rounded-full bg-cyan-400/50" />
          <span className="h-2 w-2 rounded-full bg-cyan-400/30" />
          <span className="h-2 w-2 rounded-full bg-cyan-400/10" />
        </div>
      </div>

      <div className="animate-fade-up relative z-10">
        <DesignGallery />
      </div>

      <div id="music">
        <MusicPlayer />
      </div>

      {/* Experience Timeline */}
      <section id="experience" className="mx-auto max-w-4xl px-5 py-20 relative z-10 md:py-32">
        <h2 className="animate-fade-up mb-10 font-serif text-3xl font-bold md:mb-16 md:text-4xl">Experience</h2>
        <div className="space-y-6 md:space-y-10">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="glass-card animate-fade-up relative p-5 md:p-6"
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              {/* Colored left border accent */}
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-cyan-400/60 to-transparent" />

              <div className="mb-1 inline-block rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400">
                Experience
              </div>
              <h3 className="mt-2 text-lg font-bold text-white md:text-xl">{exp.title}</h3>
              <p className="mt-1 text-sm text-cyan-400">{exp.company}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 pb-20 relative z-10 md:pb-32">
        <div className="mb-10 animate-fade-up text-center md:mb-16 md:text-left">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Layanan Jasa</h2>
          <p className="mt-3 text-sm text-gray-400 md:text-base">Open jasa untuk berbagai kebutuhan tugas dan desain.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={i}
                className="glass-card animate-fade-up group relative p-6 md:p-8"
                style={{ animationDelay: `${(i % 4) * 100}ms` }}
              >
                <div className="mb-4 inline-flex rounded-xl bg-cyan-400/10 p-3 text-cyan-400 transition-transform duration-500 group-hover:scale-110 group-hover:bg-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.1)] md:mb-6 md:p-4">
                  <Icon size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-white md:mb-3 md:text-2xl">{svc.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
                  {svc.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Social Media Section */}
      <section id="sosial" className="mx-auto max-w-6xl px-5 pb-20 relative z-10 md:pb-32">
        <div className="mb-10 animate-fade-up text-center md:mb-14 md:text-left">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Social Media</h2>
          <p className="mt-3 text-sm text-gray-400">Temukan saya di berbagai platform.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {socials.map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card animate-fade-up group flex flex-col items-center justify-center gap-3 py-8 transition-all"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <s.icon size={32} className="text-gray-300 transition-transform duration-300 group-hover:scale-110 group-hover:text-cyan-400" />
              <span className="text-xs font-medium text-gray-400 group-hover:text-white">{s.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
          <h2 className="animate-fade-up mb-10 font-serif text-3xl font-bold md:mb-12 md:text-4xl">Contact Me</h2>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-6 md:gap-12">
            <a
              href="mailto:ridhoramdana985@gmail.com"
              className="animate-fade-up animation-delay-100 glass-card flex items-center gap-4 p-4 text-gray-300 transition-colors hover:text-white sm:w-auto"
            >
              <div className="glass-social shrink-0">
                <Mail size={18} />
              </div>
              <span className="text-sm">ridhoramdana985@gmail.com</span>
            </a>

            <a
              href="https://wa.me/+6281917320266"
              className="animate-fade-up animation-delay-200 glass-card flex items-center gap-4 p-4 text-gray-300 transition-colors hover:text-white sm:w-auto"
            >
              <div className="glass-social shrink-0">
                <Phone size={18} />
              </div>
              <span className="text-sm">+62 819-1732-0266</span>
            </a>
          </div>

          <p className="animate-fade-up animation-delay-400 mt-10 font-serif text-sm text-gray-500">&quot;Thanks for Scrolling&quot;</p>
        </div>
      </section>
    </main>
  );
}
