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
      const itemId = action.payload; // Get the item's id from the payload

      // Check if the item already exists in the cart
      const existingItem = state.cart.find((item) => item.id === itemId);

      if (existingItem) {
        // If the item already exists, update its quantity
        existingItem.quantity += 1;
      } else {
        // If it's a new item, add it to the cart with quantity 1
        const newItem = { id: itemId, quantity: 1 };
        state.cart.push(newItem);
      }
      // Update local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;

      // Remove the item from the cart
      state.cart = state.cart.filter((item) => item.id !== itemId);

      // Update local storage with the modified cart data
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToIncrement = state.cart.find((item) => item.id === itemId);

      if (itemToIncrement) {
        itemToIncrement.quantity += 1;

        // Update local storage with the modified cart data
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },

    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToDecrement = state.cart.find((item) => item.id === itemId);

      if (itemToDecrement) {
        if (itemToDecrement.quantity === 1) {
          // If quantity is 1, remove the item from the cart
          state.cart = state.cart.filter((item) => item.id !== itemId);
        } else {
          itemToDecrement.quantity -= 1;
        }

        // Update local storage with the modified cart data
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
