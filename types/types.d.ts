import { DefaultSession, DefaultUser } from "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role?: string | null | undefined;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    role?: string | null | undefined;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role?: string | null | undefined;
  }
}
