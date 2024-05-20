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
    <div>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleReduceToCart}>reduce to cart</button>
    </div>
  );
}
