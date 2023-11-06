import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../../redux/features/cart/cartApi";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../redux/features/cart/cartSlice";

const CartItem = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const { data: productsData, isError, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading product data.</div>;
  }

  // Combine product details with cart data
  const cartItems = cart.map((cartItem) => {
    const product = productsData.find((item) => item._id === cartItem._id);
    return {
      ...cartItem,
      ...product,
    };
  });

  const handleIncrement = (_id) => {
    dispatch(incrementQuantity(_id));
  };
  const handleDecrement = (_id) => {
    dispatch(decrementQuantity(_id));
  };

  const handleRemoveItem = (_id) => {
    dispatch(removeFromCart(_id));
  };

  return (
    <div className="my-6">
      {cartItems.map((item) => (
        <div
          key={item._id}
          className="mb-1 bg-white p-1 shadow-md flex justify-between"
        >
          <img src={item.image} alt="product-image" className="w-24 rounded" />
          <div className="ml-2 flex w-full justify-between">
            <div className="mt-0">
              <h2 className=" text-base font-semibold  text-gray-800">
                {item.product_name}
              </h2>
              <p className="mt-1 text-xs text-gray-700">
                Price: {item.price} BDT
              </p>
              <p className="mt-1 text-xs text-gray-700">
                Ratings: {item.rating}
              </p>
            </div>
            <div className="mt-0 ml-1 space-y-4 block">
              <div className="flex items-center border-gray-100">
                <span
                  className="cursor-pointer rounded-l  py-1 px-3.5 duration-100 bg-teal-500 hover:text-blue-50"
                  onClick={() => handleDecrement(item._id)}
                >
                  -
                </span>
                <span className="py-1 px-3.5 border bg-white text-center">
                  {item.quantity}
                </span>
                <span
                  className="cursor-pointer rounded-r  py-1 px-3 duration-100 bg-teal-500 hover:text-blue-50"
                  onClick={() => handleIncrement(item._id)}
                >
                  +
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-sm">BDT {item.price * item.quantity}</p>
                <span onClick={() => handleRemoveItem(item._id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
