import { configureStore } from "@reduxjs/toolkit";
/** Reducer */
import keranjangReducer from './keranjang';

export default configureStore({
  reducer: {
    keranjang: keranjangReducer,
  }
})
