import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1440px] mx-auto min-h-[calc(100vh-50px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
