"use client";

import { useState } from "react";
import Keypad from "../ui/button";

const KeypadComponent = () => {
  const [input, setInput] = useState<number>(0);

  const handleInput = (key: string) => {
    const inputLength = input.toString().length;
    if (inputLength > 11) {
      window.alert("input out of range");
      return;
    }

    const numberKey = parseInt(key, 10);
    if (!isNaN(numberKey)) {
      setInput((prev) => parseInt(`${prev}${numberKey}`, 10));
    }
  };

  const handleDelete = () => {
    setInput((prev) => {
      const newValue = Math.floor(prev / 10);
      return newValue;
    });
  };

  const handleClear = () => {
    setInput(0);
  };

  const formattedInput = input.toLocaleString();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="pt-2 font-bold text-xl">Amount</h1>
      <div style={styles.display} className="border-4 border-teal-600 p-1">
        Rp. {formattedInput}
      </div>

      <div className=" flex items-center justify-end w-64 mb-2 gap-2">
        <button
          onClick={handleClear}
          style={styles.button}
          className="flex items-center justify-center bg-rose-600 text-white "
        >
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
        </button>
        <button
          onClick={handleDelete}
          style={styles.button}
          className="flex items-center justify-center bg-green-600 text-white"
        >
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
              d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
            />
          </svg>
        </button>
      </div>
      <Keypad onInput={handleInput} />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  display: {
    margin: "10px 0",
    fontSize: "20px",
    width: "250px",
    textAlign: "center",
  },
  button: {
    borderRadius: "10px",
    width: "45px",
    height: "45px",
    padding: "3px",
    fontSize: "20px",
    cursor: "pointer",
  },
};

export default KeypadComponent;
