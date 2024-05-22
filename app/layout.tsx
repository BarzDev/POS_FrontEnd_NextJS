"use client";

import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Provider store={store}>{children}</Provider>
        </SessionProvider>
      </body>
    </html>
  );
}
