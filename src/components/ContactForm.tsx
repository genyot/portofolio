'use client';

import { useState } from 'react';
import { sendMessage } from '@/app/actions/contact';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function action(formData: FormData) {
    setStatus('loading');
    const res = await sendMessage(formData);
    
    if (res?.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMsg(res?.error || 'Terjadi kesalahan');
    }
  }

  if (status === 'success') {
    return (
      <div className="glass-card p-6 mt-10 text-center animate-fade-up">
        <p className="text-cyan-400 font-medium mb-2">Pesan berhasil dikirim!</p>
        <p className="text-sm text-gray-400">Terima kasih telah menghubungi, saya akan segera merespons.</p>
        <button 
          onClick={() => setStatus('idle')} 
          className="mt-4 text-xs text-gray-500 hover:text-white transition-colors"
        >
          Kirim pesan lain
        </button>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-4 w-full max-w-lg mx-auto text-left mt-10 animate-fade-up animation-delay-300">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input 
          type="text" 
          name="name" 
          required 
          placeholder="Nama Anda" 
          className="glass-card p-4 bg-transparent text-white text-sm outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50" 
        />
        <input 
          type="email" 
          name="email" 
          required 
          placeholder="Email Anda" 
          className="glass-card p-4 bg-transparent text-white text-sm outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50" 
        />
      </div>
      <textarea 
        name="message" 
        required 
        placeholder="Tulis pesan Anda di sini..." 
        rows={4} 
        className="glass-card p-4 bg-transparent text-white text-sm outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 resize-none"
      ></textarea>
      
      {status === 'error' && (
        <p className="text-red-400 text-xs mt-1">{errorMsg}</p>
      )}
      
      <button 
        type="submit" 
        disabled={status === 'loading'} 
        className="glass-button rounded-xl p-4 text-sm font-bold text-white disabled:opacity-50 transition-all hover:bg-cyan-900/20"
      >
        {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
      </button>
    </form>
  );
}
