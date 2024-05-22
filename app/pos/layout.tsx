"use client";

import { Payment } from "@/components/payment";
import { Sidebar } from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: sesion, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [router, status]);

  return (
    <main
      className="grid grid-cols-3 gap-4 max-h-screen"
      style={{ gridTemplateColumns: "15% 60% 20%" }}
    >
      <Sidebar />
      {children}
      <Payment />
    </main>
  );
}
