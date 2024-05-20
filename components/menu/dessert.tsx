import { ActionButton } from "../ui/actionButton";
import { Card } from "../ui/card";

export function DessertMenu({ desserts }: any) {
  return (
    <div className="flex flex-wrap max-h-[96vh] border-2">
      {desserts.map((dessert: any) => (
        <div
          key={dessert.id}
          className="w-40 h-52 border flex flex-col items-center justify-around "
        >
          <p className="font-sm">{dessert.name}</p>
          <Card item={dessert} />
          <ActionButton beverage={dessert} />
        </div>
      ))}
    </div>
  );
}
