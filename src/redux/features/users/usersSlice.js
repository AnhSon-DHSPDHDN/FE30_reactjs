import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  BE_URL,
  KEY_ACCESS_TOKEN,
  KEY_IS_LOGGED,
} from "../../../constants/config";
import * as Jwt from "jsonwebtoken";
import { fetchInfoMe } from "../../../apis/userApi";

const initialState = {
  user: {},
  accessToken: localStorage.getItem(KEY_ACCESS_TOKEN) || "",
  isLoading: false,
  isLogged: JSON.parse(localStorage.getItem(KEY_IS_LOGGED)) || false, // Cache lại trạng thái login tránh hiện tượng rerender lại trang
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
    actGetMe: (state, action) => {
      state.user = action.payload;
    },
    loginSuccess: (state, action) => {
      localStorage.setItem(KEY_IS_LOGGED, JSON.stringify(true));
      state.isLogged = true;
    },
    actLogout: (state, action) => {
      localStorage.removeItem(KEY_ACCESS_TOKEN);
      localStorage.setItem(KEY_IS_LOGGED, JSON.stringify(false));
      state.isLogged = false;
      state.user = {};
      state.accessToken = "";
    },
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
      const { user, accessToken } = action.payload;
      if (accessToken) {
        state.user = user;
        state.accessToken = accessToken;
        state.isLogged = true;
        localStorage.setItem(KEY_IS_LOGGED, JSON.stringify(true));
        localStorage.setItem(KEY_ACCESS_TOKEN, accessToken);
      }
      state.isLoading = false;
    });
  },
});

export const actReLogin = (accessToken) => async (dispatch) => {
  try {
    const decodeToken = Jwt.decode(accessToken); // Jwt import tu jsonwebtoken. => Decode duoc thong tin user
    if (decodeToken?.email) {
      const repsInfo = await fetchInfoMe(decodeToken.email);
      const infoUser = repsInfo?.data?.[0];
      delete infoUser.password; // Delete field Password
      dispatch(actGetMe(infoUser)); // Using middleware => dispatch lay thong tin user khi co data
      dispatch(loginSuccess()); // Middleware => Update status login success
    }
  } catch (error) {
    console.log(error);
  }
};

export const { actGetMe, loginSuccess, actLogout } = usersSlice.actions;

export default usersSlice.reducer;
