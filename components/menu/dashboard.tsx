"use client";

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className="p-5">
      <p className="text-2xl font-bold">Hello, {session?.user?.name}</p>
      <div className="border w-full p-3">
        <p className="text-lg font-bold">
          Role accesibilty {session?.user.role}
        </p>
        <div className="px-5">
          {session?.user.role === "admin" ? (
            <ul className="list-disc">
              <li className="font-bold">Dashboard Menu</li>
              <li className="list-none">Info About the User</li>
              <li className="font-bold">Transcation Menu</li>
              <li className="list-none">1. Beverages Menu</li>
              <li className="list-none">
                List all of beverages list to input in POS system
              </li>
              <li className="list-none">2. Dessert Menu</li>
              <li className="list-none">
                List all of dessert list to input in POS system
              </li>
              <li className="font-bold">History Menu</li>
              <li className="list-none">Menu for view transaction history </li>
            </ul>
          ) : (
            <ul className="list-disc">
              <li className="font-bold">Dashboard Menu</li>
              <li className="list-none">Info About the User</li>
              <li className="font-bold">Transcation Menu</li>
              <li className="list-none">1. Beverages Menu</li>
              <li className="list-none">
                List all of beverages list to input in POS system
              </li>
              <li className="list-none">2. Dessert Menu</li>
              <li className="list-none">
                List all of dessert list to input in POS system
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
