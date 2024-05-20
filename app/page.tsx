import { Counter } from "@/components/menu/counter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    template: "%s | Barz-POS",
    default: "Barz-POS Dashboard",
  },
  description: "Barz-Point of Sales",
};

export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <Link className="p-4 border-2 border-green-300" href={"/pos"}>
        pos
      </Link>
      <Counter />
    </main>
  );
}
