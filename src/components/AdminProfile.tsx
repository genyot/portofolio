'use client';
import { useState } from 'react';
import Image from 'next/image';
import { saveProfile } from '@/app/actions/extra-content';
type Profile={name:string;title:string;bio:string;photo:string;email:string;phone:string;whatsappUrl:string}|null;
const field='w-full rounded-lg border border-white/10 bg-black/40 p-3 text-sm text-white outline-none focus:border-cyan-400/50';
export default function AdminProfile({profile}:{profile:Profile}){
 const[error,setError]=useState('');const[saved,setSaved]=useState(false);const[preview,setPreview]=useState(profile?.photo??'/images/profile.jpg');
 async function submit(data:FormData){setError('');setSaved(false);try{const result=await saveProfile(data);if(result?.error)setError(result.error);else{setSaved(true);window.location.reload()}}catch{setError('Gagal menyimpan profil. Periksa file gambar dan coba lagi.')}}
 return <><h2 className="mb-5 text-xl font-semibold">Profil Website</h2><form action={submit} className="grid max-w-3xl gap-4 sm:grid-cols-2">
 <label className="text-sm text-gray-400">Nama<input name="name" required defaultValue={profile?.name??'Muhammad Rido Ramdene'} className={`${field} mt-2`}/></label>
 <label className="text-sm text-gray-400">Jabatan / pendidikan<input name="title" required defaultValue={profile?.title??'S1 Sistem Informasi'} className={`${field} mt-2`}/></label>
 <label className="text-sm text-gray-400 sm:col-span-2">Bio<textarea name="bio" rows={5} defaultValue={profile?.bio??''} className={`${field} mt-2`}/></label>
 <label className="block min-w-0 text-sm text-gray-400 sm:col-span-2">Foto profil<input name="photo" type="file" accept="image/*" onChange={event=>{const file=event.target.files?.[0];if(file)setPreview(URL.createObjectURL(file))}} className="mt-2 block w-full min-w-0 text-sm"/><span className="mt-1 block text-xs text-gray-500">Maksimal 5 MB; kosongkan untuk tetap memakai foto saat ini.</span></label>
 <div className="flex min-w-0 flex-col items-start gap-2 sm:col-span-2"><span className="text-xs text-gray-400">Preview foto profil</span><div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border border-white/20"><Image src={preview} alt="Foto profil" fill className="object-cover" unoptimized onError={() => setPreview('/images/profile.jpg')}/></div></div>
 <label className="text-sm text-gray-400">Email<input name="email" type="email" required defaultValue={profile?.email??'ridhoramdana985@gmail.com'} className={`${field} mt-2`}/></label>
 <label className="text-sm text-gray-400">Nomor telepon<input name="phone" required defaultValue={profile?.phone??'+62 819-1732-0266'} className={`${field} mt-2`}/></label>
 <label className="text-sm text-gray-400 sm:col-span-2">Link WhatsApp<input name="whatsappUrl" type="url" required defaultValue={profile?.whatsappUrl??'https://wa.me/+6281917320266'} className={`${field} mt-2`}/></label>
 {error&&<p role="alert" className="text-sm text-red-400 sm:col-span-2">{error}</p>}{saved&&<p role="status" className="text-sm text-cyan-300 sm:col-span-2">Profil tersimpan.</p>}<button className="glass-button rounded-lg p-3 font-semibold sm:col-span-2">Simpan profil</button></form></>
}
