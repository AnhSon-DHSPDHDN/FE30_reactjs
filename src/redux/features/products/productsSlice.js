import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    actAddProduct: (state, action) => {
      console.log(action, "action ne");
      state.products = [action.payload, ...state.products];
    },
  },
});

export const { actAddProduct } = productsSlice.actions;

export default productsSlice.reducer;
