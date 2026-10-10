import { prisma } from '@/lib/prisma';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { redirect } from 'next/navigation';
import AdminLayout from '@/components/AdminLayout';
import AdminExtraContent from '@/components/AdminExtraContent';
export default async function AdminSocialPage() {
  if (!(await isAdminAuthenticated())) redirect('/login');
  const items = await prisma.socialLink.findMany({ orderBy: { order: 'asc' } });
  return <AdminLayout active="/admin/social"><section className="glass-card p-5 md:p-7"><AdminExtraContent kind="social" items={items}/></section></AdminLayout>;
}
