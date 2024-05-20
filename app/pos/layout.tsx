import { Payment } from "@/components/payment";
import { Sidebar } from "@/components/ui/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Barz-POS",
    default: "Barz-POS Dashboard",
  },
  description: "Barz-Point of Sales",
};

export default function Layout({ children }: { children: React.ReactNode }) {
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
