import { prisma } from '@/lib/prisma';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { redirect } from 'next/navigation';
import AdminLayout from '@/components/AdminLayout';
import AdminExperience from '../AdminExperience';

export default async function AdminExperiencePage() {
  if (!(await isAdminAuthenticated())) redirect('/login');
  const data = await prisma.experience.findMany({ orderBy: { order: 'asc' } });
  return <AdminLayout active="/admin/experience"><section className="glass-card p-5 md:p-7"><AdminExperience initialData={data} /></section></AdminLayout>;
}
