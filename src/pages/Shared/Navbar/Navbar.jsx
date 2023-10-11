import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaSignOutAlt,
  FaSignInAlt,
} from "react-icons/fa";
import SearchCategory from "../../../components/Nav/SearchCategory/SearchCategory";

const categories = ["Category 1", "Category 2", "Category 3"];

const Navbar = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(true);

  //TODO: this is for select/dropdown
  // const [selectedCategory, setSelectedCategory] = useState("");
  // const handleCategoryChange = (e) => {
  //   setSelectedCategory(e.target.value);
  // };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white text-xl font-semibold">
            Brand Name
          </Link>
        </div>
        <div className="relative group flex items-center">
          {/* TODO: here have another selector */}
          {/* <div>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="absolute bg-gray-100 rounded-full py-2 px-4 focus:outline-none focus:ring focus:border-gray-300 transition duration-300 inset-y-0 left-0 cursor-pointer"
            >
              <option value="">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div> */}
          <div className="">
            <SearchCategory />
          </div>
          <input
            type="text"
            placeholder="Search for fish..."
            className="bg-white rounded-full py-2 px-4 lg:pl-40 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 w-64 lg:w-[30rem]"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
            <FaSearch className="text-gray-400 group-hover:text-my-primary" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white">
            <FaShoppingCart className="text-xl" />
          </Link>
          {userLoggedIn ? (
            <button
              onClick={() => setUserLoggedIn(false)}
              className="text-white cursor-pointer"
            >
              <FaSignOutAlt className="text-xl" />
            </button>
          ) : (
            <Link to="/" className="text-white flex items-center gap-2">
              <FaSignInAlt className="text-xl" />
              Sign In
            </Link>
          )}
        </div>
      </div>
      <hr className="my-4" />
      <div className="container mx-auto text-center">
        <ul className="flex space-x-4 justify-center">
          {" "}
          {/* Center align navigation items */}
          <NavItem to="/" label="Home" />
          <NavItem to="/" label="About" />
          <NavItem to="/" label="Products" />
          <NavItem to="/" label="Contact" />
          <NavItem to="/" label="Blog" />
          {/* Add more navigation items as needed */}
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ to, label }) => {
  return (
    <li>
      <Link to={to} className="text-white hover:text-gray-300">
        {label}
      </Link>
    </li>
  );
};

export default Navbar;
