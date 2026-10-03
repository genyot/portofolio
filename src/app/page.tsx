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
    title: "Creator Digi",
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
    <main className="min-h-screen bg-[#1e1e1e] text-white selection:bg-yellow-400 selection:text-black">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <a href="#" className="font-serif text-3xl font-bold text-yellow-400">
          R<span className="text-white">.</span>
        </a>

        <div className="hidden gap-8 text-sm font-medium text-gray-300 md:flex">
          <a href="#about" className="hover:text-yellow-400 transition-colors">
            About
          </a>
          <a href="#portfolio" className="hover:text-yellow-400 transition-colors">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-yellow-400 transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-12 md:grid-cols-2 md:pt-20">
        <div className="max-w-xl animate-fade-up">
          <h1 className="font-serif text-5xl font-bold leading-tight md:text-7xl">
            <span className="text-gray-400 text-3xl md:text-5xl">I&apos;M </span>
            <br />
            Muhammad Rido
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Creator Digi & Operator Pesantren
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-md border border-yellow-400 px-8 py-3 text-sm font-medium text-yellow-400 transition hover:bg-yellow-400 hover:text-black hover:scale-105"
          >
            Contact Me
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-md md:ml-auto animate-fade-up animation-delay-200">
          <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-full border-4 border-yellow-400/20 bg-[#2a2b2f] transition-transform duration-500 hover:scale-105 hover:border-yellow-400/50">
            <Image
              src="/images/profile.jpg"
              alt="Foto profil"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
          
          {/* Floating Socials */}
          <div className="absolute bottom-12 right-0 flex flex-col gap-6 text-gray-400">
            <a href="https://github.com/genyot" target="_blank" rel="noopener noreferrer" className="transition-all hover:-translate-y-1 hover:text-yellow-400">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-ridho-ramdene-4b40663ba" target="_blank" rel="noopener noreferrer" className="transition-all hover:-translate-y-1 hover:text-yellow-400">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/g3ny0t" target="_blank" rel="noopener noreferrer" className="transition-all hover:-translate-y-1 hover:text-yellow-400">
              <FaInstagram size={20} />
            </a>
            <a href="https://wa.me/+6281917320266" target="_blank" rel="noopener noreferrer" className="transition-all hover:-translate-y-1 hover:text-yellow-400">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-32">
        <div className="animate-fade-up">
          <h2 className="mb-8 font-serif text-4xl font-bold">About</h2>
          <div className="flex gap-6">
            <div className="mt-2 h-1 w-12 shrink-0 bg-yellow-400" />
            <p className="max-w-3xl leading-relaxed text-gray-400">
              Saya memiliki ketertarikan pada pengembangan teknologi berbasis web dan desain antarmuka. 
              Dalam proses pengembangan sebuah website, saya tidak hanya memperhatikan bagaimana sistem bekerja, 
              tetapi juga bagaimana pengguna berinteraksi dengan sistem tersebut. Saya <span className="text-yellow-400">senang mempelajari hal baru</span> dan 
              mengubah ide menjadi produk digital yang fungsional.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-6 pb-32">
        <h2 className="mb-12 text-center font-serif text-4xl font-bold md:text-left animate-fade-up">My Skills</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`group flex aspect-square animate-fade-up flex-col items-center justify-center gap-4 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${
                  skill.highlight ? "bg-yellow-400 text-black shadow-[0_0_40px_rgba(250,204,21,0.3)]" : "bg-[#2a2b2f] text-gray-300 hover:bg-[#34353a]"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Icon size={48} className={`transition-transform duration-300 group-hover:scale-110 ${skill.highlight ? "text-black" : "text-gray-400 group-hover:text-white"}`} />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Portfolio Header */}
      <div id="portfolio" className="pt-20 text-center animate-fade-up">
        <h2 className="font-serif text-4xl font-bold">Portfolio</h2>
        <div className="mt-4 flex justify-center gap-2 text-yellow-400">
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/50" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/30" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/10" />
        </div>
      </div>

      <div className="animate-fade-up">
        <DesignGallery />
      </div>

      {/* Experience / Projects Timeline */}
      <section className="mx-auto max-w-4xl px-6 py-32">
        <h2 className="mb-16 font-serif text-4xl font-bold animate-fade-up">Experience</h2>
        <div className="space-y-12 border-l border-white/10 pl-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative animate-fade-up" style={{ animationDelay: `${(i + 1) * 100}ms` }}>
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-[#1e1e1e] bg-yellow-400 transition-transform duration-300 hover:scale-125" />
              
              <div className="absolute -left-[100px] top-0 hidden md:block">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-300">
                  Experience
                </span>
              </div>

              <h3 className="text-xl font-bold text-white transition-colors hover:text-yellow-400">{exp.title}</h3>
              <p className="mt-1 text-sm text-yellow-400">{exp.company}</p>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/5 bg-[#1a1a1a]">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="mb-12 font-serif text-4xl font-bold">Contact Me</h2>
          
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12">
            <a href="mailto:ridhoramdana985@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-yellow-400">
              <div className="rounded-full bg-[#2a2b2f] p-3">
                <Mail size={20} />
              </div>
              <span className="text-sm">ridhoramdana985@gmail.com</span>
            </a>
            
            <a href="https://wa.me/+6281917320266" className="flex items-center gap-3 text-gray-400 hover:text-yellow-400">
              <div className="rounded-full bg-[#2a2b2f] p-3">
                <Phone size={20} />
              </div>
              <span className="text-sm">+62 819-1732-0266</span>
            </a>
          </div>

          <div className="mt-16 flex justify-center gap-6 text-gray-500">
            <a href="https://github.com/genyot" className="hover:text-yellow-400"><FaGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/muhammad-ridho-ramdene-4b40663ba" className="hover:text-yellow-400"><FaLinkedin size={20} /></a>
            <a href="https://wa.me/+6281917320266" className="hover:text-yellow-400"><FaWhatsapp size={20} /></a>
          </div>
          
          <p className="mt-12 font-serif text-yellow-400/80">&quot;Thanks for Scrolling&quot;</p>
        </div>
      </section>
    </main>
  );
}