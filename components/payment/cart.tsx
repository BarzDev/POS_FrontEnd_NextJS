"use client";
import { clearCart, removeItem } from "@/redux/cartSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export function Cart() {
  const carts = useSelector((state: RootState) => state.cart.value);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const formatPrice = totalPrice.toLocaleString();

  const cartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>
  );

  const remove = (cart: any) => {
    dispatch(removeItem(cart.id));
  };

  const clear = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="sticky top-0 z-10">
        <div className="flex">
          <div className="p-2 w-4/6 bg-green-600 text-white cursor-pointer rounded ">
            <div>Total Price :</div>
            <div className="font-bold text-lg">$ {formatPrice}</div>
          </div>
          <div
            className="p-2 w-2/6 bg-red-600 text-white cursor-pointer rounded flex justify-between flex flex-col items-center justify-center"
            onClick={clear}
          >
            Clear
            {cartIcon}
          </div>
        </div>
      </div>
      {carts.map((cart, i: any) => (
        <div key={cart.id} className="flex w-content border ">
          <div className="w-1/6 border flex items-center justify-around">
            <p>{i + 1}.</p>
            <button
              onClick={() => remove(cart)}
              className=" rounded-md w-5 h-6 flex items-center justify-center bg-red-500 text-white font-bold"
            >
              x
            </button>
          </div>
          <div className="w-5/6 border">
            <p className="font-sm">{cart.name}</p>
            <div className="flex justify-between">
              <p>Price:</p>
              <p>${cart.price}</p>
              <p> x {cart.quantity}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
