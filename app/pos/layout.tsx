import { Payment } from "@/components/payment";
import { Sidebar } from "@/components/ui/sidebar";
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
