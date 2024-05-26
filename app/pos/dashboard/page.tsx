import Dashboard from "@/components/menu/dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Home() {
  return <Dashboard />;
}
