'use client';

import { useState } from 'react';
import AdminDeleteDialog from '@/components/AdminDeleteDialog';
import { addService, addSkill, deleteService, deleteSkill, updateService, updateSkill } from '@/app/actions/content';

type Service = { id: string; title: string; description: string; icon: string; order: number };
type Skill = { id: string; name: string; icon: string; order: number; highlight: boolean };
const icons = ['BookOpen', 'MonitorSmartphone', 'FileText', 'Palette', 'Camera', 'Scissors', 'Code', 'Database', 'PenTool', 'FaLaravel', 'FaPhp', 'SiMysql', 'FaFileWord', 'FaFileExcel', 'FaPaintBrush', 'FaPenNib', 'Aperture', 'SlidersHorizontal'];
const input = 'w-full rounded-lg border border-white/10 bg-black/40 p-3 text-sm text-white outline-none focus:border-cyan-400/50';

export default function AdminContent({ services, skills }: { services: Service[]; skills: Skill[] }) {
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [detail, setDetail] = useState<{ title: string; description: string } | null>(null);
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);
  const [deleting, setDeleting] = useState<{ id: string; label: string; action: (id: string) => Promise<{ error?: string } | { success: boolean }> } | null>(null);
  const [deletePending, setDeletePending] = useState(false);

  async function submit(action: (data: FormData) => Promise<{ error?: string } | { success: boolean }>, data: FormData, formId: string) {
    setPending(true); setError('');
    try {
      const result = await action(data);
      if (result && 'error' in result) setError(result.error ?? 'Gagal menyimpan.');
      else { setEditingService(null); setEditingSkill(null); (document.getElementById(formId) as HTMLFormElement)?.reset(); }
    } catch { setError('Gagal menyimpan.'); }
    setPending(false);
  }
  async function remove() {
    if (!deleting) return;
    setDeletePending(true);
    try {
      const result = await deleting.action(deleting.id);
      if (result && 'error' in result) setError(result.error ?? 'Gagal menghapus.');
      else setDeleting(null);
    } catch { setError('Gagal menghapus.'); }
    setDeletePending(false);
  }

  return <div className="grid gap-10 lg:grid-cols-2">
    <section>
      <h3 className="mb-4 text-xl font-semibold">Services</h3>
      <form id="service-form" action={data => submit(editingService ? updateService.bind(null, editingService.id) : addService, data, 'service-form')} className="glass-card mb-5 flex flex-col gap-3 p-5">
        <input name="title" required defaultValue={editingService?.title ?? ''} placeholder="Nama layanan" className={input} />
        <textarea name="description" required defaultValue={editingService?.description ?? ''} placeholder="Deskripsi layanan" rows={3} className={input} />
        <select name="icon" defaultValue={editingService?.icon ?? 'BookOpen'} className={input}>{icons.slice(0, 9).map(icon => <option key={icon}>{icon}</option>)}</select>
        <input name="order" type="number" defaultValue={editingService?.order ?? 0} aria-label="Urutan layanan" className={input} />
        <button disabled={pending} className="glass-button rounded-lg p-3 font-semibold disabled:opacity-50">{editingService ? 'Simpan layanan' : 'Tambah layanan'}</button>
        {editingService && <button type="button" onClick={() => setEditingService(null)} className="text-sm text-gray-400">Batal edit</button>}
      </form>
      <div className="overflow-x-auto rounded-xl border border-white/10"><table className="w-full min-w-[500px] text-left text-sm"><thead className="bg-white/5 text-xs uppercase text-gray-400"><tr><th className="p-3">Layanan</th><th className="p-3">Aksi</th></tr></thead><tbody>{services.map(item => <tr key={item.id} className="border-t border-white/10"><td className="p-3">{item.title}<small className="block text-gray-500">{item.icon} · {item.order}</small></td><td className="p-3"><div className="flex gap-3"><button onClick={() => setDetail({ title: item.title, description: item.description })} className="text-cyan-300">Detail</button><button onClick={() => setEditingService(item)} className="text-gray-200">Edit</button><button onClick={() => setDeleting({ id: item.id, label: item.title, action: deleteService })} className="text-red-400">Hapus</button></div></td></tr>)}</tbody></table>{!services.length && <p className="p-4 text-gray-500">Belum ada layanan.</p>}</div>
    </section>
    <section>
      <h3 className="mb-4 text-xl font-semibold">Skills</h3>
      <form id="skill-form" action={data => submit(editingSkill ? updateSkill.bind(null, editingSkill.id) : addSkill, data, 'skill-form')} className="glass-card mb-5 flex flex-col gap-3 p-5">
        <input name="name" required defaultValue={editingSkill?.name ?? ''} placeholder="Nama skill" className={input} />
        <select name="icon" defaultValue={editingSkill?.icon ?? 'Palette'} className={input}>{icons.map(icon => <option key={icon}>{icon}</option>)}</select>
        <input name="order" type="number" defaultValue={editingSkill?.order ?? 0} aria-label="Urutan skill" className={input} />
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="highlight" defaultChecked={editingSkill?.highlight ?? false} /> Highlight</label>
        <button disabled={pending} className="glass-button rounded-lg p-3 font-semibold disabled:opacity-50">{editingSkill ? 'Simpan skill' : 'Tambah skill'}</button>
        {editingSkill && <button type="button" onClick={() => setEditingSkill(null)} className="text-sm text-gray-400">Batal edit</button>}
      </form>
      <div className="overflow-x-auto rounded-xl border border-white/10"><table className="w-full min-w-[500px] text-left text-sm"><thead className="bg-white/5 text-xs uppercase text-gray-400"><tr><th className="p-3">Skill</th><th className="p-3">Aksi</th></tr></thead><tbody>{skills.map(item => <tr key={item.id} className="border-t border-white/10"><td className="p-3">{item.name}<small className="block text-gray-500">{item.icon} · {item.order}{item.highlight ? ' · highlight' : ''}</small></td><td className="p-3"><div className="flex gap-3"><button onClick={() => setDetail({ title: item.name, description: `Ikon: ${item.icon} · Urutan: ${item.order}${item.highlight ? ' · Highlight' : ''}` })} className="text-cyan-300">Detail</button><button onClick={() => setEditingSkill(item)} className="text-gray-200">Edit</button><button onClick={() => setDeleting({ id: item.id, label: item.name, action: deleteSkill })} className="text-red-400">Hapus</button></div></td></tr>)}</tbody></table>{!skills.length && <p className="p-4 text-gray-500">Belum ada skill.</p>}</div>
    </section>
    {error && <p role="alert" className="text-sm text-red-400 lg:col-span-2">{error}</p>}
    <AdminDeleteDialog item={deleting?.label ?? null} pending={deletePending} onCancel={() => setDeleting(null)} onConfirm={remove} />
    {detail && <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-5" role="dialog" aria-modal="true" aria-label="Detail item" onClick={() => setDetail(null)}><div className="glass-card w-full max-w-lg p-6" onClick={event => event.stopPropagation()}><h3 className="text-xl font-bold">{detail.title}</h3><p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-gray-300">{detail.description}</p><button onClick={() => setDetail(null)} className="glass-button mt-5 rounded-lg px-4 py-2">Tutup</button></div></div>}
  </div>;
}
