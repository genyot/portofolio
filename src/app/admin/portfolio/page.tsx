import { prisma } from '@/lib/prisma';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { redirect } from 'next/navigation';
import AdminLayout from '@/components/AdminLayout';
import AdminPortfolio from '../AdminPortfolio';

export default async function AdminPortfolioPage() {
  if (!(await isAdminAuthenticated())) redirect('/login');
  const data = await prisma.portfolio.findMany({ orderBy: { order: 'asc' } });
  return <AdminLayout active="/admin/portfolio"><section className="glass-card p-5 md:p-7"><AdminPortfolio initialData={data} /></section></AdminLayout>;
}
