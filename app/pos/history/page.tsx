import History from "@/components/menu/history";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "History Transaction",
};
export default function Page() {
  return (
    <div>
      <p>HISTORY</p>
      <History />
    </div>
  );
}
