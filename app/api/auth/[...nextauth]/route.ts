import { users } from "@/app/data/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface AuthOptions {
  providers: any[];
  secret: string | undefined;
  callbacks: {
    session({ session, token }: any): Promise<any>;
    jwt({ token, user }: any): Promise<any>;
  };
  pages: {
    signIn: string;
  };
}

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = users.find(
          (user) =>
            user.name === credentials?.username &&
            user.password === credentials?.password
        );
        if (user) {
          return user;
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  callbacks: {
    async session({ session, token }: any) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
