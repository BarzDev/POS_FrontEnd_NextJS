import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const cartSlice: any = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.find(
        (item: { id: any }) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      return state.filter((item: { id: any }) => item.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.find(
        (item: { id: any }) => item.id === action.payload
      );
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.find(
        (item: { id: any }) => item.id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    clearCart() {
      return initialState;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
