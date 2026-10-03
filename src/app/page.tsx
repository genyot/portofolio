import Image from "next/image";
import DesignGallery from "@/components/DesignGallery";
import { Mail, Phone } from "lucide-react";
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
import { SiMysql } from "react-icons/si";

const skills = [
  { name: "Laravel", icon: FaLaravel, highlight: false },
  { name: "PHP", icon: FaPhp, highlight: false },
  { name: "MySQL", icon: SiMysql, highlight: false },
  { name: "Microsoft Word", icon: FaFileWord, highlight: true },
  { name: "Microsoft Excel", icon: FaFileExcel, highlight: false },
  { name: "Pixellab", icon: FaPaintBrush, highlight: false },
  { name: "CorelDRAW", icon: FaPenNib, highlight: false },
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
      <nav className="glass-navbar sticky top-0 z-50 mx-auto flex w-full items-center justify-between px-6 py-4 transition-all duration-300 md:px-12">
        <a href="#" className="animate-fade-up font-serif text-3xl font-bold text-white">
          MR<span className="text-cyan-400">.</span>
        </a>

        <div className="animate-fade-up animation-delay-100 hidden gap-8 text-sm font-medium text-gray-300 md:flex">
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#portfolio" className="hover:text-cyan-400 transition-colors">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-12 md:grid-cols-2 md:pt-20">
        <div className="max-w-xl">
          <h1 className="animate-fade-up font-serif text-5xl font-bold leading-tight md:text-7xl">
            <span className="text-gray-400 text-3xl md:text-5xl">I&apos;M </span>
            <br />
            Muhammad Rido Ramdene
          </h1>
          <p className="animate-fade-up animation-delay-100 mt-4 text-lg text-gray-400">
            Creator Digital & Operator Pesantren
          </p>
          <a
            href="#contact"
            className="glass-button animate-fade-up animation-delay-200 mt-8 inline-block rounded-lg px-8 py-3 text-sm font-medium text-white"
          >
            Contact Me
          </a>
        </div>

        <div className="animate-fade-up animation-delay-300 relative mx-auto w-full max-w-md md:ml-auto">
          <div className="animate-float">
            <div className="glass-card relative mx-auto aspect-square w-full max-w-[320px] rounded-full p-2">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/images/profile.jpg"
                  alt="Foto profil"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </div>
          </div>
          
          {/* Floating Socials */}
          <div className="absolute bottom-12 right-0 flex flex-col gap-4 text-gray-300">
            <a href="https://github.com/genyot" target="_blank" rel="noopener noreferrer" className="glass-social animate-fade-up animation-delay-400">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-ridho-ramdene-4b40663ba" target="_blank" rel="noopener noreferrer" className="glass-social animate-fade-up animation-delay-500">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/g3ny0t" target="_blank" rel="noopener noreferrer" className="glass-social animate-fade-up animation-delay-400">
              <FaInstagram size={20} />
            </a>
            <a href="https://wa.me/+6281917320266" target="_blank" rel="noopener noreferrer" className="glass-social animate-fade-up animation-delay-500">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-32 relative z-10">
        <div className="animate-fade-up">
          <h2 className="mb-8 font-serif text-4xl font-bold">About</h2>
          <div className="flex gap-6">
            <div className="mt-2 h-1 w-12 shrink-0 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
            <p className="max-w-3xl leading-relaxed text-gray-300">
              Saya memiliki ketertarikan pada pengembangan teknologi berbasis web dan desain antarmuka. 
              Dalam proses pengembangan sebuah website, saya tidak hanya memperhatikan bagaimana sistem bekerja, 
              tetapi juga bagaimana pengguna berinteraksi dengan sistem tersebut. Saya <span className="text-cyan-400 font-medium">senang mempelajari hal baru</span> dan 
              mengubah ide menjadi produk digital yang fungsional.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-6 pb-32 relative z-10">
        <h2 className="animate-fade-up mb-12 text-center font-serif text-4xl font-bold md:text-left">My Skills</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`glass-card group flex aspect-square animate-fade-up flex-col items-center justify-center gap-4 ${
                  skill.highlight ? "ring-1 ring-cyan-400/50 bg-cyan-900/10" : ""
                }`}
                style={{ animationDelay: `${(i % 4) * 100}ms` }}
              >
                <Icon size={48} className={`transition-transform duration-500 group-hover:scale-110 ${skill.highlight ? "text-cyan-400" : "text-gray-300"}`} />
                <span className="text-sm font-medium text-gray-200">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Portfolio Header */}
      <div id="portfolio" className="pt-20 text-center animate-fade-up relative z-10">
        <h2 className="font-serif text-4xl font-bold">Portfolio</h2>
        <div className="mt-4 flex justify-center gap-2 text-cyan-400">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          <span className="h-2 w-2 rounded-full bg-cyan-400/50" />
          <span className="h-2 w-2 rounded-full bg-cyan-400/30" />
          <span className="h-2 w-2 rounded-full bg-cyan-400/10" />
        </div>
      </div>

      <div className="animate-fade-up relative z-10">
        <DesignGallery />
      </div>

      {/* Experience / Projects Timeline */}
      <section className="mx-auto max-w-4xl px-6 py-32 relative z-10">
        <h2 className="animate-fade-up mb-16 font-serif text-4xl font-bold">Experience</h2>
        <div className="space-y-12 border-l border-white/10 pl-8">
          {experiences.map((exp, i) => (
            <div key={i} className="glass-card animate-fade-up relative p-6" style={{ animationDelay: `${(i + 1) * 100}ms` }}>
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-6 h-4 w-4 rounded-full border-4 border-[#05050a] bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
              
              <div className="absolute -left-[120px] top-5 hidden md:block">
                <span className="glass-button rounded-full px-4 py-2 text-xs font-medium text-gray-200">
                  Experience
                </span>
              </div>

              <h3 className="text-xl font-bold text-white transition-colors">{exp.title}</h3>
              <p className="mt-1 text-sm text-cyan-400">{exp.company}</p>
              <p className="mt-4 text-sm leading-relaxed text-gray-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="animate-fade-up mb-12 font-serif text-4xl font-bold">Contact Me</h2>
          
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12">
            <a href="mailto:ridhoramdana985@gmail.com" className="animate-fade-up animation-delay-100 flex items-center gap-3 text-gray-300">
              <div className="glass-social">
                <Mail size={20} />
              </div>
              <span className="text-sm transition-colors hover:text-white">ridhoramdana985@gmail.com</span>
            </a>
            
            <a href="https://wa.me/+6281917320266" className="animate-fade-up animation-delay-200 flex items-center gap-3 text-gray-300">
              <div className="glass-social">
                <Phone size={20} />
              </div>
              <span className="text-sm transition-colors hover:text-white">+62 819-1732-0266</span>
            </a>
          </div>

          <div className="animate-fade-up animation-delay-300 mt-16 flex justify-center gap-6 text-gray-400">
            <a href="https://github.com/genyot" className="glass-social"><FaGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/muhammad-ridho-ramdene-4b40663ba" className="glass-social"><FaLinkedin size={20} /></a>
            <a href="https://wa.me/+6281917320266" className="glass-social"><FaWhatsapp size={20} /></a>
          </div>
          
          <p className="animate-fade-up animation-delay-400 mt-12 font-serif text-gray-400/80">&quot;Thanks for Scrolling&quot;</p>
        </div>
      </section>
    </main>
  );
}