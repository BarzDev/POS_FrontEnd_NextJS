import History from "@/components/menu/history";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "History Transaction",
};
export default function Page() {
  return (
    <div className="max-h-[96vh] overflow-auto">
      <History />
    </div>
  );
}
