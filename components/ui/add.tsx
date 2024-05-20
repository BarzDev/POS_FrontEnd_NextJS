"use client";
export function AddButton({ beverage }: any) {
  const handleAddToCart = () => {
    console.log("beverage:", beverage);
  };

  const handleDecreaseQuantity = () => {
    console.log("beverage:", beverage);
  };

  return (
    <div>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleDecreaseQuantity}>-</button>
    </div>
  );
}
