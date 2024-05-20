import KeypadComponent from "./keypad";
import { Cart } from "./cart";

export function Payment() {
  return (
    <aside className="">
      <div className="h-80 border">
        <Cart />
      </div>
      <KeypadComponent />
    </aside>
  );
}
