"use client";
import { useSelector } from "react-redux";
import KeypadComponent from "./keypad";
import RootState from "@/redux/rootState";

export function Payment() {
  const counter = useSelector((state: RootState) => state.counter.value);
  return (
    <aside className="">
      <div className="h-80 border">
        tes
        <h1>Counter: {counter}</h1>
      </div>
      <KeypadComponent />
    </aside>
  );
}
