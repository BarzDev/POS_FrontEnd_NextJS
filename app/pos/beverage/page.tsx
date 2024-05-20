import { AddButton } from "@/components/ui/add";
import fs from "fs/promises";
import Image from "next/image";
import path from "path";

export default async function Page() {
  const filePath = path.join(process.cwd(), "app/data/beverages.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const beverages = JSON.parse(fileContents);

  return (
    <div>
      <h1>beverages</h1>
      <ul>
        {beverages.map((beverage: any) => (
          <li key={beverage.id}>
            <div>
              <p>{beverage.name}</p>
              <div className="mask mask-squircle w-12 h-12 bg-white p-1 relative hidden md:block">
                <Image
                  src={beverage.img[0].sm}
                  fill
                  style={{ objectFit: "contain" }}
                  alt={beverage.title}
                />
              </div>
              <AddButton beverage={beverage} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
