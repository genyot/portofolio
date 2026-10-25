'use client';

import { useState } from 'react';
import Image from 'next/image';
import AdminDeleteDialog from '@/components/AdminDeleteDialog';
import ImageCropInput from '@/components/ImageCropInput';
import { addPortfolio, deletePortfolio, updatePortfolio } from '@/app/actions/portfolio';

type Item = { id: string; title: string; category: string; image: string; aspect: string; order: number; type: string; description: string | null; demoUrl: string | null };
const input = 'w-full rounded-lg border border-white/10 bg-black/40 p-3 text-sm text-white outline-none focus:border-cyan-400/50';

export default function AdminPortfolio({ initialData }: { initialData: Item[] }) {
  const [editing, setEditing] = useState<Item | null>(null);
  const [detail, setDetail] = useState<Item | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState<Item | null>(null);
  const [deletePending, setDeletePending] = useState(false);
  const [aspect, setAspect] = useState(editing?.aspect ?? 'aspect-square');

  async function save(formData: FormData) {
    setLoading(true); setError('');
    const result = editing ? await updatePortfolio(editing.id, formData) : await addPortfolio(formData);
    if (result?.error) setError(result.error);
    else { setEditing(null); (document.getElementById('portfolio-form') as HTMLFormElement)?.reset(); }
    setLoading(false);
  }

  async function remove() {
    if (!deleting) return;
    setDeletePending(true);
    try {
      const result = await deletePortfolio(deleting.id);
      if (result?.error) setError(result.error);
      else setDeleting(null);
    } catch { setError('Gagal menghapus karya.'); }
    setDeletePending(false);
  }

  return <div className="grid gap-8 xl:grid-cols-[minmax(260px,0.8fr)_1.2fr]">
    <form id="portfolio-form" action={save} className="glass-card flex h-fit flex-col gap-4 p-5">
      <h3 className="font-semibold">{editing ? 'Edit karya' : 'Tambah karya'}</h3>
      <input name="title" required defaultValue={editing?.title ?? ''} placeholder="Judul Karya" className={input} />
      <input name="category" required defaultValue={editing?.category ?? ''} placeholder="Kategori" className={input} />
      <select name="type" defaultValue={editing?.type ?? 'design'} className={input}><option value="design">Desain</option><option value="website">Website</option></select>
      <textarea name="description" defaultValue={editing?.description ?? ''} placeholder="Deskripsi singkat (opsional)" rows={3} className={input} />
      <input name="demoUrl" type="url" defaultValue={editing?.demoUrl ?? ''} placeholder="URL demo website (wajib untuk jenis website)" className={input} />
      <select name="aspect" value={aspect} onChange={event => setAspect(event.target.value)} className={input}>
        <option value="aspect-square">Square (1:1)</option><option value="aspect-[4/5]">Portrait (4:5)</option><option value="aspect-[3/4]">Portrait (3:4)</option><option value="aspect-video">Landscape (16:9)</option>
      </select>
      <input name="order" type="number" defaultValue={editing?.order ?? 0} placeholder="Urutan" className={input} />
      <ImageCropInput key={`${editing?.id ?? 'new'}-${aspect}`} name="image" aspect={aspect === 'aspect-video' ? 16 / 9 : aspect === 'aspect-[4/5]' ? 4 / 5 : aspect === 'aspect-[3/4]' ? 3 / 4 : 1} required={!editing} label={`Gambar ${editing ? '(opsional, kosongkan agar tetap)' : ''}`} />
      {error && <p role="alert" className="text-sm text-red-400">{error}</p>}
      <button disabled={loading} className="glass-button rounded-lg p-3 font-semibold disabled:opacity-50">{loading ? 'Menyimpan…' : editing ? 'Simpan perubahan' : 'Tambah karya'}</button>
      {editing && <button type="button" onClick={() => { setEditing(null); (document.getElementById('portfolio-form') as HTMLFormElement).reset(); }} className="text-sm text-gray-400">Batal edit</button>}
    </form>
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full min-w-[620px] text-left text-sm"><thead className="bg-white/5 text-xs uppercase text-gray-400"><tr><th className="p-4">Karya</th><th className="p-4">Kategori</th><th className="p-4">Urutan</th><th className="p-4">Aksi</th></tr></thead><tbody>
        {initialData.map(item => <tr key={item.id} className="border-t border-white/10"><td className="p-4"><div className="flex items-center gap-3"><div className="relative h-12 w-12 overflow-hidden rounded-lg"><Image src={item.image} alt={item.title} fill unoptimized className="object-cover" /></div><span className="font-medium">{item.title}<small className="block text-gray-500">{item.type === 'website' ? 'Website' : 'Desain'}</small></span></div></td><td className="p-4 text-gray-400">{item.category}</td><td className="p-4 text-gray-400">{item.order}</td><td className="p-4"><div className="flex gap-3"><button onClick={() => setDetail(item)} className="text-cyan-300">Detail</button><button onClick={() => { setEditing(item); setAspect(item.aspect); setError(''); }} className="text-gray-200">Edit</button><button onClick={() => setDeleting(item)} className="text-red-400">Hapus</button></div></td></tr>)}
      </tbody></table>
      {initialData.length === 0 && <p className="p-6 text-gray-500">Belum ada karya.</p>}
    </div>
    <AdminDeleteDialog item={deleting?.title ?? null} pending={deletePending} onCancel={() => setDeleting(null)} onConfirm={remove} />
    {detail && <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-5" role="dialog" aria-modal="true" aria-label="Detail karya" onClick={() => setDetail(null)}><div className="glass-card w-full max-w-xl p-5" onClick={event => event.stopPropagation()}><div className="relative mb-4 aspect-video overflow-hidden rounded-lg"><Image src={detail.image} alt={detail.title} fill unoptimized className="object-contain" /></div><h3 className="text-xl font-bold">{detail.title}</h3><p className="mt-2 text-sm text-gray-400">{detail.category} · {detail.aspect} · Urutan {detail.order}</p><button onClick={() => setDetail(null)} className="glass-button mt-5 rounded-lg px-4 py-2">Tutup</button></div></div>}
  </div>;
}
