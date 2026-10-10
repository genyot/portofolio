'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { put, del } from '@vercel/blob';
import { isAdminAuthenticated } from '@/lib/admin-auth';

export async function getPortfolios() {
  return await prisma.portfolio.findMany({
    orderBy: { order: 'asc' }
  });
}

export async function updatePortfolio(id: string, formData: FormData) {
  if (!(await isAdminAuthenticated())) return { error: 'Tidak diizinkan.' };
  const title = String(formData.get('title') ?? '').trim();
  const category = String(formData.get('category') ?? '').trim();
  const aspect = String(formData.get('aspect') ?? 'aspect-square');
  const order = Number(formData.get('order') ?? 0);
  const file = formData.get('image');
  if (!title || !category || !Number.isInteger(order)) return { error: 'Periksa kembali isian.' };
  try {
    const current = await prisma.portfolio.findUniqueOrThrow({ where: { id } });
    let image = current.image;
    if (file instanceof File && file.size > 0) {
      if (!file.type.startsWith('image/') || file.size > 5 * 1024 * 1024) return { error: 'File harus berupa gambar maksimal 5 MB.' };
      const ext = file.name.split('.').pop()?.replace(/[^a-zA-Z0-9]/g, '') || 'img';
      const filename = `portfolio/${crypto.randomUUID()}.${ext}`;
      const blob = await put(filename, file, { access: 'public', contentType: file.type });
      image = blob.url;
      if (current.image.includes('.public.blob.vercel-storage.com/')) await del(current.image).catch(() => {});
    }
    await prisma.portfolio.update({ where: { id }, data: { title, category, aspect, order, image } });
    revalidatePath('/'); revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: 'Gagal memperbarui karya.' };
  }
}

export async function addPortfolio(formData: FormData) {
  if (!(await isAdminAuthenticated())) return { error: 'Tidak diizinkan.' };
  const title = formData.get('title') as string;
  const category = formData.get('category') as string;
  const aspect = formData.get('aspect') as string || 'aspect-square';
  const file = formData.get('image') as File;
  const orderStr = formData.get('order') as string;
  const order = orderStr ? parseInt(orderStr) : 0;

  if (!title || !category || !file || file.size === 0 || !file.type.startsWith('image/') || file.size > 5 * 1024 * 1024) {
    return { error: 'Judul dan Gambar wajib diisi' };
  }

  try {
    const ext = file.name.split('.').pop()?.replace(/[^a-zA-Z0-9]/g, '') || 'img';
    const blob = await put(`portfolio/${crypto.randomUUID()}.${ext}`, file, { access: 'public', contentType: file.type });
    const imageUrl = blob.url;

    await prisma.portfolio.create({
      data: {
        title,
        category,
        aspect,
        image: imageUrl,
        order,
      }
    });

    revalidatePath('/');
    revalidatePath('/admin');
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: 'Gagal menambahkan karya' };
  }
}

export async function deletePortfolio(id: string) {
  if (!(await isAdminAuthenticated())) return { error: 'Tidak diizinkan.' };
  try {
    const portfolio = await prisma.portfolio.findUnique({ where: { id } });
    if (portfolio) {
      if (portfolio.image.includes('.public.blob.vercel-storage.com/')) await del(portfolio.image).catch(error => console.error('Gagal menghapus blob:', error));
      // Hapus dari database
      await prisma.portfolio.delete({ where: { id } });
      revalidatePath('/');
      revalidatePath('/admin');
    }
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: 'Gagal menghapus karya' };
  }
}
