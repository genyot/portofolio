'use client';

export default function AdminDeleteDialog({
  item,
  pending = false,
  onCancel,
  onConfirm,
}: {
  item: string | null;
  pending?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  if (!item) return null;
  return <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-5" role="dialog" aria-modal="true" aria-labelledby="delete-dialog-title">
    <div className="glass-card w-full max-w-md p-6">
      <h2 id="delete-dialog-title" className="text-lg font-semibold">Konfirmasi hapus</h2>
      <p className="mt-3 text-sm text-gray-300">Yakin ingin menghapus <strong>{item}</strong>? Tindakan ini tidak dapat dibatalkan.</p>
      <div className="mt-6 flex justify-end gap-3">
        <button type="button" disabled={pending} onClick={onCancel} className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 disabled:opacity-50">Batal</button>
        <button type="button" disabled={pending} onClick={onConfirm} className="rounded-lg bg-red-500/20 px-4 py-2 text-sm font-medium text-red-300 disabled:opacity-50">{pending ? 'Menghapus…' : 'Hapus'}</button>
      </div>
    </div>
  </div>;
}
