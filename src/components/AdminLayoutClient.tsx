'use client';

import { useState } from 'react';
import { logoutAdmin } from '@/app/actions/auth';
import Image from 'next/image';

const nav = [['/admin', 'Dashboard'], ['/admin/portfolio', 'Karya'], ['/admin/experience', 'Experience'], ['/admin/content', 'Services & Skills'], ['/admin/music', 'Music'], ['/admin/social', 'Social Media'], ['/admin/profile', 'Profil'], ['/admin/messages', 'Pesan Masuk']];

export default function AdminLayoutClient({ children, active, photo, name }: { children: React.ReactNode; active: string; photo: string; name: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = (mobile = false) => nav.map(([href, label]) => <a key={href} href={href} aria-current={active === href ? 'page' : undefined} onClick={() => mobile && setMenuOpen(false)} className={`rounded-lg px-3 py-3 text-sm transition hover:bg-white/10 hover:text-cyan-300 ${active === href ? 'bg-white/10 text-cyan-300' : 'text-gray-300'}`}>{label}</a>);

  return <div className="min-h-screen text-white"><div className="mx-auto flex max-w-[1600px] gap-6 px-3 py-3 sm:px-4 sm:py-5 md:px-8">
    <aside className="glass-card sticky top-5 hidden h-[calc(100dvh-40px)] w-64 shrink-0 flex-col overflow-y-auto p-5 lg:flex">
      <a href="/admin" className="mb-8 flex items-center gap-3 font-serif text-base font-bold"><span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/20"><Image src={photo} alt="" fill sizes="48px" unoptimized={photo.startsWith('data:')} className="object-cover" /></span><span className="min-w-0 break-words text-sm leading-tight">{name}</span></a>
      <nav className="flex flex-col gap-2">{links()}</nav>
      <div className="mt-auto flex flex-col gap-3"><a href="/" className="rounded-lg border border-white/10 px-3 py-2 text-center text-sm text-gray-300 hover:text-white">Lihat website</a><form action={logoutAdmin}><button className="w-full rounded-lg border border-white/10 px-3 py-2 text-sm hover:border-cyan-400" type="submit">Logout</button></form></div>
    </aside>
    <main className="min-h-[calc(100dvh-24px)] min-w-0 flex-1 space-y-4 sm:min-h-[calc(100dvh-40px)] sm:space-y-6"><header className="glass-card flex items-center justify-between gap-3 p-4 sm:p-5 md:p-7"><div className="flex min-w-0 items-center gap-3"><span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-cyan-300/50 lg:hidden"><Image src={photo} alt={name} fill sizes="40px" unoptimized={photo.startsWith('data:')} className="object-cover" /></span><div className="min-w-0"><p className="text-[10px] uppercase tracking-[0.15em] text-cyan-300 sm:text-xs sm:tracking-[0.2em]">Portfolio management</p><h1 className="mt-2 text-xl font-bold sm:text-2xl md:text-3xl">{nav.find(([href]) => href === active)?.[1]}</h1></div></div><div className="flex shrink-0 items-center gap-2 lg:hidden"><button type="button" aria-expanded={menuOpen} aria-controls="admin-mobile-nav" aria-label={menuOpen ? 'Tutup menu admin' : 'Buka menu admin'} onClick={() => setMenuOpen(!menuOpen)} className="min-h-11 rounded-lg border border-white/10 px-3 text-sm">{menuOpen ? 'Tutup' : 'Menu'}</button><a href="/" className="flex min-h-11 items-center rounded-lg border border-white/10 px-3 text-sm">Beranda</a><form action={logoutAdmin}><button className="min-h-11 rounded-lg border border-white/10 px-3 text-sm" type="submit">Logout</button></form></div></header>{menuOpen && <nav id="admin-mobile-nav" className="glass-card grid grid-cols-2 gap-2 p-3 sm:grid-cols-3 lg:hidden">{links(true)}</nav>}{children}</main>
  </div></div>;
}
