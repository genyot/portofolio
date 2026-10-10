'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProfilePhoto({ src }: { src: string }) {
  const [open, setOpen] = useState(false);
  return <>
    <button type="button" onClick={() => setOpen(true)} aria-label="Perbesar foto profil" className="h-40 w-40 cursor-zoom-in rounded-full border-[6px] border-cyan-400 bg-transparent p-0 shadow-[0_16px_50px_rgba(34,211,238,0.4),0_0_24px_rgba(129,140,248,0.35)] sm:h-56 sm:w-56 md:h-[min(80vw,550px)] md:w-[min(80vw,550px)]">
      <span className="relative block h-full w-full overflow-hidden rounded-full shadow-[inset_0_0_32px_rgba(0,0,0,0.4)]">
        <Image src={src} alt="Foto profil" fill priority unoptimized className="object-cover" sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, (max-width: 1200px) 45vw, 550px" />
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.38),transparent_38%),linear-gradient(145deg,rgba(255,255,255,0.14),transparent_42%,rgba(3,7,18,0.4))]" />
      </span>
    </button>
    {open && <div role="dialog" aria-modal="true" aria-label="Foto profil" onClick={() => setOpen(false)} onKeyDown={event => { if (event.key === 'Escape') setOpen(false); }} className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-black/90 p-5">
      <button type="button" aria-label="Tutup foto" onClick={() => setOpen(false)} className="absolute right-5 top-5 rounded-full border border-white/20 px-4 py-2 text-white">Tutup</button>
      <div className="relative h-[min(80vh,800px)] w-[min(90vw,800px)]" onClick={event => event.stopPropagation()}><Image src={src} alt="Foto profil ukuran penuh" fill sizes="90vw" unoptimized className="object-contain" /></div>
    </div>}
  </>;
}
