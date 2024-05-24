"use client";
import { useState } from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Image from "next/image";

const History = () => {
  const transactions = useSelector(
    (state: RootState) => state.history.transactions
  );

  console.log(transactions);

  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);

  const handleViewDetails = (transaction: any) => {
    setSelectedTransaction(transaction);
  };

  const handleCloseDetails = () => {
    setSelectedTransaction(null);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Transaction History</h1>
      {transactions.map((transaction: any, index: any) => (
        <div
          key={index}
          className="bg-gray-100 p-4 rounded-lg mb-4 flex items-center justify-between"
        >
          <div>
            <h2 className="text-lg font-semibold mb-2">
              Date: {transaction.date}
            </h2>
            {/* <p className="mb-2">Total Price: ${transaction.totalPrice}</p> */}
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            onClick={() => handleViewDetails(transaction)}
          >
            View Details
          </button>
        </div>
      ))}

      {/* Details Modal */}
      {selectedTransaction && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">
              Date: {selectedTransaction.date}
            </h2>

            {selectedTransaction.items.map((item: any, index: any) => (
              <div
                key={index}
                className="flex gap-3 items-center justify-between"
              >
                <div className="mask mask-squircle w-10 h-10 bg-white p-1 relative hidden md:block border">
                  <Image
                    src={item.img[0].sm}
                    fill
                    style={{ objectFit: "contain" }}
                    alt={item.title}
                  />
                </div>
                <p className="mb-2">{item.name}</p>
                <p className="mb-2">X {item.quantity}</p>
              </div>
            ))}
            <p className="mb-4 text-right font-bold py-2">
              Total Price: ${selectedTransaction.totalPrice}
            </p>

            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
              onClick={handleCloseDetails}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
