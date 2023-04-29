import { AuthUser } from '@/components/model/user';
import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: AuthUser;
  }
}
