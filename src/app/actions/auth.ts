'use server';

import { createAdminSession, destroyAdminSession, verifyAdminCredentials } from '@/lib/admin-auth';
import { redirect } from 'next/navigation';

export async function loginAdmin(_previousState: { error: string } | null, formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');
  if (typeof email !== 'string' || typeof password !== 'string' || !verifyAdminCredentials(email, password)) {
    return { error: 'Email atau password salah.' };
  }
  await createAdminSession();
  redirect('/admin');
}

export async function logoutAdmin() {
  await destroyAdminSession();
  redirect('/login');
}
