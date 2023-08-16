import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './services/cartslice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
})