"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const History = () => {
  const transactions = useSelector(
    (state: RootState) => state.history.transactions
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Transaction History</h1>
      {transactions.map((transaction: any, index: any) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
          <h2 className="text-lg font-semibold mb-2">
            Date: {transaction.date}
          </h2>
          <p className="mb-2">Total Price: ${transaction.totalPrice}</p>
          <ul>
            {transaction.items.map((item: any, index: any) => (
              <li key={index} className="flex items-center mb-1">
                {/* <img
                  src={item.img[0].sm}
                  alt={item.name}
                  className="w-8 h-8 mr-2 rounded-full"
                /> */}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default History;
