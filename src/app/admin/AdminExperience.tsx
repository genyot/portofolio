'use client';

import { useState } from 'react';
import { addExperience, deleteExperience, updateExperience } from '@/app/actions/experience';

type Item = { id: string; title: string; company: string; description: string; order: number };
const input = 'w-full rounded-lg border border-white/10 bg-black/40 p-3 text-sm text-white outline-none focus:border-cyan-400/50';

export default function AdminExperience({ initialData }: { initialData: Item[] }) {
  const [editing, setEditing] = useState<Item | null>(null);
  const [detail, setDetail] = useState<Item | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function save(formData: FormData) {
    setLoading(true); setError('');
    const result = editing ? await updateExperience(editing.id, formData) : await addExperience(formData);
    if (result?.error) setError(result.error);
    else { setEditing(null); (document.getElementById('experience-form') as HTMLFormElement)?.reset(); }
    setLoading(false);
  }

  async function remove(id: string) {
    if (!confirm('Yakin ingin menghapus pengalaman ini?')) return;
    const result = await deleteExperience(id);
    if (result?.error) setError(result.error);
  }

  return <div className="grid gap-8 xl:grid-cols-[minmax(260px,0.8fr)_1.2fr]">
    <form id="experience-form" action={save} className="glass-card flex h-fit flex-col gap-4 p-5">
      <h3 className="font-semibold">{editing ? 'Edit pengalaman' : 'Tambah pengalaman'}</h3>
      <input name="title" required defaultValue={editing?.title ?? ''} placeholder="Posisi / Jabatan" className={input} />
      <input name="company" required defaultValue={editing?.company ?? ''} placeholder="Perusahaan / Tempat" className={input} />
      <textarea name="description" required defaultValue={editing?.description ?? ''} placeholder="Deskripsi" rows={4} className={input} />
      <input name="order" type="number" defaultValue={editing?.order ?? 0} placeholder="Urutan" className={input} />
      {error && <p role="alert" className="text-sm text-red-400">{error}</p>}
      <button disabled={loading} className="glass-button rounded-lg p-3 font-semibold disabled:opacity-50">{loading ? 'Menyimpan…' : editing ? 'Simpan perubahan' : 'Tambah pengalaman'}</button>
      {editing && <button type="button" onClick={() => { setEditing(null); (document.getElementById('experience-form') as HTMLFormElement).reset(); }} className="text-sm text-gray-400">Batal edit</button>}
    </form>
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full min-w-[650px] text-left text-sm"><thead className="bg-white/5 text-xs uppercase text-gray-400"><tr><th className="p-4">Posisi</th><th className="p-4">Perusahaan</th><th className="p-4">Urutan</th><th className="p-4">Aksi</th></tr></thead><tbody>
        {initialData.map(item => <tr key={item.id} className="border-t border-white/10"><td className="p-4 font-medium">{item.title}</td><td className="p-4 text-gray-400">{item.company}</td><td className="p-4 text-gray-400">{item.order}</td><td className="p-4"><div className="flex gap-3"><button onClick={() => setDetail(item)} className="text-cyan-300">Detail</button><button onClick={() => { setEditing(item); setError(''); }} className="text-gray-200">Edit</button><button onClick={() => remove(item.id)} className="text-red-400">Hapus</button></div></td></tr>)}
      </tbody></table>
      {initialData.length === 0 && <p className="p-6 text-gray-500">Belum ada pengalaman.</p>}
    </div>
    {detail && <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-5" role="dialog" aria-modal="true" aria-label="Detail pengalaman" onClick={() => setDetail(null)}><div className="glass-card w-full max-w-lg p-6" onClick={event => event.stopPropagation()}><h3 className="text-xl font-bold">{detail.title}</h3><p className="mt-1 text-cyan-300">{detail.company}</p><p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-gray-300">{detail.description}</p><p className="mt-3 text-xs text-gray-500">Urutan {detail.order}</p><button onClick={() => setDetail(null)} className="glass-button mt-5 rounded-lg px-4 py-2">Tutup</button></div></div>}
  </div>;
}
