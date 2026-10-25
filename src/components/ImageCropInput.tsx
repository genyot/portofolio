'use client';

import { useEffect, useRef, useState } from 'react';

export default function ImageCropInput({ name, aspect = 1, required = false, label }: { name: string; aspect?: number; required?: boolean; label: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [source, setSource] = useState('');
  const [fileName, setFileName] = useState('');
  const [zoom, setZoom] = useState(1);
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  const [error, setError] = useState('');
  const [cropped, setCropped] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!source) return;
    const image = new window.Image();
    image.onload = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext('2d');
      if (!canvas || !context) return;
      const width = 800;
      const height = Math.round(width / aspect);
      canvas.width = width;
      canvas.height = height;
      const scale = Math.max(width / image.width, height / image.height) * zoom;
      const drawWidth = image.width * scale;
      const drawHeight = image.height * scale;
      const dx = (width - drawWidth) * x / 100;
      const dy = (height - drawHeight) * y / 100;
      context.clearRect(0, 0, width, height);
      context.drawImage(image, dx, dy, drawWidth, drawHeight);
    };
    image.src = source;
  }, [source, aspect, zoom, x, y]);

  function choose(file?: File) {
    setError('');
    setCropped(null);
    if (!file) return;
    if (!file.type.startsWith('image/') || file.size > 5 * 1024 * 1024) {
      setError('Pilih file gambar maksimal 5 MB.');
      return;
    }
    setFileName(file.name);
    setZoom(1); setX(50); setY(50);
    setSource(URL.createObjectURL(file));
  }

  function close() {
    URL.revokeObjectURL(source);
    setSource('');
  }

  function applyCrop() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setBusy(true);
    canvas.toBlob(blob => {
      if (blob) {
        setCropped(new File([blob], `${fileName.replace(/\.[^.]+$/, '')}-cropped.jpg`, { type: 'image/jpeg' }));
        close();
      } else setError('Gagal memproses gambar. Coba file lain.');
      setBusy(false);
    }, 'image/jpeg', 0.92);
  }

  return <div className="text-sm text-gray-300">
    <label className="block">{label}<input type="file" accept="image/*" required={required && !cropped} onChange={event => choose(event.target.files?.[0])} className="mt-2 block w-full" /></label>
    <input type="file" name={name} required={required} className="hidden" ref={element => {
      if (!element) return;
      const transfer = new DataTransfer();
      if (cropped) transfer.items.add(cropped);
      element.files = transfer.files;
    }} />
    {cropped && <p className="mt-1 text-xs text-cyan-300">Crop siap diunggah: {cropped.name}</p>}
    {error && <p role="alert" className="mt-1 text-xs text-red-400">{error}</p>}
    {source && <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4" role="dialog" aria-modal="true" aria-labelledby={`${name}-crop-title`}>
      <div className="glass-card w-full max-w-xl p-5">
        <h2 id={`${name}-crop-title`} className="text-lg font-semibold">Atur crop gambar</h2>
        <canvas ref={canvasRef} className="mt-4 max-h-[55vh] w-full rounded-lg bg-black object-contain" style={{ aspectRatio: String(aspect) }} />
        <label className="mt-4 block text-xs">Zoom <input type="range" min="1" max="3" step="0.01" value={zoom} onChange={event => setZoom(Number(event.target.value))} className="ml-3 align-middle" /></label>
        <label className="mt-3 block text-xs">Geser horizontal <input type="range" min="0" max="100" value={x} onChange={event => setX(Number(event.target.value))} className="ml-3 align-middle" /></label>
        <label className="mt-3 block text-xs">Geser vertikal <input type="range" min="0" max="100" value={y} onChange={event => setY(Number(event.target.value))} className="ml-3 align-middle" /></label>
        <div className="mt-5 flex justify-end gap-3"><button type="button" onClick={close} className="rounded-lg border border-white/10 px-4 py-2">Batal</button><button type="button" disabled={busy} onClick={applyCrop} className="glass-button rounded-lg px-4 py-2">{busy ? 'Memproses…' : 'Pakai crop'}</button></div>
      </div>
    </div>}
  </div>;
}
