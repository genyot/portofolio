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
} from "react-icons/fa";
import { 
  SiMysql, 
  SiJavascript, 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiFigma 
} from "react-icons/si";

const skills = [
  { name: "Laravel", icon: FaLaravel, highlight: false },
  { name: "PHP", icon: FaPhp, highlight: false },
  { name: "MySQL", icon: SiMysql, highlight: false },
  { name: "JavaScript", icon: SiJavascript, highlight: true },
  { name: "TypeScript", icon: SiTypescript, highlight: false },
  { name: "Next.js", icon: SiNextdotjs, highlight: false },
  { name: "Tailwind CSS", icon: SiTailwindcss, highlight: false },
  { name: "UI/UX Design", icon: SiFigma, highlight: false },
];

const projects = [
  {
    title: "Media Digital UNU NTB",
    role: "Fullstack Developer",
    description: "Media digital berbasis web untuk dokumentasi dan publikasi karya ilmiah dosen dan mahasiswa.",
  },
  {
    title: "Sistem Informasi",
    role: "Web Developer",
    description: "Pengembangan sistem informasi berbasis web dengan fokus pada pengelolaan data dan pengalaman pengguna.",
  },
  {
    title: "Perancangan UI/UX",
    role: "UI/UX Designer",
    description: "Perancangan antarmuka dan pengalaman pengguna untuk berbagai aplikasi berbasis web.",
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
        <div className="max-w-xl">
          <h1 className="font-serif text-5xl font-bold leading-tight md:text-7xl">
            <span className="text-gray-400 text-3xl md:text-5xl">I&apos;M </span>
            <br />
            Muhammad Rido
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Web Developer & UI/UX Designer
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-md border border-yellow-400 px-8 py-3 text-sm font-medium text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            Contact Me
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-md md:ml-auto">
          <div className="relative aspect-[3/4] w-[85%] overflow-hidden rounded-t-full bg-zinc-800">
            <Image
              src="/images/profile.jpg"
              alt="Foto profil"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          {/* Floating Socials */}
          <div className="absolute bottom-12 right-0 flex flex-col gap-6 text-gray-400">
            <a href="https://github.com/genyot" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-ridho-ramdene-4b40663ba" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/g3ny0t" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="https://wa.me/+6281917320266" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-32">
        <h2 className="mb-8 font-serif text-4xl font-bold">About</h2>
        <div className="flex gap-6">
          <div className="mt-2 h-1 w-12 shrink-0 bg-yellow-400" />
          <p className="max-w-3xl text-gray-400 leading-relaxed">
            Saya memiliki ketertarikan pada pengembangan teknologi berbasis web dan desain antarmuka. 
            Dalam proses pengembangan sebuah website, saya tidak hanya memperhatikan bagaimana sistem bekerja, 
            tetapi juga bagaimana pengguna berinteraksi dengan sistem tersebut. Saya <span className="text-yellow-400">senang mempelajari teknologi baru</span> dan 
            mengubah ide menjadi produk digital yang fungsional.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-6 pb-32">
        <h2 className="mb-12 text-center font-serif text-4xl font-bold md:text-left">My Skills</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`flex aspect-square flex-col items-center justify-center gap-4 rounded-2xl transition-transform hover:-translate-y-1 ${
                  skill.highlight ? "bg-yellow-400 text-black shadow-[0_0_40px_rgba(250,204,21,0.3)]" : "bg-[#2a2b2f] text-gray-300"
                }`}
              >
                <Icon size={48} className={skill.highlight ? "text-black" : "text-gray-400"} />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Portfolio Header */}
      <div id="portfolio" className="pt-20 text-center">
        <h2 className="font-serif text-4xl font-bold">Portfolio</h2>
        <div className="mt-4 flex justify-center gap-2 text-yellow-400">
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/50" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/30" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/10" />
        </div>
      </div>

      <DesignGallery />

      {/* Experience / Projects Timeline */}
      <section className="mx-auto max-w-4xl px-6 py-32">
        <h2 className="mb-16 font-serif text-4xl font-bold">Experience</h2>
        <div className="space-y-12 border-l border-white/10 pl-8">
          {projects.map((project, i) => (
            <div key={i} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-[#1e1e1e] bg-yellow-400" />
              
              <div className="absolute -left-[100px] top-0 hidden md:block">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-300">
                  Project
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-1 text-sm text-yellow-400">{project.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {project.description}
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