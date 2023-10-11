import React from "react";
import { LiaTimesCircleSolid } from "react-icons/lia";
import NavItems from "../NavItems/NavItems";
import SearchField from "../SearchField/SearchField";

const Drawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-full md:w-1/2 py-4 my-bg-primary transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition duration-700 ease-in-out overflow-y-auto`}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-gray-700 dark:text-gray-300 p-1 my-bg-tertiary rounded-full shadow-md shadow-slate-900"
        >
          <LiaTimesCircleSolid size={24} />
        </button>
      </div>
      <p className="my-text-primary text-3xl font-semibold pl-6">ilisherBari</p>
      <div className="my-8">
        <SearchField />
      </div>
      <div>
        <NavItems></NavItems>
      </div>
    </div>
  );
};

export default Drawer;
