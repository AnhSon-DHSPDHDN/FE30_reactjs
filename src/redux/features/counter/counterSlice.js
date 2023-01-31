import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    actUpdateInputCount: (state, action) => {
      const payload = Number(action.payload);
      state.count = payload;
    },
  },
});

export const { increment, decrement, actUpdateInputCount } =
  counterSlice.actions;

export default counterSlice.reducer;
