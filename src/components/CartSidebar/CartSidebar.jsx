import React from "react";
import { LiaTimesCircleSolid } from "react-icons/lia";
import { HiChevronDoubleRight } from "react-icons/hi";

const CartSidebar = ({ isOpen, onClose }) => {
  return (
    <section className="">
      <div
        className={`fixed z-20 h-screen top-[72px] md:top-[133px]  right-0 w-full md:w-1/4 py-4 my-bg-tertiary transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition duration-700 ease-in-out overflow-y-auto`}
      >
        <div className="flex justify-between mx-4">
          <p className="my-text-primary text-3xl font-semibold">Item</p>
          <button
            onClick={onClose}
            className="text-gray-700 dark:text-gray-100 p-2 bg-gray-100 dark:bg-gray-400 rounded-full shadow-md shadow-slate-900"
          >
            <LiaTimesCircleSolid size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartSidebar;
