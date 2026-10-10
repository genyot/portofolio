'use server';

import { prisma } from '@/lib/prisma';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { revalidatePath } from 'next/cache';

export async function updateService(id: string, formData: FormData) {
  if (!(await isAdminAuthenticated())) return { error: 'Tidak diizinkan.' };
  const title = String(formData.get('title') ?? '').trim();
  const description = String(formData.get('description') ?? '').trim();
  const icon = String(formData.get('icon') ?? 'BookOpen');
  const order = Number(formData.get('order') ?? 0);
  if (!title || !description || !Number.isInteger(order)) return { error: 'Periksa kembali isian.' };
  await prisma.service.update({ where: { id }, data: { title, description, icon, order } });
  revalidatePath('/'); revalidatePath('/admin');
  return { success: true };
}

export async function addService(formData: FormData) {
  if (!(await isAdminAuthenticated())) return { error: 'Tidak diizinkan.' };
  const title = String(formData.get('title') ?? '').trim();
  const description = String(formData.get('description') ?? '').trim();
  const icon = String(formData.get('icon') ?? 'BookOpen');
  const order = Number(formData.get('order') ?? 0);
  if (!title || !description || !Number.isInteger(order)) return { error: 'Periksa kembali isian.' };
  await prisma.service.create({ data: { title, description, icon, order } });
  revalidatePath('/'); revalidatePath('/admin');
  return { success: true };
}

export async function deleteService(id: string) {
  if (!(await isAdminAuthenticated())) return { error: 'Tidak diizinkan.' };
  await prisma.service.delete({ where: { id } });
  revalidatePath('/'); revalidatePath('/admin');
  return { success: true };
}

export async function updateSkill(id: string, formData: FormData) {
  if (!(await isAdminAuthenticated())) return { error: 'Tidak diizinkan.' };
  const name = String(formData.get('name') ?? '').trim();
  const icon = String(formData.get('icon') ?? 'Palette');
  const order = Number(formData.get('order') ?? 0);
  const highlight = formData.get('highlight') === 'on';
  if (!name || !Number.isInteger(order)) return { error: 'Periksa kembali isian.' };
  await prisma.skill.update({ where: { id }, data: { name, icon, order, highlight } });
  revalidatePath('/'); revalidatePath('/admin');
  return { success: true };
}

export async function addSkill(formData: FormData) {
  if (!(await isAdminAuthenticated())) return { error: 'Tidak diizinkan.' };
  const name = String(formData.get('name') ?? '').trim();
  const icon = String(formData.get('icon') ?? 'Palette');
  const order = Number(formData.get('order') ?? 0);
  const highlight = formData.get('highlight') === 'on';
  if (!name || !Number.isInteger(order)) return { error: 'Periksa kembali isian.' };
  await prisma.skill.create({ data: { name, icon, order, highlight } });
  revalidatePath('/'); revalidatePath('/admin');
  return { success: true };
}

export async function deleteSkill(id: string) {
  if (!(await isAdminAuthenticated())) return { error: 'Tidak diizinkan.' };
  await prisma.skill.delete({ where: { id } });
  revalidatePath('/'); revalidatePath('/admin');
  return { success: true };
}
