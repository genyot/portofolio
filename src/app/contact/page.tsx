import { Mail, Phone } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import PublicPageShell from '@/components/PublicPageShell';

export default function ContactPage() {
  return <PublicPageShell><section className="mx-auto max-w-4xl px-5 py-16 text-center md:py-24"><p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Say hello</p><h1 className="mt-3 font-serif text-4xl font-bold">Contact Me</h1><div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row"><a href="mailto:ridhoramdana985@gmail.com" className="glass-card flex items-center gap-4 p-4 text-gray-300 hover:text-white"><span className="glass-social"><Mail size={18}/></span><span className="text-sm">ridhoramdana985@gmail.com</span></a><a href="https://wa.me/+6281917320266" className="glass-card flex items-center gap-4 p-4 text-gray-300 hover:text-white"><span className="glass-social"><Phone size={18}/></span><span className="text-sm">+62 819-1732-0266</span></a></div><ContactForm /></section></PublicPageShell>;
}
