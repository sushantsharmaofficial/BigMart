import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: 0,
  cartItemsData: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, actions) => {
      state.cartItemsData = [...state.cartItemsData, actions.payload];
    },
    removeCart: (state, payload) => {
      state.cartItemsData = state.cartItemsData.filter(
        (item) => item.id !== payload.payload
      );
    },
  },
});

export const { addToCart, updateCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
