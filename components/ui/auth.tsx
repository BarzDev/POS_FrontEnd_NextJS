"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export function AuthButton() {
  const { data: session } = useSession();
  return (
    <div>
      {!session ? (
        <>
          <h1>Welcome to NextAuth.js with Next.js App Router</h1>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      ) : (
        <>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
}
