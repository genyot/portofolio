'use client';
import { useState } from 'react';
import { deleteMessage, toggleMessageRead } from '@/app/actions/extra-content';
import AdminDeleteDialog from '@/components/AdminDeleteDialog';
export default function AdminMessages({ messages }: { messages: { id: string; name: string; email: string; message: string; createdAt: Date; read: boolean }[] }) {
  const [deleting, setDeleting] = useState<(typeof messages)[number] | null>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  async function remove() {
    if (!deleting) return;
    setPending(true);
    try {
      const result = await deleteMessage(deleting.id);
      if (result?.error) setError(result.error);
      else setDeleting(null);
    } catch { setError('Gagal menghapus pesan.'); }
    setPending(false);
  }
  return <>
    {error && <p role="alert" className="text-sm text-red-400">{error}</p>} <div className="space-y-3">{messages.map(msg => <article key={msg.id} className="rounded-lg border border-white/10 bg-black/20 p-4"><div className="flex flex-wrap items-start justify-between gap-3"><div><h2 className="font-semibold">{msg.name} {!msg.read&&<span className="rounded bg-cyan-400/10 px-2 py-1 text-xs text-cyan-300">Baru</span>}</h2><a href={`mailto:${msg.email}`} className="text-sm text-cyan-300">{msg.email}</a></div><time className="text-xs text-gray-500">{new Date(msg.createdAt).toLocaleDateString('id-ID')}</time></div><p className="mt-3 whitespace-pre-wrap text-sm text-gray-300">{msg.message}</p><div className="mt-4 flex gap-4 text-sm"><button onClick={()=>toggleMessageRead(msg.id,!msg.read)} className="text-cyan-300">Tandai {msg.read?'belum dibaca':'dibaca'}</button><button onClick={()=>setDeleting(msg)} className="text-red-400">Hapus</button></div></article>)}{!messages.length&&<p className="text-sm text-gray-500">Belum ada pesan masuk.</p>}<AdminDeleteDialog item={deleting?.name ?? null} pending={pending} onCancel={()=>setDeleting(null)} onConfirm={remove}/></div></> ;
}
