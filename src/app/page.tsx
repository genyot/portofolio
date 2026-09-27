import Image from "next/image";
import DesignGallery from "@/components/DesignGallery";
import { Mail, MessageCircle } from "lucide-react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
const projects = [
  {
    title: "Media Digital UNU NTB",
    description:
      "Media digital berbasis web untuk dokumentasi dan publikasi karya ilmiah dosen dan mahasiswa.",
    tech: ["Laravel", "PHP", "MySQL"],
  },
  {
    title: "Sistem Informasi",
    description:
      "Pengembangan sistem informasi berbasis web dengan fokus pada pengelolaan data dan pengalaman pengguna.",
    tech: ["PHP", "Laravel", "MySQL"],
  },
  {
    title: "UI/UX Design",
    description:
      "Perancangan antarmuka dan pengalaman pengguna untuk aplikasi berbasis web.",
    tech: ["Figma", "UI Design", "UX"],
  },
];

const skills = [
  "Laravel",
  "PHP",
  "MySQL",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "UI/UX Design",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07070a] text-white">
      {/* Neon Background */}
<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
  {/* Purple */}
  <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-purple-600/70 blur-[100px]" />

  {/* Blue */}
  <div className="absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-blue-600/60 blur-[110px]" />

  {/* Pink */}
  <div className="absolute bottom-[-150px] left-[30%] h-[450px] w-[450px] rounded-full bg-fuchsia-600/60 blur-[120px]" />

  {/* Violet */}
  <div className="absolute right-[15%] top-[45%] h-[300px] w-[300px] rounded-full bg-violet-500/40 blur-[100px]" />
</div>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-black/5 bg-white/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold">
  Muhammad Rido Ramdene<span className="text-zinc-500">.</span>
</a>

          <div className="hidden gap-8 text-sm text-zinc-600 md:flex">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-20">
  <div className="grid w-full items-center gap-12 md:grid-cols-[320px_1fr]">

    {/* Foto */}
    <div className="relative mx-auto h-[360px] w-[280px] overflow-hidden rounded-2xl bg-zinc-900 md:mx-0">
      <Image
        src="/images/profile.jpg"
        alt="Foto profil"
        fill
        priority
        className="object-cover"
        sizes="280px"
      />
    </div>

    {/* Teks */}
    <div className="max-w-4xl">

      <p className="animate-fade-up mb-5 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
        Pengen jadi software engineer & Designer
      </p>

      <h1 className="animate-fade-up animation-delay-100 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
        Membangun website yang
        <span className="text-zinc-500"> fungsional </span>
        dan menarik.
      </h1>

      <p className="animate-fade-up animation-delay-200 mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
        Saya pengen jadi software engineer dan desainer.
      </p>

      <div className="animate-fade-up animation-delay-300 mt-10 flex flex-wrap gap-4">
        <a
          href="#design"
          className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:-translate-y-1 hover:bg-zinc-200"
        >
          Lihat Karya
        </a>

        <a
          href="#contact"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition duration-300 hover:-translate-y-1 hover:bg-white/10"
        >
          Hubungi Saya
        </a>
      </div>

    </div>
  </div>
</section>

      {/* About */}
      <section id="about" className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-32 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
              About Me
            </p>
            <h2 className="text-4xl font-bold">
              Tentang saya.
            </h2>
          </div>

          <div className="space-y-5 text-zinc-400 leading-8">
            <p>
              Saya memiliki ketertarikan pada pengembangan teknologi berbasis
              web dan desain antarmuka.
            </p>

            <p>
              Dalam proses pengembangan sebuah website, saya tidak hanya
              memperhatikan bagaimana sistem bekerja, tetapi juga bagaimana
              pengguna berinteraksi dengan sistem tersebut.
            </p>

            <p>
              Saya senang mempelajari teknologi baru dan mengubah ide menjadi
              produk digital yang dapat digunakan.
            </p>
          </div>
        </div>
      </section>
<DesignGallery />
      {/* Skills */}
      <section id="skills" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-32">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Skills
          </p>

          <h2 className="mb-12 text-4xl font-bold">
            Teknologi yang saya gunakan.
          </h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-32">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Selected Projects
          </p>

          <h2 className="mb-12 text-4xl font-bold">
            Beberapa project saya.
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
  key={project.title}
  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]"
>
                <div className="mb-10 flex h-40 items-center justify-center rounded-xl bg-zinc-900">
                  <span className="text-sm text-zinc-600">
                    Project Preview
                  </span>
                </div>

                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
<section id="contact" className="border-t border-white/10">
  <div className="mx-auto w-full max-w-6xl px-6 py-32">
    {/* Heading */}
    <div className="mb-12">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Contact
      </p>

      <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
        Mari membuat sesuatu
        <span className="text-zinc-500"> bersama.</span>
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400">
        Terbuka untuk diskusi mengenai project, kolaborasi, maupun
        pengembangan website dan produk digital.
      </p>
    </div>

    {/* Contact Cards */}
    <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
      {/* Email */}
      <a
        href="mailto:ridhoramdana985@gmail.com"
        className="group rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <Mail size={20} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Email
            </p>

            <p className="mt-1 text-sm text-zinc-300 transition group-hover:text-white">
              ridhoramdana985@gmail.com
            </p>
          </div>
        </div>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/+6281917320266"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-green-400/40 hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <FaWhatsapp size={22} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              WhatsApp
            </p>

            <p className="mt-1 text-sm text-zinc-300 transition group-hover:text-white">
              Chat dengan saya
            </p>
          </div>
        </div>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/g3ny0t?utm_source=qr&stkn=ejEwZ2YzbDJnamE3"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-pink-400/40 hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <FaInstagram size={22} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Instagram
            </p>

            <p className="mt-1 text-sm text-zinc-300 transition group-hover:text-white">
              @g3ny0t
            </p>
          </div>
        </div>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/genyot"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <FaGithub size={22} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              GitHub
            </p>

            <p className="mt-1 text-sm text-zinc-300 transition group-hover:text-white">
              @genyot
            </p>
          </div>
        </div>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/muhammad-ridho-ramdene-4b40663ba?trk=contact-info"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <FaLinkedin size={22} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              LinkedIn
            </p>

            <p className="mt-1 text-sm text-zinc-300 transition group-hover:text-white">
              Muhammad Rido Ramdene
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl justify-between px-6 py-8 text-sm text-zinc-500">
          <p>© 2026 Ridho Ramdene.</p>
          <p>Developer & Designer</p>
        </div>
      </footer>
    </main>
  );
}