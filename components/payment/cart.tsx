"use client";
import { clearCart } from "@/redux/cartSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export function Cart() {
  const carts = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  const TotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < carts.length; i++) {
      totalPrice += carts[i].price * carts[i].quantity;
    }
    return totalPrice;
  };

  const clear = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="p-2 w-full bg-green-600 text-white cursor-pointer rounded">
        Total Price : ${TotalPrice()}
      </div>
      <div
        className="p-2 w-full bg-red-600 text-white cursor-pointer rounded"
        onClick={clear}
      >
        clear cart
      </div>
      {carts.map((cart, i: any) => (
        <div key={cart.id} className="flex w-content border justify-between">
          <p>{i + 1}</p>
          <p>{cart.name}</p>
          <p>${cart.price}</p>
          <p> x {cart.quantity}</p>
        </div>
      ))}
    </>
  );
}
