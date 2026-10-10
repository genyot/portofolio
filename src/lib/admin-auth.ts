import { createHmac, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';

const COOKIE = 'admin_session';
const MAX_AGE = 60 * 60 * 24 * 7;

function secret() {
  const value = process.env.ADMIN_SESSION_SECRET;
  if (!value) throw new Error('ADMIN_SESSION_SECRET is not configured');
  return value;
}

function signature(value: string) {
  return createHmac('sha256', secret()).update(value).digest('hex');
}

export function verifyAdminCredentials(email: string, password: string) {
  const expectedEmail = process.env.ADMIN_EMAIL;
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedEmail || !expectedPassword) throw new Error('Admin credentials are not configured');
  const emailMatches = Buffer.from(email.toLowerCase());
  const expectedEmailBuffer = Buffer.from(expectedEmail.toLowerCase());
  const passwordMatches = Buffer.from(password);
  const expectedPasswordBuffer = Buffer.from(expectedPassword);
  return emailMatches.length === expectedEmailBuffer.length
    && timingSafeEqual(emailMatches, expectedEmailBuffer)
    && passwordMatches.length === expectedPasswordBuffer.length
    && timingSafeEqual(passwordMatches, expectedPasswordBuffer);
}

export async function createAdminSession() {
  const expires = Math.floor(Date.now() / 1000) + MAX_AGE;
  const value = String(expires);
  const jar = await cookies();
  jar.set(COOKIE, `${value}.${signature(value)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: MAX_AGE,
  });
}

export async function isAdminAuthenticated() {
  const value = (await cookies()).get(COOKIE)?.value;
  if (!value) return false;
  const [expires, provided] = value.split('.');
  if (!expires || !provided || Number(expires) < Math.floor(Date.now() / 1000)) return false;
  const expected = Buffer.from(signature(expires));
  const actual = Buffer.from(provided);
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export async function destroyAdminSession() {
  (await cookies()).delete(COOKIE);
}
