import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BE_URL } from "../../../constants/config";

const initialState = {
  user: {},
  accessToken: "",
  isLoading: false,
  error: {},
};

const fetchLogin = createAsyncThunk("users/fetchLogin", async (payload) => {
  const reps = await axios.post(`${BE_URL}login`, payload);
  return reps.data;
});

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.error = {};
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
  },
});

export const { pending, login, loginSuccess } = usersSlice.actions;

export default usersSlice.reducer;
