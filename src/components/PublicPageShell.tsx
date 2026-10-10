import Navbar from '@/components/Navbar';

export default function PublicPageShell({ children }: { children: React.ReactNode }) {
  return <main className="relative min-h-screen text-white selection:bg-cyan-500/30 selection:text-white">
    <div className="liquid-bg-container"><div className="liquid-blob liquid-blob-1" /><div className="liquid-blob liquid-blob-2" /><div className="liquid-blob liquid-blob-3" /></div>
    <Navbar />{children}
  </main>;
}
