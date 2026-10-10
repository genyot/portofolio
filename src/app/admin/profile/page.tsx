import { prisma } from '@/lib/prisma';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { redirect } from 'next/navigation';
import AdminLayout from '@/components/AdminLayout';
import AdminProfile from '@/components/AdminProfile';
export default async function AdminProfilePage() {
  if (!(await isAdminAuthenticated())) redirect('/login');
  const profile = await prisma.siteProfile.findUnique({ where: { id: 'main' } });
  return <AdminLayout active="/admin/profile"><section className="glass-card p-5 md:p-7"><AdminProfile profile={profile}/></section></AdminLayout>;
}
