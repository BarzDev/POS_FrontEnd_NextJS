"use client";
import { clearCart, removeItem } from "@/redux/cartSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export function Cart() {
  const carts = useSelector((state: RootState) => state.cart.value);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const delIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
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
        <div className="p-2 w-full bg-green-600 text-white cursor-pointer rounded">
          Total Price : ${totalPrice}
        </div>
        <div
          className="p-2 w-full bg-red-600 text-white cursor-pointer rounded flex justify-between"
          onClick={clear}
        >
          clear cart
          {delIcon}
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
