import { prisma } from '@/lib/prisma';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { redirect } from 'next/navigation';
import AdminLayout from '@/components/AdminLayout';
import AdminMessages from './AdminMessages';
export default async function AdminMessagesPage() {
  if (!(await isAdminAuthenticated())) redirect('/login');
  const messages = await prisma.message.findMany({ orderBy: { createdAt: 'desc' } });
  return <AdminLayout active="/admin/messages"><section className="glass-card p-5 md:p-7"><AdminMessages messages={messages}/></section></AdminLayout>;
}
