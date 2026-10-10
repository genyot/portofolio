import { isAdminAuthenticated } from '@/lib/admin-auth';
import { redirect } from 'next/navigation';
import LoginForm from './LoginForm';

export default async function LoginPage() {
  if (await isAdminAuthenticated()) redirect('/admin');

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-md items-center px-5">
      <LoginForm />
    </main>
  );
}
