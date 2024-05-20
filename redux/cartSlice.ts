import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  value: CartItem[];
}

interface CartItem {
  id: number;
  // name: string;
  // price: number;
  quantity: number;
}

const initialState: CartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.value.findIndex(
        (obj) => obj.id === action.payload.id
      );
      if (index === -1) {
        state.value.push({ ...action.payload, quantity: 1 });
      } else {
        state.value[index].quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        if (state.value[itemIndex].quantity > 1) {
          state.value[itemIndex].quantity--;
        } else {
          state.value.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const { addToCart, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
