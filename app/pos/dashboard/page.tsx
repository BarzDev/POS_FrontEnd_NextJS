import Dashboard from "@/components/menu/dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Barz-POS",
    default: "Dashboard | Barz-POS",
  },
  description: "Barz-Point of Sales",
};

export default function Home() {
  return <Dashboard />;
}
