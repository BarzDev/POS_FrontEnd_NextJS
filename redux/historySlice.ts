import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./cartSlice";
import { history } from "@/app/data/history";

interface Transaction {
  date: string;
  totalPrice: number;
  items: CartItem[];
}

interface HistoryState {
  transactions: Transaction[];
}

const initialState: HistoryState = {
  transactions: history,
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addTransaction(state, action: PayloadAction<Transaction>) {
      state.transactions.push(action.payload);
    },
    clearHistory(state) {
      state.transactions = [];
    },
  },
});

export const { addTransaction, clearHistory } = historySlice.actions;

export default historySlice.reducer;
