import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  value: CartItem[];
  totalPrice: number;
}

interface CartItem {
  id: any;
  name: string;
  price: number;
  quantity: number;
}

const initialState: CartState = {
  value: [],
  totalPrice: 0,
};

const calculateTotalPrice = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
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
      state.totalPrice = calculateTotalPrice(state.value);
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
      state.totalPrice = calculateTotalPrice(state.value);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        state.value.splice(itemIndex, 1);
      }
      state.totalPrice = calculateTotalPrice(state.value);
    },
    clearCart: (state) => {
      state.value = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, decreaseQuantity, removeItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
