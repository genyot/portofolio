import { prisma } from '@/lib/prisma';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { redirect } from 'next/navigation';
import AdminLayout from '@/components/AdminLayout';
import AdminContent from '../AdminContent';

export default async function AdminContentPage() {
  if (!(await isAdminAuthenticated())) redirect('/login');
  const [services, skills] = await Promise.all([
    prisma.service.findMany({ orderBy: { order: 'asc' } }),
    prisma.skill.findMany({ orderBy: { order: 'asc' } }),
  ]);
  return <AdminLayout active="/admin/content"><section className="glass-card p-5 md:p-7"><AdminContent services={services} skills={skills} /></section></AdminLayout>;
}
