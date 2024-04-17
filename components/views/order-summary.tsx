"use client";

import { usePriceState } from "@/states";

export const OrderSummery = () => {
  const price = usePriceState((state) => state.price);

  return (
    <div className="p-4 bg-green-50 mb-4 border border-black rounded-md flex flex-col gap-y-4 w-full">
      <h2 className="text-lg font-bold">Your Order</h2>
      <div className="flex justify-between items-center">
        <p className="text-lg font-medium">Product</p>
        <p className="text-lg font-medium">Subtotal</p>
      </div>
      <div className="bg-gray-300 bg-opacity-25 w-full h-1"></div>
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">Gir Kesar Mangoes 10 Kg</p>
        <p className="text-lg font-medium">
          ₹{(price.a3 * 10).toLocaleString() + ".00"}
        </p>
      </div>
      <div className="bg-gray-300 bg-opacity-25 w-full h-1"></div>
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">Subtotal</p>
        <p className="text-lg font-medium">
          ₹{(price.a3 * 10).toLocaleString() + ".00"}
        </p>
      </div>
      <div className="bg-gray-300 bg-opacity-25 w-full h-1"></div>
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">Total</p>
        <p className="text-lg font-medium">
          ₹{(price.a3 * 10).toLocaleString() + ".00"}
        </p>
      </div>
      <div className="bg-gray-300 bg-opacity-25 w-full h-1"></div>
      <div className="w-fit bg-gray-300 bg-opacity-30 flex items-center gap-x-2 px-3 py-2 rounded-full">
        <div className="bg-blue-500 w-4 h-4 rounded-full"></div>
        <span className="text-sm font-medium">Cash on Delivery</span>
      </div>
    </div>
  );
};
