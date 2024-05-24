import { ActionButton } from "../ui/actionButton";
import { Card } from "../ui/card";

export function DessertMenu({ desserts }: any) {
  return (
    <div className="grid grid-cols-5 max-h-[96vh] ">
      {desserts.map((dessert: any) => (
        <div
          key={dessert.id}
          className="w-40 h-52 border flex flex-col items-center justify-around mt-4"
        >
          <p className="font-sm text-center">
            {dessert.name} [$.{dessert.price}]
          </p>
          <Card item={dessert} />
          <ActionButton beverage={dessert} />
        </div>
      ))}
    </div>
  );
}
