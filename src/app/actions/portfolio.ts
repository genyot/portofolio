'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { put, del } from '@vercel/blob';
import { isAdminAuthenticated } from '@/lib/admin-auth';

const aspects = ['aspect-square', 'aspect-[4/5]', 'aspect-[3/4]', 'aspect-video'];

function readFields(formData: FormData) {
  const title = String(formData.get('title') ?? '').trim();
  const category = String(formData.get('category') ?? '').trim();
  const aspect = String(formData.get('aspect') ?? 'aspect-square');
  const type = String(formData.get('type') ?? 'design');
  const description = String(formData.get('description') ?? '').trim();
  const rawDemoUrl = String(formData.get('demoUrl') ?? '').trim();
  const rawOrder = String(formData.get('order') ?? '0').trim();
  const order = Number(rawOrder);
  let demoUrl: string | null = null;
  if (!title || !category || !Number.isInteger(order) || !aspects.includes(aspect) || !['design', 'website'].includes(type)) return { error: 'Periksa kembali isian karya.' } as const;
  if (rawDemoUrl) {
    try {
      const url = new URL(rawDemoUrl);
      if (!['http:', 'https:'].includes(url.protocol)) throw new Error();
      demoUrl = url.toString();
    } catch { return { error: 'URL demo harus menggunakan http atau https.' } as const; }
  }
  if (type === 'website' && !demoUrl) return { error: 'URL demo wajib untuk karya website.' } as const;
  return { data: { title, category, aspect, type, description: description || null, demoUrl, order } } as const;
}

function refreshPortfolio() {
  revalidatePath('/');
  revalidatePath('/portfolio');
  revalidatePath('/admin');
  revalidatePath('/admin/portfolio');
}

async function uploadImage(file: File) {
  const ext = file.name.split('.').pop()?.replace(/[^a-zA-Z0-9]/g, '') || 'img';
  return put(`portfolio/${crypto.randomUUID()}.${ext}`, file, { access: 'public', contentType: file.type });
}

export async function getPortfolios() {
  return prisma.portfolio.findMany({ orderBy: { order: 'asc' } });
}

export async function updatePortfolio(id: string, formData: FormData) {
  if (!(await isAdminAuthenticated())) return { error: 'Tidak diizinkan.' };
  const fields = readFields(formData);
  if ('error' in fields) return fields;
  const file = formData.get('image');
  if (file instanceof File && file.size > 0 && (!file.type.startsWith('image/') || file.size > 5 * 1024 * 1024)) return { error: 'File harus berupa gambar maksimal 5 MB.' };
  let uploadedUrl: string | null = null;
  try {
    const current = await prisma.portfolio.findUniqueOrThrow({ where: { id } });
    if (file instanceof File && file.size > 0) uploadedUrl = (await uploadImage(file)).url;
    await prisma.portfolio.update({ where: { id }, data: { ...fields.data, image: uploadedUrl ?? current.image } });
    if (uploadedUrl && current.image.includes('.public.blob.vercel-storage.com/')) await del(current.image).catch(error => console.error('Gagal menghapus blob lama:', error));
    refreshPortfolio();
    return { success: true };
  } catch (error) {
    if (uploadedUrl) await del(uploadedUrl).catch(cleanupError => console.error('Gagal membersihkan blob baru:', cleanupError));
    console.error(error);
    return { error: 'Gagal memperbarui karya.' };
  }
}

export async function addPortfolio(formData: FormData) {
  if (!(await isAdminAuthenticated())) return { error: 'Tidak diizinkan.' };
  const fields = readFields(formData);
  if ('error' in fields) return fields;
  const file = formData.get('image');
  if (!(file instanceof File) || file.size === 0 || !file.type.startsWith('image/') || file.size > 5 * 1024 * 1024) return { error: 'Gambar wajib diisi dan harus berupa gambar maksimal 5 MB.' };
  let uploadedUrl: string | null = null;
  try {
    uploadedUrl = (await uploadImage(file)).url;
    await prisma.portfolio.create({ data: { ...fields.data, image: uploadedUrl } });
    refreshPortfolio();
    return { success: true };
  } catch (error) {
    if (uploadedUrl) await del(uploadedUrl).catch(cleanupError => console.error('Gagal membersihkan blob baru:', cleanupError));
    console.error(error);
    return { error: 'Gagal menambahkan karya.' };
  }
}

export async function deletePortfolio(id: string) {
  if (!(await isAdminAuthenticated())) return { error: 'Tidak diizinkan.' };
  try {
    const portfolio = await prisma.portfolio.findUnique({ where: { id } });
    if (!portfolio) return { error: 'Karya tidak ditemukan.' };
    await prisma.portfolio.delete({ where: { id } });
    if (portfolio.image.includes('.public.blob.vercel-storage.com/')) await del(portfolio.image).catch(error => console.error('Gagal menghapus blob:', error));
    refreshPortfolio();
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: 'Gagal menghapus karya.' };
  }
}
