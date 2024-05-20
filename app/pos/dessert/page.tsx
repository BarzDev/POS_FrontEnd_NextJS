import { DessertMenu } from "@/components/menu/dessert";
import fs from "fs/promises";
import { Metadata } from "next";
import path from "path";

export const metadata: Metadata = {
  title: "Dessert",
};

export default async function Page() {
  const filePath = path.join(process.cwd(), "app/data/desserts.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const desserts = JSON.parse(fileContents);

  return (
    <div className="">
      <DessertMenu desserts={desserts} />
    </div>
  );
}
