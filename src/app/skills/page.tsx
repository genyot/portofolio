import { prisma } from '@/lib/prisma';
import { Aperture, Camera, Palette, Scissors, SlidersHorizontal } from 'lucide-react';
import { FaLaravel, FaPhp, FaFileWord, FaFileExcel, FaPaintBrush, FaPenNib } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import PublicPageShell from '@/components/PublicPageShell';

const icons: Record<string, React.ElementType> = { Laravel: FaLaravel, PHP: FaPhp, MySQL: SiMysql, 'Microsoft Word': FaFileWord, 'Microsoft Excel': FaFileExcel, Pixellab: FaPaintBrush, CorelDRAW: FaPenNib, Canva: Palette, CapCut: Scissors, Fotografer: Camera, 'Adobe Lightroom': Aperture, Snapseed: SlidersHorizontal };
export default async function SkillsPage() {
  const skills = await prisma.skill.findMany({ orderBy: { order: 'asc' } });
  return <PublicPageShell><section className="mx-auto max-w-6xl px-5 py-16 md:py-24"><p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Expertise</p><h1 className="mt-3 font-serif text-4xl font-bold">My Skills</h1><div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">{skills.map(item => { const Icon = icons[item.name] ?? Palette; return <article key={item.id} className={`glass-card flex aspect-square flex-col items-center justify-center gap-4 p-4 ${item.highlight ? 'ring-1 ring-cyan-400/50 bg-cyan-900/10' : ''}`}><Icon size={36} className={item.highlight ? 'text-cyan-400' : 'text-gray-300'}/><span className="text-center text-sm text-gray-200">{item.name}</span></article>; })}{!skills.length && <p className="text-gray-400">Belum ada skill.</p>}</div></section></PublicPageShell>;
}
