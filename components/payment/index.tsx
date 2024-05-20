import KeypadComponent from "./keypad";
import { Cart } from "./cart";

export function Payment() {
  return (
    <aside className="">
      <div className="h-80 w-full border overflow-y-scroll ">
        <Cart />
      </div>
      <KeypadComponent />
    </aside>
  );
}
