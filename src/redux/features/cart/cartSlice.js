import { createSlice } from "@reduxjs/toolkit";

// Initialize the cart state with data from local storage
const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  cart: initialCart,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cart.find((item) => item._id === itemId);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newItem = { _id: itemId, quantity: 1 };
        state.cart.push(newItem);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((item) => item._id !== itemId);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToIncrement = state.cart.find((item) => item._id === itemId);

      if (itemToIncrement) {
        itemToIncrement.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },

    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToDecrement = state.cart.find((item) => item._id === itemId);

      if (itemToDecrement) {
        if (itemToDecrement.quantity === 1) {
          state.cart = state.cart.filter((item) => item._id !== itemId);
        } else {
          itemToDecrement.quantity -= 1;
        }
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
