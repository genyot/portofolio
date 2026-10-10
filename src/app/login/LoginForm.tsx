'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { loginAdmin } from '@/app/actions/auth';

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAdmin, null);

  return (
    <form action={action} className="glass-card flex w-full flex-col gap-5 p-8">
      <h1 className="font-serif text-3xl font-bold">Admin Login</h1>
      <p className="text-sm text-gray-400">Masuk untuk mengelola portfolio.</p>
      <label className="flex flex-col gap-2 text-sm text-gray-300">
        Email admin
        <input name="email" type="email" autoComplete="username" required className="rounded-lg border border-white/20 bg-black/30 p-3 text-white outline-none focus:border-cyan-400" />
      </label>
      <label className="flex flex-col gap-2 text-sm text-gray-300">
        Password admin
        <input name="password" type="password" autoComplete="current-password" required className="rounded-lg border border-white/20 bg-black/30 p-3 text-white outline-none focus:border-cyan-400" />
      </label>
      {state?.error && <p role="alert" className="text-sm text-red-400">{state.error}</p>}
      <button className="glass-button rounded-lg p-3 font-medium text-white disabled:opacity-50" type="submit" disabled={pending}>
        {pending ? 'Memeriksa...' : 'Login'}
      </button>
      <Link href="/" className="text-center text-sm text-gray-400 transition-colors hover:text-cyan-400">
        ← Kembali ke Beranda
      </Link>
    </form>
  );
}
