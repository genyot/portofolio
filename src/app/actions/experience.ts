'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { isAdminAuthenticated } from '@/lib/admin-auth';

export async function getExperiences() {
  return await prisma.experience.findMany({
    orderBy: { order: 'asc' }
  });
}

export async function updateExperience(id: string, formData: FormData) {
  if (!(await isAdminAuthenticated())) return { error: 'Tidak diizinkan.' };
  const title = String(formData.get('title') ?? '').trim();
  const company = String(formData.get('company') ?? '').trim();
  const description = String(formData.get('description') ?? '').trim();
  const order = Number(formData.get('order') ?? 0);
  if (!title || !company || !description || !Number.isInteger(order)) return { error: 'Periksa kembali isian.' };
  try {
    await prisma.experience.update({ where: { id }, data: { title, company, description, order } });
    revalidatePath('/'); revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: 'Gagal memperbarui pengalaman.' };
  }
}

export async function addExperience(formData: FormData) {
  if (!(await isAdminAuthenticated())) return { error: 'Tidak diizinkan.' };
  const title = formData.get('title') as string;
  const company = formData.get('company') as string;
  const description = formData.get('description') as string;
  const orderStr = formData.get('order') as string;
  const order = orderStr ? parseInt(orderStr) : 0;

  if (!title || !company || !description) {
    return { error: 'Semua field wajib diisi' };
  }

  try {
    await prisma.experience.create({
      data: { title, company, description, order }
    });
    revalidatePath('/');
    revalidatePath('/admin');
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: 'Gagal menambahkan pengalaman' };
  }
}

export async function deleteExperience(id: string) {
  if (!(await isAdminAuthenticated())) return { error: 'Tidak diizinkan.' };
  try {
    await prisma.experience.delete({ where: { id } });
    revalidatePath('/');
    revalidatePath('/admin');
    return { success: true };
  } catch (e) {
    return { error: 'Gagal menghapus pengalaman' };
  }
}
