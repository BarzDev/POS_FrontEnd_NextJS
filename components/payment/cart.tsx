"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export function Cart() {
  const carts = useSelector((state: RootState) => state.cart.value);

  console.log({ carts });
  return (
    <>
      {carts.map((cart: any) => (
        <div key={cart.id} className="flex w-content border justify-between">
          <p>{cart.name}</p>
          <p>${cart.price}</p>
          <p> x {cart.quantity}</p>
        </div>
      ))}
    </>
  );
}
