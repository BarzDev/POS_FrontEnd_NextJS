import { Counter } from "@/components/menu/counter";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    template: "%s | Barz-POS",
    default: "Barz-POS",
  },
  description: "Barz-Point of Sales",
};

export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <Link
        className="p-4 border-2 border-green-300 rounded bg-green-200 flex"
        href={"/pos"}
      >
        Menuju ke P.O.S Dashboard
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </Link>
      {/* <Counter /> */}
    </main>
  );
}
