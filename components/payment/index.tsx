import KeypadComponent from "./keypad";
import { Cart } from "./cart";

export function Payment() {
  return (
    <aside className="">
      <div className="h-80 w-72 border overflow-y-scroll border-4">
        <Cart />
      </div>
      <KeypadComponent />
    </aside>
  );
}
