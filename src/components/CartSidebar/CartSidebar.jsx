import React from "react";
import { LiaTimesCircleSolid } from "react-icons/lia";
import CartItem from "../CartItem/CartItem";

const CartSidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed z-20 h-screen top-[72px] md:top-[133px]  right-0 w-full md:w-1/4 py-4 my-bg-tertiary transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition duration-700 ease-in-out`}
    >
      <div className="flex justify-between mx-4 mb-4">
        <p className="my-text-primary text-3xl font-semibold">Item</p>
        <button
          onClick={onClose}
          className="text-gray-700 dark:text-gray-100 p-2 bg-gray-100 dark:bg-gray-400 rounded-full shadow-md shadow-slate-900"
        >
          <LiaTimesCircleSolid size={24} />
        </button>
      </div>
      <div className="overflow-y-scroll h-[330px]">
        <CartItem />
      </div>
      <div className="flex justify-center">
      <button className="w-4/5 my-4 rounded-md bg-emerald-500 py-2 font-bold text-blue-50 hover:bg-emerald-600">Place Order</button>
      </div>
    </div>
  );
};

export default CartSidebar;
