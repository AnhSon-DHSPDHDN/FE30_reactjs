import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BE_URL, KEY_ACCESS_TOKEN } from "../../../constants/config";
import * as Jwt from "jsonwebtoken";

const initialState = {
  user: {},
  accessToken: localStorage.getItem(KEY_ACCESS_TOKEN) || "",
  isLoading: false,
  isLogged: false,
  error: {},
};

export const fetchLogin = createAsyncThunk(
  "users/fetchLogin",
  async (payload) => {
    const reps = await axios.post(`${BE_URL}login`, payload);
    return reps.data;
  }
);

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    actGetMe: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.error = {};
      state.isLoading = false;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      console.log(action.payload);
      const { user, accessToken } = action.payload;
      if (accessToken) {
        state.user = user;
        state.accessToken = accessToken;
        state.isLogged = true;
        localStorage.setItem(KEY_ACCESS_TOKEN, accessToken);
      }
      state.isLoading = false;
    });
  },
});

export const actReLogin = (accessToken) => async (dispatch) => {
  try {
    // const decodeToken = decode(accessToken);
    console.log(accessToken, "inside redux");
    // console.log(decodeToken);
  } catch (error) {
    console.log(error);
  }
};

export const {} = usersSlice.actions;

export default usersSlice.reducer;
