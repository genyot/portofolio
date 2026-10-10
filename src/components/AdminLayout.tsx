import { prisma } from '@/lib/prisma';
import AdminLayoutClient from './AdminLayoutClient';

export default async function AdminLayout({ children, active }: { children: React.ReactNode; active: string }) {
  const profile = await prisma.siteProfile.findUnique({ where: { id: 'main' }, select: { photo: true, name: true } });
  return <AdminLayoutClient active={active} photo={profile?.photo || '/images/profile.jpg'} name={profile?.name || 'Admin'}>{children}</AdminLayoutClient>;
}
