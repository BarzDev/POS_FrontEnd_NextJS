import { ActionButton } from "../ui/actionButton";
import { Card } from "../ui/card";

export function BeverageMenu({ beverages }: any) {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center  max-h-[96vh] border-2 overflow-y-scroll">
      {beverages.map((beverage: any) => (
        <div
          key={beverage.id}
          className="w-40 h-52 border flex flex-col items-center justify-around "
        >
          <p className="font-sm">{beverage.name}</p>
          <Card item={beverage} />
          <ActionButton beverage={beverage} />
        </div>
      ))}
    </div>
  );
}
