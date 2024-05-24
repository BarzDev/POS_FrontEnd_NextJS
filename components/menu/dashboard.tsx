"use client";

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className="p-5">
      <p className="text-2xl font-bold">Hello, {session?.user?.name}</p>
      <div className="border w-full p-3">
        <p className="text-lg font-bold">
          Role Accesibilty {session?.user.role}
        </p>
        <div className="px-5">
          {session?.user.role === "admin" ? (
            <ul className="list-disc">
              <li>Dashboard Menu</li>
              <li>Beverage Menu</li>
              <li>Dessert Menu</li>
              <li>History Menu</li>
            </ul>
          ) : (
            <ul className="list-disc">
              <li>Dashboard Menu</li>
              <li>Beverage Menu</li>
              <li>Dessert Menu</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
