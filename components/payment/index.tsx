"use client";
import { useSelector } from "react-redux";
import KeypadComponent from "./keypad";
import { RootState } from "@/redux/store";

export function Payment() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const cart = useSelector((state: RootState) => state.cart.value);

  console.log({ cart });
  return (
    <aside className="">
      <div className="h-80 border">
        tes
        <h1>Counter: {counter}</h1>
        <h1>Cart: {cart.length}</h1>
      </div>
      <KeypadComponent />
    </aside>
  );
}
