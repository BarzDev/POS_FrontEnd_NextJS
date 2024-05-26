"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Loading } from "../ui/loading";
import { apiMongo } from "@/app/api/mongo";

const History = () => {
  const [transactions, setTransaction] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHistory = async () => {
    try {
      setLoading(true);
      const response = await apiMongo.get("/transaction");
      // console.log(response);
      const data = response.data;
      setTransaction(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching transaction history:", error);
      setLoading(false);
    }
  };

  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);

  const handleViewDetails = (transaction: any) => {
    setSelectedTransaction(transaction);
  };

  const handleCloseDetails = () => {
    setSelectedTransaction(null);
  };

  useEffect(() => {
    fetchHistory();
  }, []);

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
            <div className="max-h-64 overflow-auto">
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
                  <p className="mb-2 text-left bg-gray-200 w-96">{item.name}</p>
                  <p className="mb-2">X {item.quantity}</p>
                </div>
              ))}
            </div>

            <p className="m-2 text-right font-bold py-2">
              Total Price: ${selectedTransaction.totalPrice}
            </p>

            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg "
              onClick={handleCloseDetails}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {loading && <Loading height="50vh" width="60vw" />}
    </div>
  );
};

export default History;
