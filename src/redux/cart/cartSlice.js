import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartHidden(cart, action) {
      cart.hidden = !cart.hidden;
    },
    addItem(cart, action) {
      cart.cartItems = addItemToCart(cart.cartItems, action.payload);
    },
    removeItem(cart, action) {
      cart.cartItems = removeItemFromCart(cart.cartItems, action.payload);
    },
    clearItemFromCart(cart, action) {
      cart.cartItems = cart.cartItems.filter(
        cartItem => cartItem.id !== action.payload.id
      );
    },
  },
});

export const { toggleCartHidden, addItem, removeItem, clearItemFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
