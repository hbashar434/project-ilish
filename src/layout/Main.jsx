import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import CartBadge from "../components/CartBadge/CartBadge";

const Main = () => {
  return (
    <div>
      <Navbar />
      <CartBadge />
      <div className="max-w-[1440px] mx-auto min-h-[calc(100vh-50px)] pt-[4.5rem] md:pt-[8.3rem]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
