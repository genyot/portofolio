'use server';

import { prisma } from '@/lib/prisma';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { revalidatePath } from 'next/cache';
import { put } from '@vercel/blob';

export async function savePlaylist(id: string | null, formData: FormData) {
  if (!(await isAdminAuthenticated())) return { error: 'Tidak diizinkan.' };
  const spotifyId = String(formData.get('spotifyId') ?? '').trim();
  const title = String(formData.get('title') ?? '').trim();
  const subtitle = String(formData.get('subtitle') ?? '').trim();
  const order = Number(formData.get('order') ?? 0);
  if (!/^[A-Za-z0-9]{10,}$/.test(spotifyId) || !title || !subtitle || !Number.isInteger(order)) return { error: 'Data playlist tidak valid.' };
  const data = { spotifyId, title, subtitle, order };
  if (id) await prisma.playlist.update({ where: { id }, data }); else await prisma.playlist.create({ data });
  revalidatePath('/'); revalidatePath('/music'); revalidatePath('/admin/music');
  return { success: true };
}

export async function deletePlaylist(id: string) {
  if (!(await isAdminAuthenticated())) return { error: 'Tidak diizinkan.' };
  await prisma.playlist.delete({ where: { id } });
  revalidatePath('/'); revalidatePath('/music'); revalidatePath('/admin/music');
  return { success: true };
}

export async function saveSocialLink(id: string | null, formData: FormData) {
  if (!(await isAdminAuthenticated())) return { error: 'Tidak diizinkan.' };
  const href = String(formData.get('href') ?? '').trim();
  const label = String(formData.get('label') ?? '').trim();
  const icon = String(formData.get('icon') ?? '').trim();
  const order = Number(formData.get('order') ?? 0);
  try { if (!['http:', 'https:'].includes(new URL(href).protocol)) throw new Error(); } catch { return { error: 'URL harus menggunakan http atau https.' }; }
  if (!label || !icon || !Number.isInteger(order)) return { error: 'Data sosial tidak valid.' };
  const data = { href, label, icon, order };
  if (id) await prisma.socialLink.update({ where: { id }, data }); else await prisma.socialLink.create({ data });
  revalidatePath('/'); revalidatePath('/social'); revalidatePath('/admin/social');
  return { success: true };
}

export async function deleteSocialLink(id: string) {
  if (!(await isAdminAuthenticated())) return { error: 'Tidak diizinkan.' };
  await prisma.socialLink.delete({ where: { id } });
  revalidatePath('/'); revalidatePath('/social'); revalidatePath('/admin/social');
  return { success: true };
}

export async function saveProfile(formData: FormData) {
  if (!(await isAdminAuthenticated())) return { error: 'Tidak diizinkan.' };
  const name = String(formData.get('name') ?? '').trim(); const title = String(formData.get('title') ?? '').trim();
  const bio = String(formData.get('bio') ?? '').trim(); const email = String(formData.get('email') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim(); const whatsappUrl = String(formData.get('whatsappUrl') ?? '').trim();
  const current = await prisma.siteProfile.findUnique({ where: { id: 'main' } });
  const uploaded = formData.get('photo');
  let photo = current?.photo ?? '/images/profile.jpg';
  if (uploaded instanceof File && uploaded.size > 0) {
    if (!uploaded.type.startsWith('image/') || uploaded.size > 5 * 1024 * 1024) return { error: 'Foto harus berupa gambar maksimal 5 MB.' };
    const ext = uploaded.name.split('.').pop()?.replace(/[^a-zA-Z0-9]/g, '') || 'img';
    try {
      const blob = await put(`profile/${crypto.randomUUID()}.${ext}`, uploaded, { access: 'public', contentType: uploaded.type });
      photo = blob.url;
    } catch (error) {
      console.error('Profile image upload failed:', error);
      return { error: 'Gagal mengunggah foto profil. Pastikan Blob token sudah dikonfigurasi.' };
    }
  }
  if (!name || !title || !email.includes('@') || !phone) return { error: 'Periksa data profil.' };
  try { if (!['http:', 'https:'].includes(new URL(whatsappUrl).protocol)) throw new Error(); } catch { return { error: 'URL WhatsApp harus http atau https.' }; }
  try {
    await prisma.siteProfile.upsert({ where: { id: 'main' }, create: { id: 'main', name, title, bio, email, phone, whatsappUrl, photo }, update: { name, title, bio, email, phone, whatsappUrl, photo } });
  } catch (error) {
    console.error('Profile save failed:', error);
    return { error: 'Gagal menyimpan profil ke database.' };
  }
  revalidatePath('/'); revalidatePath('/contact'); revalidatePath('/admin/profile');
  return { success: true };
}

export async function deleteMessage(id: string) {
  if (!(await isAdminAuthenticated())) return { error: 'Tidak diizinkan.' };
  await prisma.message.delete({ where: { id } });
  revalidatePath('/admin'); revalidatePath('/admin/messages');
  return { success: true };
}

export async function toggleMessageRead(id: string, read: boolean) {
  if (!(await isAdminAuthenticated())) return { error: 'Tidak diizinkan.' };
  await prisma.message.update({ where: { id }, data: { read } });
  revalidatePath('/admin/messages');
  return { success: true };
}
