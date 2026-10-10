import { prisma } from '@/lib/prisma';
import MusicPlayer from '@/components/MusicPlayer';
import PublicPageShell from '@/components/PublicPageShell';

export default async function MusicPage() {
  const playlists = await prisma.playlist.findMany({ orderBy: { order: 'asc' } });
  return <PublicPageShell><section className="mx-auto max-w-6xl px-5 pt-14 text-center"><p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Listen along</p><h1 className="mt-3 font-serif text-4xl font-bold">Music</h1></section><div className="pt-8"><MusicPlayer playlists={playlists}/></div></PublicPageShell>;
}
