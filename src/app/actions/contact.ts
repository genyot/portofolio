'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function sendMessage(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'Semua field wajib diisi' };
  }

  try {
    await prisma.message.create({
      data: { name, email, message },
    });
    revalidatePath('/');
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: 'Gagal mengirim pesan' };
  }
}
