import React from "react";
import SearchCategory from "../../NavCollection/SearchCategory/SearchCategory";
import { FaSearch } from "react-icons/fa";

const SearchField = () => {
  return (
    <div className="relative group flex items-center px-6 md:px-0">
      <div className="hidden md:block">
        <SearchCategory />
      </div>
      <input
        type="text"
        placeholder="Search for fish..."
        className="my-bg-tertiary rounded-full py-2 px-4 md:pl-40 lg:pl-44 focus:outline-none ring ring-emerald-600 dark:ring-emerald-900 focus:border-indigo-500 transition duration-300 w-72 md:w-96 lg:w-[40rem]"
      />
      <div className="absolute inset-y-0 right-6 md:right-0 flex items-center pr-4 cursor-pointer my-bg-secondary rounded-e-full pl-3">
        <FaSearch className="my-text-primary hover:text-green-600" />
      </div>
    </div>
  );
};

export default SearchField;
