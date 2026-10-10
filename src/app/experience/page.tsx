import { prisma } from '@/lib/prisma';
import PublicPageShell from '@/components/PublicPageShell';

export default async function ExperiencePage() {
  const experiences = await prisma.experience.findMany({ orderBy: { order: 'asc' } });
  return <PublicPageShell><section className="mx-auto max-w-4xl px-5 py-16 md:py-24"><p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Journey</p><h1 className="mb-10 mt-3 font-serif text-4xl font-bold">Experience</h1><div className="space-y-6">{experiences.map(item => <article key={item.id} className="glass-card relative p-6"><div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-cyan-400/60 to-transparent"/><h2 className="text-xl font-bold">{item.title}</h2><p className="mt-1 text-cyan-400">{item.company}</p><p className="mt-3 leading-relaxed text-gray-300">{item.description}</p></article>)}{!experiences.length && <p className="text-gray-400">Belum ada pengalaman.</p>}</div></section></PublicPageShell>;
}
