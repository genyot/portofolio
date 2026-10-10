import PublicPageShell from '@/components/PublicPageShell';
import DesignGallery from '@/components/DesignGallery';

export default function PortfolioPage() {
  return <PublicPageShell><section className="mx-auto max-w-6xl px-5 pt-14 text-center"><p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Selected work</p><h1 className="mt-3 font-serif text-4xl font-bold">Karya</h1><p className="mt-3 text-gray-400">Kumpulan desain dan karya pilihan.</p></section><DesignGallery /></PublicPageShell>;
}
