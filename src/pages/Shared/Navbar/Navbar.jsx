import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggler from "../../../utilities/ThemeToggler/ThemeToggler";
import SearchField from "../../../components/NavCollection/SearchField/SearchField";
import NavItems from "../../../components/NavCollection/NavItems/NavItems";
import {
  FaSignOutAlt,
  FaSignInAlt,
  FaBars,
} from "react-icons/fa";
import Drawer from "../../../components/NavCollection/Drawer/Drawer";

const Navbar = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(true);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="my-bg-primary p-4 w-full fixed z-10">
      <div className="max-w-[1440] max-h-[70px] md:max-h-[120px] mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => toggleDrawer()}
            className=" md:hidden text-white cursor-pointer"
          >
            <FaBars className="text-xl" />
          </button>
          <Link
            to="/"
            className="text-white text-lg md:text-xl lg:text-3xl font-semibold font-my-serif"
          >
            ilisherBari
          </Link>
        </div>
        <div className=" hidden md:block">
          <SearchField />
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          {userLoggedIn ? (
            <button
              onClick={() => setUserLoggedIn(false)}
              className="text-white cursor-pointer my-text-primary"
            >
              <FaSignOutAlt className="text-xl" />
            </button>
          ) : (
            <Link to="/" className="my-text-secondary flex items-center gap-2">
              <FaSignInAlt className="text-xl" />
              Sign In
            </Link>
          )}
          <div>
            <ThemeToggler />
          </div>
        </div>
      </div>
      <p className="my-4 hidden border-b-[.1rem] md:block border-gray-300 dark:border-gray-500" />
      <div className="hidden md:block">
        <NavItems></NavItems>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </nav>
  );
};

export default Navbar;
