import { prisma } from '@/lib/prisma';
import { BookOpen, MonitorSmartphone, FileText, Palette, Camera, Scissors, Video, SlidersHorizontal, Aperture } from 'lucide-react';
import PublicPageShell from '@/components/PublicPageShell';

const icons: Record<string, typeof BookOpen> = { BookOpen, MonitorSmartphone, FileText, Palette, Camera, Scissors, Video, SlidersHorizontal, Aperture };
export default async function ServicesPage() {
  const services = await prisma.service.findMany({ orderBy: { order: 'asc' } });
  return <PublicPageShell><section className="mx-auto max-w-6xl px-5 py-16 md:py-24"><p className="text-xs uppercase tracking-[0.25em] text-cyan-300">What I offer</p><h1 className="mt-3 font-serif text-4xl font-bold">Layanan Jasa</h1><p className="mt-3 text-gray-400">Open jasa untuk berbagai kebutuhan tugas dan desain.</p><div className="mt-10 grid gap-5 sm:grid-cols-2">{services.map(item => { const Icon = icons[item.icon] ?? BookOpen; return <article key={item.id} className="glass-card p-6"><div className="mb-4 inline-flex rounded-xl bg-cyan-400/10 p-3 text-cyan-400"><Icon size={28}/></div><h2 className="font-serif text-xl font-bold">{item.title}</h2><p className="mt-2 text-sm leading-relaxed text-gray-400">{item.description}</p></article>; })}{!services.length && <p className="text-gray-400">Belum ada layanan.</p>}</div></section></PublicPageShell>;
}
