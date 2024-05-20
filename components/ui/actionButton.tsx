"use client";

import { addToCart, decreaseQuantity } from "@/redux/cartSlice";
import { useDispatch } from "react-redux";

export function ActionButton({ beverage }: any) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(beverage));
  };
  const handleReduceToCart = () => {
    dispatch(decreaseQuantity(beverage.id));
  };

  return (
    <div className="flex">
      <button
        className="h-10 w-10 border-2 text-xl font-bold bg-lime-600 text-white"
        onClick={handleAddToCart}
      >
        +
      </button>
      <button
        className="h-10 w-10 border-2 text-xl font-bold bg-rose-600 text-white"
        onClick={handleReduceToCart}
      >
        -
      </button>
    </div>
  );
}
