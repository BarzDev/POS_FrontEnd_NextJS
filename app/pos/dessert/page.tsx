import fs from "fs/promises";
import Image from "next/image";
import path from "path";

export default async function Page() {
  const filePath = path.join(process.cwd(), "app/data/desserts.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const desserts = JSON.parse(fileContents);

  return (
    <div>
      <h1>Desserts</h1>
      <ul>
        {desserts.map((dessert: any) => (
          <li key={dessert.id}>
            <div>
              <p>{dessert.name}</p>
              <div className="mask mask-squircle w-12 h-12 bg-white p-1 relative hidden md:block">
                <Image
                  src={dessert.img[0].sm}
                  fill
                  style={{ objectFit: "contain" }}
                  alt={dessert.title}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
