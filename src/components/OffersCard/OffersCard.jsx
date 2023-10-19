import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./styles.css";

const OffersCard = ({ image, children }) => {
  return (
    <div className="img-box w-full md:max-w-xs shadow-md relative overflow-hidden rounded-lg">
      <img src={image} alt="" className="w-full md:max-w-xs h-80 md:h-96 rounded-lg" />
      <div className="offers-img absolute top-[-100%] left-0 w-full h-full bg-[#0f2416b7] rounded-lg"></div>
      <div className="absolute inset-0 bg-[#0f241671] rounded-lg"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {children}
        <button className="mt-4 my-bg-tertiary py-1 px-3 my-text-secondary font-semibold rounded-3xl flex gap-2 items-center hover:bg-gray-300 dark:hover:bg-gray-500 transition duration-200">
          Shop Now
          <BsArrowRight className="text-green-800 dark:text-gray-100 text-lg" />
        </button>
      </div>
    </div>
  );
};

export default OffersCard;
