"use client";

import { Metadata } from "next";
import { useSession } from "next-auth/react";

// export const metadata: Metadata = {
//   title: {
//     template: "%s | Barz-POS",
//     default: "Dashboard | Barz-POS",
//   },
//   description: "Barz-Point of Sales",
// };

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div>
      <p>hello</p>
      <p>{status}</p>
      <p>{session?.user?.name ?? "Guest"}</p>
      {/* <p>{session?.user?.role ?? "Role"}</p> */}
    </div>
  );
}
