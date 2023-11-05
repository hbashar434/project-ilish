import React, { useState } from "react";
import CartSidebar from "../CartSidebar/CartSidebar";

const CartBadge = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <div
        onClick={() => handleToggleCart()}
        className="fixed z-10 right-0 top-2/3 transform -translate-y-1/2 text-white bg-teal-700 rounded-sm  grid  justify-center items-center p-4 cursor-pointer"
      >
        <div className="">01 Item</div>
        <div className="">Taka 01</div>
      </div>
      <CartSidebar isOpen={isCartOpen} onClose={handleToggleCart} />
    </div>
  );
};

export default CartBadge;
