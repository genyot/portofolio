import { prisma } from '@/lib/prisma';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { redirect } from 'next/navigation';
import AdminLayout from '@/components/AdminLayout';
import AdminExtraContent from '@/components/AdminExtraContent';
export default async function AdminMusicPage() {
  if (!(await isAdminAuthenticated())) redirect('/login');
  const items = await prisma.playlist.findMany({ orderBy: { order: 'asc' } });
  return <AdminLayout active="/admin/music"><section className="glass-card p-5 md:p-7"><AdminExtraContent kind="playlist" items={items}/></section></AdminLayout>;
}
