import { BeverageMenu } from "@/components/menu/beverage";
import fs from "fs/promises";
import { Metadata } from "next";
import path from "path";

export const metadata: Metadata = {
  title: "Beverages",
};

export default async function Page() {
  const filePath = path.join(process.cwd(), "app/data/beverages.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const beverages = JSON.parse(fileContents);

  return (
    <div>
      <BeverageMenu beverages={beverages} />
    </div>
  );
}
