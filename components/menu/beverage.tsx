import { ActionButton } from "../ui/actionButton";
import { Card } from "../ui/card";

export function BeverageMenu({ beverages }: any) {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center max-h-[96vh] overflow-auto">
      {beverages.map((beverage: any) => (
        <div
          key={beverage.id}
          className="w-40 h-52 border flex flex-col items-center justify-around mt-4"
        >
          <p className="font-sm text-center">
            {beverage.name} [$.{beverage.price}]
          </p>
          <Card item={beverage} />
          <ActionButton beverage={beverage} />
        </div>
      ))}
    </div>
  );
}
