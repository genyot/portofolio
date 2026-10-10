import { prisma } from '@/lib/prisma';
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp, FaLaravel, FaPhp, FaFileWord, FaFileExcel, FaPaintBrush, FaPenNib } from 'react-icons/fa';
import { FaPinterest, FaFacebook, FaTelegram, FaThreads, FaTiktok } from 'react-icons/fa6';
import { SiMysql } from 'react-icons/si';
import PublicPageShell from '@/components/PublicPageShell';
const icons: Record<string, React.ElementType> = { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp, FaPinterest, FaFacebook, FaTelegram, FaThreads, FaTiktok, FaLaravel, FaPhp, FaFileWord, FaFileExcel, FaPaintBrush, FaPenNib, SiMysql };
export default async function SocialPage() {
  const socials = await prisma.socialLink.findMany({ orderBy: { order: 'asc' } });
  return <PublicPageShell><section className="mx-auto max-w-6xl px-5 py-16 md:py-24"><p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Connect</p><h1 className="mt-3 font-serif text-4xl font-bold">Social Media</h1><p className="mt-3 text-gray-400">Temukan saya di berbagai platform.</p><div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">{socials.map(item => { const Icon=icons[item.icon]; return <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer" className="glass-card group flex flex-col items-center justify-center gap-3 py-8">{Icon?<Icon size={32} className="text-gray-300 transition group-hover:scale-110 group-hover:text-cyan-400"/>:<span aria-hidden="true">↗</span>}<span className="text-xs text-gray-400">{item.label}</span></a>; })}{!socials.length&&<p className="text-gray-400">Belum ada tautan sosial.</p>}</div></section></PublicPageShell>;
}
